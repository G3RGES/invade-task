import React from "react";
import "../styles/Brand.css";
import Input from "./Input";

const Brand = ({ handleChange }) => {
  return (
    <div className="">
      <h1 className="brand-title">Brand</h1>

      <div className="xl:flex xl:flex-row gap-3 justify-around lg:flex lg:flex-col">
        <label className="flex gap-1 items-center">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="">All</span>
        </label>
        <Input
          handleChange={handleChange}
          value=""
          title="TechCo"
          name="test1"
        />
        <Input
          handleChange={handleChange}
          value=""
          title="HomeBrew"
          name="test1"
        />
        <Input
          handleChange={handleChange}
          value=""
          title="ActiveGear"
          name="test1"
        />
        <Input
          handleChange={handleChange}
          value=""
          title="UrbanStyle"
          name="test1"
        />
        <Input
          handleChange={handleChange}
          value=""
          title="AudioPro"
          name="test1"
        />
        <Input
          handleChange={handleChange}
          value=""
          title="CoffeeLuxe"
          name="test1"
        />
        <Input
          handleChange={handleChange}
          value=""
          title="OutdoorX"
          name="test1"
        />
        <Input
          handleChange={handleChange}
          value=""
          title="SunShades"
          name="test1"
        />
        <Input
          handleChange={handleChange}
          value=""
          title="FitLife"
          name="test1"
        />
        <Input
          handleChange={handleChange}
          value=""
          title="KitchenAid"
          name="test1"
        />
      </div>
    </div>
  );
};

export default Brand;
