import React, { useEffect, useState } from "react";
import API from "../../api";

const Search = () => {
    const [toys, setToys] = useState();
    useEffect(() => {
        API.toys.fetchAll().then((data) => setToys(data));
    }, []);

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchQuery = ({ target }) => {
        setSearchQuery(target.value);
    };

    function filterToys(data) {
        const filteredToys = searchQuery
            ? data.filter(
                  (toy) =>
                      toy.name
                          .toLowerCase()
                          .indexOf(searchQuery.toLowerCase()) !== -1
              )
            : data;
        return filteredToys;
    }
    const filteredToys = filterToys(toys);

    return (
        <div className="mb-4">
            <form className="d-flex" role="search">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                    onChange={handleSearchQuery}
                    // value={searchQuery}
                />
                <button className="btn btn-outline-success" type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};

export default Search;
