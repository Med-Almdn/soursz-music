import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { z, ZodError } from "zod";
import { randomUUID } from "crypto";

type Role = "artist" | "curator";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string; // stored lowercase
  passwordHash: string;
  role: Role;
  createdAt: string;
};

// TEMP in-memory store (replace with DB later)
const USERS: User[] = [];

const signupSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  email: z.string().trim().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["artist", "curator"]).optional().default("artist"),
});

export async function signup(req: Request, res: Response) {
  try {
    const data = signupSchema.parse(req.body);
    const email = data.email.toLowerCase();

    const exists = USERS.some((u) => u.email === email);
    if (exists) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const passwordHash = await bcrypt.hash(data.password, 10);

    const user: User = {
      id: randomUUID(),
      firstName: data.firstName,
      lastName: data.lastName,
      email,
      passwordHash,
      role: data.role,
      createdAt: new Date().toISOString(),
    };

    USERS.push(user);

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      return res.status(500).json({ message: "JWT_SECRET is not set" });
    }

    const token = jwt.sign(
      { sub: user.id, email: user.email, role: user.role },
      secret,
      { expiresIn: "7d" }
    );

    return res.status(201).json({
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (err) {
    if (err instanceof ZodError) {
        return res.status(400).json({
            message: "Invalid data",
            errors: err.issues,
        });
    }
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1),
});

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = loginSchema.parse(req.body);
    const normalizedEmail = email.toLowerCase();

    const user = USERS.find((u) => u.email === normalizedEmail);
    if (!user) return res.status(401).json({ message: "Invalid email or password" });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ message: "Invalid email or password" });

    const secret = process.env.JWT_SECRET;
    if (!secret) return res.status(500).json({ message: "JWT_SECRET is not set" });

    const token = jwt.sign(
      { sub: user.id, email: user.email, role: user.role },
      secret,
      { expiresIn: "7d" }
    );

    return res.json({
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (err) {
    if (err instanceof ZodError) {
      return res.status(400).json({ message: "Invalid data", errors: err.issues });
    }
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}
