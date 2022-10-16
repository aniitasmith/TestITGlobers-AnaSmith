import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import InstagramSection from './Components/InstagramSection/InstagramSection';
import Newsletter from './Components/Newsletter/Newsletter';
import HorizontalSection from './Components/HorizontalSection/HorizontalSection';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <HorizontalSection image='Section1' title='Pufi RAIN' showButton='true'> </HorizontalSection>
        <HorizontalSection image='Section2' title='Pufi PUFF' showButton='false' inverted={true}> </HorizontalSection>
        <HorizontalSection image='Section3' title='Pufi CART' showButton='false'> </HorizontalSection>
        <HorizontalSection image='Section4' title='Pufi NAP' showButton='false' inverted={true}> </HorizontalSection>
        <InstagramSection></InstagramSection>
        <Newsletter></Newsletter>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
