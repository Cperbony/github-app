'use strict'

import React from 'react'

const UserInfo = () => (
    <div className='user-info'>
        <img src='https://avatars0.githubusercontent.com/u/6401119?v=4' />
        <h1 className='username'>
            <a href='https://github.com/Cperbony'>Claudinei Perboni</a>
        </h1>

        <ul className='repos-info'>
            <li>Repositórios: 100</li>
            <li>Seguidores: 10</li>
            <li>Seguindo: 222</li>
        </ul>
    </div>
)

export default UserInfo