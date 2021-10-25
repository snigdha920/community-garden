import React from 'react';


type TextStyles = 'h1' | 'h2' | 'h3' | 'body1' | 'body2';

interface TextElementProps {
  as: TextStyles;
}

export const TextElement: React.FC<TextElementProps> = ({as}: TextElementProps) => {
  const styles: {[key in TextStyles]: string} = {
    'h1': '',
    'h2': '',
    'h3': '',
    'body1': '',
    'body2': ''
  }
  const style = styles[as];
  return <p className={`${style}`}>
  </p>;
};