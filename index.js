"use strict";

function App(props) {
  return (
    <div className="container">
      <Header name={props.name} />
      <main>
        <Introduction />
        <Education />
        <Works />
        <Contacts />
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#application-root"));
