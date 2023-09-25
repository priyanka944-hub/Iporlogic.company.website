import React from "react";
import "./CSS/blog.scss";
import { Link } from "react-router-dom";
import image1 from "./Assets/blog-bottom-1.jpg";
import image2 from "./Assets/blog-bottom-2.jpg";
import image3 from "./Assets/blog-bottom-3.jpg";
import image4 from "./Assets/blog-bottom-4.jpg";
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
            <span style={{color:"#6b686c"}}className="line-bright"> / Our blog</span>
          </div>
        </div>
      </div>
      <div className="bottom-blog">
        <div className="d-flex justify-content-center gap-5 p-5">
          <div style={{ backgroundColor: "white" }}>
            <img src={image1} height={330} alt="blog-1" />
            <div className="blog-cards">
              <div className="d-flex justify-content-center align-items-center gap-2 blog-card-info">
                <Icon.PencilSquare />
                <span>Creativity</span>
                <Icon.ChatLeft />
                <span>5 Comments</span>
                <Icon.Clock />
                <span>28th January</span>
              </div>
              <h4>Improve design with typography?</h4>
              <p>
                Non illo quas blanditiis repellendus laboriosam minima animi.
                Consectetur accusantium pariatur repudiandae!
              </p>
              <button className="btn btn-danger" style={{borderRadius:"20px"}}>Learn more</button>
            </div>
          </div>
          <div style={{ backgroundColor: "white" }}>
            <img src={image2} height={330} alt="blog-2" />
            <div className="blog-cards">
              <div className="d-flex justify-content-center align-items-center gap-2 blog-card-info">
                <Icon.PencilSquare />
                <span>Design</span>
                <Icon.ChatLeft />
                <span>5 Comments</span>
                <Icon.Clock />
                <span>28th January</span>
              </div>
              <h4>Interactivity connect consumer</h4>
              <p>
                Non illo quas blanditiis repellendus laboriosam minima animi.
                Consectetur accusantium pariatur repudiandae!
              </p>
              <button className="btn btn-danger" style={{borderRadius:"20px"}}>Learn more</button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-5 p-5">
          <div style={{ backgroundColor: "white" }}>
            <img src={image3} height={330} alt="blog-3" />
            <div className="blog-cards">
              <div className="d-flex justify-content-center align-items-center gap-2 blog-card-info">
                <Icon.PencilSquare />
                <span>Community</span>
                <Icon.ChatLeft />
                <span>5 Comments</span>
                <Icon.Clock />
                <span>28th January</span>
              </div>
              <h4>Marketing Strategy to bring more affect</h4>
              <p>
                Non illo quas blanditiis repellendus laboriosam minima animi.
                Consectetur accusantium pariatur repudiandae!
              </p>
              <button className="btn btn-danger" style={{borderRadius:"20px"}}>Learn more</button>
            </div>
          </div>
          <div style={{ backgroundColor: "white" }}>
            <img src={image4} height={330} alt="blog-4" />
            <div className="blog-cards">
              <div className="d-flex justify-content-center align-items-center gap-2 blog-card-info">
                <Icon.PencilSquare />
                <span>Marketing</span>
                <Icon.ChatLeft />
                <span>5 Comments</span>
                <Icon.Clock />
                <span>28th January</span>
              </div>
              <h4>Marketing Strategy to bring more affect</h4>
              <p>
                Non illo quas blanditiis repellendus laboriosam minima animi.
                Consectetur accusantium pariatur repudiandae!
              </p>
              <button className="btn btn-danger" style={{borderRadius:"20px"}}>Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
