import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function ValidateUser(request, response, next) {
  try {
    const { first_name, second_name, last_name, email, phone, password, role } =
      request.body;

    // Check if all required fields are provided
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

    // Validate email format
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid email format" });
    }

    // Validate phone format
    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(phone)) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid phone number format" });
    }

    // Check for existing user by phone OR email in one query
    const existingUser = await prisma.users.findFirst({
      where: {
        OR: [{ phone: phone }, { email: email }],
      },
    });

    // Handle if the user already exists by phone or email
    if (existingUser) {
      if (existingUser.phone === phone) {
        return response
          .status(400)
          .json({ success: false, message: "Phone number already taken" });
      } else if (existingUser.email === email) {
        return response
          .status(400)
          .json({
            success: false,
            message: "User with the email already exists",
          });
      }
    }

    // Proceed to the next middleware or controller
    next();
  } catch (error) {
    console.error("Error in ValidateUser middleware:", error.message);
    return response
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}
