function Footer() {
    return (
        <footer className="footer">
            <section className="contacto">
                <h4>Contacto</h4>
                <ul>
                    <li><a href="tel:+543751619821" className="cnt-link">Teléfono</a></li>
                    <li><a href="mailto:lucasreinert2006@gmail.com?Subject=Consulta%20tecnica" target="_blank" rel="noopener noreferrer" className="cnt-link">Correo</a></li>
                    <li><a href="https://wa.me/543751619821" target="_blank" rel="noopener noreferrer" className="cnt-link">WhatsApp</a></li>
                    <li><a href="https://github.com/Reinert-Lucas" target="_blank" rel="noopener noreferrer" className="cnt-link">GitHub</a></li>
                </ul>
            </section>
            <p className="copy">&copy; {new Date().getFullYear()} Reinert Lucas Iván. Todos los derechos reservados.</p>
        </footer>
    );
}

export default Footer;
