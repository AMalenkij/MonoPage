import { StarFilledIcon } from "@radix-ui/react-icons"
import { useTranslations } from 'next-intl'
import Image from "next/image"

import { InView } from '@/components/core/InView'
import aboutImg from '@/public/img/about.webp'
import aboutImg2 from '@/public/img/about2.webp'
import { CirclePattern } from '@/public/svg/CirclePattern'

export default function About() {
  const tAbout = useTranslations('HomePage.AboutUsSection')

  return (
    <>
{/* About Section */}
<article className='bg-background flex flex-col'>
  <div className="flex flex-col-reverse md:flex-row md:items-center md:h-[900px] md:relative container mx-auto mt-16 md:mt-20 lg:mt-28">
  <CirclePattern className='h-56 w-32 absolute right-[40%] top-[3%] -rotate-12 hidden lg:block' />

    <section className="md:w-1/2 ">
    <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
      <h2 className="text-3xl xl:text-4xl font-semibold mb-14 pt-12">{tAbout('mainTitle')}</h2>
      <p className="xl:text-xl text-lg font-light mb-8">{tAbout('mainDescription')}</p>
      <h2 className="lg:text-2xl text-xl font-semibold mb-8">{tAbout('firstSubTitle')}</h2>
      <p className="xl:text-xl text-lg font-light md:mb-96 lg:mb-16 mb-8">{tAbout('firstDescription')}</p>
      </InView>
    </section>

    <figure className='h-full md:w-1/2 md:relative'>
      <Image 
        src={aboutImg}
        alt={tAbout('firstImageAlt')}
        className="object-contain w-full h-full xl:max-h-[65vh] max-h-[50vh] md:sticky md:top-0"
        priority
      />
    </figure>
  </div>

  <div className="flex flex-col md:flex-row md:items-center md:h-[900px] md:relative container mx-auto mt-16 md:mt-20 lg:mt-28">
  <CirclePattern className='h-64 w-32 absolute left-[40%] top-[3%] hidden lg:block' />
  <StarFilledIcon className="absolute top-2/3 left-[45%] sm:h-6 sm:w-6 h-5 w-5 fill-primary z-30 hidden lg:block" />
  <figure className='h-full md:w-1/2 md:relative'>
      <Image 
        src={aboutImg2}
        alt={tAbout('secondImageAlt')}
        className="object-contain w-full h-full xl:max-h-[65vh] max-h-[50vh] md:sticky md:top-0"
        priority
      />
    </figure>
    
    <section className="md:w-1/2 mt-16 md:mt-0">
    <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
      <h2 className="lg:text-2xl text-xl font-semibold mb-8">{tAbout('secondSubTitle')}</h2>
      <p className="xl:text-xl text-lg font-light mb-14">{tAbout('secondDescription')}</p>
      <h2 className="lg:text-2xl text-xl font-semibold mb-8">{tAbout('thirdSubTitle')}</h2>
      <p className="xl:text-xl text-lg font-light mb-14">{tAbout('thirdDescription')}</p>
      </InView>
    </section>
  </div>
</article>
</>
  );
}