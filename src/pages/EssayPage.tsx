import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { essays } from "../data/essays";

// Simple markdown-ish parser for .txt files
function parseContent(text: string) {
  const lines = text.split("\n");
  const elements: JSX.Element[] = [];
  let key = 0;
  let listItems: JSX.Element[] = [];

  const formatText = (text: string) => {
    return text.split(/(\*\*[^*]+\*\*)/).map((part, idx) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={idx} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-2 mb-4 text-gray-300">
          {listItems}
        </ul>
      );
      listItems = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Main title (# )
    if (line.startsWith("# ")) {
      flushList();
      elements.push(
        <h1 key={key++} className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {line.slice(2)}
        </h1>
      );
    }
    // Subheading (## )
    else if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={key++} className="text-xl font-semibold mt-10 mb-4 text-white">
          {line.slice(3)}
        </h2>
      );
    }
    // Horizontal rule
    else if (line.trim() === "---") {
      flushList();
      elements.push(
        <hr key={key++} className="my-8 border-white/10" />
      );
    }
    // List item (- )
    else if (line.startsWith("- ")) {
      listItems.push(
        <li key={`li-${key++}`}>{formatText(line.slice(2))}</li>
      );
    }
    // Empty line
    else if (line.trim() === "") {
      flushList();
      continue;
    }
    // Regular paragraph
    else {
      flushList();
      elements.push(
        <p key={key++} className="text-gray-300 leading-relaxed mb-4">
          {formatText(line)}
        </p>
      );
    }
  }

  flushList(); // Flush any remaining list items
  return elements;
}

export default function EssayPage() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const essay = essays.find((e) => e.slug === slug);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    fetch(`/essays/${slug}.txt`)
      .then((res) => {
        if (!res.ok) throw new Error("Essay not found");
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0b] text-gray-100 flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  if (error || !essay) {
    return (
      <div className="min-h-screen bg-[#0a0a0b] text-gray-100 flex flex-col items-center justify-center">
        <p className="text-gray-500 mb-4">Essay not found</p>
        <Link
          to="/"
          className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-gray-100">
      {/* Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0b]/80 backdrop-blur-xl"
      >
        <nav className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            state={{ scrollTo: "writing" }}
            className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <span className="text-lg font-semibold tracking-tight">Tom Yan</span>
        </nav>
      </motion.header>

      {/* Essay Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-3xl mx-auto px-6 pt-28 pb-20"
      >
        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
          <span>{new Date(essay.date).toLocaleDateString("en-US", { 
            year: "numeric", 
            month: "long", 
            day: "numeric" 
          })}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {essay.readTime}
          </span>
        </div>

        {/* Content */}
        <div className="prose-custom">
          {content && parseContent(content)}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <Link
            to="/"
            state={{ scrollTo: "writing" }}
            className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all writing
          </Link>
        </div>
      </motion.article>
    </div>
  );
}

