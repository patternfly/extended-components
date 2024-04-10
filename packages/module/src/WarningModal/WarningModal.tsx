import React, { useState } from 'react';
import { Button, ModalProps, Modal, ModalVariant, ButtonVariant, Checkbox } from '@patternfly/react-core';

export interface WarningModalProps extends Omit<ModalProps, 'ref'> {
  /** Callback for the confirm action button. */
  onConfirm?: () => void;
  /** Custom label for the confirm action button */
  confirmButtonLabel?: string;
  /** Custom label for the cancel action button */
  cancelButtonLabel?: string;
  /** Whether modal requires a checkbox before confirming */
  withCheckbox?: boolean;
  /** Custom checkbox label */
  checkboxLabel?: string;
  /** Visual variant of the confirm button */
  confirmButtonVariant?: ButtonVariant;
}

const WarningModal: React.FunctionComponent<WarningModalProps> = ({
  isOpen,
  onConfirm,
  onClose,
  children,
  confirmButtonLabel = 'Confirm',
  cancelButtonLabel = 'Cancel',
  variant = ModalVariant.small,
  titleIconVariant = 'warning',
  withCheckbox = false,
  checkboxLabel='I understand that this action cannot be undone',
  confirmButtonVariant = ButtonVariant.primary,
  ...props
}: WarningModalProps) => {
  const [ checked, setChecked ] = useState(false);

  return (
    <Modal
      variant={variant}
      isOpen={isOpen}
      onClose={onClose}
      onEscapePress={onClose}
      titleIconVariant={titleIconVariant}
      actions={[
        <Button
          ouiaId="primary-confirm-button"
          key="confirm"
          variant={confirmButtonVariant}
          onClick={() => {
            onConfirm?.();
            setChecked(false);
          }}
          isDisabled={withCheckbox && !checked}
        >
          {confirmButtonLabel}
        </Button>,
        <Button
          ouiaId="secondary-cancel-button"
          key="cancel"
          variant={ButtonVariant.link}
          onClick={onClose}
        >
          {cancelButtonLabel}
        </Button>,
      ]}
      {...props}
    >
      {children}
      {withCheckbox ? (
        <Checkbox
          isChecked={checked}
          onChange={(_event, value) => setChecked(value)}
          label={checkboxLabel}
          id="warning-modal-check"
          className="pf-v5-u-mt-lg"
        />
      ) : null}
    </Modal>
  )
  
};


export default WarningModal;
