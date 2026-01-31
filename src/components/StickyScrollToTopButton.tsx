'use client';

import { useState, useEffect } from 'react';
import { ArrowUpIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

const StickyScrollToTopButton = ({StickyScrollToTopButton} : {StickyScrollToTopButton: string}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show the button when the page is scrolled 2 screen heights
      setIsVisible(window.scrollY > window.innerHeight * 2);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8">
      {isVisible && (
        <Button
          className="flex flex-col gap-2 h-full "
          onClick={scrollToTop}
          aria-label={StickyScrollToTopButton}
			    variant='link'
        >
          <ArrowUpIcon className="h-6 w-6" />
          <span className="vertical-lr">{StickyScrollToTopButton}</span>      
			</Button>
      )}
    </div>
  );
};

export default StickyScrollToTopButton;