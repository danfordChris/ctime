import React from 'react';

const ScanReport = ({ output }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">Scan Report:</h2>
            <pre>{output}</pre>
        </div>
    );
};

export default ScanReport;
