import { avatar } from '../../../shared/images'
import { mockedAvatars } from '../../../mockedData/avatars/mockedAvatars'
import { Button } from '../../Button'
import { UserPreviewProps } from './UserPreview.intefaces'
import './UserPreview.styles.css'

export const UserPreview: React.FC<UserPreviewProps> = ({
  name,
  nickname,
  photo,
  openUser,
}) => {
  return (
    <div className="user-preview">
      <img
        className="user-preview__avatar"
        src={mockedAvatars[photo]}
        alt={`User avatar of ${name}`}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = avatar
        }}
      />

      <div className="user-preview__description">
        <div className="user-preview__user-name">{name}</div>
        <div className="user-preview__user-nickname">{nickname}</div>
      </div>

      <Button
        className="user-preview__view-button"
        size="content"
        variant="primary"
        content={'View'}
        onClick={openUser}
      />
    </div>
  )
}
