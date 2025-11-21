import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const articles = {
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
                        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 leading-tight">{article.title}</h1>
                        <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 text-foreground">
                            {article.content}
                        </div>
                    </article>

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
                                    className="bg-card p-6 rounded-xl shadow-sm border border-border/50 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group"
                                >
                                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                                        {item.title}
                                    </h3>
                                    <span className="text-primary text-sm font-medium flex items-center gap-1">
                                        Ler artigo <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </span>
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
