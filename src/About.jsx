import React from 'react'
import agustin from '../public/assets/agustin.jpg'
import gian from '../public/assets/gian.jpg'
export function About() {
  return (
    <div className='About' id='2'>
        <h2 className='About-title'>About own team!</h2>
  
        <img className='AboutPhoto' src={agustin} alt="agus"/>

        <p className='Aboutp'> Hola Soy Agustin Te ofrezco variedad de productos, ¿Queres mostrar fotos de tus productos y una descripción de los mismos para así generar mas consultas? Entonces, éste tipo de página es ideal. Incluye un diseño responsive, contenido de hasta 7 secciones, catálogo de productos dividido por categorías, contenido autogestionable.</p>
        
        <img className='AboutPhoto' src={gian} alt="gian" />

        <p className='Aboutp'> Hola Soy Gian me encargo de estudiar tu marca, evaluamos el target de tus clientes y tus preferencias, para en conjunto llevar a cabo, un diseño de Logo profesional que represente los valores e ideales de tu empresa. En él se definen los parámetros y lineamientos estéticos, para todas las piezas gráficas que se necesiten realizar.</p>
        
    </div>
  )
}

export default About