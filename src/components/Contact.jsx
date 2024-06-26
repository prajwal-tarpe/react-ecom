import React from 'react'
import Decorate from './Decorate'

function Contact() {
  return (
    <>
      <Decorate/>
      <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
        <form className="space-y-6" method='POST' action='https://formspree.io/f/xjkbbpbv'>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required autoComplete='off' />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required autoComplete='off' />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" id="message" rows="4" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" autoComplete='off' required></textarea>
          </div>
          <div>
            <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send Message</button>
          </div>
        </form>
      </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29814.821458983897!2d77.74324102297751!3d20.918245802432498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDMart%20near%20Gopal%20Nagar%2C%20Amravati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1717158639393!5m2!1sen!2sin" width="100%" height="450" style={{border:0}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='mb-20'></iframe>
    </>
  )
}

export default Contact