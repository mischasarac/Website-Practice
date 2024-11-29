// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
import Button from "./components/Button";
import LandingImage from "./components/LandingImage";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";

function App() {
  // let items = ["New York", "Los Angeles", "Chicago", "Houston", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}

      {/* <Alert>Yo yo yo</Alert> */}
      <Header />
      <LandingImage>
        <AboutMe />
      </LandingImage>
    </div>
  );
}

export default App;
