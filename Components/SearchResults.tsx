import { ProductItem } from "./ProdcuctIem";

type SearchResultProps = {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>
}

export function SearchResult({ results }: SearchResultProps) {
  return (
    <div>

      { results.map(product => {
        return (
          <ProductItem product={product} />
        )
      }) }

    </div>
  )
}