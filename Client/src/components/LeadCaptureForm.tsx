import React, { useState } from "react";
import {
  CheckCircle,
  Loader2,
  Mail,
  Phone,
  User,
  Building2,
  MessageSquare,
} from "lucide-react";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  businessType?: string;
  message?: string;
}

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const businessOptions = [
    { value: "", label: "Select your business type" },
    { value: "freelancer", label: "Freelancer" },
    { value: "coach", label: "Coach" },
    { value: "small-business", label: "Small Business" },
    { value: "ecommerce", label: "Ecommerce" },
  ];

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) => {
    const digits = phone.replace(/\D/g, "");
    return /^[\+]?[\d\s\-\(\)]+$/.test(phone) && digits.length >= 10;
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email))
      newErrors.email = "Please enter a valid email";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!validatePhone(formData.phone))
      newErrors.phone = "Please enter a valid phone number";

    if (!formData.businessType)
      newErrors.businessType = "Please select a business type";

    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/leads", formData);
      setSubmitted(true);

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessType: "",
          message: "",
        });
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error("Form submission failed:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-card p-8 text-center">
            <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Thanks for reaching out!
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We’ll get back to you within 24 hours with your demo details.
            </p>
            <p className="text-sm text-muted-foreground">
              Check your email for confirmation.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Book Your <span className="gradient-text">Free Demo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See Growly in action! Get a personalized demo and discover how to
            speed up your ad creation.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-card p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              {
                id: "name",
                label: "Full Name *",
                icon: <User size={16} className="inline mr-2" />,
                type: "text",
                placeholder: "Enter your full name",
              },
              {
                id: "email",
                label: "Email Address *",
                icon: <Mail size={16} className="inline mr-2" />,
                type: "email",
                placeholder: "Enter your email address",
              },
              {
                id: "phone",
                label: "Phone Number *",
                icon: <Phone size={16} className="inline mr-2" />,
                type: "tel",
                placeholder: "Enter your phone number",
              },
            ].map(({ id, label, icon, type, placeholder }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {icon}
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={formData[id as keyof FormData]}
                  onChange={handleChange}
                  className={`form-input ${
                    errors[id as keyof FormErrors]
                      ? "border-destructive focus:ring-destructive"
                      : ""
                  }`}
                  placeholder={placeholder}
                />
                {errors[id as keyof FormErrors] && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors[id as keyof FormErrors]}
                  </p>
                )}
              </div>
            ))}

            <div>
              <label
                htmlFor="businessType"
                className="block text-sm font-medium text-foreground mb-2"
              >
                <Building2 size={16} className="inline mr-2" />
                Business Type *
              </label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className={`form-select ${
                  errors.businessType
                    ? "border-destructive focus:ring-destructive"
                    : ""
                }`}
              >
                {businessOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.businessType && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.businessType}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                <MessageSquare size={16} className="inline mr-2" />
                Tell us about your business *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`form-input resize-none ${
                  errors.message
                    ? "border-destructive focus:ring-destructive"
                    : ""
                }`}
                placeholder="Share your business details and goals..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-hero flex items-center justify-center disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  "Book My Free Demo"
                )}
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                We respect your privacy. Your details are safe with us.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
