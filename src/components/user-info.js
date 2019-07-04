'use strict'

import React, { PropTypes } from 'react'
import { prototype } from 'stream';

const UserInfo = ({ userinfo }) => (
    <div className='user-info'>
        <img src={userinfo.photo} />

        <h1>
            <a href={`https://github.com/${userinfo.login}`}>
                {userinfo.username}</a>
        </h1>

        <ul className='repos-info'>
            <li>Repositórios: {userinfo.repos}</li>
            <li>Seguidores: {userinfo.followers}</li>
            <li>Seguindo: {userinfo.following}</li>
        </ul>
    </div>
)

UserInfo.propTypes = {
    userinfo: PropTypes.shape({
        username: React.PropTypes.string.isRequired,
        photo: React.PropTypes.string.isRequired,
        login: React.PropTypes.string.isRequired,
        repos: React.PropTypes.number.isRequired,
        followers: React.PropTypes.number.isRequired,
        following: React.PropTypes.number.isRequired,
    })
}

export default UserInfo