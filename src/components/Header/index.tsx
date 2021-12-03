
import logoImg from '../../assets/logo.png'
import Img from '../../assets/back2.png'
import { Content } from './styles'

interface HeaderProps {
  onOpenNewModal: () => void;
}

export function Header({ onOpenNewModal }: HeaderProps) {
    return(
            <Content>
              <img src={logoImg} height="270px" width="520px" alt="eventlistener" /> 
              {/* <img src={Img} height="270px" width="520px" alt="eventlistener" />  */}

              <button type="button" onClick={onOpenNewModal}>
                Criar evento
              </button>
            </Content>
    )
}