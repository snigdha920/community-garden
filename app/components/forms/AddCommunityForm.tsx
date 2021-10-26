/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { TextIcon } from '../TextIcon';

interface AddCommunityFormProps {
  children?: React.ReactElement;
  className?: string;
}

export const AddCommunityForm: React.FC<AddCommunityFormProps> = ({ children, className }) => {
  return (
    <div className={`d-flex align-items-center ${className} mt-3`}>
      <TextIcon
        icon={<img src="/icons/soon.png" width="50px" height="50px" alt="coming-soon" />}
        alignIcon="left"
        alignText="left"
        className="mt-3"
      ></TextIcon>
      <p className="mt-4">Coming soon!</p>
    </div>
  );
};
