import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, PawPrint, Cat, Dog, Apple, Stethoscope, Heart, Syringe, Bone, Brain, AlertTriangle, DollarSign, Leaf, Activity, ShieldAlert } from "lucide-react";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useEffect, useState } from "react";

const getArticleConfig = (slug: string) => {
    if (slug.includes('gato')) return { icon: Cat, color: "bg-purple-100 text-purple-600" };
    if (slug.includes('cachorro') || slug.includes('cao') || slug.includes('caes')) return { icon: Dog, color: "bg-orange-100 text-orange-600" };
    if (slug.includes('aliment') || slug.includes('nutri') || slug.includes('fruta') || slug.includes('racao') || slug.includes('superfoods')) return { icon: Apple, color: "bg-green-100 text-green-600" };
    if (slug.includes('vacina') || slug.includes('vermifugo') || slug.includes('medic')) return { icon: Syringe, color: "bg-blue-100 text-blue-600" };
    if (slug.includes('saude') || slug.includes('dor') || slug.includes('checkup') || slug.includes('emergencia')) return { icon: Stethoscope, color: "bg-cyan-100 text-cyan-600" };
    if (slug.includes('ansiedade') || slug.includes('comportamento') || slug.includes('feliz') || slug.includes('amor')) return { icon: Heart, color: "bg-pink-100 text-pink-600" };
    if (slug.includes('custo') || slug.includes('dinheiro')) return { icon: DollarSign, color: "bg-yellow-100 text-yellow-600" };
    if (slug.includes('plantas') || slug.includes('toxic')) return { icon: Leaf, color: "bg-emerald-100 text-emerald-600" };
    if (slug.includes('proibido') || slug.includes('perigo')) return { icon: ShieldAlert, color: "bg-red-100 text-red-600" };
    if (slug.includes('inteligencia') || slug.includes('linguagem') || slug.includes('socializacao')) return { icon: Brain, color: "bg-indigo-100 text-indigo-600" };
    if (slug.includes('raca') || slug.includes('srd') || slug.includes('shih') || slug.includes('york') || slug.includes('poodle') || slug.includes('spitz') || slug.includes('bull') || slug.includes('golden') || slug.includes('labrador') || slug.includes('pinscher') || slug.includes('lhasa')) return { icon: Bone, color: "bg-amber-100 text-amber-600" };

    return { icon: PawPrint, color: "bg-primary/10 text-primary" };
};

