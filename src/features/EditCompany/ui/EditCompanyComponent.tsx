import { useState } from 'react';
import EditCompanyPopup from './EditCompanyPopup';
import { ICompanyData } from '../../../entities/company/types';
import Button from '../../../shared/components/Button';
import { IconEdit } from '../../../shared/components/Icons';

interface IEditCompanyComponentProps {
  company: ICompanyData;
}

const EditCompanyComponent: React.FC<IEditCompanyComponentProps> = ({ company }) => {
  const [showEditCompanyPopup, setShowEditCompanyPopup] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShowEditCompanyPopup(true)}
        additionalClasses='button_width48'>
        <IconEdit />
      </Button>
      <EditCompanyPopup
        visible={showEditCompanyPopup}
        currentCompany={company}
        handleClose={() => setShowEditCompanyPopup(false)}
      />
    </>
  );
};

export default EditCompanyComponent;
