//@ts-ignore
import React from 'react';
import { render } from '@testing-library/react';
import LanguageToggle from '../LanguageToggle';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';

jest.mock('i18next', () => ({
  use: () => ({
    i18n: {
      changeLanguage: jest.fn(),
      language: 'pt_br',
    },
  }),
  getFixedT: jest.fn(),
  changeLanguage: jest.fn(),
}));

describe('LanguageToggle', () => {
  test('renders the language buttons correctly', () => {
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <LanguageToggle />
      </I18nextProvider>
    );
    
    const languageList = [
      { id: 1, code: 'pt_br', name: 'PT-BR' },
      { id: 2, code: 'en', name: 'EN' },
    ];

    languageList.forEach(language => {
      const button = getByText(language.name);
      expect(button).toBeInTheDocument();
    });
  });

  // test('changes language when button is clicked', async () => {
  //   const { getByText } = render(
  //     <I18nextProvider i18n={i18n}>
  //       <LanguageToggle />
  //     </I18nextProvider>
  //   );
  
  //   fireEvent.click(getByText('EN'));
  
  //   await waitFor(() => {
  //     expect(i18n.changeLanguage).toHaveBeenCalledWith('en');
  //   });
  // });
});