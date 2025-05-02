import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import client logos
import client1 from "../assets/ABL.png";
import client2 from "../assets/Arihant.jpg";
import client3 from "../assets/Dabur.jpg";
import client4 from "../assets/Hindustan.png";
import client5 from "../assets/IMA-PG.jpg";
import client6 from "../assets/MEIL.jpg";
import client7 from "../assets/NNI.jpg";
import client8 from "../assets/Parle-G.png";
import client9 from "../assets/PGP.jpg";
import client10 from "../assets/PMKSY.jpg";
import client11 from "../assets/SUF.jpg";
import client12 from "../assets/ultra-tech-cement.png";

// Portfolio images
import portfolio1 from "../assets/gallery05.jpg";
import portfolio2 from "../assets/gallery06.jpg";
import portfolio3 from "../assets/gallery07.jpg";
import portfolio4 from "../assets/gallery08.jpg";
import portfolio5 from "../assets/gallery09.jpg";
import portfolio6 from "../assets/gallery10.jpg";
import portfolio7 from "../assets/gallery04.jpg";
import portfolio8 from "../assets/gallery03.jpg";
import portfolio9 from "../assets/gallery02.jpg";
import portfolio10 from "../assets/gallery01.jpg";
import portfolio11 from "../assets/about-image.jpg";
import portfolio12 from "../assets/image03.jpg";
import portfolio13 from "../assets/gallery11.jpg";
import portfolio14 from "../assets/gallery12.jpg";
import portfolio15 from "../assets/gallery13.jpg";
import portfolio16 from "../assets/gallery14.jpg";
import portfolio17 from "../assets/gallery15.jpg";
import portfolio18 from "../assets/gallery16.jpg";

