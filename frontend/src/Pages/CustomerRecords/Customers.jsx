import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PaginationComponent from '../../Components/Pagination/Pagination';
import "./Customers.css";
import { URLs } from '../../URLs';
function Customers() {
    const [allRecords, setAllRecords] = useState([]); // State to store all records
    const [filteredRecords, setFilteredRecords] = useState([]); // State to store filtered records
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortByDate, setSortByDate] = useState('');
    const [sortByTime, setSortByTime] = useState('');
    const [sortOrderDate, setSortOrderDate] = useState('');
    const [sortOrderTime, setSortOrderTime] = useState('');

    useEffect(() => {
        // Fetch all records when component mounts
        getAllRecords();
    }, []);

    useEffect(() => {
        // Filter records based on search query, sort, and pagination when any of these values change
        filterRecords();
    }, [allRecords, searchQuery, sortByDate, sortByTime, sortOrderDate, sortOrderTime, page]);

    const getAllRecords = async () => {
        try {
            const response = await axios.get(URLs.GET_CUSTOMERS_RECORDS);
            setAllRecords(response.data.records);
            filterRecords(); // Call filterRecords after fetching all records
        } catch (error) {
            console.log("Error in getAllRecords", error);
        }
    };

    const filterRecords = () => {
        // Apply search filter
        let filtered = allRecords.filter(record =>
            record.customer_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            record.location.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Apply sorting
        if (sortByDate && sortOrderDate) {
            filtered.sort((a, b) => {
                const aValue = new Date(a.created_at);
                const bValue = new Date(b.created_at);
                return sortOrderDate === 'asc' ? aValue - bValue : bValue - aValue;
            });
        }

        if (sortByTime && sortOrderTime) {
            filtered.sort((a, b) => {
                const aValue = new Date(a.created_at).getTime();
                const bValue = new Date(b.created_at).getTime();
                return sortOrderTime === 'asc' ? aValue - bValue : bValue - aValue;
            });
        }

        // Calculate pagination
        const startIndex = (page - 1) * 20;
        const endIndex = startIndex + 20;
        const paginated = filtered.slice(startIndex, endIndex);

        // Update filtered records and total pages
        setFilteredRecords(paginated);
        setTotalPages(Math.ceil(filtered.length / 20));
    };

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setPage(1)
    };

    const handleSortChange = (field, value) => {
        if (field === 'date') {
            setSortByDate(value.split('-')[0]);
            setSortOrderDate(value.split('-')[1]);
        } else if (field === 'time') {
            setSortByTime(value.split('-')[0]);
            setSortOrderTime(value.split('-')[1]);
        }
    };

    return (
        <div className="container">
            <div className='heading'><h1>Customers Records</h1></div>
            <div className="search-container">
                <input className="search-input" type="text" placeholder="Search by Name or Location" value={searchQuery} onChange={handleSearchChange} />
                <div className="select-container">
                    <select className="date-select" value={`${sortByDate}-${sortOrderDate}`} onChange={(e) => handleSortChange('date', e.target.value)}>
                        <option value="">Sort by Date...</option>
                        <option value="date-asc">Date (ASC)</option>
                        <option value="date-desc">Date (DESC)</option>
                    </select>
                    <select className="time-select" value={`${sortByTime}-${sortOrderTime}`} onChange={(e) => handleSortChange('time', e.target.value)}>
                        <option value="">Sort by Time...</option>
                        <option value="time-asc">Time (ASC)</option>
                        <option value="time-desc">Time (DESC)</option>
                    </select>
                </div>
            </div>
            {filteredRecords.length > 0 && (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Phone</th>
                                <th>Location</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRecords.map((record, index) => (
                                <tr key={index}>
                                    <td>{record.sno}</td>
                                    <td>{record.customer_name}</td>
                                    <td>{record.age}</td>
                                    <td>{record.phone}</td>
                                    <td>{record.location}</td>
                                    <td>{new Date(record.created_at).toLocaleDateString()}</td>
                                    <td>{new Date(record.created_at).toLocaleTimeString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='Pagination'>
                    <PaginationComponent count={totalPages} shape="rounded" page={page} onChange={handlePageChange} /></div>
                </div>
            )}
        </div>
    );
}

export default Customers;
