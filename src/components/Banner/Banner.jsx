import bannerImg from "../../assets/books.jpg"

const Banner = () => {
  return (
    <div className="hero bg-base-200 rounded-2xl lg:h-96 md:p-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          <button className="btn border-black mt-6">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
