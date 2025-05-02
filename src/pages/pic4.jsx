import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImg1 from '../assets/gallery08.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from '../components/TopBar';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';

const Pic4 = () => {
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
        <h2 className="about-heading">Structural Assessment of Ancient Water Retaining Walls</h2>

        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={aboutImg1}
              alt="About Us"
              className="img-fluid rounded shadow pop-hover"
            />
          </div>
          <div className="col-md-6">
            <h3 className="section-heading" data-aos="fade-right">About Structural Assessment of Ancient Water Retaining Walls</h3>
            <p data-aos="fade-left">
            Structural Assessment of Ancient Water Retaining Walls involves a systematic evaluation of the physical condition, stability, and integrity of historical structures built to store or manage water, such as stepwells, tanks, and embankments. These assessments combine traditional architectural knowledge with modern engineering techniques, including visual inspections, material testing, crack mapping, ground-penetrating radar (GPR), and non-destructive testing (NDT) methods like ultrasonic pulse velocity and rebound hammer tests. In India, where such heritage structures are often centuries old and built using locally available stone and lime mortar, preserving their structural soundness is vital for both cultural heritage conservation and water management. The assessment helps identify signs of deterioration, seepage, or foundation weakening, enabling informed restoration, retrofitting, and conservation planning. By integrating engineering analysis with historical context, these evaluations play a key role in sustaining the functional and historical value of ancient water infrastructure across the country.


            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pic4;
