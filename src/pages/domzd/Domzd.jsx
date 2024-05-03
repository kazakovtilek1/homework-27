import {useEffect, useState} from 'react';
import MainPage from "../mainPage/MainPage";
import ErrorPage from "../errorPage/ErrorPage";

const name = prompt("Имя?")
const lastname = prompt("Фамилия?")


function Domzd () {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

    const [user, setUser] = useState({
        name: '',
        lastname: ''
    });

    useEffect(() => {
        setUser({
            name,
            lastname
        })
    }, []);


    if(user.name === '' || user.lastname === '') {
        return <div>
            <h1>Dz</h1>

        </div>
    }

    else if(user.name.toLocaleLowerCase() === 'john' && user.lastname.toLocaleLowerCase() === 'johns'){
        return <MainPage name={user.name} lastname={user.lastname}/>
    }


    return (
      <ErrorPage name={user.name} lastname={user.lastname}/>
    );
}

export default Domzd;