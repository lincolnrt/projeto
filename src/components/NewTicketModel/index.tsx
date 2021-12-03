import { useState, FormEvent } from 'react';
import api from '../../services/api'
import Modal from 'react-modal'
import closeSVG from '../../assets/close.svg'
import { Container} from './styles'

interface NewTicketModelProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTicketModel({ isOpen, onRequestClose }: NewTicketModelProps) {

    const [nomeevento, setNomeEvento] = useState('')
    const [local, setLocal] = useState('')
    const [diasemana, setDiaSemana] = useState('')
    const [horario, setHorario] = useState('')

    async function handleCreateNewEvents(event: FormEvent){
        event.preventDefault();
        const data = {
            nomeevento, 
            local,
            diasemana,
            horario,
        } 

        await api.post('/events', data);

        setNomeEvento('')
        setLocal('')
        setDiaSemana('')
        setHorario('')

        alert('Registro cadastrado com sucesso')
    }


    return(
            <Modal isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
                >
                    <button type="button" onClick={onRequestClose} className="react-modal-close">
                        <img src={closeSVG} alt="Fechar modal" />
                    </button>
                    
            <Container onSubmit={handleCreateNewEvents}>
                <h2>Criar evento</h2>
                <h4>Faça o cadastro do evento na sua cidade.
                </h4>

                <input type="text" placeholder="Nome do evento"
                    value={nomeevento}
                    onChange={event => setNomeEvento (event.target.value)}
                />

                <input type="text" placeholder="Local"
                    value={local}
                    onChange={event => setLocal(event.target.value)}
                />

                <input type="text" placeholder="Dia da semana"
                    value={diasemana}
                    onChange={event => setDiaSemana(event.target.value)}
                />

                <input type="text" placeholder="Horário"
                    value={horario}
                    onChange={event => setHorario(event.target.value)}
                />
                

                <button type="submit">Finalizar compra</button>
            </Container>
    </Modal>
    )
}