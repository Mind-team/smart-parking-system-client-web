import { useState } from "react";

type Mode = "Light" | "Dark";

export const useMode = (): [Mode, () => void] => {
  const [mode, setMode] = useState(localStorage.getItem("Mode"));
  if (!(mode === "Light" || mode === "Dark") || !mode) {
    setMode("Light");
  }
  const toggleMode = () => {
    setMode(mode === "Light" ? "Dark" : "Light");
    localStorage.setItem("Mode", mode === "Light" ? "Dark" : "Light");
  };
  return [mode as Mode, toggleMode];
};