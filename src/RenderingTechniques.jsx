// function ListItem(props) {
//   return <li>{props.animal}</li>
// }

function List(props) {
  return (
    <>
      {!props.animalList ? (
        <div>Loading...</div>
      ) : props.animalList.length > 0 ? (
        <ul>
          {props.animalList.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
      ) : (
        <div>There are no animals in the list!</div>
      )}
    </>
  );
}

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animalList={animals} />
    </div>
  );
}

function RenderingTechniques() {
  return (
    App()
  )
}

export default RenderingTechniques;