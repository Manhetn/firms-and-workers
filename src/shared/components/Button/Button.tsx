import React from 'react';
import './styles.scss';

interface IButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  additionalClasses?: string | null;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({ onClick, children, additionalClasses, disabled = false }) => {
  const classesSting = `button${additionalClasses ? ` ${additionalClasses}` : ''}`;

  return (
    <button
      className={classesSting}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
