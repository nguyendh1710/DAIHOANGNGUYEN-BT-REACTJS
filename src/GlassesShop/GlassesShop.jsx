import { useState } from 'react'
import React  from 'react'
import Icon from './Icon'
// import GlassesList from './GlassesList'

export default function GlassesShop() {

      const [imgUrl,setimgUrl]= useState("./img/v1.png");
      const handleGlasses = (type)=>{

              
           if(type==="./img/v1.png"){

            setimgUrl("./img/v1.png") 

           }
           if(type==="./img/v2.png"){

            setimgUrl("./img/v2.png") 

           }
           if(type==="./img/v3.png"){

            setimgUrl("./img/v3.png") 

           }
           if(type==="./img/v4.png"){

            setimgUrl("./img/v4.png") 

           }
           if(type==="./img/v5.png"){

            setimgUrl("./img/v5.png") 

           }
           if(type==="./img/v6.png"){

            setimgUrl("./img/v6.png") 

           }
           if(type==="./img/v7.png"){

            setimgUrl("./img/v7.png") 

           }
           if(type==="./img/v8.png"){

            setimgUrl("./img/v8.png") 

           }
           if(type==="./img/v9.png"){

            setimgUrl("./img/v9.png") 

           }




      }
   
  return (

    <div className='glasseshop'>
      
      <h1 className='text-center title'>TRY GLASSES APP ONLINE</h1>
    <div className=' model'>
      <img src="./img/model.jpg" width='175px' />
      <img src={imgUrl} width='45px' className='try'/>
      <img src="./img/model.jpg" width='175px'/>
    </div>

    <div className='bg-white glasseslist'> 
        <Icon onGlasses={handleGlasses}/>
      
    </div>     
      
    </div>
  )
}
