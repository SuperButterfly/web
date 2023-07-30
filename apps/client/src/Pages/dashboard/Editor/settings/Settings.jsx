import './settings.css'
import Size from './Size'
import Margins from './Margins'
import Paddings from './Paddings'
import InnerLayout from './InnerLayout'
import Radius from './Radius'
import ImageSettings from './ImageSettings'
import ZIndex from './ZIndex'
import VideoSettings from './VideoSettings'
import Shadow from './Shadow'
import Visibility from './Visibility'
import Border from './Border'
import Background from './Background'
import Text from './Text'
import Attributes from '../attributes/Attributes'
import States from '../states/States'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { updateComponent } from '../../../../../src/redux/actions/component'

const Settings = () => {
  const dispatch = useDispatch()
  const { componentSelected } = useSelector((state) => state.component)
  const { target } = useSelector((state) => state.project)

  return (
    <div className="settings-container">
      {/* <Attributes /> */}
      {/* <States /> */}
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
