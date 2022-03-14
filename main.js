function Clock(props) {
    const [date, setDate] = React.useState(new Date());

    const tick = () => {
        setInterval(() => {
            setDate(new Date())
        })
    }
    React.useEffect(() => {
        tick();
        clearInterval(tick);
    })

    return (
        <div>
            <h1>Hello world</h1>
            <h2>Il est {date.toLocaleTimeString()}.</h2>
        </div>
        );
}

ReactDOM.render(<Clock />, document.querySelector('#app'));