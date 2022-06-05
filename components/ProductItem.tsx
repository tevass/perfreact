import { memo, useState } from 'react'
import { AddProductToWishlistProps } from './AddProductToWishlist';
import dynamic from 'next/dynamic';
import lodash from 'lodash'

// import { AddProductToWishlist } from './AddProductToWishlist';

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
  return import('./AddProductToWishlist').then(mod => mod.AddProductToWishlist)
}, {
  loading: () => <span>Carregando...</span>
})

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  };
  onAddToWishlist: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false)

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>
        Adicionar aos favoritos
      </button>
      
      { isAddingToWishlist && (
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      ) }
    </div>
  )
}

// eslint-disable-next-line react/display-name
export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return lodash.isEqual(prevProps.product, nextProps.product)
})

/**
 * memo
 * 
 * 1. Pure Functional Components
 * 2. Renders to often
 * 3. Re-renders with same props
 * 4. Medium to big size
 */