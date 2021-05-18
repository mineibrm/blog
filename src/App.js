import logo from './logo.svg';
import Blog from './Blog';
import Home from './Home';
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import { Container, CssBaseline, Grid } from '@material-ui/core';

function App() {
  return (
    <div >
      <CssBaseline/>
      <Container maxWidth="lg">
      <Header title="My Artificial Intelligence Blog" />
      <main>
      <Home/>
      </main>
      <Footer title="Congrats you've seen it all." description="Made with love "/>
      </Container>

    </div>
  );
}

export default App;
