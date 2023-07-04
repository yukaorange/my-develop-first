import Lenis from "@studio-freight/lenis";
import { useEffect, useLayoutEffect, useState, useRef } from "react";

const smoothScroll = () => {
  const [lenis, setLenis] = useState(null);
  const reqIdRef = useRef();

  useEffect(() => {
    const animate = (time) => {
      lenis?.raf(time); //lenisがnullでなければ、lenis.raf(time)を実行する。
      reqIdRef.current = requestAnimationFrame(animate); //animate関数を再帰的に呼び出す。
    };
    reqIdRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(reqIdRef.current);
    };
  }, [lenis]);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => {
        let easeing = Math.min(1, 1.001 - Math.pow(2, -10 * t));
        return easeing;
      }, //Math.powは、べき乗を計算する関数。Math.pow(2, 3)は2の3乗を計算する。Math.pow(2, -10 * t)は2の-10 * t乗を計算する。Math.minは引数の中で最小の値を返す関数。Math.min(1, 1.001 - Math.pow(2, -10 * t))は1と1.001 - Math.pow(2, -10 * t)の中で最小の値を返す。
      orientation: "vertical",
      smoothWheel: true,
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
