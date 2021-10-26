/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Styles } from '../../styles/styles';
import { TextIcon } from '../TextIcon';

interface DashBoardLayoutProps {
  place: string;
}
export const DashboardLayout: React.FC<DashBoardLayoutProps> = ({ place }) => {
  return (
    <>
      <div
        style={{
          borderRadius: '6px',
          overflow: 'hidden', // this class is important if the child divs also have a border radius
          boxShadow: '0 5px 5px -3px rgba(5, 30, 55, 0.1), 0 3px 15px 2px rgba(5, 30, 55, 0.05)',
          backgroundColor: '#FFFFFF',
        }}
        className="mt-5"
      >
        <div style={{ minHeight: '200px' }}>
          <TextIcon
            icon={<img src="/icons/locationicon.png" width="20px" height="20px" alt="pin" />}
            className="px-4 pt-3 pb-2"
            alignIcon="left"
            alignText="left"
            iconSize="small"
          >
            <>{place}</>
          </TextIcon>
        </div>
      </div>
    </>
  );
};
