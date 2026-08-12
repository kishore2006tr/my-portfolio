export interface ProjectMetrics {
  accuracy?: string;
  f1Score?: string;
  responseTime?: string;
  users?: string;
  datasetSize?: string;
}

export interface ArchitectureNode {
  name: string;
  type: string;
  desc: string;
}

export interface PipelineStep {
  name: string;
  desc: string;
}

export interface ChallengeSolution {
  challenge: string;
  solution: string;
}

export interface TechStackCategorized {
  language?: string[];
  frontend?: string[];
  backend?: string[];
  aiml?: string[];
  database?: string[];
  tools?: string[];
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: "AI / ML" | "FULL-STACK" | "DATA ANALYTICS" | "GENERATIVE AI" | "COMPUTER VISION" | "NLP";
  allCategories?: string[];
  description: string;
  image: string;
  technologies: string[];
  metrics?: ProjectMetrics;
  github?: string;
  demo?: string;
  featured?: boolean;
  
  // Case Study Detailed Specifications
  tagline?: string;
  year?: string;
  role?: string;
  teamSize?: string;
  problemHeading?: string;
  problemDescription?: string;
  solutionSummary?: string;
  pipeline?: PipelineStep[];
  architecture?: ArchitectureNode[];
  techStackCategorized?: TechStackCategorized;
  dataModel?: {
    dataset: string;
    datasetSize: string;
    features: string;
    preprocessing: string;
    modelArchitecture: string;
    trainingMethod: string;
    evaluation: string;
  };
  resultsSummary?: { metric: string; value: string; highlight: string; note: string }[];
  challenges?: ChallengeSolution[];
  learnings?: string[];
  sampleInputs?: string[];
  sampleOutputs?: string[];
}

