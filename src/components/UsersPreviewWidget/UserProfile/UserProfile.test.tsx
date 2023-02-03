import { render } from '@testing-library/react'
import { UserProfile } from './UserProfile.component'
import initData from '../../../mockedData/initData.json'

describe('User Profile', function () {
  beforeAll(function () {})

  it('should contain provided data', function () {
    const user = initData[0]

    let { getByText } = render(<UserProfile {...user} />)

    expect(getByText(user.name)).toBeTruthy()
    expect(getByText(user.position)).toBeTruthy()
    expect(getByText(user.phone)).toBeTruthy()
    expect(getByText(user.email)).toBeTruthy()
  })
})
