import React from 'react'

export const Principal = () => {
    return (
        <main className="contenedor contenido-principal text-center">
            <section className="conoce">
                <h2><span>Conoce más</span> Sobre Nosotros</h2>
                <div className="testimonial">
                    <p>META es una iniciativa de capacitación a través de <span>talleres</span> impartido por jóvenes universitarios a personas emprendedoras, con el objetivo de que más personas logremos desenvolvernos con <span>éxito</span> en los diversos entornos que influenciamos: familia, trabajo, centro de estudio, sociedad, entre nosotros.</p>
                    <p></p>
                </div>
            </section>

            <section className="iconos">
                <ul className="listado-iconos">
                    <li>
                        {/* <img className="icono" src="../public/img/familia.png" alt="icono cafe" /> */}
                        <img className="icono" src="/img/familia.png" alt="icono cafe" />
                        <p>Responsabilidad Social</p>
                    </li>
                    <li>
                        <img className="icono" src="/img/fe.png" alt="icono cafe" />
                        <p>Alegría y Compromiso</p>
                    </li>
                    <li>
                        <img className="icono" src="/img/sociedad.png" alt="icono cafe" />
                        <p>Familia y Amistad</p>
                    </li>
                </ul>
            </section>

            <section className="experiencia">
                <h2><span>Vive la</span> Experiencia</h2>
                <div className="galeria">
                    <div className="imagen">
                        <img src="/img/meta-1.jpg" alt="galeria" />
                    </div>
                    <div className="imagen">
                        <img src="/img/meta-3.jpg" alt="galeria" />
                    </div>
                    <div className="imagen">
                        <img src="/img/meta-2.jpg" alt="galeria" />
                    </div>
                    <div className="imagen">
                        <img src="/img/meta-4.jpg" alt="galeria" />
                    </div>
                    <div className="imagen">
                        <img src="/img/meta-5.jpg" alt="galeria" />
                    </div>
                    <div className="imagen">
                        <img src="/img/meta-6.jpg" alt="galeria" />
                    </div>
                    <div className="imagen">
                        <img src="/img/meta-9.jpg" alt="galeria" />
                    </div>
                    <div className="imagen">
                        <img src="/img/meta-10.jpg" alt="galeria" />
                    </div>
                    <div className="imagen">
                        <img src="/img/meta-11.jpg" alt="galeria" />
                    </div>
                    <div className="imagen">
                        <img src="/img/meta-12.jpg" alt="galeria" />
                    </div>
                </div>
            </section>
        </main>
    )
}
