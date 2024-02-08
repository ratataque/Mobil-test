import { createContext, useContext } from "react"
import { useState } from "react"

const color =  createContext(0)
const setColor =  createContext()

export function ColorProvider({ children }) {
  const colors = ["red", "blue"]
  const [colorValue, setColorValue] = useState(0)
  

  return (
    <color.Provider value={colorValue}>
      <setColor.Provider value={setColorValue}>
        {children}
      </setColor.Provider>
    </color.Provider>
    
  );
}

export const useColorValue = () => {
  return useContext(color);
}
export const useSetColorValue = () => {
  return useContext(setColor);
}
