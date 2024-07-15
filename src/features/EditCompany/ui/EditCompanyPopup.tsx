import React, { useState } from 'react';
import Popup, { IPopupProps } from '../../../shared/components/Popup/Popup';
import { ICompanyData } from '../../../entities/company/types';
import { ValidationObject } from '../../../shared/types';
import { useAppDispatch } from '../../../app/hooks';
import { makeChangingCompanyData } from '../../../entities/company/model/selectors';
import TextField from '../../../shared/components/TextField';
import Button from '../../../shared/components/Button';
import ValidationService from '../../../app/services/ValidationService';

interface IEditCompanyPopupProps extends Omit<IPopupProps, 'children'> {
  currentCompany: ICompanyData;
}

const EditCompanyPopup: React.FC<IEditCompanyPopupProps> = ({ visible, handleClose, currentCompany }) => {
  const dispatch = useAppDispatch();
  const [company, setNewCompany] = useState({ name: currentCompany.name, address: currentCompany.address });
  const [companyValidation, setCompanyValidation] = useState<ValidationObject>({
    name: { isValid: true, error: null },
    address: { isValid: true, error: null },
  });
  const isInvalidForm = Object.values(companyValidation).some((field) => !field.isValid);

  const resetForm = () => {
    setNewCompany({ name: '', address: '' });
    setCompanyValidation({
      name: { isValid: true, error: null },
      address: { isValid: true, error: null },
    });
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
        error={companyValidation.name.error}
        handleChange={(value) => {
          setNewCompany((prev) => ({ ...prev, name: value }));
          setCompanyValidation((prev) => ({ ...prev, name: ValidationService.validateField(value) }));
        }}
      />
      <TextField
        label={'Адрес'}
        value={company.address}
        error={companyValidation.address.error}
        handleChange={(value) => {
          setNewCompany((prev) => ({ ...prev, address: value }));
          setCompanyValidation((prev) => ({ ...prev, address: ValidationService.validateField(value) }));
        }}
      />
      <Button
        disabled={isInvalidForm}
        onClick={handleEditCompany}>
        Сохранить изменения
      </Button>
    </Popup>
  );
};

export default EditCompanyPopup;
