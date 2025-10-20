// app/sucesso/page.tsx

export default function SucessoPage() {
  return (
    // Container principal que centraliza o conteúdo
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      
      <div className="bg-white p-10 md:p-12 rounded-xl shadow-2xl max-w-lg mx-auto text-center border-t-4 border-green-500">
        
        {/* Ícone de sucesso */}
        <div className="mx-auto w-20 h-20 flex items-center justify-center bg-green-100 rounded-full mb-6">
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        {/* Mensagem Principal */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Pagamento Aprovado!
        </h1>

        {/* Mensagem de Apoio */}
        <p className="text-gray-600 text-lg mb-8">
          Obrigado por assinar o IgrejApp! A sua assinatura já está ativa.
        </p>

        {/* Próximos Passos */}
        <div className="bg-blue-50 p-6 rounded-lg text-left">
          <h2 className="text-xl font-bold text-gray-800 mb-3">O que fazer agora?</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Faça o download do programa para o seu computador.</li>
            <li>Crie a sua conta de administrador (ou faça login, se já tiver uma).</li>
            <li>Comece a organizar a sua igreja!</li>
          </ol>
        </div>

        {/* Botão de Ação */}
        <a 
          href="/#download" 
          className="mt-10 inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Ir para a área de Download
        </a>

      </div>

    </div>
  );
}