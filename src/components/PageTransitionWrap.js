import React, {useState} from 'react';

const PageTransitionWrap = ({children, activePage}) => {
    // const [position, setPosition] = useState(0);
    const pageHeight = window.innerHeight;

    return (
        <div className='page-transition-wrap' style={{transform: `translateY(${(1 - activePage) * pageHeight}px)`}}>
            {children}
        </div>
    );
};

export default PageTransitionWrap;