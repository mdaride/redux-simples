import React from 'react'
import {connect} from 'react-redux' //O componente connect é responsável por conectar o compnente ao estado da aplicação. 
                                    //O connect devolver um objeto que tem ligação com o estado da aplcaçõa

import Card from './Card'

function Media(props) { 
    const {max, min} = props
    console.log(props)
    return(
        <Card title="Média dos Números" green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(max + min)/2}</strong>                    
                </span>                
            </div>
        </Card>
    )
}

//Coloca o estado da aplicação no props
function mapStateToProps(state){
    // Retorna um objeto
    return{
        min: state.numeros.min,
        max: state.numeros.max
    };
}

export default connect(mapStateToProps)(Media) // O connect retorna uma função. O Media é o parâmetro desse função