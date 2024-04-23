import { useTranslation } from 'react-i18next';
import { languages } from '@/data/language';
import { useMemo, useState } from 'react';
import { Button, Wrapper } from '@/components/Header/styles/LanguageToggle.styles';

type LanguageToggleProps = {
  isOnTop: boolean;
}

const LanguageToggle = ({ isOnTop }: LanguageToggleProps): JSX.Element => {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState('pt_br');
     
  const languageList = useMemo(() => languages, []);

  const toggleLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
    setActiveLanguage(newLanguage);
  }

  return (
    <Wrapper>
      {
        languageList.map(language => (
          <Button
            $isActive={activeLanguage === language.code}
            key={language.id}
            onClick={() => toggleLanguage(language.code)}
            $isOnTop={isOnTop}
          >
            {language.name}
          </Button>
        ))
      }
  </Wrapper>
  )
};

export default LanguageToggle;