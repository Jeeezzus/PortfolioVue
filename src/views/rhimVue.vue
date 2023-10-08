<template>
    <div class="ExoTouch">
        <div class="two-column-layout">
            <div class="column2">
                <img src="/Internship/SDV1.PNG" alt="Electrostatic Brakes" class="img" />
            </div>
            <div class="column1">
                <div class="title">
                    <h1>M1 internship</h1>
                    <h2>Design of a Mobile Robotic Haptic Interface for Virtual Reality.</h2>
                    <p>Supervisors: Elodie BOUZBIB, Claudio PACCHIEROTTI, Anatole LECUYER, Clément DUHART, Marc Teyssier</p>
                    <p><em>Keywords: Internship, Haptic, Swarm robotic, VR, Unity, C#, Python, C++, Arduino, CAD, 3D printing, laser cutting </em></p>
                </div>
            </div>
        </div>

        <div class="two-column-layout">
            <div class="column2">
                <div class="em1">
                <p><b>This internship aims to design and create a swarm of robots (3-5 robots), desk-sized, capable of providing haptic feedback to a user in virtual reality. <br>
                    Thus, the robots must be compact, precise, and swift enough to ensure the user is not disturbed by their movements. Wireless control of the robots and swarm management algorithms to prevent collisions also need to be developed.</b></p>
                <p><b>The internship also involves the hardware development of an interface, taking the form of a cube or a small table, generating haptic feedback for the user. A wireless link for controlling the haptic feedback is mandatory. <br>
                    This platform is derived from the principles of the robots, allowing for simplification and expedited development.</b></p>
                </div>
        </div>
            <div class="column1">
                <div class="two-column-layout">
                    <div class="column1">
                        <a href="/internship/Doc_RoboticHapticInterface_ENGLISH.pdf" download="Doc_RoboticHapticInterface_ENGLISH.pdf" class="btn btn-1">
                         Full report ENGLISH
                        </a>
                    </div>
                    <div class="column1">
                        <a href="/internship/Doc_RoboticHapticInterface_FRENCH.pdf" download="Doc_RoboticHapticInterface_FRENCH.pdf" class="btn btn-1">
                         Full report FRENCH
                        </a>
                    </div>
                    </div>
            
            
            
        </div>
        </div>

        <h2>Overview</h2>
        <div class="two-column-layout">
            <div class="column1">
                <div class="title">
                    <p>Creating the swarm of robotic haptic interfaces was divided into two parts. The hardware part includes the robots, their power supply, and their method of communication with the computer. The software includes an API for controlling the robots and a Unity application for the VR aspect and user interaction.</p>
                    <p>We decided to develop the entire project on our own, with a DIY (Do It Yourself) approach, to have control over all the elements of the architecture. <br> Firstly, we will explore the software part (the API and the Unity interface) and then the hardware part, including the various iterations of the robots.</p>
                </div>
            </div>
            <div class="column2">
                <img src="/Internship/rhimArchitecture.png" alt="RHIM architecture" class="img" />
            </div>
            
        </div>

        <h2>Software</h2>
        <div class="two-column-layout">
            <div class="column2">
                <img src="/Internship/API.drawio.png" alt="API" class="img" />
            </div>
            <div class="column1">
                <div class="title">
                <p>We used Unity and FastAPI to control the robots. This project was coded in C# and Python for the software.</p>
                <p>The API serves as the interface between the robots and the Unity application. It is designed to support an infinite number of robots theoretically. (The only limitation is hardware-related, specifically the network throughput of the computer and access point.)</p>
                <p>This project uses the Unity engine to create the VR interface between the user and the robots. We utilized OpenVR to manage the virtual reality aspect. This tool allows for coding for Oculus (we use a Meta Quest 2) and Steam VR, enabling Vive trackers for measurements.</p>
                <p>To create a user experience,we developed a game based on the Minesweeper principle. A grid of virtual buttons (referred to as Pods) will be placed on a table. A pod is defined as the central element and is assigned a value of 5. The other pods around it have decreasing values as they move away from the central pod. The user will then touch the pods, and their values will be transmitted through varying-intensity haptic feedback located on the robot, which will position itself at the corresponding pod.</p>
            </div>
            </div>
            
            
        </div>

        <h2>Hardware</h2>
        <div class="two-column-layout">
            <div class="column1">
                <div class="title">
                    <p>During the internship, we created numerous iterations of small cubic robots acting as platforms to house haptic interfaces. We used Fusion360 to model the system, and 3D printing and laser cutting to bring it to life.</p>
                    <p>For the realization of the robots, we had several constraints to adhere to :
                        <ul>
                            <li> Desktop-Scale System : To simplify the user interaction environment,
