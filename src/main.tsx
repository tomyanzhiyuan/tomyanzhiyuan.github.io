import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import EssayPage from "./pages/EssayPage.tsx";
import "./index.css";

// Apply dark theme to the document
document.documentElement.classList.add('dark');

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/writing/:slug" element={<EssayPage />} />
    </Routes>
  </HashRouter>
);
