
import Header from './components/header.js';
import GalleryImage from './components/gallery-image';
import './App.css';
import Navigation from './components/navigation.js';
import React from 'react';
// function App() {
//   //const name = 'Yana';
//   // Place JS inside {}

//   return (
//     <div className="container">
//       <Header/>
//     </div>
//   );
// }

class App extends React.Component {
  render (){
    return (
      <div>
        <div className="container">
          <Header/>
          <Navigation/>
        </div>
        <div className="gallery-container">
          <GalleryImage/>
        </div>
          
      </div>
    )
    
  }
}

export default App;
