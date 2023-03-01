import React ,{useEffect}from 'react';
import rod from "../../assets/rode.png"
import  AOS  from 'aos';
import "aos/dist/aos.css"
import './cta.css';
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

function CTA() {
  useEffect(()=>{
  AOS.init({duration:2000});
}, [])
  return (
    <div data-aos="zoom-in" className="gpt3__cta">
    <div className="rod"><h1>ROAD MAP</h1></div>

     <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent  className='road_big fist' >
          2021<br/> December
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='road_small'>Roadmap 1</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent   className='road_big fist' >
          2022 <br/> March
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='road_small'>Road Map 2</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className='road_big' >
          April
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='road_small'>Road map 3</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent   className='road_big' >
       MAY
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='road_small'>Road Map 3</TimelineContent>
      </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent    className='road_big' >
          June
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='road_small'>Road Map 4</TimelineContent>
      </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent    className='road_big' >September
        
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent  className='road_small'>  Road Map 5</TimelineContent>
      </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent  className='road_big' >
          October
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='road_small'>Roadmap 6</TimelineContent>
      </TimelineItem>
    </Timeline>
  </div>
  )
}

export default CTA

