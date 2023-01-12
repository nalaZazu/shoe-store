import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import shoes from "../Launch/index"
function LaunchShoes() {
    let { id } = useParams();
    console.log(id)
    return (
        <>
            { }
            {/* {photo} */}
        </>
    )
}

export default LaunchShoes