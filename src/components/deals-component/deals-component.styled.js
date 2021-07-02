// vendors
import styled from "styled-components";

export const TopBarContainerStyled = styled.div`
  padding: 20px 0;

  width: 100%;
  top: 0;
  left: 0;
  transition: 0.6s ease all;
  background: #fff;
  box-shadow: 0 3px 7px 0 rgb(0 0 0 / 10%);
  z-index: 99;
`;

export const WrapperContainer = styled.div`
  background: #d2d2d2;
`;

export const DealsListLeftContainer = styled.div`
  float: left;
  background: #d2d2d2;
  margin: 20px;
  padding: 40px;
  width: 65%;
  > div > ul {
    padding-left: 0;
  }

  > div > select {
    text-align: left;
    display: inline-block;
    padding: 10px;
    width: 20%;
    margin-bottom: 15px;
  }
  > div > input {
    margin: 0 10px;
    padding: 11px;
  }
  > div > ul > li > a {
    float: left;
  }
  > div > ul > li > button {
    float: right;
    padding: 11px;
    background: cornflowerblue;
    border: 0;
    border-radius: 3px;
    width: 10%;
    cursor: pointer;
  }
  > div > ul > li {
    list-style-type: none;
    text-align: left;
    padding: 20px;
    padding-left: 0;
    clear: both;
  }
  > div > button {
    padding: 11px;
    background: cornflowerblue;
    border: 0;
    border-radius: 3px;
    width: 10%;
    cursor: pointer;
  }
`;

export const DealsSummaryRightContainer = styled.div`
  float: right;
  background: #d2d2d2;
  margin: 20px;
  padding: 40px;
  width: 18%;
  > div > ul {
    padding-left: 0;
  }
  > div > ul > li {
    list-style-type: none;
    text-align: left;
    padding: 10px;
    padding-left: 0;
  }
  > div > select {
    text-align: left;
    display: block;
    padding: 10px;
    margin-bottom: 15px;
  }
`;

export const InputWrapperContainer = styled.div`
  margin: 30px 30px 30px 0;
  text-align: left;
  display: block;
  > input {
    margin-right: 20px;
    padding: 10px;
  }
  > button {
    padding: 11px;
    background: cornflowerblue;
    border: 0;
    border-radius: 3px;
    width: 20%;
  }
`;

export const DealsListTopContainer = styled.div`
  text-align: center;
`;
