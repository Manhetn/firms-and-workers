import React, { memo } from 'react';
import { ICompanyData } from '../types';
import EditCompanyComponent from '../../../features/EditCompany/ui/EditCompanyComponent';
import Checkbox from '../../../shared/components/Checkbox/Checkbox';

interface ICompanyRowProps {
  company: ICompanyData;
  isSelected: boolean;
  onSelect: (companyId: string) => void;
}

const CompanyRow: React.FC<ICompanyRowProps> = ({ company, isSelected, onSelect }) => {
  const styleClass = `table-component__tbody-row ${isSelected ? ' table-component__tbody-row_selected' : ''}`;

  return (
    <tr className={styleClass}>
      <td className='table-component__tbody-td table-component__tbody-td_checkbox'>
        <Checkbox
          checked={isSelected}
          handleChange={() => onSelect(company.id)}
        />
      </td>
      <td className='table-component__tbody-td'>{company.name}</td>
      <td className='table-component__tbody-td'>{company.employeeCount}</td>
      <td className='table-component__tbody-td'>{company.address}</td>
      <td className='table-component__tbody-td table-component__tbody-td_buttons'>
        <div className='table-component__tbody-td_buttons'>
          <EditCompanyComponent company={company} />
        </div>
      </td>
    </tr>
  );
};

const MemoizedCompanyRow = memo(CompanyRow);

export default MemoizedCompanyRow;
