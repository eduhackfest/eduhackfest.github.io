import React from 'react';
import {Btn} from '../Landing/index.jsx';
import './style.css';

interface IJoinTeam {
  placeholder: string;
  formLink: string;
  content: string;
}

const JoinTeam: React.FC<IJoinTeam> = ({placeholder, formLink, content}) => {
  return (
    <div className="joinT">
      <h3>{content} </h3>
      <a href={formLink}>
        <Btn type={placeholder} overlay="Fill the form" link={formLink} />
      </a>
    </div>
  );
};

const Member = ({info}: {info: any}) => {
  const {github, role, name, img, linkedin, web} = info;
  return (
    <div className="member">
      {
        img ?
        <img src={img} alt="member"/> :
        <></>
      }
      <div className="members-link">
        <h3>{name}</h3>
        <p>{role}</p>
        { linkedin ?
          <a href={linkedin} target='_blank'>
            <i className="fab fa-2x fa-linkedin"></i>
          </a> :
          <></>
        }
        { github ?
          <a href={github} target='_blank'>
            <i className="fab fa-2x fa-instagram"></i>
          </a> :
          <></>
        }
        { web ?
          <a href={web} target='_blank'>
            <i className="fas fa-globe fa-lg"></i>
          </a> :
          <></>
        }
      </div>
    </div>
  );
};

export {Member, JoinTeam};
