import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollTop(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[100]">
      <div
        className="h-[3px] bg-gold transition-all duration-200"
        style={{ width: `${scrollTop}%` }}
      />
    </div>
  );
}
