import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({product}) {
  return(
    <div>
      <Header />
      <Featured product={product}/>
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductID = '64a40bded32560fbc4e21c50';
  await mongooseConnect();
  const product = await Product.findById(featuredProductID);
  return {
    props: {product: JSON.parse(JSON.stringify(product))},
  }
}