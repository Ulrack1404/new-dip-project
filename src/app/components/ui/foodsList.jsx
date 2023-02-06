import React, { useEffect, useState } from "react";
import API from "../../api";
import { paginate } from "../../utils/paginate";
import Pagination from "./pagination";
import _ from "lodash";
import GroupList from "./groupList";
import FoodsContent from "./foodsContent";

const FoodsList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [foods, setFoods] = useState();
    const [categories, setCategories] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState({ path: "price", order: "asc" });
    const pageSize = 4;

    useEffect(() => {
        API.categories.fetchAll().then((data) => setCategories(data));
    }, []);
    useEffect(() => {
        API.foods.fetchAll().then((data) => setFoods(data));
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

    if (foods) {
        function filterFoods(data) {
            const filteredFoods = searchQuery
                ? data.filter(
                      (food) =>
                          food.name
                              .toLowerCase()
                              .indexOf(searchQuery.toLowerCase()) !== -1
                  )
                : selectedProf
                ? data.filter(
                      (food) =>
                          JSON.stringify(food.category) ===
                          JSON.stringify(selectedProf)
                  )
                : data;
            return filteredFoods;
        }
        const filteredFoods = filterFoods(foods);

        const count = filteredFoods.length;
        const sortedFoods = _.orderBy(
            filteredFoods,
            [sortBy.path],
            [sortBy.order]
        );
        const foodsCrop = paginate(sortedFoods, currentPage, pageSize);
        const clearFilter = () => {
            setSelectedProf();
        };

        return (
            <div className="container mt-1">
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
                        <div className="d-flex flex-column border col-5 me-5">
                            <GroupList
                                selectedItem={selectedProf}
                                items={categories}
                                onItemSelect={handleCategoriesSelect}
                            />
                            <div className="d-flex justify-content-center">
                                <button
                                    className="btn btn-primary rounded-pill px-4 me-3 mt-2"
                                    onClick={clearFilter}
                                >
                                    {" "}
                                    Очистить
                                </button>
                            </div>
                        </div>
                    )}

                    {count > 0 && (
                        <FoodsContent
                            foods={foodsCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                        />
                    )}
                </div>
                <div className="mt-5">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        );
    }
    return (
        <div className="d-flex justify-content-center h-400px align-items-center">
            <div className="spinner-grow text-warning me-3" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning me-3" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default FoodsList;
