import { Link } from 'react-router-dom';

// mui components
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const departmentLinks = [
  { id: 1, image: '../images/department_women.jpg', link: 'women' },
  { id: 2, image: '../images/department_men.jpg', link: 'men' },
  { id: 3, image: '../images/department_kids.jpg', link: 'kids' },
  { id: 4, image: '../images/department_beauty.jpg', link: 'beauty' },
];

type Props = {};

function DepartmentLinkCard({}: Props) {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} component='section'>
      {departmentLinks.map((department, index) => {
        return (
          <Grid key={index} item xs={6} md={3} component='article'>
            <Box component={Link} to={`/department/${department.link}`}>
              <Box
                component='img'
                src={department.image}
                sx={{ width: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default DepartmentLinkCard;
