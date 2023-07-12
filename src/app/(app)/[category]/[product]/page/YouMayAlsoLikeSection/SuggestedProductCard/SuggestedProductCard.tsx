'use client'

type SuggestedProductCardProps = {
  name: string
  category: string
  slug: string
  image: ResponsiveImageType
}

export const SuggestedProductCard = ({
  name,
  category,
  slug,
  image,
}: SuggestedProductCardProps) => {
  return (
    <article data-testid="suggsted-product-card">
      <h3>{name}</h3>
    </article>
  )
}
