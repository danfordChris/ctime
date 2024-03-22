import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function Privacy() {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [customEncryptedText, setCustomEncryptedText] = useState('');

  const encryptText = () => {
    const encrypted = CryptoJS.AES.encrypt(text, password).toString();
    setEncryptedText(encrypted);
  };

//   const decryptText = () => {
//     try {
//       const decrypted = CryptoJS.AES.decrypt(encryptedText, password).toString(CryptoJS.enc.Utf8);
//       setDecryptedText(decrypted);
//     } catch (error) {
//       setDecryptedText('Error: Incorrect password or invalid ciphertext.');
//     }
//   };

  const decryptCustomText = () => {
    try {
      const decrypted = CryptoJS.AES.decrypt(customEncryptedText, password).toString(CryptoJS.enc.Utf8);
      setDecryptedText(decrypted);
    } catch (error) {
      setDecryptedText('Error: Incorrect password or invalid ciphertext.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Cryptographic Operations</h1>
      <div className="mb-4">
        <label className="block mb-2">Text:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <button onClick={encryptText} className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Encrypt
        </button>
        {/* <button onClick={decryptText} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Decrypt
        </button> */}
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold">Encrypted Text:</h2>
        <p className="break-all">{encryptedText}</p>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Custom Encrypted Text:</label>
        <textarea
          value={customEncryptedText}
          onChange={(e) => setCustomEncryptedText(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        ></textarea>
        <button onClick={decryptCustomText} className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Decrypt Custom Text
        </button>
      </div>
      <div>
        <h2 className="text-lg font-bold">Decrypted Text:</h2>
        <p className="break-all">{decryptedText}</p>
      </div>
    </div>
  );
}

export default Privacy;
