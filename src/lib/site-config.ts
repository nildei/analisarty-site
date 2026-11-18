export const siteConfig = {
  name: "Analisarty",
  fullName: "Analisarty Negócios Online",
  founder: "Nildeí Almeida",
  founderRole: "Especialista em Soluções para Negócios",
  slogan: "Estratégia, Tecnologia e Crescimento.",
  description:
    "Aumente a visibilidade da sua empresa no Google com SEO Local, otimização do Perfil da Empresa no Google, tráfego pago e automação. Diagnóstico gratuito.",
  url: "https://www.analisarty.com.br",
  whatsappNumber: "5531992637359",
  whatsappDisplay: "+55 31 99263-7359",
  instagram: "https://www.instagram.com/analisarty",
  instagramHandle: "@analisarty",
  linkedin: "https://www.linkedin.com/in/analisarty-neg%C3%B3cios-online-2117b4355/",
  areaServed: "Contagem, região metropolitana de Belo Horizonte e todo o Brasil",
  locale: "pt_BR",
} as const;

export type ServiceId =
  | "google-perfil"
  | "seo-local"
  | "trafego-pago"
  | "automacao"
  | "sites"
  | "landing-pages"
  | "sistemas";

export interface ServiceDefinition {
  id: ServiceId;
  tag: string;
  title: string;
  headline: string;
  description: string;
  longDescription: string;
  targetAudience: string;
  benefits: string[];
  cta: string;
  whatsappMessage: string;
  icon: string;
  faqIndices: number[];
}

