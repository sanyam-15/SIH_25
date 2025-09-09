"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function UserProfilePage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // ✅ Check for token on mount
    const token = localStorage.getItem("userToken");
    if (!token) {
      router.push("/login"); // redirect if not logged in
    } else {
      // Example: fetch user details from API
      fetch("/api/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch(() => {
          localStorage.removeItem("userToken");
          router.push("/login");
        });
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    router.push("/login");
  };

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center text-lg text-gray-600">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl border border-blue-200"
      >
        {/* Header */}
        <div className="flex flex-col items-center space-y-3 mb-6">
          <Image
            src={user.avatar || "/images/user-avatar.png"}
            alt="User Avatar"
            width={90}
            height={90}
            className="rounded-full border-2 border-blue-400 shadow-md"
          />
          <h1 className="text-2xl font-bold text-blue-800">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>

        {/* Profile Details */}
        <div className="space-y-3 text-gray-700">
          <p><span className="font-semibold">Phone:</span> {user.phone || "N/A"}</p>
          <p><span className="font-semibold">Joined:</span> {new Date(user.createdAt).toLocaleDateString()}</p>
          <p><span className="font-semibold">Role:</span> {user.role || "User"}</p>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => router.push("/edit-profile")}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700"
          >
            Edit Profile
          </button>
          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-500 px-4 py-2 text-white font-medium hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </motion.div>
    </div>
  );
}
