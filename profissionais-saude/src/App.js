import "./App.css";

function App() {
  const obterStyle = () => {
    return {
      width: 800,
      margin: "auto",
      border: "1px solid",
      borderRadius: 6,
      padding: "8px 0 8px 0",
      display: "flex",
      backgroundColor: "#eee",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 5,
    };
  };

  const nomes = {
    profissional1: "Maria da Silva",
    profissional2: "José da Silva",
    profissional3: "Jaqueline  Mendes",
  };
  return (
    <div className="App">
      <div className="container" style={obterStyle()}>
        <div>
          <h3>Profissionais da Saúde</h3>
          <div
            style={{
              padding: "8px 0 8px 0",
              border: "1px solid #e0e0e0",
              width: "90%",
              borderRadius: 6,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div className="profisisonal">
              <img src="src/images/medica.jpg" alt=""></img>
              <p>{nomes[0]}</p>
            </div>
            <div className="profisisonal"></div>
            <div className="profisisonal"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
