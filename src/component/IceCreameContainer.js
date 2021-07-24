import React from 'react'
import { connect } from 'react-redux'
import { buyIcereame } from './ice-creame/IceAction'

const IceCreameContainer = (props) => { console.log(props)
    return (
        <div>
            <h3>how many ice creame  {props.numOFIce} </h3>
           <button onClick={props.buyIcereame }>buy ice creame</button>
        </div>
    )
}


const mapStateToProps = state =>{
    return{
        numOFIce:state.iceCreame.numOFIce
    }
}
const mapDispatchToProps =dispatch =>{
    return{
        buyIcereame:()=>dispatch(buyIcereame())
    }
}
export default connect(mapStateToProps,
             mapDispatchToProps
             )(IceCreameContainer)

