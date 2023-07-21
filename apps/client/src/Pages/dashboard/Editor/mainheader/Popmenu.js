import './popmenu.css'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PopsubmenuItem from './PopSubmenuItem'
import ArrowNext from '../../../../assets/svgs/ArrowNext'

const Popmenu = ({ closeMenu1, closeModal1 }) => {
  const { projectSelected } = useSelector((state) => state.project)
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    const name = e.target.getAttribute('name')
    if (name) {
      switch (name) {
        case 'burguer':
          console.log('burguer')
          closeMenu1(true)
          break
        case 'Dashboard':
          console.log('Dashboard')
          navigate('/')
          break
        case 'PSettings':
          console.log('PSettings')
          navigate(`/${projectSelected.id}/ProjectSettings`)
          break
        case 'Edit':
          console.log('Edit')
          break
        case 'Edit1':
          console.log('Edit1')
          break
        case 'Edit2':
          console.log('Edit2')
          break
        case 'View':
          console.log('View')
          break
        case 'Preview':
          console.log('Preview')
          navigate('/preview') // `/${projectSelected.id}/ProjectSettings`)
          break
        case 'Publish':
          console.log('Publish')
          break
        case 'Import':
          console.log('Import')
          break
        case 'Teleport':
          console.log('Teleport')
          closeModal1(true)
          closeMenu1(false)
          break
        case 'Figma':
          console.log('Figma')
          break
        case 'Help':
          console.log('Help')
          break
        case 'Help item 1':
          console.log('Help1')
          break
        case 'Help item 2':
          console.log('Help2')
          break
        case 'Help item 3':
          console.log('Help3')
          break
        case 'Account':
          console.log('Account')
          break
        case 'ASettings':
          console.log('ASettings')
          break
        case 'Logout':
          console.log('Logout')
          break
        default:
          console.log('default: ', name)
          closeMenu1(false)
          break
      }
    } else closeMenu1(false)
  }
  useEffect(() => {
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className="popmenu-menu">
      <div className="popmenu-menu-item" onClick={handleClick} name="Dashboard">
        <span name="Dashboard">Dashboard</span>
      </div>
      <div
        name="PSettings"
        className="popmenu-menu-item1"
        onClick={handleClick}
      >
        <span name="PSettings">Project Settings</span>
      </div>
      <div name="File" className="popmenu-menu-item2" onClick={handleClick}>
        <span name="File">File</span>
        <span className="popmenu-arrow" name="File">
          <ArrowNext width={14} height={14} />
        </span>
        <div className="popmenu-submenu-item2 ">
          <PopsubmenuItem
            name="SaveLocalCopy"
            label={'Save local copy'}
            hadleClick={handleClick}
          />
          <PopsubmenuItem
            name="SaveToVersionHistory"
            label={'Save to version history'}
            hadleClick={handleClick}
          />
          <PopsubmenuItem
            name="ShowVersionHistory"
            label={'Show version history'}
            hadleClick={handleClick}
          />
          <PopsubmenuItem
            name="Export"
            label={'Export'}
            hadleClick={handleClick}
          />
          <PopsubmenuItem
            name="ExportFrameToPDF"
            label={'Export frame to PDF'}
            hadleClick={handleClick}
          />
        </div>
      </div>
      <div name="Edit" className="popmenu-menu-item3" onClick={handleClick}>
        <span name="Edit">Edit</span>
        <span className="popmenu-arrow" name="Edit">
          <ArrowNext width={14} height={14} />
        </span>
        <div className="popmenu-submenu-item3">
          <PopsubmenuItem
            name="Undo"
            label={'Undo'}
            hadleClick={handleClick}
            shortcut={'Ctrl+Z'}
          />
          <PopsubmenuItem
            name="Redo"
            label={'Redo'}
            hadleClick={handleClick}
            shortcut={'Ctrl+Y'}
          />
          <hr className="divisor" />
          <PopsubmenuItem
            name="CopyAs"
            label={'Copy as'}
            hadleClick={handleClick}
            shortcut={<ArrowNext width={14} height={14} />}
          />
          <PopsubmenuItem
            name="PasteOverSelection"
            label={'Paste over selection'}
            hadleClick={handleClick}
            shortcut={'Ctrl+Shift+V'}
          />
          <PopsubmenuItem
            name="PasteToReplace"
            label={'Paste to replace'}
            hadleClick={handleClick}
            shortcut={'Ctrl+Shift+R'}
          />
          <PopsubmenuItem
            name="Duplicate"
            label={'Duplicate'}
            hadleClick={handleClick}
            shortcut={'Ctrl+D'}
          />
          <PopsubmenuItem
            name="Delete"
            label={'Delete'}
            hadleClick={handleClick}
            shortcut={'Del'}
          />
          <hr className="divisor" />
          <PopsubmenuItem
            name="Find"
            label={'Find...'}
            hadleClick={handleClick}
            shortcut={'Ctrl+F'}
          />
          <PopsubmenuItem
            name="FindNext"
            label={'Find next'}
            hadleClick={handleClick}
            shortcut={'Ctrl+Shift+F'}
          />
          <PopsubmenuItem
            name="FindPrevious"
            label={'Find previous'}
            hadleClick={handleClick}
            shortcut={'Ctrl+Shift+D'}
          />
          <PopsubmenuItem
            name="FindAndReplace"
            label={'Find and replace...'}
            hadleClick={handleClick}
          />
          <hr className="divisor" />
          <PopsubmenuItem
            name="SetDefaultProperties"
            label={'Set default properties'}
            hadleClick={handleClick}
          />
          <PopsubmenuItem
            name="CopyPropierties"
            label={'Copy properties'}
            hadleClick={handleClick}
            shortcut={'Ctrl+Alt+C'}
          />
          <PopsubmenuItem
            name="Paste propierties"
            label={'Paste properties'}
            hadleClick={handleClick}
            shortcut={'Ctrl+Alt+V'}
          />
          <hr className="divisor" />
          <PopsubmenuItem
            name="PickColor"
            label={'Pick color'}
            hadleClick={handleClick}
          />
          <hr className="divisor" />
          <PopsubmenuItem
            name="SelectAll"
            label={'Select all'}
            hadleClick={handleClick}
            shortcut={'Ctrl+A'}
          />
          <PopsubmenuItem
            name="Select none"
            label={'Select none'}
            hadleClick={handleClick}
          />
          <PopsubmenuItem
            name="SelectInverse"
            label={'Select Inverse'}
            hadleClick={handleClick}
            shortcut={'Ctrl+Shift+A'}
          />
          <PopsubmenuItem
            name="SelectAllMatchingLavers"
            label={'Select all matching lavers'}
            hadleClick={handleClick}
            shortcut={'Ctrl+Shift+A'}
          />
        </div>
      </div>
      <div name="View" className="popmenu-menu-item4" onClick={handleClick}>
        <span name="View">View</span>
        <span name="View" className="popmenu-arrow1">
          <ArrowNext width={14} height={14} />
        </span>
        <div className="popmenu-submenu-item4">
          <PopsubmenuItem
            name="PixelGrid"
            label={'Pixel grid'}
            hadleClick={handleClick}
            shortcut={'Shift+´'}
          />
          <PopsubmenuItem
            name="LayoutGrids"
            label={'Layout grids'}
            hadleClick={handleClick}
            shortcut={'Shift+G'}
          />
          <PopsubmenuItem
            name="Rulers"
            label={'Rulers'}
            hadleClick={handleClick}
            shortcut={'Shift+R'}
          />
          <PopsubmenuItem
            name="ShowSlices"
            label={'Show slices'}
            hadleClick={handleClick}
          />
          <PopsubmenuItem
            name="Comments"
            label={'Comments'}
            hadleClick={handleClick}
            shortcut={'Shift+C'}
          />
          <PopsubmenuItem
            name="Outlines"
            label={'Outlines'}
            hadleClick={handleClick}
            shortcut={<ArrowNext width={14} height={14} />}
          />
          <PopsubmenuItem
            name="PixelPreview"
            label={'Pixel preview'}
            hadleClick={handleClick}
            shortcut={'Ctrl+Shift+P'}
          />
          <PopsubmenuItem
            name="MaskOutlines"
            label={'Mask outlines'}
            hadleClick={handleClick}
          />
          <PopsubmenuItem
            name="FrameOutlines"
            label={'Frame outlines'}
            hadleClick={handleClick}
          />
          <PopsubmenuItem
            name="MemoryUsage"
            label={'Memory usage'}
            hadleClick={handleClick}
          />
          <hr className="divisor" />
          <PopsubmenuItem
            name="ShowHideUi"
            label={'Show/Hide UI'}
            hadleClick={handleClick}
            shortcut={'Ctrl+/'}
          />
          <PopsubmenuItem
            name="MultiplayerCursors"
            label={'Multiplayer cursors'}
            hadleClick={handleClick}
            shortcut={'Ctrl+Alt+/'}
          />
          <PopsubmenuItem
            name="OpenDevMode"
            label={'Open dev mode'}
            hadleClick={handleClick}
            shortcut={'Shift+D'}
          />
          <PopsubmenuItem
            name="Panels"
            label={'Panels'}
            hadleClick={handleClick}
            shortcut={<ArrowNext width={14} height={14} />}
          />
          <hr className="divisor" />
          <PopsubmenuItem
            name="ZoomIn"
            label={'Zoom in'}
            hadleClick={handleClick}
            shortcut={'Ctrl++'}
          />
          <PopsubmenuItem
            name="ZoomOut"
            label={'Zoom Out'}
            hadleClick={handleClick}
            shortcut={'Ctrl+-'}
          />
          <PopsubmenuItem
            name="ZoomTo100"
            label={'Zoom to 100%'}
            hadleClick={handleClick}
            shortcut={'Ctrl+0'}
          />
          <PopsubmenuItem
            name="ZoomToFit"
            label={'Zoom to fit'}
            hadleClick={handleClick}
            shortcut={'Shift+1'}
          />
          <PopsubmenuItem
            name="ZoomToSelection"
            label={'Zoom to selection'}
            hadleClick={handleClick}
            shortcut={'Shift+2'}
          />
          <hr className="divisor" />
          <PopsubmenuItem
            name="PreviousPage"
            label={'Previous page'}
            hadleClick={handleClick}
            shortcut={'Page Up'}
          />
        </div>
      </div>
      <div name="Object" className="popmenu-menu-item5" onClick={handleClick}>
        <span name="Object">Object</span>
        <span name="Object" className="popmenu-arrow2">
          <ArrowNext width={14} height={14} />
        </span>
        <div className="popmenu-submenu-item5">
          <PopsubmenuItem
            name="GroupSelection"
            label={'Group selection'}
            hadleClick={handleClick}
            shortcut={'Ctrl+G'}
          />
          <PopsubmenuItem
            name="WrapInNewSection"
            label={'Wrap new section'}
            hadleClick={handleClick}
            shortcut={'Ctrl+S'}
          />
          <PopsubmenuItem
            name="ConvertToSection"
            label={'Convert to section'}
            hadleClick={handleClick}
            shortcut={''}
          />
          <PopsubmenuItem
            name="ConvertToFrame"
            label={'Convert to frame'}
            hadleClick={handleClick}
            shortcut={''}
          />
          <PopsubmenuItem
            name="FrameSelection"
            label={'Frame selection'}
            hadleClick={handleClick}
            shortcut={'Ctrl+Aly+G'}
          />
          <PopsubmenuItem
            name="UngroupSelection"
            label={'Ungroup selection'}
            hadleClick={handleClick}
            shortcut={'Ctrl+<'}
          />
          <PopsubmenuItem
            name="UseAsMask"
            label={'Use as mask'}
            hadleClick={handleClick}
            shortcut={'Ctrl+Alt+M'}
          />
          <PopsubmenuItem
            name="SetAsThumbnail"
            label={'Set as thumbnail'}
            hadleClick={handleClick}
            shortcut={''}
          />
          <hr className="divisor" />
          <PopsubmenuItem
            name="AddAutoLayout"
            label={'Add auto layout'}
            hadleClick={handleClick}
            shortcut={'Shift+A'}
          />
          <PopsubmenuItem
            name="CreateComponent"
            label={'Create component'}
            hadleClick={handleClick}
            shortcut={'Ctrl+Alt+K'}
          />
          <PopsubmenuItem
            name="ResetAllChanges"
            label={'Reset all changes'}
            hadleClick={handleClick}
            shortcut={''}
          />
          <PopsubmenuItem
            name="DetachInstance"
            label={'Detach Instance'}
            hadleClick={handleClick}
            shortcut={'Ctrl+Alt+B'}
          />
          <PopsubmenuItem
            name="MainComponent"
            label={'Main Component'}
            hadleClick={handleClick}
            shortcut={<ArrowNext width={14} height={14} />}
          />
          <hr className="divisor" />
          <PopsubmenuItem
            name="BringToFront"
            label={'Bring to front'}
            hadleClick={handleClick}
            shortcut={']'}
          />
          <PopsubmenuItem
            name="BringForward"
            label={'Bring Forward'}
            hadleClick={handleClick}
            shortcut={'Ctrl+]'}
          />
          <PopsubmenuItem
            name="SendBackward"
            label={'Send backward'}
            hadleClick={handleClick}
            shortcut={'Ctrl+['}
          />
          <PopsubmenuItem
            name="SendToBack"
            label={'Send to back'}
            hadleClick={handleClick}
            shortcut={'['}
          />
          <hr className="divisor" />
          <PopsubmenuItem
            name="FlipHorizontal"
            label={'Flip horizontal'}
            hadleClick={handleClick}
            shortcut={'Shift+H'}
          />
          <PopsubmenuItem
            name="FlipVertical"
            label={'Flip vertical'}
            hadleClick={handleClick}
            shortcut={'Shift+V'}
          />
          <hr className="divisor" />
        </div>
      </div>
      <div name="Plugins" className="popmenu-menu-item6" onClick={handleClick}>
        <span name="Plugins">Plugins</span>
        <span name="Plugins" className="popmenu-arrow2">
          <ArrowNext width={14} height={14} />
        </span>
        <div className="popmenu-submenu-item6">
          <PopsubmenuItem
            name="RunLastPlugin"
            label={'Run last plugin'}
            hadleClick={handleClick}
            shortcut={'Ctrl+Alt+P'}
          />
          <PopsubmenuItem
            name="SavedPlugins"
            label={'Saved plugins'}
            hadleClick={handleClick}
            shortcut={<ArrowNext width={14} height={14} />}
          />
          <hr className="divisor" />
          <PopsubmenuItem
            name="FindMorePlugins"
            label={'Find more plugins...'}
            hadleClick={handleClick}
          />
        </div>
      </div>
      {/* <div name="Help" className="popmenu-menu-item7" onClick={handleClick}>
        <span name="Help">Help</span>
        <span name="Help" className="popmenu-arrow2">
          <ArrowNext width={14} height={14} />
        </span>
        <div className="popmenu-submenu-item7">
          <PopsubmenuItem
            name="Help1"
            label={'Help item 1'}
            hadleClick={handleClick}
          />
          <PopsubmenuItem
            name="Help2"
            label={'Help item 2'}
            hadleClick={handleClick}
          />
          <PopsubmenuItem
            name="Help3"
            label={'Help item 3'}
            hadleClick={handleClick}
          />
        </div>
      </div> */}
      <div name="Account" className="popmenu-menu-item7" onClick={handleClick}>
        <span name="Account">Help and account</span>
        <span name="Account" className="popmenu-arrow7">
          <ArrowNext width={14} height={14} />
        </span>
        <div className="popmenu-submenu-item7">
          <PopsubmenuItem
            name="HelpPage"
            label={'Help page'}
            hadleClick={handleClick}
          />
          <PopsubmenuItem
            name="KeyboardShortcuts"
            label={'Keyboard shortcuts'}
            hadleClick={handleClick}
            shortcut={'Ctrl+Shift+?'}
          />
          <PopsubmenuItem
            name="SupportForum"
            label={'Support forum'}
            hadleClick={handleClick}
          />
          <PopsubmenuItem
            name="VideoTutorials"
            label={'Video tutorials'}
            hadleClick={handleClick}
          />
          <PopsubmenuItem
            name="ReleaseNotes"
            label={'Release notes'}
            hadleClick={handleClick}
          />
          <PopsubmenuItem
            name="OpenFontSettings"
            label={'Open font settings'}
            hadleClick={handleClick}
          />
          <hr className="divisor" />
          <PopsubmenuItem
            name="LegalSummary"
            label={'Legal Summary'}
            hadleClick={handleClick}
          />
          <PopsubmenuItem
            name="AccountSettings"
            label={'Account Settings'}
            hadleClick={handleClick}
          />
          <PopsubmenuItem
            name="LogOut"
            label={'Log Out'}
            hadleClick={handleClick}
          />
        </div>
      </div>
    </div>
  )
}

export default Popmenu
