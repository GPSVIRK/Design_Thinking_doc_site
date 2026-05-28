import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, className = '', delay = 0, amount = 0.2 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: amount }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [amount]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}
