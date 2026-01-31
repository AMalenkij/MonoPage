import { ArrowTopRightIcon, StarIcon } from "@radix-ui/react-icons"
import { useTranslations } from 'next-intl'
import Image from "next/image"

import ContactForm from "@/components/ContactForm"
import ProfileHighlights from "@/components/ProfileHighlights"
import { TextEffect } from '@/components/core/TextEffect'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import LenisProvider from '@/src/providers/LenisProvider'
import { BackgroundCircle } from '@/public/svg/BackgroundCircle'
import { CirclePattern } from '@/public/svg/CirclePattern'

import Hero from '@/public/img/hero.webp'
import About from './about/page'
import Contacts from './contacts/page'
import Services from './services/page'
import Testimonials from './Testimonials'

export default function Home() {
  const tHero = useTranslations('HomePage.HeroSection')
  const tAbout = useTranslations('HomePage.AboutUsSection')
  const tContacts = useTranslations('HomePage.ContactsSection')
  const contactTranslations = {
    privacyError: tContacts('privacyError'),
    nameLabel: tContacts('nameLabel'),
    namePlaceholder: tContacts('namePlaceholder'),
    phoneLabel: tContacts('phoneLabel'),
    phonePlaceholder: tContacts('phonePlaceholder'),
    messageLabel: tContacts('messageLabel'),
    messagePlaceholder: tContacts('messagePlaceholder'),
    submitButton: tContacts('submitButton'),
    successMessage: tContacts('successMessage'),
    errorMessage: tContacts('errorMessage'),
    errorOccurred: tContacts('errorOccurred'),
    privacyLabel: tContacts('privacyLabel'),
    privacyPolicy: tContacts('privacyPolicy'),
    labelPrivacyPolicy: tContacts('labelPrivacyPolicy'),
    ValidationMessages: {
      name: {
        minLength: tContacts('ValidationMessages.name.minLength'),
      },
      phone: {
        invalid: tContacts('ValidationMessages.phone.invalid'),
        length: tContacts('ValidationMessages.phone.length'),
      },
      message: {
        minLength: tContacts('ValidationMessages.message.minLength'),
      }
    },
  };
  return (
    <LenisProvider>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row lg:items-end sm:h-[1100px] h-[900px] container mx-auto">
        <section className="w-full lg:w-1/2 lg:h-2/3 flex-row  mt-12 sm:mt-10">
          <TextEffect className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-semibold mb-4 sm:mb-7 lg:mb-10" as='h1' preset='fade'>
            {tHero('title')}
          </TextEffect>
          <TextEffect className="pl-1 text-lg font-light sm:text-2xl md:text-lg lg:text-lg mb-6 lg:mb-14" per='word' as='p' preset='blur'>
            {tHero('subTitle')}
          </TextEffect>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-sm sm:text-xl px-6 py-2 sm:px-10 sm:py-4 mb-10">{tHero('heroButton')}<ArrowTopRightIcon className="ml-1 sm:ml-2 w-6 h-6 sm:w-8 sm:h-8" /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-1/3">
              <DialogHeader>
                <DialogTitle className="text-3xl font-semibold mb-4">{tContacts('titleCard')}</DialogTitle>
                <DialogDescription className="text-lg text-foreground">{tContacts('subTitleCard')}</DialogDescription>
              </DialogHeader>
              <ContactForm contactTranslations={contactTranslations} />
            </DialogContent>
          </Dialog>
        </section>
        {/* <HeroImage /> */}
        <div className="relative overflow-hidden xl:pr-20">
          <StarIcon className="absolute top-[24%] left-[6%] sm:h-6 sm:w-6 h-5 w-5 fill-primary" />
          <StarIcon className="absolute right-[5%] sm:bottom-50 bottom-[6%] sm:h-6 sm:w-24 h-5 w-5 " />
          <CirclePattern className='h-44 w-32 absolute left-[10%] bottom-[3%] -z-10' />
          <BackgroundCircle className='absolute -bottom-1/4 w-full h-full -z-20 fill-popover' />
          <ProfileHighlights
            className='absolute right-[5%] top-0'
            yearsOfExperience={8}
            rating={5}
            tYears={tHero('years')}
            tExperience={tHero('experience')}
            tRating={tHero('rating')}
            tOutOf={tHero('outOf')}
          />
          <Image
            src={Hero}
            alt={tAbout('firstImageAlt')}
            className="object-contain w-full h-full max-h-[85vh] min-h-[75vh]"
            priority
          />
        </div>
      </div>
      {/* Services Section */}
      <Services />
      {/* About Section */}
      <About />
      {/* Feedback */}
      <Testimonials />
      {/* Contacts Section */}
      <Contacts />
    </LenisProvider>
  );
}