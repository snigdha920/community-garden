/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BoxLayout } from './layout/BoxLayout';
import { TextIcon } from './TextIcon';

export const AboutTheProject: React.FC = () => {
  // These are the paragraphs for the "About the Project" section
  // They are displayed in the order of index of this array
  const aboutTheProjectParagraphs: Array<{ text: string; icon: React.ReactElement }> = [
    {
      text: 'Improving food security in local communities and access to healthy, locally grown foods are major goals of the Community Gardens movement. The community gardens movement provides neighborhoods and communities with access to local spaces that can be cultivated for growth of communally grown fruits and vegetables that can provide food and support to members of that community.',
      icon: <img src="/icons/vegetables.png" alt="food-safety-icon" width="80px" />,
    },
    {
      text: 'In keeping with its mission to serve as a key resource to the campus and its local community partners, the Learning & Research Technologies group in the Division of IT&IRat Cal Poly Pomona has begun the Community Gardens Technology Support Initiative. The goal is to provide community gardens with data that will assist in informed decision-making  and increased crop yields.',
      icon: <img src="/icons/teamwork.png" alt="teamwork-icon" width="80px" />,
    },
    {
      text: 'LR&T will provide sensors that collect data such as soil moisture, temperature, and acidity; air temperature; wind speed; and more. These data will be monitored, queried, and made into reports and alerts that will inform the garden.',
      icon: <img src="/icons/reporting.png" alt="bar-chart-icon" width="80px" />,
    },
  ];
  return (
    <div>
      <BoxLayout className="h-100">
        <>
          <h3 className="px-4 pt-4 text-center">About the Project</h3>
          {aboutTheProjectParagraphs.map((text, index) => {
            // if the index is odd then align icon to the left
            // else align icon to the right
            const alignIcon = index % 2 ? 'left' : 'right';
            return (
              <div key={index} className="p-4">
                <TextIcon icon={text.icon} alignIcon={alignIcon}>
                  {text.text}
                </TextIcon>
              </div>
            );
          })}
        </>
      </BoxLayout>
    </div>
  );
};
