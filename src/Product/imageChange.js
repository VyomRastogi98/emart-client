import React, { useEffect, useState } from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const fadeImages=[
   { url: "https://m.media-amazon.com/images/I/71qlKqpJnlL._SX3000_.jpg",
  
},
    {
        url:"https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg",
        
    },

   
    {
        url:"https://m.media-amazon.com/images/I/61O72XhcEkL._SX3000_.jpg",
        
    },
    {
        url:"https://m.media-amazon.com/images/I/61VuJdpjvaL._SX3000_.jpg",
        
    },
    {
        url:"https://m.media-amazon.com/images/I/61UrRx+3LLL._SX3000_.jpg",
      
    }
  ]
  let count=0;
export default function ImageChange() {
    
  return (
  <>
      <div  style={{width:"auto",height:600,color:"black",marginTop:100}}>
            
      <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container ade-in-image" >
              <img className="img1" width="100%" height="600px"   src={fadeImage.url} />
            </div>
          
          </div>
        ))}
      </Fade>
    </div>
            </div>
  </>
  )
}
