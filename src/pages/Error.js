import React from 'react';

import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <h1>An Error Occurred</h1>
                <p>Page could not be found..!</p>
            </main>
        </>
    )
}

export default ErrorPage;