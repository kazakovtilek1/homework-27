import React from 'react';

function MainPage({name, lastname}) {
    return (
        <div>
            Добро пожаловать {name} {lastname} мы тебя ждали!
        </div>
    );
}

export default MainPage;