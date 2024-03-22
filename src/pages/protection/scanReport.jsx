import React from 'react';

const ScanReport = ({ output }) => {
    const API_KEY = '338a82a035bb9742a3eaeba0a71e4656dbbab1a5fd66a0aa9b609a6025396eeb';
    return (
        <div className="border border-gray-300 rounded-lg p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">Scan Report:</h2>
        
            <pre>{output}</pre>
        </div>
    );
};

export default ScanReport;
