import React from 'react';
import styles from './Resume.css';

const Resume = (props) => {
  return (
    <div className={styles.resumeWrapper}>
      <p className={styles.title}>Resume</p>
      <div className={styles.paper}>
        <div className={styles.name}>
          <h1>Monica Bui</h1>
        </div>
        <div className={styles.contact}>
          <small>
            San Francisco, CA<br/>
            408-966-2658<br/>
            monicabbui@gmail.com<br/>
            linkedin.com/in/monicabui<br/>
            github.com/moneycabui<br/>
          </small>
        </div>
        <div className={styles.columnOne}>
          <h2>Software Engineering Applications</h2>
          <h3>Product Manager and Software Programmer</h3>
          <span className={styles.projectName}>Stitch Saver | </span>
          <span className={styles.projectGroupName}>Crafty Caribbean</span>
          <p>
            •	Led a team of seven software engineers to create an application designed for discovering and tracking artistic projects<br/>
            •	Constructed the header component - comprised of the search bar, search suggestions, and navigation subcomponents using JavaScript, React, CSS Modules, Node Express, and Postgres<br/>
          </p>

          <h3>Back End Engineer</h3>
          <span className={styles.projectName}>Atelier System Design | </span>
          <span className={styles.projectGroupName}>Charismatic Cedar</span>
          <p>
            •	Collaborated in an engineering team of three to construct server and database architecture utilizing Node.js and Express frameworks<br/>
            •	Redesigned database schemas and horizontally scaled services to improve performance capable of handling 2000 requests per second - performance tested using Loader.io and K6<br/>
            •	Deployed microservice with Docker to AWS EC2<br/>
            •	Implemented NGINX load balancer to route traffic volume<br/>
          </p>

          <h3>Full Stack Developer</h3>
          <span className={styles.projectName}>Magic Meme | </span>
          <span className={styles.projectGroupName}>Personal Project</span>
          <p>
            •	Engineered a full stack application to MVP in two days mimicking the novelty fortune-telling magic eight ball that was inspired by flip-a-coin moments
            •	Requested and served gifs from the Giphy API to answer yes or no questions, retrieved gifs curated from keyword searches, and rendered trending memes
          </p>

          <h3>Frontend Engineer</h3>
          <span className={styles.projectName}>Atelier Retail Portal | </span>
          <span className={styles.projectGroupName}>Oscillating Owls</span>
          <p>
            •	Contributed in a team of four programmers with a concerted effort to construct front-end components of a retail service site
            •	Leveraged state-based components to render mathematical statistics regarding product characteristics, reviews, and ratings
            •	Personalized and integrated custom star icons, gradient buttons with hover transitions, and styled inputs for a more aesthetic design
          </p>

          <h2>Education</h2>
          <h3>Hack Reactor, San Francisco</h3>
          <h4>Advanced Software Engineering Immersive • Graduated April 2021</h4>

          <h3>University of California, Irvine</h3>
          <h4>Paralegal Certificate • Graduated September 2018</h4>

          <h3>University of California, Santa Barbara</h3>
          <h4>Bachelor of Arts • Graduated June 2015</h4>
        </div>
        <div className={styles.columnTwo}>
          <h2>Technical Knowledge</h2>
          <p>JavaScript • Node.js • Express • ES6 •  NPM • AWS • EC2 • S3 • Nginx • Git Workflow • Debugging • Databases • SQL and NoSQL • MySQL • MongoDB • Webpack • Babel • jQuery • Programming • Trello • ServiceNow • VSC • Loader.io • K6 • Agile Methodology • TDD • CircleCI • Data Structures • Project Management • System Design and Integration • Technical Documentation and Research • APIs</p>

          <h2>Prior Professional Experience</h2>
          <h3>Latham &#038; Watkins LLP</h3>
          <p className={styles.workCity}>San Francisco, CA</p>
          <p className={styles.workYear}>2019 - 2021</p>
          <p>Pros Assistant | Notary | Emerging Companies | Corporate Law</p>

          <h3>Stradling Yocca Carlson &#038; Rauth, PC</h3>
          <p className={styles.workCity}>Santa Monica, CA</p>
          <p className={styles.workYear}>2017 - 2019</p>
          <p>Corporate Assistant | Bond and Public Law, Corporate Law, Litigation, IP</p>

          <h3>Liem H. Do &#038; Associates, APLC</h3>
          <p className={styles.workCity}>Orange County, CA</p>
          <p className={styles.workYear}>2015 - 2017</p>
          <p>Personal Injury | Estate Planning | Family Law</p>

          <h2>Involvements and Other Skills</h2>
          <ul>
            <li>Bilingual</li>
            <li>Crisis Counselor for Crisis Text Line</li>
            <li>Leadership experience through Rotary Youth Leadership Awards Program</li>
            <li>Lead the UCI/OCPA Student Liaison team while attending UCI</li>
            <li>Licensed Notary Public</li>
            <li>CPR/AED Certified</li>
            <li>Interests: </li>
            <ul type="cicle">
              <li>Ran two half marathons</li>
              <li>Backpacking</li>
              <li>Photography and painting</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;