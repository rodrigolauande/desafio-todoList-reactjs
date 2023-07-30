import styles from './Header.module.css';
import Logo from '../assets/logomarca.png';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';


export function Header({addTarefas}) {

    const [atividade, setAtividade] = useState('')
    
    function enviarFormulario(event) {
        event.preventDefault();

        addTarefas(atividade);
        setAtividade('');
    }

    function formularioCarregado(event) {
        setAtividade(event.target.value)
    }
    return(
        <header className={styles.header}>
                <img src={Logo} alt="" />
            <form onSubmit={enviarFormulario} >
                <input type="text" placeholder="Adicionar uma nova tarefa" onChange={formularioCarregado} value={atividade} />
                <button>Criar <AiOutlinePlusCircle size={20}/></button>
            </form>
        </header>
    )
}