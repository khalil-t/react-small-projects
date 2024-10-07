import {React,useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from "react-player";
import './VideoDetail.css'
import {fetchdata} from '../utils/Datafetch'
import Videos from "./Videos";

const VideoDetail = () => {
  const {id} =useParams();
  const [videoDetail, setVideoDetail] = useState(null);

  useEffect(() => {
    const funct = async()=>{
try{

  const data= await fetchdata(`search?part=snippet&relatedToVideoId=${id}&type=video`)
  setVideoDetail(data.data.items)
}
catch{
console.log("error")

}

    }
  
    funct()
  }, [id])
  videoDetail &&console.log(videoDetail)

  videoDetail &&console.log(videoDetail[0])
  return (
    <div className="video-grid">
    <div className="main-video">
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
      <h3 className="h3">{videoDetail && videoDetail[0].snippet.title}</h3>

    </div>
    <div className="related-videos">
      <Videos videos={videoDetail} />
    </div>
  </div>
  )
}

export default VideoDetail