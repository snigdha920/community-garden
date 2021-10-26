import React from 'react';
import { Styles } from '../styles/styles';

interface TextIconProps {
  children?: string | React.ReactElement;
  icon: React.ReactElement;
  alignIcon?: 'left' | 'right';
  className?: string;
  alignText?: 'left' | 'right';
}

export const TextIcon: React.FC<TextIconProps> = ({
  children,
  icon,
  className,
  alignText,
  alignIcon = 'right',
}: TextIconProps) => {
  const parentDivFlexStyle = alignIcon === 'right' ? '' : 'flex-row-reverse';
  const textAlign = alignText ? alignText : alignIcon === 'right' ? undefined : 'right';
  const textPadding = alignIcon === 'right' ? '0 20px 0 0' : '0 0 0 20px';
  return (
    <div className={`d-flex ${parentDivFlexStyle} justify-content-between align-items-center ${className}`}>
      <p style={{ textAlign: textAlign, margin: textPadding }}>{children}</p>

      <div style={{ backgroundColor: Styles.lightGreenBackgroundColor }} className="rounded-circle p-4">
        <div>{icon}</div>
      </div>
    </div>
  );
};
