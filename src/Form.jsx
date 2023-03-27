import React from 'react'

export function Form() {
  return (
    <div className='FormMain'>
        <h2 className='FormTitle'>Please, for inquires complete the form bellow.</h2>
        <form>
            <label for="fname">First name:</label><br></br>
            <input type="text" id="fname" name="fname"/><br></br>
            <label for="lname">Last name:</label><br></br>
            <input type="text" id="lname" name="lname"/><br></br>
            <label for="fnumber">Phone Number:</label><br></br>
            <input type="number" id="fnumber" name="fnumber"/><br></br>
            <label for="fadress">Adress:</label><br></br>
            <input type="text" id="fadress" name="fadress"/>
        </form>
        <button>Send!</button>
    </div>

        
  )
};

