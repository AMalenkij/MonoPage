import React from 'react';

import { cn } from "@/lib/utils";
import { SOCIAL_LINKS } from "@/constants/links";
import { Button } from "@/components/ui/button";

interface SocialLinksProps {
  variant: 'sidebar' | 'footer';
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ variant, className }) => {
  const isSidebar = variant === 'sidebar';

  return (
    <ul className={cn(
      "space-y-3",
      isSidebar && "flex flex-col justify-center items-center",
      !isSidebar && "",
      className
    )}>
      {SOCIAL_LINKS.map((social) => (
        <li key={social.name}>
          {isSidebar ? (
            <Button
              variant="outline"
              size="icon"
              asChild
              className="w-8 h-8 fill-primary"
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <social.icon className="w-8 h-8 fill-foreground-secondary/80 border border-ring/40 p-1 rounded-full hover:border-ring/100 hover:fill-foreground-secondary/100" />
                <span className="sr-only">{social.name}</span>
              </a>
            </Button>
          ) : (
            <Button
              variant="link"
              asChild
              className="p-0 hover:underline gap-x-1 text-lg font-normal"
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                  <social.icon className="w-8 h-8 fill-foreground-secondary/80 border border-ring/40 p-1 rounded-full hover:border-ring/100 hover:fill-foreground-secondary/100" />
                  {social.name}
              </a>
            </Button>
          )}
        </li>
      ))}
      {isSidebar && (
        <li>
          <div className="flex flex-col justify-center items-center mx-auto h-32 w-0.5 bg-foreground-secondary mt-2" />
        </li>
      )}
    </ul>
  );
};