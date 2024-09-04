import { client } from "@/lib/sanity";

// components
import BikeCategories from "@/components/BikeCategories";

export const metadata = {
  title: "Our bikes",
  description: "Our bikes",
};

const getData = async () => {
  const query = `*[_type == 'product'] {
    _id,
      name,
      description,
      images,
      price,
      price_id,
      "slug": slug.current,
      "categories": categories[]->{name}
  }`;
  const data = await client.fetch(query, { cache: "no-store" });
  return data;
};

const OurBikes = async () => {
  const bikes = await getData();
  return (
    <div>
      <BikeCategories bikes={bikes} />
    </div>
  );
};

export default OurBikes;
