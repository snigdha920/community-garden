/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BoxLayout } from './layout/BoxLayout';

export const ContactUs: React.FC = () => {
  const projectContributers: Array<{ desc: React.ReactElement; image: React.ReactElement }> = [
    //This array is used for displaying the photos and roles of project contruibuters
    {
      desc: (
        <p className="sub-heading">
          <b>Melvin Houston</b>
          <br /> Hardware engineer
        </p>
      ),
      image: <img src="/images/melvin-pic.jpg" alt="melvin-img" className="rounded-circle" width="160" height="160" />,
    },
    {
      desc: (
        <p className="sub-heading">
          <b>Neeyati Ajmera</b>
          <br /> Software engineer{' '}
        </p>
      ),
      image: <img src="/images/neeyati.jpg" alt="neeyati-img" className="rounded-circle" width="160" height="160" />,
    },
    {
      desc: (
        <p className="sub-heading">
          <b>Kayla</b>
          <br /> Database manager
        </p>
      ),
      image: <img src="/images/kayla.jpeg" alt="kayla-img" className="rounded-circle" width="160" height="160" />,
    },
  ];

  return (
    <div>
      <BoxLayout className="h-100">
        <>
          <h3 className="px-4 pt-4 text-center">Contact Us</h3>
          {/* Displaying the array elements according their index */}
          <div className="row pad">
            {projectContributers.map((item, index) => {
              return (
                <div key={index} className="col-lg-4 padding">
                  {item.image}
                  {item.desc}
                </div>
              );
            })}
          </div>

          <p>
            For more information regarding this project, please write to us at{' '}
            <a href="mailto:xyz@cpp.edu">xyz@cpp.edu</a>. If you would like to have your own community garden, our
            project is open source and we can help with the installation process.
          </p>
        </>
      </BoxLayout>
    </div>
  );
};
