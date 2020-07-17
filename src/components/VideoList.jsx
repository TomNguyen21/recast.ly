// Import the {Components} module from react
// import React, {Component} from 'react';
// Import VideoListEntry from ./VideoListEntry.jsx
import VideoListEntry from './VideoListEntry.js';

// Create a VideoList class componenet that extends from React.Component
let VideoList = (props) => (
  // render the the below HTML into React readable format
  <div className="video-list">
    {props.videos.map( (video) =>
      <VideoListEntry video={video} />
    )}
  </div>
);


// var VideoList = () => (
//   <div className="video-list">
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//   </div>
// );

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;


