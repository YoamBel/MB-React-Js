import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

const ErreurPage = () => {
    const history = useHistory()
    return (
        <div className = "container-error">
           <h1>404 Page d'Erreur</h1>
           <h4>Cette Page n'existe pas</h4>
            <Link className = "link-error" onClick = {history.goBack}>Retourner au site</Link>
        </div>
    )
}

export default ErreurPage
