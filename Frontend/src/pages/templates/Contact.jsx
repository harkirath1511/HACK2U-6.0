import React from 'react'
import { BackgroundBeamsWithCollision } from '../../components/ui/background-beams-with-collision'

function Contact() {
  return (
    <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center justify-center bg-gray-100 py-16 px-8 w-full  rounded-2xl">
      {/* Contact Us Section */}
      <div className="text-center">
        <p className="text-blue-600 font-semibold text-lg">Contact us</p>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Get in touch with our team
        </h1>
        <p className="text-gray-600 mt-4">
          We have the team and know-how to help you scale 10x faster.
        </p>
      </div>

      {/* World Map with Locations */}
      <div className="mt-10">
        <img
          src="https://freevector-images.s3.amazonaws.com/uploads/vector/preview/31829/32563_dotted-worldmap-1.jpg" // Replace with actual map image
          alt="Global Locations"
          className="w-full max-w-4xl"
        />
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 max-w-4xl w-full">
        {/* Chat to Sales */}
        <div className="bg-white shadow-md p-6 rounded-lg text-center border">
          <p className="text-lg font-semibold">Chat to sales</p>
          <p className="text-gray-600 mt-2">Speak to our friendly team.</p>
          <a
            href="mailto:sales@untitledui.com"
            className="text-blue-600 font-medium mt-3 block"
          >
            sales@untitledui.com
          </a>
        </div>

        {/* Chat to Support */}
        <div className="bg-white shadow-md p-6 rounded-lg text-center border">
          <p className="text-lg font-semibold">Chat to support</p>
          <p className="text-gray-600 mt-2">We're here to help.</p>
          <a
            href="mailto:support@untitledui.com"
            className="text-blue-600 font-medium mt-3 block"
          >
            support@untitledui.com
          </a>
        </div>

        {/* Visit Us */}
        <div className="bg-white shadow-md p-6 rounded-lg text-center border">
          <p className="text-lg font-semibold">Visit us</p>
          <p className="text-gray-600 mt-2">Visit our office HQ.</p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium mt-3 block"
          >
            View on Google Maps
          </a>
        </div>

        {/* Call Us */}
        <div className="bg-white shadow-md p-6 rounded-lg text-center border">
          <p className="text-lg font-semibold">Call us</p>
          <p className="text-gray-600 mt-2">Mon-Fri from 8am to 5pm.</p>
          <p className="text-blue-600 font-medium mt-3">+1 (555) 000-0000</p>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <h2 className="text-2xl font-bold text-gray-900 mt-16">
        Frequently asked questions
      </h2>
    </div>
    </BackgroundBeamsWithCollision>
  )
}

export default Contact
