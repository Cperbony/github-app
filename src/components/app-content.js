'use strict'

import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';

const AppContent = ({
    userinfo,
    repos,
    starred,
    isFetching,
    handleSearch,
    getRepos,
    getStarred
}) => (
        <div className='app'>
            <Search isDisabled={isFetching} handleSearch={handleSearch} />
            {isFetching && <div>Carregando ....</div>}
            {!!userinfo && <UserInfo userinfo={userinfo} />}
            {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

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
    userinfo: React.PropTypes.object,
    repos: React.PropTypes.array.isRequired,
    starred: React.PropTypes.array.isRequired,
    isFetching: React.PropTypes.bool.isRequired,
    handleSearch: React.PropTypes.func.isRequired,
    getRepos: React.PropTypes.func.isRequired,
    getStarred: React.PropTypes.func.isRequired
}

export default AppContent