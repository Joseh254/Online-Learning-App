import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
export async function Signup(request, response) {
  try {
    const { first_name, second_name, last_name, email, phone, password, role } =
      request.body;
    if (
      !first_name ||
      !second_name ||
      !last_name ||
      !email ||
      !phone ||
      !password ||
      !role
    ) {
      return response
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const existingUser = await prisma.users.findUnique({
      where: { email:email },
    });
    if (existingUser) {
      return response.status(400).json({
        success: false,
        message: "User with the email already exists",
      });
    }
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
    response.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error.message);
    response
      .status(500)
      .json({ success: false, message: "internal server error!" });
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
