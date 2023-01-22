import { useContext, useState, createContext } from "react";

const ModeContext = createContext(undefined);

export function ModeProvider({children}) {
    
    const [mode, setMode] = useState("light");

    return (
        <ModeContext.Provider
            value={{
                theme: mode,
                toggleTheme: () => setMode(mode === "light" ? "dark" : "light"),
            }}
        >
            {children}
        </ModeContext.Provider>
    );
};

export const useTheme = () => useContext(ModeContext);