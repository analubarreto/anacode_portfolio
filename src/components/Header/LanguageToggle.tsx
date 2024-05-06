import { useTranslation } from 'react-i18next';
import { languages } from '@/data/language';
import { useMemo, useState } from 'react';
import { Button, Wrapper } from '@/components/Header/styles/LanguageToggle.styles';

type LanguageToggleProps = {
  className?: string;
}

const LanguageToggle = ({ className }: LanguageToggleProps): JSX.Element => {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState('pt_br');
     
  const languageList = useMemo(() => languages, []);

  const toggleLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
    setActiveLanguage(newLanguage);
  }

  const ariaLabel = `toggle-de-idioma-${activeLanguage}`;

  return (
    <Wrapper className={className}>
      {
        languageList.map(language => (
          <Button
            aria-label={ariaLabel}
            $isActive={activeLanguage === language.code}
            key={language.id}
            onClick={() => toggleLanguage(language.code)}
          >
            {language.name}
          </Button>
        ))
      }
  </Wrapper>
  )
};

export default LanguageToggle;