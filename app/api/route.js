import connectDB from "@/libs/db"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"
import User from "@/models/userModel"

export async function GET(req) {
	await connectDB()
	const hashed = await bcrypt.hash("040825", 8)
	console.log(hashed)
	const res = await User.create({ name: "jihun", email: "saramjh@gmail.com", password: hashed })
	return NextResponse.json({ res }, { status: 200 })
}

export async function POST(req) {
	const { email, password } = await req.json()
	await connectDB()
	const user = await User.findOne({ email })
	if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 })
	const isMatch = await bcrypt.compare(password, user.password)
	if (!isMatch) return NextResponse.json({ message: "Password is incorrect" }, { status: 400 })
	return NextResponse.json({ message: "Login success" }, { status: 200 })
}
