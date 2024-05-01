import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AboutUsSection } from '@/components/Sections/styles/AboutUs.styles';
import { LinkedinLogo } from '@phosphor-icons/react'
import Modal from '@/components/Modal';
import { team } from '@/data/teamInfo';
import { aboutInfo } from '@/data/aboutUsInfo';
import { TeamMember } from '@/types/TeamMember';
import Icon from '@/components/Icon';

type AboutUsPropsType = {
  id: string;
};

/**
 * Renders the About Us section.
 *
 * @param {AboutUsPropsType} props - The component props.
 * @returns {JSX.Element} The rendered About Us section.
 */
const AboutUs = ({ id }: AboutUsPropsType): JSX.Element => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamMember, setTeamMember] = useState<TeamMember | null>(null);

  const handleModalToggle = (teamMember: TeamMember | null): void => {
    if (teamMember) setTeamMember(teamMember);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Modal isModalOpen={isModalOpen} onClose={() => handleModalToggle(null)} teamMember={teamMember} testId='modal' />
      <AboutUsSection
        id={id} 
        className='main-about-us section' 
        data-testid='about-us'
        initial={{ scale: 0, y: 100 }}
        whileInView={{ scale: 1, y: 0 }}
        viewport={{ once: false }}
      >
        <h1>{t('About Us')}</h1>

        <section className='who-are-we'>
          {
            aboutInfo.map((info, index) => (
              <div className='who-are-we__info' key={index}>
                <Icon name={info.icon} size={4.8} isSymbol className='who-are-we__info--icon' />
                <div>
                  <h3>{t(info.title).toUpperCase()}</h3>
                  <p>{t(info.text)}</p>
                </div>
              </div>
            ))
          }
        </section>

        <section className='our-team'>
          <h3 className='our-team__title'>{t('Our Team')}</h3>

          <div className='our-team__members'>
            {team.map((member, index) => (
              <div className='our-team__members--member' key={index} onClick={() => handleModalToggle(member)}>
                <div className='image-wrapper' data-testid='member-image'>
                  <img src={`/images/${member.image}`} alt={member.name} />
                </div>
                <div className='text-wrapper'>
                  <h4>{t(member.name)}</h4>
                  <a href={member.linkedIn} target='_blank' rel='noopener noreferrer'>
                    <LinkedinLogo className='linkedin' size={40} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AboutUsSection>
    </>
  );
};

export default AboutUs