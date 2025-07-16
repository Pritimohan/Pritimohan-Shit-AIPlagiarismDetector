import toast from "react-hot-toast"
import axios from "axios"


export async function fetchPlagiarismData(file, setResult) {
  try {
    const formData = new FormData()
    formData.append('file', file)

    const response = await axios.post(`https://pritimohan-shit-aiplagiarismdetector-1evp.onrender.com/api`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    setResult(response.data.result[0])
  } catch (error) {
    toast.error(error.message)
    console.error('Error fetching data: ', error)
  }
}



