import { ArrowTopRightIcon, StarIcon } from "@radix-ui/react-icons"
import { useTranslations } from 'next-intl'
import Image from "next/image"

import ContactForm from "@/components/ContactForm"
import ProfileHighlights from "@/components/ProfileHighlights"
import { TextEffect } from '@/components/core/TextEffect'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import LenisProvider from '@/providers/LenisProvider'
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
    privacyLabel:tContacts('privacyLabel'),
    privacyPolicy:tContacts('privacyPolicy'),
    labelPrivacyPolicy:tContacts('labelPrivacyPolicy'),
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
      {/* <Button className="text-sm sm:text-xl px-6 py-2 sm:px-10 sm:py-4 mb-10">{tHero('heroButton')}<ArrowTopRightIcon className="ml-1 sm:ml-2 w-6 h-6 sm:w-8 sm:h-8"/></Button> */}
      <button className="no-underline disabled:cursor-not-allowed bg-white text-black active:bg-grey-300 border-transparent rounded-full group/arrow group/button inline-flex items-center overflow-hidden border text-base font-medium transition">
      <span className="pl-6 pr-16 py-3 relative inline-flex items-center">
        <span className="group-hover/button:-translate-x-1/3 group-hover/button:opacity-0 transition-[opacity,transform]">
        {tHero('heroButton')}
        </span>
        <div className="relative flex items-center justify-end inset-x-6 !absolute">
          <div className="group-hover/arrow:before:translate-x-0 absolute left-0 right-[2px] flex h-[1.5px] origin-right justify-end overflow-hidden rounded-full before:w-full before:translate-x-[calc(100%-16px)] before:rounded-full before:bg-current before:transition-transform"></div>
          <ArrowRight className="text-current" size={12} />
        </div>
      </span>
    </button>
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
    </div>
{/* Services Section */}
{/* <Services /> */}
{/* About Section */}
  {/* <About /> */}
  {/* Feedback */}
  {/* <Testimonials /> */}
{/* Contacts Section */}
{/* <Contacts /> */}
</LenisProvider>
  );
}