const axios = require('axios');

const headers = {
  'Accept': 'application/json, text/plain, */*',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
  'Connection': 'keep-alive',
  'Cookie': 'TS0142589a=0121427f93abe65598d9cee6387a8f39469f67fef9a3f1c1c298c23a3443ec47c625b9ca650b3b0d32c1ca874b782778323bd325e5',
  'Host': 'cnes.datasus.gov.br',
  'Referer': `https://cnes.datasus.gov.br/pages/profissionais/consulta.jsp?search=robson`,
  'Sec-Ch-Ua': '"Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Ch-Ua-Platform': '"Windows"',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'same-origin',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0',
}

async function consultarCpf(q) {

  try {
    const response = await axios.get(`https://cnes.datasus.gov.br/services/profissionais?cpf=${q.toUpperCase()}`, {
      headers: headers
    });

    const response2 = await axios.get(`https://cnes.datasus.gov.br/services/profissionais/${response.data[0].id}`, {
      headers: headers
    });

    const response3 = await axios.get(`https://cnes.datasus.gov.br/services/historico-profissional/${response.data[0].id}`, {
      headers: headers
    });


    let results = [];

    results.push({ nome: response3.data.nome, cns: response3.data.cns, sexo: response3.data.sexo, vinculosAtual: response2.data.vinculos, vinculosHitorico: response3.data.vinculos })

    return results;
  } catch (error) {
    return [];
  }
}

async function consultarCns(q) {

  try {
    const response = await axios.get(`https://cnes.datasus.gov.br/services/profissionais?cns=${q.toUpperCase()}`, {
      headers: headers
    });

    const response2 = await axios.get(`https://cnes.datasus.gov.br/services/profissionais/${response.data[0].id}`, {
      headers: headers
    });

    const response3 = await axios.get(`https://cnes.datasus.gov.br/services/historico-profissional/${response.data[0].id}`, {
      headers: headers
    });



    let results = [];

    results.push({ nome: response3.data.nome, cns: response3.data.cns, sexo: response3.data.sexo, vinculosAtual: response2.data.vinculos, vinculosHitorico: response3.data.vinculos })


    return results;
  } catch (error) {
    return [];
  }
}

async function consultarNome(q) {

  try {
    const response = await axios.get(`https://cnes.datasus.gov.br/services/profissionais?nome=${q.toUpperCase()}`, {
      headers: headers
    });

    let results = [];

    response.data.forEach(async r => {
      results.push({ NOME: r.nome, CNS: r.cns });
    });

    return results;
  } catch (error) {
    return [];
  }
}

module.exports.consultarNome = consultarNome
module.exports.consultarCns = consultarCns
module.exports.consultarCpf = consultarCpf
