import React, { useState } from 'react';
import axios from 'axios';

const ScanReport = ({ report }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">Scan Report:</h2>
            {/* Display relevant information from the scan report */}
            <p>Scan Type: {report.data.type}</p>
            <p>Scan ID: {report.data.id}</p>
            {/* You can add more details as needed */}
        </div>
    );
};

const Protection = () => {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [scanning, setScanning] = useState(false);
    const [scanComplete, setScanComplete] = useState(false);
    const [scanReport, setScanReport] = useState(null);
    const [scanHistory, setScanHistory] = useState([]);
    const [error, setError] = useState(null);

    const fetchScanReport = async (id) => {
        try {
            const options = { method: 'GET', headers: { accept: 'application/json' } };
            const response = await fetch(`https://www.virustotal.com/api/v3/analyses/${id}`, options);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching scan report:', error);
            throw new Error('An error occurred while fetching the scan report.');
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setError(null);
    };

    const handleScanFile = async () => {
        if (!file) {
            setError('Please select a file.');
            return;
        }

        try {
            setScanning(true);
            const formData = new FormData();
            formData.append('file', file);
            const response = await axios.post(
                'https://www.virustotal.com/api/v3/files',
                formData,
                {
                    headers: {
                        'x-apikey': '338a82a035bb9742a3eaeba0a71e4656dbbab1a5fd66a0aa9b609a6025396eeb',
                    },
                    onUploadProgress: (progressEvent) => {
                        const progressPercent = Math.round(
                            (progressEvent.loaded / progressEvent.total) * 100
                        );
                        setProgress(progressPercent);
                    },
                }
            );
            setScanComplete(true);
            const scanId = response.data.data.id;
            const scanReportData = await fetchScanReport(scanId);
            setScanReport(scanReportData);
            setScanHistory([...scanHistory, scanReportData]); // Store scan report in history
            setTimeout(() => {
                setScanComplete(false);
                setFile(null);
                setProgress(0);
            }, 3000); 
        } catch (error) {
            console.error('Error scanning file:', error);
            setError('An error occurred while scanning the file.');
        } finally {
            setScanning(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold mb-2">Scan for Viruses</h1>
                <p className="text-gray-600">Upload a file to scan for viruses.</p>
            </div>
            {!scanComplete && (
                <div className="flex flex-col items-center">
                    <label className="w-full border-dashed border-2 border-gray-300 rounded-lg py-6 px-4 mb-6 cursor-pointer hover:border-gray-500">
                        <input type="file" className="hidden" onChange={handleFileChange} />
                        {file ? (
                            <span className="text-gray-800 font-semibold">{file.name}</span>
                        ) : (
                            <span className="text-gray-500">Choose a file</span>
                        )}
                    </label>
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    <button
                        className={`bg-green-500 text-white font-bold py-2 px-8 rounded-lg text-xl ${
                            scanning && 'opacity-50 cursor-not-allowed'
                        }`}
                        onClick={handleScanFile}
                        disabled={scanning}
                    >
                        {scanning ? 'Scanning...' : 'Scan File'}
                    </button>
                </div>
            )}
            {scanComplete && (
                <div>
                    <div className="text-green-500 font-bold mt-4 text-2xl">
                        File successfully scanned for viruses.
                    </div>
                    <ScanReport report={scanReport} /> {/* Display the fetched scan report */}
                </div>
            )}
            {scanHistory.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Scan History</h2>
                    {scanHistory.map((report, index) => (
                        <ScanReport key={index} report={report} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Protection;
