import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImg1 from '../assets/image01.png';
import aboutImg2 from '../assets/image02.png';
import aboutImg3 from '../assets/about-image.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


const About = () => {
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
      

      <div className="container py-5" >
        <h2 className="about-heading">About Us</h2>

        {/* Section 1 */}
        <div className="row align-items-center mb-5" data-aos="fade-up">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={aboutImg1}
              alt="Our Mission"
              className="img-fluid rounded shadow pop-hover"
            />
          </div>
          <div className="col-md-6">
            <h3 className="section-heading" data-aos="fade-right">Our Mission</h3>
            <p data-aos="fade-left">
              At Geocon Services, our mission is to deliver sustainable solutions
              in water management and environmental engineering. We strive to
              protect natural resources while offering top-notch technical
              expertise and project execution.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="row align-items-center flex-md-row-reverse" data-aos="fade-up">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={aboutImg2}
              alt="Our Team"
              className="img-fluid rounded shadow pop-hover"
            />
          </div>
          <div className="col-md-6">
            <h3 className="section-heading" data-aos="fade-left">Our Team</h3>
            <p data-aos="fade-right">
            Our team comprises highly skilled and experienced professionals, including hydrogeologists, engineers, GIS analysts, environmental scientists, geologists, and technical experts. Together, we deliver a broad spectrum of consultancy services such as groundwater exploration, hydrogeological and geophysical surveys, rainwater harvesting, geotechnical studies, and water resource management. We specialize in GIS-based geo-mapping, flood and stormwater mapping, watershed management, and CGWA compliance. Our collaborative approach ensures sustainable solutions tailored to meet our clients’ environmental and infrastructural needs.
            </p>
          </div>
        </div>
        {/* Section 3 */}
<div className="row align-items-center mt-5" data-aos="fade-up">
  <div className="col-md-6 mb-4 mb-md-0">
    <img
      src={aboutImg3}
      alt="Our Vision"
      className="img-fluid rounded shadow pop-hover"
    />
  </div>
  <div className="col-md-6">
    <h3 className="section-heading" data-aos="fade-right">Our Vision</h3>
    <p data-aos="fade-left">
      We envision a future where sustainable water use and responsible environmental practices are the standard, not the exception. Through innovation, integrity, and collaboration, Geocon Services is committed to shaping a cleaner and more resilient planet for future generations.
    </p>
  </div>
</div>

      </div>
      
    </>
  );
};

export default About;
