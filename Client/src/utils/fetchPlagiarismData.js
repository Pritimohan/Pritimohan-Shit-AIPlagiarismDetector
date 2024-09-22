import toast from "react-hot-toast"
import axios from "axios"


export async function fetchPlagiarismData(file, setResult) {
  try {
    const formData = new FormData()
    formData.append('file', file)

    const response = await axios.post(`http://localhost:3000/api`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    setResult(response.data.result[0])

    // Uncomment the code below and remove the code above to use fetch instead of axios
    // const response = await fetch(`https://pritimohan-shit-ai-plagiarism-detector-api.vercel.app/api`, {
    //   method: "POST",
    //   body: formData
    // })
    // const data = await response.json()
    // setResult(response.result[0])

  } catch (error) {
    toast.error(error.message)
    console.error('Error fetching data: ', error)
  }
}



