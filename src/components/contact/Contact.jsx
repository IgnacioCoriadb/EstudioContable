"use client"
import React from 'react';
import styles from "./Contact.module.css";

export default function Contact() {
  
const handleSubmit =()=>{

}
  return (
    <div>
      <h2 className="text-center m-3" id="contact">Contacto</h2>
      <div className={`container ${styles.formContainer}`}>
        <div className='row'>
          <div className='col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
            <div className={`col-12 ${styles.form}`}>
            <form onSubmit={handleSubmit}>

              <div className="row">
                <div className='col-12 mb-2'>
                  <input type="text" className="form-control" id="name" placeholder="Nombre"/>
                </div>
                <div className='col-12 mb-2'>
                  <input type="text" className="form-control" id="lastName" placeholder="Apellido"/>
                </div>
                <div className='col-12 mb-2'>
                  <input type="email" className="form-control" id="email" placeholder="Email"/>
                </div>
                <div className='col-12 mb-2'>
                  <input type="email" className="form-control" id="phone" placeholder="Teléfono"/>
                </div>
                <div className='col-12 mb-2'>
                  <textarea className="form-control" rows="3" id="message" placeholder='Mensaje..'></textarea>
                </div>
                <div className='col-12 mb-2'>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                  </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
