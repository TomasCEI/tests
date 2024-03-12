
const Home = () => {

  const envVariables = import.meta.env;
  console.log(envVariables);

  const { VITE_ENV_NAME} = import.meta.env;
    return (
      <div>
        <h2>Página de Bienvenida! env: {VITE_ENV_NAME}</h2>
      </div>
    );
  }

 export default Home;