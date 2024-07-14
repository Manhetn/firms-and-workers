import React, { useState } from 'react';
import AddCompanyPopup from './AddCompanyPopup';
import Button from '../../../shared/components/Button';
import { IconPlus } from '../../../shared/components/Icons';

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
