import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

export default function DocPage() {
  const router = useRouter()
  const { slug } = router.query

  if (!slug || slug.length === 0) {
    slug = ['index'];
  }

  const DocComponent = dynamic(() => import(`./${slug.join('/')}.mdx`), {
    loading: () => <div>Loading...</div>,
  })

  return <DocComponent />
}