<template>
    <div class="ExoTouch">
        <div class="two-column-layout">
            <div class="column2">
                <img src="/DVB/v2blanc.png" alt="Padders" class="imgNoScale" />
            </div>
            <div class="column1">
                <div class="title">
                    <h1>Fours years at DavinciBot</h1>
                    <h2>My work on InMoov and JASPER, the association's two humanoid robots.</h2>
                    <p><em>Keywords: Robotic, CAD, 3D printing, Electronics, Machining, Project planning, Management </em></p>
                </div>
            </div>
        </div>

        <div class="two-column-layout">
            <div class="column2">
                <div class="em1">
                <p><b>For four years, I was involved in the projects of the DavinciBot robotics association. First, I was a project member for a year, before becoming project manager for InMoov and then JASPER, before being appointed project manager for the association.</b></p>
                </div>
        </div>
            <div class="column1">
                <a href="https://www.davincibot.fr/">
                <p class="link">DavinciBot's website: www.davincibot.fr</p>
            </a>
            
            
            
        </div>
        </div>

        <h2>First Year (2019-2020)</h2>
        <div class="two-column-layout">
            <div class="column1">
                <div class="title">
                    <p> During my first year with the association, I worked on InMoov, an open-source humanoid robot. Our aim was to reinforce its structure and electronics to enable it to lift a light weight at arm's length. In particular, I designed and built new forearms and replaced faulty motors.</p>
                </div>
            </div>
            <div class="column2">
                <img src="/DVB/bras.jpg" alt="InMoov arm" class="img" />
            </div>
            
        </div>

        <h2>Second Year (2020-2021)</h2>
        <div class="two-column-layout">
          <div class="column2">
                <img src="/DVB/devant.jpg" alt="InMoov front" class="img" />
            </div>
            <div class="column1">
                <div class="title">
                    <p> During my second year with the association, I was appointed project manager for the InMoov project. Our objectives included upgrading the power supply to meet the new constraints imposed by previous years. We also continued work on strengthening the structure.</p>
                </div>
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