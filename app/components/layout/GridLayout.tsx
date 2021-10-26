import React from 'react';

interface GridLayoutProps {
  children?: React.ReactElement[];
  className?: string;
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const GridLayout: React.FC<GridLayoutProps> = ({ children, className, columns = 3 }: GridLayoutProps) => {
  return <div className={`row row-cols-md-${columns} ${className}`}>{children}</div>;
};
