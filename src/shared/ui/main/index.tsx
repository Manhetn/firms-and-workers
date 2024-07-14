import React, { ReactNode } from 'react';
import './styles.css';

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <main className='main'>{children}</main>;
};

export default Main;
