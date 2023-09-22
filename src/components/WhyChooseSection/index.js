import {AiFillCaretDown} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'
import './index.css'

const WhyChooseSection = () => (
  <div className="why-choose-main-container">
    <div className="why-choose-bg-container">b</div>
    <div className="why-choose-content-container">
      <h1 className="why-choose-heading">
        Why <span className="choose-text">choose</span> us?
      </h1>
      <p className="we-want-your-text">
        We want you and your heart to be healthy so you can live a happy life!
      </p>
      <div className="why-choose-cards-container">
        <ul className="cards-list-container">
          <li className="card-item">
            <img
              src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695186822/Ellipse_16_b3drjr.png"
              className="nabl-credited-image"
            />
            <div className="text-container">
              <p className="nabl-accredited-text">NABL Accredited Labs</p>
              <p className="get-accurate-text">
                Get accurate and safe results from our NABL-certified lab
                partners.{' '}
              </p>
            </div>
            <AiFillCaretDown className="down-icon" />
            <img
              src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695175934/Rectangle_80_kczh6i.png"
              className="accredicated-large-image"
            />
          </li>
          <li className="card-item card2">
            <img
              src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695186819/Ellipse_13_nqx09r.png"
              className="nabl-credited-image"
            />
            <div className="text-container">
              <p className="nabl-accredited-text">Timely collections</p>
              <p className="get-accurate-text">
                Experience seamless care without the hassle of waiting in long
                lines for an appointment. Book with us for a
                healthier lifestyle.
              </p>
            </div>
            <AiFillCaretDown className="down-icon" />

            <img
              src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695186828/Ellipse_14_odqfmc.png"
              className="accredicated-large-image"
            />
          </li>

          <li className="card-item">
            <img
              src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695186828/Ellipse_14_odqfmc.png"
              className="nabl-credited-image"
            />
            <div className="text-container">
              <p className="nabl-accredited-text">Value experience</p>
              <p className="get-accurate-text">
                We collect samples timely to prevent treatment delays and ensure
                your continued well-being.
              </p>
            </div>
            <AiFillCaretDown className="down-icon" />

            <img
              src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695186819/Ellipse_13_nqx09r.png"
              className="accredicated-large-image"
            />
          </li>

          <li className="last-card">
            <img
              src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695186819/Ellipse_13_nqx09r.png"
              className="transperancy-credited-image"
            />
            <div className="value-expression-container">
              <p className="transparency-text">Transparency</p>
              <p className="value-expression-text">
                Enjoy hassle free medical assistance with our transparent
                approach. We prioritize transparency for your smooth
                medical journey.
              </p>
            </div>
            <ImCross className="cross-icon" />
          </li>

          <li className="card-item-large">
            <img
              src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695358006/Ellipse_15_1_gasoxr.png"
              className="nabl-credited-image"
            />
            <div className="text-container">
              <p className="nabl-accredited-text">Transparency</p>
              <p className="get-accurate-text">
                Enjoy hassle free medical assistance with our transparent
                approach. We prioritize transparency for your smooth
                medical journey.
              </p>
            </div>
            <AiFillCaretDown className="down-icon" />

            <img
              src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695358006/Ellipse_15_1_gasoxr.png"
              className="accredicated-large-image"
            />
          </li>
        </ul>
        <img
          src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695187720/expressive-young-woman-posing-studio-removebg-preview-transformed_1_og8xpk.png"
          className="doctor-image"
        />
      </div>
    </div>
  </div>
)

export default WhyChooseSection
