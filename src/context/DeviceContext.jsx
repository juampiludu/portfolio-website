import { createContext, useMemo } from "react";
import deviceIsMobile from "../util/device";

export const DeviceContext = createContext(false);

export default function DeviceProvider({ children }) {
  const isMobile = useMemo(() => {
    return deviceIsMobile();
  }, []);

  return (
    <DeviceContext.Provider value={isMobile}>{children}</DeviceContext.Provider>
  );
}
