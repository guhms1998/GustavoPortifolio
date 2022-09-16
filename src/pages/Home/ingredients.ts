export interface Ingredient {
    icon: string;
    label: string;
  }
  
  export const allIngredients = [
    { icon: "eu", label: "Oi meu nome é Gustavo, Sou Desenvolverdor Java Web Full Stack, com conhecimentos  nas tecnologias Springboot para JavaScript, MySql,Html, Css e React, ja cursei 2 Semestre  de Analise e desenvolvimento de sistemas, tenho foco sempre em metodologias ageis,me considero uma pessoa com bastantes softskilks com destaque para criatividade e proatividade.Meus interesses variam muito desde Filmes, digasse de passagem que meus favoritos são Interstellar e Tudo em todo Lugar Ao Mesmo Tempo, a sair para socializar. Todos os dias estou dando meu maximo para estudar e cada dia mais me aprofundar mais na tecnologias que mais me dou bem." },



    
    { icon: "🥬", label: "Lettuce" },
    { icon: "🧀", label: "Cheese" },
    { icon: "🥕", label: "Carrot" },
    { icon: "🍌", label: "Banana" },
    { icon: "🫐", label: "Blueberries" },
    { icon: "🥂", label: "Champers?" }
  ];
  
  const [tomato, lettuce, cheese] = allIngredients;
  export const initialTabs = [tomato, lettuce, cheese];
  
  export function getNextIngredient(
    ingredients: Ingredient[]
  ): Ingredient | undefined {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
  }