import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/StarTrekFinale/SVOD_Star_Trek_Multicontent_UK_FT_XSite_HeroTALL_1500x600._CB420460455_.jpg"
        alt=""
      />
      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="1231341"
          title="Introducing Echo Show 8 – Smart display with Alexa - 8"
          price={11.96}
          rating={5}
          image="https://th.bing.com/th/id/OIP.Z4GlWXNZgG-AwumPbBGquwHaEK?pid=Api&w=1280&h=720&rs=1"
        />
        <Product
          id="1231342"
          title="Echo Dot (3rd Gen) "
          price={43}
          rating={4}
          image="https://th.bing.com/th/id/OIP.BTwRk-nLd9N_W0KAKV6DEgHaHa?pid=Api&rs=1"
        />
      </div>
      <div className="home__row">
        <Product
          id="1231343"
          title="P. C. Chandra Jewellers 22KT Yellow Gold Chain for Women"
          price={30.96}
          rating={3}
          image="https://th.bing.com/th/id/OIP.6U5qE526aUCJ7EC3DzZ01QHaH2?pid=Api&rs=1"
        />
        <Product
          id="1231344"
          title="Women's A-Line Cotton Kurti with Shrug"
          price={45}
          rating={5}
          image="https://th.bing.com/th/id/OIP.ce1Hh2UBKvHB1_kFZC1CkAHaKQ?pid=Api&rs=1"
        />
        <Product
          id="1231345"
          title="Women's Printed A-Line Kurta and Palazzo Set."
          price={15.7}
          rating={5}
          image="https://th.bing.com/th/id/OIP.G01UN5yFAECUQlF4cLKpjwHaKQ?pid=Api&rs=1"
        />
      </div>
      <div className="home__row">
        <Product
          id="1231346"
          title="Men's Regular Fit Polos"
          price={20}
          rating={2}
          image="https://th.bing.com/th/id/OIP.i8W_yuiplAcOuuYl5qp9xQHaKQ?pid=Api&rs=1"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
