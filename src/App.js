/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';

const particleOpt = {
  "particles": {
    "number": {
      "value": 30
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 1,
        "color": "#ffffff"
      },
      "image": {
        "src": "img/github.svg"
        
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
      }
    },
    "size": {
      "value": 5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 30
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 300,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "straight": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 50,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 200,
        "size": 80,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  }

              } 
class App extends Component {
  render() {
    return (
      
      <div className="App">
    
          <nav className="menu">
                <div className="menu__right">
                        <span id="menu__logo">bliimo</span>
                        <span className="menu__logo1">technologies inc.</span>
                    <ul className="li-pos">
                        <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Home</a></li>
                        <li className="menu__list-item"><a className="menu__link" href="#">Services</a></li>
                        <li className="menu__list-item"><a className="menu__link" href="#">About</a></li>
                        <li className="menu__list-item"><a className="menu__link" href="#">Portfolio</a></li>
                        <li className="menu__list-item"><a className="menu__link" href="#">Blogs</a></li>
                        <li className="menu__list-item"><a className="menu__link" href="#">Contact Us</a></li>
                    </ul>
                </div>
          </nav>
        
          <nav class="sidenav">
              <a href="#"><span className="Home">E</span></a>
              <a href="#"><span className="Home">M</span></a>
              <a href="#"><span className="Home">O</span></a>
              <a href="#"><span className="Home">H</span></a>
          </nav>


          
          
          <div className="particles">
            <Particles params={particleOpt}/>a
          </div>
      </div>
);
    
  }

}

export default App;


