// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Accounts: React.FC = () => {
//     const [data, setData] = useState<any>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         // Update this URL to point to your Express server's location
//         const apiUrl = 'http://localhost:3001/accounts';

//         axios.get(apiUrl)
//             .then(response => {
//                 setData(response.data);
//                 setLoading(false);
//             })
//             .catch(err => {
//                 setError('An error occurred while fetching data.');
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>{error}</p>;

//     return (
//         <div>
//             <h2>Accounts Data</h2>
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//     );
// }

// export default Accounts;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Accounts: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 10;  // or any other number you prefer

    useEffect(() => {
        const apiUrl = `http://localhost:3001/accounts?limit=${itemsPerPage}&offset=${(currentPage - 1) * itemsPerPage}`;

        axios.get(apiUrl)
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError('An error occurred while fetching data.');
                setLoading(false);
            });
    }, [currentPage]);

    const handleNext = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrevious = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));  // Ensure it doesn't go below 1
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Accounts Data</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
}

export default Accounts;
