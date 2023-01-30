import React, { useEffect, useState } from "react";
import API from "../../api/index";
import { paginate } from "../../utils/paginate";
import Pagination from "./pagination";
import ToyPrev from "./toyPrev";

const ToysList = () => {
    const [toys, setToys] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 2;

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    useEffect(() => {
        API.toys.fetchAll().then((data) => setToys(data));
    }, []);

    if (toys) {
        const count = toys.length;

        const toyCrop = paginate(toys, currentPage, pageSize);

        return (
            <>
                <div>
                    {toyCrop.map((toy) => {
                        return <ToyPrev key={toy._id} {...toy} />;
                    })}
                </div>
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </>
        );
    }
    return "loading...";
};

export default ToysList;
