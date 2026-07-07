import { ReactNode } from "react";

interface LinkWithUnderlineProps {
    href: string;
    external?: boolean;
    children: ReactNode;
}

const LinkWithUnderline = ({ href, external, children }: LinkWithUnderlineProps) => (
    <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="flex items-center relative group"
    >
        {children}
        <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
);

export default LinkWithUnderline;
