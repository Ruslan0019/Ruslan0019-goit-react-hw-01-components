import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/Transaction/TransactionHistory';
import data from '../src/data/data.json';
import transactions from '../src/data/transactions.json';
import friends from '../src/data/friends.json';
import user from '../src/data/user.json';

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transaction={transactions} />
    </>
  );
};

export default App;
