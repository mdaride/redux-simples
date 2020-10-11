import React from 'react'
import Card from './Card'

export default props => {
    //const max = props.max
    //const min = props.min

    //Destructuring
    const {max, min} = props
    return(
        <Card title="Soma dos Números" blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{max + min}</strong>                    
                </span>                
            </div>
        </Card>
    )
}