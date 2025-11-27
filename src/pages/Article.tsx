import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Cat, Dog, Apple, Stethoscope, Heart, Syringe, Bone, Brain, DollarSign, Leaf, ShieldAlert, PawPrint, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

const articles = {
    "custo-cachorro-2026": {
        title: "Quanto Custa Ter um Cachorro em 2026? Guia Completo de Despesas",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Antes de adotar ou comprar um cachorro, você precisa olhar para a planilha. O Brasil viveu reajustes importantes em ração, serviços veterinários e itens de higiene nos últimos dois anos, e muitos tutores subestimam o investimento real. Como veterinário e consultor de petshop, montei um raio X atualizado para 2026 com todos os custos fixos e variáveis de um cão saudável.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-4">1. Custos Fixos Mensais (2026)</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="border border-border/60 rounded-2xl p-4 bg-card shadow-sm">
                        <h3 className="text-xl font-semibold text-primary mb-2">Pequeno Porte</h3>
                        <p className="text-muted-foreground text-sm">R$ 280 a R$ 420/mês</p>
                    </div>
                    <div className="border border-border/60 rounded-2xl p-4 bg-card shadow-sm">
                        <h3 className="text-xl font-semibold text-primary mb-2">Médio Porte</h3>
                        <p className="text-muted-foreground text-sm">R$ 420 a R$ 650/mês</p>
                    </div>
                    <div className="border border-border/60 rounded-2xl p-4 bg-card shadow-sm">
                        <h3 className="text-xl font-semibold text-primary mb-2">Grande Porte</h3>
                        <p className="text-muted-foreground text-sm">R$ 650 a R$ 1.050/mês</p>
                    </div>
                </div>
                <p>O cálculo inclui ração Super Premium, vermífugo, antipulgas, banho/tosa, brinquedos de reposição e uma reserva veterinária.</p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-4">2. Despesas Anuais Obrigatórias</h2>
                <ul className="list-disc pl-6 space-y-3">
                    <li><strong>Vacinas (V8 + Raiva + Giárdia):</strong> R$ 350 a R$ 600 dependendo da clínica.</li>
                    <li><strong>Check-up preventivo completo:</strong> Hemograma, bioquímicos e ultrassom custam entre R$ 800 e R$ 1.500.</li>
                    <li><strong>Plano de emergência:</strong> Reserve pelo menos R$ 1.000/ano para imprevistos (cirurgias simples já passam desse valor).</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-4">3. Como Reduzir Sem Comprometer</h2>
                <h3 className="text-2xl font-semibold text-foreground">✔️ Assinaturas inteligentes</h3>
                <p>Petshops e marketplaces oferecem até 15% de desconto para entregas recorrentes de ração e tapetes higiênicos. Negocie pacotes.</p>
                <h3 className="text-2xl font-semibold text-foreground">✔️ Fundo pet</h3>
                <p>Separe um PIX automático assim que receber o salário. R$ 100 por mês já formam R$ 1.200 ao ano para urgências.</p>
                <h3 className="text-2xl font-semibold text-foreground">✔️ Preventivo é mais barato</h3>
                <p>Um ultrassom custa menos que uma cirurgia de emergência. Exames semestrais evitam gastos gigantescos.</p>

                <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl">
                    <h3 className="text-2xl font-bold text-primary mb-3">Planilha pronta para download</h3>
                    <p className="text-muted-foreground">Baixe nossa planilha gratuita de custos e descubra se seu orçamento comporta um novo integrante.</p>
                    <Button className="mt-4" onClick={() => window.location.href = "/quiz"}>
                        Calcular meu orçamento pet
                    </Button>
                </div>
            </div>
        )
    },
    "sinais-dor-cachorro": {
        title: "7 Sinais de Dor Silenciosa no Seu Cachorro (e Como Agir Agora)",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Cães são especialistas em esconder dor. É instinto de sobrevivência: na natureza, demonstrar fraqueza pode ser fatal. Por isso, muitos tutores só percebem que algo está errado quando a dor já está avançada. Veja como identificar os sinais mais sutis e quando correr para o veterinário.
                </p>

                <h2 className="text-3xl font-bold text-primary">1. Mudança no ritmo de passeio</h2>
                <p>Se ele começa a reduzir o passo, senta no meio do trajeto ou se recusa a subir escadas, há grande chance de dor articular.</p>

                <h2 className="text-3xl font-bold text-primary">2. Lambidas insistentes</h2>
                <p>Lamber sempre a mesma pata ou articulação é sinal de desconforto local. Pode indicar artrose, dor neuropática ou até ruptura de ligamento.</p>

                <h2 className="text-3xl font-bold text-primary">3. Mudança de humor</h2>
                <p>Um cão dócil pode rosnar quando você toca em uma região dolorida. Irritabilidade repentina merece investigação.</p>

                <h3 className="text-2xl font-semibold text-foreground">Checklist rápido</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Ofegar sem exercício?</li>
                    <li>Ficar muito tempo deitado antes de levantar?</li>
                    <li>Olhar para o tutor pedindo ajuda durante brincadeiras?</li>
                </ul>

                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold text-orange-700 mb-3">Quando procurar o veterinário imediatamente?</h3>
                    <p className="text-muted-foreground">Se a dor vier acompanhada de vômitos, tremores, gemidos constantes ou dificuldade para urinar/defecar, vá ao pronto-atendimento. Analgésicos humanos são proibidos sem prescrição.</p>
                </div>
            </div>
        )
    },
    "plantas-toxicas-pet": {
        title: "Plantas Tóxicas para Cães e Gatos: 20 Vilãs que Estão na Sua Casa",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    O paisagismo indoor ganhou força, mas muitas plantas decorativas são perigosas para os pets. Eles mordiscam folhas por curiosidade ou para aliviar náuseas. Listei as espécies mais comuns nos lares brasileiros e os sintomas típicos de intoxicação.
                </p>

                <h2 className="text-3xl font-bold text-primary">Top 10 plantas proibidas</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Costela-de-adão:</strong> causa edema de língua e dificuldade para respirar.</li>
                    <li><strong>Comigo-ninguém-pode:</strong> altamente irritante; provoca salivação intensa.</li>
                    <li><strong>Lírios:</strong> uma folha pode levar gatos à falência renal.</li>
                    <li><strong>Azaleia, antúrio, espada-de-são-jorge, samambaia-americana, jiboia, babosa e hortênsia.</strong></li>
                </ul>

                <h2 className="text-3xl font-bold text-primary">Sintomas de alerta</h2>
                <p>Vômitos, diarreia, apatia, pupilas dilatadas, tremores, gengivas pálidas e feridas na boca são comuns. Fotografe a planta, leve o pet e a imagem ao veterinário e não provoque vômito sem orientação.</p>

                <h2 className="text-3xl font-bold text-primary">Alternativas seguras</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-card border p-4 rounded-xl">
                        <h3 className="font-semibold text-primary">Para casas com gatos</h3>
                        <p>Babosa <em>sem látex</em>, capim-limão, orquídeas, camomila e manjericão são boas opções.</p>
                    </div>
                    <div className="bg-card border p-4 rounded-xl">
                        <h3 className="font-semibold text-primary">Para quintais com cães</h3>
                        <p>Lavanda, alecrim, bromélias e cactos sem espinhos são plantas seguras e aromáticas.</p>
                    </div>
                </div>
            </div>
        )
    },
    "calendario-vacinas-pet": {
        title: "Calendário de Vacinas 2026: O que Cães e Gatos Precisam Tomar",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Vacina não é só para filhote. Adultos e idosos também precisam de reforços anuais para manter a imunidade alta. Veja o calendário atualizado com base nas diretrizes do Colégio Brasileiro de Medicina Veterinária (CBMV) e organize tudo no planner do seu pet.
                </p>

                <h2 className="text-3xl font-bold text-primary">Vacinas essenciais para cães</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>V8/V10:</strong> primeiras doses aos 45 dias, reforços a cada 21 dias até completar quatro aplicações. Depois, reforço anual.</li>
                    <li><strong>Raiva:</strong> dose única a partir dos 4 meses com reforço anual obrigatório por lei.</li>
                    <li><strong>Giárdia e Tosse dos Canis:</strong> indicadas para cães que frequentam creches, hotéis e parques; reforço anual ou semestral dependendo do produto.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary">Vacinas essenciais para gatos</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>V3/V4/V5:</strong> protegem contra rinotraqueíte, calicivirose, panleucopenia e clamidiose. Mesma lógica de filhote (3 a 4 doses) com reforço anual.</li>
                    <li><strong>Raiva:</strong> anual, mesmo para gatos que não saem de casa.</li>
                    <li><strong>Leucemia Felina (FeLV):</strong> indicada para gatos positivos ou com acesso à rua.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground">Esquema resumido</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-card border border-border/50 rounded-2xl p-4">
                        <h4 className="font-bold text-primary mb-2">Filhotes</h4>
                        <p>Vacinas a cada 21 dias até 16 semanas + vermífugo quinzenal + antipulgas mensal.</p>
                    </div>
                    <div className="bg-card border border-border/50 rounded-2xl p-4">
                        <h4 className="font-bold text-primary mb-2">Adultos e idosos</h4>
                        <p>Reforço anual, check-up e avaliação odontológica. Idosos com doença crônica podem precisar de calendário individualizado.</p>
                    </div>
                </div>

                <div className="bg-primary/5 border border-primary/30 p-6 rounded-2xl">
                    <h3 className="text-2xl font-bold text-primary mb-2">Alerta de fake news</h3>
                    <p>Vacinas NÃO causam autismo nem “baixa imunidade”. Os efeitos colaterais mais comuns são dor local e febre baixa por 24h. Reações graves são raras e controláveis.</p>
                </div>

                <p>Coloque lembretes no celular e peça para a clínica enviar SMS antes da data. A cada surto de raiva urbana, municípios voltam a registrar casos fatais. Vacinar é um ato de responsabilidade coletiva.</p>
            </div>
        )
    },
    "kit-emergencia-pet": {
        title: "Kit de Emergência Pet: Lista Oficial da Veterinária para Salvar Vidas",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Acidentes acontecem em segundos. Ter um kit organizado reduz o tempo de resposta e pode evitar sequelas. Guarde tudo em uma bolsa identificada e deixe acessível para toda a família.
                </p>
                <h2 className="text-3xl font-bold text-primary">Itens obrigatórios</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Cartão do veterinário 24h</strong> + carteira de vacinação digital.</li>
                    <li><strong>Mordaça ou faixa elástica:</strong> animais com dor podem morder.</li>
                    <li>Soro fisiológico, gaze estéril, ataduras crepe e esparadrapo de tecido.</li>
                    <li>Termômetro digital, luvas descartáveis e tesoura sem ponta.</li>
                    <li>Seringa de 10 ml (sem agulha) para lavar feridas ou administrar água.</li>
                </ul>
                <h2 className="text-3xl font-bold text-primary">Medicamentos permitidos</h2>
                <p>Use apenas com orientação veterinária, mas mantenha no kit: carvão ativado, antiemético prescrito e analgésico específico para pets. Nunca ofereça dipirona, paracetamol ou ibuprofeno por conta própria.</p>
                <h3 className="text-2xl font-semibold text-foreground">Checklist impressa</h3>
                <p>Inclua na bolsa uma ficha com peso, alergias, doenças pré-existentes e padrão respiratório normal do seu pet. Em emergências com terceiros (pet sitter, familiares), essa ficha ganha tempo precioso.</p>
            </div>
        )
    },
    "vermifugacao-pets": {
        title: "Vermifugação de Cães e Gatos: Quando Dar, Qual Dose e Como Monitorar",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Vermes intestinais roubam nutrientes, causam vômitos, anemia e podem infectar humanos (zoonoses). Por isso, o protocolo precisa ser levado a sério.
                </p>
                <h2 className="text-3xl font-bold text-primary">Calendário recomendado</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Filhotes:</strong> dose aos 15 dias de vida e repetição a cada 15 dias até 3 meses.</li>
                    <li><strong>Adultos:</strong> a cada 3 ou 4 meses, dependendo da exposição.</li>
                    <li><strong>Gestantes:</strong> protocolo especial com produtos seguros (consulte o veterinário).</li>
                </ul>
                <h3 className="text-2xl font-semibold text-foreground">Tipos de vermífugos</h3>
                <p>Comprimidos palatáveis, suspensões líquidas e pipetas spot-on. O produto precisa cobrir nematódeos, cestódeos e protozoários. Leia a bula e pese o pet no dia da aplicação.</p>
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-2">Dica do vet</h3>
                    <p>Faça exame de fezes anual, mesmo com vermifugação em dia. Assim você confirma se o protocolo está eficaz e detecta giárdia ou coccidiose silenciosa.</p>
                </div>
            </div>
        )
    },
    "ansiedade-gatos": {
        title: "Ansiedade em Gatos: 8 Táticas para Controlar o Estresse Felino",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Gatos parecem independentes, mas mudanças sutis já disparam respostas de estresse. Xixi fora da caixa, vômitos frequentes e lambedura excessiva são pedidos de ajuda.
                </p>
                <h2 className="text-3xl font-bold text-primary">Principais gatilhos</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Caixa de areia suja ou em local barulhento.</li>
                    <li>Falta de rotas verticais (prateleiras, arranhadores altos).</li>
                    <li>Chegada de novos pets ou reformas em casa.</li>
                </ul>
                <h2 className="text-3xl font-bold text-primary">Plano de ação</h2>
                <h3 className="text-2xl font-semibold text-foreground">Enriquecimento diário</h3>
                <p>Use brinquedos caça, varinhas e alimentadores lentos. Sessões de 10 minutos duas vezes ao dia reduzem comportamentos destrutivos.</p>
                <h3 className="text-2xl font-semibold text-foreground">Feromônios e fitoterápicos</h3>
                <p>Difusores de feromônio facial sintético (Feliway) ajudam na adaptação. Fitoterápicos à base de passiflora e valeriana podem complementar, sempre com orientação veterinária.</p>
                <p>Caso o gato se automutile, esconda por dias ou pare de comer, marque consulta com um veterinário comportamentalista para avaliar ansiolíticos específicos.</p>
            </div>
        )
    },
    "checkup-preventivo": {
        title: "Check-up Preventivo: Exames Essenciais por Faixa Etária",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    A medicina veterinária evoluiu e hoje tratamos pets como membros da família. Programar check-ups evita diagnósticos tardios e amplia a longevidade.
                </p>
                <h2 className="text-3xl font-bold text-primary">Filhotes (0-12 meses)</h2>
                <p>Hemograma, coproparasitológico e avaliação ortopédica para raças predispostas (ex.: displasia em Labradores).</p>
                <h2 className="text-3xl font-bold text-primary">Adultos (1-6 anos)</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Hemograma + perfil renal e hepático.</li>
                    <li>Ultrassom abdominal a cada 2 anos.</li>
                    <li>Limpeza dental preventiva anual.</li>
                </ul>
                <h2 className="text-3xl font-bold text-primary">Sêniores (7+ anos)</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Check-up a cada 6 meses.</li>
                    <li>Ultrassom, ecocardiograma, pressão arterial e dosagem de hormônios (T4, cortisol).</li>
                </ul>
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Como economizar</h3>
                    <p>Clínicas universitárias e planos de saúde pet oferecem pacotes com até 40% de desconto. Agende exames combinados no mesmo dia para reduzir estresse do animal.</p>
                </div>
            </div>
        )
    },
    "superfoods-pet": {
        title: "Superfoods para Pets: O Que Realmente Funciona (e o Que é Modinha)",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    “Superalimentos” viraram tendência nas prateleiras. Mas quais ingredientes têm respaldo científico para cães e gatos? Separei os campeões comprovados – e os que você pode ignorar.
                </p>
                <h2 className="text-3xl font-bold text-primary">Top 5 aprovados pelo vet</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Ômega-3 (óleo de peixe de águas frias):</strong> anti-inflamatório para articulações e pele.</li>
                    <li><strong>Probióticos específicos para pets:</strong> equilibram a microbiota e fortalecem a imunidade.</li>
                    <li><strong>Cúrcuma com pimenta-do-reino:</strong> potente antioxidante (dose mínima 15 mg/kg).</li>
                    <li><strong>Mirtilo e cranberry:</strong> ricos em antocianinas; auxiliam no trato urinário.</li>
                    <li><strong>Colágeno tipo II:</strong> reduz dor em cães com artrose leve.</li>
                </ul>
                <h3 className="text-2xl font-semibold text-foreground">Cuidado com modismos</h3>
                <p>Vinagre de maçã, água alcalina e carvão ativado “detox” não têm evidência em pets. Em excesso, podem irritar o estômago ou alterar o pH sanguíneo.</p>
                <p>Sempre introduza um ingrediente de cada vez por 7 dias e observe fezes, apetite e pele. Se houver vômito ou coceira, suspenda e procure o veterinário.</p>
            </div>
        )
    },
    "socializacao-filhote": {
        title: "Socialização de Filhotes em 30 Dias: Roteiro do Adestrador",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Os primeiros 120 dias de vida definem como o cãozinho verá o mundo. Um filhote bem socializado cresce confiante e evita problemas comportamentais como agressividade e fobias.
                </p>
                <h2 className="text-3xl font-bold text-primary">Semana 1: Mundo seguro</h2>
                <p>Apresente sons domésticos (aspirador, liquidificador) em volume baixo, manipule o filhote diariamente (patas, orelhas, boca) e ofereça petiscos calmamente.</p>
                <h2 className="text-3xl font-bold text-primary">Semana 2: Pessoas diferentes</h2>
                <p>Convide amigos com perfis variados (crianças calmas, adultos com barba, pessoas usando chapéu). Recompense cada interação positiva.</p>
                <h2 className="text-3xl font-bold text-primary">Semana 3: Superfícies e objetos</h2>
                <p>Deixe o filhote caminhar em tapetes, grama, piso liso e grades metálicas. Use brinquedos de texturas diferentes e introduza o peitoral.</p>
                <h2 className="text-3xl font-bold text-primary">Semana 4: Passeios controlados</h2>
                <p>Após liberação do veterinário, faça micro passeios de 5 minutos em locais tranquilos. Quando ele focar em você em ambientes externos, entregue petiscos especiais.</p>
                <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-2">Ferramenta bônus</h3>
                    <p>Monte um “bingo de socialização” na geladeira com 20 experiências para ir marcando. Transforme o processo em jogo e envolva toda a família.</p>
                </div>
            </div>
        )
    },
    "caes-idosos": {
        title: "Como Cuidar de Cães Idosos: O Guia Completo do Veterinário",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Envelhecer é um privilégio, e acompanhar seu melhor amigo nessa fase dourada é uma das experiências mais gratificantes – e desafiadoras – que um tutor pode ter. Como veterinário com mais de 20 anos de clínica, testemunho diariamente a transformação na relação entre tutores e seus cães idosos. O "velhinho" da casa já não corre como antes, dorme mais e talvez tenha alguns pelos brancos no focinho, mas o amor e a lealdade só aumentaram.
                </p>
                <p>
                    No entanto, a geriatria canina exige um olhar atento. Muitas vezes, sinais de dor ou doença são confundidos com "coisas da idade". A frase "ele está quietinho porque está velho" é um dos mitos mais perigosos que enfrentamos. Velhice não é doença; é uma etapa da vida que requer adaptações específicas para garantir dignidade e bem-estar. Neste guia completo, vamos mergulhar em tudo o que você precisa saber para proporcionar os melhores anos da vida do seu cão.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">1. O Que Esperar do Envelhecimento?</h2>
                <p>
                    Primeiro, é importante entender quando um cão é considerado idoso. Isso varia com o porte:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Pequeno porte:</strong> A partir de 10-12 anos.</li>
                    <li><strong>Médio porte:</strong> A partir de 9-10 anos.</li>
                    <li><strong>Grande e gigante porte:</strong> A partir de 7-8 anos.</li>
                </ul>
                <p>
                    As mudanças fisiológicas são inevitáveis. O metabolismo desacelera, a massa muscular tende a diminuir (sarcopenia), os sentidos (visão e audição) podem ficar menos aguçados e o sistema imunológico já não responde com a mesma rapidez. Comportamentalmente, eles podem ficar mais carentes, mais ansiosos ou, inversamente, mais irritadiços e menos tolerantes a mudanças na rotina.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">2. Check-ups: A Regra de Ouro dos 6 Meses</h2>
                <p>
                    Se existe um conselho que você deve levar deste artigo, é este: <strong>não espere seu cão adoecer para ir ao veterinário</strong>. Na fase sênior, o tempo corre mais rápido. Um ano humano equivale a cerca de 4-5 anos para um cão idoso. Muita coisa pode mudar em 12 meses.
                </p>
                <p>
                    Por isso, o protocolo geriátrico padrão ouro recomenda consultas a cada <strong>6 meses</strong>. Esses check-ups devem incluir:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Exames de Sangue Completos:</strong> Hemograma e bioquímicos (renais e hepáticos) para detectar falhas orgânicas antes que os sintomas apareçam.</li>
                    <li><strong>Avaliação Cardíaca:</strong> Ecocardiograma e eletrocardiograma, especialmente para raças predispostas a sopros e insuficiência valvar.</li>
                    <li><strong>Pressão Arterial:</strong> A hipertensão é uma "assassina silenciosa" em cães, frequentemente ligada a problemas renais.</li>
                    <li><strong>Ultrassom Abdominal:</strong> Para checar o baço, fígado e identificar massas ou tumores precocemente.</li>
                    <li><strong>Avaliação Odontológica:</strong> O tártaro não causa apenas mau hálito; as bactérias da boca podem migrar para o coração e rins.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">3. Nutrição Específica: O Combustível da Longevidade</h2>
                <p>
                    A dieta que sustentou seu cão aos 3 anos não é a mesma que ele precisa aos 13. As necessidades nutricionais mudam drasticamente.
                </p>
                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Controle de Peso</h3>
                <p>
                    A obesidade é o inimigo número 1 do cão idoso. O excesso de peso sobrecarrega articulações já desgastadas e exige mais do coração. Por outro lado, alguns idosos perdem peso excessivamente devido à perda de massa muscular. O equilíbrio é vital.
                </p>
                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Nutrientes Chave</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Proteína de Alta Qualidade:</strong> Ao contrário do mito antigo de "restringir proteína para poupar os rins", cães idosos saudáveis precisam de <em>mais</em> proteína (de alta digestibilidade) para combater a perda muscular, a menos que já tenham doença renal diagnosticada.</li>
                    <li><strong>Ômega-3 (EPA/DHA):</strong> Um potente anti-inflamatório natural que ajuda nas articulações e na função cognitiva (cérebro).</li>
                    <li><strong>Antioxidantes:</strong> Vitaminas E e C, selênio e beta-caroteno ajudam a combater o envelhecimento celular e a Síndrome da Disfunção Cognitiva.</li>
                    <li><strong>Fibras:</strong> Essenciais para manter o trânsito intestinal regular, que tende a ficar mais lento.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">4. Adaptações Ambientais: Tornando a Casa Amigável</h2>
                <p>
                    Seu cão pode não conseguir mais subir no sofá ou entrar no carro com um pulo. A "casa do idoso" precisa de acessibilidade.
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-card p-6 rounded-xl border border-border/50">
                        <h4 className="font-bold text-lg mb-2">🚫 O Perigo do Piso Liso</h4>
                        <p className="text-sm text-muted-foreground">Pisos de cerâmica ou porcelanato são verdadeiras pistas de patinação. Para um cão com artrose, escorregar dói e gera medo. Espalhe tapetes antiderrapantes ou passadeiras emborrachadas pelos caminhos principais.</p>
                    </div>
                    <div className="bg-card p-6 rounded-xl border border-border/50">
                        <h4 className="font-bold text-lg mb-2">🛏️ A Cama Ideal</h4>
                        <p className="text-sm text-muted-foreground">Esqueça caminhas fofas demais onde ele "afunda" e tem dificuldade para levantar. Invista em camas ortopédicas de espuma viscoelástica (memory foam) que dão suporte à coluna e isolam do frio do chão.</p>
                    </div>
                </div>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Rampas e Escadas:</strong> Para acesso a sofás e camas (se permitido). Treine-o a usar com petiscos.</li>
                    <li><strong>Potes Elevados:</strong> Ajudam a reduzir a tensão no pescoço e facilitam a deglutição, prevenindo engasgos.</li>
                    <li><strong>Iluminação Noturna:</strong> A visão noturna piora. Uma luz de presença (daquelas de tomada) perto da água e da caminha ajuda a evitar que ele esbarre em móveis à noite.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">5. Manejo da Dor e Mobilidade</h2>
                <p>
                    A artrose (osteoartrite) afeta cerca de 80% dos cães idosos. O problema é que cães são estoicos; eles escondem a dor como mecanismo de sobrevivência.
                </p>
                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Sinais Sutis de Dor:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Relutância em subir escadas ou pular.</li>
                    <li>Lamber excessivamente uma pata ou articulação.</li>
                    <li>Ficar muito tempo deitado ou ter dificuldade para se levantar (rigidez) após o sono.</li>
                    <li>Mudanças de humor (ficar agressivo ao ser tocado em certas áreas).</li>
                    <li>Ofegar sem ter feito exercício.</li>
                </ul>
                <p>
                    O tratamento é multimodal: envolve controle de peso, suplementos (condroitina, glicosamina, colágeno tipo II), medicamentos anti-inflamatórios/analgésicos prescritos pelo vet, e terapias integrativas fantásticas como <strong>Acupuntura</strong> e <strong>Fisioterapia (Hidroesteira)</strong>.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">6. Saúde Mental: O "Alzheimer" Canino</h2>
                <p>
                    A Síndrome da Disfunção Cognitiva (SDC) é real e muito comum. É o equivalente ao Alzheimer em humanos. Os sintomas incluem:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Desorientação (ficar "preso" em cantos ou atrás de portas).</li>
                    <li>Alteração no ciclo sono-vigília (dormir de dia e perambular/latir à noite).</li>
                    <li>Perda de aprendizado (fazer xixi no lugar errado).</li>
                    <li>Não reconhecer familiares ou não responder aos comandos.</li>
                </ul>
                <p>
                    <strong>Como combater?</strong> Enriquecimento ambiental! Mantenha o cérebro dele ativo. Use brinquedos de rechear com comida, ensine truques novos (sim, cães velhos aprendem truques novos!), faça passeios curtos em lugares diferentes para novos cheiros. O estímulo mental é neuroprotetor.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">7. Amor, Paciência e Conexão</h2>
                <p>
                    Cuidar de um cão idoso pode ser trabalhoso. Pode haver acidentes no tapete, noites mal dormidas e visitas frequentes ao vet. Mas é também o momento de retribuir toda a dedicação que ele teve por você a vida inteira.
                </p>
                <p>
                    Respeite o ritmo dele. Se ele não aguenta mais caminhar 30 minutos, caminhe 10. Se ele quer apenas ficar deitado ao seu lado enquanto você vê TV, aproveite esse momento. A conexão emocional nessa fase é profunda e tocante. Você é o porto seguro dele num mundo que, para ele, está ficando um pouco mais confuso e difícil.
                </p>

                <div className="bg-primary/5 p-8 rounded-2xl mt-12 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4">O Legado do Cuidado</h3>
                    <p className="text-lg mb-6">
                        Não sabemos quanto tempo nos resta com eles, mas podemos garantir que cada dia seja vivido com conforto, sem dor e com muito amor. Observar os sinais, adaptar a rotina e buscar ajuda veterinária não é "exagero", é gratidão.
                    </p>
                    <div className="bg-background p-6 rounded-xl shadow-sm border border-primary/20">
                        <h4 className="font-bold text-foreground mb-2">Você está preparado para cuidar do seu sênior?</h4>
                        <p className="text-muted-foreground mb-4">
                            Muitos tutores só percebem que poderiam ter feito mais quando é tarde. Não seja esse tutor. Faça nosso quiz e descubra se você está cobrindo todas as bases do bem-estar do seu pet.
                        </p>
                        <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => window.location.href = '/quiz'}>
                            👉 Fazer o Quiz de Tutor Agora
                        </Button>
                    </div>
                </div>
            </div>
        )
    },
    "alimentacao-natural": {
        title: "Alimentação Natural vs Ração: O Veredito do Especialista",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Essa é, sem dúvida, a pergunta campeã no meu consultório e nas redes sociais: "Doutor, o que é melhor: ração ou comida natural?". A resposta honesta e científica é: <strong>depende</strong>. Não existe um vilão absoluto e nem uma pílula mágica. Existe o que funciona para a biologia do seu animal, para a rotina da sua família e para o seu bolso.
                </p>
                <p>
                    Nos últimos anos, vimos um "boom" da Alimentação Natural (AN), impulsionado por tutores cada vez mais preocupados com a longevidade e saúde de seus pets. Ao mesmo tempo, a indústria de rações evoluiu com fórmulas Super Premium e dietas terapêuticas de alta tecnologia. Neste artigo, vamos desmistificar os dois lados da moeda, sem radicalismos, para que você possa tomar a melhor decisão.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">1. Alimentação Natural (AN): O Que É e O Que NÃO É</h2>
                <p>
                    Primeiro, vamos limpar o terreno: <strong>AN não é dar restos de comida humana</strong> (o famoso "resto de almoço"). AN é uma dieta balanceada, formulada por um zootecnista ou veterinário nutrólogo, composta por ingredientes frescos (carnes, vísceras, vegetais, tubérculos) e suplementada obrigatoriamente com vitaminas e minerais.
                </p>
                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Os Tipos de AN:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Cozida:</strong> Os ingredientes são levemente cozidos. É a mais segura e aceita para cães com sensibilidade digestiva.</li>
                    <li><strong>Crua sem Ossos:</strong> Carnes cruas e vegetais, com suplementação de cálcio.</li>
                    <li><strong>Crua com Ossos (BARF/RMB):</strong> Inclui ossos carnudos crus. Exige muito cuidado com a procedência e o manejo para evitar perfurações ou contaminações.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-green-600 mt-8 mb-3">✅ Vantagens da AN</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Hidratação:</strong> A AN tem cerca de 70-80% de água, contra 10% da ração. Isso é vital para a saúde renal e urinária, especialmente para gatos.</li>
                    <li><strong>Palatabilidade:</strong> É inegável. Cães e gatos amam comida fresca. Para animais inapetentes ou idosos, é um divisor de águas.</li>
                    <li><strong>Controle de Ingredientes:</strong> Você sabe exatamente o que está no prato. É excelente para animais alérgicos ou com intolerâncias, pois permite dietas de exclusão.</li>
                    <li><strong>Menos Processados:</strong> Ausência de corantes, conservantes artificiais (BHA/BHT) e excesso de carboidratos simples.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-red-600 mt-8 mb-3">❌ Desafios da AN</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Custo:</strong> Pode custar de 3 a 5 vezes mais que uma ração Super Premium, dependendo do porte do animal.</li>
                    <li><strong>Trabalho e Tempo:</strong> Exige cozinhar, porcionar, congelar e descongelar diariamente. Requer espaço no freezer.</li>
                    <li><strong>Risco de Desbalanceamento:</strong> Fazer "de olho" é perigoso. A falta de cálcio, por exemplo, causa hiperparatireoidismo nutricional secundário (ossos de borracha). A suplementação é inegociável.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">2. Ração (Extrusada): Praticidade e Tecnologia</h2>
                <p>
                    As rações surgiram para facilitar a vida e garantir nutrição completa. Mas nem todas são iguais. Existe um abismo entre uma ração "Standard" (de combate) e uma "Super Premium" ou "Natural".
                </p>

                <h3 className="text-2xl font-semibold text-green-600 mt-8 mb-3">✅ Vantagens da Ração</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Praticidade:</strong> É só abrir o pacote e servir. Ótimo para viagens e rotinas corridas.</li>
                    <li><strong>Balanceamento Garantido:</strong> Se for uma marca idônea, cada grão contém a proporção exata de nutrientes que seu pet precisa.</li>
                    <li><strong>Custo-Benefício:</strong> Geralmente mais barata que a AN, especialmente para cães grandes.</li>
                    <li><strong>Durabilidade:</strong> Não estraga fácil no pote (embora não deva ficar exposta o dia todo).</li>
                </ul>

                <h3 className="text-2xl font-semibold text-red-600 mt-8 mb-3">❌ Desafios da Ração</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Baixa Umidade:</strong> Exige que o animal beba muita água por fora, o que nem sempre acontece (risco de cálculos renais).</li>
                    <li><strong>Processamento:</strong> É um alimento ultraprocessado. Ingredientes passam por altas temperaturas.</li>
                    <li><strong>Monotonia:</strong> Comer a mesma "bolinha" seca a vida toda pode ser entediante para o animal.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">3. O Caminho do Meio: Mix Feeding (Alimentação Mista)</h2>
                <p>
                    E se você não precisasse escolher apenas um? A tendência mundial é o <strong>Mix Feeding</strong>. Consiste em usar a ração como base (para garantir o balanceamento e praticidade) e adicionar "toppers" de alimentos frescos para enriquecer a dieta.
                </p>
                <div className="bg-card p-6 rounded-xl border border-border/50 my-6">
                    <h4 className="font-bold text-lg mb-4">🥗 O que você pode adicionar hoje na ração (com moderação):</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                        <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Ovo cozido (excelente proteína)</li>
                        <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Cenoura ou Brócolis cozidos</li>
                        <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Iogurte natural (sem açúcar)</li>
                        <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Carne moída magra cozida</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">
                        *Regra dos 10%: Os extras não devem ultrapassar 10% das calorias diárias para não desbalancear a ração.
                    </p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">4. Como Escolher a Melhor Opção?</h2>
                <p>
                    A melhor dieta é aquela que o seu pet come bem, que mantém ele saudável (pelos brilhantes, fezes firmes, peso ideal) e que você consegue manter a longo prazo.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Para filhotes:</strong> Cuidado redobrado com AN. Erros de cálcio/fósforo podem causar deformidades ósseas irreversíveis. Rações Super Premium são mais seguras nessa fase se você não tiver acompanhamento estrito.</li>
                    <li><strong>Para idosos:</strong> A AN pode ser fantástica para aumentar o apetite e a hidratação, mas deve ser formulada para poupar rins e fígado.</li>
                    <li><strong>Para obesos:</strong> A AN facilita a perda de peso pois tem mais volume e menos calorias (água e fibras) que a ração concentrada.</li>
                </ul>

                <div className="bg-primary/5 p-8 rounded-2xl mt-12 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4">A Nutrição é a Base, mas não é Tudo</h3>
                    <p className="text-lg mb-6">
                        Independentemente de escolher ração ou AN, o ingrediente principal é o amor e a observação. Um tutor atento percebe quando a comida não está caindo bem. E lembre-se: saúde envolve também exercício, vacinas, antipulgas e enriquecimento ambiental.
                    </p>
                    <div className="bg-background p-6 rounded-xl shadow-sm border border-primary/20">
                        <h4 className="font-bold text-foreground mb-2">Você é um Expert em Cuidados?</h4>
                        <p className="text-muted-foreground mb-4">
                            Saber sobre nutrição é ótimo, mas como está o resto da sua rotina de cuidados? Descubra se você está no caminho certo para ser o melhor amigo do seu pet.
                        </p>
                        <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => window.location.href = '/quiz'}>
                            👉 Descobrir Meu Nível de Tutor
                        </Button>
                    </div>
                </div>
            </div>
        )
    },
    "linguagem-canina": {
        title: "Entendendo a Linguagem Canina: O Que Seu Cão Realmente Diz",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Imagine viver em um país onde ninguém fala sua língua e, pior, onde seus gestos de "por favor, pare" são interpretados como "continue, estou adorando". Frustrante e assustador, não é? Essa é a realidade de muitos cães. Eles falam conosco o tempo todo, não com palavras, mas com uma linguagem corporal rica e sofisticada. O problema é que nós, humanos, somos primatas verbais e muitas vezes "analfabetos" em "caninês".
                </p>
                <p>
                    O maior erro que vejo tutores cometerem é interpretar comportamentos caninos com lógica humana. Um cão que destrói o sofá não está com "vingança"; ele pode estar com tédio ou ansiedade de separação. Um cão que boceja quando leva uma bronca não está "debochando"; ele está pedindo paz. Neste guia, vamos decifrar o código secreto dos cães para que você possa finalmente ouvir o que seu melhor amigo está gritando em silêncio.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">1. O Mito do Rabo Abanando</h2>
                <p>
                    Vamos começar derrubando o maior mito de todos: <strong>Rabo abanando NÃO é igual a felicidade.</strong> Rabo abanando significa apenas <strong>excitação</strong> ou <strong>ativação emocional</strong>. A emoção por trás disso pode ser alegria, mas também pode ser medo, insegurança ou até agressividade.
                </p>
                <div className="bg-card p-6 rounded-xl border border-border/50 my-6">
                    <h4 className="font-bold text-lg mb-4">🐕 O "Dicionário" da Cauda:</h4>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                            <span className="text-2xl">😊</span>
                            <div><strong>Abanando amplo e relaxado (o corpo todo mexe):</strong> "Estou feliz em te ver! Sou amigável."</div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-2xl">⚠️</span>
                            <div><strong>Rígido, alto e vibrando rápido:</strong> "Estou alerta, tenso e pronto para reagir." Sinal de dominância ou potencial ataque. Não se aproxime.</div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-2xl">😨</span>
                            <div><strong>Baixo ou entre as pernas:</strong> "Estou com muito medo, por favor não me machuque."</div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-2xl">🤔</span>
                            <div><strong>Horizontal e estático:</strong> "Estou focado e investigando algo."</div>
                        </li>
                    </ul>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">2. Os Sinais de Apaziguamento (Calming Signals)</h2>
                <p>
                    Descobertos pela etóloga norueguesa Turid Rugaas, esses são os sinais mais importantes e mais ignorados. Cães usam esses gestos para evitar conflitos, acalmar a si mesmos e acalmar os outros (incluindo você). Se você grita com seu cão e ele faz isso, ele está dizendo: "Você está me assustando, pare, eu não quero briga".
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Lamber o focinho (Licking):</strong> Uma lambida rápida no próprio nariz. Sinal clássico de desconforto.</li>
                    <li><strong>Bocejar (Yawning):</strong> Fora de contexto de sono, é puro estresse.</li>
                    <li><strong>Virar a cara:</strong> Ele evita contato visual direto para não parecer ameaçador.</li>
                    <li><strong>Cheirar o chão:</strong> "Vou fingir que estou ocupado aqui para evitar essa interação tensa."</li>
                    <li><strong>Andar em curva:</strong> Cães educados não se aproximam frontalmente (o que é rude/ameaçador), eles fazem um arco.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">3. O Rosto Não Mente</h2>
                <p>
                    Olhe além do focinho fofo. A tensão facial diz muito sobre o estado interno do animal.
                </p>
                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Olhos</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Olhar Suave:</strong> Pálpebras relaxadas, piscadas normais.</li>
                    <li><strong>Olhar Duro (Hard Stare):</strong> Olhos fixos, sem piscar, pupilas dilatadas. É um desafio. Afaste-se.</li>
                    <li><strong>Olho de Baleia (Whale Eye):</strong> Quando o cão vira a cabeça mas mantém o olho em você, mostrando o branco (esclera) do olho. Sinal de medo extremo e proteção de recurso (comida/brinquedo).</li>
                </ul>
                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Boca</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Sorriso Canino:</strong> Boca aberta, língua relaxada para fora, cantos da boca em forma de "C". Relaxamento.</li>
                    <li><strong>Boca Tensa:</strong> Fechada, lábios comprimidos, cantos puxados para trás em forma de "V". Estresse.</li>
                    <li><strong>Ofegar:</strong> Se não está calor e ele não correu, é estresse/ansiedade.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">4. A Escada da Agressividade</h2>
                <p>
                    Cães raramente mordem "do nada". Eles dão dezenas de avisos antes. O problema é que punimos os avisos.
                </p>
                <p>
                    A sequência geralmente é:
                    <br />
                    1. Sinais de apaziguamento (bocejo, lamber focinho)
                    <br />
                    2. Sinais de estresse (olho de baleia, corpo rígido)
                    <br />
                    3. Rosnado (O aviso sonoro)
                    <br />
                    4. Morder o ar (Snap)
                    <br />
                    5. Mordida real
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4">
                    <p className="font-bold text-red-700">⚠️ NUNCA puna um rosnado!</p>
                    <p className="text-red-600 text-sm">
                        O rosnado é o cão dizendo "Eu estou no meu limite, afaste-se". Se você pune o rosnado, o cão aprende que avisar é perigoso. Na próxima vez, ele vai pular o aviso e morder direto. Se o cão rosnar, pare o que está fazendo e dê espaço.
                    </p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">5. Barriga pra Cima: Nem Sempre é Carinho</h2>
                <p>
                    Ver um cão de barriga para cima é irresistível, certo? Mas cuidado.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Relaxado e "mole":</strong> Quer carinho.</li>
                    <li><strong>Tenso, rabo entre as pernas, lábios lambendo:</strong> É um sinal de submissão extrema e medo. Ele está dizendo "Eu me rendo, não me machuque". Fazer carinho aqui pode ser aterrorizante para ele.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">6. Como Falar a Língua Deles</h2>
                <p>
                    Agora que você entende, mude sua postura:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Não abrace cães desconhecidos:</strong> Abraço é um comportamento primata. Para cães, é imobilização e dominação. Muitos toleram, mas não gostam.</li>
                    <li><strong>Não se incline sobre eles:</strong> É ameaçador. Abaixe-se e fique de lado.</li>
                    <li><strong>Deixe ele vir até você:</strong> Não force interação. A regra dos 3 segundos: faça carinho por 3 segundos e pare. Se ele pedir mais, continue. Se ele sair, respeite.</li>
                </ul>

                <div className="bg-primary/5 p-8 rounded-2xl mt-12 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4">Empatia é a Chave</h3>
                    <p className="text-lg mb-6">
                        Entender a linguagem canina é um ato de amor. É dar voz a quem não tem. Quando você começa a "ler" seu cão, a confiança entre vocês atinge um nível que você nunca imaginou ser possível.
                    </p>
                    <div className="bg-background p-6 rounded-xl shadow-sm border border-primary/20">
                        <h4 className="font-bold text-foreground mb-2">Você realmente entende seu melhor amigo?</h4>
                        <p className="text-muted-foreground mb-4">
                            Será que você tem interpretado os sinais dele corretamente ou cometido erros inocentes? Faça nosso teste e descubra seu nível de conhecimento em comportamento canino.
                        </p>
                        <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => window.location.href = '/quiz'}>
                            👉 Fazer o Teste de Conhecimento
                        </Button>
                    </div>
                </div>
            </div>
        )
    },
    "gatos-felizes": {
        title: "Gatos Felizes: O Segredo da Gatificação",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Durante muito tempo, os gatos foram mal compreendidos. Eram vistos como animais "independentes", "traiçoeiros" ou que "se viram sozinhos". A verdade é que gatos são criaturas complexas, sensíveis e com necessidades ambientais muito específicas. Tentar criar um gato como se fosse um "cachorro pequeno" é a receita para problemas comportamentais como xixi fora do lugar, agressividade e móveis destruídos.
                </p>
                <p>
                    Para ter um gato verdadeiramente feliz e equilibrado dentro de um apartamento, você precisa pensar como um gato. Você precisa entender que, na natureza, ele é ao mesmo tempo um predador eficiente e uma presa vulnerável. Essa dualidade molda tudo o que ele faz. Bem-vindo ao mundo da <strong>Gatificação</strong> (ou Enriquecimento Ambiental Felino).
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">1. O Mundo Vertical: Altura é Segurança</h2>
                <p>
                    Para nós, humanos, a vida acontece no chão. Para os gatos, o chão é apenas um lugar de passagem. A vida real acontece no alto.
                </p>
                <p>
                    Na natureza, subir em árvores permite ao gato vigiar suas presas lá embaixo e, ao mesmo tempo, escapar de predadores maiores (como coiotes). Em casa, se ele não tem para onde subir, ele se sente encurralado e inseguro.
                </p>
                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Como Gatificar Verticalmente:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Prateleiras e Nichos:</strong> Crie uma "superestrada" nas paredes. Instale prateleiras com carpete (para não escorregar) formando um caminho contínuo.</li>
                    <li><strong>Arranhadores Torre:</strong> Quanto mais alto e firme, melhor. Se balançar, o gato não usa.</li>
                    <li><strong>Topo de Móveis:</strong> Libere o topo da geladeira e do guarda-roupa. Coloque uma mantinha lá. Será o trono dele.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">2. O Ciclo da Caça: Adeus Tédio</h2>
                <p>
                    Um gato selvagem caça de 10 a 20 vezes por dia. Em casa, ele recebe a ração no pote sem esforço. O resultado? Energia acumulada que vira destruição ou obesidade e depressão.
                </p>
                <p>
                    Você precisa simular a caça. O ciclo natural é: <strong>Caçar &gt; Pegar &gt; Matar &gt; Comer &gt; Dormir</strong>.
                </p>
                <div className="bg-card p-6 rounded-xl border border-border/50 my-6">
                    <h4 className="font-bold text-lg mb-4">🎣 A Brincadeira Certa (15 min/dia):</h4>
                    <ol className="list-decimal pl-6 space-y-3">
                        <li>Use uma varinha com pena ou isca (nunca laser, pois ele nunca "pega" a presa e gera frustração).</li>
                        <li>Faça a isca se mover como uma presa: esconda-se atrás do sofá, faça movimentos rápidos e paradas bruscas.</li>
                        <li>Deixe o gato capturar a isca algumas vezes.</li>
                        <li>No final, quando ele "matar" a presa, ofereça imediatamente um sachê ou petisco.</li>
                        <li>Ele vai comer, se lamber e dormir satisfeito. Ciclo completo!</li>
                    </ol>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">3. A Caixa de Areia Sagrada</h2>
                <p>
                    A maioria dos problemas de "xixi errado" não é pirraça, é problema com a caixa de areia. Gatos são extremamente limpos.
                </p>
                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">As Regras de Ouro:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Quantidade:</strong> Número de gatos + 1. Tem 2 gatos? Precisa de 3 caixas.</li>
                    <li><strong>Tamanho:</strong> A caixa deve ter 1,5x o tamanho do gato. Ele precisa girar lá dentro sem encostar nas bordas.</li>
                    <li><strong>Localização:</strong> Longe da comida e da água. E longe de barulho (máquina de lavar). Gatos precisam de paz e rota de fuga nesse momento vulnerável.</li>
                    <li><strong>Areia:</strong> Fina e sem cheiro. Gatos odeiam areia perfumada (o olfato deles é 14x o nosso!).</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">4. Arranhar é Preciso</h2>
                <p>
                    Gatos não arranham o sofá porque são maus. Eles arranham para:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Marcar território (glândulas nas patas deixam cheiro).</li>
                    <li>Alongar a coluna e músculos.</li>
                    <li>Aparar as unhas velhas.</li>
                </ul>
                <p>
                    Se você não der um local adequado, ele VAI usar o sofá. Tenha arranhadores verticais (bem altos para ele esticar tudo) e horizontais (papelão no chão). Coloque-os em locais de passagem social, não escondidos num quarto fechado.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">5. Esconderijos e Zonas de Segurança</h2>
                <p>
                    Todo gato precisa de um lugar para "sumir" quando as visitas chegam ou quando se assusta. Caixas de papelão, tocas ou o fundo do armário. Nunca force um gato a sair do esconderijo. Saber que ele tem para onde fugir diminui drasticamente o nível de estresse.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">6. Enriquecimento Alimentar</h2>
                <p>
                    Comer no pote é chato. Faça seu gato "trabalhar" pela comida, como faria na natureza.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Use comedouros lentos ou brinquedos recheáveis.</li>
                    <li>Esconda grãos de ração pela casa para ele farejar e encontrar.</li>
                    <li>Use garrafas pet com furinhos para ele rolar e cair a ração.</li>
                </ul>

                <div className="bg-primary/5 p-8 rounded-2xl mt-12 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4">Um Gato Feliz é um Gato Saudável</h3>
                    <p className="text-lg mb-6">
                        Gatificar sua casa não é apenas estética; é saúde mental preventiva. Um gato estimulado e seguro adoece menos e vive mais. Olhe para sua casa agora: ela é amigável para humanos ou para felinos?
                    </p>
                    <div className="bg-background p-6 rounded-xl shadow-sm border border-primary/20">
                        <h4 className="font-bold text-foreground mb-2">Seu Gato Realmente Te Ama?</h4>
                        <p className="text-muted-foreground mb-4">
                            Muitos tutores acham que gatos são "fáceis", mas eles têm necessidades complexas. Descubra se você está atendendo a todas elas com nosso quiz exclusivo.
                        </p>
                        <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => window.location.href = '/quiz'}>
                            👉 Avaliar Meus Cuidados Agora
                        </Button>
                    </div>
                </div>
            </div>
        )
    },
    "racas-populares-brasil": {
        title: "As 10 Raças de Cães Mais Populares no Brasil: O Guia Definitivo",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    O Brasil é apaixonado por cães! Somos um dos países com a maior população canina do mundo. Seja em casas grandes ou apartamentos compactos, sempre há espaço para um (ou mais) companheiro de quatro patas. Mas você sabe quais são as raças que conquistaram de vez o coração dos brasileiros?
                </p>
                <p>
                    Fizemos um levantamento completo das raças mais encontradas nos lares brasileiros. Do carisma único dos vira-latas à elegância dos Goldens, confira se o seu melhor amigo está na lista!
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">1. SRD (Sem Raça Definida) - O Famoso Vira-Lata</h2>
                <p>
                    O campeão absoluto! O vira-lata caramelo já é praticamente um símbolo nacional. Inteligentes, resistentes e cheios de personalidade, os cães sem raça definida (SRD) lideram com folga a preferência nacional.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Por que amamos:</strong> São únicos! Cada um tem uma aparência e personalidade exclusiva. Além disso, adotar um SRD é um ato de amor que salva vidas.</li>
                    <li><strong>Curiosidade:</strong> Estudos indicam que SRDs tendem a viver mais por terem maior variabilidade genética.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">2. Shih Tzu</h2>
                <p>
                    O rei dos apartamentos. O Shih Tzu é extremamente popular no Brasil, especialmente nas grandes cidades.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Perfil:</strong> Dócil, afetuoso e adora colo. Não precisa de muito exercício físico, o que o torna perfeito para espaços menores.</li>
                    <li><strong>Atenção:</strong> Seus pelos longos exigem escovação diária e tosa frequente.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">3. Yorkshire Terrier</h2>
                <p>
                    Pequeno no tamanho, mas gigante na personalidade. O "Yorkie" é um terrier valente e cheio de energia.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Perfil:</strong> Alerta, vivaz e muito apegado ao dono. É um excelente cão de alarme (late para avisar qualquer novidade).</li>
                    <li><strong>Dica:</strong> Pode ser um pouco teimoso, então a socialização desde filhote é importante.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">4. Poodle</h2>
                <p>
                    Um clássico que nunca sai de moda. Seja o Toy, Mini ou Médio, o Poodle é sinônimo de inteligência.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Perfil:</strong> É considerada a segunda raça mais inteligente do mundo! Aprendem truques com facilidade incrível.</li>
                    <li><strong>Vantagem:</strong> Soltam pouco pelo, sendo ótimos para pessoas alérgicas.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">5. Spitz Alemão (Lulu da Pomerânia)</h2>
                <p>
                    A "bolinha de pelos" que virou febre. Com sua aparência de ursinho, conquistou o Brasil rapidamente.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Perfil:</strong> Extrovertido, ativo e muito atento. Adora ser o centro das atenções.</li>
                    <li><strong>Cuidado:</strong> Pode latir bastante se não for educado desde cedo.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">6. Bulldog Francês</h2>
                <p>
                    Com suas orelhas de morcego e cara amassada, o Frenchie é puro carisma.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Perfil:</strong> Palhaço, brincalhão e muito companheiro. Adora crianças e outros pets.</li>
                    <li><strong>Saúde:</strong> Por ser braquicefálico (focinho curto), exige cuidados com o calor e respiração.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">7. Golden Retriever</h2>
                <p>
                    O "garoto propaganda" da família feliz. É impossível não sorrir perto de um Golden.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Perfil:</strong> Eterno filhote, gentil, paciente e ama água. É uma das raças mais dóceis do mundo.</li>
                    <li><strong>Energia:</strong> Precisa de bastante exercício e espaço para gastar energia.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">8. Labrador Retriever</h2>
                <p>
                    Primo próximo do Golden, o Labrador é energia pura e apetite infinito.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Perfil:</strong> Amigável, ativo e muito guloso. Excelente cão de companhia e trabalho.</li>
                    <li><strong>Atenção:</strong> Tendência à obesidade. Cuidado com os petiscos!</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">9. Pinscher</h2>
                <p>
                    O pequeno valente! Quem nunca conheceu um Pinscher que se achava um Doberman?
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Perfil:</strong> Destemido, elétrico e super protetor com seu tutor.</li>
                    <li><strong>Mito:</strong> A fama de "bravo" muitas vezes vem da falta de limites e socialização, não da raça em si.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">10. Lhasa Apso</h2>
                <p>
                    Muitas vezes confundido com o Shih Tzu, o Lhasa tem uma personalidade mais independente.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Perfil:</strong> Calmo, observador e leal. Na origem (Tibet), eram cães sentinelas de templos.</li>
                    <li><strong>Diferença:</strong> O focinho é um pouco mais longo que o do Shih Tzu e a personalidade é mais reservada com estranhos.</li>
                </ul>

                <div className="bg-primary/5 p-8 rounded-2xl mt-12 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4">Qual é a raça do seu amor?</h3>
                    <p className="text-lg mb-6">
                        Não importa se é de raça ou vira-lata, grande ou pequeno. O que importa é o amor incondicional que eles nos dão todos os dias. Cada cão é um indivíduo único com suas próprias necessidades e peculiaridades.
                    </p>
                    <div className="bg-background p-6 rounded-xl shadow-sm border border-primary/20">
                        <h4 className="font-bold text-foreground mb-2">Você conhece tudo sobre o seu cão?</h4>
                        <p className="text-muted-foreground mb-4">
                            Será que você está cuidando dele da maneira ideal para o perfil dele? Faça nosso quiz e descubra se você é o tutor que seu pet merece!
                        </p>
                        <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => window.location.href = '/quiz'}>
                            👉 Fazer o Quiz Agora
                        </Button>
                    </div>
                </div>
            </div>
        )
    },
    "srd-vira-lata": {
        title: "SRD (Vira-Lata): A História e a Alma do Cão Mais Amado do Brasil",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Eles estão em todas as esquinas, em todos os memes e, principalmente, em milhões de lares brasileiros. O Vira-Lata, ou tecnicamente SRD (Sem Raça Definida), é a verdadeira face do cão nacional. Mas não se engane: por trás da "falta de pedigree" existe uma história evolutiva fascinante e uma personalidade que conquista qualquer um.
                </p>
                <p>
                    Ser um SRD não é ser "menos"; é ser um sobrevivente. É carregar no DNA a diversidade genética que garante resistência, inteligência e uma capacidade de adaptação única. Neste artigo, vamos celebrar a nobreza desse cão que, de "vira-lata", virou o "vira-luxo" de muitas famílias.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Origem: A Seleção Natural em Ação</h2>
                <p>
                    Ao contrário das raças puras, criadas pelo homem para funções específicas (caça, guarda, pastoreio), o SRD foi moldado pela própria natureza. Sua origem remonta aos primeiros cães que acompanhavam os colonizadores e que, ao longo dos séculos, se misturaram livremente.
                </p>
                <p>
                    Essa "sopa genética" resultou em animais extremamente rústicos. A seleção natural favoreceu os mais espertos (para conseguir comida), os mais saudáveis (para resistir a doenças) e os mais simpáticos (para conquistar a ajuda humana). O vira-lata caramelo, por exemplo, é um fenômeno genético: essa cor é dominante e está ligada a um temperamento dócil e sociável.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Personalidade: O Malandro Amigo</h2>
                <p>
                    Se existe uma palavra que define o SRD é: <strong>gratidão</strong>. Quem adota um cão resgatado relata uma conexão profunda, como se o animal soubesse que foi salvo.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Inteligência de Rua:</strong> Eles aprendem rápido, muitas vezes apenas observando. São mestres em ler a linguagem corporal humana.</li>
                    <li><strong>Sociabilidade:</strong> Geralmente se dão bem com outros cães e pessoas, pois a sobrevivência nas ruas exigia diplomacia.</li>
                    <li><strong>Lealdade:</strong> São extremamente apegados à família.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Saúde de Ferro?</h2>
                <p>
                    Existe o mito de que vira-latas nunca adoecem. É verdade que a variabilidade genética os protege de muitas doenças hereditárias comuns em raças puras (como displasia ou problemas cardíacos específicos). Porém, eles precisam dos mesmos cuidados: vacinas, vermífugos e boa alimentação. Um SRD bem cuidado pode viver facilmente 15, 16 anos ou mais!
                </p>

                <div className="bg-primary/5 p-8 rounded-2xl mt-12 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4">O Vira-Lata é para você?</h3>
                    <p className="text-lg mb-6">
                        Se você quer um cão único (literalmente, não existe outro igual), companheiro e cheio de história, a resposta é sim. Adotar é um ato de amor.
                    </p>
                    <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => window.location.href = '/quiz'}>
                        👉 Descubra se você está pronto para adotar
                    </Button>
                </div>
            </div>
        )
    },
    "shih-tzu": {
        title: "Shih Tzu: O Pequeno Leão que Conquistou o Mundo",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Não é à toa que o Shih Tzu é uma das raças mais populares do Brasil. Com sua carinha amassada, olhos expressivos e pelagem exuberante, ele parece um bicho de pelúcia vivo. Mas não se deixe enganar pela aparência delicada: por trás desse "cão de colo" existe uma história de realeza e uma personalidade forte e divertida.
                </p>
                <p>
                    Seu nome significa "Cão Leão" em chinês, e ele foi criado para ser exatamente o que é hoje: um companheiro leal, devotado e que adora estar perto de seus humanos.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Origem: Dos Palácios Proibidos para o Seu Sofá</h2>
                <p>
                    A história do Shih Tzu é milenar. Eles foram desenvolvidos na China, provavelmente cruzando o Lhasa Apso (do Tibet) com o Pequinês. Durante séculos, viveram exclusivamente dentro dos muros da Cidade Proibida, como animais sagrados da realeza chinesa.
                </p>
                <p>
                    Eles eram tão valiosos que os imperadores se recusavam a vendê-los ou trocá-los. A raça quase foi extinta durante a Revolução Chinesa, mas alguns exemplares foram salvos e levados para a Inglaterra, dando origem a todos os Shih Tzus que conhecemos hoje.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Personalidade: Amor em Forma de Cão</h2>
                <p>
                    O Shih Tzu não foi criado para caçar, nem para guardar, nem para pastorear. Ele foi criado para <strong>amar</strong>.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>O "Cão Sombra":</strong> Ele vai te seguir até no banheiro. Ele precisa de companhia humana para ser feliz.</li>
                    <li><strong>Adaptável:</strong> É o cão perfeito para apartamentos. Não precisa de muito espaço e se contenta com brincadeiras dentro de casa e passeios curtos.</li>
                    <li><strong>Teimosia:</strong> Sim, eles podem ser um pouco teimosos na hora do adestramento. Paciência e reforço positivo (petiscos!) são a chave.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Cuidados Essenciais</h2>
                <p>
                    A beleza tem um preço: manutenção. O pelo do Shih Tzu embola fácil e precisa de escovação diária ou tosa frequente (a tosa "bebê" é a favorita dos brasileiros). Além disso, seus olhos grandes são sensíveis e o focinho curto exige cuidado com o calor excessivo.
                </p>

                <div className="bg-primary/5 p-8 rounded-2xl mt-12 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4">Shih Tzu é a sua cara?</h3>
                    <p className="text-lg mb-6">
                        Se você quer um amigo para todas as horas e não se importa em cuidar de pelos, ele é perfeito. Mas será que você sabe tudo sobre os cuidados que ele precisa?
                    </p>
                    <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => window.location.href = '/quiz'}>
                        👉 Teste seus conhecimentos sobre raças
                    </Button>
                </div>
            </div>
        )
    },
    "yorkshire-terrier": {
        title: "Yorkshire Terrier: Um Grande Espírito num Corpo Pequeno",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Pequeno, elegante e com um laço na cabeça. É assim que vemos o Yorkshire Terrier hoje. Mas você sabia que esse "pet de madame" tem um passado operário e "casca grossa"? O Yorkie é a prova viva de que tamanho não é documento.
                </p>
                <p>
                    Ele é um Terrier em cada centímetro: corajoso, ativo, curioso e cheio de atitude. É um cão que não sabe que é pequeno e encara o mundo de igual para igual.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Origem: Das Minas de Carvão aos Salões Vitorianos</h2>
                <p>
                    O Yorkie nasceu no condado de Yorkshire, na Inglaterra, durante a Revolução Industrial. Mas não em castelos. Ele foi criado por operários escoceses para uma missão dura: caçar ratos nas minas de carvão e nas fábricas têxteis.
                </p>
                <p>
                    Seu tamanho pequeno permitia entrar em tocas e buracos, e sua bravura era lendária. Com o tempo, sua beleza e personalidade chamaram a atenção da alta sociedade vitoriana, e ele migrou do chão de fábrica para o colo das damas, tornando-se um símbolo de status.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Personalidade: O Pequeno Chefe</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Alerta:</strong> É um excelente cão de alarme. Nada passa despercebido por um Yorkie. Ele vai te avisar se uma folha cair na rua.</li>
                    <li><strong>Vivaz:</strong> Adora brincar, correr e investigar. Não é um cão de ficar só dormindo no sofá o dia todo.</li>
                    <li><strong>Protetor:</strong> É extremamente apegado ao dono e pode ser ciumento.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Cuidados Especiais</h2>
                <p>
                    Seu pelo é similar ao cabelo humano (não tem subpelo), o que é ótimo para alérgicos, mas exige escovação diária para não formar nós. A saúde bucal também é um ponto de atenção: Yorkies tendem a acumular muito tártaro, exigindo escovação dos dentes e limpeza veterinária regular.
                </p>

                <div className="bg-primary/5 p-8 rounded-2xl mt-12 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4">Pronto para um Yorkie?</h3>
                    <p className="text-lg mb-6">
                        Ter um Yorkie é ter diversão garantida e um guarda-costas de 3kg. Mas você está preparado para essa energia toda?
                    </p>
                    <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => window.location.href = '/quiz'}>
                        👉 Descubra seu perfil de tutor
                    </Button>
                </div>
            </div>
        )
    },
    "poodle": {
        title: "Poodle: Muito Mais que um Penteado Bonito",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Quando pensamos em Poodle, logo vem à imagem da tosa pompom e de cães de circo. Mas o Poodle é, na verdade, uma das raças mais antigas, atléticas e inteligentes do mundo. Esqueça o estereótipo de "fútil". O Poodle é um gênio de quatro patas.
                </p>
                <p>
                    Disponível em quatro tamanhos (Gigante, Médio, Anão e Toy), ele é versátil o suficiente para ser cão de guarda, cão de terapia, atleta de agility ou o melhor amigo do seu sofá.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Origem: O Caçador de Água</h2>
                <p>
                    O nome "Poodle" vem do alemão "Pudel", que significa "se jogar na água". Originalmente, ele era um cão de trabalho pesado: um recuperador de caça aquática (patos e aves) na Alemanha e França.
                </p>
                <p>
                    Sabe a tosa clássica com pompons nas articulações? Não era moda! Era funcional: raspava-se o pelo para o cão nadar melhor, mas deixava-se tufos nas juntas e no peito para proteger os órgãos vitais e articulações da água gelada.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Personalidade: A Inteligência em Pessoa</h2>
                <p>
                    No ranking de inteligência canina de Stanley Coren, o Poodle ocupa o <strong>2º lugar</strong> (atrás apenas do Border Collie).
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Aprendizado Rápido:</strong> Eles aprendem comandos novos em poucas repetições. São fáceis de adestrar, mas também aprendem "coisas erradas" rápido se você bobear.</li>
                    <li><strong>Empático:</strong> Eles têm uma capacidade incrível de "ler" o humor do dono. São excelentes cães de apoio emocional.</li>
                    <li><strong>Ativo:</strong> Mesmo os pequenos (Toy) têm bastante energia e precisam de estímulo mental, não só físico.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Saúde e Pelagem</h2>
                <p>
                    A grande vantagem do Poodle é que ele não troca de pelo (o pelo cresce continuamente), sendo hipoalergênico. O lado "ruim" é que exige tosa profissional regular a cada 4-6 semanas. São cães longevos, vivendo frequentemente mais de 15 anos.
                </p>

                <div className="bg-primary/5 p-8 rounded-2xl mt-12 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4">Um Poodle combina com você?</h3>
                    <p className="text-lg mb-6">
                        Se você quer um cão inteligente que interage com você o tempo todo, o Poodle é a escolha certa.
                    </p>
                    <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => window.location.href = '/quiz'}>
                        👉 Faça o quiz e veja se você acompanha o ritmo dele
                    </Button>
                </div>
            </div>
        )
    },
    "spitz-alemao": {
        title: "Spitz Alemão (Lulu): A Raposinha de Luxo",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    É impossível olhar para um Spitz Alemão Anão (popularmente conhecido como Lulu da Pomerânia) e não sorrir. Com sua juba de leão, carinha de raposa e atitude de gigante, ele conquistou o posto de "raça da moda" no Brasil.
                </p>
                <p>
                    Mas não se deixe levar apenas pela fofura. O Spitz é uma raça primitiva, com instintos fortes e uma personalidade vibrante que exige um tutor dedicado.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Origem: Do Gelo ao Colo da Rainha</h2>
                <p>
                    O Spitz Alemão descende de grandes cães de trenó do Ártico (parentes do Husky e do Malamute). Sim, essa bolinha de 2kg tem sangue de cão de trabalho pesado!
                </p>
                <p>
                    A raça foi diminuindo de tamanho na região da Pomerânia (entre Alemanha e Polônia). Mas o grande "boom" veio quando a Rainha Vitória da Inglaterra se apaixonou pela raça no século 19 e começou a criá-los em tamanhos menores. Onde a rainha vai, o povo segue, e o Lulu virou o cão de companhia definitivo.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Personalidade: Pequeno Ditador?</h2>
                <p>
                    O Spitz muitas vezes sofre da "Síndrome do Cão Pequeno": ele acha que é muito maior do que realmente é.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Corajoso:</strong> Ele não tem medo de desafiar cães dez vezes maiores que ele. O tutor precisa protegê-lo dessa ousadia.</li>
                    <li><strong>Alerta:</strong> É um excelente cão de guarda (alarme). Late para qualquer barulho estranho.</li>
                    <li><strong>Extrovertido:</strong> Adora ser o centro das atenções e fazer "graça".</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Cuidados com a Juba</h2>
                <p>
                    A pelagem dupla é sua marca registrada. Ela <strong>NUNCA</strong> deve ser tosada na máquina (tosa baixa), pois pode causar alopecia pós-tosa (o pelo não cresce mais). A manutenção exige escovação frequente, mas banhos não tão constantes para não ressecar a pele.
                </p>

                <div className="bg-primary/5 p-8 rounded-2xl mt-12 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4">O Lulu é o seu par ideal?</h3>
                    <p className="text-lg mb-6">
                        Beleza, atitude e lealdade. O Spitz tem tudo isso. Mas será que você sabe lidar com essa personalidade forte?
                    </p>
                    <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => window.location.href = '/quiz'}>
                        👉 Teste seu nível de tutor agora
                    </Button>
                </div>
            </div>
        )
    },
    "bulldog-frances": {
        title: "Bulldog Francês: O Palhaço Adorável",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Orelhas de morcego, cara amassada e um ronco que parece um motor de caminhão. O Bulldog Francês, ou "Frenchie", é uma figuraça. Não é à toa que ele explodiu em popularidade no Brasil e no mundo. Ele é o cão de companhia por excelência para a vida moderna.
                </p>
                <p>
                    Mas não se deixe enganar pela cara de bravo (que ele não tem nada). O Frenchie é um comediante nato, criado para fazer você rir e esquecer dos problemas do dia a dia.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Origem: Da Inglaterra para a França (com Amor)</h2>
                <p>
                    Apesar do nome, suas raízes são inglesas. Durante a Revolução Industrial, as rendeiras de Nottingham (Inglaterra) tinham pequenos Bulldogs de colo como mascotes. Quando muitas delas migraram para a França em busca de trabalho, levaram seus cães.
                </p>
                <p>
                    Em Paris, esses cãezinhos caíram nas graças da sociedade, dos artistas e da boemia. Foi lá que ganharam o nome "Bouledogue Français" e se tornaram um símbolo de charme e irreverência.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Personalidade: Um Grude Divertido</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Companheiro:</strong> Ele não quer correr uma maratona; ele quer ficar no sofá vendo Netflix com você. É um cão de baixa energia, ideal para apartamentos.</li>
                    <li><strong>Silencioso:</strong> Late muito pouco. Geralmente só late se tiver algo realmente importante acontecendo (ou se a campainha tocar).</li>
                    <li><strong>Teimoso:</strong> Ah, sim. Se ele não quiser andar, ele vira uma estátua de chumbo. O adestramento exige paciência e muitos petiscos.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Saúde: O Calcanhar de Aquiles</h2>
                <p>
                    Amar um Frenchie é estar preparado para cuidar de sua saúde. Por ser braquicefálico (focinho achatado), ele tem dificuldade para respirar e regular a temperatura.
                </p>
                <p>
                    <strong>Atenção redobrada:</strong> Nunca exercite um Frenchie no calor forte! O risco de hipertermia é real e fatal. Além disso, problemas de coluna e alergias de pele são comuns na raça.
                </p>

                <div className="bg-primary/5 p-8 rounded-2xl mt-12 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4">Você aguenta tanta fofura (e ronco)?</h3>
                    <p className="text-lg mb-6">
                        Ter um Frenchie é ter alegria garantida em casa. Mas exige responsabilidade financeira e cuidados específicos com a saúde.
                    </p>
                    <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => window.location.href = '/quiz'}>
                        👉 Descubra se você está pronto para um Frenchie
                    </Button>
                </div>
            </div>
        )
    },
    "golden-retriever": {
        title: "Golden Retriever: O Cão que Sorri com os Olhos",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Se a bondade tivesse uma forma física, ela seria um Golden Retriever. Dourado como o sol e com um coração que não cabe no peito, essa raça é sinônimo de família feliz. Não é exagero dizer que o Golden é um dos cães mais amáveis do planeta.
                </p>
                <p>
                    Mas ele é muito mais que um rostinho bonito em comerciais de margarina. O Golden é um cão de trabalho incansável, inteligente e com uma vontade louca de agradar seus humanos.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Origem: O Sonho de Lord Tweedmouth</h2>
                <p>
                    A raça foi desenvolvida na Escócia, no século 19, por um nobre chamado Lord Tweedmouth. Ele queria o cão de caça perfeito: que fosse forte para nadar em águas geladas, tivesse faro apurado e, o mais importante, uma "boca macia" (soft mouth) para trazer a caça sem machucá-la.
                </p>
                <p>
                    O resultado foi essa maravilha dourada que, hoje, troca a caça por bolinhas de tênis e chinelos.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Personalidade: Amigo de Todo Mundo</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Zero Agressividade:</strong> Um Golden é péssimo cão de guarda. Se um ladrão entrar, ele provavelmente vai mostrar onde está o cofre e pedir carinho na barriga.</li>
                    <li><strong>Eterno Filhote:</strong> Eles demoram a amadurecer mentalmente. Prepare-se para ter um "bebezão" brincalhão por muitos anos.</li>
                    <li><strong>Necessidade de Afeto:</strong> Eles não suportam solidão. Um Golden deixado sozinho no quintal é um cão profundamente infeliz (e destrutivo).</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Energia de Sobra</h2>
                <p>
                    Não se engane com a calma que eles mostram nos filmes. Goldens precisam de exercício! Caminhadas longas, natação e brincadeiras de buscar são essenciais para evitar que fiquem obesos e entediados.
                </p>

                <div className="bg-primary/5 p-8 rounded-2xl mt-12 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4">O Golden é o seu par perfeito?</h3>
                    <p className="text-lg mb-6">
                        Se você tem espaço, tempo e muito amor para dar, o Golden vai mudar sua vida para melhor.
                    </p>
                    <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => window.location.href = '/quiz'}>
                        👉 Faça o quiz e veja se você merece esse amor dourado
                    </Button>
                </div>
            </div>
        )
    },
    "labrador-retriever": {
        title: "Labrador Retriever: O Melhor Amigo do Mundo",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Por anos consecutivos, o Labrador foi eleito a raça mais popular do mundo. E não é difícil entender o porquê. Ele é o pacote completo: inteligente, versátil, carinhoso e robusto. É o cão que guia cegos, fareja drogas em aeroportos, resgata pessoas em escombros e, no fim do dia, dorme nos pés da cama das crianças.
                </p>
                <p>
                    Diferente do seu "primo" Golden (que é mais sensível), o Labrador é mais "rústico" e "trator". Ele é pura alegria e força bruta.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Origem: O Pescador Canadense</h2>
                <p>
                    Apesar do nome, ele veio da Terra Nova (Canadá), não de Labrador. Originalmente, eram cães de pescadores. Sua função era pular nas águas geladas do Atlântico Norte para recuperar redes e peixes que escapavam.
                </p>
                <p>
                    Isso explica sua pelagem impermeável, sua cauda grossa (que serve como leme ao nadar) e sua obsessão absoluta por água.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Personalidade: Fome de Vida (e de Comida)</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>O Estômago Sem Fundo:</strong> Labradores amam comer. Eles engolem qualquer coisa. O controle de peso é o maior desafio do tutor.</li>
                    <li><strong>Inteligência Funcional:</strong> Eles amam trabalhar e aprender tarefas. Se você não der um "trabalho" para ele, ele vai inventar um (como roer o pé da mesa).</li>
                    <li><strong>Amabilidade:</strong> Assim como o Golden, ama a todos. Mas é mais bruto nas brincadeiras, podendo derrubar crianças pequenas sem querer.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Cuidados</h2>
                <p>
                    Exercício, exercício e exercício. Um Labrador cansado é um Labrador comportado. E cuidado com a displasia coxofemoral: evite pisos lisos e escadas em excesso enquanto filhote.
                </p>

                <div className="bg-primary/5 p-8 rounded-2xl mt-12 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4">Você tem energia para um Labrador?</h3>
                    <p className="text-lg mb-6">
                        Ele vai te tirar do sofá e te encher de babas. Se isso soa como o paraíso, ele é para você.
                    </p>
                    <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => window.location.href = '/quiz'}>
                        👉 Descubra se seu estilo de vida combina com ele
                    </Button>
                </div>
            </div>
        )
    },
    "pinscher": {
        title: "Pinscher: 50% Ódio, 50% Tremedeira (Brincadeira!)",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    O Pinscher Miniatura é uma instituição brasileira. Quem nunca viu esse pequeno "cão de guarda" latindo furiosamente no portão? A fama de "bravo" e "tremedeira" corre solta, mas é injusta.
                </p>
                <p>
                    O Pinscher é, na verdade, um cão incompreendido. Ele é um animal de alta energia, corajoso e leal, muitas vezes tratado como bebê ou brinquedo, o que gera a tal agressividade por medo. Quando respeitado como cão, é um companheiro incrível.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Origem: Não é um Doberman Miniatura!</h2>
                <p>
                    Ao contrário do que muitos pensam, o Pinscher Miniatura <strong>NÃO</strong> é uma versão reduzida do Doberman. Na verdade, o Pinscher é uma raça muito mais antiga!
                </p>
                <p>
                    Originário da Alemanha, ele era um cão de fazenda, usado para caçar ratos nos celeiros. Daí vem seu instinto de caça, sua atenção a movimentos rápidos e sua coragem de enfrentar animais maiores que ele.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Personalidade: O Rei da Casa</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Destemido:</strong> Ele realmente não tem noção do próprio tamanho. Ele vai defender o dono contra um Rottweiler se achar necessário.</li>
                    <li><strong>Elétrico:</strong> É um cão ligado no 220v. Precisa de atividade mental e brincadeiras para não ficar estressado.</li>
                    <li><strong>Apegado:</strong> Escolhe uma pessoa da casa para ser seu "idolo" e pode ser ciumento com ela.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Por que eles tremem?</h2>
                <p>
                    Pode ser frio (eles têm pouca gordura corporal e pelo curto), mas muitas vezes é pura excitação ou ansiedade. Pinschers sentem tudo com muita intensidade.
                </p>

                <div className="bg-primary/5 p-8 rounded-2xl mt-12 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4">Você entende a alma de um Pinscher?</h3>
                    <p className="text-lg mb-6">
                        Eles precisam de liderança gentil e limites claros, não de colo o tempo todo. Você está pronto para esse desafio?
                    </p>
                    <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => window.location.href = '/quiz'}>
                        👉 Teste seus conhecimentos caninos
                    </Button>
                </div>
            </div>
        )
    },
    "lhasa-apso": {
        title: "Lhasa Apso: O Sentinela do Tibet",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Muitas vezes confundido com o Shih Tzu, o Lhasa Apso é uma raça com uma "vibe" totalmente diferente. Enquanto o Shih Tzu é um "cão de colo", o Lhasa é um cão místico, independente e reservado.
                </p>
                <p>
                    Ele não está aqui para te agradar o tempo todo; ele está aqui para te proteger e te trazer sorte. Essa é a crença que o manteve isolado nas montanhas do Himalaia por séculos.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Origem: O Cão Sagrado</h2>
                <p>
                    Criado nos mosteiros budistas do Tibet, o Lhasa Apso tinha uma função nobre: ser o sentinela interno. Enquanto os enormes Dogues do Tibet guardavam o lado de fora, o Lhasa ficava dentro, latindo para avisar se algum intruso passasse.
                </p>
                <p>
                    Os monges acreditavam que, quando morriam, suas almas podiam reencarnar nesses cães antes de atingir o Nirvana. Por isso, nunca eram vendidos, apenas presenteados como sinal de grande respeito e sorte (o Dalai Lama costumava presentear imperadores com Lhasas).
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Personalidade: Gato em Corpo de Cão?</h2>
                <p>
                    Muitos tutores dizem que o Lhasa tem personalidade felina.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Independente:</strong> Ele gosta de carinho, mas na hora que ELE quer. Não é um cão grudento. Fica bem sozinho em casa.</li>
                    <li><strong>Desconfiado:</strong> Com estranhos, ele é reservado e observador. Não espere que ele pule no colo da visita logo de cara.</li>
                    <li><strong>Teimoso:</strong> Ele tem mente própria. "Senta? Por que eu deveria sentar?". O adestramento exige persuasão.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Cuidados</h2>
                <p>
                    A pelagem longa e pesada é linda, mas trabalhosa. Escovação diária é lei. Mas, tirando isso, é um cão rústico e saudável, com uma das maiores expectativas de vida entre os cães (muitos passam dos 18 anos!).
                </p>

                <div className="bg-primary/5 p-8 rounded-2xl mt-12 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4">O Lhasa combina com seu estilo?</h3>
                    <p className="text-lg mb-6">
                        Se você quer um companheiro leal, mas que respeita seu espaço e não exige atenção 24h, o Lhasa é a escolha sábia.
                    </p>
                    <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => window.location.href = '/quiz'}>
                        👉 Descubra se você tem o perfil zen para um Lhasa
                    </Button>
                </div>
            </div>
        )
    },
    "sinais-felicidade-pet": {
        title: "Como saber se meu cachorro é feliz? 7 sinais claros que ele te ama",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Todo tutor já se fez essa pergunta pelo menos uma vez: "Será que meu cachorro é realmente feliz comigo?". A culpa materna/paterna bate forte, especialmente quando precisamos deixá-los sozinhos para trabalhar. Mas a verdade é que os cães são livros abertos. Eles nos dizem o tempo todo como se sentem, nós é que às vezes não sabemos ler.
                </p>
                <p>
                    A felicidade canina não é sobre ter a cama mais cara ou o brinquedo importado. É sobre segurança, vínculo e necessidades atendidas. Confira os 7 sinais infalíveis de que você está fazendo um ótimo trabalho.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">1. O "Olhar Suave"</h2>
                <p>
                    Sabe quando seu cachorro te olha nos olhos e pisca devagar, com a expressão relaxada? Isso é um "abraço visual". A liberação de ocitocina (o hormônio do amor) acontece em ambos nesse momento. Se ele te olha assim, ele confia em você cegamente.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">2. Dormir de Barriga para Cima</h2>
                <p>
                    Na natureza, a barriga é a parte mais vulnerável de um animal. Expor a barriga é o sinal máximo de segurança e relaxamento. Se ele dorme "esparramado" no meio da sala, parabéns: ele se sente 100% seguro na sua casa.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">3. A Recepção Calorosa</h2>
                <p>
                    Não importa se você saiu por 5 minutos ou 5 horas, a festa é a mesma. O rabo abana (muitas vezes o corpo todo abana junto), ele traz brinquedos, ele "sorri". Essa alegria genuína ao te ver é o maior atestado de amor que existe.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">4. Ele te Procura Pela Casa</h2>
                <p>
                    Se ele te segue até o banheiro ou simplesmente deita no mesmo cômodo que você está, ele está praticando o "estar junto". Cães são animais sociais e a presença do líder da matilha (você) traz conforto.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">5. Apetite Saudável</h2>
                <p>
                    Um cão feliz e saudável come com gosto. A inapetência é frequentemente o primeiro sinal de depressão ou doença. Se ele faz a "dancinha da ração", é um ótimo sinal.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">6. Ele te "Convida" para Brincar</h2>
                <p>
                    A posição de "reverência" (bumbum para cima, patas dianteiras esticadas no chão) é o convite universal para a brincadeira. Cães tristes ou estressados não brincam.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">7. Suspiros Longos</h2>
                <p>
                    Sabe aquele suspiro fundo que ele dá antes de dormir? Se for acompanhado de olhos semi-cerrados, é um sinal fisiológico de contentamento profundo. É ele dizendo: "A vida é boa".
                </p>

                <div className="bg-primary/5 p-8 rounded-2xl mt-12 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4">Mas será que você pode melhorar?</h3>
                    <p className="text-lg mb-6">
                        Amar é fácil, mas cuidar exige conhecimento. Você sabe se está atendendo todas as necessidades ocultas do seu pet?
                    </p>
                    <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => window.location.href = '/quiz'}>
                        👉 Descubra seu Petscore e veja se você é o tutor que ele merece
                    </Button>
                </div>
            </div>
        )
    },
    "ansiedade-separacao": {
        title: "Meu cachorro sente saudade quando eu saio? Entenda a Ansiedade de Separação",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Você fecha a porta de casa e ouve o choro. Ou volta do trabalho e encontra o sofá destruído e xixi no lugar errado. A primeira reação pode ser frustração ("ele fez de pirraça!"), mas a realidade é muito mais triste: seu cachorro pode estar sofrendo de Ansiedade de Separação.
                </p>
                <p>
                    Não é manha, não é vingança. É pânico. Para alguns cães, ficar sozinho é a sensação de morte iminente. Vamos entender o que passa na cabeça deles e como ajudar.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">O Que é Ansiedade de Separação?</h2>
                <p>
                    É um distúrbio comportamental onde o cão entra em estado de angústia extrema quando afastado de suas figuras de apego. Os sinais clássicos são:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Vocalização excessiva:</strong> Latidos, uivos e choros contínuos assim que você sai.</li>
                    <li><strong>Destruição:</strong> Roer portas, janelas ou móveis (tentativa desesperada de "cavar" uma saída para te encontrar).</li>
                    <li><strong>Eliminação inapropriada:</strong> Xixi e cocô pela casa, mesmo em cães educados (causado pelo descontrole fisiológico do medo).</li>
                    <li><strong>Sinais pré-saída:</strong> Ele começa a ficar agitado ou deprimido assim que você pega a chave ou calça o sapato.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Por que isso acontece?</h2>
                <p>
                    Cães são animais de matilha. Na natureza, ficar sozinho é perigoso. Além disso, a pandemia (onde ficamos 24h com eles) criou uma geração de "cães velcro" que nunca aprenderam a ficar sós. Mudanças bruscas de rotina ou de casa também são gatilhos.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Ajudar (O Que Fazer e O Que NÃO Fazer)</h2>

                <h3 className="text-2xl font-semibold text-red-600 mt-6 mb-3">❌ O Erro Comum</h3>
                <p>
                    Fazer "festa" na saída e na chegada. Se você se despede com voz triste ("mamãe já volta, não chora") e volta fazendo um carnaval, você valida a ansiedade dele. Você confirma que sua saída é um evento dramático e sua volta é a única salvação.
                </p>

                <h3 className="text-2xl font-semibold text-green-600 mt-6 mb-3">✅ A Estratégia Certa</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Saídas e Chegadas Neutras:</strong> Ignore o cão 15 minutos antes de sair e 15 minutos depois de chegar. Só dê atenção quando ele estiver calmo. Isso tira o peso emocional do evento.</li>
                    <li><strong>Enriquecimento Ambiental:</strong> O cão precisa ter o que fazer. Deixe brinquedos recheáveis com comida congelada. Ele vai associar sua saída a algo gostoso (comer).</li>
                    <li><strong>Treino de Indiferença:</strong> Pegue a chave, sente no sofá. Calce o sapato, vá até a cozinha. Mostre que esses sinais nem sempre significam que você vai sumir.</li>
                </ul>

                <div className="bg-primary/5 p-8 rounded-2xl mt-12 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4">Seu pet sofre em silêncio?</h3>
                    <p className="text-lg mb-6">
                        Muitas vezes achamos que está tudo bem, mas o pet passa o dia em sofrimento. Identificar os sinais precoces é vital.
                    </p>
                    <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => window.location.href = '/quiz'}>
                        👉 Avalie o bem-estar emocional do seu pet agora
                    </Button>
                </div>
            </div>
        )
    },
    "rotina-alimentacao": {
        title: "Quantas vezes por dia devo alimentar meu cachorro? Guia por idade e porte",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    O pote está cheio, o cachorro come tudo em 30 segundos e te olha com aquela cara de "tem mais?". A dúvida é universal: será que estou dando comida de menos? Ou de mais? A alimentação é o pilar da saúde, e a frequência é tão importante quanto a qualidade.
                </p>
                <p>
                    Deixar comida à vontade (ad libitum) é um erro grave que leva à obesidade e tédio. Cães precisam de rotina. O sistema digestivo deles agradece, e o comportamento também.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">1. Filhotes (2 a 6 meses): A Fase do Crescimento</h2>
                <p>
                    Filhotes são máquinas de queimar energia e construir tecidos. Eles têm estômagos pequenos, mas necessidades calóricas gigantes.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Frequência:</strong> 3 a 4 vezes ao dia.</li>
                    <li><strong>Por que?</strong> Evita hipoglicemia (queda de açúcar) e não sobrecarrega o estômago, prevenindo vômitos.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">2. Adolescentes (6 a 12 meses)</h2>
                <p>
                    O crescimento desacelera. É hora de começar a criar a rotina de adulto.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Frequência:</strong> 2 a 3 vezes ao dia.</li>
                    <li><strong>Dica:</strong> É nessa fase que muitos cães começam a ficar seletivos. Não ceda! Estabeleça horários. Se não comeu em 15 min, retire o pote.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">3. Adultos (1 a 7 anos)</h2>
                <p>
                    A manutenção. Aqui o objetivo é manter o peso ideal e a energia constante.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Frequência:</strong> 2 vezes ao dia (manhã e noite).</li>
                    <li><strong>Por que não 1 vez?</strong> Comer um grande volume de uma só vez aumenta o risco de Torção Gástrica (especialmente em cães grandes), uma emergência fatal. Além disso, passar 24h em jejum pode causar vômitos de bile.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">4. Idosos (7+ anos)</h2>
                <p>
                    O metabolismo fica lento, a digestão mais difícil.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Frequência:</strong> 2 a 3 vezes ao dia (porções menores).</li>
                    <li><strong>Atenção:</strong> Cães idosos podem precisar de rações mais palatáveis ou levemente umedecidas.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">A Regra de Ouro: Quantidade</h2>
                <p>
                    Siga a tabela da embalagem da ração, mas use-a como <strong>guia</strong>, não lei. Se seu cão está engordando (você não sente as costelas dele ao tocar), reduza 10%. Se está muito magro, aumente. E lembre-se: petiscos contam calorias!
                </p>

                <div className="bg-primary/5 p-8 rounded-2xl mt-12 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4">Você está nutrindo ou apenas alimentando?</h3>
                    <p className="text-lg mb-6">
                        A nutrição vai muito além de encher o pote. Envolve escolha do alimento, manejo e observação. Quer saber se você é um expert em cuidados?
                    </p>
                    <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => window.location.href = '/quiz'}>
                        👉 Faça o Petscore e descubra seu nível
                    </Button>
                </div>
            </div>
        )
    },
    "linguagem-amor": {
        title: "Como o seu pet mostra amor? 10 formas carinhosas que talvez você nunca percebeu",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Nós humanos dizemos "eu te amo", damos flores e chocolates. Os cães? Bem, eles trazem um brinquedo babado, roubam sua meia ou encostam o bumbum na sua perna. A linguagem do amor canina é sutil, física e absolutamente encantadora.
                </p>
                <p>
                    Muitas vezes, esperamos demonstrações humanas de afeto e perdemos os pequenos gestos diários de devoção que eles nos oferecem. Prepare-se para se derreter com essa lista.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">1. Encostar em você (O "Lean")</h2>
                <p>
                    Quando seu cachorro vem e apoia o peso do corpo dele contra sua perna, ele não está só descansando. É um abraço canino. Ele está dizendo: "Eu confio em você, você é meu pilar".
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">2. Trazer o brinquedo favorito</h2>
                <p>
                    Não é (só) porque ele quer brincar. Aquele brinquedo é a posse mais valiosa dele. Ao trazê-lo para você, ele está compartilhando seu tesouro. É uma oferta de paz e amor.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">3. Roubar suas roupas usadas</h2>
                <p>
                    Você chega e ele está dormindo em cima da sua camiseta suja ou com sua meia na boca. Nojento? Não, amoroso. Ele quer sentir o seu cheiro. O seu cheiro é o perfume favorito dele e traz segurança.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">4. Checar você pela casa</h2>
                <p>
                    Ele está na sala, você vai para o quarto. Dois minutos depois, ele aparece na porta, te olha e volta para a sala. Ele está fazendo a "ronda". Ele só queria garantir que você está bem e seguro.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">5. Lamber seu rosto</h2>
                <p>
                    É o beijo canino clássico, herdado dos lobos (filhotes lambem a boca da mãe). É um sinal de submissão, respeito e afeto.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">6. Bocejar quando você boceja</h2>
                <p>
                    Estudos mostram que o bocejo contagioso em cães é um sinal de empatia. Eles estão sintonizados com você emocionalmente.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">7. Levantar as sobrancelhas</h2>
                <p>
                    Cientistas descobriram que cães movem mais a sobrancelha esquerda quando veem seus donos, em comparação com estranhos. É uma micro-expressão de reconhecimento e alegria.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">8. Dormir no seu quarto</h2>
                <p>
                    Mesmo que não seja na cama. O fato de ele escolher dormir no mesmo ambiente que você mostra que você é a fonte de segurança dele durante o momento mais vulnerável (o sono).
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">9. Sorrir</h2>
                <p>
                    Sim, cães sorriem! Boca relaxada, levemente aberta, língua solta. É a cara da felicidade ao te ver.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">10. Deixar você tocar a cabeça dele</h2>
                <p>
                    Para muitos animais, uma mão vindo por cima da cabeça é ameaçador. Se ele fecha os olhos e curte seu carinho na cabeça, é confiança total.
                </p>

                <div className="bg-primary/5 p-8 rounded-2xl mt-12 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4">O amor é uma via de mão dupla</h3>
                    <p className="text-lg mb-6">
                        Ele te dá todos esses sinais. E você? Está retribuindo da forma que ele entende e precisa?
                    </p>
                    <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => window.location.href = '/quiz'}>
                        👉 Descubra se você é o melhor amigo do seu cão
                    </Button>
                </div>
            </div>
        )
    },
    "enriquecimento-ambiental": {
        title: "Seu pet está entediado? 8 brincadeiras baratas que melhoram o humor e a saúde",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Um cachorro entediado é um "arquiteto do caos". Ele vai roer o pé da mesa, cavar o sofá ou latir para o vento. E a culpa não é dele! Cães são animais inteligentes que precisam de "trabalho". Na natureza, eles passariam 80% do tempo caçando e explorando. Em casa, eles ganham comida no pote e dormem.
                </p>
                <p>
                    A solução mágica chama-se <strong>Enriquecimento Ambiental</strong>. E a boa notícia: você não precisa gastar fortunas em pet shops. As melhores brincadeiras você faz com o que tem em casa.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">1. Caça ao Tesouro (Olfato)</h2>
                <p>
                    O olfato é o superpoder do cão. Cansar o nariz cansa mais que correr!
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Como fazer:</strong> Esconda grãos de ração ou petiscos pela casa (atrás da porta, embaixo do tapete, num canto do sofá). Dê o comando "busca!".</li>
                    <li><strong>Benefício:</strong> Estimulação mental intensa e autonomia.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">2. A Garrafa Pet Mágica</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Como fazer:</strong> Pegue uma garrafa pet vazia, limpa e sem o anel da tampa. Faça alguns furos na lateral (que caibam a ração). Coloque a ração dentro e tampe.</li>
                    <li><strong>O Desafio:</strong> O cão precisa rolar e bater na garrafa para a comida cair.</li>
                    <li><strong>Benefício:</strong> Resolve o problema de cães que comem rápido demais e gasta energia.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">3. Caixa de Papelão Surpresa</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Como fazer:</strong> Pegue uma caixa de sapato ou de entrega. Encha com bolinhas de papel amassado, rolos de papel higiênico vazios e jogue petiscos no meio dessa bagunça.</li>
                    <li><strong>O Desafio:</strong> Ele tem que "fuçar" para achar a comida.</li>
                    <li><strong>Benefício:</strong> Simula o ato de vasculhar a natureza.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">4. Cubos de Gelo Recheados</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Como fazer:</strong> Congele pedaços de fruta (maçã, banana) ou caldo de carne natural (sem tempero!) em formas de gelo.</li>
                    <li><strong>Benefício:</strong> Ótimo para dias quentes e para aliviar coceira na gengiva de filhotes.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">5. Toalha Enrolada</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Como fazer:</strong> Estique uma toalha velha. Espalhe ração. Enrole a toalha como um rocambole.</li>
                    <li><strong>O Desafio:</strong> O cão precisa desenrolar com o focinho e patas para comer.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">6. Cabo de Guerra (Do jeito certo)</h2>
                <p>
                    Muitos acham que deixa o cão agressivo, mas é mentira. É um ótimo gasto de energia e vínculo. A regra é: se o dente encostar na sua mão, o jogo acaba. Você controla o início e o fim.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">7. Treino de Truques</h2>
                <p>
                    15 minutos ensinando "senta", "fica" ou "dá a pata" cansam mais que 1 hora de caminhada. O esforço cognitivo é enorme.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">8. Massagem Relaxante</h2>
                <p>
                    Enriquecimento também é sensorial. Uma massagem lenta nas orelhas e costas acalma cães ansiosos e fortalece o vínculo.
                </p>

                <div className="bg-primary/5 p-8 rounded-2xl mt-12 border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4">Seu cão é feliz ou apenas "existe"?</h3>
                    <p className="text-lg mb-6">
                        A diferença entre um cão que sobrevive e um cão que vive plenamente está nos detalhes da rotina. Você está proporcionando a melhor vida possível?
                    </p>
                    <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => window.location.href = '/quiz'}>
                        👉 Descubra seu nível de dedicação no Petscore
                    </Button>
                </div>
            </div>
        )
    },
    "frutas-permitidas-cachorro": {
        title: "Frutas que Cachorros Podem Comer: Guia Seguro e Saudável",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Muitos tutores têm dúvida se podem compartilhar aquela fruta do café da manhã com o pet. A resposta é: sim, mas com cuidado! Frutas são ótimos petiscos naturais, ricos em vitaminas e antioxidantes, mas algumas partes (como sementes) podem ser perigosas.
                </p>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">As 5 Melhores Frutas para Cães</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Banana:</strong> Rica em potássio e fibras. Ótima para dar energia, mas com moderação devido ao açúcar.</li>
                    <li><strong>Maçã:</strong> Excelente fonte de vitaminas A e C. <strong>Atenção:</strong> Retire sempre o miolo e as sementes, que contêm cianeto (tóxico).</li>
                    <li><strong>Melancia:</strong> Perfeita para hidratação no verão (92% água). Sirva sem casca e sem sementes.</li>
                    <li><strong>Morango:</strong> Cheio de antioxidantes e ajuda a clarear os dentes (contém uma enzima especial).</li>
                    <li><strong>Manga:</strong> Doce e nutritiva. Retire o caroço, que pode causar engasgo e obstrução.</li>
                </ul>
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-yellow-800 mb-2">⚠️ Regra de Ouro</h3>
                    <p>Frutas devem ser apenas <strong>petiscos</strong> (máximo 10% das calorias diárias). O excesso pode causar diarreia ou obesidade.</p>
                </div>
            </div>
        )
    },
    "alimentos-proibidos-pets": {
        title: "Alimentos Proibidos: O Que Nunca Dar para Seu Pet",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Aquele olhar de "pidão" pode ser irresistível, mas ceder pode custar a vida do seu amigo. O metabolismo de cães e gatos é diferente do nosso, e alimentos inofensivos para humanos podem ser veneno para eles.
                </p>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Lista Negra da Nutrição Pet</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Chocolate:</strong> O grande vilão. Contém teobromina, que causa arritmia cardíaca, tremores e convulsões. Chocolate amargo é ainda pior.</li>
                    <li><strong>Uvas e Uvas-passas:</strong> Podem causar falência renal aguda súbita. Nunca ofereça, nem uma única uva.</li>
                    <li><strong>Cebola e Alho:</strong> Destroem os glóbulos vermelhos, causando anemia grave. Cuidado com restos de comida caseira temperada.</li>
                    <li><strong>Abacate:</strong> Contém persina, que pode causar vômitos e diarreia em cães (e é fatal para aves).</li>
                    <li><strong>Xilitol (Adoçante):</strong> Presente em gomas de mascar e doces diet. Causa hipoglicemia rápida e falência hepática.</li>
                </ul>
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-red-800 mb-2">🚑 Emergência!</h3>
                    <p>Se seu pet ingeriu algo dessa lista, não espere os sintomas. Corra para o veterinário imediatamente. Leve a embalagem do produto se possível.</p>
                </div>
            </div>
        )
    },
    "obesidade-pet-perigos": {
        title: "Obesidade em Pets: Riscos Ocultos e Como Reverter",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Um pet "gordinho" pode parecer fofo, mas a obesidade é uma doença inflamatória crônica que rouba anos de vida do seu companheiro. Estima-se que mais de 50% dos pets no Brasil estão acima do peso.
                </p>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Os Perigos do Excesso de Peso</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Articulações:</strong> O peso extra destrói joelhos e quadris (artrose), causando dor constante.</li>
                    <li><strong>Diabetes:</strong> Muito comum em gatos obesos, exigindo injeções diárias de insulina.</li>
                    <li><strong>Coração e Pulmão:</strong> A gordura comprime o tórax, dificultando a respiração e sobrecarregando o coração.</li>
                </ul>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Saber se Ele Está Obeso?</h2>
                <p>Faça o teste do toque: você deve conseguir sentir as costelas dele facilmente ao passar a mão, mas não vê-las. Se tiver que apertar para achar a costela, ele precisa de dieta.</p>
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">💡 Dica de Dieta</h3>
                    <p>Não basta reduzir a ração (isso pode causar deficiência nutricional). Troque por uma ração <strong>Light</strong> ou <strong>Obesity</strong> e use brinquedos interativos para ele "caçar" a comida.</p>
                </div>
            </div>
        )
    },
    "hidratacao-gatos-guia": {
        title: "Hidratação de Gatos: Por Que Eles Bebem Pouca Água?",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Gatos são descendentes de felinos do deserto. Na natureza, eles obtinham água quase exclusivamente da caça (presas têm 70% de água). Por isso, eles têm baixo instinto de sede. O problema? Ração seca tem apenas 10% de água.
                </p>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">O Risco Renal</h2>
                <p>A falta de água concentra a urina, formando cristais e cálculos que bloqueiam a uretra (emergência gravíssima) e levando à Doença Renal Crônica a longo prazo.</p>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Fazer o Gato Beber Mais Água</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Fontes de Água:</strong> Gatos amam água corrente e fresca. Invista em uma fonte elétrica.</li>
                    <li><strong>Espalhe Potes:</strong> Tenha vários potes pela casa (longe da caixa de areia!).</li>
                    <li><strong>Sachê Todo Dia:</strong> A ração úmida é a melhor prevenção. Dê pelo menos meio sachê por dia, misturado com um pouco de água morna ("sopinha").</li>
                </ul>
                <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-cyan-800 mb-2">💧 Teste da Pele</h3>
                    <p>Puxe levemente a pele da nuca do gato. Se ela demorar para voltar ao lugar, ele pode estar desidratado. Ofereça água ou vá ao vet.</p>
                </div>
            </div>
        )
    },
    "como-trocar-racao": {
        title: "Como Trocar a Ração do Pet Sem Causar Problemas",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Decidiu mudar a marca da ração? Ótimo, mas não faça isso de um dia para o outro! O sistema digestivo dos pets é sensível e habituado à fórmula atual. A troca brusca causa "bomba relógio": vômitos, gases e diarreia líquida.
                </p>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">A Regra dos 7 Dias</h2>
                <p>A transição deve ser gradual para adaptar a flora intestinal. Siga este cronograma:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Dias 1 e 2:</strong> 25% da Nova + 75% da Antiga.</li>
                    <li><strong>Dias 3 e 4:</strong> 50% da Nova + 50% da Antiga.</li>
                    <li><strong>Dias 5 e 6:</strong> 75% da Nova + 25% da Antiga.</li>
                    <li><strong>Dia 7 em diante:</strong> 100% da Nova.</li>
                </ul>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Sinais de Alerta</h2>
                <p>Se durante a troca o pet apresentar fezes moles, volte um passo (reduza a quantidade da nova) e mantenha por mais dias. Se persistir, a nova ração pode não ser adequada para ele (alergia ou intolerância).</p>
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-2">🥣 Dica Extra</h3>
                    <p>Misture bem os grãos. Se o pet for esperto e separar as bolinhas, você pode usar um pouco de água morna ou sachê para "grudar" os cheiros e sabores.</p>
                </div>
            </div>
        )
    },
    "tendencias-tech-pet-2026": {
        title: "Tecnologia Pet em 2026: As Inovações que Vão Revolucionar o Cuidado",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    O mercado pet está passando por uma revolução tecnológica sem precedentes. Em 2026, cuidar do seu pet será mais inteligente, conectado e personalizado do que nunca. Veja as principais tendências que já estão transformando a vida de tutores e pets ao redor do mundo.
                </p>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">1. Coleiras e Comedouros Inteligentes</h2>
                <p>
                    As coleiras GPS evoluíram. Agora elas monitoram batimentos cardíacos, temperatura corporal, níveis de atividade e até padrões de sono. Você recebe alertas no celular se algo estiver fora do normal.
                </p>
                <p>
                    Comedouros automáticos com IA reconhecem o pet pela foto, liberam a porção exata de ração e enviam relatórios nutricionais para o veterinário. Alguns modelos já detectam se o pet está comendo menos (sinal de doença).
                </p>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">2. Telemedicina Veterinária</h2>
                <p>
                    Consultas por vídeo com veterinários se tornaram rotina. Aplicativos permitem que você tire dúvidas rápidas, receba prescrições digitais e agende exames sem sair de casa. Ideal para pets ansiosos que sofrem no transporte.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">💡 Destaque 2026</h3>
                    <p>Câmeras com IA que analisam fezes e urina em tempo real, alertando sobre infecções urinárias, diabetes ou problemas renais antes dos sintomas aparecerem.</p>
                </div>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">3. Genética Personalizada</h2>
                <p>
                    Testes de DNA para pets estão mais acessíveis. Por R$ 300-500, você descobre predisposições genéticas a doenças, intolerâncias alimentares e até traços de personalidade. Isso permite criar um plano preventivo sob medida.
                </p>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">4. Realidade Aumentada para Adestramento</h2>
                <p>
                    Aplicativos de AR projetam comandos visuais no ambiente real, facilitando o treinamento. O pet aprende mais rápido com estímulos visuais interativos que aparecem no chão ou nas paredes.
                </p>
            </div>
        )
    },
    "sustentabilidade-pet-2026": {
        title: "Sustentabilidade no Mundo Pet: A Revolução Verde de 2026",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    A consciência ambiental chegou ao mercado pet com força total. Tutores estão exigindo produtos ecológicos, e as marcas estão respondendo com inovações surpreendentes. Conheça as tendências sustentáveis que estão moldando 2026.
                </p>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Rações com Proteína de Insetos</h2>
                <p>
                    A proteína de grilos e larvas está substituindo carne bovina em rações premium. Vantagens: 80% menos emissão de CO2, alto valor nutricional e hipoalergênico. Marcas brasileiras já lançaram linhas completas.
                </p>
                <p>
                    Pets aceitam bem o sabor (é adicionado palatabilizante natural), e os resultados em pelagem e digestão são excelentes.
                </p>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Embalagens Biodegradáveis e Refil</h2>
                <p>
                    Sacolas de ração feitas de amido de mandioca que se decompõem em 90 dias. Sistemas de refil em pet shops, onde você leva seu próprio recipiente e paga apenas pelo produto.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-2">🌱 Inovação Brasileira</h3>
                    <p>Startups nacionais criaram saquinhos de cocô feitos de cana-de-açúcar que viram adubo em composteiras domésticas. Já são vendidos em grandes redes.</p>
                </div>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Brinquedos de Material Reciclado</h2>
                <p>
                    Brinquedos feitos de garrafas PET, redes de pesca retiradas do oceano e borracha reciclada de pneus. Duráveis, seguros e com design moderno.
                </p>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Energia Solar em Petshops</h2>
                <p>
                    Grandes redes estão investindo em painéis solares e sistemas de captação de água da chuva. Alguns oferecem desconto para clientes que levam embalagens para reciclagem.
                </p>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Crematórios Ecológicos</h2>
                <p>
                    Aquamação (cremação por água alcalina) está substituindo a cremação tradicional. Usa 90% menos energia e não emite gases tóxicos. As cinzas podem ser usadas como adubo.
                </p>
            </div>
        )
    },
    "bem-estar-pet-2026": {
        title: "Bem-Estar Pet em 2026: Saúde Mental e Qualidade de Vida",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    O conceito de bem-estar animal evoluiu. Não basta alimentar e vacinar. Em 2026, tutores estão investindo em saúde mental, enriquecimento ambiental e terapias holísticas para garantir que seus pets vivam plenamente felizes.
                </p>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Terapia Comportamental Profissional</h2>
                <p>
                    Comportamentalistas certificados estão em alta. Eles tratam ansiedade de separação, agressividade, fobias e traumas com técnicas baseadas em ciência (condicionamento positivo, dessensibilização).
                </p>
                <p>
                    Planos de saúde pet já cobrem sessões de terapia comportamental, reconhecendo que saúde mental é tão importante quanto física.
                </p>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Creches e Hotéis com Enriquecimento</h2>
                <p>
                    Creches modernas oferecem piscinas, circuitos de agility, sessões de musicoterapia e até aromaterapia. Câmeras 24h permitem que você acompanhe em tempo real.
                </p>
                <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-purple-800 mb-2">🎵 Novidade</h3>
                    <p>Playlists específicas para pets no Spotify e Apple Music, com frequências sonoras que reduzem ansiedade e melhoram o sono. Estudos comprovam eficácia!</p>
                </div>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Fisioterapia e Acupuntura</h2>
                <p>
                    Tratamentos antes restritos a pets de competição agora são acessíveis. Fisioterapia aquática para cães idosos com artrose, acupuntura para dor crônica e quiropraxia para problemas de coluna.
                </p>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Suplementos Funcionais</h2>
                <p>
                    Ômega-3 para cérebro, probióticos para intestino, colágeno para articulações, CBD (canabidiol) para ansiedade. Tudo com dosagem veterinária e estudos clínicos.
                </p>
                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Espaços Pet-Friendly</h2>
                <p>
                    Restaurantes, shoppings, escritórios e até academias estão se adaptando para receber pets. Áreas de descanso, bebedouros e até cardápios especiais para cães e gatos.
                </p>
                <div className="bg-pink-50 border border-pink-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-pink-800 mb-2">❤️ Tendência Emocional</h3>
                    <p>Sessões de "pet yoga" e meditação guiada para tutores e pets juntos. O vínculo se fortalece e ambos relaxam. Já existem estúdios especializados em grandes cidades.</p>
                </div>
            </div>
        )
    }
};

