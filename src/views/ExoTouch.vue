<template>
    <div class="ExoTouch">
        <div class="two-column-layout">
            <div class="column2">
                <img src="/ExoTouch/ExoTouchV3.jpeg" alt="ExoTouchV3" class="img" />
            </div>
            <div class="column1">
                <div class="title">
                    <h1>ExoTouch</h1>
                    <h2>A cheap, yet, reliable haptic exoskeleton for VR</h2>
                </div>
            </div>
        </div>

        <div class="two-column-layout">
            <div class="column2">
                <p><b>This project aims to develop a force feedback exoskeleton for virtual reality haptic interactions. The goal is to create a device that can be built by a do-it-yourselfer for around €200, making it an affordable alternative to expensive commercial haptic gloves. The device will be compatible with the Lucid Glove API, allowing easy integration with existing applications. A demo will be created to test the device's ability to allow users to manipulate and interact with virtual objects using haptic feedback.</b></p>
            </div>
            <div class="column1">
            
            <a href="https://dvic.devinci.fr/ExoTouch">
                <p class="link">Full article available at: https://dvic.devinci.fr/ExoTouch</p>
            </a>

            <a href="https://github.com/Jeeezzus/DVIC_ExoTouch">
                <p class="link">Code available at https://github.com/Jeeezzus/DVIC_ExoTouch</p>
            </a>
            
        </div>
        </div>

        <p>

        </p>

        <H1>Prototype Development</H1>
        <h2>The Lucid Glove</h2>
        <div class="two-column-layout">
            <div class="column1">
                <div class="title">
                    <p>We built several prototypes to refine our design and test its functionality. Our first prototype, the Lucid Glove, was designed by Lucas VRTech and diffused as an open source project. It used potentiometers, servo motors, strings, and an ESP-32 to apply force feedback to the user's fingertips. This prototype have somme good and bad points:
                    <br>
                    Good points:
                    <ul>
                        <li>Cheap (between 60 and 100$)</li>
                        <li>easy to build and assemble (3d printing)</li>
                    </ul>
                    Improvements:
                    <ul>
                        <li>Imprecise hand tracking</li>
                        <li>Noisy data from the potentiometers</li>
                        <li>Reduced haptic sensation due to the slow movement of the servos.</li>
                        <li>The use of springs in the system alters the feeling of the feedback because there is always a force on the fingers, even when the system is off.</li>
                    </ul></p>
                </div>
            </div>
            <div class="column2">
                <img src="/ExoTouch/LG.jpeg" alt="LucidGlove" class="img" />
            </div>
            
        </div>

        <h2>ExoTouch V1</h2>
        <div class="two-column-layout">
            <div class="column2">
                <img src="/ExoTouch/ExoTouchV1.jpeg" alt="ExoTouchV1" class="img" />
            </div>
            <div class="column1">
                <div class="title">
                    
                    <p>The second prototype was built with the objective of eliminating the springs to have a completely rigid mechanical structure. This choice was made to be able to apply feedback as much on the extension of the fingers as on their flexion. This work allowed us to understand the complex topology of the hand and lay the foundations to transform the glove into an exoskeleton. The prototype has been designed to be entirely 3D printed and to work with cheap linear servo motors and potentiometers. The potentiometers are used for hand tracking by returning the finger flexion value. A servo motor is then used to block the finger by locking the position of the potentiometer.</p>
                    <p>Although promising, this prototype had two significant flaws. First of all, its imposing structure and considerable weight mean it is not very user-friendly. Its structure weighs more than 200g with the VR controller. This implies fatigue of the user after a few minutes of active use. Also, its bulky structure makes it impractical because it limits the possible interactions between the two hands (a large volume area above each hand cannot be explored). The second defect concerns force feedback. On this prototype, the feedback is "Boolean." This means that when it is activated, the finger is completely blocked. It is, therefore, not possible to simulate variable material stiffness. So we need a new prototype that is less heavy and less prominent and can have a feedback system with variable force.</p>
                </div>
            </div>
            
            
        </div>

        <h2>ExoTouch V2</h2>
        <div class="two-column-layout">
            <div class="column1">
                <div class="title">
                    
                    <p>The second prototype for ExoTouch focused on finding flexible materials to follow the bend of the finger. The final version of this prototype keeps the linear potentiometer of the previous version, but it is connected to the fingertip by a PTFE tube through which a steel cable runs. The length of the cable is fixed, so when the user bends the finger, the cable is pulled, and when he extends the finger, the cable is pushed.

It was necessary to add a structure at the level of the second phalange in order to guide the tube towards the potentiometer when the fingers are raised so that this one does not block.

The first feedbacks are pretty positive, thanks to the weight and the size, which was reduced compared to the V1 prototype, and the fact that it was straightforward to transform it into an exoskeleton.

</p>
                    <p>However, a few shortcomings led us to finish this prototype to look for other ways of thinking.

The semi-rigidity of the PTFE tube makes it more difficult to bend the finger and causes short-term fatigue in the joints. However, using a less rigid material is impossible because it will bend instead of pushing the potentiometer.

