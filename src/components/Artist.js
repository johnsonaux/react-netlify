import { useState } from 'react';

export default function ArtistList() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);
    const [nextId, setNextId] = useState(0);

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                setNextId(nextId + 1)
                setArtists([
                    ...artists,
                    { id: nextId, name: name }
                ]);
            }}>Add</button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    );
}
