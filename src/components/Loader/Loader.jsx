import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'

import React from 'react';

const Loader = ({
    size = "40",
    stroke = "5",
    bgOpacity = "0",
    speed = "2",
    color = "black"
}) => {
    return (
        <Ring
            size={size}
            stroke={stroke}
            bgOpacity={bgOpacity}
            speed={speed}
            color={color}
        />
    );
};

export default Loader;