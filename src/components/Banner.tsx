import banner from '../assets/maria_martins.png'

export function Banner() {
  return (
    <div className="bg-cover bg-center flex flex-col p-3.5 h-64 items-center" 
      style={{ backgroundImage: `url(${banner})`}}/>
  )
}