import { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard';
import { NewTicketModel } from './components/NewTicketModel';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  
  return (
    <div className="App">
      <Header onOpenNewModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTicketModel isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </div>
  );
}

export default App;
