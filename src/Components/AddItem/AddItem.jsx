import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddItem = () => {
    const [axiosSecure]=useAxiosSecure()
    const { register, handleSubmit,reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success){
                    const imgURL = imgResponse.data.display_url;
                    const {name,price,category,recipe} = data;
                    const newItem = {name,price: parseFloat(price),category,recipe, image:imgURL}
                    console.log(newItem);
                    axiosSecure.post('/menu',newItem)   
                    .then(data=>{
                        console.log(data.data);
                        if(data.data.insertedId ){
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Item added successfully',
                                showConfirmButton: false,
                                timer: 1500
                              })
                        }
                    })
                }
                    
            })


    };
    return (
        <div className="w-full px-10">
            <SectionTitle subHeading={"what's new"} heading="ADD AN ITEM"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control mb-4 w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />

                </div>
                <div className="flex my-4">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue='Pick one'{...register("category", { required: true })} className="select select-bordered">
                            <option disabled >Pick one</option>
                            <option>Pizza</option>
                            <option>Salad</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Desi</option>
                            <option>Drinks</option>
                        </select>

                    </div>
                    <div className="form-control w-full ml-5 max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })}
                            placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" {...register("recipe", { required: true })}
                        placeholder="Recipe Details"></textarea>

                </div>
                <div className="form-control w-full my-4 max-w-xs">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />

                </div>

                <input

                    className="btn btn-sm mt-4" type="submit" value="Add Item" />


            </form>
        </div>
    );
};

export default AddItem;
