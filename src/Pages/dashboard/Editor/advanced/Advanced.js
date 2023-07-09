/* eslint-disable react-hooks/exhaustive-deps */
import './advanced.css'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Properties from './Properties.js'
import Clases from './Clases.js'
import TextStyle from './TextStyle.js'

const {
  wide,
  computer,
  pcIcon,
  tabletIcon,
  phonelandsIcon,
  phoneIcon
} = require('./iconsPath.js')

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
