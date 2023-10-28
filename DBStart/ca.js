const mongoose = require('mongoose');
require('../src/models/document_maker/CertificadoDeAdoção/CADB');
const entrace = mongoose.model('certificadodeadocao')

const create = async () => {

    await new entrace({
        _id: '1.4',
        object: {text: 'Itens 1.2 a 1.4 - os tópicos não se aplicam ao objeto do presente processo, já que os itens não ultrapassam, individualmente, o valor de R$ 80.000,00 e/ou suas divisões ultrapassam a quantidade de 25%; \n\n'}   
    }).save()
    
    await new entrace({
        _id: '6.2',
        object: {text: 'Item 6.2 – o objeto não envolve produto perecível;\n\n' }   
    }).save()
    
    await new entrace({
        _id: '11.1.1',
        object: {text: 'tem 11.1.1 - o tópico não se aplica ao objeto do presente processo, já que os itens não ultrapassam, individualmente, o valor de R$ 176.000,00;\n\n'}
    }).save()
    
    await new entrace({
        _id: '12',
        object: {text: 'Item 12 – não será utilizada a antecipação do pagamento;\n\n'}
    }).save()
}

module.exports = create;
