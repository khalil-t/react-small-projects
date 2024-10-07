import React from 'react';
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import './Videos.css'
const Videos = ({ videos }) => {

  return (
    <div className='videos'>
      {videos ? (
        videos.map((video, index) => {
          const videoId = video.id.videoId;
          return (
            <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`} key={index} className='link'>
              <div className='inside'>
              <CardMedia image={video.snippet?.thumbnails?.high?.url } 
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
      />
                <h3 >{video.snippet.title}</h3>
    
              </div>
            </Link>
          );
        })
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default Videos;
