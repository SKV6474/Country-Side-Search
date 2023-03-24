import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  padding: 40px 0;
  max-width: 768px;
  margin: 0 auto;
  color: #3e4c59;
  @media screen and (max-width: 768px) {
    padding: 40px 10px;
  }
`;

export const Heading = styled.h1`
  text-align: center;
  @media screen and (max-width: 756px) {
    font-size: 28px;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #ced4da;
  font-size: 16px;
  margin-bottom: 30px;
  border-radius: 10px;
  :focus {
    outline: 3px solid #007bff60;
    border: 1px solid #007bff95;
  }
`;

export const Countries = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 756px) {
    justify-content: center;
  }
`;

export const CardContainer = styled.div`
  width: 350px;
  height: 125px;
  background-color: #ebf2fc;
  border-radius: 5px;
  margin: 10px;
  display: flex;
  align-items: center;
`;

export const CardDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
`;

export const ChildDiv = styled.div`
  margin-left: 20px;
  display: flex;
  flex-flow: column;
`;

export const FlagDiv = styled.div`
  width: 70px;
  display: flex;
  align-items: center;
`;

export const Flag = styled.img`
  width: 70px;
  height: 70px;
`;
