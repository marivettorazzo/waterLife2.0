"use client"
import './maps.scss'



const Maps = () => {
  return (
    <div className="contentFatherMaps">
      <div className='content_maps'>
      <button className='button_maps'>
        <a href="https://www.google.com/maps/dir/-20.7993976,-49.5001992/Waterlife+Aquarismo+-+Pra%C3%A7a+Dr.+Anisio+Jose+-+Centro,+Mirassol+-+SP/@-20.8089983,-49.5160823,15z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x94bdaf8d63bb5cc1:0x69335199043ef766!2m2!1d-49.5114752!2d-20.8172289!3e0?entry=ttu">
          <figure >
            <img src="./images/buttonMaps.png" alt="botão ir google maps" />
          </figure>
        </a>
      </button>
        <p>Nossa endereço, Praça : Anísio José Moreira n° 2222 Centro Mirassol</p> 
    </div>
    </div>
  )
}

export default Maps;