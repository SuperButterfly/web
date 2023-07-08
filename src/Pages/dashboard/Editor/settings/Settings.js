import './settings.css'
import Size from './Size.js'
import Margins from './Margins.js'
import Paddings from './Paddings.js'
import InnerLayout from './InnerLayout.js'
import Radius from './Radius.js'
import ImageSettings from './ImageSettings.js'
import ZIndex from './ZIndex.js'
import VideoSettings from './VideoSettings.js'
import Shadow from './Shadow.js'
import Visibility from './Visibility.js'
import Border from './Border.js'
import Background from './Background.js'
import Text from './Text.js'
import Attributes from '../attributes/Attributes.js'
import States from '../states/States.js'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { updateComponent } from '../../../../../src/redux/actions/component.js'

const Settings = () => {
  const dispatch = useDispatch()
  const { componentSelected } = useSelector((state) => state.component)
  const { target } = useSelector((state) => state.project)

  return (
    <div className="settings-container">
      {/* <Attributes/>
    <States/> */}
      {componentSelected?.id !== target?.id && <Size />}
      {componentSelected?.id !== target?.id && <Margins />}
      <Paddings />
      {componentSelected?.tag === 'a' ||
        componentSelected?.tag === 'span' ||
        componentSelected?.tag === 'h1' ||
        (componentSelected?.tag === 'link' && <Text />)}
      {componentSelected?.tag !== 'select' &&
      componentSelected?.tag !== 'iframe' &&
      componentSelected?.tag !== 'img' &&
      componentSelected?.tag !== 'video' ? (
        <Background />
          ) : null}
      {componentSelected?.tag === 'img' && <ImageSettings />}
      <Visibility />
      {componentSelected?.tag === 'video' && <VideoSettings />}
      {componentSelected?.id === target?.id && <InnerLayout />}
      <Border />
      {componentSelected?.id !== target?.id && <Radius />}
      {componentSelected?.id !== target?.id && <Shadow />}
      <ZIndex />
    </div>
  )
}

export default Settings
