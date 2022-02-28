import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import Box from "./components/Box";

function App() {
    const randomColor = [
        "#0d0d8c",
        "#a41313",
        "#064826"
    ];
    const [number, setNumber] = React.useState(0);
    const [boxes, setBoxes] = React.useState([]);
    const [color, setColor] = React.useState(randomColor[Math.floor(Math.random() * (5))]);

    let getColor = () => {
        if (number % 5 === 0) {
            let rand = Math.floor(Math.random() * (5));
            setColor(randomColor[rand]);
            return randomColor[rand];
        }
        return color;
    };

    React.useEffect(() => {
        if (number % 2 === 0) {
            let newBoxList = [...boxes];
            newBoxList.push({color: getColor()});
            setBoxes(newBoxList);
        }
    }, [number]);

    let box = boxes.map((it, idx) =>
        <Box key={idx} color={it.color} number={it.number}/>
    );

    let reset = () => {
        setNumber(0);
        setBoxes([]);
    };

    return (
        <div className="App">
            <button onClick={() => setNumber(number + 1)}>Increase</button>
            <button onClick={reset}>reset</button>
            <Counter count={number}/>
            <div className="boxes">{box}</div>
        </div>
    );
}

export default App;