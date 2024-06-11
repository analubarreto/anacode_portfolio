import { useTranslation } from 'react-i18next';
import { Section, CompanyInfo, Banner } from '@/components/Sections/styles/Contact.styles';

type ProjectsProps = {
  id: string;
};

/**
 * Renders the Contact section of the portfolio.
 *
 * @param {ProjectsProps} props - The component props.
 * @returns {JSX.Element} The rendered Contact section.
 */
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
            <h2>{ t('Working Hours') }</h2>
            <p>{ t('Monday to Friday') }</p>
            <p>09:00 - 18:00</p>
            <p>{ t('Sat, Sun, Holidays') }</p>
            <p>{ t('Closed') }</p>
          </div>

          <div>
            <h2>{ t('Support') }</h2>
            <a aria-label={t('Send us an Email')} href="mailto:help@dromcode.com" target="_blank">help@dromcode.com</a>
            <span>
              <a aria-label={t('Lets talk on whatsapp')} href="https://wa.me/+5519982770698" target="_blank">WhatsApp Ana</a>
              <a aria-label={t('Lets talk on whatsapp')} href="https://wa.me/+5511986546691" target='_blank'>WhatsApp Roger</a>
              <a aria-label={t('Know more about us')} href="https://www.instagram.com/drom_code/" target='_blank' rel='noopener noreferrer'>@drom_code</a>
            </span>
          </div>
        </CompanyInfo>
      </section>

      <Banner className='banner'>
        <img loading='lazy' src="/images/helping-hand.webp" alt="" />
        <div className='text-btn-wrap'>
          <h1>{t('Campaign Title')}</h1>
          <p>{t('Campaign Text')}</p>
        </div>
      </Banner>
    </Section>
  )
}

export default Contact