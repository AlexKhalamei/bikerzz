import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { Clock, PackageCheck, RefreshCw, ChevronLeft } from "lucide-react";

// components
import AddToCart from "@/components/AddToCart";

export async function generateMetadata({ params }) {
  const bikeSlug = params.slug;
  const bike = await getData(bikeSlug);

  return {
    title: `${bike.name} - Our bikes`,
    description: bike.description,
  };
}

const getData = async (slug) => {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
    _id,
    images,
    price,
    price_id,
    name,
    description,
    "slug": slug.current,
    "category": categories -> {name}
  }`;
  const data = await client.fetch(query, { cache: "no-store" });
  return data;
};

const ProductDetails = async ({ params }) => {
  const bike = await getData(params.slug);
  return (
    <section className="pt-24 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-14">
          <div className="xl:flex-1 h-[460px] bg-primary/5 xl:w-[700px] xl:h-[540px] flex justify-center items-center">
            <Image
              src={urlFor(bike.images[0]).url()}
              width={473}
              height={290}
              priority
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col justify-center items-start gap-10">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <ChevronLeft size={20} />
              Back to home
            </Link>
            <div className="flex flex-col gap-6 items-start">
              <div>
                <h3>{bike.name}</h3>
                <p className="text-lg font-semibold">₴{bike.price}</p>
              </div>
              <p>{bike.description}</p>
              <AddToCart
                price_id={bike.price_id}
                name={bike.name}
                currency="UAH"
                description={bike.description}
                images={bike.images}
                price={bike.price}
                text="Add to cart"
                btnStyles="btn btn-accent"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <PackageCheck size={20} className="text-accent" />
                <p>Free shipping on orders over ₴2000</p>
              </div>
              <div className="flex gap-2">
                <RefreshCw size={20} className="text-accent" />
                <p>Free return for 30 days</p>
              </div>
              <div className="flex gap-2">
                <Clock size={20} className="text-accent" />
                <p>Fast delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
