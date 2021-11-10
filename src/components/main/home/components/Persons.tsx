import { Link } from "react-router-dom";
import { getPersons } from "../../../../servises/persons";
import './Persons.css';

function Persons() {
  return (
    <section className=''>
      <div className='section-wrapper__title'>
        <div className='section-wrapper'>
        <Link to="/add-person" className='link-name'>
          Agrega amig@s
        </Link>
      </div>
      <div className='list-friends-container'>
        {getPersons().map((name, index) => (
          <ul key={index} className='list-friends'>
            <li className='list-item'>
              {name}
            </li>
          </ul>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Persons;