import { Helmet } from 'react-helmet-async';
import Cover from '../../Shred/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boos| Menu</title>
            </Helmet>
            <Cover img={menuImg} title='our menu'></Cover>
            {/* main cover */}
            <SectionTitle
                subHeading="Don't Miss"
                heading="Toady's offer"
            >

            </SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}
            ></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={desserts} title="dessert" Img={dessertImg}
            ></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} Img={pizzaImg}>

            </MenuCategory>
            <MenuCategory items={salad} title={"salad"} Img={saladImg}>

            </MenuCategory>
            <MenuCategory items={soup} title={"soup"} Img={soupImg}>
            </MenuCategory>
          

        </div>
    );
};

export default Menu;
