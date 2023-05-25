import CardDetails from "@/components/cardDetails";
import axios from "axios";
import React from "react";
export async function getProduct(id) {
  const res = await axios(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });
  return res.data
}
export async function generateMetadata({params}){
  const product=await getProduct(params.id)
  return{
    title:product.title,
    description:product.description,
    thumbnail:product.image,
    metadataBase: new URL('https://findtopia.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title:product.title,
    description:product.description,
    thumbnail:product.image
  },
  }
}

export default async function page({ params }) {
  const product = await getProduct(params.id);
  return (
    <main className="my-10 flex justify-center">
      {
        <CardDetails
          image={product.image}
          description={product.description}
          title={product.title}
        />
      }
    </main>
  );
}
