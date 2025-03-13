import banner from '@/assets/maria_martins.png'

export function Banner() {
  return (
    <section className="bg-cover bg-center flex flex-col p-3.5 h-[100vh] items-center" 
      style={{ backgroundImage: `url(${banner})`}}/>
  )
}