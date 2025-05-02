import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImg1 from '../assets/gallery06.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from '../components/TopBar';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';

const Pic2 = () => {
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
        <h2 className="about-heading">Borehole Camera /Borehole Logging</h2>

        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={aboutImg1}
              alt="About Us"
              className="img-fluid rounded shadow pop-hover"
            />
          </div>
          <div className="col-md-6">
            <h3 className="section-heading" data-aos="fade-right">About Borehole Camera /Borehole Logging</h3>
            <p data-aos="fade-left">
            Borehole Camera and Borehole Logging are advanced inspection techniques used to visually and scientifically assess subsurface boreholes, wells, and drilled shafts. A borehole camera provides high-resolution video and imaging from within the borehole, enabling detailed visualization of fractures, rock layers, water inflow zones, and casing integrity. This real-time visual data is invaluable for accurate geological interpretation, well rehabilitation, and post-drilling analysis. Borehole logging, on the other hand, involves the measurement of various physical properties—such as electrical resistivity, natural gamma radiation, temperature, and conductivity—using specialized downhole instruments. Together, these methods offer a comprehensive understanding of subsurface conditions, supporting informed decision-making for groundwater development, geotechnical investigations, mining, and environmental studies. Widely used across India, especially in groundwater surveys and hydrogeological studies, these techniques enhance the reliability and efficiency of well design and resource management.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pic2;
