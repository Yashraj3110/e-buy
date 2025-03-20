import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const Productarray = {
    Product_Category: "",
    Product_SubCat: "",
    Product_Name: "",
    Product_Desc: "",
    Product_DetailDesc: "",
    Product_Images: [],
};

const ProductCreate = () => {
    const [Productdata, setProductdata] = useState(Productarray);
    const [Images, setImages] = useState([]);

    const apiUrl = process.env.REACT_APP_API_URL;

    // Handle input changes
    const HandelInputchange = (e) => {
        setProductdata({ ...Productdata, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const HandelSubmit = async (e) => {
        e.preventDefault();

        console.log(apiUrl);

        // Prepare form data for submission
        const formData = new FormData();
        formData.append("Product_Category", Productdata.Product_Category);
        formData.append("Product_SubCat", Productdata.Product_SubCat);
        formData.append("Product_Name", Productdata.Product_Name);
        formData.append("Product_Desc", Productdata.Product_Desc);
        formData.append("Product_DetailDesc", Productdata.Product_DetailDesc);

        Images.forEach((image, index) => {
            formData.append(`Product_Images`, image); // Append each file directly
        });

        console.log("Form Data Ready for Submission");

        try {
            const response = await axios.post(`${apiUrl}/api/product/create`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            console.log("Server Response:", response.data);
        } catch (error) {
            console.error("Error submitting the form:", error);
        }
    };
    // Handle image selection (no Base64 conversion for smaller payloads)
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        setImages(files); // Save raw file objects to state
    };

    return (
        <div>

            <section className="bg-white dark:bg-gray-900">
                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >

                    <div className="max-w-xl lg:max-w-3xl" style={{ width: "40vw" }}>

                        <form onSubmit={HandelSubmit} className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6 ">
                                <label for="price" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Product Category</label>
                                <select className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200" aria-label="Default select example" onChange={HandelInputchange} name='Product_Category' value={Productdata.Product_Category}>
                                    <option disabled value="">Select category</option>
                                    <option value="Web-development">Electronics</option>
                                    <option value="Data-Science">Cloths</option>
                                    <option value="Data-Analyst">Kitchen</option>

                                </select>
                            </div>
                            <div className="col-span-6 ">
                                <label for="price" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Sub category</label>
                                <select className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200" aria-label="Default select example" onChange={HandelInputchange} name='Product_SubCat' value={Productdata.Product_SubCat}>
                                    <option disabled value="">Select sub-category</option>
                                    <option value="Web-development">Web development</option>
                                    <option value="Data-Science">Data Science</option>
                                    <option value="Data-Analyst">Data Analyst</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="col-span-6 ">
                                <label
                                    htmlFor="FirstName"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Product Name
                                </label>

                                <input
                                    type="text"
                                    id="FirstName"
                                    name='Product_Name' value={Productdata.Product_Name}
                                    onChange={HandelInputchange}
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                                />
                            </div>
                            <div className="col-span-6 ">
                                <label
                                    htmlFor="FirstName"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Product Description
                                </label>

                                <input
                                    type="text"
                                    id="FirstName"
                                    name='Product_Desc' value={Productdata.Product_Desc}
                                    onChange={HandelInputchange}
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                                />
                            </div>
                            <div className="col-span-6 ">
                                <label
                                    htmlFor="FirstName"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Product Price
                                </label>

                                <input
                                    type="text"
                                    id="FirstName"
                                    name='Product_Price' value={Productdata.Product_Price}
                                    onChange={HandelInputchange}
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                                />
                            </div>
                            <div className="col-span-6">
                                <label
                                    htmlFor="Product_Image"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Product Image
                                </label>

                                <input
                                    type="file"
                                    id="Product_Image"
                                    name="Product_Image"
                                    multiple
                                    onChange={handleImageChange}
                                    accept="image/*" // To specify that only image files are allowed
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"

                                />
                                <p>{Images.length > 0 ? `${Images.length} file(s) selected` : "No file chosen"}</p>
                            </div>
                            <div className="col-span-6 ">
                                <label
                                    htmlFor="FirstName"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Product Detail description
                                </label>

                                <input
                                    type="text"
                                    id="FirstName"
                                    name='Product_DetailDesc' value={Productdata.Product_DetailDesc}
                                    onChange={HandelInputchange}
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                                />
                            </div>



                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                                >
                                    Save product
                                </button>


                            </div>
                        </form>
                    </div>
                </main>
            </section>
        </div>
    );
};

export default ProductCreate;