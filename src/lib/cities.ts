import type { ServiceId } from "@/lib/site-config";

export interface CityFact {
  text: string;
  sourceName: string;
  sourceUrl: string;
}

export interface CityDefinition {
  slug: string;
  name: string;
  /** Short, real, sourced facts used to make this page genuinely distinct (never invented). */
  facts: CityFact[];
  /** One or two paragraphs of real, non-generic local context, written from `facts`. */
  context: string[];
  relatedServiceIds: ServiceId[];
}

export const cities: CityDefinition[] = [
  {
    slug: "contagem",
    name: "Contagem",
    facts: [
      {
        text: "Contagem é um dos maiores polos industriais de Minas Gerais, com forte presença de metalurgia, alimentos, farmacêutica e têxtil.",
        sourceName: "Correio Braziliense",
        sourceUrl: "https://www.correiobraziliense.com.br/cbradar/essa-cidade-e-destaque-industrial-em-minas-com-economia-em-alta/",
      },
      {
        text: "A cidade concentra a Cidade Industrial e o Distrito Industrial, dois dos maiores parques fabris do estado.",
        sourceName: "Terra Brasil Notícias",
        sourceUrl: "https://terrabrasilnoticias.com/2025/06/contagem-polo-industrial-e-urbano-de-minas-gerais/",
      },
      {
        text: "Tem aproximadamente 677 mil habitantes, segundo estimativa do IBGE.",
        sourceName: "IBGE Cidades",
        sourceUrl: "https://www.ibge.gov.br/cidades-e-estados/mg/3118601.html",
      },
    ],
    context: [
      "Contagem é o maior polo industrial de Minas Gerais, e esse perfil muda o jogo para quem vende para essas indústrias ou atende os funcionários delas: fornecedores, oficinas, serviços B2B e comércio em geral competem por clientes que já pesquisam no Google antes de fechar negócio.",
      "Para empresas de Contagem, aparecer bem no Perfil da Empresa no Google costuma ser o primeiro passo: é o que decide se um comprador em potencial encontra sua empresa ou a do concorrente ao lado, no mesmo bairro industrial.",
    ],
    relatedServiceIds: ["google-perfil", "seo-local"],
  },
  {
    slug: "belo-horizonte",
    name: "Belo Horizonte",
    facts: [
      {
        text: "É a maior economia municipal de Minas Gerais e uma das maiores do país.",
        sourceName: "Prefeitura de Belo Horizonte",
        sourceUrl: "https://prefeitura.pbh.gov.br/noticias/turismo-fomenta-economia-de-bh-com-mais-oferta-de-experiencias-em-2026",
      },
      {
        text: "O turismo e os eventos são motores reais da economia local: o Carnaval de 2026, por exemplo, movimentou cerca de R$1,4 bilhão na cidade, segundo a prefeitura.",
        sourceName: "Prefeitura de Belo Horizonte",
        sourceUrl: "https://prefeitura.pbh.gov.br/noticias/turismo-fomenta-economia-de-bh-com-mais-oferta-de-experiencias-em-2026",
      },
      {
        text: "Tem cerca de 2,3 a 2,4 milhões de habitantes, segundo o IBGE.",
        sourceName: "IBGE Cidades",
        sourceUrl: "https://www.ibge.gov.br/cidades-e-estados/mg/3106200.html",
      },
    ],
    context: [
      "Belo Horizonte é o mercado mais disputado da região: capital, maior economia do estado e maior volume de empresas concorrendo pelas mesmas buscas no Google. Nesse cenário, um Perfil da Empresa no Google genérico simplesmente não aparece.",
      "Aqui a diferenciação pesa mais do que em cidades menores: categorias certas, descrições bem escritas e SEO Local consistente são o que separa quem aparece nas primeiras posições de quem fica invisível em meio à concorrência da capital.",
    ],
    relatedServiceIds: ["google-perfil", "seo-local"],
  },
  {
    slug: "betim",
    name: "Betim",
    facts: [
      {
        text: "Abriga a primeira fábrica da Fiat fora da Itália, em operação desde 1976, além da refinaria REGAP da Petrobras, de 1968.",
        sourceName: "Itatiaia",
        sourceUrl: "https://www.itatiaia.com.br/auto/fabrica-da-fiat-em-betim-completa-50-anos-como-referencia-da-industria/",
      },
      {
        text: "Está entre as maiores economias industriais de Minas Gerais.",
        sourceName: "Diário do Comércio",
        sourceUrl: "https://diariodocomercio.com.br/integra-minas/desenvolvimento-economico-betim/",
      },
      {
        text: "Em 2026, foi reconhecida pelo Sebrae como um dos três melhores municípios de Minas Gerais para se fazer negócios.",
        sourceName: "Diário do Comércio",
        sourceUrl: "https://diariodocomercio.com.br/integra-minas/desenvolvimento-economico-betim/",
      },
    ],
    context: [
      "Betim cresceu em torno da indústria automotiva e petroquímica, mas é o comércio e os serviços ao redor dessas fábricas, oficinas, autopeças, alimentação, prestadores de serviço, que mais dependem de aparecer bem no Google para captar clientes no dia a dia.",
      "Com o reconhecimento recente do Sebrae como um dos melhores municípios de MG para empreender, a concorrência entre pequenas empresas locais por visibilidade tende a crescer, o que torna o Perfil da Empresa no Google bem estruturado ainda mais decisivo.",
    ],
    relatedServiceIds: ["google-perfil", "seo-local"],
  },
  {
    slug: "ibirite",
    name: "Ibirité",
    facts: [
      {
        text: "Tem cerca de 170 a 180 mil habitantes, segundo o IBGE.",
        sourceName: "IBGE Cidades",
        sourceUrl: "https://www.ibge.gov.br/cidades-e-estados/mg/ibirite.html",
      },
      {
        text: "Os maiores empregadores da cidade estão em administração pública, educação e saúde, não apenas na indústria.",
        sourceName: "Caravela",
        sourceUrl: "https://www.caravela.info/municipios/mg/ibirite-mg",
      },
      {
        text: "A implantação do Distrito Industrial, em 1996, ajudou a diversificar a economia local para além da indústria pesada.",
        sourceName: "Caravela",
        sourceUrl: "https://www.caravela.info/municipios/mg/ibirite-mg",
      },
    ],
    context: [
      "Diferente de vizinhas como Contagem e Betim, a economia de Ibirité é mais diversificada entre indústria, educação, saúde e serviços, o que significa um leque maior de pequenos negócios locais disputando espaço nas buscas do Google.",
      "Para esses negócios, muitos ainda sem um Perfil da Empresa no Google bem estruturado, há uma janela real de aparecer na frente de concorrentes que ainda não investiram em SEO Local.",
    ],
    relatedServiceIds: ["google-perfil", "seo-local"],
  },
  {
    slug: "sabara",
    name: "Sabará",
    facts: [
      {
        text: "É uma das cidades mais antigas de Minas Gerais, com origem no ciclo do ouro e parte da rota da Estrada Real.",
        sourceName: "Monitor do Mercado",
        sourceUrl: "https://monitordomercado.com.br/noticias/359183-cidade-ideal-para-quem-aprecia-gastronomia-sabara-e-famosa-mundialmente-pelo-festival-da-jabuticaba-e-por-suas-receitas-tradicionais/",
      },
      {
        text: "Tem identidade turística e histórica própria, ainda menos explorada comercialmente do que outros destinos coloniais de Minas Gerais.",
        sourceName: "Estado de Minas",
        sourceUrl: "https://www.em.com.br/emfoco/2026/01/09/essa-cidade-ao-lado-de-belo-horizonte-esta-chamando-a-atencao-de-quem-busca-viver-com-tranquilidade/",
      },
      {
        text: "Tem cerca de 129 a 134 mil habitantes, segundo estimativas recentes.",
        sourceName: "Estado de Minas",
        sourceUrl: "https://www.em.com.br/emfoco/2026/01/09/essa-cidade-ao-lado-de-belo-horizonte-esta-chamando-a-atencao-de-quem-busca-viver-com-tranquilidade/",
      },
    ],
    context: [
      "Sabará tem uma identidade diferente de qualquer outra cidade desta lista: história colonial, turismo e gastronomia, com um potencial ainda pouco explorado em comparação a destinos como Ouro Preto.",
      "Para pousadas, restaurantes, ateliês e comércio local ligado ao turismo, aparecer no Google antes que o visitante chegue à cidade, e não só quando já está na rua, é o que transforma uma pesquisa casual em cliente real.",
    ],
    relatedServiceIds: ["google-perfil", "seo-local"],
  },
  {
    slug: "santa-luzia",
    name: "Santa Luzia",
    facts: [
      {
        text: "Tem entre 219 e 230 mil habitantes, segundo diferentes estimativas recentes.",
        sourceName: "Caravela",
        sourceUrl: "https://www.caravela.info/municipios/mg/santa-luzia-mg",
      },
      {
        text: "O PIB per capita da cidade está abaixo da média da região metropolitana de Belo Horizonte.",
        sourceName: "Caravela",
        sourceUrl: "https://www.caravela.info/municipios/mg/santa-luzia-mg",
      },
      {
        text: "Deu origem a Vespasiano, desmembrado do seu território em 1948.",
        sourceName: "IBGE Cidades",
        sourceUrl: "https://www.ibge.gov.br/cidades-e-estados/mg/3171204.html",
      },
    ],
    context: [
      "Santa Luzia tem um PIB per capita abaixo da média da região metropolitana, o que também significa um comércio local ainda em expansão, com espaço real para pequenas empresas que investem em presença digital se destacarem antes da concorrência amadurecer.",
      "Nesse cenário, um Perfil da Empresa no Google bem estruturado e SEO Local consistente pesam mais do que em mercados já saturados: a diferença entre aparecer ou não aparecer ainda é um fator decisivo de quem o cliente escolhe.",
    ],
    relatedServiceIds: ["google-perfil", "seo-local"],
  },
  {
    slug: "vespasiano",
    name: "Vespasiano",
    facts: [
      {
        text: "Foi criada em 1948, a partir de um desmembramento de Santa Luzia.",
        sourceName: "IBGE Cidades",
        sourceUrl: "https://www.ibge.gov.br/cidades-e-estados/mg/3171204.html",
      },
      {
        text: "Tem uma base industrial histórica, com o Distrito Industrial Professor José Vieira de Mendonça datando da década de 1970.",
        sourceName: "IBGE Cidades",
        sourceUrl: "https://www.ibge.gov.br/cidades-e-estados/mg/3171204.html",
      },
      {
        text: "Tem cerca de 129 mil habitantes, segundo o Censo do IBGE, com crescimento populacional constante desde os anos 2000.",
        sourceName: "IBGE Cidades",
        sourceUrl: "https://www.ibge.gov.br/cidades-e-estados/mg/3171204.html",
      },
    ],
    context: [
      "Vespasiano cresceu em torno de um distrito industrial consolidado há décadas, o que molda o tipo de pequena empresa que prospera por lá: fornecedores, oficinas, comércio e serviços voltados a quem trabalha na região.",
      "Para esses negócios, estar bem posicionado no Google Maps costuma ser mais decisivo do que anúncios pagos: é a forma mais direta de ser encontrado por quem já circula pela cidade todos os dias.",
    ],
    relatedServiceIds: ["google-perfil", "seo-local"],
  },
  {
    slug: "ribeirao-das-neves",
    name: "Ribeirão das Neves",
    facts: [
      {
        text: "É uma das cidades mais populosas da região metropolitana de Belo Horizonte, com estimativas entre 330 e 347 mil habitantes.",
        sourceName: "IBGE Cidades",
        sourceUrl: "https://www.ibge.gov.br/cidades-e-estados/mg/3154606.html",
      },
      {
        text: "Foi historicamente conhecida como cidade-dormitório da região metropolitana, com boa parte da população trabalhando em outros municípios.",
        sourceName: "Caravela",
        sourceUrl: "https://www.caravela.info/municipios/mg/ribeirao-das-neves-mg",
      },
      {
        text: "O PIB per capita da cidade está bem abaixo da média da região metropolitana de Belo Horizonte.",
        sourceName: "Caravela",
        sourceUrl: "https://www.caravela.info/municipios/mg/ribeirao-das-neves-mg",
      },
    ],
    context: [
      "Ribeirão das Neves carrega a fama de cidade-dormitório, mas isso também significa um comércio local historicamente menos disputado, com uma parte real da população ainda pesquisando e comprando fora do município, hoje em transição para um comércio mais local.",
      "Para quem quer captar esse público sem depender só do boca a boca, aparecer certo no Google e no Google Maps pode significar vantagem real sobre concorrentes que ainda não cuidaram da própria presença digital.",
    ],
    relatedServiceIds: ["google-perfil", "seo-local"],
  },
];
