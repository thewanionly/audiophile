export default function ProductDetail({
  params,
}: {
  params: { category: string; product: string }
}) {
  return (
    <p>
      ProductDetail {params.category} {params.product}
    </p>
  )
}
