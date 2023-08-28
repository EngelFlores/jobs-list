import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faLocationCrosshairs, faIndustry, faBusinessTime } from '@fortawesome/free-solid-svg-icons'

import "./Row.css"

export const Row = ({ jobTitle, employmentType, url, industry, companyName, experience, locations }) => {

  return (
    <div className="row">
      <h3 data-testid="company-name">{companyName}</h3>
      <h2 data-testid="job-title">{jobTitle}</h2>
      <div className="row-info">
        {employmentType && <div><FontAwesomeIcon icon={faBriefcase} /> <span data-testid="employment-type" className="row-details">{employmentType}</span></div>}
        {industry && <div><FontAwesomeIcon icon={faIndustry} /><span data-testid="industry" className="row-details">{industry}</span></div>}
        {experience && <div><FontAwesomeIcon icon={faBusinessTime} /><span data-testid="experience" className="row-details">{experience}</span></div>}
        {Array.isArray(locations) && locations.length > 0 && <div>
          <FontAwesomeIcon icon={faLocationCrosshairs} />
          {locations?.map((element, index) => <span data-testid="location" key={index} className="row-details">{element.location.text}</span>)}
        </div>}

      </div>
      <a className="row-link" target='_blank' rel="noreferrer" href={url}>More Details</a>
    </div>
  )
}