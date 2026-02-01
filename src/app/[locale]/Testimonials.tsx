import React from 'react';
import { Star } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import GoogleLogo from '@/public/svg/GoogleLogo'
import { Button } from '@/components/ui/button'
import { LINK_TO_MAP } from '@/constants/links';

interface HighlightsProps {
  rating: number;
  className?: string;
}

function Highlights({ rating, className }: HighlightsProps) {
  const t = useTranslations('Testimonials');

  return (
    <div className={cn(className)}>
      <div className="flex justify-end items-end">
        <aside className="">
          <div className="flex justify-end space-x-0.5" aria-label={t('ratingAriaLabel', { rating })}>
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`sm:h-6 sm:w-6 h-4 w-4 ${index < rating ? 'text-primary fill-current' : 'text-foreground'}`}
                aria-hidden="true"
              />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

function TestimonialCard({ name, text }: { name: string; text: string }) {
  return (
    <Card className="w-full text-left mx-auto bg-background">
      <CardHeader className="flex flex-row items-center">
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className='text-lg font-light'>
        {text}
      </CardContent>
    </Card>
  );
}

export function Testimonials() {
  const t = useTranslations('Testimonials');

  const reviews = [
    { name: "Olga Dmytrenko", textKey: 'review1' },
    { name: "Yanina Yeremieieva", textKey: 'review2' },
    { name: "Julia Tserashchuk", textKey: 'review3' }
  ];

  return (
    <div className="relative bg-background-secondary">
      <section className="text-center container mx-auto pt-16 md:pt-20 lg:pt-28 pb-16 ">
        <h2 className="text-3xl xl:text-4xl font-semibold mb-8">{t('title')}</h2>
        <div className='sm:flex sm:justify-between px-10 mb-16 items-center'>
          <div className='flex'>
            <GoogleLogo className='w-8 h-8 fill-foreground-secondary' />
            <Button variant='link' className='xl:text-xl text-lg font-light'>
              <a href={LINK_TO_MAP} className="">{t('googleReviews')}</a>
            </Button>
          </div>
          <div className='flex gap-x-1 items-center'>
            <Highlights rating={5} />
            <h4 className='text-3xl font-semibold px-2'>5</h4>
            <p>{t('totalReviews', { count: 29 })}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {reviews.map((review, index) => (
            <TestimonialCard key={index} name={review.name} text={t(review.textKey)} />
          ))}
        </div>
      </section>
    </div>
  );
}