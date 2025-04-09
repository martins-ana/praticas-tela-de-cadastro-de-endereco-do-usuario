function App() {
  return (
    <section className='gradiente-primario flex flex-col items-center justify-center h-screen w-screen px-16 py-64 gap-16'>
      <h1 className='font-bold text-5xl'>Cadastro de Endereço</h1>
      <form className=' flex flex-col gap-16 items-center w-full h-full'>
        <div>
          <fieldset>
            <label htmlFor='cep'>CEP*:</label>
            <input type='text' id='cep' name='cep' />
          </fieldset>
          <fieldset>
            <label htmlFor='estado'>Estado*:</label>
            <input type='text' id='estado' name='estado' />
          </fieldset>
          <fieldset>
            <label htmlFor='cidade'>Cidade*:</label>
            <input type='text' id='cidade' name='cidade' />
          </fieldset>
          <fieldset>
            <label htmlFor='bairro'>Bairro*:</label>
            <input type='text' id='bairro' name='bairro' />
          </fieldset>
          <fieldset>
            <label htmlFor='rua'>Rua*:</label>
            <input type='text' id='rua' name='rua' />
          </fieldset>
          <fieldset>
            <label htmlFor='numero'>Número*:</label>
            <input type='text' id='numero' name='numero' />
          </fieldset>
          <fieldset>
            <label htmlFor='complemento'>Complemento:</label>
            <input type='text' id='complemento' name='complemento' />
          </fieldset>
          <fieldset>
            <label htmlFor='referencia'>Ponto de Referência:</label>
            <input type='text' id='referencia' name='referencia' />
          </fieldset>
        </div>

        <fieldset className='flex flex-col items-start'>
          <div className='flex gap-2'>
            <input
              type='checkbox'
              id='aceitarTermosCadastro'
              name='aceitarTermosCadastro'
            />
            <label htmlFor='aceitarTermosCadastro'>Aceito os termos de cadastro</label>
          </div>
          <span className='ml-5 text-dica text-sm'>
            É necessário aceitar os termos e condições para concluir o cadastro.
          </span>
        </fieldset>

        <button
          className='bg-primaria rounded-[8px] flex items-center justify-center p-3 gap-2'
          type='submit'
        >
          Salvar
        </button>
      </form>
    </section>
  );
}

export default App;