export const projectsData: Project[] = [
  {
    slug: "vision-ai-diagnostic",
    number: "01",
    featured: true,
    title: "VisionAI Diagnostic Engine",
    category: "COMPUTER VISION",
    allCategories: ["AI / ML", "COMPUTER VISION"],
    description: "High-precision autonomous medical imaging & pathology scanner delivering sub-50ms inference for real-time anomaly detection.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    technologies: ["PyTorch", "YOLOv8", "FastAPI", "React", "Docker", "CUDA"],
    metrics: {
      accuracy: "98.4%",
      f1Score: "0.965",
      responseTime: "42ms",
      users: "12,000+",
      datasetSize: "250K Scans"
    },
    github: "https://github.com/kishore/vision-ai-diagnostic",
    demo: "https://visionai-demo.kishore.dev",
    
    tagline: "Ultra-low latency deep learning platform for automated pulmonary & pathology image analysis.",
    year: "2025 - 2026",
    role: "Lead AI Systems Engineer",
    teamSize: "4 Engineers",
    problemHeading: "CRITICAL TIME TO DIAGNOSIS IN EMERGENCY PATHOLOGY",
    problemDescription: "Emergency care units face massive backlogs when analyzing high-resolution CT and X-ray DICOM files. Traditional CPU-bound diagnostic pipelines take minutes to process high-dimensional volume tensors, leading to delayed treatment decisions.",
    solutionSummary: "Built a GPU-accelerated PyTorch YOLOv8 & Transformer ensemble served over optimized FastAPI web sockets for instant sub-50ms bounding box annotations.",
    pipeline: [
      { name: "DATA", desc: "DICOM ingestion, contrast normalization & noise reduction." },
      { name: "PROCESSING", desc: "GPU tensor batching, multi-scale cropping & data augmentation." },
      { name: "MODEL", desc: "YOLOv8 + ResNet50 backbone feature pyramid extraction." },
      { name: "API", desc: "FastAPI gRPC/WebSocket streaming with TensorRT acceleration." },
      { name: "FRONTEND", desc: "React DICOM viewport with real-time bounding box canvas overlays." },
      { name: "USER", desc: "Radiologist review interface with automated metric confidence scoring." }
    ],
    architecture: [
      { name: "USER / CLINICIAN", type: "Client", desc: "Web DICOM viewport requesting real-time scan inference." },
      { name: "REACT FRONTEND", type: "Web App", desc: "Custom HTML5 Canvas & WebGL tensor visualizer with interactive controls." },
      { name: "REST API / FASTAPI", type: "Gateway", desc: "Async Python gateway managing auth, rate limiting, and Redis queueing." },
      { name: "ML MODEL", type: "Inference Engine", desc: "TensorRT compiled PyTorch model running on NVIDIA CUDA cores." },
      { name: "DATABASE", type: "Storage", desc: "PostgreSQL for clinical metadata & MinIO for DICOM blobs." },
      { name: "CLOUD / DEPLOYMENT", type: "Infrastructure", desc: "Kubernetes cluster with auto-scaling GPU nodes on AWS EC2." }
    ],
    techStackCategorized: {
      language: ["Python 3.11", "TypeScript", "C++ (CUDA Kernels)"],
      frontend: ["React 18", "WebGL Canvas", "Tailwind CSS"],
      backend: ["FastAPI", "gRPC", "Redis"],
      aiml: ["PyTorch 2.2", "YOLOv8", "TensorRT", "OpenCV"],
      database: ["PostgreSQL", "MinIO S3", "FAISS"],
      tools: ["Docker", "Kubernetes", "GitLab CI/CD"]
    },
    dataModel: {
      dataset: "NIH Chest X-ray & RSNA Pneumonia Diagnostic Repository",
      datasetSize: "250,000 Anonymized Scans (1.2 TB)",
      features: "Multi-modal 1024x1024 tensor maps, pixel intensity gradients",
      preprocessing: "Adaptive Histogram Equalization (CLAHE), Random Rotation",
      modelArchitecture: "Hybrid Vision Transformer (ViT-B) + YOLOv8 Head",
      trainingMethod: "Distributed Data Parallel (DDP) across 4x NVIDIA A100 GPUs",
      evaluation: "Cross-validation with stratified k-fold split (80/10/10)"
    },
    resultsSummary: [
      { metric: "ACCURACY", value: "98.4%", highlight: "Target Exceeded", note: "+4.2% over legacy baseline" },
      { metric: "F1 SCORE", value: "0.965", highlight: "Sub-1% False Negatives", note: "Optimized recall in medical triage" },
      { metric: "RESPONSE TIME", value: "42ms", highlight: "Real-Time Telemetry", note: "TensorRT C++ runtime acceleration" },
      { metric: "USERS", value: "12,000+", highlight: "Active Clinical Testers", note: "Deployed across partner hospital units" }
    ],
    challenges: [
      {
        challenge: "Class Imbalance in Rare Pathological Conditions",
        solution: "Implemented Focal Loss functions combined with SMOTE and conditional GAN synthetic data generation to boost minority class recall by 18%."
      },
      {
        challenge: "High Memory Footprint of 3D CT Volume Tensors",
        solution: "Engineered a custom CUDA memory-mapped slice loader that streams 2D slice projections asynchronously, keeping RAM consumption under 4.2 GB."
      }
    ],
    learnings: [
      "01 TensorRT quantization to INT8 delivers 3x throughput speedups with minimal accuracy degradation.",
      "02 Decoupling heavy GPU model inference from API routing via Redis queues guarantees system resilience.",
      "03 Radiologists require explainability overlays (Grad-CAM heatmaps) to trust AI assistance."
    ],
    sampleInputs: ["Chest_XRay_Scan_0041.dcm", "Lung_CT_CrossSection_108.dcm", "Pathology_Slide_A4.png"],
    sampleOutputs: ["Pneumonia Anomaly (Confidence 98.4%)", "Normal Clear Scan (Confidence 99.1%)", "Nodule Detection (Confidence 96.7%)"]
  },
  {
    slug: "enterprise-nexus-rag",
    number: "02",
    featured: true,
    title: "Enterprise Nexus RAG Platform",
    category: "GENERATIVE AI",
    allCategories: ["GENERATIVE AI", "FULL-STACK", "NLP"],
    description: "Multi-tenant vector search & document intelligence engine using Llama 3 and hybrid BM25 + Dense embeddings.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    technologies: ["Python", "LangChain", "Llama 3", "Pinecone", "React", "FastAPI"],
    metrics: {
      accuracy: "94.2%",
      f1Score: "0.920",
      responseTime: "115ms",
      users: "8,500+",
      datasetSize: "1.5M Documents"
    },
    github: "https://github.com/kishore/enterprise-nexus-rag",
    demo: "https://rag-demo.kishore.dev",
    
    tagline: "Enterprise-grade retrieval augmented generation for secure internal domain knowledge querying.",
    year: "2025",
    role: "Full-Stack AI Architect",
    teamSize: "3 Engineers",
    problemHeading: "HALLUCINATIONS & DATA ISOLATION IN CORPORATE SEARCH",
    problemDescription: "Large enterprises struggle to extract actionable insights from millions of PDF reports and technical manuals. Off-the-shelf LLMs suffer from severe hallucinations and lack strict role-based data tenancy.",
    solutionSummary: "Developed a hybrid BM25 + Dense vector retrieval pipeline powered by Llama 3 70B with Cohere reranking and document-level ACL vector metadata filters.",
    pipeline: [
      { name: "DATA", desc: "PDF, DOCX & Markdown parsing via OCR & semantic chunking." },
      { name: "PROCESSING", desc: "BGE-Large embedding generation & metadata tagging." },
      { name: "MODEL", desc: "Hybrid BM25 + Dense vector retrieval with Cohere Rerank." },
      { name: "API", desc: "FastAPI REST endpoints with streaming response tokens." },
      { name: "FRONTEND", desc: "React dashboard with source citation preview drawers." },
      { name: "USER", desc: "Role-gated conversational search interface for employees." }
    ],
    architecture: [
      { name: "USER", type: "Client", desc: "Enterprise employee querying technical knowledge base." },
      { name: "REACT FRONTEND", type: "Web Interface", desc: "Streamed markdown chat UI with real-time citations." },
      { name: "REST API / FASTAPI", type: "Backend API", desc: "Async Python engine coordinating vector search and LLM context prompts." },
      { name: "ML MODEL", type: "LLM + Reranker", desc: "Llama 3 70B Instruct running on vLLM with Cohere reranking." },
      { name: "DATABASE", type: "Vector DB", desc: "Pinecone / Qdrant cluster storing 1538-dim embeddings." },
      { name: "CLOUD / DEPLOYMENT", type: "Infra", desc: "AWS EKS cluster with NVIDIA Triton Inference Server." }
    ],
    techStackCategorized: {
      language: ["Python 3.11", "TypeScript"],
      frontend: ["React 18", "Tailwind CSS", "Zustand"],
      backend: ["FastAPI", "Celery", "Redis"],
      aiml: ["Llama 3", "LangChain", "BGE Embeddings", "vLLM"],
      database: ["Pinecone", "Qdrant", "PostgreSQL (pgvector)"],
      tools: ["Docker", "Kubernetes", "Helm"]
    },
    resultsSummary: [
      { metric: "ACCURACY", value: "94.2%", highlight: "High Faithfulness", note: "RAGAS evaluation score" },
      { metric: "RESPONSE TIME", value: "115ms", highlight: "First Token Speed", note: "Achieved via vLLM PagedAttention" },
      { metric: "DATASET SIZE", value: "1.5M Docs", highlight: "Sub-Second Search", note: "Real-time vector indexing pipeline" },
      { metric: "USERS", value: "8,500+", highlight: "Enterprise Adoption", note: "Daily active enterprise users" }
    ],
    challenges: [
      {
        challenge: "Context Window Overflow on Large Document Tables",
        solution: "Developed an AST table summarizer converting HTML tables into structured JSON schemas before context injection."
      },
      {
        challenge: "Multi-Tenant Security Constraints",
        solution: "Enforced document-level vector metadata filtering directly inside Pinecone queries to guarantee zero cross-department data leakage."
      }
    ],
    learnings: [
      "01 Hybrid search (Dense vector + BM25 keyword matching) improves retrieval accuracy by 24%.",
      "02 Re-ranking models dramatically cut irrelevant context chunking before passing to the LLM.",
      "03 Streaming tokens via SSE gives users the perception of instantaneous output."
    ],
    sampleInputs: ["What is our Q3 cloud infrastructure budget?", "How do I configure Redis cluster failover?", "Summarize security policy section 4.2"],
    sampleOutputs: ["Verified Response + PDF Page 14 Citation", "Code Snippet + Architecture Diagram Ref", "Policy Summary + Risk Score"]
  },
  {
    slug: "algo-trading-analytics",
    number: "03",
    featured: true,
    title: "Algorithmic Trading & Risk Analytics",
    category: "DATA ANALYTICS",
    allCategories: ["DATA ANALYTICS", "FULL-STACK"],
    description: "Ultra-low latency financial data pipeline & risk dashboard streaming 100,000 ticks/sec with live Monte Carlo risk simulations.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    technologies: ["Python", "Rust", "React", "Apache Kafka", "ClickHouse", "TimescaleDB"],
    metrics: {
      accuracy: "99.9%",
      f1Score: "0.948",
      responseTime: "18ms",
      users: "3,200+",
      datasetSize: "4.8 TB Ticks"
    },
    github: "https://github.com/kishore/algo-trading-analytics",
    demo: "https://quant-demo.kishore.dev",
    
    tagline: "High-frequency streaming telemetry and portfolio VaR (Value at Risk) simulation workbench.",
    year: "2025",
    role: "Quantitative Developer",
    teamSize: "2 Engineers",
    problemHeading: "LATENCY BOTTLENECK IN HIGH-THROUGHPUT MARKET FEEDS",
    problemDescription: "Financial analytics platforms fail under peak market volatility, introducing 500ms+ rendering delays. Quantitative traders require real-time portfolio risk metrics (VaR, Sharpe Ratio) recalculated on every market tick.",
    solutionSummary: "Engineered a zero-copy Rust tick parser coupled with ClickHouse columnar time-series database and WebGL candlestick charts maintaining 60 FPS under 100k ticks/sec.",
    pipeline: [
      { name: "DATA", desc: "Websocket market feeds (100k ticks/sec) & order book depth." },
      { name: "PROCESSING", desc: "Rust tick parser with zero-copy SIMD deserialization." },
      { name: "MODEL", desc: "Monte Carlo simulation engine & GARCH volatility predictor." },
      { name: "API", desc: "High-throughput gRPC & WebSockets stream to web client." },
      { name: "FRONTEND", desc: "React + Canvas 60 FPS order book & candlestick charts." },
      { name: "USER", desc: "Trader dashboard with configurable risk tolerance alerts." }
    ],
    architecture: [
      { name: "MARKET FEEDS", type: "Data Source", desc: "Live exchange WebSocket feeds streaming tick data." },
      { name: "RUST TICK ENGINE", type: "Ingestion Core", desc: "Zero-copy Rust binary parsing market depth and pushing to Kafka streams." },
      { name: "REST API / FASTAPI", type: "API Gateway", desc: "High-concurrency Node.js / FastAPI gateway serving REST endpoints and WS connections." },
      { name: "QUANT ENGINE", type: "Analytics Engine", desc: "C++ / Python Numba accelerated risk calculator executing 10,000 Monte Carlo runs." },
      { name: "CLICKHOUSE DB", type: "Time-Series Store", desc: "Columnar ClickHouse cluster handling sub-second aggregations over 4.8 TB history." },
      { name: "CLOUD / DEPLOYMENT", type: "Infrastructure", desc: "Low-latency AWS bare-metal instances with kernel bypass networking." }
    ],
    techStackCategorized: {
      language: ["Rust", "Python", "TypeScript", "C++"],
      frontend: ["React 18", "Lightweight Charts", "HTML5 Canvas"],
      backend: ["FastAPI", "Node.js", "Apache Kafka", "gRPC"],
      aiml: ["Numba", "SciPy", "GARCH Models", "Polars"],
      database: ["ClickHouse", "TimescaleDB", "Redis Cluster"],
      tools: ["Docker", "Grafana", "Prometheus"]
    },
    resultsSummary: [
      { metric: "RESPONSE TIME", value: "18ms", highlight: "Ultra-Low Latency", note: "Sub-20ms tick-to-screen render" },
      { metric: "DATASET SIZE", value: "4.8 TB", highlight: "8:1 Compression", note: "Stored in ClickHouse columnar format" },
      { metric: "USERS", value: "3,200+", highlight: "Active Traders", note: "Used by fund managers and quants" },
      { metric: "ACCURACY", value: "99.9%", highlight: "Zero Tick Loss", note: "Verified tick ingestion throughput" }
    ],
    challenges: [
      {
        challenge: "Browser Canvas Performance Degraded Under 100k Ticks",
        solution: "Wrote a WebGL shader-backed candlestick visualizer offloading chart rendering to the GPU, maintaining 60 FPS."
      },
      {
        challenge: "Garbage Collection Pauses in Python Ingestion Pipeline",
        solution: "Re-architected data ingestion pipeline in Rust with custom memory pools, eliminating garbage collection pauses."
      }
    ],
    learnings: [
      "01 Columnar time-series databases like ClickHouse execute aggregations 50x faster than relational databases.",
      "02 Rust is unmatched for high-frequency data ingestion where predictable sub-millisecond execution is mandatory.",
      "03 WebGL charts prevent DOM reflow bottlenecks during heavy market bursts."
    ],
    sampleInputs: ["Portfolio A: $10M Equities", "Portfolio B: Tech & Crypto Hedge", "Portfolio C: Fixed Income"],
    sampleOutputs: ["99% VaR: -$142,000", "Sharpe Ratio: 2.84", "Max Drawdown: 4.2%"]
  },
  {
    slug: "neuralflow-speech-to-code",
    number: "04",
    featured: false,
    title: "NeuralFlow Speech-to-Code Assistant",
    category: "NLP",
    allCategories: ["NLP", "GENERATIVE AI", "FULL-STACK"],
    description: "Voice-driven developer environment converting natural speech into verified Abstract Syntax Trees and clean code.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    technologies: ["Python", "Whisper", "TypeScript", "Monaco Editor", "AST", "WebSockets"],
    metrics: {
      accuracy: "96.1%",
      f1Score: "0.938",
      responseTime: "85ms",
      users: "5,400+",
      datasetSize: "120K Audios"
    },
    github: "https://github.com/kishore/neuralflow-speech-to-code",
    demo: "https://neuralflow-demo.kishore.dev"
  },
  {
    slug: "edge-cv-traffic-monitor",
    number: "05",
    featured: false,
    title: "Edge-CV Smart Traffic Analytics",
    category: "COMPUTER VISION",
    allCategories: ["COMPUTER VISION", "AI / ML"],
    description: "Embedded Computer Vision pipeline running on Jetson Nano edge units for real-time multi-lane vehicle tracking.",
    image: "https://images.unsplash.com/photo-1508873696983-2df515122519?q=80&w=800&auto=format&fit=crop",
    technologies: ["C++", "OpenCV", "TensorRT", "YOLOv8", "Python", "MQTT"],
    metrics: {
      accuracy: "97.8%",
      f1Score: "0.952",
      responseTime: "16ms",
      users: "1,800+",
      datasetSize: "800K Frames"
    },
    github: "https://github.com/kishore/edge-cv-traffic-monitor",
    demo: "https://traffic-demo.kishore.dev"
  },
  {
    slug: "customer-churn-intelligence",
    number: "06",
    featured: false,
    title: "Customer Churn Intelligence Suite",
    category: "DATA ANALYTICS",
    allCategories: ["DATA ANALYTICS", "AI / ML"],
    description: "Predictive churn analytics platform with SHAP model explainability, customer lifetime value modeling, and automated retention triggers.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    technologies: ["Python", "XGBoost", "SHAP", "React", "PostgreSQL", "Scikit-Learn"],
    metrics: {
      accuracy: "93.6%",
      f1Score: "0.912",
      responseTime: "65ms",
      users: "4,100+",
      datasetSize: "2.1M Accounts"
    },
    github: "https://github.com/kishore/customer-churn-intelligence",
    demo: "https://churn-demo.kishore.dev"
  }
];

export const filterCategories = [
  "ALL",
  "AI / ML",
  "FULL-STACK",
  "DATA",
  "GENERATIVE AI",
  "NLP",
  "COMPUTER VISION"
];
