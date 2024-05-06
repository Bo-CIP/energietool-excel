import React from "react";

const apiUrl = 'http://localhost:8000';

const fetchDataFromLaravel = async () => {
    try {
        const response = await fetch(`${apiUrl}/api/test`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}



export default function MyPage() {


    return (
        <div>

        </div>
    );
}