the system must be scaled to a desktop.We decided to aim
for a size where each robot can fit within a 10x10x10 cm cube.</li>
                            <li>Wireless Robots : The system consists of multiple robots with
autonomous trajectories ; each robot should have its power source
and receive instructions without physical connections. This is
mainly to avoid dealing with cable entanglement in the algorithms.</li>
                            <li>DIY Spirit : We want to create the project in a Do It Yourself spirit.
Designing the system ourselves instead of buying a pre-made one
and making it easy to fabricate for someone with limited robotics
knowledge.</li>
                        </ul>
                    </p>

                    </div>
            </div>
            <div class="column2">
                <div class="main-image">
                 <img :src="mainImageSrc" class="img">
                </div>
            </div>
            
            
        </div>


    <h2>Bibliography</h2>
        <div class="title">
            <div class="em2">
                <p>This tutorial was mainly based on the works of the DextrES paper:</p>
        <ul>
            <li>Elodie Bouzbib et al. « "Can I Touch This ?" : Survey of Virtual Reality Interactions via Haptic Solutions ». In : 32e Conférence Francophone sur l’Interaction Homme-Machine. 2021, p. 1-16.</li>
            <li>Lung-Pan Cheng et al. « Sparse Haptic Proxy : Touch Feedback in Virtual Environments Using a General
Passive Prop ». In : CHI ’17 : CHI Conference on Human Factors in Computing Systems. Denver
Colorado USA, 2017, p. 3718-3728</li>
            <li>Ryo Suzuki et al. «Augmented Reality and Robotics : A Survey and Taxonomy for AR-enhanced Human-
Robot Interaction andRobotic Interfaces ». In :CHI ’22 : CHI Conference on Human Factors in Computing Systems.
New Orleans LA USA, 2022, p. 1-33</li>
            <li>Elodie Bouzbib et al. « CoVR : A Large-Scale Force-Feedback Robotic Interface forNon-Deterministic Scenarios
inVR ». In : Proceedings of the 33rd Annual ACM Symposium on User Interface Software and Technology.
2020, p. 209-222</li>
            <li>D.Rosenfeld et al. « Physical objects as bidirectional user interface elements ». In : IEEE Computer Graphics and Applications
24.1 (2004), p. 44-49</li>
            <li>Ryo Suzuki et al. « HapticBots : Distributed Encountered-type Haptics for VR with Multiple Shapechanging
MobileRobots ». In : UIST ’21 : The 34th Annual ACM Symposium on User Interface Software and Technology.
Virtual Event USA, 2021, p. 1269-1281</li>
            <li>Y. Yokokohji, J. Kinoshita et T. Yoshikawa. « Path planning for encountered-type haptic devices that
render multiple objects in 3D space ». In : Proceedings IEEE Virtual Reality 2001. 2001, p. 271-278</li>
            <li>Binsted G. et al. « Eye–hand coordination in goal-directed aiming ». In : Human Movement Science
20.4-5 (2001), p. 563-585</li>
            <li>Game Manual. Odometry. url : https://gm0.org/en/latest/docs/software/concepts/odometry.
html</li>
            <li>Julien Cauquis et al. « ”Kapow!” : Studying the Design of Visual Feedback for Representing Contacts in
ExtendedReality ». In :VRST 2022 - 28th ACM Symposium on Virtual Reality Software and Technology.
Virtual/Tsukuba, Japan, 2022</li>
            <li>António Silva, Maria Teresa Restivo et Joaquim Gabriel. « Haptic device demo using temperature
feedback ». In : 2013 2nd Experiment@ International Conference (exp.at’13). 2013, p. 172-173</li>
            </ul>
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
          image: '/Internship/DDV1.PNG'
       },
       {
          id: '1',
          image: '/Internship/DDV2.PNG'
       },
       {
          id: '2',
          image: '/Internship/GDV1.PNG'
       },
       {
          id: '3',
          image: '/Internship/SDV1.PNG'
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