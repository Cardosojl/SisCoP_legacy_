const mongoose = require('mongoose');
require('../src/models/document_maker/AnaliseCritica/AnaliseCriticaDB');
const entrace = mongoose.model('analisecritica');

const create = async () => {

    await new entrace({
        _id: '1.1.1a',
        text: 'Normativa nº 73, de 05 de agosto de 2020'    
    }).save()
    
    await new entrace({
        _id: '1.1.1b',
        text: 'Normativa SEGES/ME Nº 65, de 7 de julho de 2021'    
    }).save()
    
   await new entrace({
        _id: '1.1.2a',
        text: 'foi realizada a pesquisa de preços das contratações similares da União e de outros entes públicos e não foi obtido sucesso'    
    }).save()
    
   await new entrace({
        _id: '1.1.2b',
        text: 'foi realizada a pesquisa de preços das contratações similares da União e de outros entes públicos e foi obtido sucesso para os itens '    
    }).save()
    
   await new entrace({
        _id: '1.1.2c',
        text: 'foi realizada a pesquisa de preços das contratações similares da União e de outros entes públicos e foi obtido sucesso, como demonstram as consultas em anexo'    
    }).save()
    
   await new entrace({
        _id: '1.1.2d',
        text: 'foi realizada a pesquisa de preços das contratações similares da União e de outros entes públicos e foi obtido sucesso para o item '    
    }).save()
    
   await new entrace({
        _id: '1.1.3a',
        text: 'Vale ressaltar que foram encontradas dificuldades na realização da pesquisa de preços com a modalidade supracitada, em virtude da especificidade do item em questão. Neste caso, não foi obtido nenhum orçamento de internet para o respectivo item.'    
    }).save()
    
   await new entrace({
        _id: '1.1.3b',
        text: 'Os preços levantados foram de um sítio eletrônico especializado, como demonstram os orçamentos em anexo. '    
    }).save()
    
   await new entrace({
        _id: '1.1.3c',
        text: 'Os preços levantados foram de dois sítios eletrônicos especializados, como demonstram os orçamentos em anexo. '    
    }).save()
    
   await new entrace({
        _id: '1.1.3d',
        text: 'Os preços levantados foram de três sítios eletrônicos especializados, como demonstram os orçamentos em anexo. '    
    }).save()
    
   await new entrace({
        _id: '1.1.3e',
        text: 'Os preços levantados foram de diversos sítios eletrônicos especializados, como demonstram os orçamentos em anexo. '    
    }).save()
    
   await new entrace({
        _id: '1.1.4a',
        text: 'Vale ressaltar que, para o item '    
    }).save()
    
   await new entrace({
        _id: '1.1.4b',
        text: 'Vale ressaltar que, para os itens '    
    }).save()
    
   await new entrace({
        _id: '1.1.5a',
        text: 'foram encontradas dificuldades na realização da pesquisa de preços com a modalidade supracitada, em virtude da especificidade dos itens em questão. Neste caso, não foi obtido nenhum orçamento de internet para o respectivo item.'    
    }).save()
    
   await new entrace({
        _id: '1.1.5b',
        text: 'foram encontradas dificuldades na realização da pesquisa de preços com a modalidade supracitada, em virtude da especificidade dos itens em questão. Neste caso, não foi obtido nenhum orçamento de internet para os respectivos itens.'    
    }).save()
    
   await new entrace({
        _id: '3.1.1a',
        text: 'não foram encontrados preços acima do valor máximo e/ou abaixo do valor mínimo estabelecido.'    
    }).save()
    
   await new entrace({
        _id: '3.1.1b',
        text: 'foram encontrados diversos preços acima do valor máximo e/ou abaixo do valor mínimo estabelecido.'    
    }).save()
    
   await new entrace({
        _id: '3.1.1c',
        text: 'foram encontrados preços acima do valor máximo estabelecido.'    
    }).save()
    
   await new entrace({
        _id: '3.1.1d',
        text: 'foram encontrados preços abaixo do valor mínimo estabelecido.'    
    }).save()
    
   await new entrace({
        _id: '3.1.2a',
        text: 'Desta forma, foi calculada a média de cada item e obteve-se, assim, o preço de referência.'    
    }).save()
    
   await new entrace({
        _id: '3.1.2b',
        text: 'Desta forma, tais valores foram excluídos e foi calculada a média de cada item com os orçamentos remanescentes e obteve-se, assim, o preço de referência.'    
    }).save()
}

module.exports = create;