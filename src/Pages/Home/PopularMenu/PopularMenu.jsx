import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shred/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item=> item.category === 'popular');
  
    return (
        <section className=" md-12">
            <SectionTitle
                subHeading='Check it out'
                heading="From Our Menu"
            >

            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">       
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="ml-[45%] btn btn-outline uppercase border-0 border-b-4 mt-10">View Full  Menu</button>
            <div className="bg-black mt-16 py-[2.5%] w-[50%] h-[100px] text-center mx-auto">
                <h1 className="font-bold text-3xl">Call Us: +88 0192345678910</h1>
            </div>
        </section>
    );
};

export default PopularMenu;