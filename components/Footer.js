import React from 'react'

export default function Footer() {
  return (
      <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
          <div className='space-y-4 text-xs text-gray-800'>
              <h5 className='font-bold'>ABOUT</h5>
              <p>How Airbnb works</p>
              <p>Newsroom</p>
              <p>Investors</p>
              <p>Airbnb Plus</p>
              <p>Airbnb Luxe</p>
          </div>
             
          <div className='space-y-4 text-xs text-gray-800'>
              <h5 className='font-bold'>COMMUNITY</h5>
              <p>How it works?</p>
              <p>Get in Touch</p>
              <p>FAQs</p>
              <p>Query</p>
              <p>Join</p>
          </div>
          
          <div className='space-y-4 text-xs text-gray-800'>
              <h5 className='font-bold'>HOST</h5>
              <p>Lucky Customers</p>
              <p>Rewards</p>
              <p>Dummy</p>
              <p>Connect with us</p>
              <p>Follow</p>
          </div>
          <div className='space-y-4 text-xs text-gray-800'>
              <h5 className='font-bold'>Support</h5>
              <p>Rebuild</p>
              <p>Call</p>
              <p>Chat with Us</p>
              <p> Bookings</p>
              <p>Any other</p>
          </div>
    </div>
  )
}
