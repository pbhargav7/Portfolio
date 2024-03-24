import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cloud from "../../Assets/Projects/cloud.png";
import stock from "../../Assets/Projects/stock.png";
import pharmacrypt from "../../Assets/Projects/pharmacrypt.png";
import expense from "../../Assets/Projects/expense.png";
import rbms from "../../Assets/Projects/rbms.png";
import deeplearning from "../../Assets/Projects/deeplearning.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloud}
              isBlog={false}
              title="Cloud Based – On-Demand Video Streaming Platform"
              description="Architected a resilient, cloud-based video streaming platform resembling leading industry players such as Hulu and Netflix. 
              Utilized AWS services like S3, Cognito, GraphQL API, Lambda, DynamoDB, and CloudFront for enhanced security and scalability. 
              Integrated Step Functions and Media Package to optimize user management, transcoding, and performance."
              ghLink="https://github.com/pbhargav7/1_AWS-Video-Streaming-Platform"
              demoLink="https://github.com/pbhargav7/1_AWS-Video-Streaming-Platform"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="ExpenseSavvy"
              description="Streamlining Expense Management with OCR Technology and Smart Analytics: 
              ExpenseSavvy revolutionizes expense management with OCR technology and AI/ML analytics. 
              Its MVP employs Node.js and MongoDB for seamless data extraction and storage. 
              Future phases integrate AWS for advanced analytics, predictive insights, 
              and user-friendly dashboards. Enhanced efficiency and accuracy redefine 
              financial tracking for users, ensuring a streamlined experience."
              demoLink="https://github.com/pbhargav7"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock Market Sentimental Analysis"
              description="This innovative project seamlessly incorporates a dynamic data 
              visualization module into a Flask-based web platform 🌐. 
              It concentrates on analyzing stock market data 📈 and extracting insights 
              from Reddit and Yahoo discussions. 
              Leveraging a PostgreSQL database, it empowers users with diverse visualizations, 
              facilitating informed decision-making based on comprehensive data analysis."
              ghLink="https://github.com/pbhargav7/2_Stock-Market-Sentiment"
              demoLink="https://github.com/pbhargav7/2_Stock-Market-Sentiment"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pharmacrypt}
              isBlog={false}
              title="PharmaCrypt"
              description="Pharmaceutical Supply Chain Management System using Blockchain and 
              IOT Technology: This project leverages blockchain technology to 
              enhance transparency in the pharmaceutical supply chain, combating drug 
              counterfeiting and theft issues prevalent in the industry. Through a user-friendly 
              web application, consumers can easily verify the authenticity of products using QR codes, 
              ensuring confidence in medication safety and authenticity."
              ghLink="https://github.com/pbhargav7"
              demoLink="https://github.com/pbhargav7"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deeplearning}
              isBlog={false}
              title="Uncertainty-aware Deep Learning"
              description="This project explores uncertainty-aware deep learning, 
              addressing the challenge of 
              robust uncertainty estimation in critical domains like healthcare and 
              autonomous driving. It focuses on implementing and 
              evaluating methodologies proposed in the paper 'Simple and Principled 
              Uncertainty Estimation with Deterministic Deep Learning via Distance Awareness.'"
              ghLink="https://github.com/pbhargav7/3_Uncertainity-aware-Deep-Learning"
              demoLink="https://github.com/pbhargav7/3_Uncertainity-aware-Deep-Learning"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rbms}
              isBlog={false}
              title="Retail Business Management System"
              description="This Database Management System project utilizes 
              JDBC and SQL to manage a business's operations effectively. 
              It facilitates tasks such as employee, customer, and product management, 
              alongside purchase tracking and inventory control. With a user-friendly interface and 
              integration with frontend technologies, 
              it streamlines business processes for enhanced efficiency and transparency."
              ghLink="https://github.com/pbhargav7/4_Retail-Business-Management-System"
              demoLink="https://github.com/pbhargav7/4_Retail-Business-Management-Systemy" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
