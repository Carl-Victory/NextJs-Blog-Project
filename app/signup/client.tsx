"use client";
import { useState } from "react";
import Joi from "joi";

const schema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().min(6).required(),
});

interface SignupFormData {
  name: string;
  email: string;
  password: string;
}

export default function ClientSignupForm() {
  // Form state
  const [formData, setFormData] = useState<SignupFormData>({
    name: "",
    email: "",
    password: "",
  });
  // Error and success states
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Handle input field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate with Joi
    const { error } = schema.validate(formData);
    if (error) {
      setError(error.details[0].message);
      return;
    }

    try {
      console.log("Form Submitted", formData);

      setSuccess("Signup successful!");
      setError(null);

      // Reset form after submit
      setFormData({ name: "", email: "", password: "" }); // reset
    } catch (err) {
      setError("Failed to sign up. Please try again.");
      setSuccess(null);
      console.error("Signup failed", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full p-2 border rounded"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-2 border rounded"
      />

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className="w-full p-2 border rounded"
      />

      {error && <p className="text-red-600">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        Sign Up
      </button>
    </form>
  );
}
