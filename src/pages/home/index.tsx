import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/_layout/layout';
import { ContainerButtons, ContainerFolderButton, ContainerHeader, ContainerLibraryTab, ContainerTable, ContainerTabs, ContainerTitles, ContainerTrashTab, ContainerVideoButton, Divider, DividerComponent, IconName, TextComponent } from './styled';
import { LuFolder, LuPlayCircle } from "react-icons/lu";
import { VscLibrary, VscTrash } from "react-icons/vsc";

const data = [
  { name: 'Afiliado Master',
    videos: 8,
    size: '7.3 GB',
    lastDate: '30/may/2023'
  },
  { name: 'BeMaster',
    videos: 21,
    size: '1.4 GB',
    lastDate: '22/jun/2022'
  },
  { name: 'Comizzión',
    videos: 10,
    size: '284 MB',
    lastDate: '30/may/2023'
  },
  { name: 'Creador de Contenido',
    videos: 2,
    size: '7.3 GB',
    lastDate: '30/may/2023'
  },
  { name: 'Afiliado Master',
    videos: 8,
    size: '7.3 GB',
    lastDate: '30/may/2023'
  },
  { name: 'BeMaster',
    videos: 21,
    size: '1.4 GB',
    lastDate: '22/jun/2022'
  }
]
const Home = () => {
  /*const navigate = useNavigate();

  const handleSelectFolder = () => {
    navigate('/');
  };*/

  return (
    <Layout>
      <>
        <ContainerHeader>
          <ContainerTabs>
              <ContainerLibraryTab>
                <VscLibrary id='iconTab'/>
                <span id='textTab'>Biblioteca</span>
                <Divider />
              </ContainerLibraryTab>
              
              <ContainerTrashTab>
                <VscTrash id='iconTab'/>              
                <span id='textTab'>Papelera</span>
            </ContainerTrashTab>
          </ContainerTabs>
          <ContainerButtons>
            <ContainerFolderButton>
              <LuFolder id='iconButton'/>
              <span id='textButton'>Nueva carpeta</span>
            </ContainerFolderButton>
            <ContainerVideoButton>
              <LuPlayCircle id='iconButton'/>
              <span id='textButton'>Nuevo video</span>
            </ContainerVideoButton>
          </ContainerButtons>
        </ContainerHeader>
        <ContainerTable>
          <ContainerTitles id='titles'>
            <input type='checkbox' />
            <TextComponent> Nombre </TextComponent>
            <TextComponent id='center'> Videos </TextComponent>
            <TextComponent id='center'> Tamaño </TextComponent>
            <TextComponent id='center'> Última modificación </TextComponent>
          </ContainerTitles>
          <DividerComponent />
          {data?.map((item) => (
            <>
              <ContainerTitles id='data'>
              <input type='checkbox' />
              <TextComponent> <IconName/> {item.name} </TextComponent>
              <TextComponent id='center'> {item.videos} </TextComponent>
              <TextComponent id='center'> {item.size} </TextComponent>
              <TextComponent id='center'> {item.lastDate} </TextComponent>
              </ContainerTitles>
              <DividerComponent />
            </>
          ))}
        </ContainerTable>
        </>
    </Layout>
  )
};

export default Home;