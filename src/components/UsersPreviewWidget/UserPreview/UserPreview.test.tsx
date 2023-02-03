import { fireEvent, render, screen } from '@testing-library/react'
import { UserPreview } from './UserPreview.component'
import initData from '../../../mockedData/initData.json'

describe('User Preview', function () {
  beforeAll(function () {})

  it('should contain provided data', function () {
    const user = initData[0]
    const spy = jest.spyOn({ callback: () => {} }, 'callback')

    let { getByText } = render(
      <UserPreview {...user} openUser={spy as unknown as () => void} />
    )

    expect(getByText(user.name)).toBeTruthy()
    expect(getByText(user.nickname)).toBeTruthy()
  })

  it('should call callback', function () {
    const user = initData[0]
    const spy = jest.spyOn({ callback: () => {} }, 'callback')

    render(<UserPreview {...user} openUser={spy as unknown as () => void} />)

    const button = screen.getAllByText('View')[0]
    fireEvent.click(button)
    expect(spy).toHaveBeenCalled()
  })
})
