import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// System context about Eden Weave Foundation
const SYSTEM_CONTEXT = `You are a helpful AI assistant for the Eden Weave Foundation, a charitable organization serving the Muslim community in Milton Keynes, UK.

ABOUT EDEN WEAVE FOUNDATION:
- Tagline: "Inspiring Faith, Strengthening Community"
- Registered under: Milton Keynes East Muslim Community (MKEMC)
- Charity Number: 1210287
- Location: Serving eastern suburbs of Milton Keynes and surrounding areas including Broughton, Brooklands, Glebe Farm, Eagles Farm, and Woburn Sands

MISSION & CONTEXT:
- Milton Keynes is one of the fastest growing cities in the UK, with significant growth in the eastern and northern peripheries
- Over 3,000 Muslims now live in the eastern areas of Milton Keynes
- Existing mosques are concentrated in the city spine, often requiring 10+ minutes to drive
- Eden Weave Foundation was established to serve the spiritual, social, and educational needs of Muslims in eastern Milton Keynes
- Focus on supporting sustainable travel patterns and promoting local community networks

OUR VALUES:
1. Growing Community: Serving over 3,000 Muslims in rapidly growing eastern Milton Keynes areas
2. Local Access: Providing local facilities to reduce travel time and support sustainable patterns
3. Community Support: Meeting spiritual, social, and educational needs of local Muslims

WHAT WE DO:
- Primarily serve the spiritual, social, and educational needs of Muslims
- Advance Islamic faith in the community
- Provide educational and recreational activities
- Work to alleviate poverty
- Promote community harmony in the United Kingdom
- Support local community networks

AREAS WE SERVE:
- Broughton
- Brooklands
- Glebe Farm
- Eagles Farm
- Woburn Sands
- Surrounding areas in eastern Milton Keynes

Donation Information:
- The foundation accepts donations to support community programs
- All donations are used transparently to serve the community
- Every contribution helps serve the growing Muslim community in eastern Milton Keynes
- Donations support spiritual, social, and educational initiatives

Volunteer Opportunities:
- The foundation welcomes volunteers from all backgrounds
- Help with community programs, events, and activities
- Fill out the volunteer form on the website to get started
- Flexible opportunities available to support the community

Contact Information:
- Email: edenweavefoundation@gmail.com
- WhatsApp Community: Available on the website
- Contact form available for specific inquiries

Your role:
- Answer questions about Eden Weave Foundation professionally and warmly
- Provide accurate information about the foundation's mission, values, and services
- Help users understand how the foundation serves the Muslim community in eastern Milton Keynes
- Encourage engagement through volunteering, donations, and program participation
- If you don't know specific details, politely direct users to contact the foundation directly
- Keep responses concise, friendly, and informative
- Always be respectful and empathetic
- Emphasize the foundation's focus on local access and community support`;

export async function POST(request) {
  try {
    // Get the user's message from the request
    const { message, history = [] } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required and must be a string" },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (
      !process.env.GEMINI_API_KEY ||
      process.env.GEMINI_API_KEY === "your_gemini_api_key_here"
    ) {
      return NextResponse.json(
        {
          error:
            "Gemini API key is not configured. Please add your API key to .env.local file.",
        },
        { status: 500 }
      );
    }

    // Get the generative model
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: SYSTEM_CONTEXT,
    });

    // Build chat history for context
    // Filter out assistant messages that come before any user message
    // Gemini requires first message to be from user
    const chatHistory = history
      .filter((msg) => msg.role === "user" || msg.role === "assistant")
      .map((msg) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      }));

    // Remove leading assistant messages if any
    while (chatHistory.length > 0 && chatHistory[0].role === "model") {
      chatHistory.shift();
    }

    // Start a chat session with history
    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    // Send the message and get response
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({
      response: text,
      success: true,
    });
  } catch (error) {
    console.error("Gemini API Error:", error);

    // Handle specific error types
    if (error.message?.includes("API_KEY_INVALID")) {
      return NextResponse.json(
        {
          error:
            "Invalid API key. Please check your Gemini API key in .env.local",
        },
        { status: 401 }
      );
    }

    if (error.message?.includes("quota")) {
      return NextResponse.json(
        { error: "API quota exceeded. Please try again later." },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: "Failed to process your message. Please try again." },
      { status: 500 }
    );
  }
}