const Article = () => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const article = articles[slug as keyof typeof articles];

    useEffect(() => {
        if (article) {
            document.title = `${article.title} | PetScore Blog`;
        }
        return () => {
            document.title = "PetScore - O Quiz Oficial dos Pais de Pet";
        };
    }, [article]);

    if (!article) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
                <Button onClick={() => navigate("/")}>Voltar para Home</Button>
            </div>
        );
    }

    const otherArticles = Object.entries(articles)
        .filter(([key]) => key !== slug)
        .slice(0, 2);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1 p-8">
                <div className="max-w-3xl mx-auto space-y-8">
                    <Button variant="ghost" onClick={() => navigate("/blog")} className="gap-2">
                        <ArrowLeft className="w-4 h-4" /> Voltar para o Blog
                    </Button>

                    <article className="prose prose-lg max-w-none">
                        <div className={`h-64 flex items-center justify-center rounded-2xl mb-8 ${getArticleConfig(slug || '').color}`}>
                            {(() => {
                                const Icon = getArticleConfig(slug || '').icon;
                                return <Icon className="w-24 h-24 opacity-80" strokeWidth={1.5} />;
                            })()}
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 leading-tight">{article.title}</h1>
                        <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 text-foreground">
                            {article.content}
                        </div>
                    </article>

                    <div className="flex justify-center">
                        <Button
                            onClick={async () => {
                                try {
                                    if (navigator.share) {
                                        await navigator.share({
                                            title: article.title,
                                            text: `Confira este artigo do PetScore: ${article.title}`,
                                            url: window.location.href
                                        });
                                    } else {
                                        await navigator.clipboard.writeText(window.location.href);
                                        // Create a simple toast notification
                                        const toast = document.createElement('div');
                                        toast.className = 'fixed bottom-4 right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg z-50 animate-in slide-in-from-bottom-5';
                                        toast.textContent = '✓ Link copiado!';
                                        document.body.appendChild(toast);
                                        setTimeout(() => {
                                            toast.remove();
                                        }, 3000);
                                    }
                                } catch (error) {
                                    console.log('Compartilhamento cancelado ou erro:', error);
                                }
                            }}
                            className="gap-2"
                            size="lg"
                        >
                            <Share2 className="w-4 h-4" />
                            Compartilhar Artigo
                        </Button>
                    </div>

                    <hr className="border-border" />

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-foreground">Leia Também</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {otherArticles.map(([key, item]) => (
                                <div
                                    key={key}
                                    onClick={() => {
                                        navigate(`/blog/${key}`);
                                        window.scrollTo(0, 0);
                                    }}
                                    className="bg-card overflow-hidden rounded-xl shadow-sm border border-border/50 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group flex flex-col"
                                >
                                    <div className={`h-32 flex items-center justify-center ${getArticleConfig(key).color} transition-colors`}>
                                        {(() => {
                                            const Icon = getArticleConfig(key).icon;
                                            return <Icon className="w-12 h-12 opacity-80 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />;
                                        })()}
                                    </div>
                                    <div className="p-4 flex flex-col flex-1">
                                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <span className="text-primary text-sm font-medium flex items-center gap-1 mt-auto">
                                            Ler artigo <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Article;
