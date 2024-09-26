import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainSection from "./components/mainSection/MainSection";
// import { DataProvider } from "./components/context/UseContext";
function App() {
  return (
    <>
      {/* <DataProvider> */}
        <Header />
        <MainSection />
        <Footer />
      {/* </DataProvider> */}
    </>
  );
}

export default App;