// Components
import TopBar from "../components/TopBar.js";
import NavigationBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const clientsList = [
    "Piramal Glass Private Limited (PGP Glass)",
    "Ultratech Cement Unit Dhar",
    "Agro Solvent Products Private Limited",
    "Hindustan Unilever Limited",
    "Confederation of Indian Industry (CII)",
    "Megha Engineering & Infrastructures Limited (MEIL)",
    "Dabur India Limited",
    "IMA-PG India Private Limited",
    "Indore Municipal Corporation (IMC)",
    "Sun Nutrafoods Private Limited"
  ];

  const projectsList = [
    "Hydrogeological Investigation and Impact Assessment Study",
    "Rainwater Harvesting and Recharge Study",
    "Water Impact Assessment and Audit",
    "Aquifer Performance Test, Soil Testing, and Geophysical Survey",
    "Survey at Jawaharlal Nehru Research Institute",
    "Recharge Structure Design",
    "Groundwater Clearance (CGWA NOC)",
    "Rainwater Harvesting System Installation",
    "Geophysical Survey for Water Resource Assessment",
    "Hydrogeological Investigation for Water Awards"
  ];

  const portfolioItems = [
    { image: portfolio1, title: "Resistivity Survey", link: "/pic1" },
    { image: portfolio2, title: "Borehole Camera /Borehole Logging", link: "/pic2" },
    { image: portfolio3, title: "Monitoring Equipment in Aquifer Recharge Structure", link: "/pic3" },
    { image: portfolio4, title: "Structural Assessment of Ancient Water Retaining Walls", link: "/pic4" },
    { image: portfolio5, title: "Hydrogeological Survey", link: "/pic5" },
    { image: portfolio6, title: "Groundwater Survey", link: "/pic6" },
    { image: portfolio7, title: "Recharge Structure with Flow Meter for Monitoring", link: "/pic7" },
    { image: portfolio8, title: "Groundwater Storage Tank for Community Recharge", link: "/pic8" },
    { image: portfolio9, title: "Building-Integrated Recharge Piping System", link: "/pic9" },
    { image: portfolio10, title: "Wall-Mounted Aquifer Injection Setup", link: "/pic10" },
    { image: portfolio11, title: "Artificial Recharge Strctures Construction", link: "/pic11" },
    { image: portfolio12, title: "Borewell Site Selection", link: "/pic12" },
    { image: portfolio13, title: "Existing Borewell Inspection", link: "/pic13" },
    { image: portfolio14, title: "Geophysical Survey Using Resistivity Meter", link: "/pic14" },
    { image: portfolio15, title: "Drilling Rig Setup for Borewell Installation", link: "/pic15" },
    { image: portfolio16, title: "GPS-based Groundwater Survey with Data Logging", link: "/pic16" },
    { image: portfolio17, title: "Installed Borewell Monitoring and Flow Meter System", link: "/pic17" },
    { image: portfolio18, title: "Borewell Drilling Operation Supervision", link: "/pic18" },
  ];

  return (
    <>
      <TopBar />
      <NavigationBar />

      <div className="container my-5">
        <style>{`
          .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #1f2a44;
            text-align: center;
            margin-bottom: 3rem;
            animation: fadeInDown 1s ease-in-out;
          }

          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .table-hover tbody tr:hover {
            background-color: #eaf4ff;
            transition: background-color 0.3s ease;
          }

          .marquee-logo:hover {
            transform: scale(1.1);
          }

          .portfolio-item {
            width: 100%;
            max-width: 300px;
            text-align: center;
          }

          .portfolio-item img {
            display: block;
            margin: 0 auto;
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 12px;
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }

          .portfolio-item:hover img {
            transform: scale(1.07);
            box-shadow: 0 10px 35px rgba(0,0,0,0.3);
          }

          .portfolio-caption {
            margin-top: 10px;
            font-weight: 600;
            color: #1f2a44;
            transition: color 0.3s ease;
          }

          .portfolio-item:hover .portfolio-caption {
            color: #0d6efd;
          }

          .portfolio-number {
            font-size: 1.2rem;
            font-weight: bold;
            color: #1f2a44;
            margin-right: 10px;
          }
        `}</style>

        <h2 className="section-title" data-aos="fade-down">Clients & Projects</h2>

        {/* Clients Table */}
        <div className="table-responsive mb-5" data-aos="fade-up">
          <h3 className="text-center mb-3" style={{ color: "#1f2a44", fontWeight: "600" }}>Clients</h3>
          <table className="table table-bordered table-hover shadow-sm">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Client Name</th>
              </tr>
            </thead>
            <tbody>
              {clientsList.map((client, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{client}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Projects Table */}
        <div className="table-responsive mb-5" data-aos="fade-up">
          <h3 className="text-center mb-3" style={{ color: "#1f2a44", fontWeight: "600" }}>Projects Undertaken</h3>
          <table className="table table-bordered table-hover shadow-sm">
            <thead className="table-success">
              <tr>
                <th>#</th>
                <th>Project Description</th>
              </tr>
            </thead>
            <tbody>
              {projectsList.map((project, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{project}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Project Portfolio Section */}
        <div className="mb-5" data-aos="fade-up">
          <h3 className="text-center mb-4" style={{ color: "#1f2a44", fontWeight: "600" }}>Project Portfolio</h3>
          <div className="row justify-content-center">
            {portfolioItems.map((item, index) => (
              <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="portfolio-item">
                  <Link to={item.link} style={{ textDecoration: "none" }}>
                    <img src={item.image} alt={item.title} className="img-fluid" />
                    <div className="portfolio-caption">
                      <span className="portfolio-number">{index + 1}.</span>
                      {item.title}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Marquee Section */}
        <div className="my-5 py-5 px-3 rounded" style={{ backgroundColor: "#f0f4f9", overflow: "hidden" }} data-aos="zoom-in">
          <h3 className="text-center mb-4" style={{ color: "#1f2a44", fontWeight: "600" }}>Trusted By</h3>
          <Marquee gradient={false} speed={50} pauseOnHover={false} direction="left">
            {[client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Client ${i + 1}`}
                className="marquee-logo"
                style={{
                  height: "120px",
                  margin: "0 40px",
                  objectFit: "contain",
                  transition: "transform 0.4s ease",
                }}
              />
            ))}
          </Marquee>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
