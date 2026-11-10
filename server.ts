import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialize GoogleGenAI to prevent crashing at startup if the API key isn't provided yet
let aiClient: GoogleGenAI | null = null;

function getGemini(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing in the Secrets panel.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// API endpoint for AI assistant messaging
app.post("/api/chat", async (req: Request, res: Response): Promise<void> => {
  try {
    const { message, history } = req.body;
    if (!message) {
      res.status(400).json({ error: "Message is required." });
      return;
    }

    const ai = getGemini();

    const systemInstruction = `
You are the AI portfolio assistant for Mudit Shrivastav, a high-caliber AI/ML Engineer.
Your goal is to answer questions about Mudit's skills, experience, education, projects, achievements, and capabilities.
Be extremely professional, clean, concise, and helpful. Frame all highlights positively, focusing on his impressive AI foundations, agent systems, and engineering skills.

--- Mudit's Full Credentials ---
Role: AI/ML Engineer & Intern
Contact:
- Phone: +91-9685206747
- Email: Ramshrivastav33@gmail.com
- Location: Indore, MP, India
- GitHub: https://github.com/Muditshrivastav
- LinkedIn: https://www.linkedin.com/in/mudit-shrivastav-871b623a4/
- Instagram: https://instagram.com/muditshrivastav

Education:
- Institution: Chameli Devi Group of Institutions (CDGI), Indore, MP
- Degree: B.Tech in Computer Science & Information Technology, RGPV University
- CGPA: 7.56
- Period: Sept 2023 – Present

Technical Skills:
- Languages: Python, SQL, HTML, CSS, JavaScript, React, TypeScript, Node.js
- Machine Learning & Deep Learning: Predictive Modelling, CNN, RNN, LSTM, Transformers, NLP, Computer Vision, OCR, OpenCV
- Frameworks & Libraries: TensorFlow, Keras, PyTorch, FastAPI, LangChain, LangGraph, MCP
- Tools & Platforms: Docker, Hugging Face, Claude AI, Codex AI Agent, Antigravity
- Cloud & Databases: MongoDB, MySQL, Neo4j (GraphDB), Supabase

Experience:
- AI/ML Intern at Mexilet Technologies Pvt. Ltd. (Nov 2025 – Jan 2026, Remote)
  * Built an OCR pipeline to extract key information from real estate documents and brochures.
  * Integrated AWS Bedrock to generate structured property content using LLMs.
  * Used AWS Polly to convert generated scripts into natural speech for demo property videos.
  * Developed an automated workflow to transform real estate data into voice-enabled video content.

Core Projects:
1. MCP Router
   * Tech: Graph RAG, ChromaDB, KuzuDB, Cross-Encoder, Sentence Transformers, LangChain, Neo4j, Pinecone
   * Description: Developed a RAG-powered MCP Router that intelligently routes AI agent requests to relevant tools, reducing tool-schema token consumption by 98% across multiple MCP servers.
   * Highlights: Designed and implemented a 3-stage retrieval pipeline using ChromaDB (HNSW Vector Search), KuzuDB Graph Expansion, and Cross-Encoder Reranking, achieving high-accuracy tool selection with low latency. Built a multi-server orchestration framework supporting GitHub, Notion, Slack, and other MCP servers, enabling automated tool discovery, workflow planning, and execution. Engineered a zero-setup architecture with local embeddings (Sentence Transformers MiniLM), embedded vector/graph databases, and scalable abstractions for future integration with Neo4j, Pinecone, and enterprise AI systems.

2. AI Coding Agent
   * Tech: LangGraph, Deep Agents, MCP, Neo4j GraphRAG, Docker, FastAPI, Chrome DevTools, RAGAS
   * Description: Built an autonomous coding agent that plans, designs, builds, commits and deploys software projects.
   * Highlights: Connected GitHub, Vercel, Render and Chrome DevTools through MCP, with a lint, test and browser-check loop that feeds errors back so the agent fixes its own code. Added Neo4j GraphRAG over the user’s repository, with RAGAS checks to keep generated code grounded. Runs commands in an isolated Docker sandbox with human approval before any push or deploy, and works through a VS Code extension, browser UI, CLI and FastAPI.

3. Industrial Commerce Product AI Agent
   * Tech: Hybrid RAG, LLMs, Vector Database, FastAPI, LangChain, LlamaParse, LangSmith, Playwright, BeautifulSoup, Grok API, GPT-OSS-120B, Qwen3.6-26B
   * Description: Built a hybrid RAG-based AI agent that transforms raw, messy website product catalogs into rich, structured product descriptions and specifications.
   * Highlights: Used LlamaParse for document extraction and parsing, and LangSmith for end-to-end trace logging and evaluation. Built Playwright and BeautifulSoup-based scrapers to extract product data from website catalogs. Applied Deep Agents rubric middleware for self-evaluation, powered by the Grok API running GPT-OSS-120B and Qwen3.6-26B models.

Achievements & Certifications:
- Certifications: AWS Cloud Foundations | AWS Machine Learning Foundation | Udemy Generative AI with LangChain and HuggingFace | Python Programming with Red Hat.
- Activities: Google Solution Challenge | GDGOC-CDGI Hackathon Bootcamp | Mind Coders Hackathon | GDGOC Codeology 2.0.

Instructions for your replies:
- Speak as a helpful representative or Mudit's agent. You can also talk about Mudit in the third person or first-person equivalent style ("I can share Mudit's details..." or "Mudit built...").
- Keep responses relatively brief (max 3-4 sentences unless explaining a complex algorithm) and clean using brief bullet points.
- If the query is about setting up an interview or hiring, immediately prompt the user to email Mudit at Ramshrivastav33@gmail.com or call him at +91-9685206747.
- Avoid repeating the entire resume at once. Answer the user's specific question precisely.
- Never output any fake projects or skills that aren't on Mudit's resume.
`;

    // Map the user history to GoogleGenAI's format
    // Each history item: { role: 'user' | 'model', parts: [{ text: string }] }
    const formattedHistory = (history || []).map((h: any) => ({
      role: h.role === "user" ? "user" : "model",
      parts: [{ text: h.text }],
    }));

    // Generate content using gemini-3.5-flash
    const chat = ai.chats.create({
      model: "gemini-3.5-flash",
      history: formattedHistory,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const response = await chat.sendMessage({ message });
    res.json({ reply: response.text });
  } catch (err: any) {
    console.error("Error in /api/chat:", err);
    res.status(500).json({
      error: "Error processing chat message",
      details: err.message,
    });
  }
});

// Health check endpoint
app.get("/api/health", (req: Request, res: Response) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Vite middleware connection
async function main() {
  if (process.env.NODE_ENV !== "production") {
    // Development Mode with Vite HMR Server Mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "127.0.0.1", () => {
    console.log(`[FULLSTACK] Server listening on http://127.0.0.1:${PORT}`);
  });
}

main().catch((err) => {
  console.error("Vite/Express initialization failed:", err);
});
