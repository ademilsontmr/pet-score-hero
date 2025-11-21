export interface Question {
  id: number;
  question: string;
  options: Option[];
}

export interface Option {
  text: string;
  points: number;
}

export interface QuizResult {
  score: number;
  level: string;
  title: string;
  description: string;
  tips: string[];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Com que frequência você leva seu pet ao veterinário?",
    options: [
      { text: "A cada 6 meses ou quando necessário", points: 5 },
      { text: "Uma vez por ano", points: 3 },
      { text: "Só quando está doente", points: 1 },
      { text: "Raramente ou nunca", points: 0 }
    ]
  },
  {
    id: 2,
    question: "Seu pet tem uma rotina de exercícios diários?",
    options: [
      { text: "Sim, todos os dias!", points: 4 },
      { text: "Algumas vezes por semana", points: 2 },
      { text: "Raramente", points: 1 },
      { text: "Não tem rotina", points: 0 }
    ]
  },
  {
    id: 3,
    question: "Como é a alimentação do seu pet?",
    options: [
      { text: "Ração de qualidade, porções controladas", points: 5 },
      { text: "Ração comum, porções regulares", points: 3 },
      { text: "Comida caseira ou sobras", points: 1 },
      { text: "Sem rotina definida", points: 0 }
    ]
  },
  {
    id: 4,
    question: "Você escova os dentes do seu pet?",
    options: [
      { text: "Sim, regularmente", points: 4 },
      { text: "Às vezes", points: 2 },
      { text: "Raramente", points: 1 },
      { text: "Nunca", points: 0 }
    ]
  },
  {
    id: 5,
    question: "Seu pet está com as vacinas em dia?",
    options: [
      { text: "Sim, todas atualizadas", points: 5 },
      { text: "Maioria em dia", points: 3 },
      { text: "Algumas estão atrasadas", points: 1 },
      { text: "Não sei", points: 0 }
    ]
  },
  {
    id: 6,
    question: "Você dedica tempo de qualidade com seu pet todos os dias?",
    options: [
      { text: "Sim, sempre!", points: 3 },
      { text: "Quando posso", points: 2 },
      { text: "Raramente", points: 1 },
      { text: "Quase nunca", points: 0 }
    ]
  },
  {
    id: 7,
    question: "Seu pet tem brinquedos e estímulos mentais?",
    options: [
      { text: "Sim, vários brinquedos e atividades", points: 3 },
      { text: "Alguns brinquedos", points: 2 },
      { text: "Poucos ou nenhum", points: 1 },
      { text: "Não tem", points: 0 }
    ]
  },
  {
    id: 8,
    question: "Como você lida com o comportamento do seu pet?",
    options: [
      { text: "Com treinamento positivo", points: 3 },
      { text: "Com paciência e observação", points: 2 },
      { text: "Com dificuldade", points: 1 },
      { text: "Não presto atenção nisso", points: 0 }
    ]
  },
  {
    id: 9,
    question: "Seu pet tem um local confortável para dormir?",
    options: [
      { text: "Sim, caminha própria e confortável", points: 1 },
      { text: "Dorme no sofá ou na cama", points: 1 },
      { text: "Dorme no chão", points: 0 },
      { text: "Sem local definido", points: 0 }
    ]
  },
  {
    id: 10,
    question: "Você faz higiene regular (banho, unhas, pelos)?",
    options: [
      { text: "Sim, rotina completa", points: 3 },
      { text: "Só banho regular", points: 2 },
      { text: "Raramente", points: 1 },
      { text: "Quase nunca", points: 0 }
    ]
  },
  {
    id: 11,
    question: "Seu pet tem acesso a água fresca o dia todo?",
    options: [
      { text: "Sim, sempre", points: 4 },
      { text: "Na maioria das vezes", points: 2 },
      { text: "Às vezes esqueço", points: 1 },
      { text: "Não tenho certeza", points: 0 }
    ]
  },
  {
    id: 12,
    question: "Você observa sinais de estresse ou ansiedade no seu pet?",
    options: [
      { text: "Sim, e busco ajuda quando necessário", points: 4 },
      { text: "Observo mas nem sempre sei como ajudar", points: 2 },
      { text: "Raramente percebo", points: 1 },
      { text: "Nunca pensei nisso", points: 0 }
    ]
  },
  {
    id: 13,
    question: "Seu pet socializa com outros animais?",
    options: [
      { text: "Sim, regularmente", points: 3 },
      { text: "Às vezes", points: 2 },
      { text: "Raramente", points: 1 },
      { text: "Nunca", points: 0 }
    ]
  },
  {
    id: 14,
    question: "Você tem plano de saúde ou reserva financeira para emergências veterinárias?",
    options: [
      { text: "Sim, tenho plano ou reserva", points: 5 },
      { text: "Tenho uma reserva pequena", points: 3 },
      { text: "Não tenho, mas consigo arcar", points: 1 },
      { text: "Não tenho nada preparado", points: 0 }
    ]
  },
  {
    id: 15,
    question: "Como é o ambiente da sua casa para o pet?",
    options: [
      { text: "Seguro e adaptado para ele", points: 4 },
      { text: "Razoavelmente seguro", points: 2 },
      { text: "Tem alguns riscos", points: 1 },
      { text: "Não adaptei nada", points: 0 }
    ]
  },
  {
    id: 16,
    question: "Você conhece alimentos que são tóxicos para pets?",
    options: [
      { text: "Sim, conheço bem", points: 4 },
      { text: "Conheço alguns", points: 2 },
      { text: "Conheço poucos", points: 1 },
      { text: "Não conheço", points: 0 }
    ]
  },
  {
    id: 17,
    question: "Seu pet tem identificação (coleira com plaquinha ou microchip)?",
    options: [
      { text: "Sim, microchip e plaquinha", points: 3 },
      { text: "Só plaquinha", points: 2 },
      { text: "Não tem ainda", points: 0 },
      { text: "Nunca pensei nisso", points: 0 }
    ]
  },
  {
    id: 18,
    question: "Você controla parasitas (pulgas, carrapatos, vermes)?",
    options: [
      { text: "Sim, uso preventivos regularmente", points: 5 },
      { text: "Uso quando vejo algum problema", points: 2 },
      { text: "Raramente", points: 1 },
      { text: "Nunca", points: 0 }
    ]
  },
  {
    id: 19,
    question: "Como você se sente em relação ao seu pet?",
    options: [
      { text: "É um membro da família", points: 1 },
      { text: "Gosto muito dele", points: 1 },
      { text: "É uma companhia", points: 0 },
      { text: "É só um animal", points: 0 }
    ]
  },
  {
    id: 20,
    question: "Você se informa sobre cuidados com pets?",
    options: [
      { text: "Sim, leio e busco informações", points: 3 },
      { text: "Às vezes pesquiso", points: 2 },
      { text: "Raramente", points: 1 },
      { text: "Nunca", points: 0 }
    ]
  },
  {
    id: 21,
    question: "Seu pet passa muito tempo sozinho?",
    options: [
      { text: "Não, sempre tem companhia", points: 4 },
      { text: "Algumas horas por dia", points: 2 },
      { text: "Fica sozinho o dia todo", points: 1 },
      { text: "Passa dias sozinho", points: 0 }
    ]
  },
  {
    id: 22,
    question: "Você respeita os limites e o espaço do seu pet?",
    options: [
      { text: "Sim, sempre", points: 3 },
      { text: "Na maioria das vezes", points: 2 },
      { text: "Às vezes", points: 1 },
      { text: "Não muito", points: 0 }
    ]
  },
  {
    id: 23,
    question: "Seu pet tem castração?",
    options: [
      { text: "Sim, é castrado", points: 4 },
      { text: "Estou planejando", points: 2 },
      { text: "Não, mas já pensei nisso", points: 1 },
      { text: "Não e não pretendo", points: 0 }
    ]
  },
  {
    id: 24,
    question: "Você celebra datas especiais do seu pet (aniversário, adoção)?",
    options: [
      { text: "Sim, sempre!", points: 1 },
      { text: "Às vezes", points: 1 },
      { text: "Raramente", points: 0 },
      { text: "Nunca", points: 0 }
    ]
  },
  {
    id: 25,
    question: "Como você lida com petiscos e recompensas?",
    options: [
      { text: "Uso petiscos saudáveis com moderação", points: 3 },
      { text: "Dou petiscos normais às vezes", points: 2 },
      { text: "Dou qualquer coisa", points: 1 },
      { text: "Não uso petiscos", points: 0 }
    ]
  },
  {
    id: 26,
    question: "Você tira fotos e registra momentos com seu pet?",
    options: [
      { text: "Sim, tenho uma galeria cheia!", points: 1 },
      { text: "Às vezes tiro fotos", points: 1 },
      { text: "Raramente", points: 0 },
      { text: "Nunca", points: 0 }
    ]
  },
  {
    id: 27,
    question: "Seu pet tem acesso a um ambiente externo seguro?",
    options: [
      { text: "Sim, quintal ou passeios regulares", points: 3 },
      { text: "Às vezes saímos", points: 2 },
      { text: "Raramente", points: 1 },
      { text: "Nunca sai", points: 0 }
    ]
  },
  {
    id: 28,
    question: "Você conversa ou fala com seu pet?",
    options: [
      { text: "Sim, o tempo todo!", points: 1 },
      { text: "Frequentemente", points: 1 },
      { text: "Às vezes", points: 0 },
      { text: "Raramente", points: 0 }
    ]
  },
  {
    id: 29,
    question: "Como você reage quando seu pet faz algo errado?",
    options: [
      { text: "Com paciência e redirecionamento", points: 4 },
      { text: "Com calma, mas fico chateado", points: 2 },
      { text: "Fico irritado", points: 1 },
      { text: "Brigo ou castigo", points: 0 }
    ]
  },
  {
    id: 30,
    question: "Você considera seu pet na hora de tomar decisões importantes (mudança, viagem)?",
    options: [
      { text: "Sim, sempre penso nele primeiro", points: 4 },
      { text: "Considero, mas não é prioridade", points: 2 },
      { text: "Às vezes penso", points: 1 },
      { text: "Não considero", points: 0 }
    ]
  }
];

