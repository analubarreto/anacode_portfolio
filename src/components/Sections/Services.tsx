import { useTranslation } from 'react-i18next';
import { Section } from '@/components/Sections/styles/Services.styles';
import { services, servicesAddons } from '@/data/services';
import Icon from '@/components/Icon';
import Button from '@/components/Button';

type ProjectsProps = {
  id: string;
};

const Services = ({ id }: ProjectsProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Section
      id={id}
      className='main-services section'
    >
      <article className='main-services__title'>
        <h1>{t('Services Page Title')}</h1>
      </article>

      <section className='services-wrapper'>
        {
          services.map((service) => {
            return (
              <div key={service.id} className='service' data-testid='service'>
                <div className='service__title'>
                  <Icon name={service.icon} size={4.8} isSymbol={service.isIconSymbol || false} className='service__title--icon' />
                  <h3>{t(service.title).toUpperCase()}</h3>
                </div>
                <p className='service__text'>{t(service.description)}</p>
              </div>
            );
          })
        }
      </section>
      <Button isLink href='#contact'>{t('Contact Us')}</Button>
      <section className='services-addons'>
        <h3>{t('Our Services Include')}</h3>
        <div className='addon-wrapper'>
          {
            servicesAddons.map((serviceInclude, index) => {
              return (
                <div key={index} className='addon' data-testid='addon'>
                  <Icon hasPointer={false} name='check_box' size={2.7} isSymbol={true} className='addon__icon' />
                  <p className='addon__text'>{t(serviceInclude)}</p>
                </div>
              );
            })
          }
        </div>
      </section>
    </Section>
  )
}

export default Services