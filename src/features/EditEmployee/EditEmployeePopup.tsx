import { useState } from 'react';
import { IEmployee } from '../../entities/employee/types';
import Popup, { IPopupProps } from '../../shared/components/Popup';
import { useAppDispatch } from '../../app/hooks';
import TextField from '../../shared/components/TextField/TextField';
import Button from '../../shared/components/Button';
import { makeEditEmployeeData } from '../../entities/employee/model/selectors';
import { ValidationObject } from '../../shared/types';
import ValidationService from '../../app/Services/ValidationService';

interface IEditEmployeePopupProps extends Omit<IPopupProps, 'children'> {
  currentEmployee: IEmployee;
}

const EditEmployeePopup: React.FC<IEditEmployeePopupProps> = ({ visible, handleClose, currentEmployee }) => {
  const dispatch = useAppDispatch();
  const [employee, setEmployee] = useState({
    lastName: currentEmployee.lastName,
    firstName: currentEmployee.firstName,
    position: currentEmployee.position,
  });
  const [emploeeValidation, setEmploeeValidation] = useState<ValidationObject>({
    lastName: { isValid: true, error: null },
    firstName: { isValid: true, error: null },
    position: { isValid: true, error: null },
  });
  const isInvalidForm = Object.values(emploeeValidation).some((field) => !field.isValid);

  const resetForm = () => {
    setEmployee({
      lastName: '',
      firstName: '',
      position: '',
    });
    setEmploeeValidation({
      lastName: { isValid: true, error: null },
      firstName: { isValid: true, error: null },
      position: { isValid: true, error: null },
    });
  };

  const handleEditEmployee = () => {
    const newCompanyData: IEmployee = {
      id: currentEmployee.id,
      companyId: currentEmployee.companyId,
      lastName: employee.lastName,
      firstName: employee.firstName,
      position: employee.position,
    };
    resetForm();
    handleClose();
    dispatch(makeEditEmployeeData(newCompanyData));
  };

  return (
    <Popup
      visible={visible}
      handleClose={() => {
        handleClose();
        resetForm();
      }}>
      <TextField
        label={'Имя'}
        error={emploeeValidation.firstName.error}
        value={employee.firstName}
        handleChange={(value) => {
          setEmployee((prev) => ({ ...prev, firstName: value }));
          setEmploeeValidation((prev) => ({ ...prev, firstName: ValidationService.validateField(value) }));
        }}
      />
      <TextField
        label={'Фамилия'}
        error={emploeeValidation.lastName.error}
        value={employee.lastName}
        handleChange={(value) => {
          setEmployee((prev) => ({ ...prev, lastName: value }));
          setEmploeeValidation((prev) => ({ ...prev, lastName: ValidationService.validateField(value) }));
        }}
      />
      <TextField
        label={'Должность'}
        error={emploeeValidation.position.error}
        value={employee.position}
        handleChange={(value) => {
          setEmployee((prev) => ({ ...prev, position: value }));
          setEmploeeValidation((prev) => ({ ...prev, position: ValidationService.validateField(value) }));
        }}
      />
      <Button
        disabled={isInvalidForm}
        onClick={handleEditEmployee}>
        Сохранить изменения
      </Button>
    </Popup>
  );
};

export default EditEmployeePopup;
