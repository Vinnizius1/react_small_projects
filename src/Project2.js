import { useState, useRef } from "react";

export default function Project2() {

    // STATE
    const [listaTarefas, setListaTarefas] = useState(() => { return [] })
    const [tarefa, setTarefa] = useState(() => { return '' })

    // REF
    const idTarefa = useRef(0);
    const inputRef = useRef();

    // METODOS
    function adicionarTarefa() {
        // Adicionamos a tarefa
        setListaTarefas(old => { return [...old, {id: idTarefa.current, texto: tarefa}] });
        // Adicionamos mais 1 valor ao "id" da tarefa
        idTarefa.current++;
        // Limpamos o "texto" da tarefa
        setTarefa('');
        // Colocamos novamente o foco no campo do input
        inputRef.current.focus();
    }

    function limparTarefa() {
        setListaTarefas(old => { return [] });
        idTarefa.current = 0;
    }

    function removerTarefa(id) {
        // "tmp" será um array q conterá todas as tarefas COM EXCEÇÃO daquela do "id" passado como argumento
        const tmp = listaTarefas.filter((tarefa) =>  tarefa.id !== id);
        setListaTarefas(tmp);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h3>GESTOR DE TAREFAS</h3>
            <hr />
            <input ref={inputRef} type="text" value={tarefa} onChange={(e) => setTarefa(e.target.value)} />
            <div>
                <button onClick={adicionarTarefa}>Adicionar</button>
                <button onClick={limparTarefa}>Limpar Tudo</button>
            </div>
            <hr />

            <p>Tarefas:</p>
            {listaTarefas.map((tarefa) => {
                return <p key={tarefa.id}>{tarefa.texto} - <span onClick={() => removerTarefa(tarefa.id)}>[remover]</span></p>
            })}
        </div>
    )
}

/* Utilizaremos o useRef para criarmos o "id", o qual terá que ser sempre único */