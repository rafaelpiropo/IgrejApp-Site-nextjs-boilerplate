import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      {/* CABEÇALHO */}
      <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">IgrejApp</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#inicio" className="hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#planos" className="hover:text-blue-400 transition-colors">Planos</a></li>
              <li><a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre</a></li>
              <li><a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main>
        {/* SEÇÃO INÍCIO (HERO) */}
        <section id="inicio" className="bg-blue-600 text-white text-center py-20">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold mb-4">Organize sua igreja de forma simples e eficiente</h2>
            <p className="text-xl mb-8">
              O IgrejApp é a solução completa para a gestão de membros, finanças e eventos.
            </p>
            {/* IMPORTANTE:
              1. Crie uma pasta 'images' dentro da pasta 'public/'.
              2. Coloque a imagem do seu programa lá.
              3. Altere 'imagem-do-programa.png' para o nome do seu arquivo.
            */}
            {/* <Image
              src="/images/imagem-do-programa.png"
              alt="Tela do programa IgrejApp"
              width={800}
              height={500}
              className="mx-auto rounded-lg shadow-xl mt-4"
              priority
            /> */}
            <a 
              href="#planos" 
              className="mt-8 inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
            >
              Conheça os Planos
            </a>
          </div>
        </section>

        {/* SEÇÃO PLANOS -- NOVA VERSÃO COM CARDS */}
        <section id="planos" className="bg-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Nossos Planos</h2>
            <p className="text-lg text-gray-600 mb-12">
              Escolha o plano que melhor se adapta à sua congregação.
            </p>

            {/* Container dos Cards */}
            <div className="flex flex-col lg:flex-row justify-center gap-8 px-4">

              {/* Card 1: Básico */}
              <div className="border border-gray-200 rounded-lg p-8 w-full lg:w-1/3 flex flex-col shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Básico</h3>
                <p className="text-4xl font-bold mb-6">R$ 49<span className="text-lg font-normal">/mês</span></p>
                <ul className="text-left space-y-3 text-gray-600 mb-8 flex-grow">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Até 100 membros</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Controle Financeiro Básico</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Gestão de Eventos</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Suporte via Email</li>
                </ul>
                <a href="#contato" className="mt-auto bg-gray-800 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-700 transition-colors">
                  Quero o Básico
                </a>
              </div>

              {/* Card 2: Profissional (Destaque) */}
              <div className="border-2 border-blue-600 rounded-lg p-8 w-full lg:w-1/3 flex flex-col shadow-xl relative transform lg:scale-105">
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                  MAIS POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-4">Profissional</h3>
                <p className="text-4xl font-bold text-blue-600 mb-6">R$ 99<span className="text-lg font-normal">/mês</span></p>
                <ul className="text-left space-y-3 text-gray-600 mb-8 flex-grow">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Até 500 membros</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Controle Financeiro Avançado</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Relatórios Automáticos</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Integração com App de Membros</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Suporte Prioritário</li>
                </ul>
                <a href="#contato" className="mt-auto bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors">
                  Assinar o Profissional
                </a>
              </div>

              {/* Card 3: Premium */}
              <div className="border border-gray-200 rounded-lg p-8 w-full lg:w-1/3 flex flex-col shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Premium</h3>
                <p className="text-4xl font-bold mb-6">R$ 199<span className="text-lg font-normal">/mês</span></p>
                <ul className="text-left space-y-3 text-gray-600 mb-8 flex-grow">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Membros Ilimitados</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Todos os recursos do Profissional</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Gestão de Múltiplas Congregações</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Consultoria de Implantação</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Suporte 24/7</li>
                </ul>
                <a href="#contato" className="mt-auto bg-gray-800 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-700 transition-colors">
                  Falar com um especialista
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* SEÇÃO CONTATO -- NOVA VERSÃO COM FORMULÁRIO */}
        <section id="contato" className="bg-gray-100 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Tem alguma dúvida ou sugestão? Preencha o formulário abaixo e nossa equipe retornará o mais breve possível.
            </p>

            {/* Formulário */}
            <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md text-left">
              {/* Campo Nome */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  placeholder="Digite seu nome completo"
                  required
                />
              </div>

              {/* Campo Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Seu Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  placeholder="exemplo@email.com"
                  required
                />
              </div>

              {/* Campo Mensagem */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  placeholder="Deixe sua dúvida ou sugestão aqui..."
                  required
                ></textarea>
              </div>

              {/* Botão de Envio */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-colors transform hover:scale-105"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>

          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <div className="container mx-auto">
          <p>&copy; 2025 IgrejApp. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}