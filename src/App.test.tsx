import { render, screen } from '@testing-library/react'
import App from './App'

describe('App shell', () => {
  it('renders the core sections for the landing page skeleton', () => {
    render(<App />)

    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
    expect(screen.getByTestId('painpoints-section')).toBeInTheDocument()
    expect(screen.getByTestId('pricing-section')).toBeInTheDocument()
    expect(screen.getByTestId('cta-section')).toBeInTheDocument()
  })

  it('exposes CTA anchors for later linking', () => {
    render(<App />)

    expect(screen.getByTestId('hero-primary-cta')).toHaveAttribute('href', '#cta')
    expect(screen.getByTestId('hero-secondary-cta')).toHaveAttribute('href', '#cta')
  })
})
