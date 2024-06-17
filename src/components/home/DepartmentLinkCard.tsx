import { Link } from 'react-router-dom';

const departmentLinks = [
  { id: 1, image: '../images/department_women.jpg', link: 'women' },
  { id: 2, image: '../images/department_men.jpg', link: 'men' },
  { id: 3, image: '../images/department_kids.jpg', link: 'kids' },
  { id: 4, image: '../images/department_beauty.jpg', link: 'beauty' },
];

function DepartmentLinkCard() {
  return (
    <section className='flex items-center gap-x-4'>
      {departmentLinks.map((department) => (
        <article key={department.id}>
          <Link to={`/department/${department.link}`}>
            <img src={department.image} alt={department.link} />
          </Link>
        </article>
      ))}
    </section>
  );
}

export default DepartmentLinkCard;
