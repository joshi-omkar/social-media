import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AUTHURL } from '../../utils/Constants'

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ firstName, lastName, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const response = await axios.post(
        AUTHURL.Signup,
        { firstName, lastName, email, password },
        config
      )
      return response.data
    } catch (error) {
      if (error.response && error.response.data.errors) {
        return rejectWithValue(error.response.data.errors[0])
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const response = await axios.post(
        AUTHURL.Login,
        { email, password },
        config
      )
      return response.data
    } catch (error) {
      if (error.response && error.response.data.errors) {
        return rejectWithValue(error.response.data.errors[0])
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)