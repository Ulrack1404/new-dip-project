import React from "react";
import { getBasket } from "../../store/basket";
import { useSelector } from "react-redux";

const Basket = () => {
    const foodsInBasket = useSelector(getBasket());
    console.log("foodsInBasket:", foodsInBasket);

    const columns = {
        name: {
            path: "name",
            name: "Наименование"
        },
        basketCounter: {
            path: "basketCounter",
            name: "Количество"
        },
        basketPrice: {
            path: "basketPrice",
            name: "Сумма"
        }
    };
    if (foodsInBasket) {
        return (
            <div className="container mt-1">
                <table className="table">
                    <thead>
                        <tr>
                            {Object.keys(columns).map((column) => (
                                <th key={column} scope="col">
                                    {columns[column].name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {foodsInBasket.map((item) => (
                            <tr key={item._id}>
                                {Object.keys(columns).map((column) => (
                                    <td key={column}>{item[column]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
    //     return (
    //         <div className="container mt-1">
    //             <table className="table">
    //                 <thead>
    //                     <tr>
    //                         <th scope="col">#</th>
    //                         <th scope="col">First</th>
    //                         <th scope="col">Last</th>
    //                         <th scope="col">Handle</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     <tr>
    //                         <th scope="row">1</th>
    //                         <td>Mark</td>
    //                         <td>Otto</td>
    //                         <td>@mdo</td>
    //                     </tr>
    //                     <tr>
    //                         <th scope="row">2</th>
    //                         <td>Jacob</td>
    //                         <td>Thornton</td>
    //                         <td>@fat</td>
    //                     </tr>
    //                 </tbody>
    //             </table>
    //         </div>
    //     );
    // };
};
export default Basket;
