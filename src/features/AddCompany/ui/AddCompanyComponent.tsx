import React, { useState } from 'react';
import AddCompanyPopup from './AddCompanyPopup';
import { IconPlus } from '../../../shared/components/Icons';
import Button from '../../../shared/components/Button';

const AddCompanyComponent: React.FC = () => {
  const [showAddCompanyPopup, setShowAddCompanyPopup] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShowAddCompanyPopup(true)}
        additionalClasses='button_width48'>
        <IconPlus />
      </Button>
      <AddCompanyPopup
        visible={showAddCompanyPopup}
        handleClose={() => setShowAddCompanyPopup(false)}
      />
    </>
  );
};

export default AddCompanyComponent;
