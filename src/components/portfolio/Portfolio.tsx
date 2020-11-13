import React from "react";
import { Row, Col } from "reactstrap";
import "./styles/portfolio.scss";
import { experiences, others, educations } from "../../data/portfolio";
// import { IsMobileSize } from "../../helpers/helpers";
import Fade from "react-reveal/Fade";
import TransitionGroup from "react-transition-group/TransitionGroup";
// import { ReactComponent as IconPortfolio } from "../../assets/svg/portfolio.svg";
import Lottie from "react-lottie";
import animationData from "../../assets/svg/LottieAnimation/TestigTechColored.json";

type ExpListProps = {
  expList: {
      company: string,
      timeline:string,
      description: string[],
      stack: string
  }[]
}

type ExpItemProps = {
  exp: {
    company: string,
    timeline:string,
    description: string[],
    stack: string
}, tag: number
}

type EduProps = {
  eduList: {
    school: string,
    degree: string,
  }[]
}

type EduListItemProps = {
  edu: {
    school: string,
    degree: string,
  }, tag: number
}


const Portfolio = () => {
  let groupProps = {
    appear: true,
    enter: false,
    exit: false,
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Col className="portfolio_outer pos-absolute" sm="12">
      <Row className="full pos-absolute portfolio_outer_inner">
        <Col
          xs="12"
          sm="12"
          md="5"
          className="h-100 portfolio_svg mobile-hide center"
        >
          <div className="portfolio_projects_image">
            <div className="projects_image_container">
              <Lottie options={defaultOptions} height={400} width={500} />
            </div>
          </div>
        </Col>
        <Col xs="12" sm="12" md="5" className="h-100 mobile-hide"></Col>
        <Col xs="12" sm="12" md="7" className="h-100 portfolio">
          <div className="portfolio_exp">
            <TransitionGroup {...groupProps}>
              <Fade bottom>
                <h4 className="topping">Experiences</h4>
              </Fade>
              <ExpList expList={experiences} />
              <Fade bottom>
                <p className="color-gray">other projects</p>
                <OtherProject projects={others} />
                <br />
                <p className="center pointer">
                  <a
                    className="color-gray"
                    href="https://github.com/khoabui9"
                    target="blank"
                  >
                    see more
                  </a>
                </p>
              </Fade>
              <Fade bottom>
                <h4 className="topping">Education history</h4>
              </Fade>
              <EduList eduList={educations} />
            </TransitionGroup>
          </div>
          {/* <div className="portfolio_edu">
            <div className="portfolio_edu_list"></div>
          </div> */}
        </Col>
      </Row>
    </Col>
  );
};

const ExpList = (props: ExpListProps) => {
  const { expList } = props;

  return (
    <div className="portfolio_exp_list">
      {expList &&
        expList.map((exp, idx) => (
          <Fade key={idx} bottom>
            <ExpListItem tag={idx + 1} exp={exp} />
          </Fade>
        ))}
    </div>
  );
};

const ExpListItem = (props: ExpItemProps) => {
  const { exp, tag } = props;

  return (
    <div className="portfolio_exp_listItem">
      <div className="exp_number center">
        <p>{tag < 10 ? "0" + tag : tag}.</p>
      </div>
      <div className="exp_content">
        <div className="exp_content_title center">
          <h4>{exp.company}</h4>
        </div>
        <div className="exp_content_year center">
          <p className="color-gray">{exp.timeline}</p>
        </div>
        <div className="exp_content_desc">
          {exp.description.map((desc, idx) => (
            <p key={idx}>{desc}</p>
          ))}
        </div>
        <br />
        <div className="exp_content_stacks center">
          <p>Stack: {exp.stack}</p>
        </div>
      </div>
    </div>
  );
};

const EduList = (props: EduProps) => {
  const { eduList } = props;

  return (
    <div className="portfolio_edu_list">
      {eduList &&
        eduList.map((edu, idx) => (
          <Fade key={idx} bottom>
            <EduListItem key={idx} tag={idx + 1} edu={edu} />
          </Fade>
        ))}
    </div>
  );
};

const EduListItem = (props: EduListItemProps) => {
  const { edu, tag } = props;

  return (
    <div className="portfolio_edu_listItem">
      <div className="edu_number center">
        <p>{tag < 10 ? "0" + tag : tag}.</p>
      </div>
      <div className="edu_content">
        <div className="edu_content_title center">
          <h4>{edu.school}</h4>
        </div>
        <div className="edu_content_degree center">
          <p className="color-gray">{edu.degree}</p>
        </div>
      </div>
    </div>
  );
};

const OtherProject = (props) => {
  const { projects } = props;
  return (
    <Row>
      {projects.map((project, idx) => (
        <Col sm="6" md="6" lg="6" key={idx}>
          <a href={project.link} target="blank">
            <div className="other_project pointer">
              <div className="other_project_item">
                <img
                  className="w-100"
                  src={project.thumbnail}
                  alt="khoa projects"
                ></img>
              </div>
            </div>
          </a>
        </Col>
      ))}
    </Row>
  );
};

export default Portfolio;
