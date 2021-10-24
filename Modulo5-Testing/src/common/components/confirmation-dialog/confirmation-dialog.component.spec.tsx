import { render , screen}  from "@testing-library/react";
import userEvent  from "@testing-library/user-event";
import React from "react";
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('common/confirmation-dialogComponent', () => {
  it('should be render as expected passing required properties', () => {
     // Arrange
     const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: "titleAlert",
      labels: {
        closeButton: "closeAlert",
        acceptButton: "acceptAlert"
      }
    };

    // Act
    render(
      <ConfirmationDialogComponent {...props} />
    );
    const closeButton =  screen.getByRole('button',{name: /closeAlert/i});
    const acceptButton =  screen.getByRole('button',{name: /acceptAlert/i});
    const title =  screen.getByText(props.title);
    const dialog =  screen.getByRole('dialog');
    const presentacion =  screen.getByRole('presentation');
    userEvent.click(closeButton);
    userEvent.click(acceptButton);

    // Assert
    expect(title).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
    expect(acceptButton).toBeInTheDocument();
    expect(dialog).toBeInTheDocument();
    expect(presentacion).toBeInTheDocument();
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });

  it('should be render as expected passing optional properties', () => {
    // Arrange
    const props = {
     isOpen: true,
     onAccept: jest.fn(),
     onClose: jest.fn(),
     title: "titleAlert",
     labels: {
       closeButton: "closeAlert",
       acceptButton: "acceptAlert"
     },
     children: "Contenido opcional"
   };

   // Act
   const { getByText } = render(
     <ConfirmationDialogComponent {...props} />
   );

   const dialog =  screen.getByRole('dialog');
   const presentacion =  screen.getByRole('presentation');
   const closeButton = getByText(props.labels.closeButton);
   const acceptButton = getByText(props.labels.acceptButton);
   userEvent.click(closeButton);
   userEvent.click(acceptButton);

    // Assert
    expect(getByText(props.title)).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
    expect(acceptButton).toBeInTheDocument();
    expect(getByText(props.children)).toBeInTheDocument();
    expect(dialog).toBeInTheDocument();
    expect(presentacion).toBeInTheDocument();
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });
});
