import React ,{useRef} from 'react'
import Card from './Card'


function Foregro() {
    // const data=[
      //  icon,desc,filesize,closedownload,tagdetails
    // ]
    const ref=useRef(null);
    const data=[
        {desc: "This is the backgorund color of the dash adsh sgdj " ,
         filesize: "4mb", 
         close:false, 
         tag:{isOpen:true, tagTitle:"DownLoad Now", tagColor:"blue"}},

         {desc: "This is the backgorund color of the dash adsh sgdj " ,
         filesize: "4mb", 
         close:false, 
         tag:{isOpen:true, tagTitle:"Upload", tagColor:"green"}},

         {desc: "This is the backgorund color of the dash adsh sgdj " ,
         filesize: "4mb", 
         close:false, 
         tag:{isOpen:true, tagTitle:"DownLoad Now", tagColor:"blue"}},
    ]
    return (
    
      <div ref={ref} className='fixed top-0 left-0 w-full h-full  z-[3] flex gap-5 flex-wrap '>
          {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
          ))}
      </div>
      
    
  )
}

export default Foregro
