import { useState, useEffect } from "react";
import EjemploTitulo from "./EjemploTitulo";

const EjemploContador = () => {
  //contador
  console.log("Se monto y se Actualizo el componente");

  const [contador, setContador] = useState(1);
  const [toggle, setToggle] = useState(true);

  const aumentar = () => {
    setContador(contador + 1);
  };

  /*     useEffect( ()=> {
        const fetchApi = () => {
            fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => console.log(data))
        }
    
        fetchApi();
    }, [contador] )

 */

  const alternarToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    console.log("primer useeffect");
  }, []);

  useEffect(() => {
    console.log("segundo useeffect");
  }, [contador]);

  useEffect(() => {
    console.log("3er useEffect");
  });

  return (
    <div>
      <div>
        <p>Contador: {contador}</p>
        <button onClick={aumentar}> + </button>
      </div>
      <div>
        <p>Booleano: {toggle.toString()}</p>
        <button onClick={alternarToggle}> Alternar Toggle </button>
      {
        toggle && <EjemploTitulo />

      }
      </div>
    </div>
  );
};

export default EjemploContador;
