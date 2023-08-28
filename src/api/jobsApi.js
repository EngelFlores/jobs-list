import axios from "axios"

const baseUrl = process.env.REACT_APP_API_URI

export const getJobs = async () => {
  try {
    return await axios.get(baseUrl)
  } catch (error) {
    throw new Error(error)
  }
}