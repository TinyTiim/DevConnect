import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePage = ({ username }) => {
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetchUserProfile();
  }, [username]);

  //Fetches profile data from server
  const fetchUserProfile = () => {
    axios
      .get(`http://localhost:3001/api/userProfile/${username}`)
      .then((response) => {
        const userProfile = response.data;
        setBio(userProfile.bio);
        setAvatar(userProfile.avatar);
        setTitle(userProfile.title);
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  };

  //Event handlers for user inputs
  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(URL.createObjectURL(file));
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  //Updates profile data on the server
  const updateProfile = () => {
    const updatedProfile = {
      username: username,
      bio: bio,
      avatar: avatar,
      title: title,
    };

    axios
      .post(`http://localhost:3001/api/updateProfile/${username}`, updatedProfile)
      .then((response) => {
        console.log('Profile updated successfully');
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
      });
  };

  return (
    <div>
      <header></header>
      <main>
        <section className="profile">
          <h1 id="profile-name">{username}</h1>
          <div className="profile-divs" id="profile-avatar" style={{ backgroundImage: `url(${avatar})` }}></div>
          <div className="profile-divs">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" value={title} onChange={handleTitleChange} />
          </div>
          <p id="profile-bio">{bio}</p>
          <div className="profile-divs">
            <label htmlFor="bio">Bio:</label>
            <textarea id="bio" value={bio} onChange={handleBioChange}></textarea>
          </div>
          <div className="profile-divs">
            <label htmlFor="avatar">Profile Icon:</label>
            <input type="file" id="avatar" onChange={handleAvatarChange} />
          </div>
          <button id="edit-profile-btn" onClick={updateProfile}>Save Profile</button>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default ProfilePage;
