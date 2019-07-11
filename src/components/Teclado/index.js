import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { creators as ActionsCalculadora } from "../../store/ducks/calculadora";
import {
    ViewTecla,
    ViewNum,TeclaNum,
    TeclaResult,
    ResultElement,
    ViewOpe,
    TeclaOpe,
    OpeElement,
    NumElement
 } from './styles';

 class Teclado extends Component {
  render() {
    return (
 <ViewTecla>
    <ViewNum>
        <TeclaNum onPress={() =>this.props.getNumeros("1")}>
            <NumElement>1</NumElement>    
        </TeclaNum> 
        <TeclaNum onPress={() =>this.props.getNumeros("2")}>
            <NumElement>2</NumElement>     
        </TeclaNum> 
        <TeclaNum onPress={() =>this.props.getNumeros("3")}>
            <NumElement>3</NumElement>     
        </TeclaNum> 
        <TeclaNum onPress={() =>this.props.getNumeros("4")}>
            <NumElement>4</NumElement>      
        </TeclaNum> 
        <TeclaNum onPress={() =>this.props.getNumeros("5")}>
            <NumElement>5</NumElement>     
        </TeclaNum> 
        <TeclaNum onPress={() =>this.props.getNumeros("6")}>
            <NumElement>6</NumElement>     
        </TeclaNum> 
        <TeclaNum onPress={() =>this.props.getNumeros("7")}>
            <NumElement>7</NumElement>     
        </TeclaNum> 
        <TeclaNum onPress={() =>this.props.getNumeros("8")}>
            <NumElement>8</NumElement>     
        </TeclaNum> 
        <TeclaNum onPress={() =>this.props.getNumeros("9")}>
            <NumElement>9</NumElement>     
        </TeclaNum> 
        <TeclaNum onPress={() =>this.props.getNumeros(".")}>
            <NumElement>.</NumElement>     
        </TeclaNum> 
        <TeclaNum onPress={() =>this.props.getNumeros("0")}> 
            <NumElement>0</NumElement> 
        </TeclaNum>
        <TeclaResult onPress={() =>this.props.doOperations()}>
            <ResultElement>=</ResultElement>
        </TeclaResult>
        
    </ViewNum>
    <ViewOpe>
        <TeclaOpe onPress={() =>this.props.getNumeros("+")}>
            <OpeElement>+</OpeElement> 
        </TeclaOpe>
        <TeclaOpe onPress={() =>this.props.getNumeros("-")}>
            <OpeElement>-</OpeElement>
        </TeclaOpe>
        <TeclaOpe onPress={() =>this.props.getNumeros("*")}>
            <OpeElement>*</OpeElement>
        </TeclaOpe >
        <TeclaOpe onPress={() =>this.props.getNumeros("/")}>
            <OpeElement>/</OpeElement>
        </TeclaOpe>
   </ViewOpe> 
</ViewTecla> 
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionsCalculadora, dispatch);
export default 
  connect(null,mapDispatchToProps)(Teclado);
