import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { languages } from '@/data/language';
import { useMemo, useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Button = styled.button<{ theme: string, $isActive: boolean }>`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: ${({ $isActive }) => $isActive ? 'bold' : 'normal' };
  transition: font-weight 0.3s ease-in-out;

  @media (min-width: 768px) {
    margin-left: 1.6rem;
  }
`;

const LanguageToggle = (): JSX.Element => {
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
          >
            {language.name}
          </Button>
        ))
      }
  </Wrapper>
  )
};

export default LanguageToggle;