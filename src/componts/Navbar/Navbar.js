import React from 'react'

function Navbar(props) {
  const { currentOption, setCurrentOption } = props;

  return (
    <nav>
    <ul className="flex-row">

    <a href="/">
				<li className={currentOption === "about" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentOption("about")}>About Me</span>
				</li>
        </a>

        <a href="/">
				<li className={currentOption === "portfolio" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentOption("portfolio")}>Portfolio</span>
				</li>
        </a>

        <a href="/">
				<li className={currentOption === "contact" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentOption("contact")}>Contact</span>
				</li>
        </a>

        <a href="/">
				<li className={currentOption === "resume" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentOption("resume")}>Resume</span>
				</li>
        </a>

			</ul>
  </nav>
  )
}

export default Navbar