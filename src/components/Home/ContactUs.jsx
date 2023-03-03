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
          <MapContainer className='w-full h-80' center={[3.98282, -73.76168]} zoom={20} >
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[3.98282, -73.76168]}>
                  <Popup>
                    <h1 className='text-center font-bold '>Maria Montessori</h1>
                    <p>Carrera 17A #9-49 Barrio Jardín, Acacias, Meta</p>
                  </Popup>
              </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default ContactUs