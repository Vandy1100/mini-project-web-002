import Image from "next/image";
import Product from "@/components/product";
import User from "@/components/user";
import Category from "@/components/category";
import axios from "axios";
export async function getProduct() {
  const res = await axios(
    `https://fakestoreapi.com/products`,
    {cache:'no-store'}
  );
  return res.data
}
export async function getUser() {
  const res = await axios(
    `https://fakestoreapi.com/users`,
    {cache:'no-store'}
  );
  return res.data;
}
export async function getCategory() {
  const res = await axios(
    `https://fakestoreapi.com/products/categories`,
    {cache:'no-store'}
  );
  return res.data;
}
export default async function Home() {
  const products = await getProduct();
  const users = await getUser();
  const categories = await getCategory();
  console.log(categories);

  return (
    <>
      <main className="grid  grid-cols-1 gap-4 ">
        <div className="flex gap-3  justify-center col-span-2 min-h-min flex-row flex-wrap p-2">
          {products.map((product, index) => (
            <Product
            id={product.id}
              key={index}
              title={product.title}
              image={product.image}
              price={product.price}
              description={product.description}
            />
          ))}
      
        </div>
        <div className="">
        <h1 className='font-bold font-mono text-3xl text-center relative before:absolute before:bg-gray-600 before:top-10 before:ms-7 before:w-20 before:h-1'>Category</h1>
        <div className="flex justify-center">
        <div className="w-96">
            <div>
                <img src='https://cdn.corporatefinanceinstitute.com/assets/product-mix3.jpeg' alt=''/>
                <p className="my-2">Type of categories:</p>
            </div>
            <div className="bg-gray-600 w-full h-1 text-sm rounded-sm mb-2">

            </div>
  
            <div >
             {
              categories.map((category,index)=>(
                <Category key={index} category={category}/>
              ))
             }
             </div>
             </div>
            </div>
       
        </div>
      </main>
      <main className="grid grid-cols-1 gap-4">
      <h2 className="text-center relative font-bold text-3xl my-5 before:absolute before:bg-gray-600 before:top-10 before:ms-7 before:w-20 before:h-1">Our Users</h2>
        <div className="flex gap-5 col-span-3 min-h-min justify-around flex-row flex-wrap  p-2">
          {users.map((user, index) => (
            <User
              key={index}
              name={user.username}
              email={user.email}
            />
          ))}
        </div>
      </main>
    </>
  );
}
