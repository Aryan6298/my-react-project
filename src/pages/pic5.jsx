import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImg1 from '../assets/gallery09.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from '../components/TopBar';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';

const Pic5 = () => {
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
        <h2 className="about-heading">Hydrogeological Survey</h2>

        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={aboutImg1}
              alt="About Us"
              className="img-fluid rounded shadow pop-hover"
            />
          </div>
          <div className="col-md-6">
            <h3 className="section-heading" data-aos="fade-right">About Hydrogeological Survey</h3>
            <p data-aos="fade-left">
            Hydrogeological Survey is a comprehensive scientific study aimed at understanding the distribution, movement, and quality of groundwater within a specific area. This survey involves the integration of geological, geophysical, hydrological, and chemical data to evaluate the characteristics of aquifers, groundwater recharge zones, flow dynamics, and potential water yield. Techniques such as resistivity surveys, borehole logging, water table mapping, and aquifer testing are commonly used to gather critical subsurface information. In India, hydrogeological surveys are essential for planning sustainable groundwater extraction, identifying suitable locations for borewells, and managing water resources in both rural and urban settings. These surveys are widely employed by government agencies, water resource departments, and private organizations to address challenges related to water scarcity, agricultural irrigation, and industrial development. A well-executed hydrogeological survey serves as the foundation for informed decision-making in groundwater management and long-term water security.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pic5;
