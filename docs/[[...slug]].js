import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

export default function DocPage() {
  const router = useRouter()
  let { slug } = router.query

  if (!slug || slug.length === 0) {
    slug = ['about'];
  }

  const DocComponent = dynamic(() => import(`./${slug.join('/')}.mdx`), {
    loading: () => <div>Loading...</div>,
  })

  return <DocComponent />
}