import { Category } from './page/Category'

export default function CategoryPage({ params }: { params: { category: string } }) {
  return <Category name={params.category} />
}
