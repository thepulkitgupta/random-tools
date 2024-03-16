import React from 'react';
import Counter from './Counter';
import Clock from './Clock';
import Toggle from './Toggle';
import Colors from './Colors';
import Tables from './Tables';
import Forms from './Forms';
import Temperature from './Temperature';

function Utilities() {
    return <div>
        <Temperature />
        <Forms />
        <Tables />
        <Colors />
        <Counter />
        <Toggle />
        <Clock />
    </div>
};

export default Utilities;