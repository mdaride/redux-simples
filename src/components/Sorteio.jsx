import React from 'react'
import Card from './Card'

export default props => {

    //Destructuring
    const {max, min} = props
    const aleatorio = parseInt(Math.random() * (max -min)) + min
    return(
        <Card title="Sorteio de um Número" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )
}