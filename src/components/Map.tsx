'use client'

import React, { useEffect, FC } from 'react'
import { initializeMap } from 'utils/mapHelper'
import { IMapProps } from '../../types/types'

const Map = ({ center, markers, id }: IMapProps) => {
  useEffect(() => {
    initializeMap({ id, center, markers })
  }, [center, markers, id])

  return (
    <div
      className="map"
      id={id}
      style={{ width: '100%', height: '400px' }}
    ></div>
  )
}

export default Map
