import React, { useEffect } from 'react'
import { UsersWidget } from './components/UsersPreviewWidget'
import initData from './mockedData/initData.json'
import { useAppDispatch, useAppSelector } from './hooks'
import { setUsers } from './store/usersReducer'
import './App.css'

export const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const { users } = useAppSelector((state) => state.users)

  useEffect(() => {
    dispatch(setUsers({ users: initData }))
  }, [dispatch])

  return (
    <div className="App">
      <UsersWidget users={users} />
    </div>
  )
}
