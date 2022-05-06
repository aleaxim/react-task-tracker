// import React from 'react'  // No need for this anymore

import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'


const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()


    // const onClick = () => {
    //     console.log('Click')
    // }

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button 
                    color={showAdd ? 'red' :'green'} 
                    text={showAdd ? 'Close' : 'Add'} 
                    onClick={onAdd} 
                />
            )}
        </header>
  )
}

// Default value for props
Header.defaultProps = {
    title: 'Task Tracker',
}
  
Header.propTypes = {
    title: PropTypes.string,
    // title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'yellow', 
//     backgroundColor: 'black',
// }

export default Header

// INLINE CSS
{/* <h2 style={ { color: 'red', backgroundColor: 'black'} }>{title}</h2> */}
// CSS in JS
{/*  Good for dynamic style */}
{/* <h1 style={headingStyle}>Heading</h1> */}