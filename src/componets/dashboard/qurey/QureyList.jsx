'use client'


import React, { useEffect, useState } from "react";
import axios from "axios";
import "../feedback/list.css";
import Input from "@/componets/input/Input";


const QureyList = () => {
    const [data, setData] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/api/qurey/");
                setData(res?.data);
            } catch (err) {
                console.log("Error fetching data:", err);
            }
        };
        fetchData();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSearchChange = (e) => {
        setSearchName(e.target.value);
        setCurrentPage(1);
    };

    const filteredItems = searchName
        ? data.filter((item) => item.name.toLowerCase().includes(searchName.toLowerCase()))
        : data;

    const renderPagination = () => {
        const pageNumbers = Math.ceil(filteredItems.length / itemsPerPage);
        const paginationItems = [];
        for (let i = 1; i <= pageNumbers; i++) {
            paginationItems.push(
                <div key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                    <div className="d-flex">
                        <button onClick={() => paginate(i)} className="page-link">{i}</button>
                    </div>
                </div>
            );
        }
        return paginationItems;
    };

    return (
        <div className="feeback_main ">
            <div className="w-100">
                <h1 className="text-center pb-3">QureyList</h1>
            </div>
            <div className="container d-flex justify-content-between">
                <Input type="text" placeholder="Search by name" value={searchName} onChange={handleSearchChange} style={{ padding: "10px", marginBottom: "5px" }} />
            </div>
            <div className="container feeback_inner">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Time/Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.length > 0 ? (
                            currentItems.map((qurey) => (
                                <tr key={qurey._id}>
                                    <td>{qurey?.name}</td>
                                    <td>{qurey.email}</td>
                                    <td>{qurey.subject}</td>
                                    <td>{qurey.message}</td>
                                    <td>{new Date(qurey.timestamp).toLocaleString()}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No data found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="pagination">
                    <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>&laquo; Prev</button>
                    <ul className="pagination-render">
                        {renderPagination()}
                    </ul>
                    <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)} >Next &raquo;</button>
                </div>
            </div>
        </div>
    );
};

export default QureyList;
