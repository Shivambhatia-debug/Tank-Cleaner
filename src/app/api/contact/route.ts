import { NextRequest, NextResponse } from "next/server";

const GOOGLE_APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;

interface FormData {
  name: string;
  phone: string;
  email?: string;
  service: string;
  message: string;
  timestamp: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: FormData = await request.json();

    // Send to Google Apps Script (which saves to Google Sheets)
    if (GOOGLE_APPS_SCRIPT_URL) {
      try {
        await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
      } catch (scriptError) {
        console.error("Google Apps Script error:", scriptError);
      }
    }

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { success: false, message: "Error submitting form" },
      { status: 500 }
    );
  }
}
