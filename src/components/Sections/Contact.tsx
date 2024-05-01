//@ts-ignore
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Section, CompanyInfo } from '@/components/Sections/styles/Contact.styles';

type ProjectsProps = {
  id: string;
};

const Contact = ({ id }: ProjectsProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Section
      id={id} 
      className='main-contact section'
      initial={{ scale: 0, y: 100 }}
      whileInView={{ scale: 1, y: 0 }}
      viewport={{ once: false }}
    >
      <h1>{ t('Contact Us') }</h1>

      <section>

        <CompanyInfo>
          <div>
            <h3>{ t('Working Hours') }</h3>
            <p>{ t('Monday to Friday') }</p>
            <p>09:00 - 18:00</p>
            <p>{ t('Sat, Sun, Holidays') }</p>
            <p>{ t('Closed') }</p>
          </div>

          <div>
            <h3>{ t('Support') }</h3>
            <a href="mailto:dromcoders@gmail.com" target="_blank">dromcoders@gmail.com</a>
            <span>
              <a href="https://w.app/anadromcode" target="_blank">WhatsApp Ana</a>
              <a href="https://w.app/rogerdromcode" target='_blank'>WhatsApp Roger</a>
              <a href="https://www.instagram.com/drom_code/" target='_blank' rel='noopener noreferrer'>@drom_code</a>
            </span>
          </div>
        </CompanyInfo>
      </section>
    </Section>
  )
}

export default Contact