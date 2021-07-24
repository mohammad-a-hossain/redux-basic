import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './component/redux/store';
 import CakeContainer from './component/CakeContainer'; 
import HooksRedux from './component/HooksRedux';
import IceCreameContainer from './component/IceCreameContainer';
import UserContainer from './component/UserContainer';



function App() {
  return (
    <Provider store={store}>
        <div className="App">
       <h3>react redux</h3>
      <HooksRedux></HooksRedux>
      <hr></hr>
       <CakeContainer></CakeContainer> 
       <IceCreameContainer></IceCreameContainer>
       <hr/>
       <UserContainer></UserContainer>
      
    </div>
    </Provider>
  
  );
}

export default App;
