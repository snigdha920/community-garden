import React from 'react';

interface DescProps {
  name?: string;
  role?: string;
}

export const ContactPersonDesc: React.FC<DescProps> = ({ name, role }) => {
  return (
    <p className="sub-heading mt-3">
      <b className="m-2">{name}</b>
      <br /> {role}
    </p>
  );
};
