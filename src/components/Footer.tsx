import { useTranslations } from 'next-intl';

import { SocialLinks } from '@/components/SocialLinks'
import { NavMenu } from '@/components/NavMenu'
import { Logo } from './Logo';

export function Footer() {
  const tFooter = useTranslations('HomePage.FooterSection');

  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center justify-center">
            <Logo variant='footer' />
            <h3 className="text-lg font-bold mb-2">{tFooter('companyName')}</h3>
            <p className="font-light text-center">{tFooter('slogan')}</p>
          </div>
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-4">{tFooter('contactInfoTitle')}</h4>
            <ul className="space-y-2 text-lg">
              <li className='font-semibold'>{tFooter('openingHours')}</li>
              <li>{tFooter('telephoneNumber')}</li>
              <li>{tFooter('nip')}</li>
              <li>{tFooter('email')}</li>
              <li>{tFooter('city')}</li>
              <li>{tFooter('address')}</li>
              <li>{tFooter('postalCode')}</li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col text-start">
            <h4 className="text-lg font-bold ">{tFooter('linksTitle')}</h4>
            <NavMenu variant="footer" className="flex flex-col items-start" />
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4 ">{tFooter('socialMediaTitle')}</h4>
            <SocialLinks variant="footer" />
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-10 pt-8 border-t text-center">
          <p className="font-light">{tFooter('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}