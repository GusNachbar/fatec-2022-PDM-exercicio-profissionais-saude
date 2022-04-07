import "./App.css";
import medica from "./images/medica.jpg";

function App() {
  const style = () => {
    return {
      width: 1200,
      height: 250,
      paddingBottom: 20,
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
      <div className="container" style={style()}>
        <div>
          <h3 style={{ textAlign: "center" }}>Profissionais da Saúde</h3>
          <div
            style={{
              padding: "8px 0 8px 0",
              border: "1px solid #e0e0e0",
              width: 1100,
              height: 180,
              borderRadius: 6,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div className="profisisonal">
              <img src={medica} alt=""></img>
              <p>{nomes.profissional1}</p>
            </div>
            <div className="profisisonal">
              <img src="https://cdn-ckope.nitrocdn.com/xzPFVVaGpUTSGVhMONbWgvqbhvcJblQY/assets/static/optimized/rev-cf5893f/wp-content/uploads/2016/12/medico_seu_amigo_hospital-dia-dicas-aproveitar-medico-930x620.jpg"></img>
              <p>{nomes.profissional2}</p>
            </div>
            <div className="profisisonal">
              <img src={process.env.PUBLIC_URL + "/medica.jpg"}></img>
              <p>{nomes.profissional3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
