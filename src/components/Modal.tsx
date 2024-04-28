import { Modal } from '@/components/styles/Modal.styles';
import { useRef } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
import { TeamMember } from '@/types/TeamMember';
import { useTranslation } from 'react-i18next';
import { LinkedinLogo } from '@phosphor-icons/react'

type ModalProps = {
  onClose: () => void;
  isModalOpen: boolean;
  teamMember: TeamMember | null;
  testId?: string;
};

/**
 * Modal component that displays information about a team member.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.teamMember - The team member object containing name, image, text, and linkedIn properties.
 * @param {boolean} props.isModalOpen - A boolean indicating whether the modal is open or not.
 * @param {Function} props.onClose - The function to be called when the modal is closed.
 * @param {string} [props.testId='modal'] - The test ID for the modal component.
 * @returns {JSX.Element} The rendered Modal component.
 */
const ModalComponent = ({ teamMember, isModalOpen, onClose, testId = 'modal' }: ModalProps): JSX.Element => {
  const articleRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useClickOutside(articleRef, onClose);

  const canOpen = isModalOpen && teamMember;
  return (
    <>
      {
        canOpen && (
          <Modal $isOpen={isModalOpen} data-testid={testId}>
            <article className='member' ref={articleRef}>
              <h4 className='member__name'>{ t(teamMember?.name) }</h4>
              <div className='member__image-wrapper'>
                <img className='member__image' src={`/images/${teamMember?.image}`} alt= {teamMember?.name} />
              </div>
              <div className='member__text-wrap'>
                <p>{ t(teamMember?.text) }</p>
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