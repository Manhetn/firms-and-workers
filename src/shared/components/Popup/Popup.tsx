import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { IconCross } from '../Icons';

export interface IPopupProps {
  visible: boolean;
  handleClose: () => void;
  children: ReactElement | ReactElement[];
}

const Popup: React.FC<IPopupProps> = ({ visible, handleClose, children }) => {
  const popupRoot = document.getElementById('popup-root');

  if (!popupRoot) return null;

  if (!visible) return null;

  return ReactDOM.createPortal(
    <div className='popup'>
      <div
        className='popup__backdrop'
        onClick={handleClose}></div>
      <div className='popup__popup'>
        <div className='popup__top-button'>
          <button
            className='popup__button-close'
            type='button'
            onClick={handleClose}>
            <IconCross />
          </button>
        </div>
        <div className='popup__content'>{children}</div>
      </div>
    </div>,
    popupRoot,
  );
};

export default Popup;
