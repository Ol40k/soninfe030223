import { mockedAvatars } from '../../../mockedData/avatars/mockedAvatars'
import { avatar } from '../../../shared/images'
import { User } from '../../../store/usersReducer'
import { Button } from '../../Button'
import './UserProfile.styles.css'

export const UserProfile: React.FC<User | undefined> = (props) => {
  return (
    <div className="user-profile">
      <div className="user-profile__basic-info">
        <img
          className="user-profile__avatar"
          src={mockedAvatars[props?.photo as string]}
          alt={`User avatar of ${props?.name}`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null
            currentTarget.src = avatar
          }}
        />

        <div className="user-profile__name">{props?.name}</div>
        <div className="user-profile__position">{props?.position}</div>
      </div>

      <div className="user-profile__contacts">
        <div className="user-profile__contacts-category">
          <p>
            <strong>Phone</strong>
          </p>
          <p>
            <strong>URL</strong>
          </p>
          <p>
            <strong>Email</strong>
          </p>
        </div>
        <div className="user-profile__contacts-data">
          <p>{props?.phone}</p>
          <p>
            <a href="https://example.com">https://example.com</a>
          </p>
          <p>
            <a href={`mailto:${props?.email}`}>{props?.email}</a>
          </p>
        </div>
      </div>

      <Button
        className=""
        size="wide"
        variant="fulfilled"
        content={'Send message'}
        onClick={() => {}}
      />
    </div>
  )
}
