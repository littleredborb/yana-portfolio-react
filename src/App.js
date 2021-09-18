
import Header from './components/header.js';
import Gallery from './components/gallery.js';
import './App.css';
import Navigation from './components/navigation.js';
import React from 'react';
import GalleryModal from './components/gallery-modal.js';

import { useState } from 'react'

import avatarImg from './img/avatar.png';
import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
import img6 from './img/6.png'

const App = () => {
  const [images, setImages] = useState([{
		"id": 0,
		"src": img1,
		"objectPosition": "50% 60%"
		},
		{
		"id": 1,
		"src": img2,
		"objectPosition": "50% 50%"
		},
		{
		"id": 2,
		"src": img3,
		"objectPosition": "40% 10%"
		},
		{
		"id": 3,
		"src": img4,
		"objectPosition": "20% 10%"
		},
		{
		"id": 4,
		"src": img5,
		"objectPosition": "20% 10%"
		},
		{
		"id": 5,
		"src": img6,
		"objectPosition": "20% 10%"
		}
	]);
  const [modal, setModal] = useState({
    "imageToShow": img1,
    "isVisible": false
    }
  );
  const [header, setHeader] = useState({
    "title": "Welcome!",
    "subtitle": "I'm Yana, an illustrator and a developer."
    }
  );

  const openModal = (id) => {
    setModal({
      "imageToShow": id,
      "isVisible": true
    })
  }

  const closeModal = () => {
    setModal({
      "isVisible": false
    })
  }

  return (
    <div>
      <div className="container">
        <Header avatarImg={avatarImg} title={header.title} subtitle={header.subtitle}/>
        <Navigation/>
      </div>
      <div className="gallery-container">
        <Gallery images={images} onOpenModal={openModal}/>
      </div>
      <div className="gallery-modal">
        <GalleryModal src={modal.imageToShow} onCloseModal={closeModal} isVisible={modal.isVisible}/>
      </div>
        
    </div>
  )
    
}

export default App;
