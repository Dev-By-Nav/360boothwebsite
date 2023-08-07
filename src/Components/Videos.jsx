// src/Videos.js
import React from 'react';
import Video1 from '../Videos/vid1.MP4';
import Video2 from '../Videos/vid2.MP4';
import Video3 from '../Videos/vid3.MP4';
import Video6 from '../Videos/vid6.MP4';
import Video7 from '../Videos/vid7.MP4';
import Video9 from '../Videos/vid9.MP4';
import Video10 from '../Videos/vid10.MP4';
import Video11 from '../Videos/vid11.MP4';
import Video12 from '../Videos/vid12.MP4';
import Video14 from '../Videos/vid14.MP4';
import Video16 from '../Videos/vid16.MP4';
import Video17 from '../Videos/vid17.MP4';

function Videos() {
  const videoList = [Video1, Video2, Video3, Video6, Video7, Video9, Video10, Video11, Video12, Video14, Video16, Video17];

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
 