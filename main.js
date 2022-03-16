function App(props) {
  const fetchURL = 'https://jsonplaceholder.typicode.com/users';
  React.useEffect(() => {
      fetch(fetchURL)
      .then(res => res.json())
      .then(usersObject => setUsers(usersObject))
  }, [])
  const [users, setUsers] = React.useState([]);
  return(
      <React.Fragment>
      {
          users.map((user) =>(
              <Cards key={user.id} user={user}/>
          ))
      }
      </React.Fragment>
  )
}

  function Cards({user}) {
    return(
    <div>
      <ul>
        <li>{user.name}</li>
        <li>{user.email}</li>
        <li>{user.company.name}</li>
        <li>{user.phone}</li>
        <li>{user.website}</li>
      </ul>
    </div>
    );
  }
  ReactDOM.render(<App/>, document.querySelector('#app'))

 /* const fetchURL = "https://jsonplaceholder.typicode.com/users";
  const getUsers = () => fetchURL(fetchURL).then(res => res.json());

  function App() {
    const [users, setUsers] = React.useState([]); 

    React.useEffect(() => {
      getUsers().then(data => setUsers(data));
    }, []);
    return(
      <React.Fragment>
        {
          users.map(user => (
            <Cards key={user.id}/>
          ))
        }
      </React.Fragment>
    )
  }*/