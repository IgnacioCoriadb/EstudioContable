import '@fortawesome/fontawesome-free/css/all.css';

export default function Footer() {
    return (
        <footer className="text-center mt-5 p-5" style={{ backgroundColor: "#004144" }}>
            <div className="container p-4 pb-0">
                <section className="mb-0 d-flex justify-content-center flex-wrap">
                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-2"
                        style={{ backgroundColor: "#3b5998" }}
                        href="https://www.facebook.com/profile.php?id=100063663152407"
                        role="button"
                        target='_blank'
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-2"
                        style={{ backgroundColor: "#bc2a8d" }}
                        href="https://www.instagram.com/estudiomigliavacacoria/"
                        role="button"
                        target='_blank'
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-2"
                        style={{ backgroundColor: "#dd4b39" }}
                        href="mailto:florenciacoriadb@gmail.com"
                        role="button"
                        target='_blank'
                    >
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-2"
                        style={{ backgroundColor: "#25d366" }}
                        href="https://wa.me/2926454900"
                        role="button"
                        target='_blank'
                    >
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </section>
                <section className='text-white pt-3'>Lamadrid 1353</section>
            </div>
        </footer>
    );
}
