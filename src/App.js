import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import Main from './Pages/dashboard/main.js';
import Workspace from '@/Pages/dashboard/workspace/main/main.js';
import Editor from '@/Pages/dashboard/Editor/main/Main.js';
import ProjectTools from "@/Pages/dashboard/Editor/projectTools";
import DataManager from '@/Pages/dashboard/DataManager/main/Main.js';
import CodeScreen from '@/Pages/dashboard/Editor/codeScreen';
import Home from '@/Pages/home/main.js';
import MainContent from './Components/workspace/mainContent/MainContent.js';
import ProjectSettings from './Components/workspace/projectsettings/ProjectsSettings.js';
import WorkspaceSettings from './Components/workspace/workspacesettings/WorkspaceSettings.js';
import Cost from '@/Pages/translation/cost/cost.js';
import Translate from '@/Pages/translation/translater/translater.js';
import Documentation from '@/Pages/dashboard/help/Documentation.js';
// BNI
// import Web from './Pages/dashboard/web/src/views/home.js';
//
// import Playground01 from './Pages/dashboard/web/public/playground_assets/*';
// ??editor
// import Navbar from './Components/navbar.js';
// <Route path='/playground_assets/*' element={<Playground01/>}/>
const router = createBrowserRouter([
  { 
    path:'/', 
    element: <Home/>,
    errorElement: <h1>Error or not found</h1>
  },
  { 
    path:'/workspace/templates', 
    element:<Workspace/>,
    children: [
      {
        path: '',
        element: <MainContent/>
      },
      {
        path: ':id/ProjectSettings',
        element: <ProjectSettings />
      },
      {
        path: 'WorkspaceSettings',
        element: <WorkspaceSettings />
      },
    ]
  },
  { 
    path:'/editor', 
    element:<Editor/>,
    children: [
      {
        path: '/editor/:id',
        element: <ProjectTools/>
      },
      {
        path: '/editor/database',
        element: <DataManager/>,
        // children: [
        //   {
        //     path: '/editor/database/table',
        //     element: <PONER TABLA />
        //   },
        //   {
        //     path: '/editor/database/columns',
        //     element: <EDITOR DE COLUMNAS />
        //   }
        // ]
      },
      {
        path: '/editor/code',
        element: <CodeScreen/>
      }
    ]
  },
  {
    path:'/cost', 
    element:<Cost/>
    
  },
   {
    path:'/translate', 
    element:<Translate/>
    
  },
  {
    path:'/en/category/getting-started',
    element:<Documentation/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/*
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/workspace/template' element={<Workspace/>}/> 
          <Route path='/editor' element={<Editor/>}/>
        </Routes>
      </BrowserRouter>
      */}
    </>
  );
}

export default App;
