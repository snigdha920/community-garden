import React from 'react';


type TextStyles = 'h1' | 'h2' | 'h3' | 'body1' | 'body2';

interface TextProps {
  as: TextStyles;
  children: string;
}

export const TextElement: React.FC<TextProps> = ({ as, children }: TextProps) => {
  const styles: { [key in TextStyles]: string } = {
    'h1': '',
    'h2': '',
    'h3': '',
    'body1': '',
    'body2': ''
  };
  const style = styles[as];
  return (
    <p className={`${style}`}>{children}
    </p>);
};