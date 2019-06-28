'use strict'

import React from 'react'
import Search from './components/search'
import UserInfo from './components/user-info';
import Actions from './components/actions';
import Repos from './components/repos';

const App = () => (
  <div className='app'>
    <Search />
    <UserInfo />
    <Actions />

    <Repos
      className='repos'
      title='Repositórios'
      repos={[{
        name: 'Nome do Repositório',
        link: '#'
      }]}
    />

    <Repos
      className='rstarred'
      title='Favoritos'
      repos={[{
        name: 'Nome do Repositório',
        link: '#'
      }]}
    />








    <div className='starred'>
      <h2>Favoritos</h2>
      <ul>
        <li><a href='#'>Nome do Repositório</a></li>
        <li><a href='#'>Nome do Repositório</a></li>
      </ul>
    </div>
  </div>
)

export default App
