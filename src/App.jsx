import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';

import { LastCheckedProvider } from '@/context/LastCheckedContext';

function App() {
  return (
    <LastCheckedProvider>
      <Header />
      <Container />
      <Footer />
    </LastCheckedProvider>
  );
}

export default App;
