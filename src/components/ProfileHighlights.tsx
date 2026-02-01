import React from 'react';
import { Star } from 'lucide-react';

import { SocialLinks } from './layout/SocialLinks';
import { cn } from "@/src/lib/utils"

interface ProfileHighlightsProps {
  yearsOfExperience: number
  rating: number
  className?: string
  tYears: string
  tExperience: string
  tRating: string
  tOutOf: string
}

export function ProfileHighlights({ yearsOfExperience, rating, className, tYears, tExperience, tRating, tOutOf }: ProfileHighlightsProps) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      className={`sm:h-6 sm:w-6 h-4 w-4 ${index < rating ? 'text-primary fill-current' : 'text-foreground'}`}
      aria-hidden="true"
    />
  ));

  return (
    <div className={cn(className)}>
      <div className="flex justify-end items-end">
        <aside className="mb-4">
          <div className="flex justify-end space-x-0.5" aria-label={`${tRating} ${rating} ${tOutOf}`}>
            {stars}
          </div>
          <p className="sm:text-3xl text-lg text-right font-semibold text-foreground-secondary">{yearsOfExperience} {tYears}</p>
          <p className="sm:text-xl text-xl text-right font-light">{tExperience}</p>
        </aside>
        <SocialLinks variant="sidebar" className="xl:block hidden" />
      </div>
    </div>
  );
}