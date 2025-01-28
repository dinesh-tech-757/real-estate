import { useState } from "react";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState } from "react-accessible-accordion";
import { HiShieldCheck } from "react-icons/hi";
import { MdAnalytics, MdCancel, MdOutlineArrowDropDown } from "react-icons/md";
import value from '../assets/img/value.jpg'

const Value = () => {
    const data = [
        {
          icon: <HiShieldCheck />,
          heading: "Best interest rates on the market",
          detail:
            "Unlock your dream home with the best interest rates in the market, offering unparalleled affordability for real estate investments. Seize the opportunity to secure a mortgage with competitive rates, making your homeownership aspirations a reality.",
        },
        {
          icon: <MdCancel />,
          heading: "Prevent unstable prices",
          detail:
            "Encourage sustainable development and urban planning policies that balance supply and demand, reducing the likelihood of rapid and unstable price fluctuations in the real estate market.",
        },
        {
          icon: <MdAnalytics />,
          heading: "Best price on the market",
          detail:
            "Discover unparalleled value in real estate with our unbeatable prices, offering the best deals on the market. Secure your dream property at an exceptional rate, making home ownership a reality like never before.",
        },
      ];


    const [className, setClassName] = useState(null);
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src={value} alt="" />
          </div>
        </div>
        {/* Right Side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Best Value We Offer You</span>
          <span className="secondaryText">
            We are always ready to provide the best services
            <br /> we believe that good place provide peace...
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordianButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>

                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondarText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Value
