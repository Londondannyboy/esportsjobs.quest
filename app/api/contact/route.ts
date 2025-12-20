import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, jobType, message } = body;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Log the submission (in production, you'd save to database)
    console.log("Contact form submission:", {
      name,
      email,
      company,
      jobType,
      message,
      timestamp: new Date().toISOString(),
    });

    // In production, you would:
    // 1. Save to database (e.g., Neon PostgreSQL)
    // 2. Send email notification
    // 3. Add to CRM

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
