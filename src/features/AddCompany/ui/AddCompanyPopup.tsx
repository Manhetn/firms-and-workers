import Popup, { IPopupProps } from '../../../shared/components/Popup';
import TextField from '../../../shared/components/TextField';
import React, { useState } from 'react';
import Button from '../../../shared/components/Button';
import { nanoid } from 'nanoid';
import { useAppDispatch } from '../../../app/hooks';
import { ICompanyData } from '../../../entities/company/types';
import { addNewCompany } from '../../../entities/company/model/selectors';

interface IAddCompanyPopupProps extends Omit<IPopupProps, 'children'> {}

type TNewCompanyData = Pick<ICompanyData, 'name' | 'address'>;

const AddCompanyPopup: React.FC<IAddCompanyPopupProps> = ({ visible, handleClose }) => {
  const [company, setNewCompany] = useState<TNewCompanyData>({ name: '', address: '' });
  const dispatch = useAppDispatch();

  const resetForm = () => {
    setNewCompany({ name: '', address: '' });
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
      <Button onClick={handleAddCompany}>Добавить компанию</Button>
    </Popup>
  );
};

export default AddCompanyPopup;
