import { LayoutParams } from '@/common/layout.type'
import { Header } from '@/components/header'

export default function StoreLayout({ children }: LayoutParams) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 px-8 py-8">
      <Header />
      {children}
    </div>
  )
}
