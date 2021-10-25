import React from 'react';


type TextStyles = 'h1' | 'h2' | 'h3' | 'body1' | 'body2';

interface TextElementProps {
  as: TextStyles;
  children: string;
}

export const TextElement: React.FC<TextElementProps> = ({ as, children }: TextElementProps) => {
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