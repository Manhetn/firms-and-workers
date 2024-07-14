import React from 'react';

interface ICheckboxProps {
  checked: boolean;
  handleChange: () => void;
  additionalStyleClass?: string | null;
  disabled?: boolean;
}

const Checkbox: React.FC<ICheckboxProps> = ({ checked, handleChange, additionalStyleClass = null, disabled }) => {
  const styleClass = `checkbox${additionalStyleClass ? ` ${additionalStyleClass}` : ''}`;

  return (
    <input
      className={styleClass}
      type='checkbox'
      disabled={disabled}
      checked={checked}
      onChange={handleChange}
    />
  );
};

export default Checkbox;
