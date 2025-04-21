import Link from "next/link";
import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

interface Props {
  product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <Link className="hover:shadow-lg" href={`/products/${product.id}`}>
      <Card className="transition-all duration-200 hover:ring-gray-500 hover:ring-1 hover:shadow-xl hover:shadow-gray-500 h-full flex flex-col">
        {product.images && product.images[0] && (
          <div className="relative h-60 w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-500 ease-in-out"
            />
          </div>
        )}

        <CardHeader className="p-4">
          <CardTitle className="px-4">{product.name}</CardTitle>
          <CardContent className="p-4 flex-grow flex flex-col justify-between">
            {product.description && (
              <p className="text-gray-600 text-sm mb-2">
                {product.description}
              </p>
            )}
            {price && price.unit_amount && (
              <p>${(price.unit_amount / 100).toFixed(2)}</p>
            )}
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
};
