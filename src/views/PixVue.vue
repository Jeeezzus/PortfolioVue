<template>
    <div class="ExoTouch">
        <div class="two-column-layout">
            <div class="column2">
                <img src="/PIX/Visuel.jpg" alt="pix" class="imgNoScale" />
            </div>
            <div class="column1">
                <div class="title">
                    <h1>First year project</h1>
                    <h2>Design of a DC motor and a tank based on Léonard de Vinci's work</h2>
                    <p><em>Keywords: CAD, 3D printing, Electromagnetism, Machining, Project planning, Management </em></p>
                </div>
            </div>
        </div>

        <div class="two-column-layout">
            <div class="column2">
                <div class="em1">
                <p><b>The aim of the LéoLike project is to create a miniature tank inspired by Leonardo da Vinci. 
From this problem arise two constraints: the size constraint - the tank must be miniature - and the design constraint.  Indeed, as the tank was to be inspired by the works of Leonardo da Vinci, the visual aspect of the tank had to be designed accordingly</b></p>
                </div>
        </div>
            <div class="column1">
                <a href="/PIX/Rapport_PA1_19_Eq01.pdf" download="Rapport_PA1_19_Eq01.pdf">
                <p class="link">Full report available FRENCH</p>
            </a>
            
            
            
        </div>
        </div>

        <h2>Design of a DC-motor</h2>
        <div class="two-column-layout">
            <div class="column1">
                <div class="title">
                    <p>The first part of the year was devoted to the design and manufacture of a DC motor. We produced several prototypes to reduce the size of the motor while increasing its power. In particular, we used 3D printing for the motor structure.</p>
                </div>
            </div>
            <div class="column2">
                <img src="/PIX/motor.png" alt="pix motor" class="img" />
            </div>
            
        </div>

        <h2>Results</h2>
        <div class="two-column-layout">
          <div class="column2">
                <img src="/PIX/motor2.png" alt="pix motor" class="img" />
            </div>
            <div class="column1">
                <div class="title">
                    <p>With this motor, we achieved a speed of 944 RPM, with a torque of 1.897 mN.m. So, with a 1:77 gearbox, we were able to reach a speed of 2.3 m/min at a torque of 144.1755 mN.m. </p>
                </div>
            </div>
            
            
        </div>

        <h2>Tank modeling</h2>
        <div class="two-column-layout">
            <div class="column1">
                <div class="title">
                    <p> Because of the covid crisis, the second part of the year on the construction of the tank was resumed to a modeling. We modeled the complete system with various actuators. We weren't allowed to use electronics, so all the triggers and systems were analog.</p>
                </div>
            </div>
            <div class="column2">
                <img src="/PIX/Visuel.jpg" alt="pix modé" class="img" />
            </div>
            
        </div>


    </div>
</template>

<script>
export default {
mounted () {
    window.scrollTo(0, 0)
  },
  data () {
    return {
      images: [],
      mainImageSrc: null
    }
  },
  created () {
    let self = this
    this.images = [
       {
          id: '0',
          image: '/internship/DDV1.PNG'
       },
       {
          id: '1',
          image: '/internship/DDV2.PNG'
       },
       {
          id: '2',
          image: '/internship/GDV1.PNG'
       },
       {
          id: '3',
          image: '/internship/SDV1.PNG'
       },
    ]

    setInterval(function(){ 
        self.mainImageSrc = self.images[Math.floor(Math.random()*self.images.length)].image;
    }, 2000);

  }
}
  </script>
  
  <style>
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
  height: 100%; /* Set the height of the container as needed */
}

.column2 {
  flex: 10;
  padding: 20px; /* Add padding or adjust styles as needed */
  align-items: center;
  
}

.column1 {
  flex: 20;
  padding: 20px; /* Add padding or adjust styles as needed */
  align-items: center;
}
.img {
    border: 2px none #333;
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-height: 50vh;
}

.imgNoScale{
  border: 2px none #333;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.title{
    font-size: 150%;
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