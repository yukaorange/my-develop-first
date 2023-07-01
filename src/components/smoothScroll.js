import Lenis from "@studio-freight/lenis";
import { useEffect, useLayoutEffect, useState, useRef } from "react";

const smoothScroll = () => {
  const [lenis, setLenis] = useState(null);
  const reqIdRef = useRef();

  useEffect(() => {
    const animate = (time) => {
      lenis?.raf(time);
      reqIdRef.current = requestAnimationFrame(animate);
    };
    reqIdRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqIdRef.current);
  }, [lenis]);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), //Math.powは、べき乗を計算する関数。Math.pow(2, 3)は2の3乗を計算する。Math.pow(2, -10 * t)は2の-10 * t乗を計算する。Math.minは引数の中で最小の値を返す関数。Math.min(1, 1.001 - Math.pow(2, -10 * t))は1と1.001 - Math.pow(2, -10 * t)の中で最小の値を返す。
      direction: "vertical",
      smooth: true,
      smoothTouch: false,
      touchInertiaMultiplier: 2,
    });
    setLenis(lenis);
    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);
};

export default smoothScroll;
