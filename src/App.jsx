// import React from "react";

const App = () => {
  const name = "Bappy";
  const loggedIn = true;
  const names = ["Bappy", "Monim", "Shakir"];

  return (
    <>
      <div className="text-5xl">App</div>
      <p>Hello {name}</p>
      <br />
      {loggedIn ? <p>Welcome {name}</p> : <p>Please log in</p>}
      <br />
      <ul className="list-disc list-inside pl-3">
        {names.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
    </>
  );
};

export default App;
