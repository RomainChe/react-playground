
function Clock(props) {
    React.useEffect(() => {
        tick();        
    }, []);
    
    const [date, setDate] = React.useState(new Date());
    const [textColor, setTextColor] = React.useState("black");

    const tick = () => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }
    const generateRandomColor = () => {
            var randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`; 
            setTextColor(randomColor) ;
    }

    const resetColor = () => {
        setTextColor("black");
    }
    

    return (
        <div>
            <h1>Hello world</h1>
            <h2 style={{color: textColor}}>Il est {date.toLocaleTimeString()}.</h2>
            <button onClick={generateRandomColor}>Changer de couleur</button>
            <button onClick={resetColor}>Reset couleur</button>
        </div>
        );
}

ReactDOM.render(<Clock />, document.querySelector('#app'));





