import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImg1 from '../assets/gallery04.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from '../components/TopBar';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';

const Pic7 = () => {
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
        <h2 className="about-heading">Recharge Structure with Flow Meter for Monitoring</h2>

        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={aboutImg1}
              alt="About Us"
              className="img-fluid rounded shadow pop-hover"
            />
          </div>
          <div className="col-md-6">
            <h3 className="section-heading" data-aos="fade-right">About Recharge Structure with Flow Meter for Monitoring</h3>
            <p data-aos="fade-left">
            Resistivity Survey in India is a widely adopted geophysical method used for subsurface exploration, particularly for groundwater investigation, mineral prospecting, and civil engineering site assessment. This non-invasive technique measures the electrical resistance of soil and rock layers to determine the presence and depth of water-bearing formations, faults, and other geological features. In India, where groundwater is a crucial resource for agriculture and drinking purposes, resistivity surveys are extensively conducted by both government and private agencies to identify suitable borewell locations and ensure sustainable water extraction. With the advancement of technology, modern resistivity equipment and software have significantly improved data accuracy and interpretation, making it a cost-effective and reliable solution. The technique is especially beneficial in diverse Indian terrains, from arid zones of Rajasthan to the floodplains of the Ganges basin, aiding in water resource management and infrastructure development across the country.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pic7;
