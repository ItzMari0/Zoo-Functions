const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna o número de elefantes ao utilizar a string count como parâmetro', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });

  it('Retorna um array com o nome de todos os elefantes ao utilizar a string name como parâmetro', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toStrictEqual(expected);
  });

  it('Retorna a média de idade dos elefantes ao utilizar a string averageAge como parâmetro', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBeCloseTo(expected);
  });

  it('Retorna null se o parâmetro não for específico', () => {
    const actual = handlerElephants('');
    const expected = null;
    expect(actual).toBe(expected);
  });

  it('Retorna uma mensagem de erro se o parâmetro não for uma string', () => {
    const actual = handlerElephants(!'string', 'elephants');
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toBe(expected);
  });

  it('Retorna undefined se não houver parâmetro', () => {
    const actual = handlerElephants();
    expect(actual).toBe(undefined);
  });

  it('Retorna a localização ao utilizar a string location como parâmetro', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toStrictEqual(expected);
  });
});
