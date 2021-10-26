import React from 'react';

interface BoxLayoutProps {
  children?: React.ReactElement;
}

export const BoxLayout: React.FC<BoxLayoutProps> = ({ children }: BoxLayoutProps) => {
  return (
    <div
      style={{
        borderRadius: '6px',
        overflow: 'hidden', // this class is important if the child divs also have a border radius
        boxShadow: '0 5px 5px -3px rgba(5, 30, 55, 0.1), 0 3px 15px 2px rgba(5, 30, 55, 0.05)',
      }}
      className="bg-white"
    >
      {children}
    </div>
  );
};
