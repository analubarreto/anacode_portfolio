//@ts-ignore
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import ModalComponent from '../Modal';

describe('ModalComponent', () => {
  const teamMember = {
    id: 1,
    name: 'John Doe',
    image: 'john-doe.jpg',
    text: 'Lorem ipsum dolor sit amet',
    textContinuation: 'consectetur adipiscing elit',
    linkedIn: 'https://www.linkedin.com/in/johndoe'
  };

  it('renders the modal when isModalOpen is true and teamMember is defined', () => {
    render(
      <ModalComponent
        teamMember={teamMember}
        isModalOpen={true}
        onClose={jest.fn()}
        testId="modal"
      />
    );

    const modalElement = screen.getByTestId('modal');
    expect(modalElement).toBeInTheDocument();
  });

  it('does not render the modal when isModalOpen is false', () => {
    render(
      <ModalComponent
        teamMember={teamMember}
        isModalOpen={false}
        onClose={jest.fn()}
        testId="modal"
      />
    );

    const modalElement = screen.queryByTestId('modal');
    expect(modalElement).not.toBeInTheDocument();
  });

  it('does not render the modal when teamMember is undefined', () => {
    render(
      <ModalComponent
        teamMember={null}
        isModalOpen={true}
        onClose={jest.fn()}
        testId="modal"
      />
    );

    const modalElement = screen.queryByTestId('modal');
    expect(modalElement).not.toBeInTheDocument();
  });
});