import React from 'react'
import { useDispatch } from 'react-redux';
import { handleLogout } from '../../features/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import SearchBar from './SearchBar';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleOnLogout = (e) =>{
    e.preventDefault();
    dispatch(handleLogout())
    navigate('/login')
  }

  return (
    <div className='navbar'>
        <div className='logo'>
            NeoG 
        </div>
        <div style={{width: "30%"}}>
          <SearchBar/>
        </div>
        <div className='logout-button'>
          <select>
            <option><Link to={'/profile'}>Profile</Link></option>
            <option onClick={handleOnLogout}>Logout</option>
          </select>
        </div>
    </div>
  )
}

export default NavBar