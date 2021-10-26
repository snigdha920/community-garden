import React from 'react';
import { NavBar } from '../Navbar';

interface AppLayoutProps {
  children: React.ReactElement;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }: AppLayoutProps) => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/green-lime-watercolor-texture-background.jpg')",
      }}
      className="p-3 p-md-5 min-vh-100"
    >
      <div>
        <NavBar />
      </div>
      {children}
    </div>
  );
};
