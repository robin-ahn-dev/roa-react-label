import { createContext, useContext, useState } from "react";

const pagesContext = createContext({});

const usePagesContext = () => {
    const [pageTitle, setPageTitle] = useState("Start");

    document.title = pageTitle;

    return {
        pageTitle,
        setPageTitle,
    };
};

export const usePages = () => useContext(pagesContext);
export const PagesProvider = ({ children }) => {
    const data = usePagesContext();
    return (
        <pagesContext.Provider value={data}>{children}</pagesContext.Provider>
    );
};

export default usePages;
