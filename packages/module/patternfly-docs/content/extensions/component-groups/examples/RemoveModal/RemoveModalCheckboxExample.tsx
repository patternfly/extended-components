import React from 'react';
import RemoveModal from '@patternfly/react-component-groups/dist/dynamic/RemoveModal';
import { Button } from '@patternfly/react-core';

export const BasicExample: React.FunctionComponent = () => {
  const [ isOpen, setIsOpen ] = React.useState(false);
  return <>
    <Button onClick={() => setIsOpen(true)}>Open modal</Button>
    <RemoveModal
      isOpen={isOpen}
      title='Remove Item?'
      text='Do you want to remove this item?'
      confirmButtonLabel='Yup'
      onClose={() => setIsOpen(false)}
      onSubmit={() => setIsOpen(false)}
      withCheckbox={true}
      confirmCheckMessage='checked'
    >
    </RemoveModal>
  </>
  
}