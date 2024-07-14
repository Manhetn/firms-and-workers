import React from 'react';

interface IIconComponent {
  size?: string;
  color?: string;
}

export const IconCross: React.FC<IIconComponent> = ({ size = '24', color = 'black' }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z'
          fill={color}
        />
      </svg>
    </>
  );
};

export const IconEdit: React.FC<IIconComponent> = ({ size = '24', color = 'black' }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M22 24H2V20H22V24ZM13.06 5.19L16.81 8.94L7.75 18H4V14.25L13.06 5.19ZM17.88 7.87L14.13 4.12L15.96 2.29C16.0525 2.1973 16.1624 2.12375 16.2834 2.07357C16.4043 2.02339 16.534 1.99756 16.665 1.99756C16.796 1.99756 16.9257 2.02339 17.0466 2.07357C17.1676 2.12375 17.2775 2.1973 17.37 2.29L19.71 4.63C20.1 5.02 20.1 5.65 19.71 6.04L17.88 7.87Z'
          fill={color}
        />
      </svg>
    </>
  );
};

export const IconPlus: React.FC<IIconComponent> = ({ size = '24', color = 'black' }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M21 13.5H13.5V21H10.5V13.5H3V10.5H10.5V3H13.5V10.5H21V13.5Z'
          fill={color}
        />
      </svg>
    </>
  );
};

export const IconTrash: React.FC<IIconComponent> = ({ size = '24', color = 'black' }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z'
          fill={color}
        />
      </svg>
    </>
  );
};
