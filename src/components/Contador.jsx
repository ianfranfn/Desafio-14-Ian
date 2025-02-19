import React, {useState} from 'react'

const Contador = ({ limite }) => { // Desestructura del prop

  const [cuenta, setCuenta] = useState(0) 

  const incremento = () => { // Función para incrementar la cuenta
    if (cuenta < limite) {
      setCuenta(cuenta + 1)
    }
  }

  const decremento = () => { // Función para decrementar la cuenta
    if (cuenta > 0) {
      setCuenta(cuenta - 1)
    }
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
      <button // Botón para decrementar la cuenta
              onClick={decremento}
              disabled={cuenta === 0} // Deshabilita el botón si la cuenta es 0
              className= {`px-4 py-2 rounded-lg font-bold ${ 
                cuenta === 0  // Cambia el estilo del botón si la cuenta es 0
                  ? 'bg-gray-300 cursor-not-allowed' 
                  : 'bg-red-500 hover:bg-red-700 text-white'
              }`}
      >
        -
      </button>

      <p className="text-2xl font-bold">{cuenta}</p> {/* Muestra la cuenta */}

      <button // Botón para incrementar la cuenta
      onClick={incremento}
      disabled={cuenta === limite} // Deshabilita el botón si la cuenta es igual al límite
      className= {`px-4 py-2 rounded-lg font-bold ${
        cuenta === limite // Cambia el estilo del botón si la cuenta es igual al límite 
          ? 'bg-gray-300 cursor-not-allowed'
          : 'bg-green-500 hover:bg-green-700 text-white'
      }`}
      >
        +
      </button>

      <div className='ml-4 text-gray-600'>
        Límite máximo: {limite} {/* Muestra el límite */}
      </div>
    </div>
  )
}

export default Contador