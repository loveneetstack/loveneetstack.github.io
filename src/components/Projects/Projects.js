import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leveluplms from "../../assets/projects/levelup-logo.png";
import healthcare from "../../assets/projects/health-care.png";
import gstbolton from "../../assets/projects/gstbolton.jpg";
import gander from "../../assets/projects/gander.png";
import shapenet from "../../assets/projects/shapenet.png";
import mandymovers from "../../assets/projects/mandy-movers-packers.png";

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
              imgPath={leveluplms}
              isBlog={false}
              title="LevelUp LMS"
              description="Levelup LMS is the world's simplest Learning Management System (LMS). It's the perfect LMS for employee training, onboarding, compliance training, and more."
           
              demoLink="https://www.leveluplms.com/"
            />
          </Col>
          {/* ghLink="https://github.com/leveluplms/" */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthcare}
              isBlog={false}
              title="Infinity-Doctors / Livecare"
              description="Infinity-Doctors is a API allowing doctor & patient medical answering service for a local physician-owned medical society. Infinity-Doctors provides nationwide service to medical practices, clinics, hospitals, dental practices, and other exclusively medical services."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gstbolton}
              isBlog={false}
              title="GST-Bolton"
              description="GST Bolton is a tool for GST tax computations and filing GST Returns. GST Bolton is a one stop solution for all GST Needs. GST is perhaps the biggest tax reform in India and being well-informed about GST is crucial for being updated with the latest happenings on GST front."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gander}
              isBlog={false}
              title="Gander App"
              description="The Gander app that helps you save money on your food & grocery shopping whilst substantially reducing food waste."
              demoLink="https://www.gander.co/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shapenet}
              isBlog={false}
              title="ShapeNet Software"
              description="Shapenet software is club management system to manage the club, trainers & appointments. it deliver a full suite of integrated technology solutions. From billing members, selling products and services, member self-service solutions, scheduling a class/training session on-line or through a club branded app, maintaining up to date member health profiles, and much more."
              demoLink="https://shapenetsoftware.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mandymovers}
              isBlog={false}
              title="Movers and Packer Booking Software"
              description="Moving and packing services are professional services offered to individuals and businesses to help them relocate from one place to another. These services are typically provided by moving companies or movers who specialize in packing, loading, transporting, unloading, and unpacking belongings."
              demoLink="https://www.mandymovingandpacking.com.au/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
