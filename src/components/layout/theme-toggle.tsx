"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-9 h-9"></div>;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md border border-border hover:bg-muted transition-colors flex items-center justify-center"
            aria-label="Toggle theme"
        >
            <Sun className="h-5 w-5 hidden dark:block text-primary" />
            <Moon className="h-5 w-5 block dark:hidden text-primary" />
        </button>
    );
}