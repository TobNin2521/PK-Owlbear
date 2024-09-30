import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";


export const Detail = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        searchParams.get("r");
        searchParams.get("s");
    }, []);

    return (
        <div>
            {searchParams.get("r")}
            {searchParams.get("s")}
        </div>
    )
};