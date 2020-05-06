import React from 'react';


function WithLoading(Component) {
    return function WihLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return (
            <React.Fragment>
                <Component {...props} />
            </React.Fragment>
        );
        return (
            <React.Fragment>
                <p>Loading...</p>
            </React.Fragment>
        );
    }
}
export default WithLoading;
