import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AboutUsSection } from '@/components/Sections/styles/AboutUs.styles';
import { LinkedinLogo } from '@phosphor-icons/react'
import Modal from '@/components/Modal';
import { team } from '@/data/teamInfo';
import { TeamMember } from '@/types/TeamMember';

type AboutUsPropsType = {
  id: string;
};

const AboutUs = ({ id }: AboutUsPropsType): JSX.Element => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamMember, setTeamMember] = useState<TeamMember | null>(null);

  const handleModalToggle = (teamMember: TeamMember | null) => {
    if (!teamMember) return;

    setTeamMember(teamMember);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Modal isModalOpen={isModalOpen} onClose={() => handleModalToggle(null)} teamMember={teamMember} />
      <AboutUsSection id={id} className='main-about-us section'>
      <h1>{ t('About Us') }</h1>
      <p>{ t('About Us Text') }</p>

        <div className='our-team'>
          <h3 className='our-team__title'>{ t('Our Team') }</h3>

          <div className='our-team__members'>
            {
              team.map((member, index) => (
                <div className='our-team__members--member' key={index}>
                  <div className='image-wrapper'>
                    <img src={`/images/${member.image}`} alt={member.name} />
                  </div>
                  <div className='text-wrapper'>
                    <h4>{ t(member.name) }</h4>
                    <p>{ t(member.text) } 
                      <button onClick={() => handleModalToggle(member)}>{ t('Read More') }</button>
                    </p>
                    <a href={member.linkedIn} target='_blank' rel='noreferrer'>
                      <LinkedinLogo className='linkedin' size={40} />
                    </a>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </AboutUsSection>
    </>
  )
}

export default AboutUs