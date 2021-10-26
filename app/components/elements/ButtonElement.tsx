import React from 'react';

interface ButtonElementProps {
  className?: string;
  functions?: { onClick?: () => void };
  variant?: 'border' | 'gradient';
}

export const ButtonElement: React.FC<ButtonElementProps> = ({ className, functions, variant = 'gradient' }) => {
  return (
    <div className={`${className}`} onClick={functions?.onClick}>
      <button className="btn-grad">Add a place</button>
      <style jsx>{`
        .btn-grad {
          background-image: linear-gradient(to right, #02aab0 0%, #00cdac 51%, #02aab0 100%);
        }
        .btn-grad {
          padding: 15px 45px;
          transition: 0.5s;
          background-size: 200% auto;
          color: white;
          border-radius: 6px;
          display: block;
          border: none;
        }

        .btn-grad:hover {
          background-position: right center; /* change the direction of the change here */
          color: #fff;
          text-decoration: none;
        }

        // .btn-grad {
        //   background-image: linear-gradient(to right, #0cebeb 0%, #20e3b2 51%, #0cebeb 100%);
        // }
        // .btn-grad {
        //   padding: 15px 45px;
        //   transition: 0.5s;
        //   background-size: 200% auto;
        //   // color: gray;
        //   border: none;
        //   display: block;
        //   border-radius: 6px;
        // }

        // .btn-grad:hover {
        //   background-position: right center; /* change the direction of the change here */
        //   color: #fff;
        //   text-decoration: none;
        // }
      `}</style>
    </div>
  );
};