export const services: ServiceDefinition[] = [
  {
    id: "google-perfil",
    tag: "Ponto de partida",
    title: "Perfil da Empresa no Google",
    headline: "Sua empresa mais visível nas pesquisas do Google.",
    description:
      "Otimizamos o Perfil da Empresa no Google para melhorar sua apresentação, fortalecer sua relevância local e ampliar as oportunidades de ser encontrado por clientes que procuram seus serviços.",
    longDescription:
      "Um perfil bem estruturado aumenta as chances de a sua empresa aparecer nas buscas locais e no Google Maps, exatamente no momento em que o cliente já está procurando o que você oferece. Trabalhamos a estrutura, as categorias e as informações do seu perfil para fortalecer sua presença local.",
    targetAudience:
      "Empresas que atendem clientes na própria região e querem ser encontradas com mais facilidade quando alguém pesquisa pelos seus serviços no Google.",
    benefits: [
      "Reestruturação completa do perfil empresarial",
      "Otimização de categorias e serviços",
      "Descrições estratégicas com SEO Local",
      "Organização de imagens e informações",
      "Estratégias para fortalecer a presença local",
    ],
    cta: "Quero aparecer mais no Google",
    whatsappMessage:
      "Olá! Conheci a Analisarty pelo site e gostaria de entender como funciona o serviço de otimização do Perfil da Empresa no Google para minha empresa.",
    icon: "MapPin",
    faqIndices: [0, 1, 2],
  },
  {
    id: "seo-local",
    tag: "Visibilidade orgânica",
    title: "SEO Local",
    headline: "Apareça para quem já procura o que você oferece na sua região.",
    description:
      "Trabalhamos SEO Local para melhorar a posição da sua empresa nas buscas regionais, unindo o Perfil da Empresa no Google, o site e as informações consistentes que o Google usa para decidir quem mostrar primeiro.",
    longDescription:
      "SEO Local não depende de pagar por anúncios: é um trabalho contínuo sobre relevância, distância e reputação, os três fatores que o próprio Google usa para ordenar os resultados de busca por região. Ajustamos esses pontos de forma consistente entre o perfil, o site e as citações da sua empresa.",
    targetAudience:
      "Empresas que atendem uma região específica, como Contagem e cidades vizinhas da região metropolitana de Belo Horizonte, e querem aparecer de forma orgânica, sem depender apenas de anúncios pagos, quando alguém pesquisa pelos seus serviços.",
    benefits: [
      "Auditoria de relevância, distância e reputação",
      "Consistência de nome, endereço e telefone entre canais",
      "Otimização do site para buscas regionais",
      "Estratégia de avaliações e reputação local",
      "Acompanhamento de posição nas buscas locais",
    ],
    cta: "Quero ser encontrado na minha região",
    whatsappMessage:
      "Olá! Conheci a Analisarty pelo site e gostaria de entender como funciona a estratégia de SEO Local para minha empresa.",
    icon: "Search",
    faqIndices: [0, 10],
  },
  {
    id: "trafego-pago",
    tag: "Aceleração",
    title: "Tráfego Pago",
    headline: "Coloque sua empresa na frente de quem pode comprar.",
    description:
      "Planejamento e criação de campanhas estratégicas para alcançar públicos qualificados, gerar oportunidades comerciais e aumentar as possibilidades de vendas.",
    longDescription:
      "Campanhas bem planejadas colocam sua empresa na frente de pessoas com intenção real de compra, no momento certo da jornada. Acompanhamos o desempenho de perto para direcionar o orçamento para o que realmente gera oportunidades de negócio.",
    targetAudience:
      "Empresas que já têm uma oferta clara e querem acelerar a geração de oportunidades comerciais qualificadas.",
    benefits: [
      "Planejamento de campanhas por objetivo",
      "Segmentação de público qualificado",
      "Estratégias para geração de leads",
      "Acompanhamento contínuo de desempenho",
      "Otimização de orçamento e criativos",
    ],
    cta: "Quero atrair mais clientes",
    whatsappMessage:
      "Olá! Conheci a Analisarty pelo site e gostaria de entender como funciona o serviço de tráfego pago para minha empresa.",
    icon: "TrendingUp",
    faqIndices: [3, 8],
  },
  {
    id: "automacao",
    tag: "Produtividade",
    title: "Automação de Atendimento pelo WhatsApp",
    headline: "Organize o primeiro contato antes que ele vire uma oportunidade perdida.",
    description:
      "Estruturamos a automação do pré-atendimento pelo WhatsApp para organizar contatos, qualificar oportunidades e agilizar a resposta inicial, sem perder o toque humano no momento de negociar.",
    longDescription:
      "Grande parte das oportunidades se perde nos primeiros minutos, quando ninguém responde a tempo. A automação cuida do pré-atendimento: recebe, organiza e qualifica o contato, para que sua equipe entre na conversa já sabendo o que a pessoa precisa.",
    targetAudience:
      "Empresas que recebem muitos contatos pelo WhatsApp e têm dificuldade de organizar, responder a tempo ou identificar quais contatos realmente têm potencial de venda.",
    benefits: [
      "Automação do pré-atendimento",
      "Organização e qualificação de contatos",
      "Respostas rápidas para dúvidas frequentes",
      "Integração com as ferramentas que a empresa já usa",
      "Equipe entra na conversa só quando faz sentido",
    ],
    cta: "Quero organizar meu atendimento",
    whatsappMessage:
      "Olá! Conheci a Analisarty pelo site e gostaria de entender como funciona a automação de atendimento pelo WhatsApp para minha empresa.",
    icon: "Bot",
    faqIndices: [11, 8],
  },
  {
    id: "sites",
    tag: "Presença digital",
    title: "Criação de Sites",
    headline: "Transforme sua presença digital em uma vitrine profissional.",
    description:
      "Desenvolvemos sites modernos, responsivos e preparados para mecanismos de busca, ajudando sua empresa a transmitir credibilidade e apresentar seus diferenciais.",
    longDescription:
      "Um site profissional funciona como a base da sua presença digital, reunindo em um só lugar tudo que o cliente precisa saber sobre a sua empresa. Desenvolvemos com estrutura técnica pensada para mecanismos de busca desde o primeiro dia.",
    targetAudience:
      "Empresas que ainda não têm um site ou precisam modernizar a presença digital atual.",
    benefits: [
      "Design profissional e sob medida",
      "Responsividade em qualquer tela",
      "SEO técnico desde a estrutura",
      "Experiência de navegação fluida",
      "Integração direta com WhatsApp",
    ],
    cta: "Quero um site profissional",
    whatsappMessage:
      "Olá! Conheci a Analisarty pelo site e gostaria de entender como funciona o serviço de criação de sites profissionais.",
    icon: "LayoutTemplate",
    faqIndices: [4, 5],
  },
  {
    id: "landing-pages",
    tag: "Conversão",
    title: "Landing Pages",
    headline: "Páginas criadas para transformar visitantes em oportunidades.",
    description:
      "Criamos páginas estratégicas com comunicação persuasiva, estrutura comercial e chamadas para ação que incentivam o visitante a entrar em contato.",
    longDescription:
      "Diferente de um site institucional, a landing page é construída com um único objetivo: converter o visitante em contato. É a página ideal para apoiar uma campanha específica ou o lançamento de uma oferta.",
    targetAudience:
      "Empresas que vão rodar campanhas de tráfego pago ou lançar uma oferta específica e precisam de uma página focada em conversão.",
    benefits: [
      "Copywriting focado em conversão",
      "Estrutura comercial validada",
      "Chamadas para ação estratégicas",
      "Carregamento rápido e direto ao ponto",
      "Pronta para campanhas de tráfego pago",
    ],
    cta: "Quero uma página que converta",
    whatsappMessage:
      "Olá! Conheci a Analisarty pelo site e gostaria de entender como funciona o serviço de criação de landing pages.",
    icon: "MousePointerClick",
    faqIndices: [5, 8],
  },
  {
    id: "sistemas",
    tag: "Gestão",
    title: "Aplicativos e Sistemas de Gestão",
    headline: "Simplifique a gestão e tenha mais controle sobre seu negócio.",
    description:
      "Desenvolvemos aplicativos e sistemas personalizados para ajudar pequenas empresas a organizar informações, automatizar tarefas e melhorar seus processos administrativos.",
    longDescription:
      "Um sistema sob medida reduz retrabalho, centraliza informações e dá mais visibilidade sobre o que está acontecendo no dia a dia do negócio. Desenvolvemos de acordo com os processos reais da sua empresa, não um modelo genérico.",
    targetAudience:
      "Empresas que ainda dependem de planilhas, papel ou processos manuais para controlar estoque, clientes ou financeiro.",
    benefits: [
      "Sistemas personalizados por negócio",
      "Controle centralizado de informações",
      "Organização de processos internos",
      "Automação de tarefas repetitivas",
      "Soluções que crescem com a empresa",
    ],
    cta: "Quero modernizar minha gestão",
    whatsappMessage:
      "Olá! Conheci a Analisarty pelo site e gostaria de entender como funciona o serviço de aplicativos e sistemas de gestão.",
    icon: "LayoutDashboard",
    faqIndices: [6, 8],
  },
];

