import { useState } from 'react';
import { IEmployee } from '../../entities/employee/types';
import Popup, { IPopupProps } from '../../shared/components/Popup';
import { useAppDispatch } from '../../app/hooks';
import TextField from '../../shared/components/TextField';
import Button from '../../shared/components/Button';
import { makeEditEmployeeData } from '../../entities/employee/model/selectors';

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

  const resetForm = () => {
    setEmployee({
      lastName: '',
      firstName: '',
      position: '',
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
        value={employee.firstName}
        handleChange={(value) => {
          setEmployee((prev) => ({ ...prev, firstName: value }));
        }}
      />
      <TextField
        label={'Фамилия'}
        value={employee.lastName}
        handleChange={(value) => {
          setEmployee((prev) => ({ ...prev, lastName: value }));
        }}
      />
      <TextField
        label={'Должность'}
        value={employee.position}
        handleChange={(value) => {
          setEmployee((prev) => ({ ...prev, position: value }));
        }}
      />
      <Button onClick={handleEditEmployee}>Сохранить изменения</Button>
    </Popup>
  );
};

export default EditEmployeePopup;
