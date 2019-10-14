import React from 'react'

import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

import hats from '../../assets/sections/hats.png'
import jackets from '../../assets/sections/jackets.png'
import sneakers from '../../assets/sections/sneakers.png'
import womens from '../../assets/sections/womens.png'
import men from '../../assets/sections/men.png'

class Directory extends React.Component {
  constructor () {
    super()
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: hats,
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: jackets,
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: sneakers,
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: womens,
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: men,
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    }
  }

  render () {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({ id, ...otherProps }) => (
            <MenuItem
              key={id}
              {...otherProps}
            />
          ))
        }
      </div>
    )
  }
}

export default Directory
