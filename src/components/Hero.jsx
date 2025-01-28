import CountUp from "react-countup"
import { HiLocationMarker } from "react-icons/hi"
import hero from '../assets/img/hero-image.png'
import { FaWhatsapp } from "react-icons/fa"

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <a href="https://www.whatsapp.com/"><FaWhatsapp  className='fixed bottom-[40px] right-[40px] text-4xl bg-green-500 text-white rounded-lg'/></a>
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Hero Left */}
        <div className=" flexColStart hero-left">
          <div className="hero-title">
            <h1>
              Discover
              <br />
              Most Sutiable <br />
              Property
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span>Explore variety of Properties that suits your lifestyle </span>
            <span>Forget all the burdensome in finding your dream house</span>
          </div>
          <div className=" flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={3000} end={4500} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Properties</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1200} end={1800} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Proud Customers </span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={10} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards</span>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className=" flexCenter hero-right">
          <div className="image-container">
            <img src={hero} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
