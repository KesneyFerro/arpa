interface Props {
  materia: any;
  conteudos: any;
}

// const props = {
//   materia: "Geografia",
//   conteudos: [
//     {
//       nome: "avaliação Especial",
//       link: "https://google.drive.com/hcuiywefUnfviwd92",
//     },
//     {
//       nome: "Trimestral",
//       link: "https://google.drive.com/hcuiywefUnfviwd92",
//     },
//     {
//       nome: "Trimestral 2",
//       link: "https://google.drive.com/hcuiywefUnfviwd92",
//     },
//   ],
// };

const materiasEstilo = {
  filosofia: {
    corFundo: "#f1f1f1",
    urlImagemFundo: "/materias/fundoFilosofia.png",
    corSecundaria: "#000000",
  },
  português: {
    corFundo: "#ffffff",
    urlImagemFundo: "/materias/fundoFilosofia.png",
    corSecundaria: "#000000",
  },
};

const SpecificSubject = ({ materia, conteudos }: Props) => {
  if (materia == "filosofia") {
    return (
      <div
        style={{ backgroundColor: materiasEstilo.filosofia.corFundo }}
        className="w-[350px] h-[350px] flex-col rounded-[50px] drop-shadow-lg  flex justify-center items-center p-5"
      >
        <h3 className="text-2xl">{materia}</h3>
        {conteudos.map((conteudo: any) => (
          <a href={conteudo.link} className={``}>
            {conteudo.nome}
          </a>
        ))}
      </div>
    );
  }

  if (materia == "português") {
    return (
      <div
        style={{ backgroundColor: materiasEstilo.português.corFundo }}
        className="w-[350px] h-[350px] flex-col rounded-2xl drop-shadow-lg  flex justify-center items-center p-5"
      >
        <h3 className="text-2xl">{materia}</h3>
        {conteudos.map((conteudo: any) => (
          <a href={conteudo.link}>{conteudo.nome}</a>
        ))}
      </div>
    );
  }

  return <></>;
};
export default SpecificSubject;
