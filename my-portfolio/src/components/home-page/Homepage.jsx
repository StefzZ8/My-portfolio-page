import './Homepage.scss';
import { Link } from 'react-scroll';
import Button from '../UI/Button';

const Homepage = () => {
  return (
    <div id="home" className="home__page-section">
      <span className="hello">Hello,</span>
      <span>
        I'm <span className="name">Stefan.</span>
        <br />
        Web Developer
      </span>
      <h2>Junior Frontend Developer</h2>
      <Button>
        <Link
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}>
          CONTACT ME
        </Link>
      </Button>
    </div>
  );
};

export default Homepage;