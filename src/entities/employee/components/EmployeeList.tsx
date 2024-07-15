import React, { useEffect, useMemo } from 'react';
import { selectAllEmployees, toggleSelectEmployee } from '../model/employeeSlice';
import EmployeeRow from './EmployeeRow';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getEmployees, getSelectedEmployees, laodEmployees } from '../model/selectors';
import { getSelectedCompanies } from '../../company/model/selectors';
import RemoveEmployeesButton from '../../../features/RemoveEmployees/ui/RemoveEmployeesButton';
import AddEmployeeComponent from '../../../features/AddEmployee/ui/AddEmployeeComponent';
import Checkbox from '../../../shared/components/Checkbox/Checkbox';

const EmployeeList: React.FC = () => {
  const dispatch = useAppDispatch();

  const employees = useAppSelector(getEmployees());
  const selectedEmployees = useAppSelector(getSelectedEmployees());
  const selectedCompanies = useAppSelector(getSelectedCompanies());

  const handleSelect = (employeeId: string) => {
    dispatch(toggleSelectEmployee(employeeId));
  };

  const selectedCompaniesEmploees = useMemo(() => {
    return employees.filter((emp) => selectedCompanies.includes(emp.companyId));
  }, [selectedCompanies, employees]);

  const handleSelectAll = () => {
    dispatch(selectAllEmployees());
  };

  useEffect(() => {
    if (employees.length === 0) {
      dispatch(laodEmployees());
    }
  }, []);

  return (
    <div className='table-component'>
      <h2>Список сотрудников</h2>
      <table className='table-component__table'>
        <thead className='table-component__thead'>
          <tr className='table-component__thead-tr'>
            <th className='table-component__thead-th table-component__thead-th_checkbox'>
              <Checkbox
                disabled={employees.length === 0}
                checked={selectedEmployees.length > 0 && selectedEmployees.length === employees.length}
                handleChange={handleSelectAll}
              />
            </th>
            <th className='table-component__thead-th'>Фамилия</th>
            <th className='table-component__thead-th'>Имя</th>
            <th className='table-component__thead-th'>Должность</th>
            <th className='table-component__thead-th table-component__thead-th_buttons'>
              <div className='table-component__thead-buttons'>
                <AddEmployeeComponent />
                <RemoveEmployeesButton disabled={!selectedEmployees.length} />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className='table-component__tbody'>
          {selectedCompaniesEmploees.map((employee) => {
            const isSelected = selectedEmployees.includes(employee.id);

            return (
              <EmployeeRow
                key={employee.id}
                employee={employee}
                isSelected={isSelected}
                handleSelect={handleSelect}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
