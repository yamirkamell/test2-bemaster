import styled from 'styled-components';
import { LuFolder } from "react-icons/lu";

const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

const ContainerTabs = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 785px) {
        #textTab{
            display: none;
        }
    } 
`;

const ContainerLibraryTab = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    #iconTab, #textTab{
        color: #4a00ff;
        font-size: 14px;
    }
    #textTab{
        margin-left: 10px;
    }
`;

const Divider = styled.div`
    position: absolute;
    top: 80px;
    left: 257px;
    border-top: 2px solid #4a00ff;
    width: 90px;
    @media (max-width: 785px) {
        width: 20px;
    } 
    @media (max-width: 720px) {
        left: 147px;
    } 
`


const ContainerTrashTab = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    #iconTab, #textTab{
        font-size: 14px;
    }
    #textTab{
        margin-left: 5px;
    }
`;

const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 785px) {
        #textButton{
            display: none;
        }
    } 
`;

const ContainerFolderButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #f4f4f4; 
    padding: 7px 15px;
    border-radius: 5px;
    margin-top: 22px;
    cursor: pointer;
    #iconButton, #textButton{
        font-size: 14px;
    }
    #textButton{
        margin-left: 5px;
    }
`;

const ContainerVideoButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #4a00ff; 
    padding: 7px 15px;
    border-radius: 5px;
    margin-top: 22px;
    cursor: pointer;
    margin-left: 15px;
    #iconButton, #textButton{
        color: #ffff;
        font-size: 14px;
    }
    #textButton{
        margin-left: 5px;
    }
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

const IconName = styled(LuFolder)`
  padding-right: 10px;
  color: #4a00ff;
`;

export {
    ContainerHeader, 
    ContainerTabs,
    ContainerLibraryTab,
    Divider,
    ContainerTrashTab,
    ContainerButtons,
    ContainerFolderButton,
    ContainerVideoButton,
    ContainerTable,
    ContainerTitles,
    TextComponent,
    DividerComponent,
    IconName
};
    