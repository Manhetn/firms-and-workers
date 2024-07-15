import React from 'react';
import './styles.scss';

interface ITextFieldProps {
  id?: string;
  value: string;
  label?: string | null;
  error?: string | null;
  handleChange: (value: string) => void;
}

const TextField: React.FC<ITextFieldProps> = ({ value, label = null, handleChange, error = null }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event.target.value);
  };

  return (
    <div className='text-field'>
      {label && <label className='text-field__label'>{label}</label>}
      <input
        className='text-field__input'
        value={value}
        onChange={handleInputChange}
      />
      {error && <span className='text-field__error'>{error}</span>}
    </div>
  );
};

export default TextField;