We, therefore, decided to start again for the V3 prototype with a rigid mechanical structure following the finger more closely. </p>
</div>
            </div>
            <div class="column2">
                <img src="/ExoTouch/ExoTouchV2.jpeg" alt="ExoTouchV2" class="img" />
            </div>
            
            
        </div>

        <h2>ExoTouch V3</h2>
        
        <div class="two-column-layout">
            <div class="column2">
                <img src="/ExoTouch/ExoTouchV3.jpeg" alt="ExoTouchV3" class="img" />
        </div>
            <div class="column1">
                <div class="title">
                    
                    <p>To developpe this prototype, we based our works on the Sense Glove of nick_iacobbo on Thingiverse for the finger exoskeleton. The idea was to have a mechanical structure with more small parts to make the exoskeleton follow the finger more and reduce the volumic footprint of the whole system. The movement of the fingers is transmitted to the computer via linear potentiometers. We remain on a structure that translates a bending movement into a translational movement.
</p>
                    <p>we can see a few ways to improve this prototype.

It would be possible to lighten the structure by reducing the size of certain parts, as much in their length and width as in the thickness of the parts. During the realization of this exoskeleton, margins were taken. After use, we realize that it would be possible to reduce them.</p>
</div>
            </div>            
        </div>

        <h2>Future works</h2>
        <div class="title">
        <p>There are several ways to improve the project. <br>

It is possible to further reduce the volume footprint and the weight of the exoskeleton by working on the materials. For this project, we worked mainly with PLA, a little with TPU for the flexible parts of prototype two, and with PETG. We could look for semi-composite materials like nylon or carbon filament, which can still be considered DIY but much more resistant, allowing us to make thinner and lighter parts.
<br>
From the point of view of the haptic sensation itself, it would be possible to add actuators, especially at the fingertips, to add possible sensations. In particular, vibration motors give feedback on the roughness of the materials</p>

    </div>

    <h2>Bibliographie</h2>
        <div class="title">
        <ul>
            <li>C. Burdea, G., n.d. Haptic Feedback for Virtual Reality.</li>
            <li>Perret, J., Poorten, E.V., n.d. Touching Virtual Reality: a Review of Haptic Gloves</li>
            <li>HaptX. Tactile Telerobot | Control robots with your hands. url: https://www.youtube.com/watch? v=R-sP_pju81E</li>
            <li>Lucas-VRtech. LucidGloves. url: https://github.com/LucidVR/lucidgloves</li>
            <li>nick_iacobbo, Sens Glove, https://www.thingiverse.com/thing:1090096</li>
            <li>Blake, J., Gurocak, H.B., 2009. Haptic Glove With MR Brakes for Virtual Reality. IEEE/ASME Trans. Mechatron. 14, 606-615. https://doi.org/10.1109/TMECH.2008.2010934</li>
            <li>Burbach, S., Steiger, A., Gießer, C., 2022. Suitability Testing of the LucidGloves Prototype 4 for Extended Reality Medical Teaching. Current Directions in Biomedical Engineering 8, 419-422. https://doi.org/10.1515/cdbme-2022-1107</li>
            <li>Gu, X., Zhang, Y., Sun, W., Bian, Y., Zhou, D., Kristensson, P.O., 2016. Dexmo: An Inexpensive and Lightweight Mechanical Exoskeleton for Motion Capture and Force Feedback in VR, in: Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems. Presented at the CHI’16: CHI Conference on Human Factors in Computing Systems, ACM, San Jose California USA, pp. 1991-1995. https://doi.org/10.1145/2858036.2858487</li>
            <li>Hinchet, R., Vechev, V., Shea, H., Hilliges, O., 2018. DextrES: Wearable Haptic Feedback for Grasping in VR via a Thin Form-Factor Electrostatic Brake, in: Proceedings of the 31st Annual ACM Symposium on User Interface Software and Technology. Presented at the UIST ’18: The 31st Annual ACM Symposium on User Interface Software and Technology, ACM, Berlin Germany, pp. 901-912. https://doi.org/10.1145/3242587.3242657</li>
            <li>Le, D.T.G., Linh Nguyen, Nguyen, L., 2021. An efficient force-feedback hand exoskeleton for haptic applications 5, 395-409. https://doi.org/10.1007/s41315-021-00197-w</li>
            <li>Letier, P., Avraam, M., Veillerette, S., Horodinca, M., Bartolomei, M.D., Schiele, A., Preumont, A., n.d. SAM : A 7-DOF Portable Arm Exoskeleton with Local Joint Control 7.</li>
            <li>Sim, D., Baek, Y., Cho, M., Park, S., Sagar, A.S.M.S., Kim, H.S., 2021. Low-Latency Haptic Open Glove for Immersive Virtual Reality Interaction. Sensors 21, 3682. https://doi.org/10.3390/s21113682</li>


        </ul>
    </div>
    </div>
</template>
  
  <style>
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