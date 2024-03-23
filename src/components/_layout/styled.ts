import styled from 'styled-components';

const ContainerMain = styled.div`
    background-color: #f4f4f4;
    display: flex;
    flex-direction: row;
    height: 100vh;
`;

const ContainerChildren = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 20px 20px 20px 0px;
    padding: 20px 40px;
    background-color: #FFFF;
    border-radius: 10px;
`;

export {
    ContainerMain,
    ContainerChildren
  };
  