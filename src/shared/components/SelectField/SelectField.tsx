import React, { useMemo } from 'react';
import './syles.scss';

interface ISelectComponentProps {
  id?: string;
  label?: string | null;
  optionsData: { value: string; label: string }[];
  selectedOptionValue: string;
  handleChange: (value: string) => void;
}

const SelectComponent: React.FC<ISelectComponentProps> = ({
  label,
  optionsData,
  selectedOptionValue,
  handleChange,
}) => {
  const options = useMemo(() => {
    return (
      <>
        <option value=''>Select...</option>
        {optionsData.map((optionData) => (
          <option
            key={optionData.value}
            value={optionData.value}>
            {optionData.label}
          </option>
        ))}
      </>
    );
  }, [optionsData]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleChange(event.target.value);
  };

  return (
    <div className='select-field'>
      {label && <label className='select-field__label'>{label}</label>}
      <select
        className='select-field__input'
        value={selectedOptionValue}
        onChange={handleSelectChange}>
        {options}
      </select>
    </div>
  );
};

export default SelectComponent;
