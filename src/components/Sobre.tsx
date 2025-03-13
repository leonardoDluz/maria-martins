import picture from '../assets/maria.webp'

export function Sobre() {
  return (
    <section className="flex justify-evenly py-3.5 px-2.5 h-[100vh] items-center">
      <img src={picture} alt="foto da Maria" className="w-[28vw] h-[50vh]"/>
      <div className="w-[55vw]">
        <h2 className="text-3xl mb-1.5 font-bold">Sobre</h2>
        <p className="text-2xl">Maria de Lourdes Martins Pereira de Souza desenvolveu grande parte de sua carreira no exterior em virtude das atividades do marido, o embaixador Carlos Martins. Inicia-se na escultura em 1926 e aperfeiçoa-se, na Bélgica, com o escultor Oscar Jespers (1887 - 1970), em 1936. Em 1939, muda-se com Carlos Martins para Washington D.C. Posteriormente, aluga um apartamento em Nova York onde estuda escultura com Jacques Lipchitz (1891 - 1973), realizando trabalhos em bronze. Em 1941, faz sua primeira exposição individual, na Corcoran Art Gallery, em Nova York. Conhece André Breton (1896 - 1966), que a apresenta a artistas europeus ligados ao surrealismo e ao dadaísmo, como Michel Tapiè (1909 - 1987), André Masson (1896 - 1987), Yves Tanguy (1900 - 1955), Max Ernst (1891 - 1976) e Marcel Duchamp (1887 - 1968). Em 1947, André Breton assina o prefácio do catálogo de sua mostra individual, realizada na Julien Lery Gallery, em Nova York. Em 1948, muda-se para Paris, onde seu ateliê torna-se local de encontro de intelectuais e artistas. Volta definitivamente ao Brasil em 1950. Colabora na organização das primeiras Bienais Internacionais de São Paulo e na fundação do Museu de Arte Moderna do Rio de Janeiro - MAM/RJ. Como escritora, assina coluna no Correio da Manhã e publica entre outros livros, A Índia e o Mundo Novo, A Ásia Maior e o Planeta China.</p>
      </div>
    </section>
  );
}