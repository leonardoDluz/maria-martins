export function Footer() {
  const authors = [
    { href: "https://github.com/leonardoDluz/", name: "Leonardo Luz" },
    { href:"https://github.com/Leo2828", name: "Leonardo Cesar" },
    { href:"https://github.com/Vitor-G-Cavalheiro", name: "Vitor Cavalheiro" }
  ];

  const references = [
    { href: "https://www.escritoriodearte.com/artista/maria-martins", name: "Escritório de Arte" },
    { href: "https://mam.rio/artistas/maria-martins/", name: "Museu de Arte Moderna - Rio de Janeiro" },
    { href: "https://enciclopedia.itaucultural.org.br/pessoas/6133-maria-martins/obras", name: "Enciclopédia Itaú Cultural" },
  ];

  return (
    <footer className="bg-black text-white py-10 flex justify-evenly" >
      <div className="pb-2.5">
        <h5 className="font-bold">Autores:</h5>
        <ul className="pl-2">
          {authors.map((author, index) => (
            <li><a href={author.href} key={index}>{author.name}</a></li>
          ))}
          
        </ul>
      </div>
      <div>
        <h5 className="font-bold">Referências:</h5>
        <ul className="pl-2">
          {references.map((reference, index) => (
              <li><a href={reference.href} key={index}>{reference.name}</a></li>
          ))}
        </ul>
      </div>
    </footer>
  )
}