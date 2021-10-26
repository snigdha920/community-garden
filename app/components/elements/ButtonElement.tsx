import React from 'react';

interface ButtonElementProps {
  className?: string;
  functions?: { onClick?: () => void };
  variant?: 'border' | 'gradient';
  children: string;
  layout?: 'stretch' | 'fit-content';
  fontSize?: string;
  icon?: React.ReactElement;
}

export const ButtonElement: React.FC<ButtonElementProps> = ({
  className,
  functions,
  variant = 'gradient',
  layout = 'fit-content',
  children,
  fontSize,
  icon,
}) => {
  const buttonClass = variant === 'gradient' ? 'btn-gradient' : 'btn-border';
  return (
    <>
      <button
        className={`btn ${buttonClass} ${className} ${layout === 'stretch' ? 'w-100' : ''} shadow-sm`}
        style={{ height: '52px', fontSize: fontSize ?? '18px' }}
        onClick={functions?.onClick}
      >
        <span style={{ opacity: '87%' }}>
          {icon && <span className="pe-2">{icon}</span>}
          {children}
        </span>
      </button>

      <style jsx>{`
        .btn {
          padding: 0px 40px;
        }
        .btn:focus {
          outline: none;
          border: none;
        }
        .btn-gradient {
          background-image: linear-gradient(to right, #02aab0 0%, #00cdac 51%, #02aab0 100%);
        }
        .btn-gradient {
          transition: 0.5s;
          background-size: 200% auto;
          color: white;
          border-radius: 6px;
          display: block;
          border: none;
        }

        .btn-gradient:hover {
          background-position: right center; /* change the direction of the change here */
          color: #fff;
          text-decoration: none;
        }

        .btn-border {
          background-color: transparent;
          border: 1.75px solid #02aab0;
          border-radius: 6px;
        }

        .btn-border:hover {
          background-color: rgba(0, 205, 172, 0.12);
        }
      `}</style>
    </>
  );
};
