import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from './cake/CakeAction'
import {buyIcereame} from './ice-creame/IceAction'

function HooksRedux() {
    const numOfCake =useSelector(state =>state.cake.numOfCake)
    const numOFIce  =useSelector(state => state.iceCreame.numOFIce)
    const dispatch = useDispatch()
    return (
        <div>
            <h3>num of cakes hooks {numOfCake}</h3>
            <button onClick={()=>dispatch(buyCake())}>buyCake</button>
            
            <h4>num of ice {numOFIce}</h4>
            <button onClick={()=>dispatch(buyIcereame())}>buy ice</button>
          
          
        </div>
    )
}
export default HooksRedux
