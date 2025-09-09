"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image"; 
import LiquidEther from "../../components/core/LiquidEther";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Invalid credentials");
      } else {
        localStorage.setItem("adminToken", data.token);
        router.push("/admin/dashboard");
      }
    } catch (err) {
      console.error(err);
      setError("Server error, please try again later");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* LiquidEther Background */}
      <div className="absolute inset-0 -z-10">
        <LiquidEther
          colors={["#10B981", "#34D399", "#6EE7B7"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Decorative Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('/images/jharkhand-bg.jpg')] bg-cover bg-center -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 -z-10"></div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full max-w-md rounded-2xl bg-white/90 backdrop-blur-md p-8 shadow-2xl border border-emerald-300"
      >
        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          {/* Official Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="Jharkhand Tourism Logo"
              width={48}
              height={48}
              className="rounded-md"
              priority
            />
            <h1 className="text-2xl font-extrabold text-emerald-800">
              Jharkhand Tourism
            </h1>
          </div>
          <h2 className="mt-4 text-xl text-gray-800 font-semibold">
            Admin Portal Login
          </h2>
          <p className="text-sm text-gray-500 italic">Authorized Access Only</p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Admin Email
            </label>
            <input
              type="email"
              placeholder="admin@jharkhandtourism.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border px-4 py-2 bg-white/80 text-gray-800 shadow-sm focus:border-emerald-600 focus:ring-2 focus:ring-emerald-300 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter secure password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border px-4 py-2 bg-white/80 text-gray-800 shadow-sm focus:border-emerald-600 focus:ring-2 focus:ring-emerald-300 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-emerald-600 to-yellow-500 py-2 text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-gray-600">
          Jharkhand Tourism © {new Date().getFullYear()} <br />
          <span className="text-emerald-700 font-medium">Incredible India ✨</span>
        </div>
      </motion.div>
    </div>
  );
}
