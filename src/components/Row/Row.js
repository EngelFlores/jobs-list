import React from 'react';

import "./Row.css"

export const Row = ({ title, employment_type, url, industry, companyName, experience }) => {

  return (
    <>
    <p>{title}</p>
    <p>{employment_type}</p>
    <a href={url}>Check Description </a>
    <p>{industry}</p>
    <p>{companyName}</p>
    <p>{experience}</p>
    </>
  )
}