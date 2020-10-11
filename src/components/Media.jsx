import React from 'react'
import Card from './Card'

export default props => {
    //const min = props.min
    //const max = props.max

    //Descructuring
    const {max, min} = props
    return(
        <Card title="Média dos Números" green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{parseInt((max + min)/2)}</strong>                    
                </span>                
            </div>
        </Card>
    )
}