import React from 'react'
import { BackgroundBeamsWithCollision } from '../../components/ui/background-beams-with-collision'
import Logo from '../../assets/Logo.png'

function About() {
  return (
    <BackgroundBeamsWithCollision>

      <div className="max-w-7xl h-auto  w-full bg-white shadow-md rounded-xl p-20 flex flex-col lg:flex-row gap-10">
        {/* Left Section: Text Content */}
        <div className="flex-1">
          <p className="text-orange-500 font-semibold text-lg">How It Started</p>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            Our Dream is of a city united by the Urban Energy Board.
          </h1>
          <p className="text-gray-600 mt-4 leading-relaxed">
          <b>The Urban Energy Board </b> will provide hyperlocal energy insights, 
          offering detailed consumption data at the neighborhood or household level.
           It will feature an interactive footprint simulation, allowing users to visualize
            the environmental impact of their energy choices, such as switching to renewable 
            sources or improving energy efficiency. The platform will ensure complete transparency
             in energy sourcing, displaying real-time shifts toward renewables and empowering users
              with actionable insights.
            Users will be able to engage in community energy comparisons, competing to reduce their 
            carbon footprint while gaining recognition for sustainable practices. Smart device integratio
            n will provide real-time data, automated optimization suggestions, and predictive analytics to
             enhance energy efficiency.
            Beyond tracking energy consumption, the Urban Energy Board will recommend personalized carbon offset 
            programs, including tree planting initiatives, renewable energy credits, and local sustainability projects.
             Additionally, it will feature a decentralized energy-sharing platform, enabling secure peer-to-peer
              energy transactions, fostering a collaborative approach to energy sustainability.
            To strengthen community engagement, the platform will track public and private partnerships, 
            showcasing sustainability efforts, funding opportunities, and real-world impact metrics. 
            By fostering collaboration between individuals, businesses, and policymakers, the Urban Energy 
            Board will play a crucial role in driving the transition toward a smarter, greener, and more 
            sustainable energy future.
          </p>
        </div>

        {/* Right Section: Image & Stats */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-white rounded-xl overflow-hidden">
            <img
              src={Logo} // Replace with actual image
              alt="Team Collaboration"
              className="w-full h-56 object-contain"
            />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-gray-900">3.5</h2>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-gray-900">23</h2>
              <p className="text-gray-600">Project Challenge</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-gray-900">830+</h2>
              <p className="text-gray-600">Positive Reviews</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-gray-900">100K</h2>
              <p className="text-gray-600">Trusted Students</p>
            </div>
          </div>
        </div>
      </div>

    </BackgroundBeamsWithCollision>
  )
}

export default About
