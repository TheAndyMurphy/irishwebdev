import React, { useEffect, useRef, useState } from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-slate-800 p-8 rounded-lg shadow-lg hover:shadow-sky-500/20 hover:-translate-y-2 transition-all duration-300 h-full">
      {children}
    </div>
  );
};

export default Card;


/**
 * Custom hook to detect when an element is in the viewport.
 * @param options - Optional IntersectionObserver options.
 * @returns A ref to attach to the element and a boolean indicating if it's visible.
 */
export const useScrollAnimation = (options?: IntersectionObserverInit) => {
    const ref = useRef<any>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(element);
            }
        }, {
            threshold: 0.1,
            ...options,
        });

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [options]);

    return { ref, isVisible };
};