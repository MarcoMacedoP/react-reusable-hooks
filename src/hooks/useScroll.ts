import { useEffect } from "react";

type onScroll = (position: { x: number; y: number }) => void;

export default function useScroll(onScroll: onScroll) {
    // running on mount
    useEffect(() => {
        const handleScroll = () => {
            onScroll({ x: window.scrollX, y: window.scrollY });
        };

        // setting the event handler from web API
        window.addEventListener("scroll", handleScroll);

        // cleaning up from the web API
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
}
