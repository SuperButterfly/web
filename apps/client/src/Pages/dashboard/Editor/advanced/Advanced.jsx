import './advanced.css'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Properties from './Properties'
import Clases from './Clases'
import TextStyle from './TextStyle'

import {
  wide,
  computer,
  pcIcon,
  tabletIcon,
  phonelandsIcon,
  phoneIcon
}  from './iconsPath'

const Advanced = () => {
  const { breakpoints } = useSelector((state) => state.breakpoints)
  const [isDefault, setIsDefault] = useState(5)

  useEffect(() => {
    const last = [...breakpoints].reverse().findIndex((value) => value === true)
    setIsDefault(5 - last)
  }, [breakpoints])

  return (
    <div className="advanced-container">
      <Clases />
      <TextStyle />
      {breakpoints[5] && (
        <Properties title={'Properties'} deviceIcon={wide} target={'style'} />
      )}
      {breakpoints[4] && (
        <Properties
          title={isDefault === 4 ? 'Properties' : 'Media Query ≤ 1600px'}
          deviceIcon={computer}
          target={'mq1600'}
        />
      )}
      {breakpoints[3] && (
        <Properties
          title={isDefault === 3 ? 'Properties' : 'Media Query ≤ 1200px'}
          deviceIcon={pcIcon}
          target={'mq1200'}
        />
      )}
      {breakpoints[2] && (
        <Properties
          title={isDefault === 2 ? 'Properties' : 'Media Query ≤ 991px'}
          deviceIcon={tabletIcon}
          target={'mq991'}
        />
      )}
      {breakpoints[1] && (
        <Properties
          title={'Media Query ≤ 767px'}
          deviceIcon={phonelandsIcon}
          target={'mq767'}
        />
      )}
      {breakpoints[0] && (
        <Properties
          title={'Media Query ≤ 479px'}
          deviceIcon={phoneIcon}
          target={'mq479'}
        />
      )}
    </div>
  )
}

export default Advanced
