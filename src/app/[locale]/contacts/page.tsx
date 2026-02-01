import { useTranslations } from 'next-intl'

import { ContactForm } from "@/components/ContactForm"
import { Logo } from '@/components/Logo'
import { Map } from "@/src/app/[locale]/contacts/_components/Map"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"

import { InView } from '@/components/core/InView'
import { LINK_TO_MAP } from '@/constants/links'
import { COMPANY_NAME_FULL, LOCATION_IN_MAP } from '@/constants/setting'


export default function Contacts() {
  const tContacts = useTranslations('HomePage.ContactsSection')
  const tFooter = useTranslations('HomePage.FooterSection');

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
  }

  return (
    <InView
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
          scale: 0.95,
          filter: 'blur(4px)',
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
        },
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      viewOptions={{ margin: '0px 0px -350px 0px' }}
    >
      <section className="bg-background-secondary pb-28">
        <header className="text-center pt-16 md:pt-20 lg:pt-28 ">
          <h1 className="text-3xl xl:text-4xl font-semibold mb-8">{tContacts('title')}</h1>
          <p className="xl:text-xl text-lg font-light  mb-24">{tContacts('subTitle')}</p>
        </header>
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-y-4 lg:gap-x-4">
          <article className="lg:w-1/2 w-full h-full">
            <Card className="text-left mx-auto">
              <CardHeader className="flex flex-col items-center p-6">
                <CardDescription className="lg:text-2xl text-xl font-semibold text-foreground">{tContacts('subTitleCard')}</CardDescription>
              </CardHeader>
              <CardContent className="mb-10">
                <ContactForm contactTranslations={contactTranslations} />
              </CardContent>
            </Card>
          </article>
          <aside className="lg:w-1/2 w-full h-full shadow-sm">
            <Map location={LOCATION_IN_MAP}>
              <div className='text-muted-foreground flex flex-col gap-y-2 text-center items-center'>
                <Logo variant='map' />
                <h3>{COMPANY_NAME_FULL}</h3>
                <p>{`${tFooter('address')}, ${tFooter('city')}, ${tFooter('postalCode')}`}</p>
                <Button variant='link' className='text-muted-foreground font-light'><a href={LINK_TO_MAP}>{tContacts('mapLinkText')}</a></Button>
              </div>
            </Map>
          </aside>
        </div>
      </section>
    </InView>
  );
}