//@ts-nocheck

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Section, ArrowIcon, CarouselItem, CarouselImage, ModalContent } from '@/components/Sections/styles/Projects.styles';
import Button from '@/components/Button';
import { projects } from '@/data/projects';
import { usePagination } from '@/hooks/usePagination';
import Modal from '@/components/Modal';

type ProjectsProps = {
  id: string;
};

const Projects = ({ id }: ProjectsProps): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [animate, setAnimate] = useState(false);
  const [image, setImage] = useState<string>('');
  const [isNext, setIsNext] = useState<boolean | null>(null);
  const { pages, handlePrev, handleNext, disablePrev, disableNext } = usePagination(projects);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 500); // Adjust the duration of the animation as needed
    return () => clearTimeout(timer);
  }, [pages]);

  useEffect(() => {
    const currentLanguage = i18n.language;
    setImage(currentLanguage === 'pt_br' ? '/images/under-construcution.webp' : '/images/under-constrcution-enUS.webp');
  }, []);

  const handleNextClick = () => {
    setIsNext(true);
    handleNext();
  };

  const handlePrevClick = () => {
    setIsNext(false);
    handlePrev();
  };

  return (
    <>
      <Modal
      isModalOpen={isModalOpen}
      onClose={() => setModalOpen(false)}>
        <ModalContent>
          <div>
            <h1>{t('How It Works')}</h1>
            <p>{t('How It Works Text')}</p>
          </div>
          <section className='explanation-wrap'>
            <div>
              <h1>{t('Make A Difference')}</h1>
              <p>{t('Make A Difference Text')}</p>
            </div>
            <div>
              <h1>{t('Come With Us')}</h1>
              <p>{t('Come With Us Text')}</p>
            </div>
          </section>
        </ModalContent>
      </Modal>
      <Section
        id={id} 
        className='main-projects section'
      >
        <h1>{t('Projects Page Title')}</h1>

        <article className='carousel-wrap'>
          <h2>Logo mais teremos projetos fresquinhos para mostrar para vocês!</h2>
        </article>

        <article className='banner'>
          <img loading='lazy' src="/images/helping-hand.webp" alt="" />
          <div className='text-btn-wrap'>
            <h1>{t('Campaign Title')}</h1>
            <p>{t('Campaign Text')}</p>
            <Button
              onBtnClick={() => setModalOpen(true)}
              //@ts-ignore
              dataTestId='campaign-button'
              className='campaign-button'
            >{t('Campaign Button')}</Button>
          </div>
        </article>
      </Section>
    </>
  )
}

export default Projects