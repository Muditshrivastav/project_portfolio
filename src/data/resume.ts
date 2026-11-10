export interface Project {
  title: string;
  subtitle: string;
  tech: string[];
  githubUrl: string;
  points: string[];
  interactiveFlow?: {
    nodes: string[];
    edges: { from: string; to: string; label: string }[];
  };
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  cgpa?: string;
  period: string;
}

export interface ResumeData {
  name: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
  resumePdfUrl: string;
  education: Education[];
  technicalSkills: {
    languages: string[];
    machineLearningAndDL: string[];
    frameworksAndLibraries: string[];
    toolsAndPlatforms: string[];
    cloudAndDatabases: string[];
  };
  experience: Experience[];
  projects: Project[];
  achievements: {
    certifications: string[];
    activities: string[];
  };
}

export const resumeData: ResumeData = {
  name: "Mudit Shrivastav",
  phone: "+91-9685206747",
  email: "Ramshrivastav33@gmail.com",
  linkedin: "https://www.linkedin.com/in/mudit-shrivastav-871b623a4",
  github: "https://github.com/Muditshrivastav",
  instagram: "https://instagram.com/muditshrivastav",
  resumePdfUrl: "/assets/aistudio/mudit_resume__5__94e35d05.pdf",
  education: [
    {
      institution: "Chameli Devi Group of Institutions (CDGI)",
      location: "Indore, MP",
      degree: "B.Tech in Computer Science & Information Technology, RGPV University",
      cgpa: "7.56",
      period: "Sept 2023 – Present"
    }
  ],
  technicalSkills: {
    languages: [
      "Python", "SQL", "HTML", "CSS", "JavaScript", "React", "TypeScript", "Node.js"
    ],
    machineLearningAndDL: [
      "Predictive Modelling", "CNN", "RNN", "LSTM", "Transformers", "NLP", "Computer Vision", "OCR", "OpenCV"
    ],
    frameworksAndLibraries: [
      "TensorFlow", "Keras", "PyTorch", "FastAPI", "LangChain", "LangGraph", "MCP"
    ],
    toolsAndPlatforms: [
      "Docker", "Hugging Face", "Claude AI", "Codex AI Agent", "Antigravity"
    ],
    cloudAndDatabases: [
      "MongoDB", "MySQL", "Neo4j (GraphDB)", "Supabase"
    ]
  },
  experience: [
    {
      role: "AI/ML Intern",
      company: "Mexilet Technologies Pvt. Ltd.",
      location: "Remote",
      period: "Nov 2025 – Jan 2026",
      points: [
        "Built an OCR pipeline to extract key information from real estate documents and brochures.",
        "Integrated AWS Bedrock to generate structured property content using LLMs.",
        "Used AWS Polly to convert generated scripts into natural speech for demo property videos.",
        "Developed an automated workflow to transform real estate data into voice-enabled video content."
      ]
    }
  ],
  projects: [
    {
      title: "MCP Router",
      subtitle: "Graph RAG, ChromaDB, KuzuDB, Cross-Encoder, Sentence Transformers, LangChain",
      tech: ["Graph RAG", "ChromaDB", "KuzuDB", "Cross-Encoder", "Sentence Transformers", "LangChain", "Neo4j", "Pinecone"],
      githubUrl: "https://github.com/Muditshrivastav",
      points: [
        "Developed a RAG-powered MCP Router that intelligently routes AI agent requests to relevant tools, reducing tool-schema token consumption by 98% across multiple MCP servers.",
        "Designed and implemented a 3-stage retrieval pipeline using ChromaDB (HNSW Vector Search), KuzuDB Graph Expansion, and Cross-Encoder Reranking, achieving high-accuracy tool selection with low latency.",
        "Built a multi-server orchestration framework supporting GitHub, Notion, Slack, and other MCP servers, enabling automated tool discovery, workflow planning, and execution.",
        "Engineered a zero-setup architecture with local embeddings (Sentence Transformers MiniLM), embedded vector/graph databases, and scalable abstractions for future integration with Neo4j, Pinecone, and enterprise AI systems."
      ],
      interactiveFlow: {
        nodes: ["AI Client Query", "ChromaDB (HNSW Vector Search)", "KuzuDB Graph Expansion", "Cross-Encoder Rerank", "MCP Tool Execution (GitHub / Slack / Notion)"],
        edges: [
          { from: "AI Client Query", to: "ChromaDB (HNSW Vector Search)", label: "Filter 98% Tool Schemas" },
          { from: "ChromaDB (HNSW Vector Search)", to: "KuzuDB Graph Expansion", label: "Retrieve Graph Context" },
          { from: "KuzuDB Graph Expansion", to: "Cross-Encoder Rerank", label: "Score & Reorder Results" },
          { from: "Cross-Encoder Rerank", to: "MCP Tool Execution (GitHub / Slack / Notion)", label: "Route Request Dynamically" }
        ]
      }
    },
    {
      title: "AI Coding Agent",
      subtitle: "LangGraph, Deep Agents, MCP, Neo4j GraphRAG, Docker, FastAPI",
      tech: ["LangGraph", "Deep Agents", "MCP", "Neo4j GraphRAG", "Docker", "FastAPI", "Chrome DevTools", "RAGAS"],
      githubUrl: "https://github.com/Muditshrivastav",
      points: [
        "Built an autonomous coding agent that plans, designs, builds, commits and deploys software projects.",
        "Connected GitHub, Vercel, Render and Chrome DevTools through MCP, with a lint, test and browser-check loop that feeds errors back so the agent fixes its own code.",
        "Added Neo4j GraphRAG over the user’s repository, with RAGAS checks to keep generated code grounded.",
        "Runs commands in an isolated Docker sandbox with human approval before any push or deploy, and works through a VS Code extension, browser UI, CLI and FastAPI."
      ],
      interactiveFlow: {
        nodes: ["User Spec & Task", "Neo4j GraphRAG & RAGAS Checks", "LangGraph Deep Agent Planner", "Docker Sandbox & MCP Loops", "Lint, Test & DevTools Self-Heal", "Deploy (Vercel / Render)"],
        edges: [
          { from: "User Spec & Task", to: "Neo4j GraphRAG & RAGAS Checks", label: "Retrieve Repository Context" },
          { from: "Neo4j GraphRAG & RAGAS Checks", to: "LangGraph Deep Agent Planner", label: "Plan & Structure Code" },
          { from: "LangGraph Deep Agent Planner", to: "Docker Sandbox & MCP Loops", label: "Execute in Sandbox" },
          { from: "Docker Sandbox & MCP Loops", to: "Lint, Test & DevTools Self-Heal", label: "Self-Healing Loop" },
          { from: "Lint, Test & DevTools Self-Heal", to: "Deploy (Vercel / Render)", label: "Human-Approved Deploy" }
        ]
      }
    },
    {
      title: "Industrial Commerce Product AI Agent",
      subtitle: "Hybrid RAG, LLMs, Vector Database, FastAPI, LangChain",
      tech: ["Hybrid RAG", "LlamaParse", "LangSmith", "Playwright", "Deep Agents", "Grok API", "GPT-OSS-120B", "Qwen3.6-26B", "FastAPI"],
      githubUrl: "https://github.com/Muditshrivastav",
      points: [
        "Built a hybrid RAG-based AI agent that transforms raw, messy website product catalogs into rich, structured product descriptions and specifications.",
        "Used LlamaParse for document extraction and parsing, and LangSmith for end-to-end trace logging and evaluation.",
        "Built Playwright and BeautifulSoup-based scrapers to extract product data from website catalogs.",
        "Applied Deep Agents rubric middleware for self-evaluation, powered by the Grok API running GPT-OSS-120B and Qwen3.6-26B models."
      ],
      interactiveFlow: {
        nodes: ["Messy Catalog Scraper (Playwright/BS4)", "LlamaParse Document Extraction", "Hybrid RAG & Vector Database", "Grok API (GPT-OSS-120B / Qwen3.6-26B)", "LangSmith Traces & Evaluation"],
        edges: [
          { from: "Messy Catalog Scraper (Playwright/BS4)", to: "LlamaParse Document Extraction", label: "Extract Unstructured Pages" },
          { from: "LlamaParse Document Extraction", to: "Hybrid RAG & Vector Database", label: "Parse Tables & Specs" },
          { from: "Hybrid RAG & Vector Database", to: "Grok API (GPT-OSS-120B / Qwen3.6-26B)", label: "Hybrid Semantic + Lexical Match" },
          { from: "Grok API (GPT-OSS-120B / Qwen3.6-26B)", to: "LangSmith Traces & Evaluation", label: "Deep Agents Rubric Middleware" }
        ]
      }
    }
  ],
  achievements: {
    certifications: [
      "AWS Cloud Foundations",
      "AWS Machine Learning Foundation",
      "Udemy Generative AI with LangChain and HuggingFace",
      "Python Programming with Red Hat"
    ],
    activities: [
      "Google Solution Challenge",
      "GDGOC-CDGI Hackathon Bootcamp",
      "Mind Coders Hackathon",
      "GDGOC Codeology 2.0"
    ]
  }
};
