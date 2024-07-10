const AppError = require("../shared/errors/AppError");
const cadastrarUsuarioUsecase = require("./cadastrar-usuario.usecase");

describe('Cadastrar usuario UseCase', function() {
    test('Deve poder cadastrar um usuario', async function() {
        const usuariosRepository = {
            cadastrar: jest.fn(),
            existePorCPF: jest.fn(),
            existePorEmail: jest.fn()
          };

        const usuarioDTO = {
            nome_completo: 'nome_valido',
            CPF: 'CPF_valido',
            telefone: 'telefone_valido',
            endereco: 'endereco_valido',
            email: 'email_valido'
        };

        const sut = cadastrarUsuarioUsecase({ usuariosRepository });
        const output = await sut(usuarioDTO);

        expect(output).toBeUndefined();
        expect(usuariosRepository.cadastrar).toHaveBeenCalledWith(usuarioDTO);
        expect(usuariosRepository.cadastrar).toHaveBeenCalledTimes(1);
    });


    test('Deve retornar um throw AppError se o usuariosRepository não for fornecido', function () {
        expect(() => cadastrarUsuarioUsecase({})).toThrow(new AppError(AppError.dependencias));
    });
    

});
