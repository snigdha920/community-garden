import React from 'react';
import { Styles } from '../styles/styles';

interface TextIconProps {
  children?: string | React.ReactElement;
  icon: React.ReactElement;
  alignIcon?: 'left' | 'right';
  className?: string;
  alignText?: 'left' | 'right';
  iconSize?: 'large' | 'small';
}

export const TextIcon: React.FC<TextIconProps> = ({
  children,
  icon,
  className,
  alignText = 'left',
  alignIcon = 'left',
  iconSize = 'large',
}: TextIconProps) => {
  const parentDivFlexStyle = alignIcon === 'right' ? '' : '';
  // const textAlign = alignText ? alignText : alignIcon === 'right' ? undefined : 'right';
  const isIconSizeLarge = iconSize === 'large' ? true : false;
  const defaultPadding = 'p-4';

  const textPadding = alignIcon === 'right' ? '0 20px 0 0' : '0 0 0 20px';
  return (
    <div className={`d-flex ${parentDivFlexStyle} align-items-center ${className}`}>
      {alignIcon === 'right' ? (
        <>
          <p style={{ textAlign: alignText, margin: textPadding }}>{children}</p>

          <div
            style={{ backgroundColor: Styles.lightGreenBackgroundColor }}
            className={`rounded-circle ${
              isIconSizeLarge ? defaultPadding : 'p-2'
            } d-none d-md-flex justify-content-center align-items-center`}
          >
            {icon}
          </div>
        </>
      ) : (
        <>
          <div
            style={{ backgroundColor: Styles.lightGreenBackgroundColor }}
            className={`rounded-circle ${
              isIconSizeLarge ? defaultPadding : 'p-2'
            } d-none d-md-flex justify-content-center align-items-center`}
          >
            {icon}
          </div>
          <p style={{ textAlign: alignText, margin: textPadding }}>{children}</p>
        </>
      )}
    </div>
  );
};
