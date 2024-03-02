// Import necessary modules
import { connectToPostgreSql } from "../configs/db.js";

// Controller function to get all records
export const getAllRecords = async (req, res) => {
    try {
        // Connect to PostgreSQL
        const client = await connectToPostgreSql();

        // Query to fetch all records
        const query = `SELECT * FROM customers`;

        // Execute the query
        const result = await client.query(query);

        // Return the fetched data
        return res.status(200).json({ records: result.rows });
    } catch (error) {
        console.error('Error fetching data from PostgreSQL:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
