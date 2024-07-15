import React, { useMemo, useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import useAppDispatch from '../../../app/hooks/useAppDispatch';
import { getCompanies } from '../../../entities/company/model/selectors';
import { IEmployee } from '../../../entities/employee/types';
import Popup, { IPopupProps } from '../../../shared/components/Popup/Popup';
import { ValidationObject } from '../../../shared/types';
import TextField from '../../../shared/components/TextField';
import SelectField from '../../../shared/components/SelectField';
import Button from '../../../shared/components/Button';
import { addEmployeeThunk } from '../../../entities/employee/model/selectors';
import { nanoid } from 'nanoid';
import ValidationService from '../../../app/services/ValidationService';

interface IAddEmployeePopupProps extends Omit<IPopupProps, 'children'> {}

interface INewEmployeeData extends Omit<IEmployee, 'id'> {}

const AddEmployeePopup: React.FC<IAddEmployeePopupProps> = ({ visible, handleClose }) => {
  const dispatch = useAppDispatch();
  const companies = useAppSelector(getCompanies());
  const [emploee, setEmploee] = useState<INewEmployeeData>({
    companyId: '',
    lastName: '',
    firstName: '',
    position: '',
  });
  const [emploeeValidation, setEmploeeValidation] = useState<ValidationObject>({
    companyId: { isValid: false, error: null },
    lastName: { isValid: false, error: null },
    firstName: { isValid: false, error: null },
    position: { isValid: false, error: null },
  });
  const isInvalidForm = Object.values(emploeeValidation).some((field) => !field.isValid);

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
      <SelectField
        optionsData={companiesArra}
        selectedOptionValue={emploee.companyId}
        error={emploeeValidation.companyId.error}
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
      <Button
        disabled={isInvalidForm}
        onClick={handleAddCompany}>
        Добавить работника
      </Button>
    </Popup>
  );
};

export default AddEmployeePopup;
