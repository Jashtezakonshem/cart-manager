import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from './components/UserCard'
// NOTATE BENE: QUANDO IMPORTO QUALCOSA CHE NON E' JAVASCRIPT,
//DEVO PER FORZA AGGIUNGERE L'ESTENZIONE DEL FILE.
// I FILE NON JAVASCRIPT NON POSSONO ESSERE TRADIZIONALMENTE IMPORTATI
// C'E WEBPACK CHE FA LA MAGIA https://webpack.js.org/concepts/
import adminImage from "./assets/admin.jpeg";

//ESERCIZIO PER DOMANI (introduzione ad axios e alle chiamate api)
// dalla variabile response, estrapolare gli utenti
// e metterli nello stato  (useState)
// per ogni utente renderizzare un componente <UserCard/> dove gli passate in ingresso
// una prop che è l'i-esimo utente <UserCard user={user}/>
// questo componente UserCard a sua volta renderizza un div con un'immagine
// che cambia a seconda del campo 'role' dentro lo user.
// per le altre immagini degli altri ruoli, cercarne una su internet
// e sulla falsa riga di quello che ho fatto io (import)
// fate un rendering condizionale

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get('/users')
            console.log({ response })
            setUsers(response.data)
        };
        fetch();
    }, []);

    const createUser = async () => {
        await axios.post('/users', {})
    }
    return (
        <div className="App">
            {
                users.map(u => (<UserCard user={u} />))
            }

        </div>
    );
}

export default  Users
