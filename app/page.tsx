import Image from "next/image";

// Ícones para a seção de Download (Componentes SVG)
const WindowsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-12 h-12 mx-auto mb-4 text-blue-500">
    <path fill="currentColor" d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/>
  </svg>
);
const AppleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-12 h-12 mx-auto mb-4 text-gray-700">
    <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C39.2 141.6 0 184.8 0 241.4c0 35.3 10.5 69.4 27.8 94.6l1.8 2.1c-2.9 1.8-5.7 3.6-8.5 5.4-11.7 7.5-24.2 12.8-38.6 12.8-15.4 0-29.1-5.5-42-12.2-35.3-18.1-47.3-54.3-47.3-54.3s20.4 12.4 43.6 21.6c25.3 10.2 46.2 15.2 67 15.2 34.6 0 63.3-12.6 76.6-24.8-11.6-9.1-18.4-23.5-18.4-38.5v.1c0-14.4 6.8-28.7 18.4-38.5-11.3-9.1-25.5-14.8-40.4-14.8-24.3 0-48.5 15.8-63.5 15.8-15.4 0-37.4-14.1-56.9-14.1-21.3 0-42.9 13.1-55.8 30.2-12.9 17.1-20.1 38.9-20.1 61.5 0 29.8 11.9 60.9 34.3 83.1 22.3 22.2 49.6 33.9 80.4 33.9 15.4 0 30.8-4.4 45.2-13.1 14.4-8.7 27.6-19.3 39.9-19.3 12.2 0 25.5 10.6 39.9 19.3 14.4 8.7 29.8 13.1 45.2 13.1 30.8 0 58.1-11.7 80.4-33.9 22.4-22.2 34.3-53.3 34.3-83.1 0-22.6-7.2-44.4-20.1-61.5-12.9-17.1-34.5-30.2-55.8-30.2-21.3 0-42.9 13.1-56.9 14.1-15.4.9-37.4-15.8-63.5-15.8z"/>
  </svg>
);
const LinuxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-12 h-12 mx-auto mb-4 text-orange-500">
    <path fill="currentColor" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm12.8 411.3c-2.3 2-4.8 3.5-7.5 4.5-2.7.9-5.6 1.4-8.6 1.4-5.4 0-10.3-1.2-14.6-3.7-4.3-2.5-7.7-6-10.2-10.6-2.5-4.6-3.8-9.7-3.8-15.3 0-5.7 1.3-11.1 3.8-16.1 2.5-5.1 6-9.2 10.2-12.4 4.3-3.2 9.2-4.8 14.6-4.8 3 0 5.9.5 8.6 1.4 2.7.9 5.2 2.4 7.5 4.5 2.3 2 4.1 4.5 5.5 7.5 1.3 3 2 6.2 2 9.7 0 3.4-.7 6.7-2 9.7-1.4 3-3.2 5.5-5.5 7.5zm49.3-157.3c-3.3-2-6.4-3.6-9.1-4.6-2.7-1-5.3-1.5-7.8-1.5-3.3 0-6.2.7-8.6 2-2.4 1.3-4.4 3.2-5.9 5.6-1.5 2.4-2.5 5.2-3 8.3-.5 3.1-.7 6.4-.7 9.8 0 3.3.2 6.5.7 9.5.5 3 1.5 5.7 3 8.1 1.5 2.4 3.5 4.3 5.9 5.6 2.4 1.3 5.3 2 8.6 2 2.5 0 5.1-.5 7.8-1.5 2.7-1 5.8-2.6 9.1-4.6 3.3-2 6-4.5 8.3-7.5 2.3-3 3.4-6.4 3.4-10.2 0-3.8-1.1-7.2-3.4-10.2-2.3-3-5-5.5-8.3-7.5zm55.3 115.1c-2.3 2-4.8 3.5-7.5 4.5-2.7.9-5.6 1.4-8.6 1.4-5.4 0-10.3-1.2-14.6-3.7-4.3-2.5-7.7-6-10.2-10.6-2.5-4.6-3.8-9.7-3.8-15.3 0-5.7 1.3-11.1 3.8-16.1 2.5-5.1 6-9.2 10.2-12.4 4.3-3.2 9.2-4.8 14.6-4.8 3 0 5.9.5 8.6 1.4 2.7.9 5.2 2.4 7.5 4.5 2.3 2 4.1 4.5 5.5 7.5 1.3 3 2 6.2 2 9.7 0 3.4-.7 6.7-2 9.7-1.4 3-3.2 5.5-5.5 7.5zm-215-212.4c-4.3 0-8.3 1-11.8 3-3.5 2-6.5 4.6-8.8 7.9-2.3 3.3-4.1 7-5.1 11.2-1 4.2-1.5 8.5-1.5 13.1 0 4.5.5 8.9 1.5 13.1 1 4.2 2.8 7.9 5.1 11.2 2.3 3.3 5.3 5.9 8.8 7.9 3.5 2 7.5 3 11.8 3s8.3-1 11.8-3c3.5-2 6.5-4.6 8.8-7.9 2.3-3.3 4.1-7 5.1-11.2 1-4.2 1.5-8.5 1.5-13.1 0-4.5-.5-8.9-1.5-13.1-1-4.2-2.8-7.9-5.1-11.2-2.3-3.3-5.3-5.9-8.8-7.9-3.5-2-7.5-3-11.8-3zm195.4 71.5c-3.1-3.3-6.8-5.9-10.8-7.9-4-2-8.3-3-12.8-3-5.7 0-10.8 1.2-15.3 3.7-4.5 2.5-8.2 5.8-11.1 10-2.9 4.2-4.9 8.9-6 14.1-1.1 5.2-1.7 10.6-1.7 16.2 0 5.5.6 10.9 1.7 16.2 1.1 5.2 3.1 9.9 6 14.1 2.9 4.2 6.6 7.5 11.1 10 4.5 2.5 9.6 3.7 15.3 3.7 4.5 0 8.8-1 12.8-3 4-2 7.7-4.6 10.8-7.9 3.1-3.3 5.4-7.1 7-11.4 1.6-4.3 2.3-8.8 2.3-13.4 0-4.7-.8-9.1-2.3-13.4-1.6-4.3-3.9-8.1-7-11.4z"/>
  </svg>
);


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
              {/* NAVEGAÇÃO ATUALIZADA */}
              <li><a href="#download" className="hover:text-blue-400 transition-colors">Download</a></li>
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
            <a 
              href="#planos" 
              className="mt-8 inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
            >
              Conheça os Planos
            </a>
          </div>
        </section>

        {/* SEÇÃO PLANOS */}
        <section id="planos" className="bg-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Nossos Planos</h2>
            <p className="text-lg text-gray-600 mb-12">
              Escolha o plano que melhor se adapta à sua congregação.
            </p>
            <div className="flex flex-col lg:flex-row justify-center gap-8 px-4">
              {/* Card 1: Básico */}
              <div className="border border-gray-200 rounded-lg p-8 w-full lg:w-1/3 flex flex-col shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Básico</h3>
                <p className="text-4xl font-bold mb-6">R$ 49<span className="text-lg font-normal">/mês</span></p>
                <ul className="text-left space-y-3 text-gray-600 mb-8 flex-grow">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>1 Chave de Ativação</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Até 50 membros</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Controle Financeiro Avançado</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>2 Downloads de Backup por mês</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Gestão de Eventos e Documentos</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Suporte via E-mail</li>
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
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>3 Chaves de Ativação de Conta</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Até 500 membros</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Controle Financeiro Avançado</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>8 Downloads de Backup por mês</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Gestão de Eventos e Documentos</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Relatórios Automáticos</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Suporte via E-mail</li>
                </ul>
                <a href="#contato" className="mt-auto bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors">
                  Assinar o Profissional
                </a>
              </div>
              {/* Card 3: Premium */}
              <div className="border border-gray-200 rounded-lg p-8 w-full lg:w-1/3 flex flex-col shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Premium</h3>
                <p className="text-4xl font-bold mb-6">R$ 249<span className="text-lg font-normal">/mês</span></p>
                <ul className="text-left space-y-3 text-gray-600 mb-8 flex-grow">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Todos os recursos do Profissional</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Gestão Múltipla de até 3 Congregações</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Até 1500 Membros cada Congregação</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Consultoria de Implantação</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Suporte Prioritário</li>
                </ul>
                <a href="#contato" className="mt-auto bg-gray-800 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-700 transition-colors">
                  Falar com um especialista
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO DOWNLOAD (ANTIGA 'SOBRE') */}
        <section id="download" className="py-20 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Faça o Download do IgrejApp</h2>
            <p className="text-lg text-gray-600 mb-12">
              Disponível para as principais plataformas desktop.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-10">
              {/* Card Download Windows */}
              <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/4">
                <WindowsIcon />
                <h3 className="text-2xl font-bold mb-2">Windows</h3>
                <p className="text-gray-500 mb-6">Compatível com Windows 10 e 11.</p>
                <a href="#" className="w-full inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors">
                  Baixar para Windows
                </a>
              </div>

              {/* Card Download macOS */}
              <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/4">
                <AppleIcon />
                <h3 className="text-2xl font-bold mb-2">macOS</h3>
                <p className="text-gray-500 mb-6">Para processadores Intel e Apple Silicon.</p>
                <a href="#" className="w-full inline-block bg-gray-800 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-700 transition-colors">
                  Baixar para macOS
                </a>
              </div>

              {/* Card Download Linux */}
              <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/4">
                <LinuxIcon />
                <h3 className="text-2xl font-bold mb-2">Linux</h3>
                <p className="text-gray-500 mb-6">Disponível em pacotes .deb e .AppImage.</p>
                <a href="#" className="w-full inline-block bg-gray-800 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-700 transition-colors">
                  Baixar para Linux
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO CONTATO */}
        <section id="contato" className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Tem alguma dúvida ou sugestão? Preencha o formulário abaixo e nossa equipe retornará o mais breve possível.
            </p>
            <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md text-left">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Seu Nome</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" placeholder="Digite seu nome completo" required />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Seu Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" placeholder="exemplo@email.com" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensagem</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" placeholder="Deixe sua dúvida ou sugestão aqui..." required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-colors transform hover:scale-105">
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