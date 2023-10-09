<template>
    <div class="ExoTouch">
        <div class="two-column-layout">
            <div class="column2">
                <img src="/Hosting/thumbnail.png" alt="hosting" class="imgNoScale" />
            </div>
            <div class="column1">
                <div class="title">
                    <h1>gdrs.fr</h1>
                    <h2>Creation and hosting of web sites.</h2>
                </div>
            </div>
        </div>
        <div class="two-column-layout">
            <div class="column2">
                <div class="em1">
                <p><b>I had the opportunity to learn how to build a network infrastructure from scratch and develop a website.</b></p>
            </div>
        </div>
            <div class="column1">
            
            <a href="https://gauthier-gendreau.gdrs.fr/">
                <p class="link">This website: https://gauthier-gendreau.gdrs.fr/</p>
            </a>

            <a href="https://msprepublique.gdrs.fr/">
                <p class="link">Website developped: https://msprepublique.gdrs.fr/</p>
            </a>
            
        </div>
        </div>

        <h2>Network Infrastructure</h2>
        <div class="two-column-layout">
            <div class="column1">
                <div class="title">
                    <p>I had the opportunity to set up a network infrastructure, since the websites created on the gdrs.fr domain are hosted by me. So I set up a multi-site web server with Nginx.</p>
                </div>
            </div>
            <div class="column2">
                <img src="/Hosting/cat6.jpg" alt="Switch" class="img" />
            </div>
            
        </div>

        <h2>Html-css website</h2>
        <div class="two-column-layout">
            <div class="column2">
                <img src="/Hosting/msp.png" alt="msp" class="img" />
            </div>

            <div class="column1">
                <div class="title">
                    <p>I created an HTML/CSS website for the Maison de santé pluridisciplinaire république. The aim of the site is to introduce the doctors, make it easier to book appointments and provide an overview of the center's news. The site is then hosted by me.</p>
                </div>
            </div>
            
        </div>

        <h2>This portfolio</h2>
        <div class="two-column-layout">
            <div class="column1">
                <div class="title">
                    <p>Ce portfolio a été développé avec Vue.js et hébergé grâce à Nginx. </p>
                </div>
            </div>
            <div class="column2">
                <img src="/Hosting/port.png" alt="Portfolio" class="img" />
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
mounted () {
    window.scrollTo(0, 0)
  }
}
  </script>
  
  <style>
  .desc{
    padding-bottom: 20px;
  }
  .em1{
    background-color: #EFCA93;
    border-radius: 20px;
    padding: 10px;
    color: #333;
  }

  .em2{
    background-color: #FF6CDC;
    border-radius: 20px;
    padding: 10px;
    color: #333;
  }
.ExoTouch{
color: whitesmoke;
  text-align: justify;
  margin: 5%;
}

.two-column-layout {
  display: flex;
  width: 100%;
 
}

.column2 {
  flex: 10;
  padding: 20px; 
  align-items: center;
  max-height: 40vh;
  
}

.column1 {
  flex: 20;
  padding: 20px; 
  align-items: center;
  height: 100% !important;
  position: relative;
}
.img {
    border: 2px solid #333;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.imgNoScale {
    border: 2px none #333;
    width: 100%;
    height: 100%;
    object-fit: contain;

}

.title{
    font-size: 150%;
    height: 100%;
}

.btn {
  position: relative;
    bottom: 0;
  margin: 15px;
  padding: 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
 }

 .btn:hover {
  background-position: right center; /* change the direction of the change here */
}

.btn-1 {
  background-image: linear-gradient(to right, #812A89 0%, #FF6CDC 51%, #EFCA93 100%); 
}

@media (max-width: 750px) {
  .two-column-layout {
    flex-direction: column; /* Change to vertical layout */
    align-items: center; /* Center horizontally in vertical layout */
  }
}

.link{
    text-align: center;
    border: 1px solid #333;
    width: auto;
    color: whitesmoke;
}

.ExoTouch h1{
    font-size: 4em;
}

.ExoTouch h2{
    font-size: 2em;
    margin-top: 60px;
    margin-bottom: 5px;
}
</style>