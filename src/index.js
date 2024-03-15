import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Clock from './Clock';
import Toggle from './Toggle';
import Colors from './Colors';
import Tables from './Tables';
import Forms from './Forms';
import Temperature from './Temperature';

ReactDOM.render(
 <div>

     <Temperature/>
     <Forms/>
     <Tables/>
      <Colors/>
      <Counter/>
      <Toggle/>
      <Clock/> 
 </div>


,document.getElementById('root')
);
