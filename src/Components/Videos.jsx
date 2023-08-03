// src/Videos.js

import React from 'react';
import Video1 from 'src\assets\Videos\vid1.MP4';
import Video2 from 'src\assets\Videos\vid2.MP4';
import Video3 from 'src\assets\Videos\vid5.MP4';

function Videos() {
  const videoList = [Video1, Video2, Video3, Video3, Video3, Video1, Video1, Video2];

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
