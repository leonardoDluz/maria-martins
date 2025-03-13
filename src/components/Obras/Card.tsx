interface props {
  index: number,
  src: string,
  name: string,
  year: string,
  material: string
}

export function Card({ index, src, name, year, material }: props) {
  return (
    <div key={index} className="w-[90vw] h-[70vh] flex bg-gray-50 items-center justify-between p-30">
      <img src={src} alt={name} className="max-w-[60vw] min-w-[40vw] max-h-[60vh]"/>
      <div className="w-[30vw] flex flex-col justify-center">
        <h3 className="text-3xl font-bold">{name}</h3>
        <h4 className="text-2xl font-medium">{material}</h4>
        <h5 className="text-xl">{year}</h5>
      </div>
    </div>
  )
}