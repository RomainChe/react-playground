//const helloWorld = React.createElement('h1', {}, 'Hello world!');

function FirstName(props) {
    return <span className="red-text uppercase">{props.prenom}</span>;
}
function LastName(props) {
    return <span className="uppecaseOne">{props.nom}</span>;
}

const test = <FirstName prenom="Romain"/>
const test2 = <LastName nom="Chevalier"/>
const HelloWorld = <h1>{test} {test2}</h1>   

ReactDOM.render(HelloWorld, document.querySelector('#app'));
// Solution sans bonus




/**
 * 
 * Solution avec bonus
 */

/*
 const formatFirstName = (value) => value[0].toUpperCase() + value.slice(1);

 const formatLastName = (value) => value.toUpperCase();
 
 // Solution avec bonus
 const helloWorld = (
   <h1>
     Hello <span>{formatFirstName(firstName)}</span>{" "}
     <span className="red-text">{formatLastName(lastName)}</span>
   </h1>
 );

 */

//ReactDOM.render(helloWorld, document.querySelector('#app'));