const Blog = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        document.title = "Blog | PetScore";
        window.scrollTo(0, 0);
    }, [currentPage]);

    const articles = [
        {
            slug: "custo-cachorro-2026",
            title: "Quanto Custa Ter um Cachorro em 2026? Guia Completo",
            description: "Planilha de gastos reais com ração, veterinário e imprevistos para cada porte."
        },
        {
            slug: "sinais-dor-cachorro",
            title: "7 Sinais de Dor Silenciosa no Seu Cachorro",
            description: "Aprenda a identificar desconforto antes que vire emergência."
        },
        {
            slug: "plantas-toxicas-pet",
            title: "Plantas Tóxicas para Pets: Lista Completa",
            description: "Descubra quais plantas comuns podem intoxicar cães e gatos em segundos."
        },
        {
            slug: "calendario-vacinas-pet",
            title: "Calendário de Vacinas 2026 para Cães e Gatos",
            description: "Cronograma atualizado com reforços e doses extras recomendadas pelo CBMV."
        },
        {
            slug: "kit-emergencia-pet",
            title: "Kit de Emergência Pet: Itens que Salvam Vidas",
            description: "Checklist da veterinária para agir rápido em acidentes, quedas ou intoxicações."
        },
        {
            slug: "vermifugacao-pets",
            title: "Vermífugo para Pets: Quando Dar e Qual Dose",
            description: "Calendário completo de vermifugação para filhotes, adultos e gestantes."
        },
        {
            slug: "ansiedade-gatos",
            title: "Ansiedade em Gatos: 8 Táticas que Funcionam",
            description: "Como reduzir estresse felino com enriquecimento, feromônios e rotina."
        },
        {
            slug: "checkup-preventivo",
            title: "Check-up Preventivo por Idade: Quais Exames Fazer",
            description: "Saiba quais exames pedir para filhotes, adultos e pets sêniores."
        },
        {
            slug: "superfoods-pet",
            title: "Superfoods para Pets: O Que é Hype e O Que Funciona",
            description: "Lista de ingredientes com evidência científica vs. moda passageira."
        },
        {
            slug: "socializacao-filhote",
            title: "Socialização de Filhotes em 30 Dias",
            description: "Roteiro semanal para criar cães confiantes e equilibrados."
        },
        {
            slug: "caes-idosos",
            title: "Como Cuidar de Cães Idosos: O Guia Completo do Veterinário",
            description: "Descubra os cuidados essenciais para garantir qualidade de vida na melhor idade do seu pet."
        },
        {
            slug: "alimentacao-natural",
            title: "Alimentação Natural vs Ração: O Veredito do Especialista",
            description: "Entenda os prós e contras de cada dieta e escolha a melhor opção para o seu amigo."
        },
        {
            slug: "linguagem-canina",
            title: "Entendendo a Linguagem Canina: O Que Seu Cão Realmente Diz",
            description: "Aprenda a ler os sinais corporais do seu cachorro e melhore sua comunicação."
        },
        {
            slug: "gatos-felizes",
            title: "Gatos Felizes: O Segredo da Gatificação",
            description: "Como adaptar sua casa para satisfazer os instintos naturais do seu felino."
        },
        {
            slug: "racas-populares-brasil",
            title: "As 10 Raças de Cães Mais Populares no Brasil",
            description: "Descubra quais são os cães favoritos dos brasileiros e veja se o seu melhor amigo está na lista!"
        },
        {
            slug: "srd-vira-lata",
            title: "SRD (Vira-Lata): A Alma do Cão Brasileiro",
            description: "Conheça a história, a inteligência e o carisma do cão mais amado do país."
        },
        {
            slug: "shih-tzu",
            title: "Shih Tzu: O Pequeno Leão de Colo",
            description: "Tudo sobre a raça que conquistou os apartamentos e corações do Brasil."
        },
        {
            slug: "yorkshire-terrier",
            title: "Yorkshire Terrier: Pequeno e Valente",
            description: "Um cão de personalidade forte em uma embalagem pequena e elegante."
        },
        {
            slug: "poodle",
            title: "Poodle: Inteligência e Versatilidade",
            description: "Descubra por que o Poodle é muito mais do que apenas um cão bonito."
        },
        {
            slug: "spitz-alemao",
            title: "Spitz Alemão (Lulu): A Raposinha de Luxo",
            description: "Beleza, atitude e lealdade: conheça tudo sobre o Lulu da Pomerânia."
        },
        {
            slug: "bulldog-frances",
            title: "Bulldog Francês: O Palhaço Adorável",
            description: "O companheiro perfeito para quem busca diversão e afeto em um cão compacto."
        },
        {
            slug: "golden-retriever",
            title: "Golden Retriever: O Cão que Sorri",
            description: "A bondade em forma de cão. Saiba tudo sobre essa raça apaixonante."
        },
        {
            slug: "labrador-retriever",
            title: "Labrador Retriever: O Melhor Amigo do Mundo",
            description: "Energia, inteligência e amor incondicional: o perfil do Labrador."
        },
        {
            slug: "pinscher",
            title: "Pinscher: Pequeno Grande Cão",
            description: "Desmistificando a fama de bravo: conheça a verdadeira personalidade do Pinscher."
        },
        {
            slug: "lhasa-apso",
            title: "Lhasa Apso: O Sentinela do Tibet",
            description: "Um cão místico, independente e leal. Descubra se ele combina com você."
        },
        {
            slug: "sinais-felicidade-pet",
            title: "Como saber se meu cachorro é feliz? 7 sinais claros que ele te ama",
            description: "Descubra se você está fazendo um bom trabalho e entenda a linguagem do amor canino."
        },
        {
            slug: "ansiedade-separacao",
            title: "Meu cachorro sente saudade? Entenda a Ansiedade de Separação",
            description: "Não é manha, é pânico. Saiba identificar e tratar o sofrimento do seu pet quando você sai."
        },
        {
            slug: "rotina-alimentacao",
            title: "Quantas vezes devo alimentar meu cachorro? Guia Completo",
            description: "Filhote, adulto ou idoso? Descubra a frequência ideal para garantir saúde e longevidade."
        },
        {
            slug: "linguagem-amor",
            title: "10 formas que seu pet diz 'Eu Te Amo' (e você não percebeu)",
            description: "Do bocejo ao 'lean': aprenda a ler os gestos sutis de afeto do seu melhor amigo."
        },
        {
            slug: "enriquecimento-ambiental",
            title: "Seu pet está entediado? 8 brincadeiras baratas para fazer em casa",
            description: "Transforme a rotina do seu cão e acabe com a destruição de móveis com dicas simples."
        },
        {
            slug: "frutas-permitidas-cachorro",
            title: "Frutas que Cachorros Podem Comer: Guia Seguro e Saudável",
            description: "Banana, maçã, melancia... Saiba quais frutas são petiscos saudáveis e quais evitar."
        },
        {
            slug: "alimentos-proibidos-pets",
            title: "Alimentos Proibidos: O Que Nunca Dar para Seu Pet",
            description: "Chocolate, uva, cebola... Conheça a lista negra de alimentos que podem ser fatais."
        },
        {
            slug: "obesidade-pet-perigos",
            title: "Obesidade em Pets: Riscos Ocultos e Como Reverter",
            description: "Seu pet está gordinho? Entenda os riscos para a saúde e como ajudá-lo a emagrecer."
        },
        {
            slug: "hidratacao-gatos-guia",
            title: "Hidratação de Gatos: Por Que Eles Bebem Pouca Água?",
            description: "Dicas essenciais para evitar problemas renais e fazer seu gato beber mais água."
        },
        {
            slug: "como-trocar-racao",
            title: "Como Trocar a Ração do Pet Sem Causar Problemas",
            description: "Aprenda a fazer a transição gradual para evitar vômitos e diarreia."
        }
    ];

    const totalPages = Math.ceil(articles.length / itemsPerPage);
    const currentArticles = articles.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1 p-8">
                <div className="max-w-4xl mx-auto space-y-12">
                    <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
                        <ArrowLeft className="w-4 h-4" /> Voltar
                    </Button>

                    <section className="space-y-6 text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                            <BookOpen className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                            Blog PetScore
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Dicas de especialistas, guias completos e curiosidades para você se tornar o melhor tutor do mundo.
                        </p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-6">
                        {currentArticles.map((article) => (
                            <Link key={article.slug} to={`/blog/${article.slug}`}>
                                <Card className="h-full overflow-hidden hover:shadow-lg transition-all cursor-pointer border-border/50 hover:border-primary/50 group flex flex-col">
                                    <div className={`h-48 flex items-center justify-center ${getArticleConfig(article.slug).color} transition-colors`}>
                                        {(() => {
                                            const Icon = getArticleConfig(article.slug).icon;
                                            return <Icon className="w-16 h-16 opacity-80 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />;
                                        })()}
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-muted-foreground line-clamp-3 mb-4 flex-1">
                                            {article.description}
                                        </p>
                                        <div className="mt-auto text-primary font-medium text-sm flex items-center gap-1">
                                            Ler artigo completo <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-4 mt-12">
                            <Button
                                variant="outline"
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="gap-2"
                            >
                                <PawPrint className="w-4 h-4 rotate-[-90deg]" /> Anterior
                            </Button>
                            <span className="text-muted-foreground font-medium">
                                Página {currentPage} de {totalPages}
                            </span>
                            <Button
                                variant="outline"
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="gap-2"
                            >
                                Próxima <PawPrint className="w-4 h-4" />
                            </Button>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Blog;
