import React, { useEffect, useState, useRef } from 'react';
import './Timeline.css';
import './App.css';

import image1 from './images/1.webp';
import image2 from './images/2.webp';
import image3 from './images/3.webp';
import image4 from './images/4.webp';
import image5 from './images/5.webp';
import image6 from './images/6.webp';  

const imgS = [
  { src: image1, alt: 'Ideate' },
  { src: image2, alt: 'Design' },
  { src: image3, alt: 'Develop' },
  { src: image4, alt: 'Test' },
  { src: image5, alt: 'Launch' },
  { src: image6, alt: 'Support' },
];

const App = () => {
  const timelineRef = useRef([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const timelineData = [
    { date: '01/06', title: 'Ideate', description: 'We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.' },
    { date: '02/06', title: 'Design', description: 'Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.' },
    { date: '03/06', title: 'Develop', description: 'Developing end-to-end solutions with a focus on feasibility assessment, architecture design, and agile process to ensure rapid, high-quality delivery.' },
    { date: '04/06', title: 'Test', description: 'Ensuring your product meets the highest standards of quality and reliability through extensive QA and software testing across all user touch points.' },
    { date: '05/06', title: 'Launch', description: 'Executing a successful product launch by developing tailored deployment plans, executing a smooth rollout, and offering dedicated post-launch assistance.' },
    { date: '06/06', title: 'Support', description: 'Providing ongoing support and enhancements to ensure continued product success.' },
  ];

  const handleScroll = () => {
    timelineRef.current.forEach((el, index) => {
      if (el) {
        const rect = el.getBoundingClientRect();
        const topOffset = window.innerHeight * 0.3;  // Change the image when the heading is about 30% from the top

        // If the top of the heading is above the viewport by the threshold, change the image
        if (rect.top <= topOffset) {
          
          setCurrentImageIndex(index);
        }
      }
    });
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='background_scroller'>
      <div className="container">
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div className="timeline-text" key={index} ref={(el) => (timelineRef.current[index] = el)}>
              <h4>{item.date}</h4>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="timeline-image">
          <div className='img_wraper'>
            <img
              src={imgS[currentImageIndex]?.src}
              alt={imgS[currentImageIndex]?.alt}
              className="slide-up"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
