import styled from "styled-components/native";

export const ViewTecla     = styled.View`
display:flex
flex-wrap: wrap;
flex-direction: row 
`;
export const ViewNum       = styled.View`
display:flex;

flex-direction: row;
flex-wrap: wrap;
width:330px
`;
export const TeclaNum      = styled.TouchableOpacity`
background-color:#d4d4d4
width:75;
height:75px;
border-radius:34
align-items:center
justify-content:center
margin: 15px;
`;
export const TeclaResult   = styled.TouchableOpacity`
width:69px;
height:69px;
border:2px solid #50526A;
border-radius:34
align-items:center
justify-content:center
margin:15px
`;
export const ResultElement = styled.Text`
font-weight:bold
font-size:20px;
color:#50526A
`;
export const ViewOpe       = styled.View`
display:flex
flex-direction: column;
`;

export const TeclaOpe      = styled.TouchableOpacity`
background-color:#BE60E0
width:75px;
height:75px;
border-radius:21
align-items:center
justify-content:center
color:white
margin: 17px 10px 10px 0px;
`; 
export const NumElement    = styled.Text`
font-weight:bold
font-size:20px;
color:#50526A
`;
export const OpeElement    = styled.Text`
font-weight:bold
color: white
font-size:20px;
`;

