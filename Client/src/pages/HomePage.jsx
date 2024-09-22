import NavBar from "@/components/NavBar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRightIcon, CheckCircleIcon, ZapIcon, SearchIcon, BarChartIcon, BookOpenIcon } from "lucide-react"

import { Link } from "react-router-dom"

export default function HomePage() {

const features = [
  { name: "AI-Powered Analysis", icon: <ZapIcon className="h-6 w-6 text-primary mr-4" /> },
  { name: "English-Language Support", icon: <BookOpenIcon className="h-6 w-6 text-primary mr-4" /> },
  { name: "Real-Time Results", icon: <SearchIcon className="h-6 w-6 text-primary mr-4" /> },
  { name: "Detailed Reports", icon: <BarChartIcon className="h-6 w-6 text-primary mr-4" /> },
  { name: "Integration with LMS", icon: <CheckCircleIcon className="h-6 w-6 text-primary mr-4" /> },
  { name: "Continuous Learning", icon: <ArrowRightIcon className="h-6 w-6 text-primary mr-4" /> }
]


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white  ">
         <NavBar />

      <main>
        {/* Hero Section */}
        <section  id="hero" className="container mx-auto px-4 py-32 text-center dark:bg-black dark:text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Real-time AI-Powered Plagiarism Detection</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Ensure academic integrity with our cutting-edge AI technology. Detect plagiarism with unparalleled accuracy and speed.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to='check' ><Button size="lg" className="w-full sm:w-auto" >
              Start Detecting
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button></Link>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gray-50 py-20 dark:bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Advanced Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center bg-white p-6 rounded-lg shadow-sm">
                  {feature.icon}
                  <span className="text-lg font-semibold">{feature.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="container mx-auto px-4 py-20 dark:bg-black  ">
          <div className="bg-primary text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Safeguard Academic Integrity?</h2>
            <p className="text-lg mb-8">Join thousands of institutions in promoting original work and fair assessment.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Input 
                type="email" 
                placeholder="Enter your institutional email" 
                className="w-full sm:w-64 bg-white text-gray-900"
              />
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Start Free Trial
              </Button>
            </div>
            <p className="mt-5">Just for demo</p>
          </div>
        </section>
      </main>

 
    </div>
  )
}