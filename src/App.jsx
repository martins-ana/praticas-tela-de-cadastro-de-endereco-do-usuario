import { useState } from 'react';
import { Fieldset } from './componentes/fieldset';

function App() {
  const [erros, setErros] = useState({});

  // function atualizaErros(nomeCampo, valorCampo) {
  //   setErros((prevState) => ({
  //     ...prevState,
  //     [nomeCampo]: valorCampo,
  //   }));
  // }

  function handleSubmit(event) {
    event.preventDefault();
    const elementos = event.target.elements;

    const cep = elementos.cep.value;
    const estado = elementos.estado.value;
    const cidade = elementos.cidade.value;
    // const bairro = elementos.bairro.value;
    // const rua = elementos.rua.value;
    // const numero = elementos.numero.value;
    // const complemento = elementos.complemento.value;
    // const referencia = elementos.referencia.value;
    // const aceitarTermosCadastro = elementos.aceitarTermosCadastro.checked;

    setErros({});
    if (cep.length <= 7 || cep.length > 8) {
      // if (cep.length != 8) { Verifica se o CEP quantidade 'diferente' de 8 dígitos3
      // atualizaErros('cep', 'O CEP deve conter 8 dígitos');
      setErros((prevState) => ({
        ...prevState,
        cep: 'O CEP deve conter 8 dígitos',
      }));
    }

    if (estado.length != 2) {
      // atualizaErros('estado', 'O Estado deve conter 2 dígitos (Maiúsculos)');
      setErros((prevState) => ({
        ...prevState,
        estado: 'O Estado deve conter 2 dígitos (Maiúsculos)',
      }));
    }

    if (cidade === '') {
      // atualizaErros('estado', 'O Estado deve conter 2 dígitos (Maiúsculos)');
      setErros((prevState) => ({
        ...prevState,
        cidade: 'Campo obrigatório',
      }));
    }
  }

  return (
    <section className='gradiente-primario flex flex-col items-center justify-center h-screen w-screen px-16 py-64 gap-16'>
      <h1 className='font-bold text-5xl'>Cadastro de Endereço</h1>
      <form
        className='flex flex-col gap-16 items-center justify-center w-full'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-wrap justify-center gap-8 w-full'>
          <Fieldset>
            <label htmlFor='cep'>CEP *</label>
            <Fieldset.Input id='cep' name='cep' placeholder='99999-999' />
            <Fieldset.Error>{erros.cep}</Fieldset.Error>
          </Fieldset>

          <Fieldset>
            <label htmlFor='estado'>Estado *</label>
            <Fieldset.Input id='estado' name='estado' placeholder='RS' />
            <Fieldset.Error>{erros.estado}</Fieldset.Error>
          </Fieldset>

          <Fieldset>
            <label htmlFor='cidade'>Cidade *</label>
            <Fieldset.Input id='cidade' name='cidade' placeholder='Porto Alegre' />
            <Fieldset.Error>{erros.cidade}</Fieldset.Error>
          </Fieldset>

          <Fieldset>
            <label htmlFor='bairro'>Bairro *</label>
            <Fieldset.Input id='bairro' name='bairro' placeholder='Centro' />
            <Fieldset.Error></Fieldset.Error>
          </Fieldset>

          <Fieldset>
            <label htmlFor='rua'>Rua *</label>
            <Fieldset.Input id='rua' name='rua' placeholder='Rua Fulano de Tal' />
            <Fieldset.Error></Fieldset.Error>
          </Fieldset>

          <Fieldset>
            <label htmlFor='numero'>Número *</label>
            <Fieldset.Input id='numero' name='numero' placeholder='999' />
            <Fieldset.Error></Fieldset.Error>
          </Fieldset>

          <Fieldset>
            <label htmlFor='complemento'>Complemento</label>
            <Fieldset.Input id='complemento' name='complemento' />
            <Fieldset.Error></Fieldset.Error>
          </Fieldset>

          <Fieldset>
            <label htmlFor='referencia'>Ponto de Referência</label>
            <Fieldset.Input id='referencia' name='referencia' />
            <Fieldset.Error></Fieldset.Error>
          </Fieldset>
        </div>

        <fieldset className='flex flex-col items-start'>
          <div className='flex gap-2 items-center'>
            <input
              className='size-4 flex items-center justify-center rounded-sm checked:bg-sucesso'
              type='checkbox'
              id='aceitarTermosCadastro'
              name='aceitarTermosCadastro'
            />
            <label htmlFor='aceitarTermosCadastro'>Aceito os termos de cadastro</label>
          </div>
          <span className='ml-6 text-dica text-sm'>
            É necessário aceitar os termos e condições para concluir o cadastro.
          </span>
        </fieldset>

        <button
          className='bg-primaria rounded-[8px] flex items-center justify-center p-3 gap-2 cursor-pointer border border-transparent hover:border-texto'
          type='submit'
        >
          Salvar
        </button>
      </form>
    </section>
  );
}

export default App;
