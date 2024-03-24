import React from "react";
import Card from "react-bootstrap/Card";
//import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ fontSize:"0.8em", textAlign: "justify" }}>
            I'm a highly skilled Software Engineer with a Master of Science degree in Computer Science from SUNY Binghamton. 
            Passionate about solving complex software challenges, I bring a diverse skill set and deep tech expertise to the table.
            <br/><br />
              🚀 <b>Skills & Expertise:</b><br/>
                Proficient in <b className="purple">Java</b> and <b className="purple">Java Frameworks</b>, 
                with hands-on experience in <b className="purple">AWS services</b> like S3, EC2, and Lambda. 
                My technical proficiency includes Java, Python, C++, React.js, Spring Boot, and more.
              <br />
              <br />
              📌 <b>Technical Proficiency:</b><br/>
                  <p style={{fontSize: "0.9em"}}>
                  ✦ Languages: Java, Python, C, C++, PHP, CSS, SQL, XML, HTML, JavaScript, TypeScript, PowerShell Scripting<br/>
                  ✦ Methodologies & Frameworks: Agile, Waterfall, DevOps, OOPs, Scrum, Spring, JDBC, ReactJS, RESTful APIs<br/>
                  ✦ Tools & OS: Kubernetes, Docker, Jenkins, JIRA, Bitbucket, Eclipse IDE, Git, Zos IBM IDE, Windows, Linux/Unix<br/>
                  ✦ Cloud Platforms & Databases: AWS, GCP, DB2, PostgreSQL, MySQL, NoSQL, MongoDB
                  </p>
              🌟 <b>What Drives Me:</b><br/>
              The thrill of solving real-world problems with technology drives me. 
              I believe in the power of software to transform industries and improve lives, 
              and I'm eager to contribute to projects that align with these values.
              <br /><br />
              🌐 <b>Let's Connect:</b><br/>
              Always open to connecting! Whether it's discussing trends, exploring collaborations, 
              or just saying hello, feel free to reach out via 
              LinkedIn or email at bhargavptl77@gmail.com. 
              <br />
            </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "The best way to predict the future is to create it."
          </p>
          <footer className="blockquote-footer">Bhargav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