export const faqItems: { question: string; answer: string }[] = [
  {
    question: "Como a Analisarty pode ajudar minha empresa a aparecer no Google?",
    answer:
      "Trabalhamos a estrutura, as categorias, as descrições e as informações do seu Perfil da Empresa no Google, além de estratégias de SEO Local. Isso aumenta as chances de sua empresa aparecer para quem já está procurando o que você oferece.",
  },
  {
    question: "O que é a reestruturação do Perfil da Empresa no Google?",
    answer:
      "É o trabalho de revisar e otimizar categorias, serviços, descrições, fotos e demais informações do antigo Google Meu Negócio, para que o perfil transmita mais confiança e relevância para quem pesquisa.",
  },
  {
    question: "Quanto tempo leva para melhorar o posicionamento no Google?",
    answer:
      "Varia conforme o segmento, a concorrência local e o ponto de partida da sua empresa. Não prometemos prazos fixos ou primeira posição garantida. Trabalhamos com estratégias consistentes para melhorar sua relevância ao longo do tempo.",
  },
  {
    question: "A Analisarty também trabalha com tráfego pago?",
    answer:
      "Sim. Planejamos e criamos campanhas estratégicas para alcançar públicos qualificados, com acompanhamento e otimização contínua de desempenho e orçamento.",
  },
  {
    question: "Vocês desenvolvem sites para pequenas empresas?",
    answer:
      "Sim. Criamos sites institucionais modernos, responsivos e preparados para SEO, pensados para transmitir credibilidade e apresentar os diferenciais da sua empresa.",
  },
  {
    question: "Qual a diferença entre site institucional e landing page?",
    answer:
      "O site institucional apresenta a empresa como um todo: serviços, história e canais de contato. A landing page é focada em um objetivo específico, como uma campanha ou oferta, com estrutura voltada para conversão.",
  },
  {
    question: "É possível criar um sistema de gestão personalizado?",
    answer:
      "Sim. Desenvolvemos aplicativos e sistemas sob medida para organizar processos, controlar informações e automatizar tarefas de acordo com a necessidade específica do seu negócio.",
  },
  {
    question: "Como funciona a contratação dos serviços?",
    answer:
      "Primeiro entendemos sua empresa, seus desafios e seus objetivos. A partir disso, recomendamos quais soluções fazem mais sentido para o seu momento, sem a necessidade de contratar tudo de uma vez.",
  },
  {
    question: "Posso contratar apenas um dos serviços?",
    answer:
      "Sim. Cada serviço pode ser contratado de forma independente, de acordo com a prioridade e a necessidade atual da sua empresa.",
  },
  {
    question: "Como solicitar uma avaliação para minha empresa?",
    answer:
      "Basta clicar em qualquer botão de contato do site. Você será direcionado ao WhatsApp da Analisarty para conversar diretamente com um especialista sobre o seu negócio.",
  },
  {
    question: "SEO Local é a mesma coisa que anúncios no Google?",
    answer:
      "Não. SEO Local é um trabalho orgânico e contínuo sobre relevância, distância e reputação: não existe pagamento ao Google para aparecer melhor nessas buscas. É diferente do tráfego pago, embora as duas estratégias possam trabalhar juntas.",
  },
  {
    question: "Como funciona a automação de atendimento pelo WhatsApp?",
    answer:
      "A automação cuida do pré-atendimento: recebe e organiza os contatos, responde dúvidas frequentes e qualifica quem tem real intenção de compra, para que sua equipe entre na conversa já com contexto, sem perder o toque humano na negociação.",
  },
];

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export const defaultWhatsAppMessage =
  "Olá! Vim pelo site da Analisarty e quero entender como vocês podem ajudar minha empresa a crescer.";

