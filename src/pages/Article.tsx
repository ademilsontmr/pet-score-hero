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
    },
    "racao-para-cachorro-guia": {
        title: "Ração para Cachorro: Guia Completo para Escolher a Melhor em 2026",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Escolher a ração ideal para o seu cachorro pode parecer simples, mas é uma das decisões mais importantes para garantir saúde, energia e longevidade do seu melhor amigo. Com tantas opções no mercado brasileiro, entender os tipos, ingredientes e necessidades específicas é fundamental.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Tipos de Ração para Cachorro</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Ração Seca (Kibble)</h3>
                <p>
                    A ração seca é a mais popular no Brasil. Oferece praticidade, longa validade e ajuda na limpeza dos dentes pela mastigação. Marcas premium como Royal Canin, Premier Pet e Farmina oferecem fórmulas balanceadas com proteínas de qualidade, vitaminas e minerais essenciais.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Ração Úmida (Sachê e Lata)</h3>
                <p>
                    Com 70-80% de umidade, a ração úmida é ideal para cães que bebem pouca água ou têm problemas dentários. Marcas como Pedigree, Golden e N&D oferecem sabores variados. Pode ser usada como complemento ou refeição principal, mas tem custo mais elevado.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Ração Natural e Grain-Free</h3>
                <p>
                    Rações sem grãos (grain-free) são indicadas para cães com alergias ou sensibilidade alimentar. Marcas como Guabi Natural, Biofresh e Herói utilizam batata-doce, ervilha e proteínas nobres como salmão e cordeiro. São mais caras, mas reduzem problemas digestivos.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Escolher a Ração Certa</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Por Idade</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Filhotes (até 12 meses):</strong> Precisam de ração com mais proteína (mínimo 28%) e cálcio para crescimento ósseo.</li>
                    <li><strong>Adultos (1-7 anos):</strong> Fórmulas de manutenção com equilíbrio entre proteína (22-26%) e gordura.</li>
                    <li><strong>Idosos (7+ anos):</strong> Rações light com menos calorias, mais fibras e suplementos para articulações (glucosamina).</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Por Porte</h3>
                <p>
                    Cães pequenos (até 10kg) precisam de grãos menores e mais energia por quilo. Raças grandes (acima de 25kg) necessitam de fórmulas com condroitina para proteger as articulações e evitar torção gástrica.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Ingredientes que Você Deve Procurar</h2>
                <p>
                    A proteína deve ser o primeiro ingrediente da lista. Prefira fontes identificadas como "frango", "cordeiro" ou "salmão" ao invés de "subprodutos de carne". Evite rações com corantes artificiais (vermelho 40, amarelo 5) e excesso de milho ou trigo como base.
                </p>

                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-orange-800 mb-2">💡 Dica de Veterinário</h3>
                    <p>Leia sempre os 5 primeiros ingredientes da embalagem. Eles representam 80% da composição. Se aparecer "farinha de carne" ou "gordura animal" sem especificar a origem, desconfie da qualidade.</p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Quanto Custa uma Ração de Qualidade?</h2>
                <p>
                    Rações econômicas custam R$ 80-150 por 15kg, mas têm baixo valor nutricional. Rações premium (R$ 200-400/15kg) oferecem melhor digestibilidade e menos fezes. Rações super premium (R$ 400-700/15kg) usam ingredientes humanos e são hipoalergênicas.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Erros Comuns ao Escolher Ração</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Trocar de marca constantemente (causa diarreia)</li>
                    <li>Escolher apenas pelo preço sem ler ingredientes</li>
                    <li>Dar ração de gato para cachorro (excesso de proteína prejudica rins)</li>
                    <li>Não ajustar a quantidade conforme atividade física</li>
                </ul>

                <p>
                    Investir em ração de qualidade previne obesidade, alergias e doenças renais, economizando em consultas veterinárias no futuro. Consulte sempre um veterinário para recomendações personalizadas.
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Quer saber o nível de cuidado com seu pet?</h3>
                    <p className="mb-6 text-lg">Faça nosso quiz gratuito e descubra seu PetScore oficial!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Descobrir meu PetScore
                    </Button>
                </div>
            </div>
        )
    },
    "racao-para-gato-guia": {
        title: "Ração para Gato: Como Escolher a Melhor Nutrição Felina em 2026",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Gatos são carnívoros obrigatórios com necessidades nutricionais únicas. Escolher a ração certa não é apenas sobre sabor, mas sobre fornecer proteínas de alta qualidade, taurina essencial e o equilíbrio perfeito de nutrientes para uma vida longa e saudável.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Diferenças Entre Ração de Gato e Cachorro</h2>
                <p>
                    Nunca dê ração de cachorro para gatos! Gatos precisam de 26-30% de proteína (vs 18-22% para cães) e taurina, um aminoácido que previne problemas cardíacos e cegueira. Rações felinas também têm mais gordura para energia e menos carboidratos.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Tipos de Ração para Gato</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Ração Seca para Gatos</h3>
                <p>
                    Marcas como Royal Canin Feline, Premier Pet Ambientes Internos e Purina Pro Plan oferecem fórmulas específicas. A ração seca ajuda a reduzir tártaro, mas deve ser combinada com água fresca sempre disponível.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Ração Úmida (Sachê e Patê)</h3>
                <p>
                    Essencial para hidratação! Sachês da Whiskas, Golden Gatos e N&D têm 75-80% de água. Veterinários recomendam pelo menos 1 sachê por dia, especialmente para gatos com histórico de problemas urinários ou renais.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Ração Grain-Free</h3>
                <p>
                    Gatos não precisam de grãos. Rações grain-free da Farmina, Biofresh e Guabi Natural usam batata e ervilha. Ideais para gatos com alergias, vômitos frequentes ou diarreia crônica.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Escolha por Necessidade Específica</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Gatos Castrados</h3>
                <p>
                    Após a castração, o metabolismo desacelera 30%. Rações específicas como Royal Canin Sterilised têm menos calorias e L-carnitina para queimar gordura.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Gatos com Problemas Urinários</h3>
                <p>
                    Fórmulas urinárias controlam pH da urina e reduzem cristais de estruvita. Essenciais para gatos que já tiveram obstrução uretral.
                </p>

                <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-purple-800 mb-2">🐱 Atenção</h3>
                    <p>Introduza novas rações gradualmente (7-10 dias) misturando com a antiga. Se recusar, aqueça levemente o sachê para liberar aroma.</p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Ingredientes Essenciais</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Proteína animal:</strong> Frango, peixe ou carne devem ser os primeiros ingredientes</li>
                    <li><strong>Taurina:</strong> Mínimo 0,1% (essencial para coração e visão)</li>
                    <li><strong>Ômega 3 e 6:</strong> Para pelagem brilhante</li>
                </ul>

                <p>
                    Investir em ração de qualidade previne doenças renais crônicas, a principal causa de morte em gatos domésticos.
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Quer saber o nível de cuidado com seu pet?</h3>
                    <p className="mb-6 text-lg">Faça nosso quiz gratuito e descubra seu PetScore oficial!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Descobrir meu PetScore
                    </Button>
                </div>
            </div>
        )
    },
    "areia-para-gato-guia": {
        title: "Areia para Gato: Guia Completo dos Melhores Tipos em 2026",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    A escolha da areia sanitária pode determinar se seu gato vai usar a caixa corretamente ou fazer suas necessidades em lugares indesejados. Entender os tipos, vantagens e como escolher a melhor opção é essencial para a higiene e bem-estar felino.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Tipos de Areia para Gato</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Areia Aglomerante (Bentonita)</h3>
                <p>
                    A mais popular no Brasil. Marcas como Pipicat, Chalesco e Jambo formam "bolinhas" sólidas ao contato com urina, facilitando a limpeza. Você remove apenas os dejetos, economizando produto. Controla bem o odor e dura 15-20 dias para um gato.
                </p>
                <p>
                    <strong>Vantagens:</strong> Econômica, fácil de limpar, baixo desperdício.<br />
                    <strong>Desvantagens:</strong> Pode grudar nas patas e espalhar pela casa. Não deve ser descartada no vaso sanitário.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Areia de Sílica (Cristais)</h3>
                <p>
                    Cristais de gel de sílica absorvem líquidos e neutralizam odores por até 30 dias. Marcas como Chalesco Sílica e Petlike são mais caras, mas rendem muito. Ideais para quem viaja ou tem pouco tempo para limpeza diária.
                </p>
                <p>
                    <strong>Vantagens:</strong> Máxima absorção, sem poeira, longa duração.<br />
                    <strong>Desvantagens:</strong> Preço elevado (R$ 40-80 por 3,6L), alguns gatos rejeitam a textura.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Areia Biodegradável (Madeira, Milho, Papel)</h3>
                <p>
                    Opções ecológicas da Chalesco Eco, Catbamboo e Pipicat Vegetal. Feitas de resíduos de madeira, milho ou papel reciclado. Podem ser descartadas no vaso sanitário (em pequenas quantidades) ou compostadas.
                </p>
                <p>
                    <strong>Vantagens:</strong> Sustentáveis, biodegradáveis, sem químicos.<br />
                    <strong>Desvantagens:</strong> Menor controle de odor, precisam ser trocadas com mais frequência.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Escolher a Areia Ideal</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Para Filhotes</h3>
                <p>
                    Evite areias aglomerantes! Filhotes podem ingerir a areia por curiosidade, e a bentonita expande no estômago causando obstrução. Use areia de sílica ou biodegradável até 6 meses de idade.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Para Múltiplos Gatos</h3>
                <p>
                    A regra é: número de gatos + 1 caixa. Com vários gatos, areias aglomerantes premium (Pipicat Clássica, Chalesco Premium) são mais econômicas. Troque completamente a cada 10 dias.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Para Gatos Alérgicos</h3>
                <p>
                    Areias com perfume podem causar espirros e irritação. Opte por versões sem fragrância ou areias naturais de madeira. Se o gato coça muito o nariz após usar a caixa, troque o tipo.
                </p>

                <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-cyan-800 mb-2">💡 Dica de Ouro</h3>
                    <p>Mantenha 5-7cm de altura de areia na caixa. Gatos gostam de cavar antes e depois. Menos que isso, eles podem rejeitar a caixa.</p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Quanto Custa e Quanto Rende?</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Areia comum (não aglomerante):</strong> R$ 8-15 por 4kg. Rende 7-10 dias. Precisa trocar tudo.</li>
                    <li><strong>Areia aglomerante:</strong> R$ 20-40 por 4kg. Rende 15-20 dias. Econômica no longo prazo.</li>
                    <li><strong>Areia de sílica:</strong> R$ 40-80 por 3,6L. Rende 30 dias. Melhor custo-benefício para quem tem 1 gato.</li>
                    <li><strong>Areia biodegradável:</strong> R$ 25-50 por 4kg. Rende 10-15 dias. Valor agregado: sustentabilidade.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Erros Comuns</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Colocar a caixa perto da comida (gatos não fazem necessidades onde comem)</li>
                    <li>Não limpar diariamente (gatos são extremamente higiênicos)</li>
                    <li>Trocar de marca constantemente (confunde o gato)</li>
                    <li>Usar caixa pequena demais (deve ter 1,5x o tamanho do gato)</li>
                </ul>

                <p>
                    A areia certa, combinada com limpeza diária e caixa adequada, garante que seu gato use o banheiro corretamente e mantém sua casa sem odores.
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Quer saber o nível de cuidado com seu pet?</h3>
                    <p className="mb-6 text-lg">Faça nosso quiz gratuito e descubra seu PetScore oficial!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Descobrir meu PetScore
                    </Button>
                </div>
            </div>
        )
    },
    "tapete-higienico-cachorro-guia": {
        title: "Tapete Higiênico para Cachorro: Guia Completo de Uso e Treinamento",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Tapetes higiênicos são essenciais para filhotes em treinamento, cães idosos com incontinência ou pets que vivem em apartamentos sem acesso fácil à rua. Escolher o tipo certo e treinar adequadamente faz toda a diferença entre sucesso e frustração.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Tipos de Tapete Higiênico</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Tapetes Descartáveis</h3>
                <p>
                    Os mais comuns no mercado. Marcas como Petix, Chalesco e Jambo oferecem pacotes com 30-80 unidades. Têm camadas absorventes com gel que retém líquidos e neutraliza odores. Ideais para uso diário, mas geram resíduos.
                </p>
                <p>
                    <strong>Tamanhos:</strong> 60x60cm (pequeno porte), 60x80cm (médio porte), 80x90cm (grande porte).<br />
                    <strong>Custo:</strong> R$ 40-80 por pacote de 30 unidades (R$ 1,30-2,60 por tapete).
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Tapetes Laváveis (Reutilizáveis)</h3>
                <p>
                    Feitos de tecido absorvente com camada impermeável. Marcas como Chalesco Eco e Petlike oferecem tapetes que duram 6-12 meses. Você lava na máquina e reutiliza. Econômicos e sustentáveis a longo prazo.
                </p>
                <p>
                    <strong>Vantagens:</strong> Economia (1 tapete lavável = 300 descartáveis), ecológico.<br />
                    <strong>Desvantagens:</strong> Investimento inicial maior (R$ 80-150), precisa lavar frequentemente.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Grama Sintética com Bandeja</h3>
                <p>
                    Simula grama real. O xixi escorre para uma bandeja inferior que você esvazia e lava. Ideal para cães que preferem fazer necessidades em superfícies naturais. Marcas como Petgrama e Chalesco Grama são populares.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Treinar seu Cão a Usar o Tapete</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Passo 1: Escolha o Local Certo</h3>
                <p>
                    Coloque o tapete em um local fixo, longe da comida e água. Cães não fazem necessidades onde comem. Escolha um canto tranquilo, de preferência perto da porta (facilita transição para rua depois).
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Passo 2: Estabeleça Rotina</h3>
                <p>
                    Leve o filhote ao tapete após acordar, comer, beber água e brincar. Filhotes fazem xixi a cada 2-3 horas. Use comando verbal como "faz xixi" sempre no mesmo tom.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Passo 3: Recompense Imediatamente</h3>
                <p>
                    Quando o cão usar o tapete, elogie efusivamente e dê petisco na hora. O reforço positivo deve ser instantâneo (até 3 segundos após o ato) para o cão associar corretamente.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">⚠️ Nunca Faça Isso</h3>
                    <p>Não brigue se o cão fizer fora do tapete. Ele não entende punição após o fato. Apenas limpe com produto enzimático para remover o cheiro e continue o treino positivo.</p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Quantos Tapetes Usar por Dia?</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Filhotes (2-4 meses):</strong> 4-6 tapetes/dia (fazem xixi muito frequentemente)</li>
                    <li><strong>Filhotes (4-6 meses):</strong> 3-4 tapetes/dia</li>
                    <li><strong>Adultos treinados:</strong> 2-3 tapetes/dia</li>
                    <li><strong>Idosos com incontinência:</strong> 4-5 tapetes/dia</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Dicas para Economizar</h2>
                <p>
                    Compre pacotes grandes (80-100 unidades) em promoções. Alguns petshops oferecem assinatura com 15% de desconto. Para cães pequenos, você pode cortar tapetes grandes ao meio, dobrando o rendimento.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Transição do Tapete para a Rua</h2>
                <p>
                    Após vacinas completas (4 meses), comece a levar o cão para rua nos horários que ele usaria o tapete. Leve um pedaço do tapete usado para a rua - o cheiro ajuda na associação. Reduza gradualmente os tapetes em casa.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Problemas Comuns e Soluções</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Cão rasga o tapete:</strong> Use suporte/bandeja para fixar. Brinque mais para gastar energia.</li>
                    <li><strong>Faz ao lado do tapete:</strong> Aumente o tamanho ou use 2 tapetes juntos.</li>
                    <li><strong>Só faz cocô fora:</strong> Normal. Cocô exige mais privacidade. Seja paciente.</li>
                </ul>

                <p>
                    Com consistência e paciência, a maioria dos cães aprende a usar o tapete em 2-4 semanas. Cães adultos podem levar mais tempo para desaprender hábitos antigos.
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Quer saber o nível de cuidado com seu pet?</h3>
                    <p className="mb-6 text-lg">Faça nosso quiz gratuito e descubra seu PetScore oficial!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Descobrir meu PetScore
                    </Button>
                </div>
            </div>
        )
    },
    "antipulgas-cachorro-gato-guia": {
        title: "Antipulgas para Cães e Gatos: Guia Completo de Produtos em 2026",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Pulgas não são apenas incômodas - elas transmitem doenças graves como verminoses e causam dermatite alérgica. Escolher o antipulgas certo e usar corretamente é fundamental para proteger seu pet e sua família. Conheça os tipos, eficácia e como aplicar.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Tipos de Antipulgas</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Coleiras Antipulgas</h3>
                <p>
                    Marcas como Seresto (Bayer) e Scalibor liberam princípios ativos gradualmente por 6-8 meses. Eficazes contra pulgas, carrapatos e até mosquitos transmissores de leishmaniose. Ideais para quem esquece aplicações mensais.
                </p>
                <p>
                    <strong>Vantagens:</strong> Longa duração, praticidade, proteção contínua.<br />
                    <strong>Desvantagens:</strong> Custo inicial alto (R$ 150-250), pode causar irritação no pescoço em pets sensíveis.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Pipetas (Spot-On)</h3>
                <p>
                    Aplicadas na pele entre as escápulas. Marcas como Frontline, Advantage e Revolution protegem por 30 dias. Fáceis de aplicar e eficazes. Importante: não dar banho 48h antes e depois da aplicação.
                </p>
                <p>
                    <strong>Vantagens:</strong> Aplicação rápida, ação rápida (mata pulgas em 24h).<br />
                    <strong>Desvantagens:</strong> Precisa reaplicar mensalmente, pode sair com banhos frequentes.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Comprimidos (Via Oral)</h3>
                <p>
                    Bravecto, Simparic e NexGard são comprimidos mastigáveis que protegem por 1-3 meses. Ação sistêmica: a pulga morre ao picar o pet. Não sai com banho e é ideal para pets que nadam ou tomam banho frequentemente.
                </p>
                <p>
                    <strong>Vantagens:</strong> Máxima eficácia, não sai com água, proteção prolongada.<br />
                    <strong>Desvantagens:</strong> Preço elevado (R$ 80-150/dose), alguns pets recusam o comprimido.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Sprays e Shampoos</h3>
                <p>
                    Soluções rápidas para infestações agudas. Sprays como Frontline Spray matam pulgas em minutos. Shampoos antipulgas (Sanol, Petix) limpam e eliminam pulgas visíveis, mas não previnem reinfestação.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Diferenças Entre Cães e Gatos</h2>
                <p>
                    <strong>ATENÇÃO:</strong> Nunca use antipulgas de cachorro em gatos! Produtos com permetrina (comum em antipulgas caninos) são fatais para gatos, causando convulsões e morte. Sempre use produtos específicos para felinos.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-red-800 mb-2">🚨 Emergência</h3>
                    <p>Se aplicou produto canino em gato por engano, lave imediatamente com água e sabão neutro e corra para o veterinário. Cada minuto conta!</p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Escolher o Melhor Antipulgas</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Por Estilo de Vida</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Pet que sai muito:</strong> Comprimidos (Bravecto, Simparic) - não saem com chuva</li>
                    <li><strong>Pet caseiro:</strong> Pipetas mensais são suficientes</li>
                    <li><strong>Pet que nada:</strong> Comprimidos ou coleiras</li>
                    <li><strong>Múltiplos pets:</strong> Coleiras (evita lambidas entre eles)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Por Idade</h3>
                <p>
                    Filhotes abaixo de 8 semanas: use apenas produtos específicos para filhotes (Frontline Spray a partir de 2 dias). Comprimidos geralmente são liberados após 8 semanas e 2kg de peso.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Aplicar Pipeta Corretamente</h2>
                <ol className="list-decimal pl-6 space-y-2 mb-6">
                    <li>Não dê banho 48h antes</li>
                    <li>Afaste o pelo entre as escápulas até ver a pele</li>
                    <li>Aplique todo o conteúdo diretamente na pele (não no pelo)</li>
                    <li>Não deixe outros pets lamberem o local por 24h</li>
                    <li>Evite banho por 48h após aplicação</li>
                </ol>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Tratamento do Ambiente</h2>
                <p>
                    95% das pulgas estão no ambiente (ovos, larvas, pupas), não no pet! Aspire sofás, camas e tapetes diariamente. Lave roupas de cama do pet em água quente. Use sprays ambientais (Bolfo, Pulvex) em frestas e rodapés.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Quanto Custa?</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Pipetas:</strong> R$ 30-80/mês (R$ 360-960/ano)</li>
                    <li><strong>Comprimidos:</strong> R$ 80-150 a cada 1-3 meses (R$ 320-1.800/ano)</li>
                    <li><strong>Coleiras:</strong> R$ 150-250 a cada 8 meses (R$ 225-375/ano) - mais econômico!</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Sinais de Infestação</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Coceira excessiva, especialmente na base da cauda</li>
                    <li>Pontinhos pretos no pelo (fezes de pulga)</li>
                    <li>Feridas e crostas na pele (dermatite alérgica)</li>
                    <li>Anemia em filhotes (gengivas pálidas)</li>
                </ul>

                <p>
                    Prevenir é mais barato que tratar. Um pet com pulgas precisa de banhos medicados, antibióticos para infecções secundárias e vermífugos extras. Mantenha a proteção em dia o ano todo!
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Quer saber o nível de cuidado com seu pet?</h3>
                    <p className="mb-6 text-lg">Faça nosso quiz gratuito e descubra seu PetScore oficial!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Descobrir meu PetScore
                    </Button>
                </div>
            </div>
        )
    },
    "osso-cachorro-guia": {
        title: "Osso para Cachorro: Guia Completo de Tipos Seguros e Benefícios",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Ossos são mais que entretenimento - eles limpam dentes, fortalecem mandíbulas e reduzem ansiedade. Mas nem todo osso é seguro. Ossos cozidos podem lascar e perfurar intestinos, enquanto ossos inadequados quebram dentes. Aprenda a escolher corretamente.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Tipos de Ossos para Cachorro</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Ossos Naturais Crus</h3>
                <p>
                    Ossos bovinos crus (canela, fêmur, costela) são os mais seguros. Marcas como Baw Waw e Ossinhos Naturais vendem ossos defumados ou desidratados. Ricos em cálcio e fósforo, limpam tártaro naturalmente pela mastigação.
                </p>
                <p>
                    <strong>Regra de Ouro:</strong> O osso deve ser maior que a boca do cão para evitar engasgo. Para cães pequenos, use ossos de frango (pescoço, asa) sempre crus.<br />
                    <strong>NUNCA:</strong> Ossos cozidos! O cozimento torna ossos quebradiços e perigosos.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Ossos de Couro (Palitos)</h3>
                <p>
                    Feitos de couro bovino prensado. Marcas como DogChoni, Bassar e Petitos oferecem em diversos tamanhos. Duráveis e digeríveis, mas escolha versões sem corantes artificiais (prefira cor natural bege/marrom).
                </p>
                <p>
                    <strong>Atenção:</strong> Cães gulosos podem engolir pedaços grandes. Supervisione e retire quando ficar pequeno demais.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Ossos Sintéticos (Nylon)</h3>
                <p>
                    Ossos de nylon da Nylabone e Chalesco são indestrutíveis. Ideais para cães com mordida forte que destroem tudo. Não lascam e duram meses. Alguns têm sabor de bacon ou frango.
                </p>
                <p>
                    <strong>Desvantagem:</strong> Não limpam dentes tão bem quanto ossos naturais. Verifique se há lascas ou desgaste excessivo.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Ossos Comestíveis (Snacks)</h3>
                <p>
                    Petiscos em formato de osso feitos de ração prensada. Marcas como Pedigree Dentastix e Greenies limpam dentes e são 100% digeríveis. Perfeitos para cães com estômago sensível.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Benefícios dos Ossos</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Saúde Dental</h3>
                <p>
                    A mastigação remove 70% do tártaro acumulado, prevenindo gengivite e perda de dentes. Cães que roem ossos regularmente têm hálito melhor e menos problemas dentários.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Redução de Ansiedade</h3>
                <p>
                    Roer libera endorfinas, acalmando cães ansiosos. Ideal para pets que sofrem de ansiedade de separação ou que destroem móveis quando sozinhos.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Fortalecimento Muscular</h3>
                <p>
                    A mastigação fortalece músculos da mandíbula, pescoço e ombros. Importante para raças de trabalho e cães ativos.
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-amber-800 mb-2">🦴 Dica Profissional</h3>
                    <p>Congele ossos naturais antes de dar. Isso aumenta a durabilidade e proporciona alívio para gengivas de filhotes em dentição.</p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Ossos Proibidos</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Ossos de frango cozidos:</strong> Lascam e perfuram intestinos (fatal!)</li>
                    <li><strong>Ossos de porco:</strong> Muito gordurosos, causam pancreatite</li>
                    <li><strong>Ossos pequenos:</strong> Risco de engasgo e obstrução</li>
                    <li><strong>Ossos defumados com temperos:</strong> Sal e alho são tóxicos</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Escolher por Porte</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Pequeno porte (até 10kg):</strong> Pescoço de frango cru, palitos de couro pequenos</li>
                    <li><strong>Médio porte (10-25kg):</strong> Osso de canela bovino, palitos médios</li>
                    <li><strong>Grande porte (25kg+):</strong> Fêmur bovino, ossos de nylon grandes</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Quanto Tempo Deixar o Cão Roer?</h2>
                <p>
                    Limite a 15-20 minutos por dia para ossos naturais. Mastigação excessiva pode desgastar dentes ou causar diarreia (excesso de cálcio). Para ossos sintéticos, pode deixar disponível o tempo todo.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Sinais de Problema</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Vômito ou diarreia após roer (pode ser intolerância)</li>
                    <li>Sangue nas fezes (possível perfuração intestinal - EMERGÊNCIA)</li>
                    <li>Dente quebrado ou sangrando (suspenda ossos duros)</li>
                    <li>Engasgo ou tosse persistente (fragmento preso)</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Higiene e Armazenamento</h2>
                <p>
                    Lave ossos naturais após cada uso e guarde na geladeira (duram 3-4 dias). Descarte se houver mau cheiro ou limo. Ossos de couro e sintéticos podem ficar em temperatura ambiente, mas lave semanalmente.
                </p>

                <p>
                    Ossos são excelentes para saúde e bem-estar, mas supervisão é essencial. Nunca deixe cães roendo ossos sem vigilância, especialmente nas primeiras vezes.
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Quer saber o nível de cuidado com seu pet?</h3>
                    <p className="mb-6 text-lg">Faça nosso quiz gratuito e descubra seu PetScore oficial!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Descobrir meu PetScore
                    </Button>
                </div>
            </div>
        )
    },
    "casinha-cachorro-guia": {
        title: "Casinha para Cachorro: Como Escolher o Modelo Ideal em 2026",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Uma casinha adequada protege seu cão de chuva, sol forte e frio, além de proporcionar um refúgio seguro onde ele se sente protegido. Escolher o tamanho, material e localização corretos garante conforto e saúde. Veja como acertar na escolha.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Tipos de Casinha para Cachorro</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Casinha de Plástico</h3>
                <p>
                    Marcas como Furacão Pet, Chalesco e Plast Pet oferecem casinhas de plástico resistente. São duráveis, fáceis de limpar e não apodrecem com umidade. Ideais para áreas externas com chuva frequente.
                </p>
                <p>
                    <strong>Vantagens:</strong> Impermeável, durável (5-10 anos), fácil higienização.<br />
                    <strong>Desvantagens:</strong> Esquenta muito no sol (precisa de sombra), pode rachar com frio extremo.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Casinha de Madeira</h3>
                <p>
                    Casinhas de madeira tratada (pinus ou eucalipto) são bonitas e oferecem melhor isolamento térmico. Marcas como Meu Pet e Casinha Pet vendem modelos com telhado impermeabilizado e pés elevados.
                </p>
                <p>
                    <strong>Vantagens:</strong> Isolamento térmico superior, estética agradável, durável com manutenção.<br />
                    <strong>Desvantagens:</strong> Precisa de verniz/impermeabilizante anual, mais cara (R$ 300-800).
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Casinha de Fibra de Vidro</h3>
                <p>
                    Resistentes e leves. Não racham, não apodrecem e isolam bem temperatura. Ideais para regiões com clima extremo. Marcas especializadas fabricam sob medida.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Casinha Iglu (Tecido)</h3>
                <p>
                    Casinhas portáteis de tecido impermeável com estrutura dobrável. Perfeitas para viagens, camping ou uso interno. Marcas como Chalesco e Jambo oferecem modelos compactos.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Escolher o Tamanho Certo</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Regra de Medição</h3>
                <p>
                    A casinha deve permitir que o cão entre, vire e deite confortavelmente. Meça seu cão:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Comprimento:</strong> Do focinho até a base da cauda + 15cm</li>
                    <li><strong>Altura:</strong> Do chão até o topo da cabeça (em pé) + 10cm</li>
                    <li><strong>Largura:</strong> Largura do corpo x 1,5</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Tamanhos Padrão</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Pequeno (até 10kg):</strong> 50x40x40cm - Poodle, Yorkshire, Shih Tzu</li>
                    <li><strong>Médio (10-25kg):</strong> 80x60x60cm - Beagle, Cocker, Border Collie</li>
                    <li><strong>Grande (25-40kg):</strong> 100x80x80cm - Labrador, Golden, Pastor Alemão</li>
                    <li><strong>Gigante (40kg+):</strong> 120x100x90cm - Rottweiler, Fila, São Bernardo</li>
                </ul>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">⚠️ Atenção</h3>
                    <p>Casinha muito grande perde calor no inverno. Casinha muito pequena causa desconforto e o cão não usa. Prefira um tamanho justo.</p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Localização Ideal</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Sombra:</strong> Nunca deixe a casinha em sol pleno. Use árvores ou telhados para sombreamento.</li>
                    <li><strong>Elevação:</strong> Coloque sobre paletes ou tijolos (10cm do chão) para evitar umidade e insetos.</li>
                    <li><strong>Proteção de vento:</strong> Posicione a entrada oposta à direção do vento predominante.</li>
                    <li><strong>Drenagem:</strong> Escolha local onde água da chuva não acumula.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Acessórios Essenciais</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Colchonete ou Almofada</h3>
                <p>
                    Colchonetes impermeáveis com capa removível (Chalesco, Jambo) proporcionam conforto e isolamento do chão frio. Lave quinzenalmente.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Cortina para Entrada</h3>
                <p>
                    Cortinas de PVC transparente bloqueiam vento e chuva sem escurecer o interior. Essenciais para regiões frias.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Comedouro e Bebedouro</h3>
                <p>
                    Alguns modelos têm suporte lateral para potes. Mantenha água fresca sempre disponível, especialmente no verão.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Manutenção e Limpeza</h2>
                <p>
                    Limpe a casinha semanalmente com água, sabão neutro e desinfetante pet-safe. Verifique rachaduras, pregos soltos ou mofo. Reaplique impermeabilizante em casinhas de madeira anualmente.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Quanto Custa?</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Plástico pequena:</strong> R$ 80-150</li>
                    <li><strong>Plástico média/grande:</strong> R$ 150-400</li>
                    <li><strong>Madeira pequena:</strong> R$ 200-400</li>
                    <li><strong>Madeira grande:</strong> R$ 400-1.000</li>
                    <li><strong>Fibra de vidro:</strong> R$ 500-1.500 (sob medida)</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Sinais de que a Casinha Não Está Adequada</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Cão evita entrar ou fica pouco tempo dentro</li>
                    <li>Postura curvada ou dificuldade para virar</li>
                    <li>Interior muito quente ao toque (precisa de sombra)</li>
                    <li>Umidade ou mofo no interior</li>
                </ul>

                <p>
                    Uma casinha bem escolhida se torna o refúgio favorito do cão. Invista em qualidade e tamanho adequado para garantir anos de uso confortável.
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Quer saber o nível de cuidado com seu pet?</h3>
                    <p className="mb-6 text-lg">Faça nosso quiz gratuito e descubra seu PetScore oficial!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Descobrir meu PetScore
                    </Button>
                </div>
            </div>
        )
    },
    "coleira-gato-guia": {
        title: "Coleira para Gato: Guia Completo de Tipos e Como Usar com Segurança",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Coleiras para gatos não são apenas acessórios - elas salvam vidas. Gatos que saem de casa precisam de identificação, e coleiras com guia permitem passeios seguros. Mas escolher o tipo errado pode causar acidentes. Aprenda a escolher e usar corretamente.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Tipos de Coleira para Gato</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Coleira com Fivela de Segurança (Breakaway)</h3>
                <p>
                    A ÚNICA coleira segura para gatos que ficam soltos. A fivela se abre com pressão, evitando enforcamento se o gato ficar preso em galhos ou grades. Marcas como Chalesco, Jambo e Ferplast oferecem modelos ajustáveis.
                </p>
                <p>
                    <strong>Essencial:</strong> Nunca use coleira comum de cachorro em gatos! Eles podem se enforcar tentando escapar.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Peitoral (Harness)</h3>
                <p>
                    Ideal para passeios com guia. Distribui pressão pelo peito, não pelo pescoço. Modelos em "H" ou "8" da Chalesco e Ferplast são mais seguros. Gatos não conseguem escapar facilmente.
                </p>
                <p>
                    <strong>Vantagens:</strong> Seguro para passeios, não machuca pescoço, difícil de escapar.<br />
                    <strong>Desvantagens:</strong> Precisa acostumar o gato gradualmente (pode estranhar no início).
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Coleira com Guizo</h3>
                <p>
                    Coleiras com sininho alertam pássaros e pequenos animais. Útil para gatos caçadores, mas pode estressar gatos sensíveis ao som constante. Use com moderação.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Coleira Antipulgas</h3>
                <p>
                    Coleiras como Seresto liberam antipulgas por 8 meses. Devem ter fivela de segurança. Atenção: alguns gatos têm alergia ao princípio ativo (coceira no pescoço).
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Escolher o Tamanho Certo</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Medição Correta</h3>
                <p>
                    Meça o pescoço do gato com fita métrica. A coleira deve permitir passar 2 dedos entre ela e o pescoço. Muito apertada machuca, muito folgada o gato escapa.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Filhotes (2-6 meses):</strong> 15-20cm ajustável</li>
                    <li><strong>Adultos pequenos:</strong> 20-25cm</li>
                    <li><strong>Adultos médios/grandes:</strong> 25-30cm</li>
                </ul>

                <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-purple-800 mb-2">🐱 Dica Importante</h3>
                    <p>Verifique o ajuste semanalmente. Gatos podem perder ou ganhar peso, e a coleira precisa ser reajustada.</p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Acostumar o Gato com Coleira</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Passo 1: Apresentação Gradual</h3>
                <p>
                    Deixe a coleira perto do gato por alguns dias. Deixe-o cheirar e investigar. Associe com petiscos e carinho.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Passo 2: Primeiros Minutos</h3>
                <p>
                    Coloque a coleira por 5-10 minutos enquanto brinca ou oferece comida. Retire antes que ele fique estressado. Repita diariamente aumentando o tempo.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Passo 3: Uso Contínuo</h3>
                <p>
                    Após 1-2 semanas, o gato deve tolerar a coleira o dia todo. Alguns nunca se acostumam completamente - respeite o limite do seu gato.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Identificação Essencial</h2>
                <p>
                    Coloque plaquinha de identificação com nome do gato, seu telefone e endereço. Em caso de fuga, aumenta em 70% a chance de retorno. Plaquinhas de metal gravado (R$ 15-30) são duráveis.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Passeios com Guia</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Preparação</h3>
                <p>
                    Use peitoral, nunca coleira simples. Comece em ambiente fechado (quintal, varanda). Deixe o gato explorar no ritmo dele - não puxe a guia.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Locais Seguros</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Jardins tranquilos sem cães soltos</li>
                    <li>Parques em horários calmos</li>
                    <li>Evite ruas movimentadas (gatos se assustam com barulhos)</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Erros Comuns</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Usar coleira sem fivela de segurança:</strong> Risco de enforcamento fatal</li>
                    <li><strong>Deixar muito folgada:</strong> Gato escapa facilmente</li>
                    <li><strong>Forçar gato que odeia coleira:</strong> Causa estresse crônico</li>
                    <li><strong>Não verificar ajuste regularmente:</strong> Pode apertar conforme gato cresce</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Quando Não Usar Coleira</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Gatos 100% indoor que não saem nunca (microchip é melhor)</li>
                    <li>Gatos com problemas respiratórios (pode piorar)</li>
                    <li>Filhotes abaixo de 8 semanas (pescoço muito frágil)</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Alternativas à Coleira</h2>
                <p>
                    <strong>Microchip:</strong> Identificação permanente implantada sob a pele. Não pode ser perdida. Custo: R$ 80-150. Essencial para gatos que recusam coleira.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Quanto Custa?</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Coleira simples com fivela de segurança:</strong> R$ 15-40</li>
                    <li><strong>Peitoral ajustável:</strong> R$ 30-80</li>
                    <li><strong>Coleira antipulgas (Seresto):</strong> R$ 150-200</li>
                    <li><strong>Plaquinha de identificação:</strong> R$ 15-30</li>
                </ul>

                <p>
                    Coleiras salvam vidas, mas só se usadas corretamente. Priorize sempre a segurança com fivela breakaway e ajuste adequado. Se seu gato rejeita completamente, considere microchip como alternativa.
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Quer saber o nível de cuidado com seu pet?</h3>
                    <p className="mb-6 text-lg">Faça nosso quiz gratuito e descubra seu PetScore oficial!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Descobrir meu PetScore
                    </Button>
                </div>
            </div>
        )
    },
    "racao-natural-gatos-guia": {
        title: "Ração Natural para Gatos: Benefícios e Como Escolher em 2026",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Ração natural para gatos é a tendência que veio para ficar. Livre de conservantes artificiais, corantes e grãos desnecessários, essas fórmulas respeitam a natureza carnívora dos felinos. Entenda os benefícios, marcas confiáveis e como fazer a transição.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">O Que é Ração Natural?</h2>
                <p>
                    Rações naturais usam ingredientes minimamente processados, sem subprodutos de origem duvidosa. A proteína vem de fontes identificadas (frango, salmão, cordeiro), não de "farinha de carne". Sem BHA, BHT ou etoxiquina (conservantes químicos).
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Principais Marcas no Brasil</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Guabi Natural</h3>
                <p>
                    Marca brasileira com fórmulas grain-free. Usa frango, salmão e batata-doce. Linha específica para gatos castrados e filhotes. Preço: R$ 80-120 por 1,5kg.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Farmina N&D</h3>
                <p>
                    Italiana, considerada premium. Fórmulas com 70% de proteína animal, frutas e vegetais. Linha Pumpkin (com abóbora) auxilia digestão. Preço: R$ 120-180 por 1,5kg.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Biofresh</h3>
                <p>
                    Nacional, boa relação custo-benefício. Sem transgênicos, com probióticos. Ideal para quem quer natural sem gastar muito. Preço: R$ 60-90 por 1,5kg.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Benefícios da Ração Natural</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Pelagem mais brilhante:</strong> Ômega 3 e 6 de fontes naturais</li>
                    <li><strong>Menos fezes:</strong> Maior digestibilidade (80-90% vs 60-70% das econômicas)</li>
                    <li><strong>Redução de alergias:</strong> Sem corantes e conservantes irritantes</li>
                    <li><strong>Melhor saúde urinária:</strong> pH balanceado naturalmente</li>
                    <li><strong>Mais energia:</strong> Proteína de qualidade fornece energia sustentada</li>
                </ul>

                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-2">🌿 Importante</h3>
                    <p>Ração natural não é o mesmo que ração caseira. Rações naturais são balanceadas por nutricionistas veterinários. Comida caseira sem orientação pode causar deficiências.</p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Fazer a Transição</h2>
                <p>
                    Misture gradualmente ao longo de 7-10 dias:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Dias 1-2: 25% natural + 75% antiga</li>
                    <li>Dias 3-5: 50% natural + 50% antiga</li>
                    <li>Dias 6-8: 75% natural + 25% antiga</li>
                    <li>Dia 9+: 100% natural</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Ingredientes que Você Deve Ver</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Proteína animal como 1º ingrediente (frango, salmão, peru)</li>
                    <li>Frutas e vegetais (cranberry, abóbora, espinafre)</li>
                    <li>Probióticos e prebióticos</li>
                    <li>Sem milho, trigo ou soja como base</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Vale a Pena o Investimento?</h2>
                <p>
                    Sim! Embora mais cara inicialmente, ração natural rende mais (gato come menos por ser mais nutritiva) e previne doenças. Economia em veterinário compensa o custo.
                </p>

                <p>
                    Gatos alimentados com ração natural vivem em média 2-3 anos a mais e têm menos problemas renais e cardíacos na velhice.
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Quer saber o nível de cuidado com seu pet?</h3>
                    <p className="mb-6 text-lg">Faça nosso quiz gratuito e descubra seu PetScore oficial!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Descobrir meu PetScore
                    </Button>
                </div>
            </div>
        )
    },
    "racao-natural-cachorro-guia": {
        title: "Ração Natural para Cachorro: Guia Completo de Benefícios em 2026",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Ração natural para cachorro representa uma revolução na nutrição canina. Ingredientes reais, sem químicos desnecessários e formulações que respeitam a biologia do cão. Descubra por que veterinários recomendam e como escolher a melhor opção.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">O Que Define uma Ração Natural?</h2>
                <p>
                    Rações naturais priorizam ingredientes integrais e minimamente processados. Proteínas de carne real (não farinhas), carboidratos de batata-doce ou ervilha (não milho), e conservação natural com vitamina E e alecrim.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Melhores Marcas Brasileiras</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Herói</h3>
                <p>
                    Nacional, 100% natural. Fórmulas específicas por porte e idade. Usa frango, arroz integral e vegetais. Sem transgênicos. Preço: R$ 150-220 por 10kg.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Guabi Natural</h3>
                <p>
                    Linha grain-free com cordeiro, salmão ou frango. Batata-doce como carboidrato. Probióticos para digestão. Preço: R$ 180-280 por 10kg.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Biofresh</h3>
                <p>
                    Custo-benefício excelente. Ingredientes naturais sem ser grain-free (usa arroz integral). Boa opção para transição. Preço: R$ 120-180 por 10kg.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Benefícios Comprovados</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Saúde Digestiva</h3>
                <p>
                    Ingredientes naturais são 85-90% digeríveis vs 60-70% das rações econômicas. Resultado: menos gases, fezes menores e mais firmes, menos vômitos.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Pelagem e Pele</h3>
                <p>
                    Ômega 3 de salmão (não sintético) melhora brilho em 3-4 semanas. Reduz coceira e queda excessiva de pelo. Cães com dermatite alérgica melhoram significativamente.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Energia e Vitalidade</h3>
                <p>
                    Proteína de qualidade fornece energia sustentada. Cães ficam mais ativos sem hiperatividade. Ideal para cães de trabalho e esportivos.
                </p>

                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-orange-800 mb-2">💡 Dica Veterinária</h3>
                    <p>Cães com problemas de pele, alergias ou digestão sensível veem melhora dramática em 30-60 dias com ração natural. Consulte seu vet antes de trocar.</p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Transição Gradual é Essencial</h2>
                <p>
                    Nunca troque bruscamente! Siga o protocolo de 10 dias:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Dias 1-3: 25% natural + 75% antiga</li>
                    <li>Dias 4-6: 50% natural + 50% antiga</li>
                    <li>Dias 7-9: 75% natural + 25% antiga</li>
                    <li>Dia 10+: 100% natural</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">O Que Evitar</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Subprodutos de carne (bicos, penas, vísceras de baixa qualidade)</li>
                    <li>Corantes artificiais (vermelho 40, amarelo 5)</li>
                    <li>BHA, BHT, etoxiquina (conservantes químicos)</li>
                    <li>Milho ou trigo como primeiros ingredientes</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Custo vs Benefício</h2>
                <p>
                    Ração natural custa 40-60% mais que econômica, mas o cão come 30% menos (maior saciedade). Economia em veterinário (menos alergias, problemas digestivos) compensa.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Quanto Dar?</h2>
                <p>
                    Siga a tabela da embalagem, mas ajuste conforme atividade. Cães ativos precisam de 20-30% mais. Pese seu cão mensalmente para ajustar.
                </p>

                <p>
                    Investir em ração natural é investir em longevidade e qualidade de vida. Cães bem nutridos vivem mais, adoecem menos e são mais felizes.
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Quer saber o nível de cuidado com seu pet?</h3>
                    <p className="mb-6 text-lg">Faça nosso quiz gratuito e descubra seu PetScore oficial!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Descobrir meu PetScore
                    </Button>
                </div>
            </div>
        )
    },
    "vermifugo-gatos-guia": {
        title: "Vermífugo para Gatos: Guia Completo de Tipos e Quando Usar",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Vermes intestinais afetam 45% dos gatos domésticos, causando diarreia, vômitos, anemia e até morte em filhotes. Vermifugar regularmente é essencial, mas escolher o produto errado ou usar dose inadequada pode ser ineficaz ou perigoso. Aprenda tudo aqui.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Tipos de Vermes em Gatos</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Vermes Redondos (Nematódeos)</h3>
                <p>
                    Áscaris e ancilóstomos. Parecem espaguete nas fezes. Causam barriga inchada, diarreia e vômitos. Filhotes podem pegar da mãe pelo leite.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Vermes Chatos (Cestódeos)</h3>
                <p>
                    Tênias transmitidas por pulgas. Você vê segmentos parecidos com grãos de arroz nas fezes ou ao redor do ânus. Causam coceira anal e perda de peso.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Giárdia</h3>
                <p>
                    Protozoário microscópico. Causa diarreia líquida persistente. Precisa de vermífugo específico (metronidazol ou fenbendazol).
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Principais Vermífugos</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Comprimidos</h3>
                <p>
                    <strong>Drontal Gatos:</strong> Combate vermes redondos e chatos. Dose única. Preço: R$ 25-40 por comprimido.<br />
                    <strong>Milbemax Gatos:</strong> Amplo espectro, incluindo verme do coração. Preço: R$ 30-50.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Pastas Orais</h3>
                <p>
                    <strong>Panacur Pasta:</strong> Fenbendazol, eficaz contra giárdia. Uso por 3-5 dias consecutivos. Preço: R$ 40-60.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Pipetas (Spot-On)</h3>
                <p>
                    <strong>Revolution Plus:</strong> Vermífugo + antipulgas. Aplicação mensal na pele. Preço: R$ 60-90 por dose.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-red-800 mb-2">⚠️ Nunca Faça Isso</h3>
                    <p>Nunca use vermífugo de cachorro em gatos! Produtos com ivermectina em alta dose são tóxicos para felinos. Sempre use produtos específicos para gatos.</p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Frequência de Vermifugação</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Filhotes (2-6 meses):</strong> A cada 30 dias</li>
                    <li><strong>Adultos indoor:</strong> A cada 3-4 meses</li>
                    <li><strong>Adultos com acesso externo:</strong> A cada 2-3 meses</li>
                    <li><strong>Gatos caçadores:</strong> A cada 2 meses</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Dar Vermífugo</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Comprimido</h3>
                <p>
                    Esconda em petisco (sachê, patê). Se recusar, use aplicador de comprimidos ou triture e misture em comida úmida. Dê com estômago vazio para melhor absorção.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Pipeta</h3>
                <p>
                    Aplique na pele entre as escápulas (onde o gato não alcança para lamber). Afaste bem o pelo até ver a pele. Não dê banho 48h antes e depois.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Sinais de Verminose</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Diarreia ou vômito com vermes visíveis</li>
                    <li>Barriga inchada (especialmente filhotes)</li>
                    <li>Perda de peso apesar de comer bem</li>
                    <li>Pelagem opaca e sem brilho</li>
                    <li>Arrastar o bumbum no chão (coceira anal)</li>
                    <li>Gengivas pálidas (anemia)</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Vermifugação Preventiva vs Terapêutica</h2>
                <p>
                    <strong>Preventiva:</strong> Vermifugar mesmo sem sintomas, seguindo calendário. Previne infestações graves.<br />
                    <strong>Terapêutica:</strong> Quando há sintomas ou vermes visíveis. Pode precisar repetir dose após 15 dias.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Vermifugação de Filhotes</h2>
                <p>
                    Primeira dose aos 30 dias de vida. Repetir aos 45, 60, 90 e 120 dias. Use produtos específicos para filhotes (dose menor). Consulte veterinário para peso exato.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Efeitos Colaterais</h2>
                <p>
                    Normais: Vômito ou diarreia leve nas primeiras 24h (vermes sendo eliminados). Anormal: Vômito persistente, letargia, convulsões - procure veterinário imediatamente.
                </p>

                <p>
                    Vermifugar é tão importante quanto vacinar. Vermes não tratados podem causar obstrução intestinal, perfuração e morte. Mantenha o calendário em dia!
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Quer saber o nível de cuidado com seu pet?</h3>
                    <p className="mb-6 text-lg">Faça nosso quiz gratuito e descubra seu PetScore oficial!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Descobrir meu PetScore
                    </Button>
                </div>
            </div>
        )
    },
    "caminha-cachorro-guia": {
        title: "Caminha para Cachorro: Como Escolher o Modelo Perfeito em 2026",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Uma boa caminha não é luxo - é necessidade. Cães passam 12-14 horas dormindo por dia, e uma caminha inadequada causa dores articulares, calos e desconforto. Aprenda a escolher o tamanho, material e modelo ideal para seu melhor amigo.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Tipos de Caminha</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Caminha Almofadada</h3>
                <p>
                    Retangular ou redonda, com enchimento de fibra siliconada. Marcas como Chalesco, Jambo e Furacão Pet oferecem diversos tamanhos. Confortável e lavável. Preço: R$ 60-200.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Caminha Ortopédica</h3>
                <p>
                    Espuma viscoelástica (memory foam) que se molda ao corpo. Essencial para cães idosos, com artrite ou displasia. Marcas: Petite Sofie, Zee.Dog. Preço: R$ 150-500.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Caminha Elevada</h3>
                <p>
                    Estrutura suspensa com tela. Mantém o cão fresco no verão e seco em áreas úmidas. Ideal para quintais. Preço: R$ 80-250.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Caminha Térmica</h3>
                <p>
                    Autoquecimento (reflete calor corporal) ou elétrica. Para regiões frias ou cães idosos. Preço: R$ 100-400.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Escolher o Tamanho</h2>
                <p>
                    Meça seu cão deitado esticado (do focinho à ponta da cauda) e adicione 15-20cm. A caminha deve permitir que ele se estique completamente.
                </p>

                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Pequeno (até 10kg):</strong> 50x40cm - Yorkshire, Poodle, Shih Tzu</li>
                    <li><strong>Médio (10-25kg):</strong> 80x60cm - Beagle, Cocker, Border Collie</li>
                    <li><strong>Grande (25-40kg):</strong> 100x80cm - Labrador, Golden, Boxer</li>
                    <li><strong>Gigante (40kg+):</strong> 120x90cm - Rottweiler, Pastor Alemão, Fila</li>
                </ul>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">💤 Dica Importante</h3>
                    <p>Cães que dormem encolhidos podem usar caminha menor. Cães que esticam precisam de espaço extra. Observe como seu cão dorme antes de comprar.</p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Materiais e Tecidos</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Tecidos Recomendados</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Lona:</strong> Resistente, impermeável, fácil de limpar</li>
                    <li><strong>Suede:</strong> Macio, confortável, mas mancha fácil</li>
                    <li><strong>Oxford:</strong> Durável, resistente a arranhões</li>
                    <li><strong>Plush:</strong> Quentinho para inverno, mas acumula pelos</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Enchimentos</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Fibra siliconada:</strong> Lavável, não deforma, hipoalergênica</li>
                    <li><strong>Espuma:</strong> Firme, boa para cães pesados</li>
                    <li><strong>Viscoelástico:</strong> Ortopédico, alivia pressão nas articulações</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Cuidados Especiais por Idade</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Filhotes</h3>
                <p>
                    Evite caminhas muito caras - filhotes roem e destroem. Use modelos básicos e laváveis. Troque conforme crescem.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Adultos</h3>
                <p>
                    Invista em qualidade. Uma boa caminha dura 3-5 anos. Prefira modelos com capa removível para lavar.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Idosos</h3>
                <p>
                    Caminha ortopédica é essencial. Espuma viscoelástica reduz dores articulares e melhora qualidade do sono. Escolha modelos com laterais baixas (fácil acesso).
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Onde Colocar a Caminha</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Local tranquilo, longe de correntes de ar</li>
                    <li>Não coloque em corredores ou áreas de passagem</li>
                    <li>Evite sol direto (superaquecimento)</li>
                    <li>Mantenha longe de portas e janelas (frio)</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Limpeza e Manutenção</h2>
                <p>
                    Lave a capa semanalmente em água morna. Use sabão neutro ou específico para pets. Seque completamente antes de recolocar. Aspire o enchimento mensalmente para remover pelos e ácaros.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Sinais de que Precisa Trocar</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Enchimento achatado (não recupera forma)</li>
                    <li>Rasgos ou costuras abertas</li>
                    <li>Mau cheiro persistente mesmo após lavar</li>
                    <li>Cão evita usar ou prefere chão</li>
                </ul>

                <p>
                    Uma caminha de qualidade é investimento em saúde. Cães que dormem bem têm menos problemas comportamentais, articulares e vivem mais felizes.
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Quer saber o nível de cuidado com seu pet?</h3>
                    <p className="mb-6 text-lg">Faça nosso quiz gratuito e descubra seu PetScore oficial!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Descobrir meu PetScore
                    </Button>
                </div>
            </div>
        )
    },
    "arranhador-gatos-guia": {
        title: "Arranhador para Gatos: Guia Completo de Tipos e Treinamento",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Arranhar é instinto natural dos gatos - eles marcam território, afiamunhas e se alongam. Sem arranhador adequado, seu sofá vira alvo. Escolher o modelo certo e treinar corretamente salva seus móveis e mantém seu gato feliz.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Por Que Gatos Arranham?</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Manutenção das unhas:</strong> Remove camada externa morta</li>
                    <li><strong>Marcação de território:</strong> Glândulas nas patas deixam cheiro</li>
                    <li><strong>Alongamento:</strong> Estica músculos das costas e ombros</li>
                    <li><strong>Alívio de estresse:</strong> Comportamento calmante</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Tipos de Arranhador</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Arranhador Vertical (Poste)</h3>
                <p>
                    Poste coberto com sisal. Deve ter no mínimo 60cm de altura para o gato esticar completamente. Marcas: Chalesco, Jambo, Furacão Pet. Preço: R$ 60-150.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Arranhador Horizontal (Tapete)</h3>
                <p>
                    Tapete de sisal ou papelão ondulado. Ideal para gatos que preferem arranhar no chão. Alguns vêm com catnip. Preço: R$ 30-80.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Torre/Árvore de Gato</h3>
                <p>
                    Estrutura com múltiplos níveis, tocas e arranhadores. Combina exercício, descanso e arranhadura. Ideal para apartamentos. Preço: R$ 200-800.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Arranhador de Papelão</h3>
                <p>
                    Econômico e ecológico. Gatos adoram a textura. Precisa trocar a cada 2-3 meses. Preço: R$ 20-50.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-2">🐱 Dica de Ouro</h3>
                    <p>Tenha pelo menos 2 arranhadores: um vertical e um horizontal. Gatos têm preferências individuais!</p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Escolher o Arranhador Ideal</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Altura Adequada</h3>
                <p>
                    Meça seu gato esticado nas patas traseiras e adicione 10cm. Arranhadores baixos não permitem alongamento completo.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Estabilidade</h3>
                <p>
                    O arranhador deve ser pesado ou ter base larga. Se balançar, o gato não usa. Teste empurrando - não deve tombar.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Material</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Sisal:</strong> Mais durável, textura ideal</li>
                    <li><strong>Papelão:</strong> Econômico, mas dura menos</li>
                    <li><strong>Carpete:</strong> Evite! Parece com tapetes/sofás (confunde o gato)</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Treinar o Gato</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Localização Estratégica</h3>
                <p>
                    Coloque perto de onde o gato dorme (gatos arranham ao acordar) e perto dos móveis que ele arranha. Não esconda em cantos!
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Incentive o Uso</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Esfregue catnip no arranhador</li>
                    <li>Brinque com varinha perto dele</li>
                    <li>Recompense com petisco quando usar</li>
                    <li>Demonstre arranhando com suas unhas (sim, funciona!)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Proteja os Móveis</h3>
                <p>
                    Cubra temporariamente com papel alumínio ou fita dupla-face (gatos odeiam). Borrife spray cítrico (repelente natural). Apare as unhas regularmente.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Erros Comuns</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Arranhador muito pequeno:</strong> Gato não consegue esticar</li>
                    <li><strong>Base instável:</strong> Gato perde confiança e evita</li>
                    <li><strong>Localização ruim:</strong> Escondido em canto que ninguém usa</li>
                    <li><strong>Punir o gato:</strong> Cria estresse, não resolve</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Manutenção</h2>
                <p>
                    Aspire semanalmente para remover pelos. Troque papelão quando muito desgastado. Sisal dura 1-2 anos. Se o gato parar de usar, pode estar muito gasto.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Múltiplos Gatos</h2>
                <p>
                    Regra: número de gatos + 1 arranhador. Gatos não gostam de compartilhar. Coloque em locais diferentes da casa.
                </p>

                <p>
                    Investir em bons arranhadores é muito mais barato que trocar sofás. Gatos felizes arranham onde devem!
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Quer saber o nível de cuidado com seu pet?</h3>
                    <p className="mb-6 text-lg">Faça nosso quiz gratuito e descubra seu PetScore oficial!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Descobrir meu PetScore
                    </Button>
                </div>
            </div>
        )
    },
    "fonte-gatos-guia": {
        title: "Fonte para Gatos: Por Que Seu Gato Precisa de Uma em 2026",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Gatos bebem pouca água por natureza, o que leva a problemas renais e urinários - principais causas de morte em felinos. Fontes de água estimulam a hidratação com água corrente e filtrada. Entenda os benefícios e como escolher.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Por Que Fontes Funcionam?</h2>
                <p>
                    Gatos são descendentes de animais do deserto. Instintivamente preferem água corrente (sinal de água fresca) a água parada (pode estar contaminada). Fontes imitam riachos naturais.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Benefícios Comprovados</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Aumenta consumo de água em 40-60%:</strong> Previne doenças renais</li>
                    <li><strong>Reduz cristais urinários:</strong> Menos obstruções uretrais</li>
                    <li><strong>Água sempre fresca:</strong> Filtros removem pelos e impurezas</li>
                    <li><strong>Oxigenação:</strong> Água corrente tem mais oxigênio (melhor sabor)</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Tipos de Fonte</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Fonte de Plástico</h3>
                <p>
                    Mais barata e leve. Marcas: Chalesco, Jambo, Truqys. Fácil de limpar, mas plástico pode acumular bactérias com o tempo. Preço: R$ 80-150.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Fonte de Cerâmica</h3>
                <p>
                    Higiênica, não retém odores, pesada (não vira). Marcas: Chalesco Premium, Catit. Ideal para gatos com acne felina (plástico piora). Preço: R$ 150-300.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Fonte de Aço Inoxidável</h3>
                <p>
                    Mais durável e higiênica. Não arranha, não acumula bactérias. Marcas: Zee.Dog, Petite Sofie. Preço: R$ 200-400.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Fonte Silenciosa</h3>
                <p>
                    Modelos com bomba ultra-silenciosa. Essencial se você tem sono leve ou gato sensível a barulhos. Preço: R$ 150-350.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">💧 Importante</h3>
                    <p>Fontes com filtro de carvão ativado removem cloro e metais pesados. Troque o filtro a cada 30 dias para máxima eficácia.</p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Escolher</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Capacidade</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>1 gato:</strong> 1,5-2L (troca a cada 3-4 dias)</li>
                    <li><strong>2-3 gatos:</strong> 2,5-3L (troca a cada 2-3 dias)</li>
                    <li><strong>4+ gatos:</strong> 4L+ (troca diária)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Facilidade de Limpeza</h3>
                <p>
                    Escolha modelos desmontáveis. Fontes com muitas peças pequenas são difíceis de higienizar. Verifique se as peças vão na lava-louças.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Nível de Ruído</h3>
                <p>
                    Bombas baratas fazem barulho irritante. Invista em modelos silenciosos (abaixo de 40dB). Leia avaliações sobre ruído antes de comprar.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Manutenção Essencial</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Limpeza Semanal</h3>
                <p>
                    Desmonte completamente. Lave com água e sabão neutro. Escove a bomba para remover pelos. Enxágue bem (resíduos de sabão afastam gatos).
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Troca de Filtro</h3>
                <p>
                    Filtros de carvão: a cada 30 dias. Filtros de espuma: lave semanalmente, troque a cada 2 meses. Sem filtro limpo, a água fica suja.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Nível de Água</h3>
                <p>
                    Complete diariamente. Bomba queima se funcionar sem água. Marque o nível mínimo com fita adesiva.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Acostumando o Gato</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Coloque perto do bebedouro antigo (transição gradual)</li>
                    <li>Deixe desligada no primeiro dia (gato investiga sem medo)</li>
                    <li>Ligue em velocidade baixa inicialmente</li>
                    <li>Molhe a patinha dele na água corrente (curiosidade)</li>
                    <li>Mantenha bebedouro antigo por 1 semana (segurança)</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Custo de Manutenção</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Energia:</strong> R$ 3-5/mês (bomba consome pouco)</li>
                    <li><strong>Filtros:</strong> R$ 15-30/mês</li>
                    <li><strong>Total:</strong> R$ 20-35/mês (vale cada centavo!)</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Sinais de Problema</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Bomba fazendo barulho estranho (limpe ou troque)</li>
                    <li>Fluxo fraco (filtro entupido)</li>
                    <li>Água com cheiro (limpeza insuficiente)</li>
                    <li>Gato parou de usar (verifique temperatura - muito fria?)</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Vale o Investimento?</h2>
                <p>
                    Absolutamente! Problemas renais e urinários custam milhares em tratamento veterinário. Uma fonte de R$ 200 previne doenças que podem custar R$ 5.000+ em cirurgias e medicamentos.
                </p>

                <p>
                    Gatos que bebem mais água vivem mais e com melhor qualidade de vida. É um dos melhores investimentos que você pode fazer pela saúde do seu felino.
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Quer saber o nível de cuidado com seu pet?</h3>
                    <p className="mb-6 text-lg">Faça nosso quiz gratuito e descubra seu PetScore oficial!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Descobrir meu PetScore
                    </Button>
                </div>
            </div>
        )
    },
    "coleira-antipulgas-guia": {
        title: "Coleira Antipulgas: Guia Completo de Eficácia e Uso Seguro",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Coleiras antipulgas oferecem proteção contínua por meses, sendo mais práticas que pipetas mensais. Mas nem todas são eficazes, e uso incorreto pode causar intoxicação. Aprenda a escolher, usar e quando evitar.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Funcionam?</h2>
                <p>
                    Coleiras liberam princípios ativos gradualmente que se espalham pela pele e pelo. Matam pulgas, carrapatos e, em alguns casos, repelem mosquitos transmissores de leishmaniose.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Principais Marcas</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Seresto (Bayer)</h3>
                <p>
                    A mais eficaz e recomendada. Proteção por 8 meses contra pulgas e carrapatos. Resistente à água. Versões para cães e gatos (NUNCA troque!). Preço: R$ 150-250.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Scalibor (MSD)</h3>
                <p>
                    Proteção por 6 meses. Repele mosquitos (previne leishmaniose). Apenas para cães. Preço: R$ 120-180.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Coleiras Genéricas</h3>
                <p>
                    Marcas como Chalesco e Jambo. Proteção por 3-4 meses. Menos eficazes, mas mais baratas. Preço: R$ 30-60.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-red-800 mb-2">⚠️ ATENÇÃO CRÍTICA</h3>
                    <p>Coleiras com permetrina (comuns para cães) são FATAIS para gatos. Causam convulsões e morte. Sempre use coleiras específicas para a espécie!</p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Vantagens</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Praticidade:</strong> Coloca e esquece por meses</li>
                    <li><strong>Não sai com banho:</strong> Resistente à água</li>
                    <li><strong>Custo-benefício:</strong> Mais barato que 8 pipetas</li>
                    <li><strong>Proteção contínua:</strong> Sem janelas de vulnerabilidade</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Desvantagens</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Pode causar irritação no pescoço (5-10% dos pets)</li>
                    <li>Risco se pet lamber outro pet com coleira</li>
                    <li>Não funciona se muito folgada ou apertada</li>
                    <li>Investimento inicial alto</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Usar Corretamente</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Ajuste Perfeito</h3>
                <p>
                    Deve passar 2 dedos entre a coleira e o pescoço. Muito apertada irrita, muito folgada não distribui o produto. Corte o excesso (deixe apenas 2-3cm sobrando).
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Tempo de Ativação</h3>
                <p>
                    Leva 24-48h para atingir eficácia máxima. Não espere proteção imediata. Se pet já tem pulgas, use spray/banho antes da coleira.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Múltiplos Pets</h3>
                <p>
                    Evite que lambam uns aos outros nas primeiras 48h. Separe temporariamente ou use cone elizabetano.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Quando NÃO Usar</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Filhotes abaixo de 7 semanas:</strong> Sistema nervoso imaturo</li>
                    <li><strong>Pets doentes ou debilitados:</strong> Consulte veterinário</li>
                    <li><strong>Gatos que saem de casa:</strong> Risco de enforcamento (use coleira com fivela de segurança)</li>
                    <li><strong>Pets com alergia conhecida:</strong> Teste com coleira genérica primeiro</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Sinais de Reação Adversa</h2>
                <p>
                    Retire imediatamente se notar:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Vermelhidão ou feridas no pescoço</li>
                    <li>Coceira excessiva</li>
                    <li>Vômitos ou diarreia</li>
                    <li>Letargia ou tremores</li>
                    <li>Perda de apetite</li>
                </ul>
                <p>
                    Lave o pescoço com água e sabão neutro e procure veterinário.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Eficácia Real</h2>
                <p>
                    Seresto: 95-98% de eficácia. Scalibor: 90-95%. Genéricas: 60-80%. Estudos mostram que coleiras premium realmente funcionam quando usadas corretamente.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Custo-Benefício</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Seresto (8 meses):</strong> R$ 200 ÷ 8 = R$ 25/mês</li>
                    <li><strong>Pipeta mensal:</strong> R$ 40-60/mês</li>
                    <li><strong>Economia anual:</strong> R$ 180-420</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Manutenção</h2>
                <p>
                    Não precisa remover para banho (resistente à água). Verifique semanalmente o ajuste (pets podem perder/ganhar peso). Troque quando atingir prazo de validade, mesmo que pareça nova.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Combinação com Outros Produtos</h2>
                <p>
                    Não combine com pipetas ou comprimidos antipulgas sem orientação veterinária. Risco de superdosagem. Vermífugos são seguros para usar junto.
                </p>

                <p>
                    Coleiras antipulgas de qualidade são investimento inteligente. Proteção contínua, praticidade e economia a longo prazo. Escolha marcas confiáveis e use corretamente!
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Quer saber o nível de cuidado com seu pet?</h3>
                    <p className="mb-6 text-lg">Faça nosso quiz gratuito e descubra seu PetScore oficial!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Descobrir meu PetScore
                    </Button>
                </div>
            </div>
        )
    },
    "plano-saude-pet-guia": {
        title: "Plano de Saúde para Pets: Vale a Pena? Guia Completo 2026",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Planos de saúde para pets custam entre R$ 50-300/mês e podem economizar milhares em emergências. Mas será que vale a pena para seu pet? Entenda coberturas, exclusões, carências e como escolher o melhor plano.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">O Que é Plano de Saúde Pet?</h2>
                <p>
                    Funciona como convênio médico humano: você paga mensalidade e tem acesso a consultas, exames e procedimentos com desconto ou sem custo adicional. Alguns cobrem até cirurgias e internações.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Principais Operadoras no Brasil</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Porto Seguro Pet</h3>
                <p>
                    Planos de R$ 80-250/mês. Cobertura nacional, reembolso de até 80%. Inclui consultas, exames, cirurgias e fisioterapia. Carência: 30 dias (consultas) e 180 dias (cirurgias).
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Petlove Saúde</h3>
                <p>
                    R$ 60-200/mês. Rede credenciada ampla. Telemedicina 24h incluída. Cobertura para vacinas e castração. Carência: 30 dias geral.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Allianz Pet</h3>
                <p>
                    R$ 90-280/mês. Sem limite de uso anual. Cobre doenças congênitas após 12 meses. Assistência funeral incluída. Carência: 30-180 dias conforme procedimento.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">O Que Geralmente Está Coberto</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Consultas veterinárias:</strong> Clínico geral e especialistas</li>
                    <li><strong>Exames:</strong> Sangue, raio-X, ultrassom, tomografia</li>
                    <li><strong>Cirurgias:</strong> Emergenciais e eletivas (após carência)</li>
                    <li><strong>Internações:</strong> UTI e enfermaria</li>
                    <li><strong>Medicamentos:</strong> Durante internação</li>
                    <li><strong>Fisioterapia:</strong> Pós-cirúrgica</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">O Que NÃO Está Coberto</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Doenças pré-existentes (antes da contratação)</li>
                    <li>Vacinas de rotina (alguns planos cobrem)</li>
                    <li>Banho e tosa</li>
                    <li>Ração medicamentosa</li>
                    <li>Tratamentos estéticos</li>
                    <li>Doenças congênitas (primeiros 12 meses)</li>
                </ul>

                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-yellow-800 mb-2">⚠️ Atenção às Carências</h3>
                    <p>Carência é o período que você paga mas não pode usar. Emergências têm carência de 24h-7 dias. Cirurgias: 30-180 dias. Leia o contrato!</p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Vale a Pena? Faça as Contas</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Cenário 1: Pet Saudável</h3>
                <p>
                    Gasto anual sem plano: R$ 800 (consultas + vacinas + vermífugo)<br />
                    Plano básico: R$ 60/mês = R$ 720/ano<br />
                    <strong>Resultado:</strong> Empate. Mas você tem segurança para emergências.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Cenário 2: Emergência Grave</h3>
                <p>
                    Cirurgia de urgência: R$ 5.000-15.000<br />
                    Com plano: R$ 0-1.500 (franquia)<br />
                    <strong>Economia:</strong> R$ 3.500-15.000
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Cenário 3: Doença Crônica</h3>
                <p>
                    Diabetes/insuficiência renal: R$ 500-1.500/mês em tratamento<br />
                    Com plano: R$ 100-300/mês (mensalidade + coparticipação)<br />
                    <strong>Economia anual:</strong> R$ 4.800-14.400
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Para Quem Vale Mais a Pena?</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Filhotes:</strong> Maior risco de acidentes e doenças</li>
                    <li><strong>Raças predispostas:</strong> Bulldogs, Dachshunds, Persas (problemas genéticos)</li>
                    <li><strong>Pets idosos:</strong> Acima de 7 anos (custos aumentam)</li>
                    <li><strong>Tutores sem reserva financeira:</strong> Emergência de R$ 10 mil pode quebrar</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Escolher o Melhor Plano</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Verifique a Rede Credenciada</h3>
                <p>
                    Tem veterinário perto de você? Aceita especialistas? Hospitais 24h disponíveis?
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Compare Carências</h3>
                <p>
                    Quanto menor, melhor. Evite planos com carência acima de 180 dias para cirurgias.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Leia as Exclusões</h3>
                <p>
                    Alguns planos não cobrem raças específicas ou doenças hereditárias. Leia a letra miúda!
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Verifique Reembolso vs Rede</h3>
                <p>
                    Planos de reembolso: você paga e depois é reembolsado (50-80%).<br />
                    Planos de rede: você usa veterinários credenciados sem pagar na hora.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Alternativa: Fundo de Emergência</h2>
                <p>
                    Se você tem disciplina financeira, pode criar um fundo próprio. Guarde R$ 100-200/mês em conta separada. Em 2 anos terá R$ 2.400-4.800 para emergências.
                </p>
                <p>
                    <strong>Vantagem:</strong> Dinheiro é seu, sem carências ou exclusões.<br />
                    <strong>Desvantagem:</strong> Emergência nos primeiros meses pode quebrar o fundo.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Dicas Finais</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Contrate quando o pet é jovem (mensalidade mais barata)</li>
                    <li>Não cancele após usar muito (recontratação tem carência novamente)</li>
                    <li>Guarde todos os recibos e laudos</li>
                    <li>Teste o atendimento antes de precisar (ligue, tire dúvidas)</li>
                </ul>

                <p>
                    Plano de saúde pet é investimento em tranquilidade. Se você não tem R$ 5-10 mil guardados para emergências, vale muito a pena. Seu pet merece o melhor cuidado!
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Quer saber o nível de cuidado com seu pet?</h3>
                    <p className="mb-6 text-lg">Faça nosso quiz gratuito e descubra seu PetScore oficial!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Descobrir meu PetScore
                    </Button>
                </div>
            </div>
        )
    },
    "como-adotar-pet-guia": {
        title: "Como Adotar um Pet: Guia Completo do Processo em 2026",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Adotar um pet salva vidas e traz amor incondicional para casa. Mas o processo tem etapas, documentos e responsabilidades. Aprenda tudo: onde adotar, como escolher, custos iniciais e como passar pela entrevista de adoção.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Por Que Adotar em Vez de Comprar?</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Salva vidas:</strong> 30 milhões de pets abandonados no Brasil</li>
                    <li><strong>Combate criadores ilegais:</strong> Muitos operam em condições cruéis</li>
                    <li><strong>Pets gratos:</strong> Adotados são extremamente leais</li>
                    <li><strong>Custo zero:</strong> Adoção é gratuita (só paga castração se ainda não feita)</li>
                    <li><strong>Variedade:</strong> Filhotes, adultos, idosos, raças puras e SRD</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Onde Adotar?</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">ONGs e Abrigos</h3>
                <p>
                    Organizações como Ampara Animal, SUIPA, Vira-Lata é Dez. Pets vacinados, vermifugados e castrados. Processo de adoção criterioso (entrevista + visita).
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Feiras de Adoção</h3>
                <p>
                    Acontecem em parques e pet shops aos finais de semana. Você conhece vários pets de uma vez. Processo mais rápido que ONGs.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Plataformas Online</h3>
                <p>
                    Sites como Petlove Adoção, Adopets, PetAnjo. Filtre por idade, porte, cidade. Contato direto com protetores independentes.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">CCZs (Centro de Controle de Zoonoses)</h3>
                <p>
                    Órgãos municipais. Pets resgatados das ruas. Processo burocrático, mas adoção gratuita e pets já vacinados.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-2">💚 Dica de Ouro</h3>
                    <p>Adote adultos ou idosos! Filhotes são adotados rapidamente. Pets adultos esperam anos por um lar e são mais calmos e treinados.</p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Processo de Adoção Passo a Passo</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Escolha do Pet</h3>
                <p>
                    Visite abrigos ou feiras. Interaja com vários pets. Observe comportamento: tímido, brincalhão, calmo? Escolha compatível com seu estilo de vida.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Pré-Cadastro</h3>
                <p>
                    Preencha formulário com dados pessoais, tipo de moradia, rotina, experiência com pets. Seja honesto - mentir pode resultar em devolução do pet.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Entrevista</h3>
                <p>
                    ONG liga ou agenda visita. Perguntas comuns:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Todos da casa concordam com a adoção?</li>
                    <li>Quem cuidará do pet se você viajar?</li>
                    <li>Tem condições financeiras para veterinário?</li>
                    <li>Casa tem telas/muros seguros?</li>
                    <li>Já teve pets? O que aconteceu com eles?</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Visita Domiciliar</h3>
                <p>
                    Algumas ONGs visitam sua casa para verificar segurança: portões, telas, quintal. Não precisa ser mansão - precisa ser seguro.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Assinatura do Termo</h3>
                <p>
                    Contrato de adoção responsável. Você se compromete a:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Não abandonar ou doar sem avisar a ONG</li>
                    <li>Castrar (se ainda não castrado)</li>
                    <li>Vacinar anualmente</li>
                    <li>Não deixar na rua ou corrente</li>
                    <li>Permitir visitas de acompanhamento (primeiros 6 meses)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Leva o Pet para Casa!</h3>
                <p>
                    Período de adaptação: 7-30 dias. Pet pode ficar assustado, não comer bem, esconder-se. É normal! Tenha paciência.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Documentos Necessários</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>RG e CPF</li>
                    <li>Comprovante de residência</li>
                    <li>Fotos da casa (algumas ONGs)</li>
                    <li>Referências pessoais (2-3 contatos)</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Custos Iniciais da Adoção</h2>
                <p>
                    Adoção é gratuita, mas você precisa investir em:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Castração:</strong> R$ 200-600 (se não castrado)</li>
                    <li><strong>Vacinas:</strong> R$ 80-150 (V10/V8 + antirrábica)</li>
                    <li><strong>Vermífugo:</strong> R$ 30-60</li>
                    <li><strong>Antipulgas:</strong> R$ 50-150</li>
                    <li><strong>Acessórios:</strong> R$ 200-400 (caminha, potes, coleira, brinquedos)</li>
                    <li><strong>Ração:</strong> R$ 100-300/mês</li>
                </ul>
                <p>
                    <strong>Total inicial:</strong> R$ 660-1.660
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Passar na Entrevista</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Seja Honesto</h3>
                <p>
                    Não minta sobre rotina ou condições. ONGs preferem negar adoção a ver pet devolvido depois.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Mostre Comprometimento</h3>
                <p>
                    Explique que pesquisou sobre a raça/porte, já comprou itens, tem veterinário de confiança.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Tenha Plano B</h3>
                <p>
                    "Se eu viajar, minha mãe cuida." "Se eu mudar de cidade, levo comigo." Mostre que pensou em tudo.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Erros Comuns na Adoção</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Escolher por aparência:</strong> Comportamento é mais importante</li>
                    <li><strong>Adotar por impulso:</strong> Pense bem, é compromisso de 10-20 anos</li>
                    <li><strong>Não preparar a casa:</strong> Compre itens antes de buscar o pet</li>
                    <li><strong>Esperar amor instantâneo:</strong> Vínculo leva semanas/meses</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Adaptação: Primeiros 30 Dias</h2>
                <p>
                    <strong>Semana 1:</strong> Pet explora, pode não comer bem, esconder-se. Deixe-o no ritmo dele.<br />
                    <strong>Semana 2-3:</strong> Começa a relaxar, brinca mais, aceita carinho.<br />
                    <strong>Semana 4+:</strong> Já se sente em casa, mostra personalidade real.
                </p>

                <p>
                    Adotar é um ato de amor que transforma duas vidas: a sua e a do pet. Prepare-se, seja paciente e aproveite cada momento com seu novo melhor amigo! 🐾
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Quer saber o nível de cuidado com seu pet?</h3>
                    <p className="mb-6 text-lg">Faça nosso quiz gratuito e descubra seu PetScore oficial!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Descobrir meu PetScore
                    </Button>
                </div>
            </div>
        )
    },
    "primeiro-pet-checklist": {
        title: "Primeiro Pet: Checklist Completo do Que Você Precisa em 2026",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Ter o primeiro pet é emocionante, mas também assustador. O que comprar? Quanto gastar? Como preparar a casa? Este guia completo lista TUDO que você precisa antes de trazer seu novo amigo para casa.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Antes de Trazer o Pet para Casa</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Escolha um Veterinário</h3>
                <p>
                    Pesquise clínicas perto de você. Leia avaliações no Google. Visite antes de precisar. Pergunte sobre valores de consulta (R$ 100-300) e emergências 24h.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Pet-Proof sua Casa</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Esconda fios elétricos (pets mastigam)</li>
                    <li>Remova plantas tóxicas (lírio, comigo-ninguém-pode, espada-de-são-jorge)</li>
                    <li>Feche armários baixos com produtos de limpeza</li>
                    <li>Instale telas em janelas e sacadas</li>
                    <li>Remova objetos pequenos que podem ser engolidos</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Defina um Orçamento</h3>
                <p>
                    <strong>Custo inicial:</strong> R$ 500-1.500<br />
                    <strong>Custo mensal:</strong> R$ 200-600 (ração, antipulgas, vermífugo)<br />
                    <strong>Emergências:</strong> Reserve R$ 2.000-5.000 ou contrate plano de saúde
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Checklist de Compras: Itens Essenciais</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Alimentação</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Ração de qualidade:</strong> R$ 80-200 (saco de 10-15kg). Escolha premium ou super premium.</li>
                    <li><strong>Potes de água e comida:</strong> R$ 30-80. Prefira inox ou cerâmica (não acumulam bactérias).</li>
                    <li><strong>Tapete para potes:</strong> R$ 20-40. Evita sujeira no chão.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Higiene</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Caixa de areia (gatos):</strong> R$ 30-100. Escolha fechada para evitar odor.</li>
                    <li><strong>Areia sanitária (gatos):</strong> R$ 15-40/mês.</li>
                    <li><strong>Tapete higiênico (cães):</strong> R$ 30-60 (pacote com 30 unidades).</li>
                    <li><strong>Shampoo pet:</strong> R$ 20-50. Nunca use shampoo humano!</li>
                    <li><strong>Escova/pente:</strong> R$ 15-40.</li>
                    <li><strong>Cortador de unhas:</strong> R$ 20-50.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Conforto</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Caminha:</strong> R$ 60-200. Escolha tamanho adequado ao porte adulto.</li>
                    <li><strong>Cobertor:</strong> R$ 30-80. Para dias frios.</li>
                    <li><strong>Arranhador (gatos):</strong> R$ 60-150. Essencial para proteger móveis.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Passeio e Segurança</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Coleira:</strong> R$ 20-60. Para gatos, use com fivela de segurança.</li>
                    <li><strong>Guia:</strong> R$ 25-80. Prefira 1,5-2m de comprimento.</li>
                    <li><strong>Peitoral (cães):</strong> R$ 40-100. Mais seguro que coleira simples.</li>
                    <li><strong>Plaquinha de identificação:</strong> R$ 15-30. Com nome, telefone e endereço.</li>
                    <li><strong>Caixa de transporte:</strong> R$ 80-250. Para viagens e idas ao vet.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Brinquedos</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Bola:</strong> R$ 10-30.</li>
                    <li><strong>Mordedor (cães):</strong> R$ 15-50. Essencial para filhotes.</li>
                    <li><strong>Varinha/ratinho (gatos):</strong> R$ 10-40.</li>
                    <li><strong>Brinquedo interativo:</strong> R$ 30-80. Estimula mentalmente.</li>
                </ul>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">💰 Orçamento Total Inicial</h3>
                    <p><strong>Básico:</strong> R$ 500-800<br /><strong>Completo:</strong> R$ 1.000-1.500<br /><strong>Premium:</strong> R$ 1.500-2.500</p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Checklist de Saúde</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Primeira Semana</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Consulta veterinária inicial (R$ 100-300)</li>
                    <li>Exame de fezes (R$ 50-100)</li>
                    <li>Teste de FIV/FeLV para gatos (R$ 80-150)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Primeiro Mês</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Vermífugo (R$ 30-60)</li>
                    <li>Antipulgas (R$ 50-150)</li>
                    <li>Primeira dose de vacina (R$ 60-120)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Primeiros 6 Meses</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Completar protocolo de vacinas (3-4 doses): R$ 200-500</li>
                    <li>Vacina antirrábica: R$ 50-100</li>
                    <li>Castração: R$ 200-800</li>
                    <li>Microchip: R$ 80-150 (opcional mas recomendado)</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Calendário de Cuidados</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Diário</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Água fresca (troque 2x/dia)</li>
                    <li>Ração (2-3x/dia conforme idade)</li>
                    <li>Limpeza de caixa de areia (gatos)</li>
                    <li>Passeio (cães): 2-3x/dia, 15-30min cada</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Semanal</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Escovação (raças de pelo longo: diária)</li>
                    <li>Limpeza de orelhas</li>
                    <li>Verificar unhas</li>
                    <li>Lavar potes e caminha</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Mensal</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Antipulgas/carrapatos</li>
                    <li>Vermífugo (filhotes até 6 meses)</li>
                    <li>Banho (cães: 15-30 dias; gatos: raramente)</li>
                    <li>Corte de unhas</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Anual</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Reforço de vacinas</li>
                    <li>Check-up completo (exames de sangue)</li>
                    <li>Limpeza dentária (se necessário)</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Erros de Iniciante</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Comprar tudo de uma vez:</strong> Compre o essencial primeiro, depois complemente</li>
                    <li><strong>Ração barata:</strong> Economia falsa - pet come mais e adoece</li>
                    <li><strong>Pular veterinário:</strong> Check-up inicial é essencial</li>
                    <li><strong>Não castrar:</strong> Previne câncer e comportamentos indesejados</li>
                    <li><strong>Deixar sozinho muito tempo:</strong> Filhotes precisam de atenção constante</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Apps Úteis para Tutores</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>11pets:</strong> Controle de vacinas e vermífugos</li>
                    <li><strong>Petlove:</strong> Compras online com entrega rápida</li>
                    <li><strong>Guia de Plantas Tóxicas:</strong> Identifica plantas perigosas</li>
                    <li><strong>Dog Monitor:</strong> Câmera para ver pet quando estiver fora</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Primeiros Sinais de Alerta</h2>
                <p>
                    Leve ao veterinário IMEDIATAMENTE se notar:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Vômito ou diarreia por mais de 24h</li>
                    <li>Recusa total de água ou comida</li>
                    <li>Letargia extrema (não levanta, não brinca)</li>
                    <li>Dificuldade para respirar</li>
                    <li>Sangue nas fezes ou urina</li>
                    <li>Convulsões</li>
                </ul>

                <p>
                    Ter um pet é responsabilidade, mas também é uma das experiências mais gratificantes da vida. Prepare-se bem, seja paciente e aproveite cada momento! 🐾❤️
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Quer saber o nível de cuidado com seu pet?</h3>
                    <p className="mb-6 text-lg">Faça nosso quiz gratuito e descubra seu PetScore oficial!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Descobrir meu PetScore
                    </Button>
                </div>
            </div>
        )
    },
    "vacinas-pet-guia-veterinario": {
        title: "Guia Completo de Vacinas para Cães e Gatos em 2026: Calendário e Cuidados",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Como veterinário, a pergunta que mais ouço é: "Doutor, quais vacinas meu pet realmente precisa?". A vacinação é o pilar mais importante da medicina preventiva. Ela protege contra doenças fatais como Cinomose, Parvovirose e Raiva. Neste guia técnico e prático, explico o protocolo ideal para 2026.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Por Que Vacinar é Inegociável?</h2>
                <p>
                    Vacinas estimulam o sistema imunológico a criar anticorpos. Se um pet não vacinado entra em contato com o vírus, o corpo não sabe se defender, levando a doenças graves e frequentemente fatais. O custo de tratar uma Parvovirose (internação, soro, antibióticos) pode chegar a R$ 5.000, enquanto a vacina custa uma fração disso.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Vacinas Essenciais para Cães (Obrigatórias)</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Múltipla (V8 ou V10)</h3>
                <p>
                    Protege contra as doenças mais letais: Cinomose, Parvovirose, Hepatite Infecciosa, Adenovírus, Parainfluenza e Leptospirose.
                </p>
                <p>
                    <strong>Diferença V8 x V10:</strong> A V10 protege contra 2 cepas a mais de Leptospirose. Para cães que vivem em áreas com ratos ou enchentes, a V10 é superior.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Antirrábica</h3>
                <p>
                    Obrigatória por lei. A Raiva é uma zoonose (passa para humanos) e é 100% fatal. Não existe cura.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Vacinas Opcionais (Mas Recomendadas)</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Gripe Canina (Tosse dos Canis):</strong> Essencial para cães que frequentam creches, parques ou banho e tosa. Protege contra Bordetella e Parainfluenza.</li>
                    <li><strong>Giárdia:</strong> Recomendada para cães que vivem em quintais ou passeiam muito. A Giardia causa diarreia severa e passa para humanos.</li>
                    <li><strong>Leishmaniose:</strong> Indispensável em regiões endêmicas (litoral, interior de SP/MG/Nordeste). Doença grave transmitida pelo mosquito palha.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Protocolo de Vacinação: Filhotes de Cães</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">📅 Calendário Padrão</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>45 dias:</strong> 1ª dose da V8/V10</li>
                        <li><strong>66 dias:</strong> 2ª dose da V8/V10</li>
                        <li><strong>87 dias:</strong> 3ª dose da V8/V10 + Gripe Canina</li>
                        <li><strong>108 dias:</strong> 4ª dose da V8/V10 (opcional, para raças sensíveis como Rottweiler) + Reforço Gripe + Giárdia</li>
                        <li><strong>129 dias:</strong> Antirrábica + Reforço Giárdia</li>
                    </ul>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Vacinas Essenciais para Gatos</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Múltipla (V3, V4 ou V5)</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>V3:</strong> Panleucopenia, Rinotraqueíte e Calicivirose. (Básica)</li>
                    <li><strong>V4:</strong> Tudo da V3 + Clamidiose. (Recomendada)</li>
                    <li><strong>V5:</strong> Tudo da V4 + FeLV (Leucemia Felina). (Padrão Ouro)</li>
                </ul>

                <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-purple-800 mb-2">🐱 Atenção à FeLV</h3>
                    <p>Antes de aplicar a V5, é OBRIGATÓRIO fazer o teste de FIV/FeLV. Se o gato já tiver o vírus, a vacina não adianta e pode mascarar sintomas. Gatos negativos devem tomar a V5.</p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Protocolo de Vacinação: Filhotes de Gatos</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>60 dias:</strong> 1ª dose da V4 ou V5</li>
                    <li><strong>90 dias:</strong> 2ª dose da V4 ou V5</li>
                    <li><strong>120 dias:</strong> Antirrábica</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Reforço Anual: O Erro Mais Comum</h2>
                <p>
                    Muitos tutores vacinam quando filhote e esquecem depois. <strong>O reforço é ANUAL para todas as vacinas</strong> (V10, Raiva, Gripe, etc.). A imunidade cai após 12 meses, deixando o pet vulnerável novamente.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Efeitos Colaterais: O Que é Normal?</h2>
                <p>
                    Nas primeiras 24-48h após a vacina, é comum:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Febre leve e apatia (ficar quietinho)</li>
                    <li>Dor ou inchaço no local da aplicação</li>
                    <li>Dormir mais que o normal</li>
                </ul>
                <p>
                    <strong>Sinais de Alerta (Volte ao Vet):</strong> Rosto inchado (reação alérgica), vômitos intensos, dificuldade para respirar ou desmaio.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Mitos e Verdades</h2>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">"Gato de apartamento não precisa de vacina."</h3>
                <p>
                    <strong>MITO.</strong> Vírus como a Panleucopenia são ultra-resistentes e você pode trazê-los na sola do sapato ou na roupa. Morcegos (transmissores da Raiva) entram em apartamentos.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">"Cachorro idoso não precisa mais vacinar."</h3>
                <p>
                    <strong>MITO.</strong> O sistema imune de idosos é mais fraco (imunossenescência). Eles precisam da proteção vacinal tanto quanto filhotes.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">"Vacina importada é melhor que nacional?"</h3>
                <p>
                    <strong>VERDADE TÉCNICA.</strong> Vacinas importadas (éticas) passam por controles de qualidade mais rígidos e garantem melhor imunização ("pega" melhor). A maioria dos veterinários confia mais na proteção das importadas.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Janela Imunológica</h2>
                <p>
                    O filhote só está protegido 21 dias APÓS a última dose da V10/V5. Antes disso, <strong>NÃO PASSEIE NA RUA</strong>. O contato com chão contaminado pode ser fatal. Use colo ou carrinho se precisar sair.
                </p>

                <p>
                    Vacinar é um ato de amor e responsabilidade. Mantenha a carteirinha em dia e proteja quem você ama. Na dúvida, consulte sempre seu veterinário de confiança.
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Quer saber o nível de cuidado com seu pet?</h3>
                    <p className="mb-6 text-lg">Faça nosso quiz gratuito e descubra seu PetScore oficial!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Descobrir meu PetScore
                    </Button>
                </div>
            </div>
        )
    },
    "plano-saude-pet": {
        title: "Plano de Saúde para Pets: Vale a Pena em 2026? Guia Completo",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    O mercado de planos de saúde para pets está explodindo no Brasil. Com crescimento anual de 13%, mais de 500 mil pets já têm cobertura médica. Mas será que vale a pena para você? Como veterinário e consultor financeiro pet, vou te mostrar exatamente quando contratar, o que evitar e como escolher o plano ideal sem cair em armadilhas.
                </p>
                <p>
                    Uma cirurgia de emergência pode custar entre R$ 3.000 e R$ 15.000. Um tratamento oncológico ultrapassa facilmente os R$ 20.000. Para muitos tutores, o plano de saúde pet deixou de ser luxo e virou planejamento financeiro inteligente.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">O Que é um Plano de Saúde Pet?</h2>
                <p>
                    Funciona de forma similar ao plano de saúde humano: você paga uma mensalidade e, em troca, tem acesso a consultas, exames, cirurgias e internações com descontos ou cobertura total, dependendo do plano.
                </p>
                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Tipos de Planos</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Básico:</strong> Consultas ilimitadas, vacinas e vermífugos. Mensalidade: R$ 50 a R$ 100.</li>
                    <li><strong>Intermediário:</strong> Inclui exames laboratoriais, ultrassom e raio-X. Mensalidade: R$ 100 a R$ 200.</li>
                    <li><strong>Completo:</strong> Cobertura para cirurgias, internações, quimioterapia e fisioterapia. Mensalidade: R$ 200 a R$ 500.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Quando Vale a Pena Contratar?</h2>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                        <h4 className="font-bold text-lg mb-3 text-green-800">✅ Vale a Pena Se:</h4>
                        <ul className="space-y-2 text-sm">
                            <li>• Seu pet tem raça predisposta a doenças (Bulldog, Golden, Persa)</li>
                            <li>• Você não tem reserva de emergência de R$ 5.000+</li>
                            <li>• Seu pet é filhote (previne custos futuros)</li>
                            <li>• Você mora longe de clínicas populares</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                        <h4 className="font-bold text-lg mb-3 text-red-800">❌ Talvez Não Valha Se:</h4>
                        <ul className="space-y-2 text-sm">
                            <li>• Seu pet é SRD saudável e jovem</li>
                            <li>• Você tem fundo de emergência robusto</li>
                            <li>• Seu pet já é idoso (carência longa e mensalidade alta)</li>
                            <li>• Você tem acesso a clínicas universitárias</li>
                        </ul>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Armadilhas e Letras Miúdas</h2>
                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">1. Carência</h3>
                <p>
                    Período em que você paga, mas não pode usar. Varia de 30 dias (consultas) a 180 dias (cirurgias). Doenças pré-existentes NUNCA são cobertas.
                </p>
                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">2. Rede Credenciada Limitada</h3>
                <p>
                    Alguns planos só funcionam em clínicas específicas. Se você já tem um veterinário de confiança, confirme se ele aceita o plano.
                </p>
                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">3. Franquia e Coparticipação</h3>
                <p>
                    Franquia: valor que você paga antes do plano cobrir (ex: R$ 500). Coparticipação: você paga um % do procedimento (ex: 20% de uma cirurgia de R$ 5.000 = R$ 1.000 do seu bolso).
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Principais Operadoras no Brasil (2026)</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Porto Seguro Pet:</strong> Maior rede credenciada. Planos a partir de R$ 60/mês.</li>
                    <li><strong>Petlove & Co:</strong> Telemedicina 24h incluída. Planos a partir de R$ 80/mês.</li>
                    <li><strong>Vet Smart:</strong> Especializado em pets idosos. Planos a partir de R$ 120/mês.</li>
                    <li><strong>Allianz Pet:</strong> Cobertura internacional. Planos a partir de R$ 150/mês.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Alternativa: Fundo de Emergência Pet</h2>
                <p>
                    Se você tem disciplina financeira, pode criar seu próprio "plano". Guarde R$ 150/mês em uma conta separada. Em 2 anos, você terá R$ 3.600 disponíveis sem carência, sem burocracia e sem restrição de clínica.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 my-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">💡 Dica do Especialista</h3>
                    <p>Combine os dois: contrate um plano básico (R$ 70/mês) para consultas e vacinas + guarde R$ 100/mês para emergências. Assim você tem o melhor dos dois mundos.</p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Checklist: Antes de Contratar</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>✓ Leia o contrato inteiro (especialmente exclusões)</li>
                    <li>✓ Confirme a rede credenciada na sua cidade</li>
                    <li>✓ Verifique o prazo de carência para cada procedimento</li>
                    <li>✓ Pergunte sobre reajuste anual (pode subir até 30%)</li>
                    <li>✓ Confirme se cobre doenças hereditárias da raça</li>
                </ul>

                <p>
                    Plano de saúde pet não é para todos, mas pode ser um salva-vidas financeiro e emocional. Analise seu perfil, faça as contas e escolha com consciência. Seu bolso e seu pet agradecem.
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Você cuida bem do seu pet?</h3>
                    <p className="mb-6 text-lg">Descubra seu nível de cuidado e receba dicas personalizadas!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Fazer o Quiz Gratuito
                    </Button>
                </div>
            </div>
        )
    },
    "saude-bucal-pets": {
        title: "Saúde Bucal de Cães e Gatos: O Guia Definitivo da Higiene Dental",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    80% dos cães e 70% dos gatos acima de 3 anos têm doença periodontal. Essa estatística assustadora revela uma verdade incômoda: a saúde bucal é a área mais negligenciada no cuidado pet. E as consequências vão muito além do mau hálito. Bactérias da boca migram para o coração, rins e fígado, encurtando a vida do seu melhor amigo.
                </p>
                <p>
                    Como veterinário, vejo diariamente tutores chocados ao descobrir que o "bafo" do pet era, na verdade, uma infecção grave. Neste guia, vou te ensinar tudo sobre prevenção, tratamento e como manter os dentes do seu pet saudáveis sem drama.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Por Que a Saúde Bucal é Tão Importante?</h2>
                <p>
                    A boca é a porta de entrada do organismo. Quando há acúmulo de placa bacteriana (aquela camada amarelada nos dentes), ela se transforma em tártaro (placa endurecida). O tártaro inflama a gengiva (gengivite), que evolui para doença periodontal, causando:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Dor crônica:</strong> Dentes moles, gengivas sangrando, dificuldade para comer.</li>
                    <li><strong>Perda de dentes:</strong> Irreversível.</li>
                    <li><strong>Infecções sistêmicas:</strong> Bactérias caem na corrente sanguínea e atacam órgãos vitais.</li>
                    <li><strong>Endocardite bacteriana:</strong> Infecção no coração, potencialmente fatal.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Sinais de Alerta: Quando Ir ao Veterinário</h2>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
                    <h3 className="text-xl font-bold text-red-700 mb-3">🚨 Sintomas de Doença Periodontal</h3>
                    <ul className="space-y-2">
                        <li>• Mau hálito intenso (cheiro de podre)</li>
                        <li>• Gengivas vermelhas, inchadas ou sangrando</li>
                        <li>• Tártaro visível (camada marrom/amarela nos dentes)</li>
                        <li>• Dificuldade para mastigar ou recusa de ração seca</li>
                        <li>• Salivação excessiva ou sangue na saliva</li>
                        <li>• Dente mole ou caindo</li>
                        <li>• Emagrecimento (dor ao comer)</li>
                    </ul>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Prevenção: O Que Você Pode Fazer em Casa</h2>
                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">1. Escovação Dental (O Padrão Ouro)</h3>
                <p>
                    Sim, é possível escovar os dentes do seu pet! O ideal é diariamente, mas 3x por semana já faz diferença.
                </p>
                <div className="bg-card p-6 rounded-xl border border-border/50 my-6">
                    <h4 className="font-bold text-lg mb-4">🪥 Como Escovar (Passo a Passo)</h4>
                    <ol className="list-decimal pl-6 space-y-3">
                        <li>Use pasta de dente ESPECÍFICA para pets (pasta humana é tóxica). Sabores: frango, carne, malte.</li>
                        <li>Escova: dedeira de silicone (para iniciantes) ou escova infantil macia.</li>
                        <li>Comece devagar: deixe ele lamber a pasta por 3 dias para se acostumar com o sabor.</li>
                        <li>Levante o lábio e escove em movimentos circulares, focando na linha da gengiva.</li>
                        <li>Não precisa enxaguar. Recompense com petisco após.</li>
                    </ol>
                </div>

                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">2. Produtos Auxiliares</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Petiscos Dentais:</strong> Ossos de couro, palitos com enzimas (ex: Greenies, DentaStix). Ajudam a raspar o tártaro mecanicamente.</li>
                    <li><strong>Brinquedos Mastigáveis:</strong> Borracha texturizada (Kong Dental) ou corda. Massageiam a gengiva.</li>
                    <li><strong>Ração Dental:</strong> Croquetes maiores e mais duros que forçam a mastigação (ex: Hill's t/d).</li>
                    <li><strong>Aditivos para Água:</strong> Líquidos que inibem bactérias. Eficácia moderada.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">3. Alimentação Estratégica</h3>
                <p>
                    Ração úmida (patê) não limpa os dentes. Se possível, ofereça ração seca ou intercale. Ossos recreativos crus (para cães) também ajudam, mas NUNCA ossos cozidos (podem lascar e perfurar).
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Tratamento Profissional: Limpeza Dentária</h2>
                <p>
                    Quando o tártaro já está instalado, só a limpeza profissional resolve. O procedimento é feito sob anestesia geral e inclui:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Remoção de tártaro com ultrassom</li>
                    <li>Polimento dos dentes</li>
                    <li>Avaliação de dentes comprometidos (extração se necessário)</li>
                    <li>Aplicação de flúor</li>
                </ul>
                <p>
                    <strong>Custo médio:</strong> R$ 800 a R$ 2.500 (varia com porte e gravidade). <strong>Frequência:</strong> A cada 1-2 anos, dependendo da prevenção em casa.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Diferenças Entre Cães e Gatos</h2>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-card p-6 rounded-xl border border-border/50">
                        <h4 className="font-bold text-lg mb-3">🐕 Cães</h4>
                        <ul className="space-y-2 text-sm">
                            <li>• Mais tolerantes à escovação</li>
                            <li>• Aceitam petiscos dentais grandes</li>
                            <li>• Raças pequenas (Yorkie, Poodle) têm mais problemas</li>
                        </ul>
                    </div>
                    <div className="bg-card p-6 rounded-xl border border-border/50">
                        <h4 className="font-bold text-lg mb-3">🐱 Gatos</h4>
                        <ul className="space-y-2 text-sm">
                            <li>• Mais resistentes à escovação (treine desde filhote)</li>
                            <li>• Sofrem de reabsorção dentária (doença específica felina)</li>
                            <li>• Ração úmida piora o problema</li>
                        </ul>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Mitos e Verdades</h2>
                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">"Osso limpa os dentes do cachorro."</h3>
                <p>
                    <strong>MEIA VERDADE.</strong> Ossos recreativos crus (canela bovina) ajudam, mas ossos cozidos ou muito duros (fêmur) podem quebrar dentes. Nunca dê osso de galinha cozido.
                </p>
                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">"Gato não precisa de cuidado dental."</h3>
                <p>
                    <strong>MITO PERIGOSO.</strong> Gatos escondem dor muito bem. Quando você percebe, a doença já está avançada.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 my-6">
                    <h3 className="text-xl font-bold text-green-800 mb-2">💚 Rotina Ideal de Saúde Bucal</h3>
                    <ul className="space-y-2">
                        <li>• <strong>Diariamente:</strong> Escovação (ou pelo menos 3x/semana)</li>
                        <li>• <strong>Diariamente:</strong> Petisco dental após a última refeição</li>
                        <li>• <strong>Anualmente:</strong> Check-up veterinário com avaliação bucal</li>
                        <li>• <strong>A cada 1-2 anos:</strong> Limpeza profissional (se necessário)</li>
                    </ul>
                </div>

                <p>
                    Cuidar da saúde bucal do seu pet é um ato de amor que pode adicionar anos de vida. Comece hoje, mesmo que seja só com um petisco dental. Seu pet (e o nariz de quem recebe lambidas) agradecem!
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Você é um tutor exemplar?</h3>
                    <p className="mb-6 text-lg">Descubra seu PetScore e veja como melhorar os cuidados!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Fazer o Quiz Agora
                    </Button>
                </div>
            </div>
        )
    },
    "probioticos-pets": {
        title: "Probióticos para Pets: O Guia Completo de Benefícios e Uso",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="drop-cap">
                    Probióticos deixaram de ser modinha e viraram ciência consolidada na medicina veterinária. Esses "bichinhos do bem" que vivem no intestino do seu pet são responsáveis por 70% da imunidade, influenciam o humor, a pele e até a longevidade. Mas nem todo probiótico funciona, e usar o produto errado pode ser desperdício de dinheiro.
                </p>
                <p>
                    Como veterinário especializado em nutrição, vou te mostrar exatamente quando usar, quais cepas funcionam de verdade e como escolher o melhor probiótico para o seu cão ou gato.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">O Que São Probióticos?</h2>
                <p>
                    Probióticos são microrganismos vivos (bactérias e leveduras "do bem") que, quando administrados em quantidades adequadas, trazem benefícios à saúde. Eles colonizam o intestino e equilibram a microbiota, que é o ecossistema de trilhões de bactérias que vivem no trato digestivo.
                </p>
                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Probióticos vs Prebióticos</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Probióticos:</strong> As bactérias vivas (ex: Lactobacillus, Bifidobacterium).</li>
                    <li><strong>Prebióticos:</strong> A "comida" das bactérias boas (fibras como FOS e MOS).</li>
                    <li><strong>Simbióticos:</strong> Combinação dos dois (mais eficaz).</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Benefícios Comprovados pela Ciência</h2>
                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">1. Saúde Digestiva</h3>
                <p>
                    Probióticos são o tratamento de primeira linha para:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Diarreia (viral, bacteriana ou por estresse)</li>
                    <li>Diarreia pós-antibiótico (os antibióticos matam bactérias boas também)</li>
                    <li>Síndrome do Intestino Irritável (SII)</li>
                    <li>Flatulência excessiva</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">2. Fortalecimento da Imunidade</h3>
                <p>
                    70% das células imunológicas estão no intestino. Uma microbiota saudável = sistema imune forte. Estudos mostram que probióticos reduzem infecções respiratórias e urinárias em cães.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">3. Saúde da Pele e Pelagem</h3>
                <p>
                    O eixo intestino-pele é real. Probióticos reduzem alergias alimentares, dermatites atópicas e coceira crônica. Pets com pele sensível se beneficiam muito.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">4. Saúde Mental (Eixo Intestino-Cérebro)</h3>
                <p>
                    Bactérias intestinais produzem neurotransmissores como serotonina. Probióticos podem reduzir ansiedade de separação e comportamentos compulsivos em cães.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Quando Usar Probióticos?</h2>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                        <h4 className="font-bold text-lg mb-3 text-green-800">✅ Situações Ideais</h4>
                        <ul className="space-y-2 text-sm">
                            <li>• Durante e após tratamento com antibióticos</li>
                            <li>• Diarreia aguda ou crônica</li>
                            <li>• Troca de ração (transição)</li>
                            <li>• Estresse (viagem, mudança, chegada de novo pet)</li>
                            <li>• Filhotes (fortalece imunidade)</li>
                            <li>• Idosos (microbiota enfraquece com a idade)</li>
                            <li>• Pets com alergias ou pele sensível</li>
                        </ul>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                        <h4 className="font-bold text-lg mb-3 text-yellow-800">⚠️ Quando NÃO Usar</h4>
                        <ul className="space-y-2 text-sm">
                            <li>• Pet com sistema imune severamente comprometido (ex: FIV/FeLV avançado)</li>
                            <li>• Durante infecção bacteriana ativa grave (consulte o vet)</li>
                            <li>• Sem orientação em casos de pancreatite aguda</li>
                        </ul>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Cepas Mais Eficazes para Pets</h2>
                <p>
                    Nem toda bactéria funciona. Procure produtos com essas cepas comprovadas:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Lactobacillus acidophilus:</strong> Diarreia e imunidade.</li>
                    <li><strong>Bifidobacterium animalis:</strong> Saúde intestinal e pele.</li>
                    <li><strong>Enterococcus faecium:</strong> Específico para cães, reduz diarreia.</li>
                    <li><strong>Saccharomyces boulardii:</strong> Levedura, excelente para diarreia aguda.</li>
                    <li><strong>Bacillus subtilis:</strong> Resistente ao calor, ótimo para rações.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Como Escolher o Melhor Produto?</h2>
                <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Checklist de Qualidade</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>✓ <strong>UFC (Unidades Formadoras de Colônias):</strong> Mínimo de 1 bilhão de UFC por dose. Ideal: 5 a 10 bilhões.</li>
                    <li>✓ <strong>Cepas identificadas:</strong> O rótulo deve listar as cepas específicas, não só "Lactobacillus sp."</li>
                    <li>✓ <strong>Validade:</strong> Bactérias morrem com o tempo. Compre produtos frescos.</li>
                    <li>✓ <strong>Armazenamento:</strong> Alguns precisam de refrigeração. Leia a embalagem.</li>
                    <li>✓ <strong>Sem açúcar:</strong> Evite produtos com açúcar ou corantes.</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Formas de Apresentação</h2>
                <div className="bg-card p-6 rounded-xl border border-border/50 my-6">
                    <h4 className="font-bold text-lg mb-4">📦 Tipos de Probióticos</h4>
                    <ul className="space-y-3">
                        <li><strong>Pó (Sachê):</strong> Mistura na comida. Ótimo para filhotes e gatos. Ex: Floratil Pet, Proviable.</li>
                        <li><strong>Cápsulas:</strong> Pode abrir e misturar ou dar inteira. Ex: FortiFlora.</li>
                        <li><strong>Pasta:</strong> Palatável, fácil de administrar. Ex: Nutri-Vet.</li>
                        <li><strong>Ração com Probiótico:</strong> Conveniente, mas UFC costuma ser baixo.</li>
                    </ul>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Dosagem e Duração</h2>
                <p>
                    <strong>Dose padrão:</strong> 1 sachê ou cápsula por dia (para cães de 10-20 kg). Ajuste conforme peso e orientação do rótulo.
                </p>
                <p>
                    <strong>Duração:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Diarreia aguda: 5 a 7 dias</li>
                    <li>Pós-antibiótico: Durante o tratamento + 7 dias após</li>
                    <li>Manutenção (idosos, alérgicos): Uso contínuo ou 15 dias por mês</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Probióticos Naturais na Alimentação</h2>
                <p>
                    Você também pode oferecer alimentos ricos em probióticos (com moderação e orientação):
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Iogurte natural sem açúcar:</strong> 1 colher de sopa para cães pequenos, 2-3 para grandes.</li>
                    <li><strong>Kefir:</strong> Mais potente que iogurte. Dose: mesma do iogurte.</li>
                    <li><strong>Chucrute (sem sal):</strong> Pequenas quantidades para cães.</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                    ⚠️ Gatos são intolerantes à lactose. Evite laticínios. Use probióticos específicos.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Efeitos Colaterais</h2>
                <p>
                    Probióticos são seguros, mas nos primeiros dias pode haver:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Flatulência (gases) temporária</li>
                    <li>Fezes mais moles (normaliza em 2-3 dias)</li>
                </ul>
                <p>
                    Se piorar, suspenda e consulte o veterinário.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 my-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">💙 Dica de Ouro</h3>
                    <p>Combine probióticos com prebióticos (fibras). Alimentos como abóbora cozida, batata-doce e chicória são excelentes prebióticos naturais que potencializam o efeito.</p>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-10 mb-6">Marcas Recomendadas (Brasil, 2026)</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>FortiFlora (Purina):</strong> Líder de mercado. Cães e gatos.</li>
                    <li><strong>Proviable (Nutramax):</strong> Alta concentração de UFC.</li>
                    <li><strong>Floratil Pet:</strong> Saccharomyces boulardii, ótimo para diarreia.</li>
                    <li><strong>Organnact Pet (Organnact):</strong> Nacional, boa relação custo-benefício.</li>
                </ul>

                <p>
                    Probióticos são uma ferramenta poderosa para a saúde do seu pet. Use com inteligência, escolha produtos de qualidade e observe os resultados. Um intestino feliz = um pet feliz!
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Quer saber se você cuida bem do seu pet?</h3>
                    <p className="mb-6 text-lg">Faça nosso quiz e descubra seu PetScore!</p>
                    <Button onClick={() => window.location.href = '/quiz'} className="w-full md:w-auto font-bold text-lg">
                        Fazer o Quiz Gratuito
                    </Button>
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
