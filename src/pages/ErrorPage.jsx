import  { useRouteError } from 'react-router-dom';
import React from "react";

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>An unexpected error occured!</p>
            <p>
        <i>{error.statusText || error.message}</i>
      </p>
        </div>
    );
}