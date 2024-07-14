import React, { useCallback, useEffect, useState } from 'react';

import { selectAllCompanies, toggleSelectCompany } from '../model/companySlice';
import MemoizedCompanyRow from './CompanyRow';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import AddCompanyComponent from '../../../features/AddCompany/ui/AddCompanyComponent';
import { getCompanies, getCompaniesCounter, getSelectedCompanies, laodCompanies } from '../model/selectors';
import RemoveCompaniesButton from '../../../features/RemoveCompanies/ui/RemoveCompaniesButton';
import { useInView } from 'react-intersection-observer';

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
    console.log(companyId);
    dispatch(toggleSelectCompany(companyId));
  }, []);

  useEffect(() => {
    if (inView) {
      const nextPage = page + 1;
      dispatch(laodCompanies(nextPage));
      setPage(nextPage);
    }
  }, [inView]);

  useEffect(() => {
    if (companies.length === 0) {
      dispatch(laodCompanies(page));
    }
  }, [companies.length, dispatch]);

  return (
    <div className={companyListBlockClasses}>
      <h2>Список команий</h2>
      <table className='table-component__table'>
        <thead className='table-component__thead'>
          <tr className='table-component__thead-tr'>
            <th className='table-component__thead-th table-component__thead-th_checkbox'>
              <input
                type='checkbox'
                onChange={handleSelectAll}
                checked={selectedCompanies.length === companies.length}
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
