import React from 'react';
import { ButtonElement } from '../elements/ButtonElement';
import { SlideOver } from '../SlideOver';
import { BoxLayout } from './BoxLayout';

interface ContentLayoutProps {
  title: string;
  form: React.ReactElement;
  children?: React.ReactElement;
  variant?: 'hideContainer';
}

export const ContentLayout: React.FC<ContentLayoutProps> = ({ children, title, form, variant }) => {
  const [openSlideOver, setOpenSlideOver] = React.useState(false);

  return (
    <div style={{ zIndex: 10 }}>
      <div className="mt-5 d-flex justify-content-between">
        <h3>{title}</h3>
        <ButtonElement
          functions={{
            onClick: () => {
              setOpenSlideOver(true);
            },
          }}
        />
      </div>
      <SlideOver open={openSlideOver} setOpen={setOpenSlideOver} />
      {variant === 'hideContainer' ? (
        children
      ) : (
        <BoxLayout className="mt-5">
          <div style={{ minHeight: '500px' }}>{children}</div>
        </BoxLayout>
      )}
    </div>
  );
};
