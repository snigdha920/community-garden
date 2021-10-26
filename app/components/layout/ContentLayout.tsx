import React from 'react';
import { ButtonElement } from '../elements/ButtonElement';
import { BoxLayout } from './BoxLayout';

interface ContentLayoutProps {
  title: string;
  form: React.ReactElement;
  children?: React.ReactElement;
}

export const ContentLayout: React.FC<ContentLayoutProps> = ({ children, title, form }) => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h3>{title}</h3>
        <ButtonElement
          functions={{
            onClick: () => {
              // TODO
            },
          }}
        />
      </div>
      <BoxLayout className="mt-5">
        <div style={{ minHeight: '500px' }}>{children}</div>
      </BoxLayout>
    </div>
  );
};