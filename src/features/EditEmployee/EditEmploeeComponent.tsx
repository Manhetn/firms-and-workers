import { useState } from 'react';
import Button from '../../shared/components/Button/Button';
import { IEmployee } from '../../entities/employee/types';
import { IconEdit } from '../../shared/components/Icons';
import EditEmployeePopup from './EditEmployeePopup';

interface IEditEmploeeComponentProps {
  employee: IEmployee;
}

const EditEmploeeComponent: React.FC<IEditEmploeeComponentProps> = ({ employee }) => {
  const [showEditEmployeePopup, setShowEditEmployeePopup] = useState(false);

  return (
    <>
      <Button onClick={() => setShowEditEmployeePopup(true)}>
        <IconEdit />
      </Button>
      <EditEmployeePopup
        visible={showEditEmployeePopup}
        currentEmployee={employee}
        handleClose={() => setShowEditEmployeePopup(false)}
      />
    </>
  );
};

export default EditEmploeeComponent;
