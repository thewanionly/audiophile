'use client'

import { SuggestedProductList } from './SuggestedProductList'

type YouMayAlsoLikeSectionProps = {
  data: SuggestedProduct[]
}

export const YouMayAlsoLikeSection = ({ data }: YouMayAlsoLikeSectionProps) => {
  return (
    <section>
      <SuggestedProductList data={data} />
    </section>
  )
}
