type BadgePriceProps = {
  price: number
}

export function BadgePrice({ price }: BadgePriceProps) {
  return (
    <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
      {price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })}
    </span>
  )
}
