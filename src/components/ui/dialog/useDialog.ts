"use client";

import { useState, useCallback } from "react";

export const useDialog = (defaultOpen = false) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen(prev => !prev), []);

    const setOpen = useCallback((open: boolean) => setIsOpen(open), []);
    return {
        isOpen,
        open,
        close,
        toggle,
        setIsOpen: setOpen,
    };
};
