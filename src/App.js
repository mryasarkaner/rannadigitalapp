import React from "react";
import logo from './islogo.png';

import banner from './images/bannert.png';
import svgresim from './images/asdasdasd.svg';
import iphones from './images/group-apples.png';
import iphonet from './images/apples.png';
import iphonec from './images/aplletsd.png';

import boxsvg from './images/boxsvg.svg';
import boxsvgs from './images/precardlar.svg';
import boxsvgvideo from './images/video-grid.svg';
import resto from './images/rest1.png';
import gridso from './images/rest2.png';

import { Link } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';






 



import "./App.css";
import "./tenk.css";




function App() {
  return (
    <div className="App">

      <header className="header">
        <div className="header-left">
          <img className="logos" src={logo} alt="Logo" />
        </div>
        <div className="header-right">
          <div className="menu-card">
          <a href="https://google.com">
    
            <button className="icon-button" >
            <i class="fa fa-home fa-1x colors"></i>
            </button>

            </a>

            <a href="https://facebook.com">
            <button className="icon-button">
            <i className="fa fa-address-card fa-1x colors"></i>

            </button>

            </a>


            <button className="icon-button">
            <i className="fa fa-heart fa-1x colors"></i>
            </button>
            <button className="icon-button">
            <i className="fa fa-search fa-1x colors"></i>
           
            </button>
            <button className="icon-button">
              
            <i className="fa fa-user-circle fa-5x"></i>
            </button> 
          </div>
          
        </div>
            
      </header>  

      <section className="banner">
      

      <div>
        <img src={banner} alt="Banner" />
        <h1>Explore Türkiye
        <p>& Save in best places!</p>
        </h1>
        </div>
        
        
        <div className="container">
          
    
    </div>
        
      </section>
      <div class="floating-box">&nbsp;
  <i class="icon fa fa-shopping-bag"></i>&nbsp;&nbsp;
  <p>Buy Now !</p>
</div>
      
      <section className="text-cards">
        <div className="text-card" id="cards">
        <p><b id="text-card-font">Silver</b> <br/> Membership</p>
        </div>
        <div className="text-card" id="cardsa">
        <p><b id="text-card-font">Gold</b> <br/> Membership</p>
        </div>
        <div className="text-card" id="cardsb">
          
          <p><b id="text-card-font">Diamond</b> <br/> Membership</p>
        </div>
      </section>
      <br/>
      <br/>
       <img src={svgresim} alt="SVG resmi"/>
       <br/> <br/>  <br/> <br/> <br/>
      <br/>
      <div class="floating-boxs">&nbsp;
      <h3>Dining</h3>&nbsp;&nbsp;
      <br/>
  
</div>
<br/>
<br/>
<div className="flxicon">

</div>


      <section className="grid-boxes">
        <div className="grid-box" id="grids">
          <img src={resto} alt="SVG resmi" ></img>
          
        </div>
        <div className="grid-box" id="gridso">
        <img src={gridso} alt="SVG resmi" ></img>
        </div>

        <div className="grid-box" id="grids">
          <img src={resto} alt="SVG resmi" ></img>
          
        </div>
        <div className="grid-box" id="gridso">
        <img src={gridso} alt="SVG resmi" ></img>
        </div>


        <div className="grid-box" id="grids">
          <img src={resto} alt="SVG resmi" ></img>
          
        </div>
        <div className="grid-box" id="gridso">
        <img src={gridso} alt="SVG resmi" ></img>
        </div>


        

      </section>

      <br/>
      <br/>





<div>
        <img src={boxsvg} alt="SVG resmi" ></img>
        
        </div>
        <img src={boxsvgs} id="precardlar" ></img>
       
       <br/> <br/>  <br/> <br/> <br/>
      <br/>
      <div class="floating-boxs">&nbsp;
      <h3>Dining</h3>&nbsp;&nbsp;
      <br/>
  
</div>
<br/>
<br/>
<div className="flxicon">

</div>


      <section className="grid-boxes">
        <div className="grid-box" id="grids">
          <img src={resto} alt="SVG resmi" ></img>
          
        </div>
        <div className="grid-box" id="gridso">
        <img src={gridso} alt="SVG resmi" ></img>
        </div>

        <div className="grid-box" id="grids">
          <img src={resto} alt="SVG resmi" ></img>
          
        </div>
        <div className="grid-box" id="gridso">
        <img src={gridso} alt="SVG resmi" ></img>
        </div>


        <div className="grid-box" id="grids">
          <img src={resto} alt="SVG resmi" ></img>
          
        </div>
        <div className="grid-box" id="gridso">
        <img src={gridso} alt="SVG resmi" ></img>
        </div>


        

      </section>
      <br/><br/><br/>
<br/><br/>

        <div>
        <img src={boxsvgvideo} alt="SVG resmi" ></img>
        
        </div>


        <Card style={{ marginLeft:'230px', marginTop:'2px', marginBottom:'2px', width: '100%', height:'500px', border: 'none' }}>
  <Card.Body style={{ display: 'flex' }}>
    <Card.Img variant="left" src={iphones} style={{ marginTop:'200px', width: '50px', height: '150px' }} />
    <div style={{ padding: '-22px', margin: '200px'}}>
      <Card.Title>Açıklama</Card.Title>
      <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. <br></br>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</Card.Text>
        <Card.Img variant="right" src={iphonet} />&nbsp;&nbsp;
      <Card.Img variant="right" src={iphonec} />
    </div>
  </Card.Body>
</Card>




<Card style={{ width: '100%', border: 'none' }}>
  <Card.Footer style={{ height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <p>Copyright 2022. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
    <div>
      <a href="#">Terms of Us /</a>
      <a href="#">About Us</a>
    </div>
  </Card.Footer>
</Card>







    </div>

    






    
  );
}

export default App