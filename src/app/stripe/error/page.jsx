import Link from "next/link";

export const metadata = {
  title: "Error",
  description: "Error",
};

const Error = () => {
  return (
    <section className="py-72">
      <div className="container mx-auto">
        <h2 className="text-center mb-4">Oops! Something went wrong...</h2>
        <Link href="/">
          <button className="btn btn-accent mx-auto">
            Back to the homepage
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
