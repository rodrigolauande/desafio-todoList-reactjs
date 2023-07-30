import styles from './Task.module.css'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';

export function Task({tarefa, tarefaConcluida, tarefaDeletada}) {

    return(
        <div className={styles.tarefas}>
            <button className={styles.check} onClick={() => tarefaConcluida(tarefa.id)}>
                {tarefa.completo ? <BsFillCheckCircleFill/> : <div />}</button>
                
            <p className={tarefa.completo ? styles.textCompleto : ''}>{tarefa.titulo}</p>

            <button className={styles.deletar} onClick={() => tarefaDeletada(tarefa.id)}><TbTrash size={20}/></button>
        </div>
    )
}