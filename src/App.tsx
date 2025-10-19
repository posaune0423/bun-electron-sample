import "./styles/globals.css";
import { createRoot } from "react-dom/client";
import { Home } from "@/components/Home";
import { ThemeProvider } from "@/components/theme-provider";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ThemeProvider>
    <Home />
  </ThemeProvider>
);
