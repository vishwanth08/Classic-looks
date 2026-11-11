"use client";

import { MotionConfig } from "framer-motion";
import { createContext, useContext, useState } from "react";
import LoadingScreen from "./LoadingScreen";

const ReadyContext = createContext(false);

/** True once the loading screen has finished. The hero waits for this before animating in. */
export const useSiteReady = () => useContext(ReadyContext);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  return (
    // reducedMotion="user" turns off movement for visitors who ask their device for less motion
    <MotionConfig reducedMotion="user">
      <ReadyContext.Provider value={ready}>
        <LoadingScreen onDone={() => setReady(true)} />
        {children}
      </ReadyContext.Provider>
    </MotionConfig>
  );
}
