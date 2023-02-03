export interface User {
  phone: string
  name: string
  nickname: string
  email: string
  position: string
  photo: string
}

export interface InitialState {
  users: User[] | []
}

export interface SetUsers {
  type: 'setUsers'
  payload: InitialState
}

export const setUsers = (users: InitialState): SetUsers => {
  return { type: 'setUsers', payload: users }
}

type Action = SetUsers

const initialState: InitialState = {
  users: [],
}

export default function usersReducer(state = initialState, action: Action) {
  const { type, payload } = action
  switch (type) {
    case 'setUsers':
      return payload
    default:
      return state
  }
}
