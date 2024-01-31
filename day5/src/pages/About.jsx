import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";
import ImageGallery from "react-image-gallery";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
//  import "../assets/css/Images.css"
import images from "./Images";
import Navbar from "../components/Navbar";

export default function App() {
  return (
    <div className="App">
    <Navbar/>
    <br></br>
    <br></br>
      <ImageGallery items={images} />
    </div>
  );
}
