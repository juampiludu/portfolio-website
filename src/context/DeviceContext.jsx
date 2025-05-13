import { createContext, useMemo } from "react";

export const DeviceContext = createContext(false);

export default function DeviceProvider({ children }) {
  // const isMobile = useMemo(() => {
  //   return typeof window !== "undefined" && window.mobileCheck?.();
  // }, []);

  const isMobile = true;

  return (
    <DeviceContext.Provider value={isMobile}>{children}</DeviceContext.Provider>
  );
}
