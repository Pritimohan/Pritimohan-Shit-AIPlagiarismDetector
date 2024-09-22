
import { useState } from 'react'
import { Upload, FileText, AlertCircle, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { usePDF } from 'react-to-pdf';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { fetchPlagiarismData } from "../utils/fetchPlagiarismData.js"




export default function UserScreenPage() {
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [result, setResult] = useState(null)
  const { toPDF, targetRef } = usePDF({filename: 'Plagiarism Report.pdf'});

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]
    if (selectedFile && (selectedFile.type === 'application/pdf' || selectedFile.type === 'application/msword' || selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setFile(selectedFile)

    } else {
      alert('Please upload a PDF or Word document.')
    }
  }

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true)
    await fetchPlagiarismData(file, setResult)
    // Simulated plagiarism detection result
    setUploading(false)

  }

  return (
    <div className="container min-h-screen flex justify-center items-center flex-col py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Plagiarism Detector</h1>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Upload Document</CardTitle>
          <CardDescription>Upload a PDF or Word document to check for plagiarism</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span></p>
                <p className="text-xs text-gray-500">PDF or Word (MAX. 10MB)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
            </label>
          </div>
          {file && (
            <div className="mt-4 flex items-center justify-center bg-gray-100 p-4 rounded-lg gap-2 flex-wrap ">
              <div className="flex items-center flex-grow">
                <FileText className="w-6 h-6 mr-2 text-blue-500" />
                <span className="text-sm font-medium">{file.name}</span>
              </div>
              <Button onClick={handleUpload} disabled={uploading}>
                {uploading ? 'Analyzing...' : 'Check Plagiarism'}
              </Button>

              {uploading ? "" : <Button variant="destructive"
                onClick={() => { setFile(null), setUploading(false), setResult(null) }}
              >
                < X className="w-5 h-5" />
              </Button>}
            </div>
          )}
        </CardContent>
      </Card>

      {result && (
        <Card 
        ref={targetRef}
        className="w-full max-w-2xl mx-auto mt-8">
          <CardHeader>
            <CardTitle>Plagiarism Detection Results</CardTitle>
          </CardHeader>
          <CardContent>
            <Alert className={result.persentage > 20 ? 'bg-red-100' : 'bg-green-100'}>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Plagiarism Score: {result.persentage}%</AlertTitle>
              <AlertDescription>
                {result.persentage > 20 ? 'High plagiarism detected. Please review your document.' : 'Low plagiarism detected. Your document appears to be mostly original.'}
              </AlertDescription>
            </Alert>
            <div className="mt-4">
              <ul className="list-disc pl-5 space-y-2">
                <h3 className="text-lg font-semibold mb-2">Matched Content:</h3>
                <li className="text-sm">{result?.matched_content}</li>
                <h3 className="text-lg font-semibold mb-2">Sources</h3>
                <li className="text-sm">{result?.sources}</li>
                <h3 className="text-lg font-semibold mb-2">Unique Content</h3>
                <li className="text-sm">{result?.unique_content}</li>
                <h3 className="text-lg font-semibold mb-2">Methods</h3>
                <li className="text-sm">{result?.methods}</li>
                <h3 className="text-lg font-semibold mb-2">Recommendations</h3>
                <li className="text-sm">{result?.recommendations}</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-500">
              Note: This is a simulated result. Actual plagiarism detection may vary in accuracy and detail.
            </p>
          </CardFooter>
        </Card>
      )}
      {result && (
        <Button
          onClick={() => toPDF()}
          className="mt-5">Download Result</Button>
      )}
    </div>
  )
}