import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Main from './Pages/dashboard/main';
import Workspace from '@/Pages/dashboard/workspace/main/main'
import Editor from '@/Pages/dashboard/Editor/main/Main'
import EditorPanel from '@/Pages/dashboard/Editor/editorpanel/EditorPanel'
import File from './Pages/dashboard/Editor/componentsCommunityScreen/fileDetails/FileDetails'
import CodeScreen from '@/Pages/dashboard/Editor/codeScreen'
import Home from '@/Pages/home/main'
import MainContent from './Components/workspace/mainContent/MainContent'
import ProjectSettings from './Components/workspace/projectsettings/ProjectsSettings'
import WorkspaceSettings from './Components/workspace/workspacesettings/WorkspaceSettings'
import Cost from '@/Pages/translation/cost/cost'
import Translate from '@/Pages/translation/translater/translater'
import Documentation from '@/Pages/dashboard/help/Documentation'
import Store from './Components/workspace/Store/Store'
import Landing from './Pages/dashboard/LandingPage/Landing'
import NuevoFront from './Pages/dashboard/Editor/codeScreen/visual-front-30134/NuevoFront'
import Diagram from './Pages/dashboard/Editor/codeScreen/visual-front-30134/Diagram'
import Register from './Pages/dashboard/Editor/Register/Register'
import Login from './Pages/dashboard/Editor/Login/Login'
import SelectionForm from './Components/docsia/frameworks-options/FrameworksOp'
import SearchBar from './Components/SearchBar/SearchBar'
import SearchPage from './Components/SearchPage/SearchPage'
import ViewJson from './Components/docsia/view-json/ViewJson'

// BNI
// import Web from './Pages/dashboard/web/src/views/home';
//
// import Playground01 from './Pages/dashboard/web/public/playground_assets/*';
// ??editor
// import Navbar from './Components/navbar';
// <Route path='/playground_assets/*' element={<Playground01/>}/>
const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Home />,
  //   errorElement: <h1>Error or not found</h1>
  // },
  {
    path: '/home',
    element: <Landing />,
    errorElement: <h1>Error or not found</h1>
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <h1>Error or not found</h1>
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <h1>Error or not found</h1>
  },
  {
    path: '/',
    element: <Workspace />,
    children: [
      {
        path: '',
        element: <MainContent />
      },
      {
        path: ':id/ProjectSettings',
        element: <ProjectSettings />
      },
      {
        path: 'WorkspaceSettings',
        element: <WorkspaceSettings />
      },
      {
        path: 'store',
        element: <Store />
      },
      {
        path: '/store/:id',
        element: <File />
      }
    ]
  },
  {
    path: '/editor',
    element: <Editor />,
    children: [
      {
        path: '/editor/:id',
        element: <EditorPanel />
      }

      /*{
        path: '/editor/database',
        element: <DataManager />
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
      },*/
    ]
  },

  {
    path: '/code',
    element: <CodeScreen />
  },
  {
    path: '/cost',
    element: <Cost />
  },
  {
    path: '/preview',
    element: <SelectionForm />
  },
  {
    path: '/preview-json',
    element: <ViewJson />
  },
  {
    path: '/translate',
    element: <Translate />
  },
  {
    path: '/en/category/getting-started',
    element: <Documentation />
  },
  {
    path: '/front',
    element: <NuevoFront />
  },
  {
    path: '/diagram',
    element: <Diagram />
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
  )
}

export default App
