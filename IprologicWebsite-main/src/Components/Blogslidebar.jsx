import React from "react";
import "./Blogslidebar.scss";
import { Link } from "react-router-dom";
import image1 from "./Assets/blog-bottom-1.jpg";
import image2 from "./Assets/blog-bottom-2.jpg";
import image3 from "./Assets/blog-bottom-3.jpg";
import image4 from "./Assets/blog-bottom-4.jpg";
import image5 from "./Assets/blog-sidebar.jpg";
import * as Icon from "react-bootstrap-icons";

export default function Blog() {
  return (
    <div className="blog-home">
      <div className="blog-container">
        <div className="background-blog">
          <p className="line-bright">Our blog</p>
          <h1 className="line-bright">Blog Articles</h1>
          <div>
            <Link
              className="line-bright"
              style={{ color: "white", textDecoration: "none" }}
            >
              Home
            </Link>
            <span style={{color:"#6b686c"}}className="line-bright"> /Our blog</span>
          </div>
        </div>
      </div>
      <div className="d-flex" style={{ backgroundColor: "#f5f8f9" }}>
        <div className="bottom-blog">
          <div className="d-flex justify-content-center gap-5 p-5">
            <div style={{ backgroundColor: "white", width: "350px" }}>
              <img src={image1} height={220} alt="blog-1" />
              <div className="blog-cards">
                <div className="d-flex justify-content-center align-items-center gap-2 blog-card-info">
                  <Icon.PencilSquare />
                  <span>Creativity</span>
                </div>
                <h4>Improve design with typography?</h4>
                <p>
                  Non illo quas blanditiis repellendus laboriosam minima animi.
                  Consectetur accusantium pariatur repudiandae!
                </p>
                <button
                  className="btn btn-danger"
                  style={{ borderRadius: "20px" }}
                >
                  Learn more
                </button>
              </div>
            </div>
            <div style={{ backgroundColor: "white", width: "350px" }}>
              <img src={image2} height={230} alt="blog-2" />
              <div className="blog-cards">
                <div className="d-flex justify-content-center align-items-center gap-2 blog-card-info">
                  <Icon.PencilSquare />
                  <span>Design</span>
                </div>
                <h4>Interactivity connect consumer</h4>
                <p>
                  Non illo quas blanditiis repellendus laboriosam minima animi.
                  Consectetur accusantium pariatur repudiandae!
                </p>
                <button
                  className="btn btn-danger"
                  style={{ borderRadius: "20px" }}
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center gap-5 p-5">
            <div style={{ backgroundColor: "white", width: "350px" }}>
              <img src={image3} height={230} alt="blog-3" />
              <div className="blog-cards">
                <div className="d-flex justify-content-center align-items-center gap-2 blog-card-info">
                  <Icon.PencilSquare />
                  <span>Community</span>
                </div>
                <h4>Marketing Strategy to bring more affect</h4>
                <p>
                  Non illo quas blanditiis repellendus laboriosam minima animi.
                  Consectetur accusantium pariatur repudiandae!
                </p>
                <button
                  className="btn btn-danger"
                  style={{ borderRadius: "20px" }}
                >
                  Learn more
                </button>
              </div>
            </div>
            <div style={{ backgroundColor: "white", width: "350px" }}>
              <img src={image4} height={230} alt="blog-4" />
              <div className="blog-cards">
                <div className="d-flex justify-content-center align-items-center gap-2 blog-card-info">
                  <Icon.PencilSquare />
                  <span>Marketing</span>
                </div>
                <h4>Marketing Strategy to bring more affect</h4>
                <p>
                  Non illo quas blanditiis repellendus laboriosam minima animi.
                  Consectetur accusantium pariatur repudiandae!
                </p>
                <button
                  className="btn btn-danger"
                  style={{ borderRadius: "20px" }}
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-search">
          <div className="searchbar-blog">
            <input type="text" className="form-control" />
            <button className="btn btn-danger form-control">SEARCH</button>
          </div>
          <div className="blogside-content">
            <img src={image5} alt="person" />
            <div>
              <h5>Arther Conal</h5>
              <p>Digital Marketer</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt, dolore.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Icon.Facebook />
                <Icon.Twitter />
                <Icon.Linkedin />
                <Icon.Pinterest />
                <Icon.Behance />
              </div>
            </div>
          </div>
          <div className="latest-posts">
            <h5>Latest posts</h5>
            <div
              className="d-flex justify-content-center gap-3"
              style={{
                width: "100%",
                paddingBottom: "15px",
                borderBottom: "1px solid lightgrey",
              }}
            >
              <img
                src="https://demo.themefisher.com/megakit/images/blog/bt-3.jpg"
                alt="image1"
                style={{ width: "90px", height: "60px" }}
              />
              <div className="d-flex flex-column align-items-start">
                <h6 style={{ textAlign: "left" }}>
                  Thoughtful living in los Angeles
                </h6>
                <span>03 Mar 2018</span>
              </div>
            </div>
            <div
              className="d-flex justify-content-center gap-3"
              style={{
                width: "100%",
                paddingBottom: "15px",
                borderBottom: "1px solid lightgrey",
              }}
            >
              <img
                src="https://demo.themefisher.com/megakit/images/blog/bt-2.jpg"
                alt="image1"
                style={{ width: "90px", height: "60px" }}
              />
              <div className="d-flex flex-column align-items-start">
                <h6 style={{ textAlign: "left" }}>
                  Vivamus molestie gravida turpis.
                </h6>
                <span>03 Mar 2018</span>
              </div>
            </div>
            <div
              className="d-flex justify-content-center gap-3"
              style={{ width: "100%" }}
            >
              <img
                src="https://demo.themefisher.com/megakit/images/blog/bt-1.jpg"
                alt="image1"
                style={{ width: "90px", height: "60px" }}
              />
              <div className="d-flex flex-column align-items-start">
                <h6 style={{ textAlign: "left" }}>
                  Fusce lobortis lorem at ipsum semper sagittis
                </h6>
                <span>03 Mar 2018</span>
              </div>
            </div>
          </div>
          <div className="tags">
          <h5 style={{textAlign:"left"}}>Tags</h5>
          <div>
          <button>Web</button>
          <button>Agency</button>
          <button>Company</button>
          <button>Creative</button>
          <button>Html</button>
          <button>Marketing</button>
          <button>Social Media</button>
          <button>Branding</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
