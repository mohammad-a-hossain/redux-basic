import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from './cake/CakeAction'

const CakeContainer = (props) => {console.log(props)
    return (
        <div>
            <h3>how many cakes {props.numOfCake}</h3>
            <button onClick={props.buyCake}>buy cake</button>
        </div>
    )
}



const mapStateToProps = state =>{
    return{
        numOfCake:state.cake.numOfCake
    }
}
const mapDispatchToProps =dispatch =>{
    return{ 
        buyCake:()=>dispatch( buyCake())
    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
) (CakeContainer)
