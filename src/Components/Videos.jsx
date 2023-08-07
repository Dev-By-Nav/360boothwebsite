// src/Videos.js
import React from 'react';
import Video1 from '../Videos/vid1.mp4';
import Video2 from '../Videos/vid2.mp4';
import Video3 from '../Videos/vid3.mp4';
import Video4 from '../Videos/vid4.mp4';
import Video5 from '../Videos/vid5.mp4';
import Video6 from '../Videos/vid6.mp4';
import Video7 from '../Videos/vid7.mp4';
import Video8 from '../Videos/vid9.mp4';
import Video9 from '../Videos/vid10.mp4';
import Video10 from '../Videos/vid11.mp4';
import Video11 from '../Videos/vid12.mp4';
import Video12 from '../Videos/vid14.mp4';
import Video13 from '../Videos/vid15.mp4';
import Video14 from '../Videos/vid16.mp4';


function Videos() {
  const videoList = [Video1, Video2, Video3, Video4, Video5, Video6, Video7, Video8, Video9, Video10, Video11, Video12, Video13, Video14 ];
 
  return (
    <div className="max-w-[90vw] mx-auto columns-1  xs:columns-2 md:columns-3 lg:columns-4 xl:columns-5 space-y-4 my-6">
      {videoList.map((video, index) => (
        <div key={index}>
          <video className="w-full" controls muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
}

export default Videos;
 