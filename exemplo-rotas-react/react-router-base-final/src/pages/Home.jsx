import React from 'react'
import { Link } from "react-router-dom";

function Home() {

    return (
        <div>
            <h1>Página inicial</h1>
            <Link to="/contato">contato</Link>

        </div>

    )
}

export default Home;