import { memo } from 'react'

type ProductItemProps = {
  product: {
    id: number;
    price: number;
    title: string;
  };
  onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  return (
    <div>
      { product.title } - <strong>{product.title}</strong>
      <button onClick={() => onAddToWishList(product.id)}>Add to wish list</button>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})

/**
 * 1. Criar uma no versão do componente
 * 2. Comparar a versão anterior
 * 3. Se houverem alterações, vai atualizar o que alterou
 */

/**
 * 1. Pure Functional Components
 * 2. Renders too often
 * 3. Re-renders with same props
 * 4. Medium to big size
 */

/**
 * useMemo / useCallback
 * 
 * useMemo
 * 1. Cálculos pesados
 * 2. Igualdade referencial (quando a gente repassa aquela informação a um componente filho)
 * 
 * 
 * useCallback
 * 1. Igualdade referencial (quando a gente repassa aquela informação a um componente filho)
 */