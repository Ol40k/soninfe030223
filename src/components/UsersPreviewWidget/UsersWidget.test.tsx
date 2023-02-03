import { fireEvent, render, screen } from '@testing-library/react'
import { UsersWidget } from './UsersWidget.component'
import initData from '../../mockedData/initData.json'

describe('Users Widget', function () {
  it('should render list with 3 users', function () {
    let { container } = render(<UsersWidget users={initData} />)
    expect(container.getElementsByClassName('user-preview').length).toBe(3)
  })

  it('should render rest of users when "View all" button clicked', function () {
    let { container } = render(<UsersWidget users={initData} />)

    const button = screen.getByText('View all')
    fireEvent.click(button)

    expect(container.getElementsByClassName('user-preview').length).toBe(10)
  })
})
