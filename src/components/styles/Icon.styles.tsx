import styled from 'styled-components';

/**
 * Represents an icon component with customizable size and color.
 *
 * @param size - The size of the icon in rem units.
 */
export const Icon = styled.span<{ size: number, $hasPointer: boolean }>`
  font-size: ${({ size }) => size}rem;
  cursor: ${({ $hasPointer }) => $hasPointer ? 'pointer' : 'default'};
  .material-symbols-rounded, .material-icons-round {
    font-variation-settings:
    'FILL' 0,
    'wght' 300,
    'GRAD' 0,
    'opsz' 40
  }
`;