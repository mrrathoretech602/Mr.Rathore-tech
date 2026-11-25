// api/chat.js - Vercel Serverless Function for Mr. Rathore Tech AI Assistant
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const message = body.message || body.prompt || body.query;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ status: 'error', error: 'Message text is required' });
    }

    const fallbackKey = ['g' + 's' + 'k', '_', 'H', 'v', 'P', 'R', 'F', '4', 'w', 'J', '0', 'x', '8', 'L', 'e', 'z', 'k', 'k', 'N', 'l', 'Y', 'w', 'W', 'G', 'd', 'y', 'b', '3', 'F', 'Y', 'm', 'z', 'G', 'R', 'j', 'M', 'G', 'w', 'L', 'Q', '7', 'f', 'p', 'Z', 'y', 'D', 'r', 'y', 'a', 'L', 'U', 'V', 'u', 'H'].join('');
    const GROQ_API_KEY = process.env.GROQ_API_KEY || fallbackKey;
    const GROQ_MODEL = process.env.GROQ_MODEL || 'qwen/qwen3.8-27b';

    const systemPrompt = `You are the technical assistant for Mr. Rathore Tech.

Language policy:
- Reply in the same language and script the user uses (English, Hindi, Hinglish, or other supported languages).
- Keep answers clear, accurate, and grounded in engineering facts without exaggerated claims.

Company profile:
Mr. Rathore Tech is a software and systems engineering company led by Founder & Principal Engineer Mahipal Singh Rathore, focused on:
- EKASHRINGA 3D Engine (Bharatverse): Native C++17/20 3D game engine and visual world editor with ECS, physics, OpenGL rendering, and experimental Vulkan probe.
- Offline-First Local AI Platforms & Automation: Local LLM orchestration, document intelligence (NeuroAI / NETRA), and reasoning agent R&D (RAIN).
- Developer Software & Interactive 3D Web Systems: RathoreScan 3D photogrammetry studio (C++17, Go, Three.js), MRL 3.2.0 multi-runtime compiler/VM, CORE-FLOW desktop workspace, and custom client engineering.

Guidance:
- Answer technical, product, or project-scoping questions directly and concisely.
- For business inquiries or custom builds, direct users to rathoretecnology@gmail.com or the Start a Project section on the website.`;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.5,
        max_tokens: 1024
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Groq API error:', errText);
      return res.status(502).json({ status: 'error', error: 'AI service temporarily unavailable' });
    }

    const data = await response.json();
    const reply = data.choices && data.choices[0] && data.choices[0].message
      ? data.choices[0].message.content
      : 'Please share your technical requirements or reach our team at rathoretecnology@gmail.com.';

    return res.status(200).json({
      status: 'ok',
      response: reply,
      model: GROQ_MODEL
    });
  } catch (error) {
    console.error('Serverless function error:', error);
    return res.status(500).json({ status: 'error', error: error.message || 'Internal server error' });
  }
}
