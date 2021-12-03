import { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from "./styles";


interface IEvents {
    
  id: string;
  nomeevento: string;
  local: string;
  diasemana: string;
  horario: string;
  curtir: string;
  descurtir: string;
}

export function EventTable() {
    const [Events, setEvents] = useState<IEvents[]>([])

    useEffect(() => {
        api.get('Events')
        .then(response => setEvents(response.data))
    }, [])

    async function botaoApagar(id: string) {
      await api.delete <IEvents> (`/events/${id}`)
    } 

    return(
        <Container>
            <table>
            <thead>
                    <tr>
                        <th>Nome do evento</th>
                        <th>Local</th>
                        <th>Data do registro</th>
                        <th>Horario do evento</th>
                    </tr>
                </thead>

                <tbody>
                    {Events.map(Events => (
                        <>
                        <tr>
                            <td>{Events.nomeevento}</td>
                            <td>{Events.local}</td>
                            <td>{Events.diasemana}</td>
                            <td>{Events.horario}</td>

                            <button onClick={() => 
                              botaoApagar(Events.id)
                              }>Apagar evento
                            </button>

                            <button onClick={(async () => {
                            await api.post(`/events/curtir/${Events.id}`)
                            api.get('/events').then( m => {setEvents(m.data)})
                        })}>
                            Gostei
                            </button>
                            <span>{Events.curtir}</span>

                            <button onClick={(async () => {
                            await api.post(`/events/descurtir/${Events.id}`)
                            api.get('/events').then( m => {setEvents(m.data)})
                        })}>
                            Não Gostei
                            </button>
                            <span>{Events.descurtir}</span>

                        </tr>
                        </>
                        
                    ))}
                </tbody>

                
            </table>
        </Container>
    )
}