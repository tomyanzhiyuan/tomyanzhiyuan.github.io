
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/globals.css";

// Apply dark theme to the document
document.documentElement.classList.add('dark');

createRoot(document.getElementById("root")!).render(<App />);
