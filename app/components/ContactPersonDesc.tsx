import React from 'react';

interface DescProps {
  name?: string;
  role?: string;
}

export const ContactPersonDesc: React.FC<DescProps> = ({ name, role }) => {
  return (
    <p className="sub-heading">
      <b>{name}</b>
      <br /> {role}
    </p>
  );
};
