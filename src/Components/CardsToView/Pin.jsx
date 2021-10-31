import React, {useState} from 'react'
import './pin_style.css'
import {BsThreeDots} from 'react-icons/bs'

const upload_img = (event , setPinImage) => {
    console.log(event.target.files[0])
    if (event.target.files && event.target.files[0]){
        if(/image\/*/.test(event.target.files[0].type)){
            const reader = new FileReader()
            console.log(reader)
            reader.onload = () => {
                setPinImage(reader.result)
            }

            reader.readAsDataURL(event.target.files[0])

        }
    }
   
}

const check_size = (event) =>{
    const image= event.target
    image.classList.add('pin_max_width');

    image.style.opacity = 1
}

const Pin = () => {
 const [pinImage, setPinImage] = useState()
    return (
       <>
           <input type="file" onChange={event => upload_img(event, setPinImage)} name="picture" id="picture" />
           <div className="card_pin" >
                
                <div className="pin_title"></div>
                    
                <div className="pin_modal">
                   
                   <div className="modal_head">
                        <button>Save</button>
                   </div>

                   <div className="modal_foot">
                       <div className="pint_mock_icon_container" >
                            <BsThreeDots size="25"/>
                       </div>
                   </div>

                </div>

                <div className="pin_image" >
                    <img onLoad={check_size} src={pinImage} alt="pin_image" />
                </div>

           </div>
        </>
    )
}

export default Pin
