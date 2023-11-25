import React from 'react'
import '../styles/experience.css'
import expLeft from '../images/expLeft.svg'
import expRight from '../images/expRight.svg'

const Experience = () => {
  return (
    <>
      <section className='experience limit'>
        <div className="header">
          <img src={expLeft} alt="expLeft" />
          <p className="title">EXPERIENCE</p>
          <img src={expRight} alt="expRight" />
        </div>
        <div className="content">
          <div className="19 box">
            <div className="year"><p>19</p></div>
            <div className="events">
              <p><b>UWE</b> (University of the West of England)<br/> Bristol Online Summer Camp</p>
            </div>
          </div>
          <div className="21 box">
            <div className="year"><p>21</p></div>
            <div className="events">
              <p><b>EDC</b> Beginner Model Making Camp</p>
            </div>
          </div>
          <div className="22 box">
            <div className="year"><p>22</p></div>
            <div className="events">
              <p><b>EDC</b> Advanced Model Making Camp</p>
              <p><b>National Yang Ming Chiao Tung University</b> Summer Civil Engineering Camp</p>
            </div>
          </div>
          <div className="23 box">
            <div className="year"><p>23</p></div>
            <div className="events">
              <p><b>National Cheng Kung University</b> Summer Civil Engineering Camp</p>
              <p>Architectural Foundation of San Francisco High School, <b>Best Design Process 2nd Place</b></p>
              <p><b>Internship</b> at Architectural Firm focus on adaptive reuse on old building, Participated in 3 Projects</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Experience