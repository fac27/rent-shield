import { FC } from 'react'

import Property from './Property'
import { ContainerProps } from '../../types/types'

const ListingsContainer: FC<ContainerProps> = ({ listings }) => {
  // console.log(listings)
  return (
    <div>
      {listings.map((listing, index) => (
        <Property
          id={`listing-${index + 1}`}
          listing={listing}
          key={listing.id}
        />
      ))}
    </div>
  )
}

export default ListingsContainer
