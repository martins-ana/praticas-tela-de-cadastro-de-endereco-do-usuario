function App() {
  return (
    <section>
      <h1>Cadastro de Endereço</h1>
      <form>
        <div>
          <fieldset>
            <label htmlFor='cep'>CEP:</label>
            <input type='text' id='cep' name='cep' />
          </fieldset>
          <fieldset>
            <label htmlFor='estado'>Estado:</label>
            <input type='text' id='estado' name='estado' />
          </fieldset>
          <fieldset>
            <label htmlFor='cidade'>Cidade:</label>
            <input type='text' id='cidade' name='cidade' />
          </fieldset>
          <fieldset>
            <label htmlFor='bairro'>Bairro:</label>
            <input type='text' id='bairro' name='bairro' />
          </fieldset>
          <fieldset>
            <label htmlFor='rua'>Rua:</label>
            <input type='text' id='rua' name='rua' />
          </fieldset>
          <fieldset>
            <label htmlFor='numero'>Número:</label>
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
        <div>
          <input
            type='checkbox'
            id='aceitarTermosCadastro'
            name='aceitarTermosCadastro'
          />
          <label htmlFor='aceitarTermosCadastro'>Aceito os termos de cadastro</label>
          <span>
            É necessário aceitar os termos e condições para concluir o cadastro.
          </span>
        </div>

        <div>
          <button type='submit'>Enviar</button>
        </div>
      </form>
    </section>
  );
}

export default App;
