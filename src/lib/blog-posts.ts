import type { ServiceId } from "@/lib/site-config";

export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string;
  keywords: string[];
  relatedServiceIds: ServiceId[];
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "guia-perfil-empresa-google",
    title: "Perfil da Empresa no Google: guia completo para aparecer nas buscas locais",
    metaDescription:
      "Entenda o que é o Perfil da Empresa no Google, por que ele importa e quais elementos mais influenciam sua visibilidade nas buscas locais.",
    excerpt:
      "O que é o Perfil da Empresa no Google, por que ele importa e quais elementos mais influenciam a visibilidade da sua empresa nas buscas locais.",
    publishedAt: "2026-11-14",
    keywords: ["perfil da empresa no google", "google meu negócio", "seo local"],
    relatedServiceIds: ["google-perfil"],
    sections: [
      {
        heading: "O que é o Perfil da Empresa no Google",
        paragraphs: [
          "O Perfil da Empresa no Google (antigo Google Meu Negócio) é a ficha gratuita que aparece quando alguém pesquisa o nome da sua empresa ou um serviço que você oferece. Ele mostra informações como endereço, horário de funcionamento, telefone, fotos e avaliações diretamente nos resultados de busca e no Google Maps.",
          "Para quem atende clientes locais, esse perfil costuma ser o primeiro contato entre a empresa e quem está pesquisando, muitas vezes antes mesmo de a pessoa visitar um site.",
        ],
      },
      {
        heading: "Por que o perfil importa para pequenas empresas",
        paragraphs: [
          "O Google avalia três fatores principais para decidir quais empresas mostrar em uma busca local: relevância (o quanto o perfil corresponde ao que a pessoa procura), distância (a proximidade entre quem pesquisa e a empresa) e reputação (avaliações e informações consistentes).",
          "Um perfil incompleto ou desatualizado perde relevância mesmo que a empresa seja exatamente o que o cliente procura, porque o Google não tem informação suficiente para confirmar isso.",
        ],
      },
      {
        heading: "Elementos que mais influenciam a visibilidade do perfil",
        paragraphs: [
          "Categoria principal correta: escolher a categoria mais específica possível, em vez de uma genérica.",
          "Descrição clara dos serviços oferecidos, sem tentar forçar palavras-chave de forma artificial.",
          "Fotos reais e atualizadas do espaço, produtos ou equipe.",
          "Horário de funcionamento sempre correto, incluindo feriados e horários especiais.",
          "Avaliações respondidas, tanto as positivas quanto as negativas.",
        ],
      },
      {
        heading: "Erros comuns que prejudicam o perfil",
        paragraphs: [
          "Categoria genérica demais, que não representa o que a empresa realmente faz.",
          "Informações desatualizadas, como endereço ou telefone antigos.",
          "Ausência de fotos ou fotos de baixa qualidade.",
          "Avaliações negativas sem nenhuma resposta da empresa.",
        ],
      },
      {
        heading: "Como começar a otimizar o seu",
        paragraphs: [
          "O primeiro passo é revisar cada campo do perfil com atenção: categoria, descrição, fotos e horários. Se a sua empresa ainda não aparece bem nas buscas locais ou você não tem tempo para cuidar disso, a Analisarty cuida dessa reestruturação de ponta a ponta.",
        ],
      },
    ],
  },
  {
    slug: "trafego-pago-pequenas-empresas",
    title: "Tráfego pago para pequenas empresas: por onde começar",
    metaDescription:
      "Entenda o que é tráfego pago, quando vale a pena investir em anúncios e os erros mais comuns que fazem o orçamento ser desperdiçado.",
    excerpt:
      "O que é tráfego pago, quando vale a pena investir em anúncios e os erros mais comuns que fazem o orçamento ser desperdiçado.",
    publishedAt: "2026-11-14",
    keywords: ["tráfego pago", "google ads para pequenas empresas", "campanhas de anúncios"],
    relatedServiceIds: ["trafego-pago"],
    sections: [
      {
        heading: "O que é tráfego pago e como funciona",
        paragraphs: [
          "Tráfego pago é o conjunto de estratégias para colocar anúncios em plataformas como Google e redes sociais, pagando para que sua empresa apareça para pessoas com características e interesses específicos.",
          "Diferente do alcance orgânico, o resultado aparece de forma mais rápida, mas depende de planejamento e acompanhamento constante para não desperdiçar orçamento.",
        ],
      },
      {
        heading: "Quando vale a pena investir em anúncios",
        paragraphs: [
          "Faz sentido investir em tráfego pago quando a empresa já tem uma oferta clara, um canal de atendimento definido (WhatsApp, site ou loja) e capacidade de responder às pessoas que chegarem através do anúncio.",
          "Investir em anúncios sem esses pontos resolvidos tende a gerar contatos que não avançam, porque o problema não está na campanha, e sim no que vem depois do clique.",
        ],
      },
      {
        heading: "Erros comuns que fazem o orçamento ser desperdiçado",
        paragraphs: [
          "Segmentação ampla demais, atingindo pessoas sem relação real com o produto ou serviço.",
          "Página de destino confusa ou sem uma chamada para ação clara.",
          "Campanhas criadas uma única vez e nunca mais revisadas.",
          "Ausência de acompanhamento de métricas básicas, como custo por contato gerado.",
        ],
      },
      {
        heading: "Como acompanhar se a campanha está funcionando",
        paragraphs: [
          "Antes de olhar para números avançados, vale acompanhar o básico: quantas pessoas clicaram, quantas entraram em contato e qual o custo médio para gerar cada contato. Esses números, comparados mês a mês, já mostram se a campanha está indo na direção certa.",
        ],
      },
      {
        heading: "Próximo passo",
        paragraphs: [
          "Se você já tem uma oferta definida e quer começar a atrair clientes qualificados com tráfego pago, a Analisarty planeja e acompanha a campanha de ponta a ponta.",
        ],
      },
    ],
  },
  {
    slug: "site-institucional-ou-landing-page",
    title: "Site institucional ou landing page: qual a diferença e quando usar cada um",
    metaDescription:
      "Entenda a diferença entre site institucional e landing page, e descubra qual das duas opções faz mais sentido para o momento da sua empresa.",
    excerpt:
      "A diferença entre site institucional e landing page, e qual das duas opções faz mais sentido para o momento da sua empresa.",
    publishedAt: "2026-11-14",
    keywords: ["site institucional", "landing page", "criação de sites"],
    relatedServiceIds: ["sites", "landing-pages"],
    sections: [
      {
        heading: "O que é um site institucional",
        paragraphs: [
          "O site institucional apresenta a empresa como um todo: quem ela é, o que oferece, onde atua e como entrar em contato. É a referência principal da sua presença digital: o lugar para onde qualquer outro canal (redes sociais, Google, anúncios) pode direcionar quem quer conhecer melhor o negócio.",
        ],
      },
      {
        heading: "O que é uma landing page",
        paragraphs: [
          "A landing page é uma página com um único objetivo: converter o visitante em contato. Ela é construída para apoiar uma campanha específica ou uma oferta pontual, sem os múltiplos caminhos de navegação de um site institucional.",
        ],
      },
      {
        heading: "Principais diferenças entre os dois",
        paragraphs: [
          "Objetivo: o site apresenta a empresa; a landing page converte para uma oferta específica.",
          "Navegação: o site tem menu e várias seções; a landing page é linear, sem distrações.",
          "Uso típico: o site funciona o tempo todo; a landing page costuma estar ligada a uma campanha de tráfego pago ou a um lançamento.",
        ],
      },
      {
        heading: "Como saber qual você precisa agora",
        paragraphs: [
          "Se sua empresa ainda não tem uma presença digital de referência, o site institucional costuma ser o ponto de partida. Se você já tem uma oferta específica para divulgar, como um serviço, uma promoção ou um lançamento, a landing page tende a converter melhor para esse objetivo pontual.",
          "Não é incomum usar as duas ao mesmo tempo: o site como base e landing pages específicas para cada campanha.",
        ],
      },
    ],
  },
  {
    slug: "o-que-e-seo-local",
    title: "SEO local: o que é e por que ele importa para o seu negócio",
    metaDescription:
      "Entenda o conceito de SEO local, como o Google decide quais empresas mostrar nas buscas e quais ações realmente ajudam a melhorar sua visibilidade.",
    excerpt:
      "O conceito de SEO local, como o Google decide quais empresas mostrar nas buscas e quais ações realmente ajudam a melhorar a visibilidade.",
    publishedAt: "2026-11-14",
    keywords: ["seo local", "seo para pequenas empresas"],
    relatedServiceIds: ["seo-local", "google-perfil"],
    sections: [
      {
        heading: "O que é SEO local",
        paragraphs: [
          "SEO local é o conjunto de práticas para melhorar a visibilidade de uma empresa em buscas feitas por pessoas de uma determinada região, por exemplo buscas como 'perto de mim' ou pesquisas que já incluem um bairro ou cidade.",
        ],
      },
      {
        heading: "Como o Google decide quais empresas mostrar",
        paragraphs: [
          "O próprio Google explica que a ordem dos resultados locais considera relevância, distância e reputação. Relevância é o quanto o perfil e o site da empresa correspondem ao que foi pesquisado. Distância é a proximidade entre quem pesquisa e o endereço da empresa. Reputação envolve avaliações e a quantidade de informações confiáveis disponíveis sobre o negócio.",
          "Nenhum desses fatores garante uma posição fixa, e por isso é importante não confiar em promessas de 'primeiro lugar garantido', que não refletem como a busca realmente funciona.",
        ],
      },
      {
        heading: "Ações que ajudam no SEO local",
        paragraphs: [
          "Manter o Perfil da Empresa no Google completo e atualizado.",
          "Garantir que nome, endereço e telefone estejam iguais em todos os lugares onde a empresa aparece.",
          "Ter um site com informações claras sobre os serviços e a localização.",
          "Responder avaliações de clientes, boas ou ruins.",
        ],
      },
      {
        heading: "SEO local não é a mesma coisa que anúncios pagos",
        paragraphs: [
          "SEO local é um trabalho orgânico e contínuo: não existe pagamento direto ao Google para aparecer melhor nessas buscas. Isso é diferente do tráfego pago, onde a empresa paga para aparecer em destaque. As duas estratégias podem (e costumam) trabalhar juntas, mas resolvem problemas diferentes.",
        ],
      },
    ],
  },
  {
    slug: "sistema-de-gestao-pequena-empresa",
    title: "Como um sistema de gestão pode organizar a rotina da sua empresa",
    metaDescription:
      "Veja os sinais de que sua empresa precisa de um sistema de gestão e a diferença entre um sistema genérico e um sistema sob medida.",
    excerpt:
      "Os sinais de que sua empresa precisa de um sistema de gestão e a diferença entre um sistema genérico e um sistema sob medida.",
    publishedAt: "2026-11-14",
    keywords: ["sistema de gestão", "gestão para pequenas empresas", "automação de processos"],
    relatedServiceIds: ["sistemas"],
    sections: [
      {
        heading: "Os sinais de que sua empresa precisa de um sistema",
        paragraphs: [
          "Controle de estoque, clientes ou financeiro feito em planilhas separadas, sem conexão entre elas.",
          "Informações importantes espalhadas entre papel, WhatsApp e memória de quem trabalha no dia a dia.",
          "Dificuldade para saber, de forma rápida, o que está acontecendo no negócio naquele momento.",
        ],
      },
      {
        heading: "O que um sistema de gestão sob medida pode resolver",
        paragraphs: [
          "Um sistema desenvolvido para os processos reais da empresa centraliza as informações em um único lugar, reduz retrabalho e dá mais visibilidade sobre estoque, clientes e financeiro, sem depender de múltiplas planilhas desconectadas.",
        ],
      },
      {
        heading: "Sistema pronto (genérico) x sistema sob medida",
        paragraphs: [
          "Um sistema pronto resolve parte dos problemas rapidamente, mas costuma trazer funções que a empresa nunca vai usar e faltar funções específicas que ela realmente precisa.",
          "Um sistema sob medida é desenvolvido a partir dos processos reais do negócio, por isso tende a se encaixar melhor na rotina de quem vai usá-lo todos os dias.",
        ],
      },
      {
        heading: "Por onde começar",
        paragraphs: [
          "O primeiro passo é mapear os processos que mais geram retrabalho hoje. A partir disso, é possível definir se vale a pena um sistema completo ou começar por uma parte específica, como controle de estoque ou de clientes.",
        ],
      },
    ],
  },
  {
    slug: "erros-comuns-presenca-digital-pequenas-empresas",
    title: "5 erros comuns na presença digital de pequenas empresas",
    metaDescription:
      "Conheça 5 erros frequentes que afastam clientes da presença digital de pequenas empresas e como evitá-los.",
    excerpt:
      "Conheça os erros mais frequentes que afastam clientes da presença digital de pequenas empresas e como evitá-los.",
    publishedAt: "2026-11-14",
    keywords: ["presença digital", "marketing digital para pequenas empresas"],
    relatedServiceIds: [],
    sections: [
      {
        heading: "1. Perfil da Empresa no Google desatualizado",
        paragraphs: [
          "Endereço errado, horário incorreto ou categoria genérica fazem a empresa perder relevância nas buscas locais, mesmo quando oferece exatamente o que o cliente procura.",
        ],
      },
      {
        heading: "2. Site que não funciona bem no celular",
        paragraphs: [
          "A maior parte das buscas acontece no celular. Um site que não se adapta bem a telas pequenas afasta o visitante antes mesmo de ele conhecer a empresa.",
        ],
      },
      {
        heading: "3. Falta de uma chamada para ação clara",
        paragraphs: [
          "Se o visitante chega ao site ou ao perfil e não sabe exatamente o que fazer a seguir (ligar, mandar mensagem, visitar a loja), a chance de ele simplesmente sair é alta.",
        ],
      },
      {
        heading: "4. Divulgar sem acompanhar os resultados",
        paragraphs: [
          "Publicar conteúdo ou rodar anúncios sem olhar o que está funcionando (e o que não está) significa repetir os mesmos erros mês após mês.",
        ],
      },
      {
        heading: "5. Tentar fazer tudo de uma vez",
        paragraphs: [
          "Perfil no Google, site, anúncios e sistema de gestão resolvem problemas diferentes. Tentar implementar tudo ao mesmo tempo, sem prioridade, costuma gerar mais confusão do que resultado.",
          "O caminho mais eficiente costuma ser entender qual desses pontos está pesando mais agora e começar por ali.",
        ],
      },
    ],
  },
];
