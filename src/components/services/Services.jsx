import styles from "./Services.module.css";

export default function Services() {
    return (
      <div className="container mt-5 mb-5">
        <h2 className="text-center m-3">Servicios</h2>
        <div className="card-group">
          <div className="card mx-3">
            <img className={`card-img-top ${styles.image}`} src="/images/impositivo.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Impositivo-Laboral-Societario</h5>
              <p className="card-text">
               <ul>
                <li>Servicios Impositivos</li>
                <li>Servicios Previsionales</li>
                <li>Servicios Societarios</li>
               </ul>
              </p>
            </div>
          </div>
  
          <div className="card mx-3 border-start">
            <img className={`card-img-top ${styles.image}`}  src="/images/auditoria.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Servicios Contables / Auditoría</h5>
              <p className="card-text">
                <ul>
                    <li>contabilidad</li>
                    <li>auditoría interna y externa</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="card mx-3 border-start">
            <img className={`card-img-top ${styles.image}`}  src="/images/servicios-especificos.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Servicios Específicos</h5>
              <p className="card-text">
               <ul>
                <li>De administración</li>
                <li>De control y gestión</li>
               </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  