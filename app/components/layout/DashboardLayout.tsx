import React from 'react';
import { Styles } from '../../styles/styles';

export const DashboardLayout: React.FC = () => {
  return (
    <>
      <div
        style={{
          borderRadius: '6px',
          overflow: 'hidden', // this class is important if the child divs also have a border radius
          boxShadow: '0 5px 5px -3px rgba(5, 30, 55, 0.1), 0 3px 15px 2px rgba(5, 30, 55, 0.05)',
          backgroundColor: Styles.lightGreenBackgroundColor,
        }}
        className='mt-5'
      >
          Hello
      </div>
    </>
  );
};
