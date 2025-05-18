import heroImg from '/hero.jpg'
import { Link } from 'react-router-dom'


function Home() {

  return (
    
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 text-center">
            <div className="max-w-4xl mx-auto mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
                Your Resume, Ready in  <br/>
                    <span className="text-blue-600">60 Seconds.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-10">
                    Build a professional and outstanding resume with our free builder and templates.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                    <button className="bg-blue-600 text-white py-3 px-8 rounded-md font-medium hover:bg-blue-700 transition-colors">
                    <Link to="/editor">Create My Resume</Link>
                    </button>
                </div>
            </div>
            
            <div className="relative max-w-5xl mx-auto pb-10 md:pb-0">
                <div className="relative z-10  rounded-lg overflow-hidden">
                    <img src={heroImg} alt="Resume Template Preview" className="w-full h-auto" />
                </div>
                
                
                
                
                <div className="absolute top-6 -right-2 md:right-4 bg-white rounded-lg shadow-lg p-3 flex items-center gap-2 z-20">
                    <div className="bg-amber-100 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <span className="font-medium">Build-in jobs</span>
                </div>
                
              
            </div>
        </div>
  )
}

export default Home