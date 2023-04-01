import React from 'react'



export function Form() {
  return (
    <div className='FormMain' id='3'>
        <h2 className='FormTitle'>Please, for inquires complete the form bellow.</h2><br></br>
        <form onSubmit={prosesarTodo}>
            <label for="first_name">First name:</label><br></br>
            <input type="text" id="first_name" name="first_name"/><br></br>
            <label for="last_name">Last name:</label><br></br>
            <input type="text" id="last_name" name="last_name"/><br></br>
            <label for="phone_number">Phone Number:</label><br></br>
            <input type="number" id="phone_number" name="phone_number"/><br></br>
            <label for="adress">Adress:</label><br></br>
            <input type="text" id="adress" name="adress"/><br></br>
            <button type="submit"  className='Btnform' >Send!</button> 
        </form><br></br> 
        
    </div>
    
    

        
  )
};



const formulario = document.querySelector(".FormMain");


const prosesarTodo = (SubmitEvent) => {
  SubmitEvent.preventDefault();
  
  const datos = new FormData(SubmitEvent.target);
  
  
  const datosCompletos = Object.fromEntries(datos.entries
  ());
  
  console.log(JSON.stringify(datosCompletos));

  

  alert('Form Sent!')

}






