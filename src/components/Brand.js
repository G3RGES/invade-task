import React from "react";
import "../styles/Brand.css";

const Brand = () => {
  return (
    <div className="">
      <h1 className="brand-title">Brand</h1>

      <div className="xl:flex xl:flex-row gap-3 justify-around lg:flex lg:flex-col">
        <label className="flex gap-1 items-center">
          <input value="" type="radio" name="test3" />
          <span className="">All</span>
        </label>
        <label className="flex gap-1 items-center">
          <input value="" title="TechCo" type="radio" name="test3" />
          <span className="">TechCo</span>
        </label>
        <label className="flex gap-1 items-center">
          <input value="" title="HomeBrew" type="radio" name="test3" />
          <span className="">HomeBrew</span>
        </label>
        <label className="flex gap-1 items-center">
          <input value="" title="ActiveGear" type="radio" name="test3" />
          <span className="">ActiveGear</span>
        </label>
        <label className="flex gap-1 items-center">
          <input value="" title="UrbanStyle" type="radio" name="test3" />
          <span className="">UrbanStyle</span>
        </label>
        <label className="flex gap-1 items-center">
          <input value="" title="AudioPro" type="radio" name="test3" />
          <span className="">AudioPro</span>
        </label>
        <label className="flex gap-1 items-center">
          <input value="" title="CoffeeLuxe" type="radio" name="test3" />
          <span className="">CoffeeLuxe</span>
        </label>
        <label className="flex gap-1 items-center">
          <input value="" title="OutdoorX" type="radio" name="test3" />
          <span className="">OutdoorX</span>
        </label>
        <label className="flex gap-1 items-center">
          <input value="" title="SunShades" type="radio" name="test3" />
          <span className="">SunShades</span>
        </label>
        <label className="flex gap-1 items-center">
          <input value="" title="FitLife" type="radio" name="test3" />
          <span className="">FitLife</span>
        </label>
        <label className="flex gap-1 items-center">
          <input value="" title="KitchenAid" type="radio" name="test3" />
          <span className="">KitchenAid</span>
        </label>
      </div>
    </div>
  );
};

export default Brand;
