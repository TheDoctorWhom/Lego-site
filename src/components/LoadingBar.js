  import React from 'react';
  import './LoadingBar.css'

  const LoadingBar = ()=>{
    return (
      <div class="ui segment loadingBar">
      <div class="ui active inverted dimmer">
      <div class="ui text loader">Loading</div>
      </div>
      <p></p>
      </div>
      );
  }

export default LoadingBar;
