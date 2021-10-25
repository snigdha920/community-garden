import React from 'react';
import { Styles } from '../styles/styles';

interface TextIconProps {
  children: string;
  icon: React.ReactElement;
  alignIcon?: 'left' | 'right';
}

export const TextIcon: React.FC<TextIconProps> = ({ children, icon, alignIcon = 'right' }: TextIconProps) => {
  const parentDivFlexStyle = alignIcon === 'right' ? '' : 'flex-row-reverse';
  const textAlign = alignIcon === 'right' ? undefined : 'right';
  return (
    <div className={`d-flex ${parentDivFlexStyle} justify-content-between align-items-center m-5`}>
      <p style={{ textAlign: textAlign }}>{children}</p>

      <div style={{ backgroundColor: Styles.backgroundColor }} className="rounded-circle p-4">
        <div>{icon}</div>
      </div>
    </div>
  );
};
