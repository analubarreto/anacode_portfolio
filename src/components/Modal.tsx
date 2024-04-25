import { Modal } from '@/components/styles/Modal.styles';
import { useRef } from 'react';
import useClickOutside from '@/hooks/useClickOutside';
import { TeamMember } from '@/types/TeamMember';
import { useTranslation } from 'react-i18next';
import { LinkedinLogo } from '@phosphor-icons/react'

type ModalProps = {
  onClose: () => void;
  isModalOpen: boolean;
  teamMember: TeamMember | null;
};

const ModalComponent = ({ teamMember, isModalOpen, onClose }: ModalProps): JSX.Element => {
  const articleRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useClickOutside(articleRef, onClose);

  const canOpen = isModalOpen && teamMember;
  return (
    <>
      {
        canOpen && (
          <Modal $isOpen={isModalOpen}>
            <article className='member' ref={articleRef}>
              <h4 className='member__name'>{ t(teamMember?.name) }</h4>
              <div className='member__image-wrapper'>
                <img className='member__image' src={`/images/${teamMember?.image}`} alt= {teamMember?.name} />
              </div>
              <div className='member__text-wrap'>
                <p>{ t(teamMember?.text) } { t(teamMember?.textContinuation) }</p>
                <a href={teamMember.linkedIn} target='_blank' rel='noreferrer'><LinkedinLogo size={40} /></a>
              </div>
            </article>
          </Modal>
        )
      }
    </>
  );
};

export default ModalComponent;