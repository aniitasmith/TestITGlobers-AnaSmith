import './App.css';
import Footer from './Components/Footer/Footer';
import Content from './Components/Content/Content';
import InstagramSection from './Components/InstagramSection/InstagramSection';
import Newsletter from './Components/Newsletter/Newsletter';


function App() {
  return (
    <div className="App">
      <Content></Content>
      <InstagramSection></InstagramSection>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
