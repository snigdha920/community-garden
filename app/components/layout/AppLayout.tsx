import React from 'react';
import { NavBar } from '../Navbar';

interface AppLayoutProps {
  children: React.ReactElement;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }: AppLayoutProps) => {
  return (
    <div
      style={{
        padding: '80px',
        backgroundImage: "url('/images/green-lime-watercolor-texture-background.jpg')",
        // backgroundColor: Styles.lightGrayBackgroundColor,
        minHeight: '100vh',
        // backgroundColor: Styles.lightGreenBackgroundColor,
      }}
    >
      <div>
        <NavBar />
      </div>
      {children}
    </div>
  );
};
