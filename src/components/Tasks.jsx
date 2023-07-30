import { Task } from './Task'
import styles from './Tasks.module.css'
import { TbClipboard } from 'react-icons/tb';

export function Tasks({tarefas, tarefaConcluida, tarefaDeletada}) {

    const quantidadeTarefas = tarefas.length;
    const tarefasConcluidas = tarefas.filter(tarefa => tarefa.completo).length;


    if(tarefas.length > 0) {
        return(
            <div className={styles.tarefas}>
                <header className={styles.headerTarefas}>
                    <div className={styles.info}>
                        <p>Tarefas Criadas</p>
                        <span>{quantidadeTarefas}</span>
                    </div>
                    <div className={styles.info}>
                        <p className={styles.textPurple}>Tarefas Completas</p>
                        <span>{tarefasConcluidas} - {quantidadeTarefas}</span>
                    </div>
                </header>
           
                <div className={styles.lista}>
                    {tarefas.map((tarefa) => (
                        <Task key={tarefa.id} tarefa={tarefa} tarefaConcluida={tarefaConcluida} tarefaDeletada={tarefaDeletada}/>
                    ))}
                </div>
            </div>
        )   
    } else {
        return(
            
            <div className={styles.tarefas}>

            <header className={styles.headerTarefas}>
                <div className={styles.info}>
                    <p>Tarefas Criadas</p>
                    <span>{quantidadeTarefas}</span>
                </div>
                <div className={styles.info}>
                    <p className={styles.textPurple}>Tarefas Completas</p>
                    <span>{tarefasConcluidas} - {quantidadeTarefas}</span>
                </div>
            </header>
                <div className={styles.descritivo}>
                    <TbClipboard className={styles.clip}/>
                    <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                    <p>crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
                    
        )
    }
}