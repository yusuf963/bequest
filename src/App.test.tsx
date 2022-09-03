import {render, screen} from '@testing-library/react'
import ReactDOM from 'react-dom'
import App from './App'

test('renders the title string on the dom', () => {
  render(<App />)
  const linkElement = screen.getByText(
    /No-nonsense life cover in a few minutes./i
  )
  expect(linkElement).toBeInTheDocument()
})

test('The image should be on the dom', async () => {
  render(<App />)
  const heroImage = screen.getByAltText('heroImage')
  expect(heroImage).toBeInTheDocument()
})

test('The search input is ion the dom', async () => {
  render(<App />)
  const input = screen.getByPlaceholderText(/Search/i)
  expect(input).toHaveValue('')
})

test('The Book address is rendered on the dom', async () => {
  render(<App />)
  const input = screen.getByTestId('address-book')
  expect(input).toBeInTheDocument()
})

describe('it should render the entire app', () => {
  let container: HTMLDivElement
  beforeEach(() => {
    container = document.createElement('div')
    document.body.append(container)
    ReactDOM.render(<App />, container)
  })
  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })
  it('should render only on input', () => {
    const input = container.querySelectorAll('input')
    expect(input).toHaveLength(1)
  })
})
