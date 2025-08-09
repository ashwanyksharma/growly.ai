import * as React from "react"
import type { ToastActionElement, ToastProps } from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000 // long delay before auto-removal

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const ActionTypes = {
  ADD: "ADD_TOAST",
  UPDATE: "UPDATE_TOAST",
  DISMISS: "DISMISS_TOAST",
  REMOVE: "REMOVE_TOAST",
} as const

let toastCounter = 0
function createId() {
  toastCounter = (toastCounter + 1) % Number.MAX_SAFE_INTEGER
  return toastCounter.toString()
}

type ActionType = typeof ActionTypes
type Action =
  | { type: ActionType["ADD"]; toast: ToasterToast }
  | { type: ActionType["UPDATE"]; toast: Partial<ToasterToast> }
  | { type: ActionType["DISMISS"]; toastId?: string }
  | { type: ActionType["REMOVE"]; toastId?: string }

interface State {
  toasts: ToasterToast[]
}

const toastTimers = new Map<string, ReturnType<typeof setTimeout>>()

function queueToastRemoval(toastId: string) {
  if (toastTimers.has(toastId)) return

  const timeout = setTimeout(() => {
    toastTimers.delete(toastId)
    dispatch({ type: ActionTypes.REMOVE, toastId })
  }, TOAST_REMOVE_DELAY)

  toastTimers.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.ADD:
      return { ...state, toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT) }

    case ActionTypes.UPDATE:
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      }

    case ActionTypes.DISMISS: {
      const { toastId } = action
      if (toastId) queueToastRemoval(toastId)
      else state.toasts.forEach((t) => queueToastRemoval(t.id))

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          !toastId || t.id === toastId ? { ...t, open: false } : t
        ),
      }
    }

    case ActionTypes.REMOVE:
      return {
        ...state,
        toasts: action.toastId
          ? state.toasts.filter((t) => t.id !== action.toastId)
          : [],
      }
  }
}

const listeners: Array<(state: State) => void> = []
let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => listener(memoryState))
}

type Toast = Omit<ToasterToast, "id">

function toast(props: Toast) {
  const id = createId()

  const update = (toast: ToasterToast) => dispatch({ type: ActionTypes.UPDATE, toast: { ...toast, id } })
  const dismiss = () => dispatch({ type: ActionTypes.DISMISS, toastId: id })

  dispatch({
    type: ActionTypes.ADD,
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => !open && dismiss(),
    },
  })

  return { id, dismiss, update }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) listeners.splice(index, 1)
    }
  }, [])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: ActionTypes.DISMISS, toastId }),
  }
}

export { useToast, toast }
