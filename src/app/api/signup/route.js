import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();

    const { name, email, password, confirmPassword } = await req.json();

    if (!name || !email || !password || !confirmPassword)
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });

    if (password !== confirmPassword)
      return new Response(JSON.stringify({ error: "Passwords do not match" }), { status: 400 });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return new Response(JSON.stringify({ error: "Email already registered" }), { status: 409 });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ name, email, password: hashedPassword });

    return new Response(
      JSON.stringify({ message: "Account created successfully!", name: newUser.name }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Signup error:", err);
    return new Response(JSON.stringify({ error: err.message || "Server error" }), { status: 500 });
  }
}
