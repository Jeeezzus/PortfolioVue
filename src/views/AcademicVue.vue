<template>
    <div class="ExoTouch">
        <div class="two-column-layout">
            <div class="column2">
                <img src="/academic/academic.png" alt="academics" class="imgNoScale" />
            </div>
            <div class="column1">
                <div class="title">
                    <h1>Academic projects</h1>
                    <h2>At DavinciBot, ESILV and IFT</h2>
                </div>
            </div>
        </div>

        <h2>ExoTouch haptic gloves</h2>
        <div class="two-column-layout">
            <div class="column1">
                <div class="title">
                    <p class="desc">This project aims to develop a force feedback exoskeleton for virtual reality haptic interactions. The goal is to create a device that can be built by a do-it-yourselfer for around €200, making it an affordable alternative to expensive commercial haptic gloves. The device will be compatible with the Lucid Glove API, allowing easy integration with existing applications. A demo will be created to test the device's ability to allow users to manipulate and interact with virtual objects using haptic feedback.</p>
                    <router-link to="/exotouch">
                    <a class="btn btn-1">Discover project</a>
                    </router-link>
                </div>
            </div>
            <div class="column2">
                <img src="/ExoTouch/ExoTouchV3.jpeg" alt="ExoTouchV3" class="img" />
            </div>
            
        </div>

        <h2>Robotic haptic interface</h2>
        <div class="two-column-layout">
            <div class="column2">
                <img src="/Internship/SDV1.PNG" alt="Robotic haptic interface SDV1" class="img" />
            </div>
            <div class="column1">
                <div class="title">
                    <p class="desc">Encounter-type haptic robots for desk-size environnement exploration in virtual reality as part of a M1 internship ar INRIA Rennes</p>
                    <router-link to="/rhim">
                    <a class="btn btn-1">Discover project</a>
                    </router-link>
                </div>
            </div>
            
            
        </div>

        <h2>InMoov and JASPER at DavinciBot</h2>
        <div class="two-column-layout">
            <div class="column1">
                <div class="title">
                    <p class="desc">For four years, I was involved in the projects of the DavinciBot robotics association. First, I was a project member for a year, before becoming project manager for InMoov and then JASPER, before being appointed project manager for the association.</p>
                    <router-link to="/dvb">
                    <a class="btn btn-1">Discover project</a>
                    </router-link>
                </div>
            </div>
            <div class="column2">
                <img src="/DVB/InMoov_Working.png" alt="Padders" class="img" />
            </div>
            
        </div>

        <h2>Padders Quickstarter</h2>
        <div class="two-column-layout">
            <div class="column2">
                <img src="/padders/padders.jpg" alt="Padders" class="img" />
            </div>
            <div class="column1">
                <div class="title">
                    <p class="desc">Padders is THE tool to help you organize your fridge. It's a colorful plastic pad you put on the fridge shelves that will allow you to sort your food by expiration date. Inspired by the Chiefs organization, we want to help people waste less food and money in an easy and colored way.</p>
                    <router-link to="/padders">
                    <a class="btn btn-1">Discover project</a>
                    </router-link>
                </div>
            </div>
            
            
        </div>

        <h2>Electrostatic Brakes</h2>
        <div class="two-column-layout">
            <div class="column1">
                <div class="title">
                    <p class="desc">This tutorial aims to build an electrostatic brake to retain two electrodes between them without a mechanical system. This system uses high voltage as an actuation principle.</p>
                    <router-link to="/electrostaticbrakes">
                    <a class="btn btn-1">Discover project</a>
                    </router-link>
                </div>
            </div>
            <div class="column2">
                <img src="/ESB/electrostaticbrakes.jpeg" alt="Electrostatic Brakes" class="img" />
            </div>
           
            
            
        </div>

        <h2>PIX1 - First year project</h2>
        <div class="two-column-layout">
            <div class="column2">
                <img src="/PIX/Visuel.jpg" alt="pix" class="img" />
            </div>
            <div class="column1">
                <div class="title">
                    <p class="desc">The aim of the LéoLike project is to create a miniature tank inspired by Leonardo da Vinci. 
From this problem arise two constraints: the size constraint - the tank must be miniature - and the design constraint.  Indeed, as the tank was to be inspired by the works of Leonardo da Vinci, the visual aspect of the tank had to be designed accordingly.</p>
                    <router-link to="/pix">
                    <a class="btn btn-1">Discover project</a>
                    </router-link>
                </div>
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