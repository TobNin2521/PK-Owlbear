import { useEffect, useState } from 'react';
import './Initiative.css';

export const Initiative = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        localStorage.setItem("pk-init-players", "asdasd");
    }, []);

    return (
        <div className='initiative'>
            {localStorage.getItem("pk-init-players")}
        </div>
    )
};