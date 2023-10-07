<template>
    <div class="ExoTouch">
        <div class="two-column-layout">
            <div class="column2">
                <img src="/padders/padders.jpg" alt="Padders" class="img" />
            </div>
            <div class="column1">
                <div class="title">
                    <h1>Padders</h1>
                    <h2>The solution to keep your fridge organized</h2>
                    <p><em>Keywords: Quickstarter, Production, Marketing </em></p>
                </div>
            </div>
        </div>

        <div class="two-column-layout">
            <div class="column2">
                <div class="em1">
                <p><b>Padders is THE tool to help you organize your fridge. It's a colorful plastic pad you put on the fridge shelves that will allow you to sort your food by expiration date. Inspired by the Chiefs organization, we want to help people waste less food and money in an easy and colored way.</b></p>
                </div>
        </div>
            <div class="column1">
                <a href="https://dvic.devinci.fr/quickstarter/padders">
                <p class="link">Full article available at: https://dvic.devinci.fr/quickstarter/padders</p>
            </a>
            
            
            
        </div>
        </div>

        <h2>Overview</h2>
        <div class="two-column-layout">
            <div class="column1">
                <div class="title">
                    <p>Padders is a product designed to help you keep track of what's in your fridge and where you are in your food consumption. It's a simple concept, but it can make a big difference in your fridge use. First, place your pads on your shelves. Then, place your food in their section based on its expiration date. You can start by doing like us: From red (close to the expiration date) to yellow(safe to keep a little longer) and green (safe to stay a while longer). And voilà! Now you will know what to eat before it's too late and wasted.

<br>Here are some of the benefits of using Padders:</p>
                    <p><ul>
                        <li>Reduces waste: When your fridge is organized, you can see what you have and need to use up before it goes bad. This can help reduce food waste, save money, and ensure that you always use the freshest ingredients.</li>
                        <li>Saves time: When you know where everything is in your fridge, you can quickly grab what you need without searching through a cluttered mess. This can save you time and make meal prep and cooking more efficient.</li>
                        <li>Easy to use: Padders is designed to be user-friendly and easy to use. Place the pad in your fridge and place your food based on its expiration date. In no time, you can quickly identify where each item should be stored.</li>
                        <li>Customizable: Your fridge with Padders is customizable, so you can adjust it to fit your needs. For example, you can designate more space for fruits and vegetables if you have a lot of produce. If you prefer to keep your dairy products in a specific spot, you can simply place them.</li>
                    </ul></p>
                    <p>Overall, Padders is a simple but effective solution for keeping your fridge organized. It's a small investment that can pay off significantly, saving you time, money, and hassle in the long run. If you're tired of dealing with a messy fridge, try Padders and see how it can transform how you use your fridge. You will stop organize.</p>
                </div>
            </div>
            <div class="column2">
                <img src="/padders/paddersFridge.jpeg" alt="RHIM architecture" class="img" />
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
    border: 2px solid #333;
    width: 100%;
    height: 100%;
    object-fit: cover;

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