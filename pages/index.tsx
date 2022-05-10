import { NextPage } from "next"
import { FormEvent, useCallback, useState } from "react"
import { SearchResult } from "../Components/SearchResults"

type Results = {
  totalPrice: number;
  data: any[]
}

const Home: NextPage = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: []
  })

  async function handleSearch(event: FormEvent) {
    event.preventDefault()

    if (!search.trim()) return

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()
    
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: "currency",
      currency: 'BRL'
    })

    const products = data.map((product: any) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted: formatter.format(product.price)
      }
    })

    const totalPrice = data.reduce((total: any, product: any) => {
      return total + product.price
    }, 0)

    setResults({ totalPrice, data: products })
  }

  const addToWishList = useCallback((id: number) => {
    console.log(id)
  }, [])

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <SearchResult
        results={results.data}
        totalPrice={results?.totalPrice}
        onAddToWishList={addToWishList}
      />
    </div>
  )
}

export default Home
