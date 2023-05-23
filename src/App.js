import './App.css';
import Counter from "./Counter";
import {MyButton} from "./components/Button";
import {Header} from "./components/Header";
import Shopping from "./components/Lists";
import {useState} from "react";
import ArtistList from "./components/Artist";


function App() {

    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <div className="App">
            <Header/>
            <ArtistList/>
            <MyButton count={count} buttonClicked={handleClick}/>
            <MyButton count={count} buttonClicked={handleClick}/>
            <Counter/>
            <Shopping/>
        </div>

    );
}

export default App;
