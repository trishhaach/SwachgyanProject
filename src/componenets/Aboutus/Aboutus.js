import React from 'react';
import './Aboutus.css';
import kids2 from "../../assests/team.jpg";

const Aboutus = () => {
  return (
    <div className="container">
    <section id="about" className="about">
      <div className="section-header-container">
        <div className="section-header">
          <h2>About Us</h2>
          <p>Welcome to Swachgyan.com</p>
        </div>
      </div>
      <div className="Acontainer" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="content ps-0 ps-lg-5">
              <h2 style={{ marginBottom: '20px' }}>At Swachyagyan, we believe that education is the key to fostering positive change.</h2>
              <ul>
                <li><i className="bi bi-check-circle-fill"></i>🌍 Educate children on waste management and segregation.</li>
                <li><i className="bi bi-check-circle-fill"></i>🌍 Empower children to make informed recycling decisions.</li>
                <li><i className="bi bi-check-circle-fill"></i>🌍 romote environmental consciousness and responsibility.</li>
              </ul>
              <br></br>
              <p className="fst-italic"><b>Our Goal:</b></p>
              <ul>
                <li><i className="bi bi-check-circle-fill"></i>🌱 Raise awareness about waste management.</li>
                <li><i className="bi bi-check-circle-fill"></i>🌱 Equip children with practical waste management skills.</li>
                <li><i className="bi bi-check-circle-fill"></i>🌱 Foster environmentally conscious individuals.</li>
              </ul>
              <br></br>
              <p className="fst-italic"><b>How We Achieve Our Goal:</b></p>
              <ul>
                <li><i className="bi bi-check-circle-fill"></i>📚 Educational Workshops and Activities.</li>
                <li><i className="bi bi-check-circle-fill"></i>🎨 Creative Recycling Projects.</li>
                <li><i className="bi bi-check-circle-fill"></i>🌱 School and Community Programs.</li>
              </ul>
          
              <br></br>
              {/* <div className="text-center">
                <button className="lead-more-button">Read More</button>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6">
            <img src={kids2} className="kids2" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Aboutus;