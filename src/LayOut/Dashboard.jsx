import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaCalendarAlt, FaHome, FaBook, FaUtensils, FaUsers } from 'react-icons/fa';
import { GiWallet, GiHamburgerMenu } from "react-icons/gi";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    // TODO: load data from the server to have dynamic isAdmin based on Data
    const isAdmin = true
    return (
        <div className="drawer drawer-mobile ">

            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] ">
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/mycart'><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/'><FaUtensils></FaUtensils>Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/mycart'><GiWallet></GiWallet>  MAnage Items </NavLink> </li>
                            <li><NavLink to='/dashboard/mycart'><FaBook></FaBook>  MAnage Book </NavLink> </li>
                            <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers>All  Users </NavLink> </li>
                        
                        </> : <>

                            <li><NavLink to='/dashboard/mycart'><FaHome></FaHome>User Home</NavLink></li>
                            <li><NavLink to='/dashboard/'><FaCalendarAlt></FaCalendarAlt>Reservations</NavLink></li>
                            <li><NavLink to='/dashboard/mycart'><GiWallet></GiWallet> Payment History </NavLink> </li>
                            <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart
                                <span className="badge badge-secondary">+ {cart?.length || 0}
                                </span>
                            </NavLink>

                            </li>
                        </>
                    }



                    {/* 55555555555555555555555555555555555555555555555 */}


                    <div className="divider "></div>
                    <li>
                        <NavLink to='/'><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li><NavLink to='/menu'><GiHamburgerMenu></GiHamburgerMenu>Menu</NavLink></li>
                    <li><NavLink to='/order/salad'><FaBook></FaBook>Shop</NavLink></li>
                    <li>
                        <NavLink to='/'>Contact</NavLink>
                    </li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;