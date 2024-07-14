import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
  // getCompanies,
  // getSelectedCompanies,
  // laodCompanies,
  selectAllCompanies,
  toggleSelectCompany,
} from '../model/companySlice';
import MemoizedCompanyRow from './CompanyRow';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import AddCompanyComponent from '../../../features/AddCompany/ui/AddCompanyComponent';
import { getCompanies, getCompaniesCounter, getSelectedCompanies, laodCompanies } from '../model/selectors';
import RemoveCompaniesButton from '../../../features/RemoveCompanies/ui/RemoveCompaniesButton';

interface ICompanyListProps {
  additionalClasses?: string | null;
}

const CompanyList: React.FC<ICompanyListProps> = ({ additionalClasses = null }) => {
  const dispatch = useAppDispatch();
  const companies = useAppSelector(getCompanies());
  const selectedCompanies = useAppSelector(getSelectedCompanies());
  const loader = useRef(null);
  const companiesCounter = useAppSelector(getCompaniesCounter());
  const [page, setPage] = useState(0);

  const companyListBlockClasses = `table-component${additionalClasses ? ` ${additionalClasses}` : ''}`;

  const handleSelectAll = () => {
    dispatch(selectAllCompanies());
  };

  const handleSelect = useCallback((companyId: string) => {
    console.log(companyId);
    dispatch(toggleSelectCompany(companyId));
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entities) => {
      if (entities[0].isIntersecting) {
        console.log('yyyyy');
        const nextPage = page + 1;
        dispatch(laodCompanies(nextPage));
        setPage(nextPage);
      }
    }, options);

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loader.current]);

  useEffect(() => {
    if (companies.length === 0) {
      dispatch(laodCompanies(page));
    }
  }, [companies.length, dispatch]);

  console.log(companiesCounter);
  console.log(companies.length);

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
        <div
          ref={loader}
          style={{ height: '20px', backgroundColor: 'transparent' }}
        />
      )}
    </div>
  );
};

export default CompanyList;
