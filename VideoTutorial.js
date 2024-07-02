import YouTube from "react-youtube"
import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";

const VideoTutorial = () => {

    const courses = {
    "Java Development": [
  
      { courseName: 'Java Development', videoId: "A74TOX803D0" },
      { courseName: 'Java Development', videoId: "PymbRTMb4hY" },
      { courseName: 'Java Development', videoId: "eIrMbAQSU34" },
      { courseName: 'Java Development', videoId: "CFD9EFcNZTQ" },
      { courseName: 'Java Development', videoId: "VHbSopMyc4M" },
      { courseName: 'Java Development', videoId: "fMMz9UUjFY8" },
      { courseName: 'Java Development', videoId: "fMMz9UUjFY8" },
      { courseName: 'Java Development', videoId: "-0X0BHLE0Dg" },
      { courseName: 'Java Development', videoId: "UyCygevNvLs" },
      { courseName: 'Java Development', videoId: "ri-vvVr8jEo" },
      { courseName: 'Java Development', videoId: "7pv3dSXSHIc" },
      { courseName: 'Java Development', videoId: "xWLxhF3b5P8 "}
    ],
    "React JS": [
      { courseName: 'React JS', videoId: "vz1RlUyrc3w" },
      { courseName: 'React JS', videoId: "Ke90Tje7VS0" },
      { courseName: 'React JS', videoId: "w7ejDZ8SWv8" },
      { courseName: 'React JS', videoId: "Dorf8i6lCuk" },
      { courseName: 'React JS', videoId: "QFaFIcGhPoM" },
      { courseName: 'React JS', videoId: "0oDy2sWPF38" },
      { courseName: 'React JS', videoId: "CgkZ7MvWUAA" },
      { courseName: 'React JS', videoId: "gLEhvp8CwCU" },
      { courseName: 'React JS', videoId: "G2RpHt8NX0o" },
      { courseName: 'React JS', videoId: "jC3YhBFKZxI" },
      { courseName: 'React JS', videoId: "MgjoIqZYGAo" },
      { courseName: 'React JS', videoId: "RoUqKQGbmc0" },
    ],
    "Python Course": [
      { courseName: 'Python Course', videoId: "ua-CiDNNj30" },
      { courseName: 'Python Course', videoId: "rfscVS0vtbw" },
      { courseName: 'Python Course', videoId: "t2_Q2BRzeEE" },
      { courseName: 'Python Course', videoId: "4F2m91eKmts" },
      { courseName: 'Python Course', videoId: "N4mEzFDjqtA" },
      { courseName: 'Python Course', videoId: "qwAFL1597eM" },
      { courseName: 'Python Course', videoId: "fqF9M92jzUo" },
      { courseName: 'Python Course', videoId: "Ogild8PjK6c" },
      { courseName: 'Python Course', videoId: "ikHt4iGSKrs" },
      { courseName: 'Python Course', videoId: "NzKTLYitP94" },
      { courseName: 'Python Course', videoId: "LNteQNuGF" },
      { courseName: 'Python Course', videoId: "y_I2YOP91Is" }
    ],
    "Android Development": [
      { courseName: 'Android Development', videoId: "0oDy2sWPF38" },
      { courseName: 'Android Development', videoId: "fis26HvvDII" },
      { courseName: 'Android Development', videoId: "BCSlZIUj18Y" },
      { courseName: 'Android Development', videoId: "FjrKMcnKahY" },
      { courseName: 'Android Development', videoId: "x0uinJvhNxI" },
      { courseName: 'Android Development', videoId: "BxM2DayeOBE" },
      { courseName: 'Android Development', videoId: "kNghEbknLs8" },
      { courseName: 'Android Development', videoId: "2fp4K21Hsy8" },
      { courseName: 'Android Development', videoId: "AOzkQcFAUco" },
      { courseName: 'Android Development', videoId: "VkR6xAdJxyc" },
      { courseName: 'Android Development', videoId: "vjZHvncYmHk" },
      { courseName: 'Android Development', videoId: "z1qG80Jkzi8" }
    ],
    "iOS Development": [
      { courseName: 'iOS Development', videoId: "0oDy2sWPF38" },
      { courseName: 'iOS Development', videoId: "iUOc3xcovh8" },
      { courseName: 'iOS Development', videoId: "n7qOGHWunUY" },
      { courseName: 'iOS Development', videoId: "q9XJPz9dSh4" },
      { courseName: 'iOS Development', videoId: "Zu7E2VL2xa0" },
      { courseName: 'iOS Development', videoId: "UNH0bE4zPtY" },
      { courseName: 'iOS Development', videoId: "t_mypMqSXNw" },
      { courseName: 'iOS Development', videoId: "8Xg7E9shq0U" },
      { courseName: 'iOS Development', videoId: "1ZWJ8V37Ay0" },
      { courseName: 'iOS Development', videoId: "B8Kj-TONzkg" },
      { courseName: 'iOS Development', videoId: "1bQwDO88Gyw" },
      { courseName: 'iOS Development', videoId: "5-V0-y1iP3Q "}
  
    ]
  };

  const [currentCourse, setCurrentCourse] = useState(Object.keys(courses)[0]);
  const navigate =  useNavigate();
  
 const {tutorialName} = useParams()
  const handleVideoClick =  (courseName, videoId) => {
    navigate(`/tutorial/${courseName}/${videoId}`);
  }
  useEffect(() => {
    const listOfCourses = Object.keys(courses);
    setCurrentCourse(listOfCourses[0]);
  }, []);

  function onReady(event) {
    event.target.pauseVideo();
  }

  
  const opts = {
    height: '200',
    width: '340',
    playerVars: {
      autoplay: 0,
    },
  };

 return (
        <div className="video-container">
        
        {courses[tutorialName].map((video, index) => (
          
          <div 
           key={index}
           
          onClick={() => handleVideoClick(currentCourse,video.videoId)} 
           className="video-wraper">
            
             <YouTube
          className="youtube-video"
          
           videoId={video.videoId}
            opts={opts}
            onReady={onReady}
              />
          </div>
           ))}
       </div>
    )
}

export default VideoTutorial;