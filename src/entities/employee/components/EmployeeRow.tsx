import React, { useState } from 'react';
import Button from '../../../shared/components/Button';
import { IconEdit } from '../../../shared/components/Icons';
import EditEmployeePopup from '../../../features/EditEmployee/EditEmployeePopup';
import { IEmployee } from '../types';

interface Props {
  employee: IEmployee;
  isSelected: boolean;
  handleSelect: (emploeeId: string) => void;
}

const EmployeeRow: React.FC<Props> = ({ employee, isSelected, handleSelect }) => {
  const [showEditEmployeePopup, setShowEditEmployeePopup] = useState(false);
  const styles = `table-component__tbody-row ${isSelected ? ' table-component__tbody-row_selected' : ''}`;
  // console.log(employee);

  return (
    <>
      <tr className={styles}>
        <td className='table-component__tbody-td table-component__tbody-td_checkbox'>
          <input
            type='checkbox'
            checked={isSelected}
            onChange={() => handleSelect(employee.id)}
          />
        </td>
        <td className='table-component__tbody-td'>{employee.lastName}</td>
        <td className='table-component__tbody-td'>{employee.firstName}</td>
        <td className='table-component__tbody-td'>{employee.position}</td>
        <td className='table-component__tbody-td table-component__tbody-td_buttons'>
          <div className='table-component__tbody-td_buttons'>
            <Button onClick={() => setShowEditEmployeePopup(true)}>
              <IconEdit />
            </Button>
          </div>
        </td>
      </tr>
      <EditEmployeePopup
        visible={showEditEmployeePopup}
        currentEmployee={employee}
        handleClose={() => setShowEditEmployeePopup(false)}
      />
    </>
  );
};

export default EmployeeRow;
