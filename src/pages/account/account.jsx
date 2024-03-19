// Account.jsx
import React from 'react';

function Account({ userData }) {
  return (
    <div >
      <h1 className="text-xl font-bold">Account Information</h1>
      <p>Email: {userData && userData.email}</p>
      {/* Add more user data fields as needed */}
    </div>
  );
}

export default Account;
