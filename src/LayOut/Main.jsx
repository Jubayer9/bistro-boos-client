import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shred/Footer/Footer';
import NavBar from '../Shred/NavBar/NavBar';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') ||location.pathname.includes('signup')
    return (
        <div>
           {noHeaderFooter ||  <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;