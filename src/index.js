import "./config/ReactotronConfig";
import React, { Component } from 'react';

  import { Container} from './styles';
  import { Provider } from "react-redux";
  import Tela  from "./components/Tela";
  import Teclado from "./components/Teclado";
  import CleanButton from"./components/BottaoClean"
  import store from "./store"
export default class src extends Component {
render() {
    return (
      <Provider store={store}>
    <Container>
      <Tela />
      <Teclado />
      <CleanButton />   
    </Container>
    </Provider>
    );

  }
}
