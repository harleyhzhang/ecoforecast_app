import type { ComponentPropsWithoutRef } from "react";

type Tone = "brand" | "neutral";
type LinkSize = "compact" | "regular" | "large";
type Appearance = { tone?: Tone };
type LinkProps = Appearance & ComponentPropsWithoutRef<"a"> & { href: string; size?: LinkSize };
type NativeButtonProps = Appearance & ComponentPropsWithoutRef<"button"> & { href?: never; size?: never };

const base = "font-product-sans-light-regular text-white rounded-full";
const tones: Record<Tone, string> = { brand: "bg-blue", neutral: "bg-black" };
const linkSizes: Record<LinkSize, string> = {
    compact: "text-sm px-3 sm:px-4 py-2",
    regular: "text-[.85rem] sm:text-sm px-5 py-2",
    large: "text-sm sm:text-base px-5 sm:px-7 py-2 sm:py-3",
};
const linkBehavior = "tracking-wide flex items-center justify-center hover:opacity-90 transition-opacity duration-300";
const buttonBehavior = "text-sm px-6 py-3 hover:bg-opacity-90 transition-colors duration-300";

// href selects a native link; otherwise this is a native button. className is
// reserved for surrounding layout (margins), rather than appearance overrides.
// Native form buttons retain their existing roomier padding and inherited tracking.
const Button = (props: LinkProps | NativeButtonProps) => {
    if (props.href !== undefined) {
        const { tone = "brand", size = "regular", className = "", ...linkProps } = props;
        return (
            <a
                {...linkProps}
                rel={linkProps.rel ?? (linkProps.target === "_blank" ? "noopener noreferrer" : undefined)}
                className={`${base} ${tones[tone]} ${linkBehavior} ${linkSizes[size]} ${className}`}
            />
        );
    }
    const { tone = "brand", type = "button", className = "", ...buttonProps } = props;
    return (
        <button
            {...buttonProps}
            type={type}
            className={`${base} ${tones[tone]} ${buttonBehavior} ${className}`}
        />
    );
};

export default Button;
