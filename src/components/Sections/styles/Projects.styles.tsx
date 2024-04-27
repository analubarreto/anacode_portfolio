import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled(motion.section)<{ theme: any }>`
  &.main-projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`;