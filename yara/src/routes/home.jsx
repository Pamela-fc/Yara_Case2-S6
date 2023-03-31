import React from "react";
import './styles/home.css';
import Card from '../components/Card';
import Mulher from '../components/img/mulher.png'
import { Link } from 'react-router-dom';



function Home() {
    return (  
        <div className="homeMain">
        <header className="headHome">
        <div class="parallax">
            <div className="header-conteudo">
            <h2><span>Escola de música</span></h2>
            <div class="linha"></div>
            <h1>Yara</h1>
            <div class="linha2"></div>
            <Link to="/sobre"><a class="ctn">Saiba mais</a></Link>

            </div>
        </div>
    </header>
    <section className="secaoHome">
        <div className="cards">
        <Card 
        title="Música"
        imageURL="https://i.ibb.co/1v4cpbR/pngtree-a-beautiful-guitar-vector-or-color-illustration-png-image-2030580.jpg"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis lacus lacinia, molestie magna eu, iaculis ante. Integer enim lorem, vulputate eget laoreet vel, iaculis vel felis. Nullam fermentum, lorem a posuere sollicitudin, turpis erat blandit lectus, eget porttitor metus eros nec felis. Vivamus at convallis nisl."
        />
                <Card 
        title="Cultura"
        imageURL="https://i.ibb.co/Xj8p8sK/istockphoto-841990744-612x612.jpg"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis lacus lacinia, molestie magna eu, iaculis ante. Integer enim lorem, vulputate eget laoreet vel, iaculis vel felis. Nullam fermentum, lorem a posuere sollicitudin, turpis erat blandit lectus, eget porttitor metus eros nec felis. Vivamus at convallis nisl."
        />
                <Card 
        title="Diversão"
        imageURL="https://i.ibb.co/DfFVWzf/360-F-564791516-d2p-W4-Lz-Yodf72-Si4-TWc-Zd-FNS7-RUT2oy-W.jpg"
        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis lacus lacinia, molestie magna eu, iaculis ante. Integer enim lorem, vulputate eget laoreet vel, iaculis vel felis. Nullam fermentum, lorem a posuere sollicitudin, turpis erat blandit lectus, eget porttitor metus eros nec felis. Vivamus at convallis nisl.'
        />
        </div>
        <div className="backgroundCard">
        </div>
    </section>
    
    <main className="sliding"> 
 
    <div className="circle3"></div> 
    <div className="imgBox">
    </div>
    <div className="circle2"></div> 
    <div className="circle1"></div> 



    <div className="conteudo">
        
      <div className="textoBox">
          <h2>Assuntos a tratar?<p><span className='cor1'>Nos contate.</span></p></h2>
          <p>Oferecemos suporte 24h para qualquer assunto. </p>
          <Link to="/Contato">Saiba mais</Link>

          </div>
          <img src={Mulher} className='mulher'></img>
          </div>
          
      </main>
      
        </div>

    );
}

export default Home;