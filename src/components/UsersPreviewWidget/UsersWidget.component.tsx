import { useState } from 'react'
import { User } from '../../store/usersReducer'
import { Button } from '../Button'
import { UserPreview } from './UserPreview'
import { UserProfile } from './UserProfile'
import { UsersWidgetProps } from './UsersWidget.interfaces'
import './UsersWidget.styles.css'

export const UsersWidget: React.FC<UsersWidgetProps> = ({ users }) => {
  const [usersToDisplay, setUsersToDisplay] = useState<number>(3)
  const [openUser, setOpenUser] = useState<User>()
  const [isViewAllVisible, setIsViewAllVisible] = useState<boolean>(true)

  return (
    <article
      className={`users-widget__wrapper ${openUser ? 'border-none' : ''}`}
    >
      {!openUser && (
        <ul className="users-widget__list">
          {users.slice(0, usersToDisplay).map((user) => {
            return (
              <li key={user.email}>
                <UserPreview
                  {...user}
                  openUser={() => {
                    setOpenUser(user)
                  }}
                />
              </li>
            )
          })}
        </ul>
      )}

      {users.length > 3 && isViewAllVisible && (
        <Button
          className="users-widget__button"
          size="wide"
          variant="primary"
          content={'View all'}
          onClick={() => {
            setUsersToDisplay(users.length)
            setIsViewAllVisible(false)
          }}
        />
      )}

      {openUser && <UserProfile {...openUser} />}
    </article>
  )
}
