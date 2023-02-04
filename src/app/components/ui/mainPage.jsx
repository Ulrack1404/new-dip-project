import React, { useEffect, useState } from "react";
import API from "../../api";
import { paginate } from "../../utils/paginate";
import Pagination from "./pagination";
import _ from "lodash";
import GroupList from "./groupList";
import ToysList from "./toysList";

const MainPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [toys, setToys] = useState();
    const [categories, setCategories] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState({ path: "price", order: "asc" });
    const pageSize = 4;

    useEffect(() => {
        API.categories.fetchAll().then((data) => setCategories(data));
    }, []);
    useEffect(() => {
        API.toys.fetchAll().then((data) => setToys(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    const handleSearchQuery = ({ target }) => {
        setSelectedProf(undefined);
        setSearchQuery(target.value);
    };

    const handleCategoriesSelect = (item) => {
        if (searchQuery !== "") setSearchQuery("");
        setSelectedProf(item);
    };

    if (toys) {
        function filterToys(data) {
            const filteredToys = searchQuery
                ? data.filter(
                      (toy) =>
                          toy.name
                              .toLowerCase()
                              .indexOf(searchQuery.toLowerCase()) !== -1
                  )
                : selectedProf
                ? data.filter(
                      (toy) =>
                          JSON.stringify(toy.category) ===
                          JSON.stringify(selectedProf)
                  )
                : data;
            return filteredToys;
        }
        const filteredToys = filterToys(toys);

        const count = filteredToys.length;
        const sortedToys = _.orderBy(
            filteredToys,
            [sortBy.path],
            [sortBy.order]
        );
        const toysCrop = paginate(sortedToys, currentPage, pageSize);
        const clearFilter = () => {
            setSelectedProf();
        };

        return (
            <div>
                <div className="mb-4">
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search..."
                            aria-label="Search"
                            onChange={handleSearchQuery}
                            value={searchQuery}
                        />
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="d-flex">
                    {categories && (
                        <div className="d-flex flex-column border col-3 me-2">
                            <GroupList
                                selectedItem={selectedProf}
                                items={categories}
                                onItemSelect={handleCategoriesSelect}
                            />
                            <button
                                className="btn btn-secondary mt-2"
                                onClick={clearFilter}
                            >
                                {" "}
                                Очистить
                            </button>
                        </div>
                    )}

                    {count > 0 && (
                        <ToysList
                            toys={toysCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                        />
                    )}
                </div>
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        );
    }
    return "loading...";
};

export default MainPage;
