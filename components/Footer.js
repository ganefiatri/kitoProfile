import React from 'react'

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">HELP</h5>
            <p>How to Shop ?</p>
            <p>q&a</p>
            <p>Call us</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">SHOPPING AT HOSANA</h5>
            <p>Card Member Hosana</p>
            <p>Hosana Store Branch</p>
            <p>Product Catalog</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">ABOUT</h5>
            <p>About Hosana Group</p>
            <p>Newsroom & Event</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">OUR POLICY</h5>
            <p>Terms Of use</p>
            <p>Product Returns</p>
            <p>Privacy Policy</p>
            <p>Shipping Terms</p>
        </div>
    </div>
  )
}

export default Footer