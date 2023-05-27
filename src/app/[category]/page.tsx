export default function Category({ params }: { params: { category: string } }) {
  return (
    <>
      <section>{params.category}</section>
    </>
  )
}
