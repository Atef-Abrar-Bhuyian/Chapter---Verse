import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, tags, category, rating } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6 border">
        <figure className="bg-gray-100 py-8 rounded-xl">
          <img src={image} className="h-[166px]" alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex gap-4">
            {tags.map((tag, idx) => (
              <button key={idx} className="btn btn-xs bg-base-100">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>

          <div className="border-t-2 border-dashed my-2"></div>

          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="flex gap-2 items-center">
              <p>{rating} </p>
              <FaStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
