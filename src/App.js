import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import Main from './Pages/dashboard/main.js';
import Workspace from "@/Pages/dashboard/workspace/main/main.js";
import Editor from "@/Pages/dashboard/Editor/main/Main.js";
import EditorPanel from "@/Pages/dashboard/Editor/editorpanel/EditorPanel.js";
import DataManager from "@/Pages/dashboard/DataManager/main/Main.js";
import Preview from "@/Pages/dashboard/Preview/Main.js";
import CodePanel from "@/Pages/dashboard/Editor/codeScreen/CodePanel/index";
import Home from "@/Pages/home/main.js";
import MainContent from "./Components/workspace/mainContent/MainContent.js";
import ProjectSettings from "./Components/workspace/projectsettings/ProjectsSettings.js";
import WorkspaceSettings from "./Components/workspace/workspacesettings/WorkspaceSettings.js";
import Cost from "@/Pages/translation/cost/cost.js";
import Translate from "@/Pages/translation/translater/translater.js";
import Documentation from "@/Pages/dashboard/help/Documentation.js";
import Store from "./Components/workspace/Store/Store";
import Landing from "./Pages/dashboard/LandingPage/Landing"
// BNI
// import Web from './Pages/dashboard/web/src/views/home.js';
//
// import Playground01 from './Pages/dashboard/web/public/playground_assets/*';
// ??editor
// import Navbar from './Components/navbar.js';
// <Route path='/playground_assets/*' element={<Playground01/>}/>
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error or not found</h1>,
  },
  {
    path: "/home",
    element: <Landing />,
    errorElement: <h1>Error or not found</h1>,
  },
  {
    path: "/workspace/templates",
    element: <Workspace />,
    children: [
      {
        path: "",
        element: <MainContent />,
      },
      {
        path: ":id/ProjectSettings",
        element: <ProjectSettings />,
      },
      {
        path: "WorkspaceSettings",
        element: <WorkspaceSettings />,
      },
      {
        path: "store",
        element: <Store />,
      },
    ],
  },
  {
    path: "/editor",
    element: <Editor />,
    children: [
      {
        path: "/editor/:id",
        element: <EditorPanel />,
      },
      {
        path: "/editor/database",
        element: <DataManager />,
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
        path: "/editor/code",
        element: <CodePanel />,
      },
    ],
  },
  {
    path: "/cost",
    element: <Cost />,
  },
  {
    path: "/preview",
    element: <Preview />,
  },
  {
    path: "/translate",
    element: <Translate />,
  },
  {
    path: "/en/category/getting-started",
    element: <Documentation />,
  },
]);

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
