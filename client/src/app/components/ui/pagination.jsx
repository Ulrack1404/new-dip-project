import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return (
        <nav>
            <div className="inline-flex border border-[#5b5b5b] bg-gray-300 dark:bg-gray-600  p-4 rounded-xl">
                <ul className="flex items-center -mx-[6px]">
                    {pages.map((page) => (
                        <li
                            className={
                                "page-item mx-1 rounded-md" +
                                (page === currentPage
                                    ? " bg-gray-50 dark:bg-gray-700"
                                    : "")
                            }
                            key={"page_" + page}
                        >
                            <button
                                className="w-9
                                h-9
                                flex
                                items-center
                                justify-center
                                rounded-md
                                border border-[#000000]
                                text-[#9da2ab] text-base
                                hover:bg-primary hover:border-primary hover:text-blue-gray-400 dark:hover:text-black
                                text-gray-900 dark:text-white"
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {/* <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={
                            "page-item" +
                            (page === currentPage ? " active" : "")
                        }
                        key={"page_" + page}
                    >
                        <button
                            className="page-link border-none rounded-circle px-3 fst-italic"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul> */}
        </nav>
    );
};
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number
};

export default Pagination;
