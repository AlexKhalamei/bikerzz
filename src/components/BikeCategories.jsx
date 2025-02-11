"use client";

import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "./UI/radio-group";
import { Label } from "./UI/label";
import { Slider } from "./UI/slider";

// components
import Bike from "./Bike";

const BikeCategories = ({ bikes }) => {
  const [category, setCategory] = useState("all");
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [price, setPrice] = useState(22999);

  useEffect(() => {
    const filtered = bikes.filter((bike) => {
      const categoryMatch =
        category === "all"
          ? "all"
          : bike.categories.some((cat) => cat.name === category);

      const priceMatch = bike.price <= price;
      return categoryMatch && priceMatch;
    });
    setFilteredBikes(filtered);
  }, [category, price, bikes]);

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          <aside className="w-full p-4 mb-8 xl:w-[300px]">
            <RadioGroup
              defaultValue="all"
              className="flex flex-col gap-6 mb-12"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="all"
                  id="all"
                  onClick={() => setCategory("all")}
                />
                <label htmlFor="all">All</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="road"
                  id="road"
                  onClick={() => setCategory("road")}
                />
                <label htmlFor="road">Road</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="professional"
                  id="professional"
                  onClick={() => setCategory("professional")}
                />
                <label htmlFor="professional">Professional</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="extreme"
                  id="extreme"
                  onClick={() => setCategory("extreme")}
                />
                <label htmlFor="extreme">Extreme</label>
              </div>
            </RadioGroup>
            <div className="max-w-56">
              <div className="text-lg mb-4 font-medium">
                Max price:{" "}
                <span className="text-accent font-semibold ml-2">₴{price}</span>
                <span className="ml-2">
                  (
                  {filteredBikes.length > 1
                    ? `${filteredBikes.length} items`
                    : filteredBikes === 0
                      ? `${filteredBikes.length} items`
                      : `${filteredBikes.length} item`}
                  )
                </span>
              </div>
              <Slider
                defaultValue={[22999]}
                max={22999}
                step={1}
                onValueChange={(val) => {
                  setPrice(val[0]);
                }}
              />
            </div>
          </aside>
          <div className="w-full xl:w-[1050px] ml-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
              {filteredBikes.map((bike) => {
                return <Bike bike={bike} key={bike.price_id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeCategories;
