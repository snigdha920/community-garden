import React from 'react';

interface ButtonElementProps {
  className?: string;
  functions?: { onClick?: () => void };
  variant?: 'border' | 'gradient';
  children: string;
}

export const ButtonElement: React.FC<ButtonElementProps> = ({
  className,
  functions,
  variant = 'gradient',
  children,
}) => {
  const buttonClass = variant === 'gradient' ? 'btn-gradient' : 'btn-border';

  return (
    <div className={`${className}`} onClick={functions?.onClick}>
      <button className={`${buttonClass}`}>{children}</button>

      <style jsx>{`
        .btn-gradient {
          background-image: linear-gradient(to right, #02aab0 0%, #00cdac 51%, #02aab0 100%);
        }
        .btn-gradient {
          padding: 15px 45px;
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
          padding: 15px 45px;
          background-color: transparent;
          border: 1.75px solid #02aab0;
          border-radius: 6px;
        }

        .btn-border:hover {
          background-color: rgba(0, 205, 172, 0.12);
        }
      `}</style>
    </div>
  );
};
