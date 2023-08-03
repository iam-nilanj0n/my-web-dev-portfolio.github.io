import './App.css';

function App() {
  return (
    <div className="App">

      {/* portfolio header section is here */}
      <header className='portfolio-header'>
        <h3>Nilanjan</h3>
        <div>
          <button>Home</button>
          <button>About</button>
          <button>Portfolio</button>
          <button>Experience</button>
          <button>Contact</button>
        </div>
      </header>

      {/* Home section is here */}
      <section className='home-section'>
        <div className='home-section-left'>
          <h1>
            I'm a Full Stack Developer
          </h1>

          <h3>
            I’m an aspiring Full Stack Developer looking for a new role in an exciting company. I am a creative front-end developer based in India. I have hands-on experience in building projects using HTML, CSS, Javascript, and MERN stack. I speacialise in creating interactive experiences using React.
          </h3>
        </div>

        <div className='home-section-right'>

        </div>
      </section>

      {/* About section is here */}
      <section className='about-section'>
        <h2>About</h2>

        <p>
          A self-driven individual who is good at problem solving and programming, with an emphasis on writing clean and maintainable code, aspiring to make a career in software engineering with a focus on full stack development.
        </p>

        <p>
          The web can sometimes be indistinguishable from magic, but I have the knowledge and patience required to make just about anything.
        </p>
      </section>

      {/* Portfolio section is here */}
      <section className='portfolio-section'>
        <h2>Projects</h2>

        <p>Projects Using HTML, CSS and vanilla JavaScript</p>

        <div>
          <div className='iframe-card'>
            <iframe src="https://iam-nilanj0n.github.io/showMoreOrLess.github.io/" title='Show More Or Less'></iframe>
            <p>Show Less Or More</p>
            <a target='blank' href='https://iam-nilanj0n.github.io/showMoreOrLess.github.io/'> Visit Site</a>
          </div>

          <div className='iframe-card'>
            <iframe src="https://iam-nilanj0n.github.io/gradeCalculator.github.io/" title='Grade Calculator'></iframe>
            <p>Grade Calculator</p>
            <a target='blank' href='https://iam-nilanj0n.github.io/gradeCalculator.github.io/'> Visit Site</a>
          </div>

          <div className='iframe-card'>
            <iframe src="https://iam-nilanj0n.github.io/tip-calculator.github.io/" title='Tip Calculator'></iframe>
            <p>Tip Calculator</p>
            <a target='blank' href='https://iam-nilanj0n.github.io/tip-calculator.github.io/'> Visit Site</a>
          </div>

          <div className='iframe-card'>
            <iframe src="https://iam-nilanj0n.github.io/US-zip-code-search.github.io/" title='US Zip Code Search'></iframe>
            <p>US Zip Code Searchr</p>
            <a target='blank' href='https://iam-nilanj0n.github.io/US-zip-code-search.github.io/'> Visit Site</a>
          </div>


        </div>
      </section>


    </div>
  );
}

export default App;
