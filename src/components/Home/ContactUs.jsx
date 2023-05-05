import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function ContactUs() {

  const myIcon = L.icon({
    iconUrl: "https://icones.pro/wp-content/uploads/2021/02/icone-de-broche-de-localisation-rouge.png",
    iconSize: [45, 43],
    iconAnchor: [23.5, 41],
    popupAnchor: [0, -33]
  });

  return (
    <div className='bg-green-100'>
      <div className='lg:grid grid-cols-3 lg:p-20'>
        <div className='flex flex-col items-center justify-center text-center gap-y-8'>
          <h1 className='font-bold text-4xl'>Contáctanos</h1>
          <div className='flex flex-col items-center gap-2'>
            <BsTelephoneFill className=' w-8 h-8'/>
            <p>(+57) 3115187384</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <MdEmail className=' w-10 h-10'/>
            <p>lemariamontessori@acacias.edu.co</p>
          </div>
        </div>
        <div className='col-span-2 m-10 z-0'>
          <MapContainer className='w-full h-80' center={[3.98282, -73.76168]} zoom={20} >
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[3.98282, -73.76168]} icon={myIcon}>
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