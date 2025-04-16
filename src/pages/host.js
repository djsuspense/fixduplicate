import React, { useEffect } from "react"
import Footer2021 from "../components/footer2021"
import Host2021 from "../components/host2021"
import HostQuad from "../components/hostquad"
import Layout2021b from "../components/layout2021b"
import MoreNumbers from "../components/morenumbers"
import "../style/main.scss"

const HostPage = () => {
    return (
      <Layout2021b disableHeader>
      <Host2021 />
      <MoreNumbers />
      <HostQuad />
      <HubSpotForm />
      <section
        style={{ backgroundColor: "#fff", paddingBottom: "50px" }}
        className="hostattend"
      >
        <div
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            paddingLeft: "25px",
            paddingRight: "25px",
          }}
        >
          <a
            className="hostBTN"
            href="https://cdn.fedscoop.com/upgather/ai-week-2024/AIWeek_HostKit_2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: "0px" }}
          >
            LEARN MORE
          </a>
          <a
            className="hostBTN"
            href="mailto:festivals@scoopnewsgroup.com?subject=AIWeek%20-%20Host%20an%20Event"
            target="_blank"
            rel="noopener noreferrer"
          >
            CONTACT US
          </a>
        </div>
      </section>
      <Footer2021 />
    </Layout2021b>
    )
}

const TypeForm = () => (
  <section className="host2021" style={{backgroundColor:'#fff'}}>
    <div className="containfix">
    <h1>APPLY NOW TO HOST AN EVENT DURING AI WEEK</h1>
      <div className="leftPara"></div>
    <div
      data-tf-widget="Q8KpoMLg"
      data-tf-opacity="100"
      data-tf-iframe-props={{ title: "AIWeek Host Form" }}
      style={{ width: "100%", height: "755px",maxWidth:'500px', borderRadius: '0px' }}
      className="type-form host-form"
      id="Hostform"
    ></div>
    </div>
    </section>
 
  )

  const HubSpotForm = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/v2.js";
      script.async = true;
      document.body.appendChild(script);
  
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "2153467",
            formId: "ed93c118-2d72-44ff-90a1-f97dd6957250",
            target: "#hubspotForm",
          });
        }
      };
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return (
      <section id="Hostform" className="host2021" style={{ backgroundColor: "#fff" }}>
        <div className="containfix">
          <h1>APPLY NOW TO HOST AN EVENT DURING AI WEEK</h1>
          <div className="leftPara"></div>
          <div id="hubspotForm" style={{ width: "100%", maxWidth: "1200px", marginLeft: "-30px" }}></div>
        </div>
      </section>
    );
  };

export default HostPage