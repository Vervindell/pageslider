import React from 'react';

const PageHorizontalTransitionWrap = ({children, activeHorizontalPage}) => {
    const pageWidth = window.innerWidth;

    return (
        <div className='page-transition-wrap'  style={{transform: `translateX(${(1 - activeHorizontalPage ) * pageWidth}px)`}}>
            {children}
        </div>
    );
};

export default PageHorizontalTransitionWrap;