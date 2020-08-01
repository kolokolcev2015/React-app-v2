import React from 'react';
import Login from "./components/LoginPage/Login";
import {connect} from "react-redux";
import Products from "./components/ContentPage/Products";



const App = React.memo(({authStatus}) => {
  if (!authStatus){
    return <Login/>
  }else{
    return <Products/>
  }
})

const mapStateToProps = state => {
  return{ authStatus: state.auth.isAuth }
}

export default connect(mapStateToProps,null)(App)
