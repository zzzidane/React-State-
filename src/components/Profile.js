import React from 'react';

const Profile = ({ person }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            <img 
                src={person.imgSrc} 
                alt={person.fullName}
                style={{ borderRadius: '50%' }}
            />
            <h2>{person.fullName}</h2>
            <p>{person.profession}</p>
            <p>{person.bio}</p>
        </div>
    );
};

export default Profile;