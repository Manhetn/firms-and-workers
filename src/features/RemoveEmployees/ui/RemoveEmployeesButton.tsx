import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import Button from '../../../shared/components/Button/Button';
import { IconTrash } from '../../../shared/components/Icons';
import { removeCompniesEmployeesThunk } from '../../../entities/employee/model/selectors';
import { useAppDispatch } from '../../../app/hooks';

interface IRemoveEmployeesButtonProps {
  disabled: boolean;
}

const RemoveEmployeesButton: React.FC<IRemoveEmployeesButtonProps> = ({ disabled }) => {
  const dispatch = useAppDispatch();
  const selectedEmployees = useSelector((state: RootState) => state.employees.selectedEmployees);

  const handleRemoveEmployees = () => {
    dispatch(removeCompniesEmployeesThunk(selectedEmployees));
  };

  return (
    <Button
      onClick={handleRemoveEmployees}
      additionalClasses='button_red button_width48'
      disabled={disabled}>
      <IconTrash />
    </Button>
  );
};

export default RemoveEmployeesButton;
