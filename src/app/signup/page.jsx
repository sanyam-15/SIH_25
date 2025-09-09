"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong!");
      } else {
        setSuccess("Account created successfully! Redirecting...");
        setForm({ name: "", email: "", password: "", confirmPassword: "" });

        setTimeout(() => {
          router.push("/login");
        }, 1500);
      }
    } catch (err) {
      console.error(err);
      setError("Server error, please try again later.");
    }
  };

  return (
<div className="flex items-center justify-center min-h-screen bg-[#f3f3f3] px-4">
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden"
  >
    <div className="hidden md:flex relative w-1/2 h-auto bg-[#fffce4] items-center justify-center">
      <Image
        src="/images/canva.png"
        alt="Jharkhand Tourism"
        fill
        className="object-contain"
        priority
      />
    </div>

    {/* Right Form */}
    <div className="w-full md:w-1/2 px-6 py-8 md:py-12 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
            {/* Logo & Header */}
            <div className="flex flex-col items-center mb-6">
              <Image
                src="/images/logo.png"
                alt="Jharkhand Logo"
                width={60}
                height={60}
              />
              <h1 className="mt-3 text-2xl font-bold text-emerald-700">
                Jharkhand Tourism
              </h1>
              <h2 className="mt-2 text-lg text-gray-700 font-semibold">
                Signup Portal
              </h2>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-600 text-sm">{success}</p>}

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="mt-1 w-full text-black rounded-lg border px-4 py-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="mt-1 w-full text-black rounded-lg border px-4 py-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className="mt-1 w-full rounded-lg text-black border px-4 py-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="mt-1 w-full rounded-lg text-black border px-4 py-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-emerald-600 py-2 text-white font-medium shadow-md hover:bg-emerald-700 transition"
              >
                Create Account
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-emerald-600 font-medium hover:underline"
              >
                Sign in
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
