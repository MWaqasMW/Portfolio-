import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MyImage = ({
    className,
    src,
    alt,
    placeholderSrc,
    effect = "blur",
    height = "100%",
    width = "100%",
    zIndex = 1
}) => (
    <>
        <LazyLoadImage
            className={className}
            alt={alt}
            placeholderSrc={placeholderSrc?.src}
            height={height}
            src={src}
            effect={effect}
            width={width}
        />
    </>
);

export default MyImage;
