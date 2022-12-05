import React from 'react';
import NavigationModal from './NavigationModal';
import {connect} from 'react-redux';
import {updateModal} from '../reducers/websiteReducer'
import logo from '../assets/images/logo-scalable.svg'
import resume from '../assets/files/My_Resume.pdf'
import download from '../assets/images/download-icon.svg'

let NavigationPane = (props) => {
  return (
    <div id="nav-pane">
      <NavigationModal/> 
      <div className = 'site-header'>
          <div className = 'header-content'>
            <div className = 'resume-section navlink'> 
            <a className = 'download-link' href = {resume} download="JonWoodring_Resume.pdf"> <img alt="" className = 'download-icon' src = {download} width = 'auto' height = '20'/> Download Resume</a>
          </div>
      </div>
    </div>
    <div className="navigation-header">
      <a href = '/home' className = 'logo-image-link'>
          <img alt="" className = 'logo-image' src = {logo} height = '400' width = '600'/>
      </a>
    <button className ="navbutton" id = "navButton" onClick={() => {
              props.updateModal(props.showModal)    
            }} > <div className = 'hamburgerIcon'></div>
                  <div className = 'hamburgerIcon'></div>
                  <div className = 'hamburgerIcon'></div> </button>
    <div className = 'line-break'> </div> 
        <nav className = 'site-menu'> 
          <ul className = 'site-menu-inner'>
            <li className='menuitem'>
              <a href = '/home' className = "menuitem navlink"> Home </a> 
              <div className = 'menudivider'> / </div>
            </li>
            <li className = 'menuitem'>
              <a href =  '/about' className = "menuitem navlink"> About </a>
              <div className = 'menudivider'> / </div>
            </li>
            <li className = 'menuitem'>
              <a href = '/services' className = "menuitem navlink"> Services </a>
              <div className = 'menudivider'> / </div>
            </li>
            <li className = 'menuitem'>
              <a href = '/work' className = "menuitem navlink"> Work </a>
              <div className = 'menudivider'> / </div>
            </li>
            <li className = 'menuitem'>
              <a href = '/blog' className = "menuitem navlink"> Blog </a> 
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    showModal: state.website.showModal
  }
}

NavigationPane = connect(mapStateToProps, {updateModal})(NavigationPane)

export default NavigationPane;
