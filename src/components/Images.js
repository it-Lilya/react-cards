import React from "react";
import PropTypes from 'prop-types';

function Images({src, alt}) {
    return (
        <img src={src} class="card-img-top" alt={alt} style={{width: "230px"}} /> 
    )
}

Images.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}
export default Images;