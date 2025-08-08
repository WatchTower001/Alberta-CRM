import dynamic from 'next/dynamic'
const CRM = dynamic(() => import('../components/AlbertaCarCRM'), { ssr: false })

export default function Home() {
  return <CRM />
}
