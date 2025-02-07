import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundBeamsWithCollision } from "../../components/ui/background-beams-with-collision.jsx";
import Maps from '../../components/Maps.jsx';

function Home() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="relative w-full min-h-screen text-white">
        <div className="relative w-full max-w-5xl mx-auto px-6 py-10 space-y-6">
          
          {/* Top Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6  backdrop-blur-lg bg-black/50  border border-gray-700 shadow-xl p-6 rounded-xl text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[{ value: '85', unit: 'kWh', label: 'Available Power', color: 'text-blue-300' },
              { value: '2.4', unit: 'kW', label: 'Current Usage', color: 'text-green-300' },
              { value: '$42', unit: 'USD', label: 'Balance', color: 'text-yellow-300' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <motion.div 
                  className={`text-4xl font-extrabold ${item.color}`}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.value}
                </motion.div>
                <div className="text-gray-300 text-lg">{item.unit}</div>
                <div className="text-gray-400">{item.label}</div>
              </div>
            ))}
          </motion.div>
          
          {/* Quick Purchase & Daily Usage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div className="bg-black/50  border backdrop-blur-lg border-gray-700 shadow-xl p-6 rounded-xl"
              whileHover={{ scale: 1.02 }}>
              <h2 className="font-semibold text-lg mb-4">Quick Purchase</h2>
              <div className="space-y-3">
                {[{ amount: '50 kWh', price: '$25' }, { amount: '100 kWh', price: '$45' }, { amount: '200 kWh', price: '$85' }].map((item, index) => (
                  <motion.div key={index} className="flex justify-between px-4 py-2 bg-gray-900 rounded-md cursor-pointer hover:bg-gray-700 transition"
                    whileTap={{ scale: 0.95 }}>
                    <span>{item.amount}</span> <span className="text-blue-300">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="bg-black/50  border backdrop-blur-lg border-gray-700 shadow-xl p-6 rounded-xl"
              whileHover={{ scale: 1.02 }}>
              <h2 className="font-semibold text-lg mb-4">Daily Electricity Usage</h2>
              <div className="w-full h-32 bg-gray-900 rounded-lg flex items-center justify-center">
                <img 
                  src="https://images.theconversation.com/files/489836/original/file-20221014-1601-53ifwb.gif?auto=format&fit=clip&ixlib=rb-1.1.0&q=45&w=1000" 
                  alt="Daily Electricity Usage Line Graph"
                  className="w-full h-36  rounded-lg"
                />
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div className="bg-black/50  border backdrop-blur-lg border-gray-700 shadow-xl py-10 px-9 rounded-xl"
            whileHover={{ scale: 1.02 }}>
            <p className="mb-12 text-3xl font-semibold">Energy Usage Map</p>
            <div className="w-full h-80 mb-4">
              <Maps />
            </div>
          </motion.div>

          {/* Recent Transactions */}
          <motion.div className="bg-black/50  border backdrop-blur-lg border-gray-700 shadow-xl p-6 rounded-xl"
            whileHover={{ scale: 1.02 }}>
            <h2 className="font-semibold text-lg mb-4">Recent Transactions</h2>
            <div className="space-y-3">
              {[{ desc: 'Purchased 50 kWh', amount: '+ $25', color: 'text-green-300' },
                { desc: 'Usage Payment', amount: '- $18', color: 'text-red-300' },
                { desc: 'Purchased 100 kWh', amount: '+ $45', color: 'text-green-300' }
              ].map((item, index) => (
                <motion.div key={index} className="flex justify-between px-4 py-2 bg-gray-900 rounded-md hover:bg-gray-700 transition"
                  whileTap={{ scale: 0.95 }}>
                  <span>{item.desc}</span> <span className={item.color}>{item.amount}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default Home;
