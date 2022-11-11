(async () => {
    const database = require('./bd');
    const produto = require('./produto');

    await database.sync();

    await produto.create(
        {
            Nome: "Primeiro Produto",
            DataCriacao: Date()
        }
    )

    await produto.create(
        {
            Nome: "Segundo Produto",
            DataCriacao: Date()
        }
    )

    await produto.create(
        {
            Nome: "Teceiro Produto",
            DataCriacao: Date()
        }
    )

    const altProd = await produto.findByPk(2)
    altProd.Nome = "Arquivo 2 alterado";
    await altProd.save();

    produto.destroy({where: {id: 1}});

    const findProd = await produto.findByPk(3);
    console.log(findProd);

    const findAllProd = await produto.findAll();
    console.log(findAllProd);
})();