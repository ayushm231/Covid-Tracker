import React, { useState, useEffect } from 'react'
import "./Statewise.css"

const Statewise = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://data.covid19india.org/v4/min/data.min.json');
            const jsonData = await response.json();
            const statewiseData = Object.keys(jsonData).map(state => ({
                state,
                ...jsonData[state]
            }));
            setData(statewiseData);
        };
        fetchData();
    }, []);
    return (
        <>


            <div className="container" >
                <div className="main-heading">
                    <h1 className="mb-3 mt-3 animated "><span className="font-weight-bold">INDIA</span> COVID-19 DASHBOARD</h1>
                </div>
                <div className="table-responsive">
                    <table className="table m-0 table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">State</th>
                                <th scope="col">Confirmed</th>
                                <th scope="col">Recovered</th>
                                <th scope="col">Deaths</th>
                                <th scope="col">Active</th>

                            </tr>
                        </thead>
                        <tbody>

                            {data.map(({ state, total }) => (
                                <tr key={state} >
                                    <td className="cell">{state}</td>
                                    <td className="cell">{total.confirmed ?? '-'}</td>
                                    <td className="cell">{total.recovered ?? '-'}</td>
                                    <td className="cell">{total.deceased ?? '-'}</td>
                                    <td className="cell">{total.active ?? '-'}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}

export default Statewise