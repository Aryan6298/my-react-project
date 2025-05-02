import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImg1 from '../assets/gallery07.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from '../components/TopBar';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';

const Pic3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <style>
        {`
         body {
            background-color:#eef2f7 !important;
         }
          .pop-hover {
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }

          .pop-hover:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            z-index: 2;
          }

          .about-heading {
            font-size: 2.8rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 3rem;
            color: #1f2a44;
            text-shadow: 1px 1px 5px rgba(0,0,0,0.1);
            animation: fadeInDown 1.2s ease-out;
          }

          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .section-heading {
            font-weight: 600;
            font-size: 1.75rem;
            margin-bottom: 1rem;
            color: #1f2a44;
            transition: all 0.3s ease;
          }

          .section-heading:hover {
            color: #007bff;
            transform: scale(1.03);
          }

          p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #444;
          }
        `}
      </style>
      <TopBar />
      <NavigationBar />

      <div className="container py-5">
        <h2 className="about-heading">Monitoring Equipment in Aquifer Recharge Structure</h2>

        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={aboutImg1}
              alt="About Us"
              className="img-fluid rounded shadow pop-hover"
            />
          </div>
          <div className="col-md-6">
            <h3 className="section-heading" data-aos="fade-right">About Monitoring Equipment in Aquifer Recharge Structure</h3>
            <p data-aos="fade-left">
            Monitoring Equipment in Aquifer Recharge Structures plays a crucial role in evaluating the effectiveness and sustainability of artificial groundwater recharge systems. These instruments are strategically installed to continuously record key hydrological parameters such as water level fluctuations, infiltration rates, turbidity, electrical conductivity, and recharge volume. Common monitoring tools include digital water level recorders (DWLRs), automatic data loggers, rain gauges, and piezometers, which help in real-time data acquisition and long-term trend analysis. This data is essential for assessing the performance of recharge structures like check dams, percolation tanks, and recharge wells, especially in areas facing groundwater depletion. In India, the integration of monitoring equipment within aquifer recharge projects is increasingly supported by government agencies and water resource management bodies to ensure evidence-based planning and optimal resource utilization. Effective monitoring not only improves recharge efficiency but also aids in policy-making and the sustainable management of local aquifers.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pic3;
