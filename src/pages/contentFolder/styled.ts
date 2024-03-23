import styled from 'styled-components';
import { LuPlayCircle } from "react-icons/lu";
import { MdOutlineArrowBack } from "react-icons/md";

const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`
const ContainerLogo = styled.div`
    background-color: #4a00ff;
    display: flex; 
    align-items: center;
    justify-content: center; 
    border-radius: 5px;
`;

const ContainerBreadCrumb = styled.div`
    margin-left: 10px;
`;

const IconGoBack = styled(MdOutlineArrowBack)`
    width: 30px;
    height: 30px;
    color: #ffff;
`;

const ContainerTable = styled.div`
    margin-top: 50px;
    width: 100%;
    @media (max-width: 990px) {
        overflow-x: scroll;
    } 
    #titles{
        span{
            font-weight: bold;
        }
    }
    #data{
        cursor: pointer;
    }

`;

const ContainerTitles = styled.div`
    display: grid;
    grid-template-columns: 4% 54% 10% 10% 22%;
    align-items: center; 
    width: 100%;
    #center{
    text-align: center;
    }
    @media (max-width: 990px) {
    width: 120%;
    } 
    @media (max-width: 830px) {
    width: 160%;
    } 
    @media (max-width: 630px) {
    width: 220%;
    } 
    @media (max-width: 440px) {
    width: 280%;
    } 
`;

const TextComponent = styled.span`
    text-align: start;
`;

const DividerComponent = styled.hr`
  width: 100%;
  border: 1px solid #f4f4f4;
  @media (max-width: 990px) {
    width: 120%;
  } 
  @media (max-width: 830px) {
    width: 160%;
  } 
  @media (max-width: 630px) {
    width: 220%;
  } 
  @media (max-width: 440px) {
    width: 280%;
  } 
`;

const IconName = styled(LuPlayCircle)`
  padding-right: 10px;
  color: #4a00ff;
`;

export {
    ContainerHeader, 
    ContainerLogo,
    IconGoBack,
    ContainerBreadCrumb,
    ContainerTable,
    ContainerTitles,
    TextComponent,
    DividerComponent,
    IconName
};
    