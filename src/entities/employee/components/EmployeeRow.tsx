import React from 'react';
import { IEmployee } from '../types';
import EditEmploeeComponent from '../../../features/EditEmployee/EditEmploeeComponent';

interface Props {
  employee: IEmployee;
  isSelected: boolean;
  handleSelect: (emploeeId: string) => void;
}

const EmployeeRow: React.FC<Props> = ({ employee, isSelected, handleSelect }) => {
  const styleClasses = `table-component__tbody-row ${isSelected ? ' table-component__tbody-row_selected' : ''}`;

  return (
    <>
      <tr className={styleClasses}>
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
            <EditEmploeeComponent employee={employee} />
          </div>
        </td>
      </tr>
    </>
  );
};

export default EmployeeRow;
