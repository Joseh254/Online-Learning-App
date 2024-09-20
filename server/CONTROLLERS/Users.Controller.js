import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
export async function Signup(request, response) {
  try {
    const { first_name, second_name, last_name, email, phone, password, role } =
      request.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.users.create({
      data: {
        first_name,
        second_name,
        last_name,
        email,
        password: hashedPassword,
        phone,
        role,
      },
    });

    return response.status(201).json({ success: true, user });
  } catch (error) {
    console.error("Error during user signup:", error.message);
    return response
      .status(500)
      .json({ success: false, message: "Internal server error!" });
  }
}

// ******************************************************************************
export async function signin(request, response) {
  response.send("loggin in user");
}

// ******************************************************************************
export async function Update(request, response) {
  response.send("updating user details");
}

// ******************************************************************************
export async function Delete(request, response) {
  response.send("deleting user");
}

// ******************************************************************************
