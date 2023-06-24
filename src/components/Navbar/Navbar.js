import React from 'react'
import { useDispatch } from 'react-redux';
import { handleLogout } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
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
        <div>
          <SearchBar/>
        </div>
        <div>
            <button onClick={handleOnLogout}>Logout</button>
        </div>
    </div>
  )
}

export default NavBar