import React, { Component } from "react";

// This is a 'functional component' as opposed to a class component
const AfricanFontComponent = ({text, classNameSize, textColour}) => {
    return(
        <div className="card">
            <div className={classNameSize}>
                {text}
            </div>
        </div>
    )
}

// how are props passed to css ?
AfricanFontComponent.defaultProps = {
    size: "x-large",
    colour: "black"
};

export default AfricanFontComponent;

// Now edit this component to take props:
// text
// Size
// colour

