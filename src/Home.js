import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="myslides"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="myslides"
        />

        <div className="home_row">
          {/*Product */}
          <Product
            title="Apple Macbook Pro 16 M1 Pro Chip MK183HN/A (16GB/512GB SSD/16.2 inch
          Liquid Retina XDR Display/16-Core-GPU/macOS Monterey/ Space Grey)"
            price={239600}
            rating={4.8}
            image="https://d2xamzlzrdbdbn.cloudfront.net/products/4e1278f6-d57b-46a7-b75e-3282cc6075b621211113_416x416.jpg"
          />

          {/*Product */}
          <Product
            title="Apple Iphone 12 (128GB, Black)"
            rating={4.6}
            price={"70,892"}
            image="https://d2xamzlzrdbdbn.cloudfront.net/products/7b3d514b-a469-469b-8c0e-4bf5140438cb_182x182.jpg"
          />
          {/*product*/}
          <Product
            title={"Sony Bluetooth Headphone NC WH-1000XM4BM (Black)"}
            rating={4.3}
            price={"26,900"}
            image="https://d2xamzlzrdbdbn.cloudfront.net/products/3c12981e-83fa-40dd-9a20-c191b007720f_182x182.jpg"
          />
        </div>
        <div className="home_row">
          {/*Product */}
          <Product
            title={
              "Sony Bravia 164 cm (65 inches) XR series 4K Ultra HD Smart OLED Google TV XR-65A80J (Black) (2021 Model) | with Alexa Compatibility"
            }
            price={"2,56,000"}
            rating={4.7}
            image="https://m.media-amazon.com/images/I/8116TOvxtsL._AC_UY327_FMwebp_QL65_.jpg"
          />
          {/*Product */}
          <Product
            title={"Campus Men's Honor Running Shoes"}
            rating={4}
            price={"1,990"}
            image="https://m.media-amazon.com/images/I/615xoLkU2wL._AC_UL480_FMwebp_QL65_.jpg"
          />
          {/*Product */}
          <Product
            title={
              "Adidas Mens Polyester M Wof Fz Sweatshirt (Hc3895_m, Tmvire, M)"
            }
            rating={3.7}
            price={"999"}
            image="https://assets.adidas.com/images/w_600,f_auto,q_auto/c0b5234b4053469285dea83500d56eda_9366/3_Stripes_T_Shirt_White_CW1203_CW1203_01_laydown.jpg"
          />
        </div>
        <div className="home_row">
          {/*Product */}
          <Product
            title={
              "Acer Predator X28 28 Inch UHD (3840 X 2160) 0.2 ms 152Hz (Overclock) NVIDIA G-SYNC Gaming Monitor I VESA Display HDR400 I IPS Agile Splender Display I NVIDIA Reflex Latency Analyzer I Black"
            }
            rating={4.5}
            price={"74,999"}
            image={
              "https://m.media-amazon.com/images/I/81yZnpFoxwL._AC_UY327_QL65_.jpg"
            }
          />
          {/*product */}
          <Product
            title={"Gaming monitors"}
            image={
              "https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            }
            rating={"3.0-4.7"}
            price={"35,000 - 1,05,000"}
          />
          {/*Product */}
          <Product
            title={
              "Noise ColorFit Pro 2 Full Touch Control Smart Watch with 35g Weight & Upgraded LCD Display,IP68 Waterproof,Heart Rate Monitor,Sleep & Step Tracker,Call & Message Alerts & Long Battery Life (Jet Black)"
            }
            rating={3.6}
            price={"1,099"}
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/41UD9vNsIjS._AC_SX184_.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
