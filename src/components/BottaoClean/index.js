import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { creators as ActionsCalculadora } from "../../store/ducks/calculadora";
import {ButtonView ,CleanButton,TextButton} from './styles';

class BottaoClean extends Component {
  render() {
    return (
        <ButtonView>
            <CleanButton onPress={() =>this.props.cleanNumeros()}>
                <TextButton>CE</TextButton>
            </CleanButton>
        </ButtonView>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionsCalculadora, dispatch);
export default 
  connect(null,mapDispatchToProps)(BottaoClean);
