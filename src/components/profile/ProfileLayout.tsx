import { Outlet } from 'react-router-dom';

type Props = {};

function ProfileLayout({}: Props) {
  return (
    <>
      <Outlet />
    </>
  );
}

export default ProfileLayout;
