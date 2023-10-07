<template>
    <div class="ExoTouch">
        <div class="two-column-layout">
            <div class="column2">
                <img src="/ESB/electrostaticbrakes.jpeg" alt="Electrostatic Brakes" class="img" />
            </div>
            <div class="column1">
                <div class="title">
                    <h1>Electrostatic Brakes</h1>
                    <h2>How to convert voltage to force</h2>
                    <p>Supervisors: Clément DUHART</p>
                    <p><em>Keywords: Tutorial, DIY </em></p>
                </div>
            </div>
        </div>

        <div class="two-column-layout">
            <div class="column2">
                <div class="em1">
                <p><b>This tutorial aims to build an electrostatic brake to retain two electrodes between them without a mechanical system. This system uses high voltage as an actuation principle.</b></p>
            </div>
        </div>
            <div class="column1">
            
            <a href="https://dvic.devinci.fr/tutorials/electrostaticbrakes">
                <p class="link">Full article available at: https://dvic.devinci.fr/tutorials/electrostaticbrakes</p>
            </a>
            
        </div>
        </div>

        <p>

        </p>

        <h2>Overview</h2>
        <div class="two-column-layout">
            <div class="column1">
                <div class="title">
                    <p>Electrostatic brakes are a good solution. They are composed of two conductive electrodes separated by a dielectric film. The main principle is that when no voltage is applied, the two electrodes can slide along each other freely. However, when there is a difference in potential between the electrodes, there is an electrostatic attraction that applies a resistive force on the electrodes. For the tutorial, we will base our work on the DextrES paper. It describes a haptic glove with this technology.
                    </p>
                </div>
            </div>
            <div class="column2">
                <img src="/ESB/dextres.jpg" alt="DextreES glove" class="img" />
                <p>DextrES glove</p>
            </div>
            
        </div>

        <h2>Testing</h2>
        <div class="two-column-layout">
            <div class="column2">
                <img src="/ESB/ESBTesting.jpeg" alt="Tests" class="img" />
            </div>
            <div class="column1">
                <div class="title">
                <p>To experiment with the system, we hung the electrodes above the void. Then, for each voltage value applied, we hung heavier and heavier objects (the step was about 5g) and noted when the electrodes separated.

For more contact surfaces, we used six electrodes: 3 positive and three negative. We then crossed them so that each electrode had a different sign on each side (+ - + - + -)</p>
                </div>
            </div>
            
            
        </div>

        <h2>Results</h2>
        <div class="two-column-layout">
            <div class="column1">
                <div class="title">
                    <p>The results of the experiment are shown in the adjacent graph. It can be seen that the relationship between the force exerted by the electrodes (represented in g) is linear. It is important to note that the weight displayed does not consider the electrodes' weight. The real force is, therefore, more important. Thus, with this system, comprising six electrodes and operating with 1W, we can expect to get 0.5N. (1 gf = 0.00980665 N)</p>
</div>
            </div>
            <div class="column2">
                <img src="/ESB/EBSTestingResults.png" alt="ESB Results" class="img" />
            </div>
            
            
        </div>


    <h2>Bibliography</h2>
        <div class="title">
            <div class="em2">
                <p>This tutorial was mainly based on the works of the DextrES paper:</p>
        <ul>
            <li>Hinchet, R., Vechev, V., Shea, H., Hilliges, O., 2018. DextrES: Wearable Haptic Feedback for Grasping in VR via a Thin Form-Factor Electrostatic Brake, in: Proceedings of the 31st Annual ACM Symposium on User Interface Software and Technology. Presented at the UIST ’18: The 31st Annual ACM Symposium on User Interface Software and Technology, ACM, Berlin Germany, pp. 901–912. https://doi.org/10.1145/3242587.3242657</li>
            <li>Diller, S., Majidi, C., Collins, S.H., 2016. A lightweight, low-power electroadhesive clutch and spring for exoskeleton actuation, in: 2016 IEEE International Conference on Robotics and Automation (ICRA). Presented at the 2016 IEEE International Conference on Robotics and Automation (ICRA), IEEE, Stockholm, Sweden, pp. 682–689. https://doi.org/10.1109/ICRA.2016.7487194</li>
            <li>Niino’, T., Egawa’, S., Nishiguchi, N., Higuchi’, T., n.d. Development of An Electrostatic Actuator Exceeding 1ON Propulsive Force.</li>
            <li>Karagozler, M.E., Campbell, J.D., Fedder, G.K., Goldstein, S.C., Weller, M.P., Yoon, B.W., 2007. Electrostatic latching for inter-module adhesion, power transfer, and communication in modular robots, in: 2007 IEEE/RSJ International Conference on Intelligent Robots and Systems. Presented at the 2007 IEEE/RSJ International Conference on Intelligent Robots and Systems, IEEE, San Diego, CA, USA, pp. 2779–2786. https://doi.org/10.1109/IROS.2007.4399492</li>
            <li>NIINOt, T., Higuchi, T., n.d. HIGH-POWERAND HIGH-EFFICIENCEYLECTROSTATAICCTUATOR.</li>
            </ul>
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