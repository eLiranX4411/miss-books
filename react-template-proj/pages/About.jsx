const { Outlet, Link } = ReactRouterDOM

export function About() {
  return (
    <section className='about-page'>
      <h2>About us</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime voluptatem quaerat eum? Dicta molestiae quidem dolorem nulla provident pariatur officia minus! Velit delectus, repellendus
        facere dolore natus magni atque accusamus!
      </p>

      <nav>
        <Link to='/about/team'>
          <button>About Team</button>
        </Link>

        <Link to='/about/goal'>
          <button>About Goal</button>
        </Link>
      </nav>
      <Outlet />
    </section>
  )
}
