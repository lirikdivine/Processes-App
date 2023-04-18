import { createContext, useState } from "react";


export const ProcessesContext = createContext()

export const data = []

const ProcessesProvider = ({ children }) => {
    const [processes, setProcesses] = useState(data)

    return (
        <ProcessesContext.Provider value={{ processes, setProcesses }}>
            {children}
        </ProcessesContext.Provider>
    )

}

export default ProcessesProvider;