import Popup, { IPopupProps } from '../../../shared/components/Popup/Popup';
import TextField from '../../../shared/components/TextField/TextField';
import React, { useState } from 'react';
import Button from '../../../shared/components/Button/Button';
import { nanoid } from 'nanoid';
import { useAppDispatch } from '../../../app/hooks';
import { ICompanyData } from '../../../entities/company/types';
import { addNewCompany } from '../../../entities/company/model/selectors';
import { ValidationObject } from '../../../shared/types';
import ValidationService from '../../../app/services/ValidationService';

interface IAddCompanyPopupProps extends Omit<IPopupProps, 'children'> {}

type TNewCompanyData = Pick<ICompanyData, 'name' | 'address'>;

const AddCompanyPopup: React.FC<IAddCompanyPopupProps> = ({ visible, handleClose }) => {
  const [company, setNewCompany] = useState<TNewCompanyData>({ name: '', address: '' });
  const [companyValidation, setCompanyValidation] = useState<ValidationObject>({
    name: { isValid: false, error: null },
    address: { isValid: false, error: null },
  });
  const isInvalidForm = Object.values(companyValidation).some((field) => !field.isValid);

  const dispatch = useAppDispatch();

  const resetForm = () => {
    setNewCompany({ name: '', address: '' });
    setCompanyValidation({
      name: { isValid: false, error: null },
      address: { isValid: false, error: null },
    });
  };

  const handleAddCompany = () => {
    const newCompany: ICompanyData = {
      id: nanoid(),
      name: company.name,
      employeeCount: 0,
      address: company.address,
    };
    resetForm();
    dispatch(addNewCompany(newCompany));
    handleClose();
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
        onClick={handleAddCompany}>
        Добавить компанию
      </Button>
    </Popup>
  );
};

export default AddCompanyPopup;
