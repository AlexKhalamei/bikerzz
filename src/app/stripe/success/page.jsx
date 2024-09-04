import Link from "next/link";

export const metadata = {
  title: "Success",
  description: "Success",
};

const Success = () => {
  return (
    <section className="py-72">
      <div className="container mx-auto">
        <h2 className="text-center mb-4">
          Your payment was successful! Thank you!
        </h2>
        <Link href="/">
          <button className="btn btn-primary mx-auto">
            Back to the homepage
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Success;
