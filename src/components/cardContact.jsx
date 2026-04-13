import React from 'react'
import '../styles/ContactCard.css'

function cardContact() {
  return (
    <div className='body-contact'>   
       <section className='contact' >
      <h1>Contact</h1>
      <div className='container-contact'>
        <form action="" className='form-contact'>
          <label htmlFor="">Name</label>
          <input type="text" placeholder='Your name' />
          <label htmlFor="">Email</label>
          <input type="email" placeholder='Your email' />
          <label htmlFor="">Message</label>
          <textarea style={{ resize: 'none' }} className='textarea' type='text' placeholder='Your message'  ></textarea>
          <button type='submit'>Send</button>
        </form>

      </div>
      <div className='card-inf'>
        <h3>Direccion:</h3>
        <p>123 Main Street, Anytown, CRC</p>
        <h3>Telefono:</h3>
        <p>(123) 4##-7#90</p>
      </div>
      
    </section>
    </div>
  )
}

export default cardContact
