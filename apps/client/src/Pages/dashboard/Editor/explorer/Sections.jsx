/* global localStorage */
import './sections.css'
import SuperContainer from './SuperContainer'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { MainSections } from './sectionslist'
import { getScreenshot } from '@/redux/actions/screenshot'
import { cleanScreenshot } from '../../../../redux/slices/screenshotSlices'
const Sections = ({ controls }) => {
  const dispatch = useDispatch()
  const [expand, setExpand] = controls
  const [content, setContent] = useState('')

  const handleClick = (ev) => {
    dispatch(cleanScreenshot())
    setContent(ev.target.id)
    dispatch(getScreenshot(ev.target.id))
    setExpand({
      active: true,
      size: '560px'
    })
  }

  return (
    <div className="sections-container">
      {MainSections &&
        MainSections.map((MainSection, idx) => (
          <div className="sections-container1" key={idx}>
            <span className="sections-span">{MainSection.title}</span>
            {MainSection.subSections.map((subSection, idx) => (
              <div
                className={
                  subSection.section === content
                    ? 'sections-cotainer-selected'
                    : 'sections-container2'
                }
                key={idx}
              >
                <span
                  className="sections-text1"
                  onClick={handleClick}
                  id={subSection.section}
                >
                  {subSection.title}
                </span>
              </div>
            ))}
          </div>
        ))}
      {expand.active ? (
        <SuperContainer
          setExpand={setExpand}
          setContent={setContent}
          content={content}
          expand={expand}
        />
      ) : null}
    </div>
  )
}

export default Sections
