//@ts-ignore
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Section } from '@/components/Sections/styles/Projects.styles';
import { services } from '@/data/services';
import Icon from '@/components/Icon';

type ProjectsProps = {
  id: string;
};

const Services = ({ id }: ProjectsProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Section
      id={id}
      className='main-services section'
      initial={{ scale: 0, y: 100 }}
      whileInView={{ scale: 1, y: 0 }}
      viewport={{ once: false }}
    >
      <h1>{t('Services')}</h1>

      <section>
        {
          services.map((service) => {
            return (
              <div key={service.id} className='service'>
                <Icon name={service.icon} size={4.8} isSymbol={service.isIconSymbol || false} className='service__icon' />
                <div>
                  <h3>{t(service.title).toUpperCase()}</h3>
                  <p>{t(service.description)}</p>
                </div>
              </div>
            );
          })
        }
      </section>
    </Section>
  )
}

export default Services