import { useState, useRef } from "react";

export default function Project2() {

    // STATE
    const [listaTarefas, setListaTarefas] = useState(() => { return [] })
    const [tarefa, setTarefa] = useState(() => { return '' })

    // REF
    const idTarefa = useRef(0);

    // METODOS
    function adicionarTarefa() {
        setListaTarefas(old => { return [...old, {id: idTarefa.current, texto: tarefa}] })
    }

    return (
        <>
            <h3>GESTOR DE TAREFAS</h3>
            <hr />
            <input type="text" value={tarefa} onChange={(e) => setTarefa(e.target.value)} />
            <div>
                <button onClick={adicionarTarefa}>Adicionar</button>
                <button>Limpar Tudo</button>
            </div>
            <hr />

            <p>Tarefas:</p>
            {listaTarefas.map((t) => {
                return <p key={t.id}>{t.texto}</p>
            })}
        </>
    )
}

/* Utilizaremos o useRef para criarmos o "id", o qual terá que ser sempre único */