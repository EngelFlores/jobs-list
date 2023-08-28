import React, { useEffect, useState } from 'react';
import { getJobs } from "../../api/jobsApi";

import "./List.css"

export const List = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const getData = async () => {
      const initialData = await getJobs();
      console.log(initialData.data)
      setData(initialData.data)
    }
    getData()
  }, [])

  return (
    <div>
      {data?.map(job => {
        return (
          <>{job.title}</>
        )
      })
      }</div>
  )
}