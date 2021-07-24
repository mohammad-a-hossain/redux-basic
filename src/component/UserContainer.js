import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from './users/userAction'

function UserContainer({userData,fetchUsers}) {//console.log(userData)
    useEffect(()=>{
        fetchUsers()
    },[])

    return userData.loading ?(
        <h3>loading</h3>
    ):userData.error ?(
        <h2>{userData.error}</h2>
    ):(
          <div>
              <h1>user list using api</h1>
              <div>     
        {
            userData && userData.users && userData.users.map(user => <p>{user.name}</p>)
        }
        </div>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        userData : state.users
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        fetchUsers:()=>dispatch (fetchUsers())
    }
}
export default connect(
    mapStateToProps,mapDispatchToProps
)(UserContainer)