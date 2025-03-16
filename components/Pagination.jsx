import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import PostCard from "../components/PostCard";

const Pagination = ({ posts }) => {
  function Posts({ currentPosts }) {
    return (
      <>
        {currentPosts &&
          currentPosts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
      </>
    );
  }

  function PaginatedPosts({ itemsPerPage }) {
    // We start with an empty list of items.
    const [currentPosts, setCurrentPosts] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      setCurrentPosts(posts.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(posts.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = e => {
      const newOffset = (e.selected * itemsPerPage) % posts.length;
      setItemOffset(newOffset);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    return (
      <>
        <Posts currentPosts={currentPosts} />
        <ReactPaginate
          nextLabel="&#x2192;"
          previousLabel="&#x2190;"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }
  return <PaginatedPosts itemsPerPage={5} />;
};

export default Pagination;
