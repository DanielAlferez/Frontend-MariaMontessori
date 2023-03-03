import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

function ContactUs() {
  return (
    <div className='bg-green-100'>
      <div className='lg:grid grid-cols-3 lg:p-20'>
        <div className='flex flex-col items-center justify-center text-center gap-y-8'>
          <h1 className='font-bold text-4xl'>Contáctanos</h1>
          <div>
            TEL
            <p>(+57) 3115187384</p>
          </div>
          <div>
            EMAIL
            <p>lemariamontessori@acacias.edu.co</p>
          </div>
        </div>
        <div className='col-span-2 m-10 '>
          <MapContainer className='w-full h-80' center={[51.505, -0.09]} zoom={13} >
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                  <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
              </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default ContactUs