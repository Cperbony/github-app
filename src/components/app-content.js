'use strict'

import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';
import { userInfo } from 'os';

const AppContent = ({ userinfo, repos, starred }) => (
    <div className='app'>
        <Search />
        {!!userinfo && <UserInfo userinfo={userInfo} />}
        {!!userinfo && <Actions />}

        {!!repos.length &&
            <Repos
                className='repos'
                title='Repositórios'
                repos={repos}
            />
        }

        {!!starred.length &&
            <Repos
                className='starred'
                title='Favoritos'
                repos={starred}
            />
        }
    </div>
)

AppContent.propTypes = {
    userinfo: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired
}

export default AppContent