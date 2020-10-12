import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/actionCreatorNumeros'

function Intervalo(props) {
    const {max, min} = props    
    return(
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} 
                        onChange={e => props.alterarMinimo(+e.target.value)}></input>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max}
                        onChange={e => props.alterarMaximo(+e.target.value)}></input>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapDispatchToProps(dispatch){
    return {
        alterarMinimo(novoNumero){
            //Action creator retonar uma action 
            const action = alterarNumeroMinimo(novoNumero)
            //Envia a action para o dispatcher para que seja enviado para todos os reducers
            dispatch(action)
        },

        alterarMaximo(novoNumero){
            //Action creator retonar uma action
            const action = alterarNumeroMaximo(novoNumero)
            //Envia a acation para o dispatcher para que seja enviado para todos os reducers
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Intervalo)