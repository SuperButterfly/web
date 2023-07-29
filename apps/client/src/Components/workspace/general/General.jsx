import './general.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateWorkspace, deleteWorkspace } from '@/redux/actions/workspaces'
import { useEffect, useState } from 'react'
// import { workspaceSlices as workspaceSliceGeneral } from '../../../../src/redux/slices/workspaceSlices';

const props = {
  workspace: 'current workspace name',
  isDisabled: true
}

function General() {
  const [dataName, setDataName] = useState({ name: '' })
  // const [workspaceid, setWorkspaceId] = useState('')
  const dispatch = useDispatch()

  const workspaceSelected = useSelector(
    (state) => state.workspace.workspaceSelected
  )
  const workspaces = useSelector((state) => state.workspace.workspaces)

  useEffect(() => {
    // console.log(workspaces)
    // setWorkspaceId(()=> localStorage.getItem("workspaceid"))
    // console.log(workspaceid)
    console.log('workspaceSelected', workspaceSelected.name)
  }, [])

  const handleSave = async () => {
    // await dispatch(updateWorkspace())
    // let id = localStorage.getItem("workspaceid")
    try {
      await dispatch(updateWorkspace(workspaceSelected.id, dataName))
    } catch (e) {
      console.log(e.message)
    }
    window.location.reload()
  }

  const handledelete = async () => {
    // let id = localStorage.getItem("workspaceid")
    try {
      await dispatch(deleteWorkspace(workspaceSelected.id))
    } catch (e) {
      console.log(e.message)
    }
    console.log('delete ok')
    window.location.reload()
  }

  const handleNameChange = (e) => {
    setDataName({ name: e.target.value })
  }
  return (
    <div className="general-container">
      <div className="general-container1">
        <div className="general-container2">
          <label className="general-text">Workspace name</label>
          <input
            type="text"
            data-property="name"
            className="general-textinput"
            onChange={handleNameChange}
            placeholder={workspaceSelected.name}
            value={dataName.name}
          />
        </div>
        <button className="general-save-button" onClick={handleSave}>
          Save Changes
        </button>
      </div>
      <div className="general-container3">
        <b className="general-text">Delete workspace</b>
        <p className="general-text1">
          You cannot delete workspaces with active subscriptions or the last
          workspace in the list.
        </p>
        <button
          className="general-button"
          disabled={workspaces.length == 1 ? props.isDisabled : null}
          onClick={handledelete}
        >
          Delete workspace
        </button>
      </div>
    </div>
  )
}

export default General
