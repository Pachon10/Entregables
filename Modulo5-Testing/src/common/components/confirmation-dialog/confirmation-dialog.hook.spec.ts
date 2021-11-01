import { renderHook, act } from '@testing-library/react-hooks';
import { createEmptyLookup, Lookup } from '../../../common/models';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('common/confirmation-dialoghook', () => {
  it('should return onAccept', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    result.current.onAccept();

    // Assert
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
    expect(result.current.isOpen).toBeFalsy();
  });

  it('should return onOpenDialog', () => {
    // Arrange
    const lookup = { id: "id1", name: "name1"} as Lookup

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    result.current.onOpenDialog(lookup);

    // Assert
    expect(result.current.itemToDelete).toEqual(lookup);
    expect(result.current.isOpen).toBeTruthy();
  });

  it('should return onClose', () => {
    // Arrange
    const lookup = { id: "id2", name: "name2"} as Lookup

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    result.current.onOpenDialog(lookup);
    result.current.onClose();

    // Assert
    expect(result.current.itemToDelete).toEqual(lookup);
    expect(result.current.isOpen).toBeFalsy();
  });
});
