import {BsFillPlayFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'

import './index.css'

const Header = () => (
  <div className="header-main-container">
    <img
      src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695140656/Component_10_qmgt6r.png"
      className="header-logo-image"
    />
    <GiHamburgerMenu className="menu-icon" />

    <ul className="nav-items-list-container">
      <li className="nav-item-text">Home</li>
      <li className="nav-item-text">Health Conditions</li>
      <li className="nav-item-text selected-nav-item-text">Lab tests</li>
      <li className="nav-item-text">Medicines</li>
    </ul>
    <div className="for-patients-buttons-container">
      <button type="button" className="for-patient-button">
        For Patients
      </button>
      <button type="button" className="for-patient-button">
        For Hospitals
      </button>
    </div>

    <button className="play-store-button">
      <BsFillPlayFill className="play-icon" /> Play Store
    </button>
  </div>
)

export default Header
