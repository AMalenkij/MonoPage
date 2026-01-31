import { useTranslations } from 'next-intl'

import ModeToggle from "./ModeToggle"
import LanguageToggle from './LanguageToggle'
import NavMenu from './NavMenu'
import MobileMenu from './MobileMenu';
import Logo from './Logo';

export default function Header() {
  const tModeToggle = useTranslations('Header.ModeToggle')
  const tLanguageToggle = useTranslations('Header.LanguageToggle')

  return (
    <header className="flex container mx-auto justify-between items-center my-6 text-foreground-secondary">
      <Logo variant="header"/>
      <MobileMenu
      className="flex md:hidden"
      tModeToggle={{
        lightLabel: tModeToggle('lightLabel'),
        darkLabel: tModeToggle('darkLabel'),
        systemLabel: tModeToggle('systemLabel'),
        toggleTheme: tModeToggle('toggleTheme'),
        }}
      tLanguageToggle={{
        english: tLanguageToggle('english'),
        polski: tLanguageToggle('polski'),
        ukrainian: tLanguageToggle('ukrainian'),
        russian: tLanguageToggle('russian'),
        changeLanguage: tLanguageToggle('changeLanguage'),
        }}
        />
      <nav className="items-center space-x-2 hidden md:flex">
        <NavMenu variant='header' />
        <div className="flex items-center border-l border-foreground-secondary pl-4 space-x-2">
          <ModeToggle 
            variant="dropdown"
            lightLabel={tModeToggle('lightLabel')}
            darkLabel={tModeToggle('darkLabel')}
            systemLabel={tModeToggle('systemLabel')}
            toggleTheme={tModeToggle('toggleTheme')}
          />
          <LanguageToggle
            variant="dropdown"
            englishLabel={tLanguageToggle('english')}
            polishLabel={tLanguageToggle('polski')}
            ukrainianLabel={tLanguageToggle('ukrainian')}
            russianLabel={tLanguageToggle('russian')}
            changeLanguageLabel={tLanguageToggle('changeLanguage')}
          />
        </div>
      </nav>
    </header>
  )
}
