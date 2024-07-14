import React, { useState } from 'react';
import Button from '../../../shared/components/Button';
import { IconPlus } from '../../../shared/components/Icons';
import AddEmployeePopup from './AddEmployeePopup';

const AddEmployeeComponent: React.FC = () => {
  const [showAddEmployeePopup, setShowAddEmployeePopup] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShowAddEmployeePopup(true)}
        additionalClasses='button_width48'>
        <IconPlus />
      </Button>
      <AddEmployeePopup
        visible={showAddEmployeePopup}
        handleClose={() => setShowAddEmployeePopup(false)}
      />
    </>
  );
};

export default AddEmployeeComponent;
