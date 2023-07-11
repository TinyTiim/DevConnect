import React, { useState } from 'react';
import axios from 'axios';

const ProfilePage = ({ username }) => {
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(URL.createObjectURL(file));
   
  };

  const updateProfile = () => {
    const updatedProfile = {
      username: username,
      bio: bio,
      avatar: avatar,
    };

    
    axios
      .post('/api/updateProfile', updatedProfile)
      .then((response) => {
        console.log('Profile updated successfully');
        
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
        
      });

   
    setBio('');
    setAvatar('');
  };

  return (
    <div>
      <header></header>
      <main>
      <section className="profile">
          <h1 id="profile-name">{username}</h1>
          <div class="profile-divs"
            id="profile-avatar"
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <p id="profile-bio">{bio}</p>
          <div class="profile-divs">
            <label htmlFor="bio">Bio:</label>
            <textarea id="bio" value={bio} onChange={handleBioChange}></textarea>
          </div>
          <div class="profile-divs">
            <label htmlFor="avatar">Profile Icon:</label>
            <input type="file" id="avatar" onChange={handleAvatarChange} />
          </div>
          <button id="edit-profile-btn" onClick={updateProfile}>
            Save Profile
          </button>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default ProfilePage;
