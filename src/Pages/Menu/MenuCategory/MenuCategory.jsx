import { Link } from "react-router-dom";
import Cover from "../../../Shred/Cover/Cover";
import MenuItem from "../../../Shred/MenuItem/MenuItem";

const MenuCategory = ({items,title,Img}) => {
    return (
        <div className="pt-8"> 
            {title &&<Cover img={Img} title={title}></Cover>}
            
            <div className="grid md:grid-cols-2 my-16 gap-10">       
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><button className=" btn btn-outline uppercase border-0 border-b-4 mt-4">Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;