export const getQuizResult = (rawScore: number): QuizResult => {
  // The raw score is now exactly out of 100 based on the new point distribution
  const score = rawScore;

  // Score ranges based on veterinary best practices:
  // 90-100: Herói do Lar
  // 70-89: Tutor Nota 10
  // 50-69: Tutor Esforçado(a)
  // 20-49: Tutor Iniciante
  // 0-19: Seu pet que te adota 😂

  if (score >= 90) {
    return {
      score,
      level: "Herói do Lar",
      title: "⭐ Pai/Mãe de Pet Herói do Lar",
      description: "Você é simplesmente INCRÍVEL! Seu pet ganhou na loteria ao ter você como tutor(a). Vocês têm uma conexão profunda, você cuida de todos os detalhes e o bem-estar dele é sua prioridade máxima. Seu amor e dedicação são inspiradores! 🌟💛",
      tips: [
        "Continue sendo esse exemplo de cuidado!",
        "Compartilhe suas dicas com outros tutores",
        "Considere trabalhos voluntários de conscientização sobre guarda responsável",
        "Mantenha sempre essa conexão especial com seu pet"
      ]
    };
  } else if (score >= 70) {
    return {
      score,
      level: "Tutor Nota 10",
      title: "💚 Tutor Nota 10",
      description: "Você cuida muito bem do seu pet! Há rotina, amor e atenção. Talvez alguns pequenos ajustes possam tornar a vida dele ainda melhor, mas no geral você está no caminho certo. Seu pet é feliz ao seu lado! 🐶🐱",
      tips: [
        "Avalie adicionar mais estímulos mentais",
        "Considere uma rotina de exercícios mais consistente",
        "Explore produtos e acessórios que aumentem o conforto",
        "Aumente o tempo de qualidade dedicado ao seu pet"
      ]
    };
  } else if (score >= 50) {
    return {
      score,
      level: "Tutor Esforçado(a)",
      title: "💪 Tutor Esforçado(a)",
      description: "Você se importa com seu pet e tenta dar o melhor, mas há espaço para melhorias. Com pequenas mudanças na rotina, alimentação e cuidados, você pode oferecer uma vida ainda mais saudável e feliz para ele. Você consegue! 💙",
      tips: [
        "Estabeleça uma rotina de visitas veterinárias regulares",
        "Melhore a qualidade da alimentação",
        "Crie momentos diários de interação e brincadeiras",
        "Invista em produtos básicos de higiene e conforto"
      ]
    };
  } else if (score >= 20) {
    return {
      score,
      level: "Tutor Iniciante",
      title: "🌱 Tutor Iniciante",
      description: "Ter um pet é uma grande responsabilidade, e parece que você ainda está no início dessa jornada. Não desanime! Com dedicação, informação e amor, você pode se tornar um tutor exemplar. Seu pet merece – e você é capaz! 🧡",
      tips: [
        "Busque informações sobre cuidados básicos com pets",
        "Estabeleça uma rotina de alimentação e higiene",
        "Leve seu pet ao veterinário regularmente",
        "Dedique tempo diário para criar vínculo",
        "Procure grupos e comunidades de tutores para aprender mais"
      ]
    };
  } else {
    return {
      score,
      level: "Seu pet que te adota",
      title: "😂 Seu pet que te adota",
      description: "Ops! Parece que seu pet está cuidando mais de você do que o contrário! Mas não se preocupe, nunca é tarde para começar. Com pequenas mudanças e dedicação, você pode transformar essa relação e oferecer uma vida incrível para seu companheiro! 💛",
      tips: [
        "Comece pelo básico: alimentação regular e água fresca",
        "Agende uma consulta veterinária urgente",
        "Estabeleça uma rotina diária de cuidados",
        "Busque orientação profissional sobre guarda responsável",
        "Dedique pelo menos 30 minutos por dia ao seu pet",
        "Considere se você tem condições de manter um pet no momento"
      ]
    };
  }
};
