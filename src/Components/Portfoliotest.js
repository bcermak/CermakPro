import React, { Component } from 'react';
import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css'
import ReactEmployeeDirectory from './Assets/Images/reactempdir.jpg'
import Advensure from './Assets/Images/advensure.jpg'


class Portfolio extends Component {
  render() {

    const items = [
      {
        id: 1,
        header: 'React Employee Directory',
        description:
          'React-based application that allows users to search/filter through a list of employees.',
        image: ReactEmployeeDirectory
      },
      {
        id: 2,
        header: 'Advensure',
        description:
          'Application that allows users to create categorically-organized checklists before/during traveling',
        image: Advensure
      },

    ]

  return (
    <div className="projectCard" style={{paddingBottom: '20px'}}>
    <CardView
      items={items}
      activeColor='#e9c46a'
      imageHeight='auto'
      imageWidth='auto'
    />
    </div>
  )
  }
}

export default Portfolio;
