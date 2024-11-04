import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const data = useLoaderData();
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);

  const { bookId: currentBookId, rating, yearOfPublishing, publisher, image, author, bookName, tags, review, category,totalPages } = book;


  return (
    <div className="flex gap-10 flex-col lg:flex-row w-11/12 mx-auto">
      <div className="lg:w-[573px] rounded-2xl p-10 bg-gray-200">
        <img className=" rounded-xl" src={image} alt={bookName} />
      </div>
      <div className="w-full">
        <h3 className="font-bold text-2xl md:text-3xl lg:text-5xl text-[#131313]">
          {bookName}{" "}
        </h3>
        <p className="mt-2 font-medium text-[#131313] text-opacity-80">
          By: {author}{" "}
        </p>
        <div className="divider"></div>
        <p className="font-medium"> {category} </p>
        <div className="divider"></div>
        <p>
          <span className="font-bold">Review</span>: {review}
        </p>

        <div className="flex gap-4 mt-6">
            <p className="font-bold">Tag:</p>
            {
                tags.map((tag, idx) => <button key={idx} className="btn font-medium btn-xs bg-base-100">
                    #{tag}
                  </button>)
            }
        </div>
        <div className="divider"></div>
        <div>
            <table>
                <thead>

                </thead>
                <tbody>
                <tr>
                    <td className="text-[#131313] text-opacity-70">Number Of Pages:</td>
                    <td className="font-bold">{totalPages} </td>
                </tr>
                <tr>
                    <td className="text-[#131313] text-opacity-70">Publisher:</td>
                    <td className="font-bold">{publisher} </td>
                </tr>
                <tr>
                    <td className="text-[#131313] text-opacity-70">Year of Publishing:</td>
                    <td className="font-bold">{yearOfPublishing} </td>
                </tr>
                <tr>
                    <td className="text-[#131313] text-opacity-70">Rating:</td>
                    <td className="font-bold">{rating} </td>
                </tr>
                </tbody>
            </table>
        </div>

        <div className="flex gap-4 mt-8">
            <div className="btn btn-outline">Read</div>
            <div className="btn">Wishlist</div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
