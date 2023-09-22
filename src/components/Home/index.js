import {BsPerson, BsTelephone} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import './index.css'

const Home = () => (
  <div className="home-main-container">
    <div className="home-background-container">h</div>
    <div className="home-content-container">
      <img
        className="best-in-class-title-image"
        src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695143617/Header_1_jleggb.png"
      />
      <div className="full-body-check-up-heading-container">
        <p>
          Get Full Body Check up <span className="now-text">Now</span> at
        </p>
      </div>
      <div className="prices-change-container">
        <p className="deprecated-price">&#x20B9; 5,999</p>
        <p>&#x20B9; 999</p>
        <p>70% OFF</p>
      </div>
      <div className="form-body-container">
        <div className="credentials-input-body-container">
          <h1 className="form-body-heading-title">
            {' '}
            Fill in the details to get a call!
          </h1>

          <form className="form-container">
            <div className="input-container">
              <BsPerson className="person-icon" />
              <input
                placeholder="Full name"
                className="full-name-input"
                type="text"
              />
            </div>
            <div className="input-container">
              <BsTelephone className="person-icon" />
              <input
                placeholder="Phone number"
                className="full-name-input"
                type="text"
              />
            </div>

            <div className="input-container">
              <HiOutlineLocationMarker className="person-icon" />
              <input
                placeholder="Location"
                className="full-name-input"
                type="text"
              />
            </div>
            <div className="input-container">
              <input
                checked
                className="accept-input"
                id="acceptCheckbox"
                type="checkbox"
              />
              <label className="accept-label-text" htmlFor="acceptCheckbox">
                By continuing, you agree to our T&C and privacy policy
              </label>
            </div>
            <button className="proceed-button">Proceed</button>
          </form>
        </div>
        <div className="full-body-check-up-large-container">
          <p className="body-checkup-text">
            Get a Full Body Checkup Now at &#x20B9; 5,999 &#x20B9;999{' '}
          </p>
          <p className="discount-container">70% OFF</p>
        </div>
      </div>
      <div className="doctor-banner-image-container">
        <img
          src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695179677/Hero_text_image_jenl0f.png"
          className="lab-technician-image"
        />
      </div>
    </div>
  </div>
)

export default Home
