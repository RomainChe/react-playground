//const helloWorld = React.createElement('h1', {}, 'Hello world!');

const helloWorld = <h1>Hello world!</h1>;

ReactDOM.render(helloWorld, document.querySelector('#app'));

const lastName = <span className="red uppercase">Romain</span>;
const firstName= <span className="firstUppercase">Chevalier</span>   ;

const all = <span>{lastName} {firstName}</span>;
ReactDOM.render(all, document.querySelector('#app'));