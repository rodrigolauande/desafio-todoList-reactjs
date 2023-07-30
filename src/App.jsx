import styles from './App.module.css';
import { useEffect, useState } from 'react';
import { Header } from './components/Header'
import { Tasks } from './components/Tasks';

const LOCAL_STORAGE_KEY = 'tarefas';


export function App () {

    const [tarefas, setTarefas] = useState([]);

    function storegeTarefas(newTarefas) {
        setTarefas(newTarefas);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTarefas));
    }
 
    function storegeCarregar() {
        const salvar = localStorage.getItem(LOCAL_STORAGE_KEY);
        if(salvar) {
            setTarefas(JSON.parse(salvar))
        }
    }

    function adicionarTarefas(tituloTarefa) {
        storegeTarefas([...tarefas, {
            id: crypto.randomUUID(),
            titulo: tituloTarefa,
            completo: false
        }]);
    }

    useEffect(() => {
        storegeCarregar();
    },[])

    function tarefaCompletaId(tarefaId) {
        const newTarefas = tarefas.map(tarefa => {
            if(tarefa.id === tarefaId) {
                return {
                    ...tarefa,
                    completo: !tarefa.completo
                }
            }
            return tarefa;
        });
        storegeTarefas(newTarefas);
    }

    function tarefaDeletadaId(tarefaId) {
        const newTarefas = tarefas.filter(tarefa => tarefa.id !== tarefaId);
        storegeTarefas(newTarefas);
    }    

    return(
        <div className={styles.wrapper}>
            <Header addTarefas={adicionarTarefas} />
            <main>
                <Tasks tarefas={tarefas} tarefaConcluida={tarefaCompletaId} tarefaDeletada={tarefaDeletadaId}/>
            </main>
        </div>
    )
}