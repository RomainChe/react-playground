function NameForm(props) {
  const [name, setName] = React.useState(" ");

  const handleChange = (event) => {
    event.preventDefault();
    setName(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Le nom a été soumis : ${name}`);
  }
  return(
    <form onSubmit={handleSubmit}>
        <label>
          Nom :
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
  );
}

function EssayForm(props) {
  const [essai, setEssai] = React.useState('Écrivez un essai à propos de votre élément du DOM préféré')
  
  const handleChange = (e) => {
    e.preventDefault();
    setEssai(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Un essai a été envoyé :  ${essai}`)
  }
  return(
    <form onSubmit={handleSubmit}>
        <label>
          Essay:
          <textarea value={essai} onChange={handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
  )
}

function FlavorForm(props) {
  const [flavor, setFlavor] = React.useState("coconut");

  const handleChange = (e) => {
    e.preventDefault();
    setFlavor(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Votre parfum favori est : ${flavor}`);
  }
  return(
    <form onSubmit={handleSubmit}>
        <label>
          Choisissez votre parfum favori :
          <select value={flavor} onChange={handleChange}>
            <option value="grapefruit">Pamplemousse</option>
            <option value="lime">Citron vert</option>
            <option value="coconut">Noix de coco</option>
            <option value="mango">Mangue</option>
          </select>
        </label>
        <input type="submit" value="Envoyer" />
      </form>
  )
}

function All(props) {
  const [all, setAll] = React.useState({
    name: "",
    essai: "",
    flavor: "coconut"
  })
  const handleChange = ({target: {name, flavor}}) => {
    setAll(state => ({...state, [name]: flavor}), []);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    for(const name in all) {
      console.log(`${name}: ${all[name]}`)
    }
  }
  return(
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" value={all.name} onChange={handleChange} />
      </label>
      <label>
        Text :
        <textarea value={all.essai} onChange={handleChange} />
      </label>
      <label>
      Choisissez votre parfum favori :
          <select value={all.flavor} onChange={handleChange}>
            <option value="grapefruit">Pamplemousse</option>
            <option value="lime">Citron vert</option>
            <option value="coconut">Noix de coco</option>
            <option value="mango">Mangue</option>
          </select>
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  )
}
ReactDOM.render(<All />, document.querySelector('#app'));