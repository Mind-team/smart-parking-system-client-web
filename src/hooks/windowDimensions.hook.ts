import { useEffect, useState } from "react";

interface WindowDimensions {
  width: number;
  height: number;
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: innerWidth,
    height: innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowDimensions({ width: innerWidth, height: innerHeight });
    });
  }, []);

  return windowDimensions;
};
