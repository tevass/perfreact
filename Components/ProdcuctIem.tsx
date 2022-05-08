type ProductItemProps = {
  product: {
    id: number;
    price: number;
    title: string;
  }
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <div>
      { product.title } - <strong>{product.title}</strong>
    </div>
  )
}