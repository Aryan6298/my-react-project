import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImg1 from '../assets/gallery10.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from '../components/TopBar';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';

const Pic6 = () => {
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
        <h2 className="about-heading">Groundwater Survey</h2>

        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={aboutImg1}
              alt="About Us"
              className="img-fluid rounded shadow pop-hover"
            />
          </div>
          <div className="col-md-6">
            <h3 className="section-heading" data-aos="fade-right">About Groundwater Survey</h3>
            <p data-aos="fade-left">
            Groundwater Survey is a critical process used to locate, assess, and map underground water resources. Utilizing a combination of geophysical methods such as resistivity surveys, borehole logging, and hydrogeological mapping, these surveys identify potential aquifers, determine water table depths, and evaluate the quality and quantity of groundwater available. In a country like India, where groundwater serves as a primary source for agriculture, drinking water, and industry, conducting accurate and detailed groundwater surveys is essential for sustainable resource management. These surveys aid in identifying optimal locations for borewells, preventing over-extraction, and ensuring the long-term availability of this vital resource. Groundwater surveys are conducted by expert hydrogeologists and geophysicists, equipped with modern instruments to provide reliable, science-backed insights that support water conservation efforts and effective planning.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pic6;
