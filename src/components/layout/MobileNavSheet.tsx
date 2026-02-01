import { ModeToggle } from "./ModeToggle";
import { LanguageToggle } from './LanguageToggle';
import { Accordion } from "@/components/ui/accordion";
import { SocialLinks } from './SocialLinks';
import { NavBar } from './NavBar';
import { cn } from "@/src/lib/utils";
import { Logo } from "../Logo";
import { ClientSheet } from "./ClientSheet";

interface MobileNavSheetProps {
  tModeToggle: {
    lightLabel: string;
    darkLabel: string;
    systemLabel: string;
    toggleTheme: string;
  };
  tLanguageToggle: {
    english: string;
    polski: string;
    ukrainian: string;
    russian: string;
    changeLanguage: string;
  };
  className?: string;
}

export function MobileNavSheet({
  tModeToggle,
  tLanguageToggle,
  className,
}: MobileNavSheetProps) {
  return (
    <ClientSheet
      className={cn("md:hidden", className)}
      title="Mobile Menu"
      nameBtn="Toggle menu"
    >
      <nav className="flex flex-col space-y-4">
        <Logo variant="dialog" />
        <Accordion type="single" collapsible className="w-full">
          <LanguageToggle
            variant="accordion"
            englishLabel={tLanguageToggle.english}
            polishLabel={tLanguageToggle.polski}
            ukrainianLabel={tLanguageToggle.ukrainian}
            russianLabel={tLanguageToggle.russian}
            changeLanguageLabel={tLanguageToggle.changeLanguage}
          />
          <ModeToggle
            variant="accordion"
            lightLabel={tModeToggle.lightLabel}
            darkLabel={tModeToggle.darkLabel}
            systemLabel={tModeToggle.systemLabel}
            toggleTheme={tModeToggle.toggleTheme}
          />
        </Accordion>
        <NavBar variant='default' className='flex flex-col items-start' />
      </nav>
      <SocialLinks
        variant="sidebar"
        className="flex flex-col justify-center items-center absolute bottom-10 right-10"
      />
    </ClientSheet>
  );
}