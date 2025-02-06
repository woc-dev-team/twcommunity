import React, { useState } from 'react';
import { Menu, X } from "lucide-react";

const SideBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
      <>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='fixed left-4 top-4 z-50 p-2 bg-gray-800 text-white rounded-lg'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <nav className='p-6'>
              <a>The Word Church 로고</a>
              <ul className="space-y-4">
                {/* 다크모드 */}
                <li><a href="/home" className="block p-2 hover:bg-gray-700">Home</a></li>
                <li><a href="/about" className="block p-2 hover:bg-gray-700">The Word Church</a></li>
                <li><a href="/service" className="block p-2 hover:bg-gray-700">People</a></li>
                <li><a href="/contact" className="block p-2 hover:bg-gray-700">Information</a></li>
              </ul>
            </nav>
          </div>

          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            />
          )}
      </>
    )
}
  
export default SideBar;