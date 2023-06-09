import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaCalendarAlt, FaHome, FaBook, FaUtensils, FaUsers,FaShoppingBag } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { GiWallet, GiHamburgerMenu } from "react-icons/gi";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    // TODO: load data from the server to have dynamic isAdmin based on Data
    // const isAdmin = true
    const [isAdmin]=useAdmin()
    return (
        <div className="drawer drawer-mobile ">

            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] ">
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminhome'><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItem'><FaUtensils></FaUtensils>Add an Items</NavLink></li>
                            <li><NavLink to='/dashboard/manageitems'><GiWallet></GiWallet>  Manage Items </NavLink> </li>
                            <li><NavLink to='/dashboard/mycart'><FaBook></FaBook>  Manage Book </NavLink> </li>
                            <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers>All  Users </NavLink> </li>
                        
                        </> : <>

                            <li><NavLink to='/dashboard/userhome'><FaHome></FaHome>User Home</NavLink></li>
                            <li><NavLink to='/dashboard/'><FaCalendarAlt></FaCalendarAlt>Reservations</NavLink></li>
                            <li><NavLink to='/dashboard/payment'><GiWallet></GiWallet> Payment History </NavLink> </li>
                            <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart
                                <span className="badge badge-secondary">+ {cart?.length || 0}
                                </span>
                            </NavLink>

                            </li>
                        </>
                    }




                    <div className="divider "></div>


                    <li>
                        <NavLink to='/'><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li><NavLink to='/menu'><GiHamburgerMenu></GiHamburgerMenu>Menu</NavLink></li>
                    <li><NavLink to='/order/salad'><FaShoppingBag></FaShoppingBag>Shop</NavLink></li>
                    <li>
                      
                      <NavLink to='/'>
                        <MdEmail>
                      </MdEmail>
                        Contact
                        </NavLink>
                    </li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;