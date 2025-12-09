const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.explainMismatch = async (mismatch) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
      You are a Senior Design Engineer. Explain why this code is a design system violation.
      
      Context:
      File: ${mismatch.file}
      Line: ${mismatch.line}
      Code: "${mismatch.context}"
      Issue: Found hardcoded value "${mismatch.value}" instead of a token.
      
      Provide:
      1. Why this is bad (consistency, maintenance).
      2. The correct Tailwind class or CSS variable to use if the intention was close to standard.
      Keep it brief and helpful.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
    
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AI explanation unavailable (Check API Key).";
  }
};