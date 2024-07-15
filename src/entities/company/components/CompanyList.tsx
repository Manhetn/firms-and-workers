import React, { useCallback, useEffect, useState } from 'react';

import { selectAllCompanies, toggleSelectCompany } from '../model/companySlice';
import MemoizedCompanyRow from './CompanyRow';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import AddCompanyComponent from '../../../features/AddCompany/ui/AddCompanyComponent';
import { getCompanies, getCompaniesCounter, getSelectedCompanies, laodCompanies } from '../model/selectors';
import RemoveCompaniesButton from '../../../features/RemoveCompanies/ui/RemoveCompaniesButton';
import { useInView } from 'react-intersection-observer';
import Checkbox from '../../../shared/components/Checkbox';

interface ICompanyListProps {
  additionalClasses?: string | null;
}

const CompanyList: React.FC<ICompanyListProps> = ({ additionalClasses = null }) => {
  const dispatch = useAppDispatch();
  const companies = useAppSelector(getCompanies());
  const selectedCompanies = useAppSelector(getSelectedCompanies());
  const companiesCounter = useAppSelector(getCompaniesCounter());
  const [page, setPage] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const companyListBlockClasses = `table-component${additionalClasses ? ` ${additionalClasses}` : ''}`;

  const handleSelectAll = () => {
    dispatch(selectAllCompanies());
  };

  const handleSelect = useCallback((companyId: string) => {
    dispatch(toggleSelectCompany(companyId));
  }, []);

  useEffect(() => {
    if (inView) {
      dispatch(laodCompanies(page));
      setPage((prev) => prev + 1);
    }
  }, [inView]);

  useEffect(() => {
    dispatch(laodCompanies(page));
    setPage((prev) => prev + 1);
  }, []);

  return (
    <div className={companyListBlockClasses}>
      <h2>Список команий</h2>
      <table className='table-component__table'>
        <thead className='table-component__thead'>
          <tr className='table-component__thead-tr'>
            <th className='table-component__thead-th table-component__thead-th_checkbox'>
              <Checkbox
                disabled={selectedCompanies.length === 0}
                checked={selectedCompanies.length > 0 && selectedCompanies.length === companies.length}
                handleChange={handleSelectAll}
              />
            </th>
            <th className='table-component__thead-th'>Название компании</th>
            <th className='table-component__thead-th'>Кол-во сотрудников</th>
            <th className='table-component__thead-th'>Адрес</th>
            <th className='table-component__thead-th table-component__thead-th_buttons'>
              <div className='table-component__thead-buttons'>
                <AddCompanyComponent />
                <RemoveCompaniesButton disabled={!selectedCompanies.length} />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className='table-component__tbody'>
          {companies.map((company, index) => (
            <MemoizedCompanyRow
              key={company.id + index}
              company={company}
              isSelected={selectedCompanies.includes(company.id)}
              onSelect={handleSelect}
            />
          ))}
        </tbody>
      </table>
      {companiesCounter > companies.length && (
        <div ref={ref}>
          <h2>Загрузка новых данных...</h2>
        </div>
      )}
    </div>
  );
};

export default CompanyList;
