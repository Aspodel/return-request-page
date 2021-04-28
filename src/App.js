import "./App.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import ReturnRequest from "./components/ReturnRequest";

const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
`;

const theme = {
  primary: "#2B74E4",
  stoke: "#828282",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <ReturnRequest />
      </div>
    </ThemeProvider>
  );
}

export default App;
