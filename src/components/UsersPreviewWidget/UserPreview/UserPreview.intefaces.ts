import { User } from '../../../store/usersReducer'

export interface UserPreviewProps extends User {
  openUser: () => void
}
