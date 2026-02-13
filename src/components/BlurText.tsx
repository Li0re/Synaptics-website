import { useRef, useEffect, useState } from 'react';

export const BlurText = ({
    text,
    delay = 200,
    animateBy = 'words', // 'words' or 'letters'
    direction = 'top', // 'top' or 'bottom'
    threshold = 0.1,
    rootMargin = '0px',
    animationFrom,
    animationTo,
    className = '',
}: {
    text: string;
    delay?: number;
    animateBy?: 'words' | 'letters';
    direction?: 'top' | 'bottom';
    threshold?: number;
    rootMargin?: string;
    animationFrom?: Record<string, string | number>;
    animationTo?: Record<string, string | number>;
    className?: string;
}) => {
    const elements = animateBy === 'words' ? text.split(' ') : text.split('');
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            { threshold, rootMargin }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const defaultFrom =
        direction === 'top'
            ? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }
            : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' };

    const defaultTo = {
        filter: 'blur(0px)',
        opacity: 1,
        transform: 'translate3d(0,0,0)',
    };

    return (
        <span ref={ref} className={`blur-text ${className} inline-block`}>
            {elements.map((wordOrChar, index) => (
                <span
                    key={index}
                    style={{
                        display: 'inline-block',
                        transition: 'all 800ms cubic-bezier(0.2, 0.65, 0.3, 0.9)',
                        transitionDelay: `${index * delay}ms`,
                        filter: inView ? (animationTo?.filter as string || defaultTo.filter) : (animationFrom?.filter as string || defaultFrom.filter),
                        opacity: inView ? (animationTo?.opacity as number || defaultTo.opacity) : (animationFrom?.opacity as number || defaultFrom.opacity),
                        transform: inView ? (animationTo?.transform as string || defaultTo.transform) : (animationFrom?.transform as string || defaultFrom.transform),
                        paddingRight: animateBy === 'words' ? '0.25em' : '0',
                        willChange: 'transform, filter, opacity',
                    }}
                >
                    {wordOrChar === ' ' ? '\u00A0' : wordOrChar}
                </span>
            ))}
        </span>
    );
};

export default BlurText;
