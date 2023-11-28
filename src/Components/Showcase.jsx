import React from 'react'
import '../styles/showcase.css'
import expLeft from '../images/expLeft.svg'
import expRight from '../images/expRight.svg'
import hc1 from '../images/honeycomb.jpg'
import hc2 from '../images/honeycomb2.jpg'
import et from '../images/endlessTreasure.jpg'
import con from '../images/conjunction.jpg'
import light from '../images/lightwork.jpg'
import cop1 from '../images/cop.jpg'
import cop2 from '../images/cop2.jpg'
import dv1 from '../images/divulge.jpg'
import dv2 from '../images/divulge2.jpg'
import mf from '../images/memorableFactor.jpg'
import union from '../images/union.jpg'

const Showcase = () => {
  return (
    <>
      <section className="showcase limit">
        <div className="header" id='top'>
          <img src={expLeft} alt="expLeft" />
          <p className="title">PROJECTS</p>
          <img src={expRight} alt="expRight" />
        </div>
        <div className="content">
          <div className="grid">

          <div className="box">
              <div className="title">
                <h3 className="name">Honeycomb</h3>
                <p className="specs">September 27th, 2023<br/>10.3’ x 15.3’ x 4.7’<br/>Paper, Acrylic Rod</p>
              </div>
              <div className="img">
                <img src={hc1} alt="Honeycomb jpg" />
                <img src={hc2} alt="Honeycomb jpg" />
              </div>
              <div className="des">
                <p className="description">I was inspired by the structure of a beehive in the creation of this modular model. The model is constructed with the stacked of multiple 4-piece-combined forms. Additionally, inspired by the bee’s habitual life, where they have an organized colonial home that has a repetition of a hexagon upon each honeycomb, which closely resembles the design of this structure. This is a twin-tower skyscraper consisting of office space, a residential home, and an entertaining space. Similar to the bees’ colony, a beehive functions as a workspace as well as their living space. The sky bridge represents the unbreakable bond between the workers, the drones, and the queen. As in real life, it provides a convenient means to travel between two towers eliminating the need to descend to the ground floor.</p>
              </div>
            </div>

            <div className="box">
              <div className="title">
                <h3 className="name">Endless Treasure</h3>
                <p className="specs">July 14th, 2023<br/>15.5’ x 10.7’<br/>Ink pen</p>
              </div>
              <div className="img">
                <img src={et} alt="Endless Treasure jpg" />
              </div>
              <div className="des">
                <p className="description">This optical illusion immerses viewers deep into the mysterious tunnels and tracks of the coal mine bringing various perspectives when viewed from different angles. By creating individual compartments that represent a new entryway to the minefield, it ultimately guides viewers to the realm of the unknown.</p>
              </div>
            </div>

            <div className="box">
              <div className="title">
                <h3 className="name">Union</h3>
                <p className="specs">November 25th, 2023<br/>14.2 x 12.7’ x 6.4’<br/>Paper, Acrylic Rod</p>
              </div>
              <div className="img">
                <img src={union} alt="Union jpg" />
              </div>
              <div className="des">
                <p className="description">Combination of three original sketches, I create this organic model that could either be an exhibition space or an arena. Viewing from certain perspective, the model form a dome shape which resembles the common geometry of a stadium. However, by shifting our perspective, the ground floor space could also represent an exhibition space as natural lighting can perfectly represent the artworks in certain angles. Each material has its purpose to be includes. the plastic balls act as a foundation material in order to held the structure. The paper mesh create curves around the model which resemble with the shape of the plastic balls. The acrylic rod is for aesthetic purpose that match the overall streamline of the model.</p>
              </div>
            </div>

            <div className="box">
              <div className="title">
                <h3 className="name">Conjunction</h3>
                <p className="specs">August 2nd, 2023<br/>15.5’ x 22.3’<br/>Charcoal</p>
              </div>
              <div className="img">
                <img src={con} alt="Conjunction jpg" />
              </div>
              <div className="des">
                <p className="description">Standing beneath the MRT station in Taipei, I was deeply amazed by the structural engineering that was displayed and the material used to build this construction. I utilized charcoal to capture the scene by focusing on the portion which shows the contrast that intersects between each surface area.</p>
              </div>
            </div>

            <div className="box">
              <div className="title">
                <h3 className="name">Lightwork</h3>
                <p className="specs">September 17th, 2023<br/>7.15’ x 7.15’ x 7.15’<br/>Foamboard</p>
              </div>
              <div className="img">
                <img src={light} alt="Lightwork jpg" />
              </div>
              <div className="des">
                <p className="description">Inspired by the simplicity of the element of line, I utilized linear lines varying in length and direction to construct this 3 floor residential building. The spacing of each linear structure not only provides a modern ambience to the design surface, but also brings in more airflow as well as natural lighting. However, to encapsulate the reality of a residence, the surface of each floor is designed with a solid piece of material. An elevator shaft is installed in one of the corners and the entrance for each floor is created with a door-like opening. I also off-set the cube form to cultivate a balcony area into the design, which creates more space and allows a gateway for residents to step out for fresh air when needed.</p>
              </div>
            </div>

            <div className="box">
              <div className="title">
                <h3 className="name">Chronicles of Progress</h3>
                <p className="specs">October 22nd, 2023<br/>14.5’ x 28.5’ x 8.5’<br/>Balsa wood, Acrylic Rod, LED</p>
              </div>
              <div className="img">
                <img src={cop1} alt="Chronicles of Progress jpg" />
                <img src={cop2} alt="Chronicles of Progress jpg" />
              </div>
              <div className="des">
                <p className="description">In this conceptual model, I focused on utilizing the element of dynamic interplay of lines and illumination to create a thought provoking design. By using a flexible acrylic rod, I was able to manipulate the shapes of each rod with the same compound. This approach reflects the aging process as time goes on in which both individuals or objects will undergo transformation in its appearance over time. The choice of the material with the bendable acrylic rod plays a vital role in this design, because I can light up the structure by applying a LED bulb on both sides of the rod, which symbolizes the basic form of life when lit. On the other hand, the various wave-like elements illuminate to symbolize the different journey that each person undertakes in their life, emphasizing the uniqueness of our paths.</p>
              </div>
            </div>

            <div className="box">
              <div className="title">
                <h3 className="name">Divulge</h3>
                <p className="specs">November 5th, 2023<br/>14.2 x 12.7’ x 6.4’<br/>Foamboard, Acrylic Rod</p>
              </div>
              <div className="img">
                <img src={dv1} alt="Divulge jpg" />
                <img src={dv2} alt="Divulge2 jpg" />
              </div>
              <div className="des">
                <p className="description">This model is inspired by the formation of the iceberg, where the greater part is submerged under water so that we only see a small fraction of the whole object; and just like the iceberg formation, the form of the model will change as the viewer shifts their perspective. The top view illustrates the formation with geometric shapes. However, as the point of view shifts to the side, the sophisticated column colony will appear. The column symbolizes a supporting system that reveals the actual built-up of this colony. This model serves as a public gathering space as each individual piece provides an area of shade in which people can rest.</p>
              </div>
            </div>

            <div className="box">
              <div className="title">
                <h3 className="name">Memorable Factor</h3>
                <p className="specs">October 22nd, 2023<br/>15.5’ x 10.7’<br/>Charcoal</p>
              </div>
              <div className="img">
                <img src={mf} alt="Memorable Factor jpg" />
              </div>
              <div className="des">
                <p className="description">During my trip to Switzerland, I captured this breathtaking view of the mountains. Inspired by the scene, I replaced the mountain with my observational drawing of the shells and and introduced architectural elements such as cement mixer and a lifting crane to combine my interest in architectural landscapes.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Showcase