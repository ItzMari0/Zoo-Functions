const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Retorna um objeto caso não exista argumentos', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toStrictEqual(expected);
  });

  it('Retorna que o zoológico está fechado ao usar os argumentos Monday e 09:00-AM', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toStrictEqual(expected);
  });

  it('Retorna que o zoológico está fechado ao usar os argumentos Wednesday e 09:00-PM', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toStrictEqual(expected);
  });

  it('Retorna que o zoológico está aberto ao usar os argumentos Tuesday e 09:00-AM', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toStrictEqual(expected);
  });

  it('Retorna uma mensagem de erro ao utilizar dia inválido', () => {
    const dayError = 'The day must be valid. Example: Monday';
    const actual = () => getOpeningHours('Thu', '09:00-AM');
    expect(actual).toThrow(dayError);
  });

  it('Retorna uma mensagem de erro sobre a abreviação das horas (AM ou PM)', () => {
    const actual = () => getOpeningHours('Friday', '09:00-ZM');
    expect(actual).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Retorna uma mensagem de erro sobre o formato das horas', () => {
    const actual = () => getOpeningHours('Saturday', 'C9:00-AM');
    expect(actual).toThrow('The hour should represent a number');
  });

  it('Retorna uma mensagem de erro sobre o formato dos minutos', () => {
    const actual = () => getOpeningHours('Sunday', '09:c0-AM');
    expect(actual).toThrow('The minutes should represent a number');
  });

  it('Retorna uma mensagem de erro sobre o formato das horas (0 a 12 horas)', () => {
    const actual = () => getOpeningHours('Monday', '13:00-AM');
    expect(actual).toThrow('The hour must be between 0 and 12');
  });

  it('Retorna uma mensagem de erro sobre o formato dos minutos (0 a 59 minutos)', () => {
    const actual = () => getOpeningHours('Tuesday', '09:60-AM');
    expect(actual).toThrow('The minutes must be between 0 and 59');
  });
});