export interface PartnerLogo {
  name: string;
  image: string;
}

export const partners: PartnerLogo[] = [
  { name: "ATR Contabilidade", image: "/images/partners/atr-contabilidade.png" },
  { name: "AZ Casagrande Transportes", image: "/images/partners/az-casagrande-transportes.png" },
  { name: "Basicfit Academia", image: "/images/partners/basicfit.png" },
  { name: "BH Multimarcas", image: "/images/partners/bh-multimarcas.png" },
  { name: "Casa Chevrolet Auto Peças", image: "/images/partners/casa-chevrolet.png" },
  { name: "Centro Educacional Aquarela Brasil", image: "/images/partners/ceab.png" },
  { name: "Cheveux Cabelo & Corpo", image: "/images/partners/cheveux.png" },
  { name: "CM Multimarcas", image: "/images/partners/cm-multimarcas.png" },
  { name: "Eletroforte", image: "/images/partners/eletroforte.png" },
  { name: "Eros Lanternagem e Pintura", image: "/images/partners/eros-lanternagem.png" },
  { name: "Gruller Calçados", image: "/images/partners/gruller-calcados.png" },
  { name: "LBN Perfumaria", image: "/images/partners/lbn-parfum.png" },
  { name: "Leo Baterias", image: "/images/partners/leo-baterias.png" },
  { name: "Norte & Sul Peças", image: "/images/partners/norte-e-sul-pecas.png" },
  { name: "Print Screen Impressão e Brindes", image: "/images/partners/print-screen.png" },
  { name: "Statera TI", image: "/images/partners/statera-ti.png" },
  { name: "Valéria Sales Estética Integrativa", image: "/images/partners/valeria-sales-estetica.png" },
  { name: "Vidraçaria Vidro Show", image: "/images/partners/vidracaria-vidro-show.png" },
];
