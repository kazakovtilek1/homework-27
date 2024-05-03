import React from 'react';

function ErrorPage({name, lastname}) {
    return (
        <div>
            Тебе сюда нельзя {name} {lastname}!
        </div>
    );
}

export default ErrorPage;