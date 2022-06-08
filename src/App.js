import './App.css';
import Navbar from './components/Navbar';
import Rating from './components/Rating';
import Autocomplete from './components/Autocomplete';
import BookCard from './components/BookCard';
import LoginForm from './forms/LoginForm';
import ProfileForm from './forms/ProfileForm';
import Button from './components/Button';
import { CancelToken } from 'apisauce';
import apiUser from './api/apiUser'
import apiBook from './api/apiBook'
import BrowseAllBooks from './components/BrowseAllBooks'
import UserBooks from './components/UserBooks'
import SingleBook from './components/SingleBook'
import FilterBooks from './components/FilterBooks'
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

let myToken = 'FuIfkILCdvcBwgbGEnGMIECgNRqwFJ-QJV8N9lRVZmM'

let patrick = {
  first_name: 'patrick',
  last_name: 'kozlowski',
  email: 'pk@pk.com',
  password: '123'
}

const handleAPITest = async () => {
  const source = CancelToken.source();
  const responseObject = await apiUser.put(myToken, patrick, source.token)
  console.log(responseObject)
}

function App() {
  const {user} = useContext(AppContext)
  return (
    <Navbar>
      <LoginForm/>
      <ProfileForm user={user}/>
    </Navbar>
  );
}

export default App;
