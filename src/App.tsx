import Countrylist from "./components/Countrylist/Countrylist";
import Searchbar from "./components/Searchbar";
import { Container, Heading } from "./StyledComponents/styledcomponent";
import { Provider } from "mobx-react";
import { CountryLists } from "./Store/Store";

function App() {
  return (
    <>
      <Container>
        <Heading>Find the Population of a Country</Heading>
        <Searchbar />
        {/* use when you use multiple stores and don't want to send props to the
        component */}
        <Provider CountryLists={CountryLists}>
          <Countrylist />
        </Provider>
        {/* <Countrylist /> */}
      </Container>
    </>
  );
}

export default App;
