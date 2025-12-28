import React from "react";

export default function CText({ size = "md", text = "", className = "" }) {
    const sizes = {
        xs: 16,
        sm: 18,
        md: 20,
        lg: 24,
        xl: 30,
        h1: 64,
        h2: 52,
        h3: 48,
        h4: 32,
        h5: 26,
        h6: 24,
    };
    console.log(className);
    return (
        <p style={{ fontSize: sizes[size] }} className={className}>
            {text}
        </p>
    );
}
