import React from "react";
import "./Components/CSS/Blogsingle.scss";
import { Link } from "react-router-dom";
import image1 from "./Components/Assets/blog-bottom-1.jpg";
import image2 from "./Components/Assets/blog-bottom-2.jpg";
import image3 from "./Components/Assets/blog-bottom-3.jpg";
import image4 from "./Components/Assets/blog-bottom-4.jpg";
import image5 from "./Components/Assets/blog-sidebar.jpg";
import * as Icon from "react-bootstrap-icons";

export default function Blogsingle() {
  return (
    <div className="blog-home">
      <div className="blog-container">
        <div className="background-blog">
          <p className="line-bright">New details</p>
          <h1 className="line-bright">Blog Articles</h1>
          <div>
            <Link
              className="line-bright"
              style={{ color: "white", textDecoration: "none" }}
            >
              Home
            </Link>
            <span style={{color:"#6b686c"}} className="line-bright"> / New details</span>
          </div>
        </div>
      </div>
      <div className="d-flex" style={{ backgroundColor: "#f5f8f9" }}>
        <div className="bottom-blog">
          <div className="d-flex justify-content-center gap-5 p-5">
            <div style={{ backgroundColor: "white", width: "650px" }}>
              <img src={image2} style={{ width: "100%" }} alt="blog-2" />
              <div className="blogsingle-cards">
                <div className="d-flex justify-content-center align-items-center gap-2 blog-card-info">
                  <Icon.PencilSquare />
                  <span>Design</span>
                  <Icon.ChatLeft />
                  <span>5 Comments</span>
                  <Icon.Clock />
                  <span>28th January</span>
                </div>
                <h2>Improve design with typography?</h2>
                <p className="para">
                  Non illo quas blanditiis repellendus laboriosam minima animi.
                  Consectetur accusantium pariatur repudiandae!
                </p>
                <span className="content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus natus, consectetur? Illum libero vel nihil nisi quae,
                  voluptatem, sapiente necessitatibus distinctio voluptates,
                  iusto qui. Laboriosam autem, nam voluptate in beatae.
                </span>
                <h4>
                  A brand for a company is like a reputation for a person. You
                  earn reputation by trying to do hard things well.
                </h4>
                <p className="para">
                  The same is true as we experience the emotional sensation of
                  stress from our first instances of social rejection ridicule.
                  We quickly learn to fear and thus automatically.
                </p>
                <span className="content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iste, rerum beatae repellat tenetur incidunt quisquam libero
                  dolores laudantium. Nesciunt quis itaque quidem, voluptatem
                  autem eos animi laborum iusto expedita sapiente.
                </span>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ width: "100%" }}
                >
                  <div style={{textAlign:"left"}}>
                    <div>Tags:</div>
                    <div className="d-flex gap-2">
                      <p>Advancher</p>
                      <p>landscape</p>
                      <p>Travel</p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <p>Share:</p>
                    <Icon.Facebook />
                    <Icon.Twitter />
                    <Icon.Pinterest />
                    <Icon.Google/>
                  </div>
                </div>
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
            <h5 style={{ textAlign: "left" }}>Tags</h5>
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
