import type { ServiceId } from "@/lib/site-config";

export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogSource {
  name: string;
  url: string;
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
  sources?: BlogSource[];
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
    sources: [
      {
        name: "Google Business Profile Help: como melhorar seu posicionamento local",
        url: "https://support.google.com/business/answer/7091",
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
    sources: [
      {
        name: "Google Business Profile Help: como melhorar seu posicionamento local",
        url: "https://support.google.com/business/answer/7091",
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
  {
    slug: "core-update-google-novembro-2026-o-que-fazer",
    title: "Core update do Google de novembro de 2026: o que a sua empresa deve (e não deve) fazer",
    metaDescription:
      "O Google iniciou o core update de novembro de 2026. Veja o que é, por que esperar o fim do rollout para avaliar e o que revisar no seu site.",
    excerpt:
      "O Google começou a liberar um novo core update em 10 de novembro de 2026. Entenda o que isso significa e como acompanhar sem tomar decisões precipitadas.",
    publishedAt: "2026-11-18",
    keywords: ["core update google", "atualização do google novembro 2026", "seo para pequenas empresas", "queda de tráfego"],
    relatedServiceIds: ["seo-local", "sites"],
    sections: [
      {
        heading: "O que o Google anunciou",
        paragraphs: [
          "Segundo a Search Status Dashboard do Google, o core update de novembro de 2026 começou a ser liberado em 10 de novembro, de forma global e para todos os idiomas. A previsão informada é de que o processo leve até cerca de duas semanas para ser concluído.",
          "Na comunicação do time Search Central, o Google descreveu a atualização como uma mudança regular, pensada para destacar melhor conteúdos relevantes e satisfatórios para quem pesquisa, em sites de todos os tipos. A mesma descrição foi usada nos core updates anteriores deste ano. Até onde conseguimos verificar, o Google não detalhou objetivos específicos para esta edição.",
        ],
      },
      {
        heading: "O que é um core update",
        paragraphs: [
          "Core updates são ajustes amplos nos sistemas de classificação do Google. Eles não miram um site, um setor ou uma prática específica: mudam a forma como o buscador avalia o conjunto de páginas disponíveis, e por isso posições podem subir ou cair mesmo sem que o seu site tenha mudado.",
          "Também por isso, uma oscilação durante o rollout não significa necessariamente que algo está errado com o seu site.",
        ],
      },
      {
        heading: "Por que esperar antes de avaliar",
        paragraphs: [
          "A orientação do Google é aguardar o fim do rollout antes de analisar os dados no Search Console. A documentação do Google também sugere esperar pelo menos uma semana após a conclusão para comparar o desempenho com o período anterior.",
          "Na prática, isso significa evitar reformular o site inteiro ou trocar de estratégia no meio da atualização, já que os números ainda estão em movimento e qualquer conclusão pode ser precipitada.",
        ],
      },
      {
        heading: "O que vale a pena fazer enquanto isso",
        paragraphs: [
          "Dá para se preparar sem mexer em nada drástico. Registre hoje as principais métricas do Search Console (cliques, impressões e páginas mais acessadas) para ter uma base de comparação quando a atualização terminar.",
          "Aproveite também para revisar o básico: se as páginas respondem de fato ao que o cliente procura, se as informações de contato e serviços estão corretas e atualizadas, e se o site carrega e funciona bem no celular.",
        ],
      },
      {
        heading: "E se houver queda depois do fim do rollout",
        paragraphs: [
          "Se, passado o período recomendado, houver queda relevante, o caminho é comparar as páginas afetadas com o que aparece nos primeiros resultados e identificar onde o seu conteúdo é menos útil, claro ou completo. Melhorias de conteúdo costumam ser mais produtivas do que ajustes técnicos isolados.",
          "Para negócios locais, vale lembrar que o Perfil da Empresa no Google e as avaliações também influenciam a visibilidade, e que a recuperação, quando acontece, não tem prazo garantido.",
        ],
      },
    ],
  },
  {
    slug: "botao-mensagem-google-maps-whatsapp-perfil-empresa",
    title: "Botão de mensagem no Google Maps: como preparar o Perfil da Empresa para receber conversas",
    metaDescription:
      "O Google ampliou o envio de mensagens para empresas no Maps. Veja o que mudou e o que revisar no Perfil da Empresa e no atendimento por WhatsApp.",
    excerpt:
      "Segundo a imprensa especializada, o Google ampliou o acesso às mensagens para empresas no Google Maps. Veja o que revisar para estar pronto para responder.",
    publishedAt: "2026-11-20",
    keywords: ["mensagens google maps", "perfil da empresa no google", "whatsapp business", "atendimento ao cliente"],
    relatedServiceIds: ["google-perfil", "automacao"],
    sections: [
      {
        heading: "O que foi noticiado",
        paragraphs: [
          "O Search Engine Roundtable noticiou em 6 de novembro de 2026 que o Google ampliou o envio de mensagens para empresas no Google Maps, nos aplicativos para iOS e Android. De acordo com a reportagem, a informação veio do boletim mensal para pequenas empresas do Google, comentado por Lisa Landsman nos Fóruns de Ajuda do Google Business.",
          "Ainda segundo a reportagem, o cliente passa a ver um botão de mensagem ao lado do botão de ligar na ficha da empresa no Maps. Antes, esse recurso ficava mais escondido dentro do perfil. A fonte é um veículo de notícias, e não uma página oficial do Google, então vale conferir a disponibilidade no seu próprio perfil.",
        ],
      },
      {
        heading: "Por que isso importa para quem atende clientes locais",
        paragraphs: [
          "Quem pesquisa uma empresa no Maps normalmente quer resolver algo rápido: tirar uma dúvida, confirmar um horário ou pedir um orçamento. Um botão de mensagem visível dá a essas pessoas mais um caminho de contato além da ligação.",
          "Isso também significa que a empresa precisa estar pronta para responder. Um canal de contato aberto e sem resposta pode ser pior do que não ter o canal.",
        ],
      },
      {
        heading: "O que revisar no Perfil da Empresa",
        paragraphs: [
          "Segundo a reportagem, as mensagens podem ser encaminhadas para canais como WhatsApp e SMS. Por isso, vale entrar no seu Perfil da Empresa e conferir se o canal de mensagens que você realmente usa está configurado e funcionando.",
          "Aproveite para revisar telefone, horário de funcionamento (inclusive feriados) e a descrição dos serviços, para que a resposta automática ou manual seja coerente com o que está no perfil.",
        ],
      },
      {
        heading: "Como organizar o atendimento por mensagem",
        paragraphs: [
          "Defina quem responde, em quais horários e em quanto tempo. Para empresas pequenas, uma regra simples já ajuda: responder dentro do horário comercial e avisar claramente quando a equipe está fora.",
          "O WhatsApp Business oferece recursos como mensagem de ausência, mensagem de saudação e respostas rápidas, que ajudam a manter um padrão sem depender de digitar tudo manualmente. Se o volume de conversas crescer, também é possível avaliar fluxos de automação, sempre com a opção de falar com uma pessoa.",
        ],
      },
      {
        heading: "Próximo passo",
        paragraphs: [
          "Comece pelo básico: confira o perfil, teste o canal de mensagens como se fosse um cliente e veja quanto tempo a sua equipe leva para responder. Se quiser apoio para revisar o Perfil da Empresa e organizar o atendimento por WhatsApp, a Analisarty pode ajudar.",
        ],
      },
    ],
    sources: [
      {
        name: "Search Engine Roundtable: Google Expands Business Messaging To Google Maps On iOS & Android",
        url: "https://seroundtable.com/google-maps-messaging-android-ios-42472.html",
      },
    ],
  },
  {
    slug: "google-testa-local-pack-ai-overview-sem-botoes",
    title: "Google testa versão do local pack em AI Overviews sem botões de ação: o que isso muda para o seu negócio",
    metaDescription:
      "O Google estaria testando o local pack dos AI Overviews sem botões, fotos e avaliações. Veja o que foi noticiado e como manter seu negócio encontrável.",
    excerpt:
      "Segundo o Search Engine Roundtable, o Google testa uma versão do local pack dentro dos AI Overviews sem botões de ação. Entenda o que é, o que ainda não se sabe e o que revisar.",
    publishedAt: "2026-11-21",
    keywords: ["local pack", "ai overviews", "seo local", "perfil da empresa no google", "busca local"],
    relatedServiceIds: ["seo-local", "google-perfil"],
    sections: [
      {
        heading: "O que foi noticiado",
        paragraphs: [
          "Em 10 de novembro de 2026, o Search Engine Roundtable noticiou que o Google está testando a retirada dos botões de ação, das avaliações e das fotos da versão do local pack exibida dentro dos AI Overviews, os resumos gerados por IA nos resultados de busca.",
          "Segundo a reportagem, isso torna mais difícil para quem pesquisa visitar o site, ligar para a empresa ou pedir rota diretamente a partir da busca. A matéria cita Joy Hawkins, especialista em busca local, que observou que, no celular, o local pack tradicional deixa de aparecer quando essa versão é exibida.",
        ],
      },
      {
        heading: "O que é o local pack e por que ele importa",
        paragraphs: [
          "O local pack é o bloco com mapa e três empresas que costuma aparecer quando alguém busca algo como \"dentista perto de mim\". Normalmente ele traz botões para ligar, ver o site e traçar a rota, além de nota e fotos.",
          "Para negócios locais, esse bloco é uma das principais portas de entrada para novos contatos. Qualquer mudança em como ele é exibido pode alterar o caminho que o cliente faz até a empresa.",
        ],
      },
      {
        heading: "O que ainda não se sabe",
        paragraphs: [
          "Trata-se de um teste noticiado por um veículo especializado, e não de um anúncio oficial do Google. Até onde conseguimos verificar, não há data de lançamento, alcance ou confirmação de que a mudança será mantida.",
          "Por isso, não faz sentido reformular a estratégia por causa dessa notícia. O mais útil é acompanhar e medir o que acontece nos seus próprios números.",
        ],
      },
      {
        heading: "O que vale revisar agora",
        paragraphs: [
          "Confira se o Perfil da Empresa está completo e atualizado: nome, categoria, telefone, horário, endereço e descrição dos serviços. Se o cliente chegar à ficha por outro caminho, essas informações precisam estar corretas.",
          "Mantenha as avaliações respondidas e as fotos em dia. Mesmo que algumas telas deixem de exibir esses elementos, eles continuam aparecendo na ficha completa e no Google Maps.",
          "Verifique também se o site carrega bem no celular e se as páginas de serviço deixam claro o que a empresa faz e em quais regiões atende.",
        ],
      },
      {
        heading: "Como acompanhar o efeito no seu negócio",
        paragraphs: [
          "No Perfil da Empresa, observe as métricas de ligações, pedidos de rota e cliques no site ao longo das próximas semanas. No Search Console, acompanhe cliques e impressões das páginas principais.",
          "Se notar queda, compare com o período anterior antes de concluir qualquer coisa, já que variações têm várias causas possíveis, como sazonalidade e outras atualizações do Google. Se quiser apoio para revisar o Perfil da Empresa e a presença local, a Analisarty pode ajudar.",
        ],
      },
    ],
    sources: [
      {
        name: "Search Engine Roundtable: Google AI Overview Local Pack Dropping Action Buttons, Photos & Reviews",
        url: "https://www.seroundtable.com/google-ai-overview-local-pack-action-buttons-42483.html",
      },
    ],
  },
  {
    slug: "google-link-de-agendamento-perfil-empresa-botao-reservar",
    title: "Link de agendamento no Perfil da Empresa: Google estaria exibindo botões de reserva automaticamente",
    metaDescription:
      "Segundo o Search Engine Roundtable, o Google pode estar adicionando botões de agendamento a perfis de empresas. Veja o que foi noticiado e o que conferir no seu perfil.",
    excerpt:
      "Um relato de novembro de 2026 aponta que o Google pode estar exibindo botões de reserva em perfis sem configuração prévia. Veja o que revisar no campo de link de agendamento.",
    publishedAt: "2026-11-26",
    keywords: ["link de agendamento", "perfil da empresa no google", "botão reservar google", "seo local", "busca local"],
    relatedServiceIds: ["google-perfil", "seo-local"],
    sections: [
      {
        heading: "O que foi noticiado",
        paragraphs: [
          "Em 9 de novembro de 2026, o Search Engine Roundtable publicou um relato com o título \"Google Adding Booking Links To Business Profiles Automatically?\", com ponto de interrogação. Segundo a reportagem, o Google pode estar adicionando automaticamente links de agendamento a alguns perfis de empresas locais.",
          "O relato descreve que, em alguns casos, esses links de reserva apresentam erro e levam a uma página de erro do próprio Google. Também menciona que apenas informar a página de contato do site no campo de link de agendamento já estaria fazendo aparecer o botão \"Book Online\", algo que antes parecia exigir configuração por meio de parceiros de reserva do Google.",
        ],
      },
      {
        heading: "O que ainda não está confirmado",
        paragraphs: [
          "A matéria se baseia em observações do autor em perfis de clientes e em uma publicação de fórum. Até onde conseguimos verificar, não há comunicado oficial do Google confirmando essa mudança, e não sabemos o alcance nem se o comportamento será mantido.",
          "Por isso, trate a notícia como um sinal para conferir o seu perfil, e não como uma regra nova definitiva.",
        ],
      },
      {
        heading: "Onde fica o link de agendamento",
        paragraphs: [
          "De acordo com a página de ajuda do Google, é possível adicionar links de agendamento na aba Informações do gerenciador do Perfil da Empresa, e também remover links de reserva de terceiros que apareçam no perfil.",
          "Se a sua empresa trabalha com horário marcado, como clínicas, estúdios, oficinas ou consultorias, esse campo costuma ser a ligação direta entre quem encontra o perfil e a sua agenda.",
        ],
      },
      {
        heading: "O que conferir no seu perfil",
        paragraphs: [
          "Pesquise o nome da sua empresa no Google, no celular e no computador, e veja se aparece algum botão de reserva ou agendamento que você não configurou. Clique nele como se fosse um cliente e confirme se a página abre e leva ao lugar certo.",
          "Se o link estiver quebrado ou apontar para um destino que não representa o seu atendimento, revise o campo na aba Informações. Se o botão não fizer sentido para o seu negócio, verifique as opções de edição ou remoção disponíveis no perfil.",
          "Se você usa uma ferramenta própria de agenda, informe nela o endereço direto da página de marcação, em vez de uma página genérica, e teste de vez em quando.",
        ],
      },
      {
        heading: "Mantendo o caminho do cliente simples",
        paragraphs: [
          "Independentemente dessa mudança, vale garantir que quem chega pelo Google consiga entrar em contato por pelo menos um canal que funcione: telefone, WhatsApp ou agendamento. Informações de horário, endereço e serviços também precisam estar coerentes com o que o site diz.",
          "Se quiser apoio para revisar o Perfil da Empresa e organizar os canais de contato e agendamento, a Analisarty pode ajudar.",
        ],
      },
    ],
    sources: [
      {
        name: "Search Engine Roundtable: Google Adding Booking Links To Business Profiles Automatically?",
        url: "https://seroundtable.com/google-business-profiles-adding-booking-links-42477.html",
      },
      {
        name: "Ajuda do Perfil da Empresa no Google: links de agendamento",
        url: "https://support.google.com/business/answer/6218037",
      },
    ],
  },
  {
    slug: "perfil-empresa-google-suspenso-formulario-recurso",
    title: "Perfil da Empresa suspenso no Google: o que fazer e como preparar o recurso",
    metaDescription:
      "O Search Engine Roundtable noticiou um formulário de recurso mais simples no Perfil da Empresa. Veja como se preparar caso o seu perfil seja suspenso.",
    excerpt:
      "Segundo o Search Engine Roundtable, o formulário de recursos do Perfil da Empresa no Google foi simplificado. Veja o que o Google orienta fazer se o perfil for suspenso.",
    publishedAt: "2026-11-27",
    keywords: ["perfil da empresa suspenso", "recurso google business profile", "reativar perfil google", "seo local", "busca local"],
    relatedServiceIds: ["google-perfil", "seo-local"],
    sections: [
      {
        heading: "O que foi noticiado",
        paragraphs: [
          "O Search Engine Roundtable publicou, nesta semana, uma matéria com o título \"Google Business Profiles Appeals Form Simplified\", indicando que o formulário usado para recorrer de problemas no Perfil da Empresa foi simplificado.",
          "Não conseguimos acessar o texto completo da matéria para detalhar o que mudou, e até onde verificamos não há um comunicado oficial do Google sobre isso. Por isso, este artigo não descreve o novo formulário: ele usa as orientações que o próprio Google mantém em suas páginas de ajuda sobre suspensão e recursos.",
        ],
      },
      {
        heading: "Por que uma suspensão afeta o negócio",
        paragraphs: [
          "Quando um perfil é suspenso ou desativado, a empresa pode deixar de aparecer normalmente no Google Maps e na busca local. Para quem depende de ligações, pedidos de rota e mensagens vindos do Google, isso interrompe um canal importante de contato.",
          "Daí a importância de saber, antes de precisar, como funciona o processo de recurso.",
        ],
      },
      {
        heading: "O que o Google orienta fazer",
        paragraphs: [
          "Segundo a página de ajuda do Google sobre recursos, um perfil suspenso ou desativado precisa ser reativado antes que decisões sobre conteúdo possam ser contestadas. A mesma página orienta a não criar um novo perfil para a mesma empresa enquanto o problema não é resolvido.",
          "A página de ajuda sobre perfis suspensos informa que o Google pode pedir evidências de que o negócio é real, e cita como exemplos documentos como registro da empresa, alvará e certificados fiscais. Ela também indica que a maioria das solicitações é analisada em alguns dias, sem prazo garantido.",
        ],
      },
      {
        heading: "Como se preparar antes de precisar",
        paragraphs: [
          "Mantenha à mão os documentos do negócio, como CNPJ, alvará e comprovante de endereço, e confirme que o nome, o endereço e a categoria do perfil correspondem ao que existe na prática e no seu site.",
          "Evite alterações bruscas de nome, categoria ou endereço sem necessidade, e use apenas informações reais. Registre quem tem acesso de proprietário ou gerente ao perfil, para que o recurso possa ser aberto sem demora.",
        ],
      },
      {
        heading: "Se o perfil for suspenso",
        paragraphs: [
          "Abra o recurso pelo canal oficial indicado nas páginas de ajuda do Google, leia o motivo informado e envie as evidências solicitadas com atenção às instruções, já que o Google informa que alguns formulários de evidência têm tempo limite para envio.",
          "Se quiser apoio para revisar o Perfil da Empresa e se organizar para esse tipo de situação, a Analisarty pode ajudar.",
        ],
      },
    ],
    sources: [
      {
        name: "Search Engine Roundtable: Google Business Profiles Appeals Form Simplified",
        url: "https://seroundtable.com/google-business-profiles-appeals-form-simplified-42593.html",
      },
      {
        name: "Ajuda do Perfil da Empresa no Google: recursos de conteúdo e restrições do perfil",
        url: "https://support.google.com/business/answer/13597551",
      },
      {
        name: "Ajuda do Perfil da Empresa no Google: corrigir perfis suspensos ou desativados",
        url: "https://support.google.com/business/answer/4569145",
      },
    ],
  },
  {
    slug: "local-pack-google-sem-avaliacoes-bug-perfil-empresa",
    title: "Local pack do Google mostrando \"sem avaliações\": o que checar no seu Perfil da Empresa",
    metaDescription:
      "O Search Engine Roundtable noticiou um bug que exibe \"sem avaliações\" no local pack. Veja o que foi relatado e como conferir as avaliações do seu perfil.",
    excerpt:
      "Segundo o Search Engine Roundtable, o Google às vezes mostra \"sem avaliações\" no local pack para empresas que têm avaliações. Veja como verificar o seu caso sem tomar decisões precipitadas.",
    publishedAt: "2026-11-28",
    keywords: ["local pack", "avaliações google", "perfil da empresa no google", "seo local", "busca local"],
    relatedServiceIds: ["google-perfil", "seo-local"],
    sections: [
      {
        heading: "O que foi noticiado",
        paragraphs: [
          "O Search Engine Roundtable publicou, em novembro de 2026, uma matéria intitulada \"Google Local Pack Showing No Reviews When There Are Reviews\". De acordo com o relato, o Google está exibindo \"sem avaliações\" no local pack para algumas empresas que, na prática, têm avaliações.",
          "Ainda segundo a matéria, ao abrir a ficha da empresa a contagem correta aparece, e o problema não é consistente: uma mesma empresa pode mostrar as avaliações em alguns momentos e em outros não.",
        ],
      },
      {
        heading: "O que ainda não sabemos",
        paragraphs: [
          "Não conseguimos acessar o texto completo da matéria, então este artigo se limita ao que o resumo da reportagem informa. Até onde verificamos, não há comunicado oficial do Google explicando a causa nem prevendo quando o comportamento será corrigido.",
          "Por isso, trate o caso como uma falha de exibição noticiada, e não como uma mudança definitiva nas regras do Google.",
        ],
      },
      {
        heading: "Por que isso preocupa quem depende da busca local",
        paragraphs: [
          "O local pack é o bloco com mapa e empresas que aparece em buscas como \"mecânico perto de mim\". A nota e a quantidade de avaliações ajudam quem pesquisa a comparar opções rapidamente, e a ausência dessa informação pode deixar a ficha menos convincente.",
          "Se o seu perfil apareceu assim, isso não significa necessariamente que as avaliações foram removidas.",
        ],
      },
      {
        heading: "Como conferir o seu perfil",
        paragraphs: [
          "Pesquise o nome da empresa e uma busca de serviço com a sua região, no celular e no computador, e abra a ficha completa para ver se a nota e a quantidade de avaliações aparecem. Anote o dia e o horário de cada teste.",
          "Compare com o que o gerenciador do Perfil da Empresa mostra. Se a ficha completa e o gerenciador estão corretos e só o local pack falha, o relato da imprensa sugere um problema de exibição. Se as avaliações realmente sumiram da ficha completa, vale investigar com mais cuidado, por exemplo se algo mudou no perfil recentemente.",
        ],
      },
      {
        heading: "O que fazer enquanto isso",
        paragraphs: [
          "Evite medidas drásticas, como alterar nome, categoria ou endereço do perfil, ou pedir avaliações em massa. Continue respondendo às avaliações existentes e mantendo as informações do perfil corretas.",
          "Se a falha persistir por vários dias, registre capturas de tela e use os canais oficiais de suporte do Perfil da Empresa. Se quiser apoio para revisar o perfil e acompanhar a presença local, a Analisarty pode ajudar.",
        ],
      },
    ],
    sources: [
      {
        name: "Search Engine Roundtable: Google Local Pack Showing No Reviews When There Are Reviews",
        url: "https://www.seroundtable.com/google-local-pack-no-reviews-bug-42624.html",
      },
    ],
  },
];
