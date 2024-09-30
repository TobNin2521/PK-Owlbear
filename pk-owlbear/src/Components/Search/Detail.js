import { useEffect } from "react";

export const Detail = () => {

    useEffect(() => {
        
    }, []);

    return (
        <div>
            {localStorage.getItem("r")}
            {localStorage.getItem("s")}
            Hallo
        </div>
    )
};