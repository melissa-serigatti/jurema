async function mel(req, res) {
  const reqData = req.body.data;
  console.log(reqData);

  const [dia, mes, ano] = reqData.split("/").map(Number);
  console.log(dia, mes, ano);

  const dataNascimento = new Date(ano, mes - 1, dia);
  console.log(dataNascimento);

  const anoAtual = new Date().getFullYear();
  console.log(anoAtual);

  const dataAtual = new Date(anoAtual, mes - 1, dia);
  console.log(dataAtual);

  const diaNascimento = dataNascimento.getDay();
  console.log(diaNascimento);

  const diaAniversario = dataAtual.getDay();
  console.log(diaAniversario);

  const diasDaSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const diaNascimentoExtenso = diasDaSemana[diaNascimento];
  console.log(diaNascimentoExtenso);

  const diaAniversarioExtenso = diasDaSemana[diaAniversario];
  console.log(diaAniversarioExtenso);

  res.status(200).json({
    diaDoAniversario: diaAniversarioExtenso,
    diaDoNascimento: diaNascimentoExtenso,
  });
}

export default mel;
