import React from 'react';
import { Styles } from '../styles/styles';

interface TextIconProps {
  children: string;
  icon: React.ReactElement;
}

export const TextIcon: React.FC<TextIconProps> = ({ children, icon }: TextIconProps) => {
  return (
    <div className="d-flex justify-content-between align-items-center m-5">
      <p className="ml-5">{children}</p>

      <div style={{ backgroundColor: Styles.backgroundColor }} className="rounded-circle">
        <div className="p-3">{icon}</div>
      </div>
    </div>
  );
};
