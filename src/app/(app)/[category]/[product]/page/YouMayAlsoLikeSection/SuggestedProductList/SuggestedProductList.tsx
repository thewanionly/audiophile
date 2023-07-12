'use client'

import { SuggestedProductCard } from '../SuggestedProductCard'

type SuggestedProductListProps = { data: SuggestedProduct[] }

export const SuggestedProductList = ({ data }: SuggestedProductListProps) => {
  return (
    <ul>
      {data.map(({ id, name, category, slug, thumbnailImage }) => (
        <li key={id}>
          <SuggestedProductCard
            name={name}
            category={category}
            slug={slug}
            image={thumbnailImage}
          />
        </li>
      ))}
    </ul>
  )
}
