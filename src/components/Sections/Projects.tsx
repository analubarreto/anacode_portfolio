import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Section, ArrowIcon, CarouselItem, CarouselImage } from '@/components/Sections/styles/Projects.styles';
import Button from '@/components/Button';
import { projects } from '@/data/projects';
import { usePagination } from '@/hooks/usePagination';

type ProjectsProps = {
  id: string;
};

const Projects = ({ id }: ProjectsProps): JSX.Element => {
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);
  const { pages, handlePrev, handleNext, disablePrev, disableNext } = usePagination(projects);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 500); // Adjust the duration of the animation as needed
    return () => clearTimeout(timer);
  }, [pages]);

  return (
    <Section
      id={id} 
      className='main-projects section'
    >
      <h1>{t('Projects Page Title')}</h1>

      <article className='carousel-wrap'>
        {
          pages.map((project, index) => (
            <CarouselItem key={index}>
              <div className='carousel-item__data'>
                <div className='carousel-item__data--info'>
                  <h3>{ project.title }</h3>
                  <p className='description'>{ t(project.description) }</p>
                  <p className='what-was-done'>{ t(project.whatWasDone) }</p>
                  <Button isLink href={project.url}>Visite a página</Button>
                </div>
                <div className='carousel-item__data--arrows'>
                  <ArrowIcon
                    $isDisabled={disablePrev}
                    onClick={handlePrev}
                    name='arrow_circle_left' 
                    size={4}
                    isSymbol />
                  <ArrowIcon
                    $isDisabled={disableNext}
                    onClick={handleNext}
                    name='arrow_circle_right' 
                    size={4} 
                    isSymbol />
                </div>
              </div>
              <CarouselImage
                $animate={animate}
                src={project.image} 
                alt={project.title} />
            </CarouselItem>
          ))
        }
      </article>
    </Section>
  )
}

export default Projects