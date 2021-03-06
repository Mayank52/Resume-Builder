import React from 'react';
import './skin4.css';

const Skin4 = (props) => {

  const {
    fname,
    lname,
    email,
    phone,
    street,
    city,
    pin,
    country,
    state,
    pSummary,
    hNo
  } = props.contactDetails;
  const {
    cCity,
    cName,
    cCountry,
    degree,
    yop,
    one,
    two,
    three
  } = props.educationDetails;
  const experienceDetails = props.experienceDetails;
  const experienceDetailsLocal = props.experienceDetailsLocal;
  return (
    <div className="skin4">
      <div className="skin4-one">
        <h1>{fname}{' '}{lname}</h1>
        <p>{hNo}{' '}{street}{' '}{city}{' '}{state}{' '}{pin}{' '}{country}{' '}{phone}{' '}{email}</p>
      </div>

      <div className="skin4-two">
        <h3>PROFESSIONAL SUMMARY</h3>
        <p>{pSummary}</p>
      </div>

      <div className="skin4-three">
        <h3>SKILLS</h3>
        <div className="skin4-three-one">
          <div className="skin4-three-skills-one">
            <ul>
              {one && one.map(skill => {
                return (
                  <li>{skill}</li>
                )
              })}
            </ul>
          </div>
          <div className="skin4-three-skills-two">
            <ul>
              {two && two.map(skill => {
                return (
                  <li>{skill}</li>
                )
              })}

            </ul>
          </div>
          <div className="skin4-three-skills-three">
            <ul>
              {three && three.map(skill => {
                return (
                  <li>{skill}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="skin4-four">
        <h3>
          EXPERIENCE
          </h3>
        <div className="skin4-four-inner">
          {experienceDetails.length && experienceDetails.map(exp => {
            return (
              <React.Fragment>
                <div className="skin4-four-upper">
                  <div className="skin4-four-upper-one">
                    <h4>{exp.cmName}</h4>
                    <p>{exp.designation}</p>
                  </div>
                  <div className="skin4-four-upper-two">
                    <p>{exp.sMonth}{exp.sYear}{'-'}{exp.eMonth}{exp.eYear}</p>
                  </div>
                </div>
                <ul>
                  {exp.description && exp.description.map(li => {
                    return (
                      <li>
                        <p>{li}</p>
                      </li>
                    )
                  })}
                </ul>
              </React.Fragment>
            );

          })}
          {experienceDetailsLocal &&
            <div className="skin4-four-upper">
              <div className="skin4-four-upper-one">
                {experienceDetailsLocal.cmName && <h4>{experienceDetailsLocal.cmName}</h4>}
                {experienceDetailsLocal.designation && <p>{experienceDetailsLocal.designation}</p>}
              </div>
              <div className="skin4-four-upper-two">
                <p>{experienceDetailsLocal.sMonth && <span>{experienceDetailsLocal.sMonth}</span> }{experienceDetailsLocal.sYear && <span>{experienceDetailsLocal.sYear}</span> }{'-'}{experienceDetailsLocal.eMonth && <span>{experienceDetailsLocal.eMonth}</span>}{experienceDetailsLocal.eYear && <span>{experienceDetailsLocal.eYear}</span>}</p>
              </div>
            </div>
          }
          <ul>
            {experienceDetailsLocal && experienceDetailsLocal.description && experienceDetailsLocal.description.map(li => {
              return (
                <li>
                  <p>{li}</p>
                </li>
              )
            })}
            {experienceDetailsLocal && experienceDetailsLocal.descriptionTemp && <li><p>{experienceDetailsLocal.descriptionTemp}</p></li>}
          </ul>

        </div>
      </div>

      <div className="skin4-five">
        <h3>
          EDUCATION
          </h3>
        <div className="skin4-five-inner">
          <div className="skin4-five-inner-one">
            <p>{degree}</p>
            <p>{cName}{' '}{cCity},{' '}{cCountry}</p>
          </div>
          <div className="skin4-five-inner-two">
            <p>{yop}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skin4;
