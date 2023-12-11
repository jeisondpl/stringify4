import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  const data =
    '{"tarjetas":[hg],"paqueteDisponible":{"codigoPaquete":"9159331027851346318","nombrePaquete":"512MB +512MB RRSS +IlimitMovi +10 MinTD 1 Dia","precioPaquete":"1.0000"},"valorTotalFactura":0.0,"suscriptionType":"PRE"}'

  console.log(JSON.parse(data))

  return 'Hello'
}

ReactDOM.render(<App />, document.getElementById('root'))
;('')
