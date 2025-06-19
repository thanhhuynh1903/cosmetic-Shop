import Card from "../../components/Card/Card"

export default function ProductsList({ products, loading }) {
  if (loading) {
    return (
      <div className="w-full flex justify-center items-center py-20">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full border-4 border-t-[#C28B7A] border-r-[#C28B7A] border-b-transparent border-l-transparent animate-spin"></div>
          <p className="mt-4 text-[#C28B7A] font-medium">Loading products...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap md:justify-start md:gap-5 sm:justify-start gap-4 px-2 sm:px-4 md:px-6">
      {products.map((product) => (
        <Card key={product.id} product={product} expired={true} isSwiper={false}/>
      ))}
    </div>
  )
}
