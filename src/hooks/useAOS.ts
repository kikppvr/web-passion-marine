import { useEffect } from "react";

export const useAOS = () => {
    useEffect(() => {
        const initAOS = async () => {
            const AOS = (await import("aos")).default;
            AOS.init({
                duration: 1000,
                easing: "ease-out",
                once: true,
                offset: 100,
            });
        };
        initAOS();
    }, []);
};
