import Popup, { IPopupProps } from '../../../shared/components/Popup';
import TextField from '../../../shared/components/TextField';
import React, { useState } from 'react';
import Button from '../../../shared/components/Button';
import { useAppDispatch } from '../../../app/hooks';
import { ICompanyData } from '../../../entities/company/types';
import { makeChangingCompanyData } from '../../../entities/company/model/selectors';

interface IEditCompanyPopupProps extends Omit<IPopupProps, 'children'> {
  currentCompany: ICompanyData;
}

const EditCompanyPopup: React.FC<IEditCompanyPopupProps> = ({ visible, handleClose, currentCompany }) => {
  const [company, setNewCompany] = useState({ name: currentCompany.name, address: currentCompany.address });
  const dispatch = useAppDispatch();

  const resetForm = () => {
    setNewCompany({ name: '', address: '' });
  };

  const handleEditCompany = () => {
    const newCompanyData: ICompanyData = {
      id: currentCompany.id,
      name: company.name,
      employeeCount: currentCompany.employeeCount,
      address: company.address,
    };
    resetForm();
    handleClose();
    dispatch(makeChangingCompanyData(newCompanyData));
  };

  return (
    <Popup
      visible={visible}
      handleClose={() => {
        handleClose();
        resetForm();
      }}>
      <TextField
        label={'Название компании'}
        value={company.name}
        handleChange={(value) => {
          setNewCompany((prev) => ({ ...prev, name: value }));
        }}
      />
      <TextField
        label={'Адрес'}
        value={company.address}
        handleChange={(value) => {
          setNewCompany((prev) => ({ ...prev, address: value }));
        }}
      />
      <Button onClick={handleEditCompany}>Сохранить изменения</Button>
    </Popup>
  );
};

export default EditCompanyPopup;
