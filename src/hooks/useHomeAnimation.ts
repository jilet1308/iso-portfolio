import { useState, useEffect } from "react";
import { SEARCH_QUERY, type Phase } from "../types/HomeTypes";

export function useHomeAnimation() {
  const [phase, setPhase] = useState<Phase>("typing");
  const [typedText, setTypedText] = useState("");
  const [visibleResults, setVisibleResults] = useState(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const [browserVisible, setBrowserVisible] = useState(false);

  // Browser card entrance
  useEffect(() => {
    const t = setTimeout(() => setBrowserVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Typing
  useEffect(() => {
    if (phase !== "typing") return;
    if (typedText.length >= SEARCH_QUERY.length) {
      const t = setTimeout(() => setPhase("searching"), 450);
      return () => clearTimeout(t);
    }
    const delay = 55 + Math.random() * 50;
    const t = setTimeout(
      () => setTypedText(SEARCH_QUERY.slice(0, typedText.length + 1)),
      delay,
    );
    return () => clearTimeout(t);
  }, [phase, typedText]);

  // Searching → results
  useEffect(() => {
    if (phase !== "searching") return;
    const t = setTimeout(() => setPhase("results"), 700);
    return () => clearTimeout(t);
  }, [phase]);

  // Results stagger
  useEffect(() => {
    if (phase !== "results") return;
    const timers = [0, 280, 500].map((d, i) =>
      setTimeout(() => setVisibleResults(i + 1), d),
    );
    const next = setTimeout(() => setPhase("hovering"), 1600);
    return () => [...timers, next].forEach(clearTimeout);
  }, [phase]);

  // Hovering → clicking
  useEffect(() => {
    if (phase !== "hovering") return;
    const t = setTimeout(() => setPhase("clicking"), 900);
    return () => clearTimeout(t);
  }, [phase]);

  // Clicking → loading
  useEffect(() => {
    if (phase !== "clicking") return;
    const t = setTimeout(() => setPhase("loading"), 280);
    return () => clearTimeout(t);
  }, [phase]);

  // Loading progress bar → transitioning
  useEffect(() => {
    if (phase !== "loading") return;
    setLoadProgress(0);
    const steps = [
      [80, 120],
      [55, 80],
      [60, 60],
      [70, 50],
    ] as const;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let acc = 0;
    steps.forEach(([prog, delay]) => {
      acc += delay;
      timers.push(setTimeout(() => setLoadProgress(prog), acc));
    });
    const done = setTimeout(() => {
      setLoadProgress(100);
      setTimeout(() => setPhase("transitioning"), 200);
    }, acc + 60);
    return () => [...timers, done].forEach(clearTimeout);
  }, [phase]);

  // Transitioning → landed
  useEffect(() => {
    if (phase !== "transitioning") return;
    const t = setTimeout(() => setPhase("landed"), 550);
    return () => clearTimeout(t);
  }, [phase]);

  const skip = () => {
    setBrowserVisible(false);
    setPhase("landed");
  };

  const showBrowser = phase !== "landed";
  const isTransitioning = phase === "transitioning";
  const addressBar =
    phase === "loading" || phase === "transitioning"
      ? "ismaildcokluk.com"
      : "google.com/search?q=Ismail+Dogukan+Çokluk";

  return {
    phase,
    typedText,
    visibleResults,
    loadProgress,
    browserVisible,
    skip,
    showBrowser,
    isTransitioning,
    addressBar,
  };
}
