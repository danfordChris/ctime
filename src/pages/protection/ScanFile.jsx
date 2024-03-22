
import axios from 'axios';

export default async function handler(req, res) {
    const { file } = req.body;

    try {
        const formData = new FormData();
        formData.append('file', file);
        
        const response = await axios.post(
            'https://www.virustotal.com/api/v3/files',
            formData,
            {
                headers: {
                    'x-apikey': 'YOUR_VIRUSTOTAL_API_KEY',
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
        
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while scanning the file.' });
    }
}
