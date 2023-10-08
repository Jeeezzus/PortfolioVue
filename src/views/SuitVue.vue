<template>
    <div class="ExoTouch">
        <div class="two-column-layout">
            <div class="column2">
                <img src="/HapticDuit/ironman.png" alt="hapticsuit" class="imgNoScale" />
            </div>
            <div class="column1">
                <div class="title">
                    <h1>HapticSuit</h1>
                    <h2>Creation of a haptic suit for environmental thermal feedback in virtual reality.</h2>
                </div>
            </div>
        </div>
        <div class="title">
            <h1>Work In Progress</h1>
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