//@ts-ignore
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AboutUsSection } from '@/components/Sections/styles/AboutUs.styles';
import { LinkedinLogo } from '@phosphor-icons/react'

type AboutUsPropsType = {
  id: string;
};

const AboutUs = ({ id }: AboutUsPropsType): JSX.Element => {
  const { t } = useTranslation();

  const team = [
    {
      name: 'Ana Luiza',
      text: 'Ana Luiza Text 1',
      textContinuation: 'Ana Luiza Text 2',
      image: 'ana-no-bg.webp',
      linkedIn: 'https://www.linkedin.com/in/ana-luiza-barreto-marinho-81340b123/'
    },
    {
      name: 'Roger',
      text: 'Roger Text 1',
      textContinuation: 'Roger Text 2',
      image: 'roger-no-bg.webp',
      likedIn: 'https://www.linkedin.com/in/roger-milan-5211b115b/'
    }
  ]

  return (
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
                  <p>{ t(member.text) } <span>{ t('Read More') }</span></p>
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
  )
}

export default AboutUs