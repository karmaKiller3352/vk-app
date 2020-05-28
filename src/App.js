import React, { useReducer } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavbarCustom from './components/Navbar';

import Home from './pages/Home';
import User from './pages/User';

import Context from './context/users/ContextUsers';
import ReducerUsers from './context/users/ReducerUsers';
import stateUsers from './context/users/StateUsers';

const ACCESS_TOKEN =
  /*'b0df5930b0df5930b0df59304cb0ae9b5abb0dfb0df5930ee6a187f1011c1f499ede2f0';*/
  '4b7861134b7861134b786113794b09feea44b784b78611315d6ecd19751dc711d47446d';

export const requests = {
  userInfo: (id) =>
    `https://api.vk.com/method/users.get?&user_ids=${id}&fields=photo_100,bdate,sex&access_token=${ACCESS_TOKEN}&v=5.89`,
  userWall: (id) =>
    `https://api.vk.com/method/wall.get?&owner_id=${id}&access_token=${ACCESS_TOKEN}&v=5.103`,
  getUserFriends: (id) =>
    `https://api.vk.com/method/friends.get?&user_id=${id}&order=name&fields=photo_50&access_token=${ACCESS_TOKEN}&v=5.89`,
};

function App() {
  const [state, dispatch] = useReducer(ReducerUsers, stateUsers);
  return (
    <Context.Provider value={{ state, dispatch, ACCESS_TOKEN, requests }}>
      <BrowserRouter>
        <NavbarCustom />
        <div className='container pt-4'>
          <Switch>
            <Route path={'/vk-app/'} exact component={Home} />
            <Route path={'/vk-app/user/:id'} component={User} />
          </Switch>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
