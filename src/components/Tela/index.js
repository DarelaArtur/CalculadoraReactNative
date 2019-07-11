import React, { Component } from 'react';
import { connect } from "react-redux";
import { Tela,Result,Calculo,ResultView } from './styles';


 class components extends Component {
  render() {
    const {expressao} = this.props;
    const {result} =this.props;
    //console.tron.log("Tela",expressao,"result",result);
    return (
    <Tela>
        <Calculo>{expressao}</Calculo>
        <ResultView>
          <Result>{result}</Result>
        </ResultView>
    </Tela>
    );
  }
}
// const mapStateToProps = state => ({
//   expressao: state.calculadora.expressao
// });

const mapStateToProps = state => {
  console.tron.log("map", state);
  return { 
    expressao: state.calculadora.expressao,
    result: state.calculadora.result
  }
};

export default 
  connect(
    mapStateToProps,
    null
  )(components);