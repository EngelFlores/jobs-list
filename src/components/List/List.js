import React, { useEffect, useState } from 'react';
import { getJobs } from "../../api/jobsApi";

import { Row } from "../Row/Row"

import "./List.css"

export const List = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const getData = async () => {
      const initialData = await getJobs();
      setData(initialData.data)
    }
    getData()
  }, [])

  return (
    <div className="list">
      {data?.map(job => {
        return (
          <Row
          key={job.id}
          jobTitle={job.title} 
          employmentType={job.employment_type}
          url={job.urls.ad}
          industry={job.company.industry}
          companyName={job.company.name}
          experience={job.experience}
          locations={job.locations}
          ></Row>
        )
      })
      }</div>
  )
}