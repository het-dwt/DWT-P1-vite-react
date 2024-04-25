import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import "./about.css";

const About = () => {
  return (
    <div className="outest-div">
      <div className="about-main-wrapper">
        <div className="about-heading-h2">
          {/* <h2>Digiwagon Technologies.</h2> */}
        </div>
        <div className="about-context-wrapper">
          <div className="about-context-1">
            <p>
              Digiwagon Technologies Private Limited is a leading digital
              solutions provider dedicated to understanding and meeting the
              unique needs of each client. With over 500 successful projects
              under our belt, we excel in SEO, digital marketing, website and
              app development, e-commerce solutions, IT services, and cloud
              computing. Our mission is simple: to craft efficient digital
              systems that help businesses grow and succeed online.
            </p>
          </div>
          <div className="about-context-2">
            <div>
              <img
                className="img-1"
                // src="src\navbar\pic\img1.jpg"
                alt=""
                height={100}
                width={100}
              ></img>
            </div>
          </div>
        </div>
        <div className="about-context-wrapper">
          <div className="about-context-1">
            <p>
              <b>Different Product /scope of work</b>
              <div>
                There are many IT services provided by the Digiwagon
                Technologies like,
              </div>
              <div className="about-tech-list">
                <p>• Custom Software Development </p>
                <p>• IoT Solutions (Connectivity & Data Exchange)</p>
                <p>• Blockchain Development (DApps & Smart Contracts)</p>
                <p>• AR and VR Development (Immersive Experiences)</p>
                <p>• Cybersecurity Services (Threat Protection)</p>
                <p>• Data Analytics and BI (Insights & Visualization)</p>
                <p>• Machine Learning and AI Solutions </p>
                <p>• Digital Transformation Consulting</p>
                <p>• CRM and Marketing Automation </p>
                <p>• DevOps Services (Collaboration & Automation)</p>
              </div>
            </p>
          </div>
          <div className="about-context-2">
            {/* <div>
              <img
                className="img-2"
                // src="src\navbar\pic\img1.jpg"
                alt=""
                height={200}
                width={200}
              ></img>
            </div> */}
          </div>
        </div>
      </div>
      <div className="about-context-section3">
        <p>
          <u>DETAILS ABOUT EACH STAGE OF PRODUCTION</u>
        </p>
        <div className="accordian-wrapper">
          <Accordion elevation={2}>
            <AccordionSummary expandIcon={<ExpandMoreSharpIcon />}>
              1. Gather the information about Requirements :
            </AccordionSummary>
            <AccordionDetails>
              • While starting any software development project this is the most
              essential part of the whole process and therefore the company
              first get a clear idea about the functional and non-functional
              requirements. This is the responsibility of the project manager to
              communicate the requirements distinctly to the development and
              designer team.
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="accordian-wrapper">
          <Accordion elevation={2}>
            <AccordionSummary expandIcon={<ExpandMoreSharpIcon />}>
              2. Start with the Front-end design :
            </AccordionSummary>
            <AccordionDetails>
              • It is the role of UI/UX designers of the company. Once the
              requirements about the design and user interface is understood the
              team starts with developing the visual solution of the product.
              This part of the process is known as user interface design, and it
              stands for how users perceive the app.
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="accordian-wrapper">
          <Accordion elevation={2}>
            <AccordionSummary expandIcon={<ExpandMoreSharpIcon />}>
              3. Focus on Coding :
            </AccordionSummary>
            <AccordionDetails>
              • In the third step, we finally get down to coding the concepts
              listed above. Here, the development team implements all models,
              business logic, and service integrations specified in the prior
              stages. The coding stage is usually the longest, as it is the
              cornerstone of the whole process. The development team follows the
              software requirements to build a product that lives up to the
              stakeholder’s expectations.
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="accordian-wrapper">
          <Accordion elevation={2}>
            <AccordionSummary expandIcon={<ExpandMoreSharpIcon />}>
              4. Review of the product by QA team :
            </AccordionSummary>
            <AccordionDetails>
              • At the QA stage, the testing specialists discover and inform
              about the problems that arise while using the system. The testing
              frameworks may vary depending on the project, including automation
              and/or manual testing.
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="accordian-wrapper">
          <Accordion elevation={2}>
            <AccordionSummary expandIcon={<ExpandMoreSharpIcon />}>
              5. Operation Stage/ Deployment Stage :
            </AccordionSummary>
            <AccordionDetails>
              • Finally, the application goes on to be deployed in a live
              environment. This stage involves deployment, support, and
              maintenance necessary to keep the system functional and upto-date.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default About;
