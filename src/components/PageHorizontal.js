import React from 'react';

const PageHorizontal = ({children, index}) => {
    return (
        <div className={`page-horizontal page-3-${index}`}>
            {children}
        </div>
    );
};

export default PageHorizontal;
