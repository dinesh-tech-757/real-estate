import prestige from '../assets/img/prestige.jpg'
import brigade from '../assets/img/brigade.jpeg'
import tata from '../assets/img/tata.jpg'
import dlf from '../assets/img/dlf.jpg'

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={prestige} alt="" />
        <img src={brigade} alt="" />
        <img src={tata} alt="" />
        <img src={dlf} alt="" />
      </div>
    </section>
  )
}

export default Companies
