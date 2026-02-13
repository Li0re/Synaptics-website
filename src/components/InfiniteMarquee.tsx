import { useRef, useEffect } from "react";

interface InfiniteMarqueeProps {
    speed?: number;
}

const MARQUEE_ITEMS = [
    "AI AGENTS",
    "VOICE",
    "EMAIL TRIAGE",
    "DOCUMENTS",
    "INVOICING",
    "AUTOMATION",
    "LLMs",
    "WORKFLOWS",
    "24/7",
];

const MarqueeRow = ({ reverse = false, speed = 30 }: { reverse?: boolean; speed?: number }) => {
    const content = MARQUEE_ITEMS.map((item, i) => (
        <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot">•</span>
        </span>
    ));

    return (
        <div
            className="marquee-track"
            style={{
                animationDirection: reverse ? "reverse" : "normal",
                animationDuration: `${speed}s`,
            }}
        >
            {content}
            {content}
            {content}
        </div>
    );
};

const InfiniteMarquee = ({ speed = 30 }: InfiniteMarqueeProps) => {
    return (
        <div className="marquee-container">
            <MarqueeRow speed={speed} />
            <MarqueeRow reverse speed={speed * 1.3} />
        </div>
    );
};

export default InfiniteMarquee;
