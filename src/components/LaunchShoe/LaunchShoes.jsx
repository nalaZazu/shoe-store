import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import shoes from "../Launch/index"

function LaunchShoes() {
    let { id } = useParams();
    console.log(id)

    let item = shoes.find((elem)=>{
        return elem.id===id
    })

    console.log("item",item)
    return (
        <>

           <Link to='/launch'>Back</Link>
           {item && (
        <div>
          <h2>id: {item.id}</h2>
          <h2>{item.name}</h2>
          <img src={item.img} alt="" />
        </div>
      )}
        </>
    )
}

export default LaunchShoes