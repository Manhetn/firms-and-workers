import React from 'react';
import Button from '../../../shared/components/Button/Button';
import { IconTrash } from '../../../shared/components/Icons';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getSelectedCompanies, removeCompaniesThunk } from '../../../entities/company/model/selectors';

interface IRemoveCompaniesButton {
  disabled?: boolean;
}

const RemoveCompaniesButton: React.FC<IRemoveCompaniesButton> = ({ disabled = false }) => {
  const dispatch = useAppDispatch();
  const selectedCompanies = useAppSelector(getSelectedCompanies());

  const handleRemoveCompanies = () => {
    dispatch(removeCompaniesThunk(selectedCompanies));
  };

  return (
    <Button
      onClick={handleRemoveCompanies}
      additionalClasses='button_red button_width48'
      disabled={disabled}>
      <IconTrash />
    </Button>
  );
};

export default RemoveCompaniesButton;
