import React from 'react';
import Online from './Online';
import Ofline from './Ofline';

class Status extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        isOnline: false,
    };
  }
    render(){
      return (
        <>
         {this.state.isOnline ? (
            <Online/>
         ) : (
            <Ofline/>
         )}         
        </>
         
      );
  
    }
  }
         
  export default Status;