import React from 'react';

const Page = ({children, index, onTouchStart, onTouchEnd, onTouchMove}) => {
    return (
        <div
            className={`page page-${index}`}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onTouchMove={onTouchMove}
        >
            {children}
        </div>
    );
};

export default Page;