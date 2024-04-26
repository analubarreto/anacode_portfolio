import styled from 'styled-components';

/**
 * Represents an icon component with customizable size and color.
 *
 * @param size - The size of the icon in rem units.
 */
export const Icon = styled.span<{ size: number }>`
  font-size: ${({ size }) => size}rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;