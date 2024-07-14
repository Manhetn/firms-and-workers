import Popup, { IPopupProps } from '../../../shared/components/Popup';
import TextField from '../../../shared/components/TextField';
import React, { useMemo, useState } from 'react';
import Button from '../../../shared/components/Button';
import { nanoid } from 'nanoid';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getCompanies } from '../../../entities/company/model/selectors';
import SelectComponent from '../../../shared/components/SelectField/SelectField';
import { IEmployee } from '../../../entities/employee/types';
import { IValidateResult } from '../../../shared/types';
import ValidationService from '../../../app/Services/ValidationService';
import { addEmployeeThunk } from '../../../entities/employee/model/selectors';

interface IAddEmployeePopupProps extends Omit<IPopupProps, 'children'> {}

interface INewEmployeeData extends Omit<IEmployee, 'id'> {}

const AddEmployeePopup: React.FC<IAddEmployeePopupProps> = ({ visible, handleClose }) => {
  const companies = useAppSelector(getCompanies());
  const [emploee, setEmploee] = useState<INewEmployeeData>({
    companyId: '',
    lastName: '',
    firstName: '',
    position: '',
  });
  const [emploeeValidation, setEmploeeValidation] = useState<Record<string, IValidateResult>>({
    companyId: { isValid: false, error: null },
    lastName: { isValid: false, error: null },
    firstName: { isValid: false, error: null },
    position: { isValid: false, error: null },
  });

  const dispatch = useAppDispatch();

  const resetForm = () => {
    setEmploee({
      companyId: '',
      lastName: '',
      firstName: '',
      position: '',
    });
    setEmploeeValidation({
      companyId: { isValid: false, error: null },
      lastName: { isValid: false, error: null },
      firstName: { isValid: false, error: null },
      position: { isValid: false, error: null },
    });
  };

  const handleAddCompany = () => {
    const newEmploee: IEmployee = {
      id: nanoid(),
      companyId: emploee.companyId,
      lastName: emploee.lastName,
      firstName: emploee.firstName,
      position: emploee.position,
    };
    resetForm();

    dispatch(addEmployeeThunk(newEmploee));
    handleClose();
  };

  const companiesArra = useMemo(() => {
    return companies.map((company) => {
      return {
        value: company.id,
        label: company.name,
      };
    });
  }, [companies]);

  return (
    <Popup
      visible={visible}
      handleClose={() => {
        handleClose();
        resetForm();
      }}>
      <SelectComponent
        optionsData={companiesArra}
        selectedOptionValue={emploee.companyId}
        handleChange={(value) => {
          setEmploee((prev) => ({ ...prev, companyId: value }));
          setEmploeeValidation((prev) => ({ ...prev, companyId: ValidationService.validateField(value) }));
        }}
      />
      <TextField
        label={'Имя'}
        error={emploeeValidation.firstName.error}
        value={emploee.firstName}
        handleChange={(value) => {
          setEmploee((prev) => ({ ...prev, firstName: value }));
          setEmploeeValidation((prev) => ({ ...prev, firstName: ValidationService.validateField(value) }));
        }}
      />
      <TextField
        label={'Фамилия'}
        error={emploeeValidation.lastName.error}
        value={emploee.lastName}
        handleChange={(value) => {
          setEmploee((prev) => ({ ...prev, lastName: value }));
          setEmploeeValidation((prev) => ({ ...prev, lastName: ValidationService.validateField(value) }));
        }}
      />
      <TextField
        label={'Должность'}
        error={emploeeValidation.position.error}
        value={emploee.position}
        handleChange={(value) => {
          setEmploee((prev) => ({ ...prev, position: value }));
          setEmploeeValidation((prev) => ({ ...prev, position: ValidationService.validateField(value) }));
        }}
      />
      <Button onClick={handleAddCompany}>Добавить работника</Button>
    </Popup>
  );
};

export default AddEmployeePopup;
