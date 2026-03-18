const countdownElements = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
    caption: document.getElementById("countdown-caption")
};

const monthMemories = {
    1: {
        title: "Mês 1 — Onde tudo começou ✨",
        text: "Foi neste primeiro mês que a nossa história começou… De um jeito único, diferente de todos, um pedido que você nunca imaginaria — mas que mudou tudo entre nós. Antes mesmo disso, tivemos o acampamento IDE, que marcou o início de algo muito especial. Foi ali que eu comecei a te conhecer de verdade, enxergar quem você é, e perceber o quanto você já estava se tornando importante pra mim. A verdade é que, naquele momento, eu já tinha vontade de te pedir em namoro a todo instante… eu só estava esperando o momento certo. Também tivemos nossos primeiros encontros, simples, mas cheios de significado. Cada conversa, cada olhar, cada instante ao seu lado foi construindo algo lindo, que só crescia dentro de mim. E ali, sem a gente perceber totalmente, já estava nascendo a nossa história. ❤️",
        images: [
            {
                src: "assets/img/mes1/IMG_20250412_181056.jpg",
                alt: "Foto do primeiro mês do casal",
                caption: "Um dos primeiros registros lindos do nosso começo."
            },
            {
                src: "assets/img/mes1/IMG_20250418_172336.jpg",
                alt: "Foto do primeiro mês do casal",
                caption: "Nosso primeiro mês guardado com todo o carinho."
            },
            {
                src: "assets/img/mes1/IMG_20250430_205402.jpg",
                alt: "Foto do primeiro mês do casal",
                caption: "Cada momento ao seu lado já parecia inesquecível."
            },
            {
                src: "assets/img/mes1/IMG-20250323-WA0021.jpg",
                alt: "Foto do primeiro mês do casal",
                caption: "Uma memória especial do nosso mês 1."
            },
            {
                src: "assets/img/mes1/IMG-20250330-WA0019.jpg",
                alt: "Foto do primeiro mês do casal",
                caption: "Nosso amor começando a ganhar forma."
            },
            {
                src: "assets/img/mes1/IMG-20250418-WA0004.jpg",
                alt: "Foto do primeiro mês do casal",
                caption: "Mais um instante precioso para guardar."
            },
            {
                src: "assets/img/mes1/IMG-20250418-WA0010.jpg",
                alt: "Foto do primeiro mês do casal",
                caption: "O início de uma história que eu quero sempre lembrar."
            }
        ]
    },
    2: {
        title: "Mês 2 — Dois corações se aproximando 💞",
        text: "No segundo mês, a gente começou a viver ainda mais um ao lado do outro… Saímos mais, conversamos mais, e a cada dia fomos nos conhecendo melhor, descobrindo detalhes, jeitos e manias que só fizeram a gente se apaixonar ainda mais. Foi também quando tiramos nossas fotinhas juntos, registrando momentos simples, mas que carregavam um significado enorme pra gente. Tivemos nosso primeiro passeio só nós dois, lá no Pastel de Estrela, um momento que ficou marcado como o começo das nossas saídas “só a gente”. E teve também a sua vinda aqui em casa, mais um passo importante, mais um momento especial que foi ficando guardado no coração. Ainda estava tudo leve, tudo lindo… Era fase das flores, dos sorrisos fáceis, dos olhares apaixonados — dois corações completamente entregues um ao outro. ❤️",
        images: [
            {
                src: "assets/img/mes2/IMG_20250501_152344.jpg",
                alt: "Foto do segundo mês do casal",
                caption: "Mais um capítulo lindo da nossa história."
            },
            {
                src: "assets/img/mes2/IMG_20250518_191918.jpg",
                alt: "Foto do segundo mês do casal",
                caption: "Um registro cheio de carinho do nosso mês 2."
            },
            {
                src: "assets/img/mes2/IMG_20250518_194940.jpg",
                alt: "Foto do segundo mês do casal",
                caption: "Cada instante com você seguia ficando mais especial."
            },
            {
                src: "assets/img/mes2/IMG_20250518_205812.jpg",
                alt: "Foto do segundo mês do casal",
                caption: "Nosso amor crescendo em cada memória."
            },
            {
                src: "assets/img/mes2/IMG_20250525_175352.jpg",
                alt: "Foto do segundo mês do casal",
                caption: "Um momento simples que virou lembrança favorita."
            },
            {
                src: "assets/img/mes2/IMG_20250531_185635.jpg",
                alt: "Foto do segundo mês do casal",
                caption: "Terminamos o mês com o coração ainda mais cheio."
            }
        ]
    },
    3: {
        title: "Mês 3 — Nosso primeiro Dia dos Namorados 💐",
        text: "No terceiro mês, começamos a viver novas experiências juntos… Como nossas idas para pescar de barco — momentos simples, mas que se tornaram inesquecíveis. E claro, você pegando mais peixe que eu (até hoje não aceito muito bem isso 😅), mas o que mais importava era o quanto a gente se divertia estando lado a lado. Mas esse mês teve algo ainda mais especial… Foi o nosso primeiro Dia dos Namorados. Um dia que marcou muito pra mim, porque você foi a primeira — e única — mulher para quem eu dei um buquê de flores. Ali, naquele momento, eu tive certeza do quanto você é importante na minha vida. Trocamos presentes, trocamos carinho… e eu vivi, pela primeira vez, um Dia dos Namorados ao lado de alguém que eu amo de verdade. E até hoje carrego comigo esse momento — assim como carrego também o presente que você me deu… aquele moletom do McQueen, que além de ser muito bom, ainda fica perfeito combinando com você. Foi um mês leve, divertido e cheio de amor… daqueles que a gente guarda pra sempre. ❤️",
        images: [
            {
                src: "assets/img/mes3/IMG_20250608_094551.jpg",
                alt: "Foto do terceiro mês do casal",
                caption: "Nosso terceiro mês chegou cheio de memórias lindas."
            },
            {
                src: "assets/img/mes3/IMG_20250612_151436.jpg",
                alt: "Foto do terceiro mês do casal",
                caption: "Com você, até os dias simples ficaram especiais."
            },
            {
                src: "assets/img/mes3/IMG_20250612_151634_714.webp",
                alt: "Foto do terceiro mês do casal",
                caption: "Mais um instante bonito guardado com amor."
            },
            {
                src: "assets/img/mes3/IMG_20250619_184640.jpg",
                alt: "Foto do terceiro mês do casal",
                caption: "A conexão entre nós só ficou mais forte."
            },
            {
                src: "assets/img/mes3/IMG_20250629_180740.jpg",
                alt: "Foto do terceiro mês do casal",
                caption: "Fechando o mês com mais uma lembrança inesquecível."
            }
        ]
    },
    4: {
        title: "Mês 4 — A beleza do simples 🌅",
        text: "No quarto mês, continuamos vivendo o nosso amor de forma leve e verdadeira… Saindo juntos, rindo à toa, aproveitando cada momento como se fosse único. Foram muitos rolês de moto, sentindo o vento no rosto e a liberdade de estar ao seu lado. Caminhadas sem pressa, conversas que pareciam não ter fim, lanches simples que se tornavam especiais só por estarmos juntos. E, claro… vários pôr do sol. Aqueles momentos em que o tempo parecia desacelerar, e tudo fazia sentido só por você estar ali comigo. A gente foi aprendendo que não precisava de muito… Porque o simples, quando é com você, se torna tudo. ❤️",
        images: [
            {
                src: "assets/img/mes4/IMG_20250702_173629.jpg",
                alt: "Foto do quarto mês do casal",
                caption: "Tudo com você foi ficando ainda mais especial."
            },
            {
                src: "assets/img/mes4/IMG_20250702_173643.jpg",
                alt: "Foto do quarto mês do casal",
                caption: "Seu cuidado sempre fez meu coração se sentir em casa."
            },
            {
                src: "assets/img/mes4/IMG_20250706_145758.jpg",
                alt: "Foto do quarto mês do casal",
                caption: "Cada detalhe virou mais uma lembrança bonita."
            },
            {
                src: "assets/img/mes4/IMG_20250706_145826.jpg",
                alt: "Foto do quarto mês do casal",
                caption: "Com você, cada instante simples ganhou valor."
            },
            {
                src: "assets/img/mes4/IMG_20250725_193159.jpg",
                alt: "Foto do quarto mês do casal",
                caption: "Mais um registro lindo do nosso mês 4."
            }
        ]
    },
    5: {
        title: "Mês 5 — Crescendo juntos em todos os sentidos ✨",
        text: "No quinto mês, nosso relacionamento foi ficando ainda mais forte… Começamos a viver mais da nossa rotina juntos, com mais presença, mais parceria e mais conexão. Fomos mais vezes à igreja, buscando crescer não só como casal, mas também espiritualmente, lado a lado. Também fui mais vezes na sua casa, me aproximando ainda mais do seu mundo, da sua vida. Tivemos momentos leves e divertidos, como nossos passeios no shopping, e também nossas voltas de moto por Jales, conhecendo cada cantinho, transformando lugares simples em memórias especiais. E teve também a noite sertaneja da igreja… um momento diferente, alegre, cheio de risadas e boas lembranças. A cada dia, a gente se descobria mais… E, sem perceber, continuávamos fazendo a única coisa que sempre fez sentido: nos amar cada vez mais. ❤️",
        images: [
            {
                src: "assets/img/mes5/IMG_20250803_190207.jpg",
                alt: "Foto do quinto mês do casal",
                caption: "Nosso jeito de existir juntos ficou ainda mais bonito."
            },
            {
                src: "assets/img/mes5/IMG_20250806_172532.jpg",
                alt: "Foto do quinto mês do casal",
                caption: "Foi um mês cheio de presença, carinho e amor."
            },
            {
                src: "assets/img/mes5/IMG_20250808_213057.jpg",
                alt: "Foto do quinto mês do casal",
                caption: "A nossa história seguiu ficando mais sólida."
            },
            {
                src: "assets/img/mes5/IMG_20250824_163609.jpg",
                alt: "Foto do quinto mês do casal",
                caption: "Mais uma memória linda guardada com carinho."
            },
            {
                src: "assets/img/mes5/IMG-20250830-WA0071.jpg",
                alt: "Foto do quinto mês do casal",
                caption: "Fechando o mês com o coração cheio."
            }
        ]
    },
    6: {
        title: "Mês 6 — Descobrindo novos caminhos juntos 💫",
        text: "No sexto mês, continuamos vivendo e fortalecendo ainda mais a nossa conexão… Passamos a ir mais aos cultos dos jovens, compartilhando momentos que nos aproximavam não só como casal, mas também na fé. Tivemos nossas saídas para comer aquele lanchão, simples, mas sempre especiais. Cada momento ao seu lado transformava qualquer lugar em algo inesquecível. Também tivemos a nossa ida para Votuporanga, conhecer a Havan — mais uma experiência nova juntos, mais um capítulo da nossa história sendo construído. E aquele momento no Terraço de Estrela… um lugar bonito, mas que ficou ainda mais especial por ter você comigo. A gente foi vivendo, aprendendo e se conhecendo cada vez melhor… E, a cada dia, ficava mais claro que tudo fazia mais sentido quando era com você. ❤️",
        images: [
            {
                src: "assets/img/mes6/IMG_20250920_211718.jpg",
                alt: "Foto do sexto mês do casal",
                caption: "Metade de um ciclo, inteiro de amor."
            },
            {
                src: "assets/img/mes6/IMG_20250920_221835.jpg",
                alt: "Foto do sexto mês do casal",
                caption: "Seu amor seguiu me encontrando todos os dias."
            },
            {
                src: "assets/img/mes6/IMG_20250920_222245.jpg",
                alt: "Foto do sexto mês do casal",
                caption: "Ainda mais juntos, ainda mais certos."
            },
            {
                src: "assets/img/mes6/IMG_20250925_172751.jpg",
                alt: "Foto do sexto mês do casal",
                caption: "Mais um pedacinho bonito da nossa história."
            },
            {
                src: "assets/img/mes6/IMG_20250927_105413.jpg",
                alt: "Foto do sexto mês do casal",
                caption: "Cada encontro seguia reafirmando nós dois."
            },
            {
                src: "assets/img/mes6/IMG_20250928_141554.jpg",
                alt: "Foto do sexto mês do casal",
                caption: "Um mês maduro, leve e cheio de amor."
            }
        ]
    },
    7: {
        title: "Mês 7 — Momentos que aquecem o coração 💖",
        text: "No sétimo mês, vivemos momentos simples, mas cheios de significado… Você foi conhecer a casa da minha vó, e claro, provar o arroz e feijão dela — que são simplesmente maravilhosos (e inesquecíveis 😅). Foi um momento especial, de conexão, de você fazendo parte cada vez mais da minha vida e da minha família. Continuamos caminhando juntos, explorando mais lugares em Estrela, descobrindo cantinhos novos e criando memórias em cada passo. E também rodamos de moto por toda a cidade, aproveitando cada instante lado a lado. Mas esse mês teve um momento muito marcante pra mim… Foi o mês do meu aniversário. E, sem dúvida, ter você ao meu lado nesse dia tão especial fez tudo ser ainda mais significativo. Sua presença tornou tudo mais leve, mais feliz, mais completo. Porque mais do que qualquer comemoração… o melhor presente era ter você comigo. ❤️",
        images: [
            {
                src: "assets/img/mes7/IMG_20251018_142827.jpg",
                alt: "Foto do sétimo mês do casal",
                caption: "O simples com você virou extraordinário."
            },
            {
                src: "assets/img/mes7/IMG_20251025_175951.jpg",
                alt: "Foto do sétimo mês do casal",
                caption: "Seu amor fez até o silêncio parecer aconchego."
            },
            {
                src: "assets/img/mes7/IMG-20251011-WA0080.jpg",
                alt: "Foto do sétimo mês do casal",
                caption: "Até os dias mais comuns ficaram inesquecíveis."
            },
            {
                src: "assets/img/mes7/IMG-20251111-WA0040.jpg",
                alt: "Foto do sétimo mês do casal",
                caption: "Mais uma lembrança doce do nosso mês 7."
            }
        ]
    },
    8: {
        title: "Mês 8 — Criando memórias inesquecíveis 🎄✨",
        text: "No oitavo mês, continuamos vivendo momentos que vão ficar pra sempre na nossa memória… Fomos mais vezes para Votuporanga, saímos, jantamos juntos, aproveitando cada oportunidade para estarmos lado a lado. Em Estrela, fomos ver a decoração de Natal… luzes, cores e aquele clima especial que deixou tudo ainda mais bonito — mas nada se comparava à alegria de viver aquilo com você. Também tivemos um momento muito especial na chácara da minha irmã… um tempo de comunhão, leve, tranquilo, cheio de paz e conexão. Aqueles momentos que aquecem o coração e fazem a gente perceber o quanto é bom estar junto. E como já estava virando costume… voltamos mais uma vez para Votuporanga, criando ainda mais histórias, risadas e lembranças. Foi um mês cheio de vida, de presença e de amor… porque com você, qualquer lugar se torna especial. ❤️",
        images: [
            {
                src: "assets/img/mes8/IMG_20251108_183820.jpg",
                alt: "Foto do oitavo mês do casal",
                caption: "Mais um mês de amor ficando ainda mais forte."
            },
            {
                src: "assets/img/mes8/IMG_20251108_220124.jpg",
                alt: "Foto do oitavo mês do casal",
                caption: "A cada memória, nós ficávamos mais lindos."
            },
            {
                src: "assets/img/mes8/IMG_20251127_223830.jpg",
                alt: "Foto do oitavo mês do casal",
                caption: "O futuro com você começou a parecer ainda mais claro."
            },
            {
                src: "assets/img/mes8/IMG_20251127_223949.jpg",
                alt: "Foto do oitavo mês do casal",
                caption: "Mais um momento especial guardado para sempre."
            },
            {
                src: "assets/img/mes8/IMG_20251129_174849.jpg",
                alt: "Foto do oitavo mês do casal",
                caption: "Nosso amor seguiu ficando ainda mais bonito."
            },
            {
                src: "assets/img/mes8/IMG-20251109-WA0001.jpg",
                alt: "Foto do oitavo mês do casal",
                caption: "Um registro simples, mas cheio de significado."
            },
            {
                src: "assets/img/mes8/IMG-20251109-WA0002.jpg",
                alt: "Foto do oitavo mês do casal",
                caption: "Mais um pedacinho lindo da nossa caminhada."
            },
            {
                src: "assets/img/mes8/IMG-20251109-WA0004.jpg",
                alt: "Foto do oitavo mês do casal",
                caption: "Tudo com você seguia valendo a pena."
            },
            {
                src: "assets/img/mes8/IMG-20251116-WA0046.jpg",
                alt: "Foto do oitavo mês do casal",
                caption: "Um mês inteiro de carinho e certeza."
            }
        ]
    },
    9: {
        title: "Mês 9 — Um final de ano inesquecível 🎆❤️",
        text: "O nono mês foi marcado por um dos períodos mais especiais do ano… O fim de um ciclo cheio de novas histórias, conquistas e, principalmente, muito amor. Fomos ao cinema em Jales assistir Zootopia 2 — e que filme bom, viu… mas melhor ainda foi estar ali com você, compartilhando mais um momento juntos. Também fomos ver a decoração de Jales, aproveitando aquele clima de fim de ano, luzes, alegria… e, claro, não podia faltar aquele lanche bom demais pra completar o passeio. Mas esse mês foi muito além disso… Tivemos a oportunidade de ir juntos ao casamento do Miguel e da Grasi — e foi simplesmente especial viver aquele momento ao seu lado, presenciar o amor de outro casal enquanto fortalecíamos ainda mais o nosso. Passamos o Natal com a sua família, inaugurando a casa dos recém-casados… um momento cheio de significado, união e alegria. E para fechar com chave de ouro… passamos o Ano Novo com a minha família. E, pra mim, isso foi algo muito especial. Ter você ali, começando um novo ano ao meu lado, fez tudo ter ainda mais sentido. Foi um mês de encerramento… mas também de novos começos. E o melhor de tudo: com você ao meu lado. ❤️",
        images: [
            {
                src: "assets/img/mes9/IMG_20251204_182737.jpg",
                alt: "Foto do nono mês do casal",
                caption: "Você seguiu sendo a melhor parte de tudo."
            },
            {
                src: "assets/img/mes9/IMG_20251204_213222.jpg",
                alt: "Foto do nono mês do casal",
                caption: "Meu futuro favorito ainda é com você."
            },
            {
                src: "assets/img/mes9/IMG_20251204_213737.jpg",
                alt: "Foto do nono mês do casal",
                caption: "Seguimos construindo o nosso lugar."
            },
            {
                src: "assets/img/mes9/IMG_20251206_163804.jpg",
                alt: "Foto do nono mês do casal",
                caption: "Mais uma memória linda para lembrar sempre."
            },
            {
                src: "assets/img/mes9/IMG_20251206_185205_0.jpg",
                alt: "Foto do nono mês do casal",
                caption: "Um mês cheio de carinho e presença."
            },
            {
                src: "assets/img/mes9/IMG_20251213_144526.jpg",
                alt: "Foto do nono mês do casal",
                caption: "Entre planos e amor, fomos seguindo juntos."
            },
            {
                src: "assets/img/mes9/IMG_20251231_224800.jpg",
                alt: "Foto do nono mês do casal",
                caption: "Encerrando o mês com o coração cheio."
            },
            {
                src: "assets/img/mes9/IMG-20251208-WA0019.jpg",
                alt: "Foto do nono mês do casal",
                caption: "Mais um registro especial da nossa história."
            },
            {
                src: "assets/img/mes9/IMG-20251208-WA0079.jpg",
                alt: "Foto do nono mês do casal",
                caption: "Com você, tudo continuou fazendo ainda mais sentido."
            }
        ]
    },
    10: {
        title: "Mês 10 — Começando um novo capítulo juntos ☀️❤️",
        text: "No décimo mês, começamos um novo ano e, mais uma vez, juntos. E isso, por si só, já tornava tudo especial. Fomos conhecer um lugar novo para comer em Estrela, vivendo mais uma experiência diferente, até comendo dentro do carro, rindo, conversando e aproveitando aquele momento simples que, com você, se tornou inesquecível. Também tivemos nosso café da manhã na padaria, daqueles tranquilos, sem pressa, só curtindo a companhia um do outro. E teve também um momento muito especial: quando fizemos nosso próprio almoço. Algo simples, mas cheio de significado, mostrando o quanto a gente funciona bem junto até nas pequenas coisas do dia a dia. E, como se não bastasse, decidimos ir ao parque aquático em uma terça-feira aleatória. Sem planejamento, sem rotina, só vontade de viver. E foi bom demais. Foi um mês leve, espontâneo e cheio de vida, mostrando que, com você, até os momentos mais simples se tornam os melhores. ❤️",
        images: [
            {
                src: "assets/img/mes10/IMG_20260101_001652.jpg",
                alt: "Foto do décimo mês do casal",
                caption: "O tempo com você sempre parece mais precioso."
            },
            {
                src: "assets/img/mes10/IMG_20260101_001816.jpg",
                alt: "Foto do décimo mês do casal",
                caption: "Seu sorriso continua sendo meu detalhe preferido."
            },
            {
                src: "assets/img/mes10/IMG_20260110_214932.jpg",
                alt: "Foto do décimo mês do casal",
                caption: "Cada passo com você vale a memória."
            },
            {
                src: "assets/img/mes10/IMG_20260110_223111.jpg",
                alt: "Foto do décimo mês do casal",
                caption: "Mais um momento lindo vivendo nós dois."
            },
            {
                src: "assets/img/mes10/IMG_20260117_175235.jpg",
                alt: "Foto do décimo mês do casal",
                caption: "Um mês cheio de brilho e significado."
            },
            {
                src: "assets/img/mes10/IMG_20260118_092352.jpg",
                alt: "Foto do décimo mês do casal",
                caption: "O amor seguia fazendo tudo ficar mais bonito."
            },
            {
                src: "assets/img/mes10/IMG_20260118_145556.jpg",
                alt: "Foto do décimo mês do casal",
                caption: "Mais uma lembrança para guardar no coração."
            },
            {
                src: "assets/img/mes10/IMG-20260106-WA0067.jpg",
                alt: "Foto do décimo mês do casal",
                caption: "A nossa história seguiu firme e linda."
            },
            {
                src: "assets/img/mes10/motion_photo_9125056985803796243.jpg",
                alt: "Foto do décimo mês do casal",
                caption: "Um registro especial do nosso mês 10."
            }
        ]
    },
    11: {
        title: "Mês 11 — Crescendo juntos, dia após dia 🌱❤️",
        text: "O décimo primeiro mês foi um tempo de muito crescimento para nós dois. Foi um mês em que aprendemos muito, amadurecemos e fortalecemos ainda mais o nosso relacionamento. Vivemos momentos especiais, como nossos jantares fora, simples, mas cheios de significado. E algo muito importante aconteceu: você começou na minha faculdade. Isso fez com que passássemos a nos ver todos os dias, e isso aproximou ainda mais nossos mundos. Fomos passear no parque em Votuporanga, aproveitando momentos tranquilos juntos. E também tivemos aqueles momentos simples, mas extremamente especiais, como sentar em frente à sua casa só para conversar, sem pressa, sem distrações, apenas nós dois. Vivemos experiências novas também, como ir à conferência Congrega Power em Votuporanga, e depois ainda fomos comer em um lugar maravilhoso, fechando o dia com chave de ouro. Comecei a te ensinar a dirigir carro e moto, em momentos que, além de aprendizado, foram cheios de parceria, paciência e risadas. Fomos ao Louvorzão da igreja, que foi incrível, cheio de presença, alegria e conexão. E não poderia faltar o Dia das Mulheres, um dia que eu fiz questão de preparar com carinho para te fazer sentir o quanto você é especial e o quanto você merece tudo de bom. Foi um mês intenso, cheio de momentos, aprendizados e amor, em que mais uma vez ficou claro que estamos crescendo juntos, lado a lado. ❤️",
        images: [
            {
                src: "assets/img/mes11/1773853977104.jpg",
                alt: "Foto do décimo primeiro mês do casal",
                caption: "Quase um ciclo inteiro e o coração ainda acelera."
            },
            {
                src: "assets/img/mes11/IMG_20260216_234903.jpg",
                alt: "Foto do décimo primeiro mês do casal",
                caption: "A nossa história continuou firme, doce e linda."
            },
            {
                src: "assets/img/mes11/IMG_20260218_192548.jpg",
                alt: "Foto do décimo primeiro mês do casal",
                caption: "O amor amadureceu sem perder a magia."
            },
            {
                src: "assets/img/mes11/IMG_20260218_194422.jpg",
                alt: "Foto do décimo primeiro mês do casal",
                caption: "Mais um instante bonito dessa reta final."
            },
            {
                src: "assets/img/mes11/IMG_20260219_205056.jpg",
                alt: "Foto do décimo primeiro mês do casal",
                caption: "Seguimos acumulando memórias lindas."
            },
            {
                src: "assets/img/mes11/IMG_20260222_104311.jpg",
                alt: "Foto do décimo primeiro mês do casal",
                caption: "Você continua sendo meu lugar favorito."
            },
            {
                src: "assets/img/mes11/IMG_20260222_183712.jpg",
                alt: "Foto do décimo primeiro mês do casal",
                caption: "Mais uma lembrança inesquecível do nosso mês 11."
            },
            {
                src: "assets/img/mes11/IMG_20260307_180755.jpg",
                alt: "Foto do décimo primeiro mês do casal",
                caption: "Quase chegando lá, com amor em cada detalhe."
            },
            {
                src: "assets/img/mes11/IMG_20260307_210521.jpg",
                alt: "Foto do décimo primeiro mês do casal",
                caption: "Nossa história segue linda e cheia de vida."
            },
            {
                src: "assets/img/mes11/IMG_20260307_213735.jpg",
                alt: "Foto do décimo primeiro mês do casal",
                caption: "Mais um registro precioso para guardar."
            },
            {
                src: "assets/img/mes11/IMG_20260307_213908.jpg",
                alt: "Foto do décimo primeiro mês do casal",
                caption: "Quase um ano inteiro de nós dois."
            },
            {
                src: "assets/img/mes11/IMG_20260308_103152.jpg",
                alt: "Foto do décimo primeiro mês do casal",
                caption: "Fechando o mês com muito amor e gratidão."
            }
        ]
    },
    12: {
        title: "O décimo segundo mês",
        text: "Esse espaço foi reservado para o mês que ainda vai chegar. Ele carrega expectativa, contagem regressiva e aquela sensação boa de que ainda existe muita coisa linda para viver, celebrar e transformar em memória ao seu lado.",
        images: [
            {
                src: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?auto=format&fit=crop&w=1200&q=80",
                alt: "Imagem romântica representando o próximo mês",
                caption: "Em breve: mais uma memória linda para guardar."
            },
            {
                src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
                alt: "Casal aguardando um momento especial",
                caption: "A contagem regressiva só aumenta a emoção."
            },
            {
                src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80",
                alt: "Momento romântico em clima de expectativa",
                caption: "O próximo capítulo já está sendo esperado com amor."
            }
        ]
    },
    future: {
        label: "Nosso Futuro",
        title: "Tudo o que criamos com IA",
        text: "Esse espaço é só para aquilo que imaginamos juntos: ideias, imagens, versões do amanhã e pequenos sonhos que a IA ajudou a transformar em algo visível. Mais do que criações, isso também virou parte da nossa história, porque carrega a nossa imaginação, o nosso carinho e o nosso jeito de sonhar o futuro lado a lado.",
        images: [
            {
                src: "assets/img/futuros/IMG-20250329-WA0021.jpg",
                alt: "Imagem criada com IA sobre o futuro do casal",
                caption: "Um pedacinho do nosso futuro criado com carinho."
            },
            {
                src: "assets/img/futuros/IMG-20250329-WA0022.jpg",
                alt: "Imagem criada com IA sobre o futuro do casal",
                caption: "Nossos sonhos também merecem um lugar aqui."
            },
            {
                src: "assets/img/futuros/IMG-20250922-WA0033.jpg",
                alt: "Imagem criada com IA sobre o futuro do casal",
                caption: "O futuro já começou a ganhar forma nas nossas ideias."
            },
            {
                src: "assets/img/futuros/IMG-20250925-WA0008.jpg",
                alt: "Imagem criada com IA sobre o futuro do casal",
                caption: "Mais uma criação que tem a nossa cara."
            },
            {
                src: "assets/img/futuros/IMG-20250925-WA0012.jpg",
                alt: "Imagem criada com IA sobre o futuro do casal",
                caption: "Sonhar com você também virou memória."
            },
            {
                src: "assets/img/futuros/IMG-20251013-WA0003.jpg",
                alt: "Imagem criada com IA sobre o futuro do casal",
                caption: "Uma lembrança do que ainda queremos viver."
            },
            {
                src: "assets/img/futuros/IMG-20251013-WA0004.jpg",
                alt: "Imagem criada com IA sobre o futuro do casal",
                caption: "Criatividade, amor e futuro no mesmo lugar."
            },
            {
                src: "assets/img/futuros/IMG-20260106-WA0112.jpg",
                alt: "Imagem criada com IA sobre o futuro do casal",
                caption: "O amanhã também já carrega o nosso amor."
            },
            {
                src: "assets/img/futuros/IMG-20260106-WA0114.jpg",
                alt: "Imagem criada com IA sobre o futuro do casal",
                caption: "Tudo o que a gente imaginou junto também faz parte da nossa história."
            }
        ]
    }
};

const modalElements = {
    root: document.getElementById("memory-modal"),
    title: document.getElementById("memory-modal-title"),
    month: document.getElementById("memory-modal-month"),
    text: document.getElementById("memory-modal-text"),
    image: document.getElementById("carousel-image"),
    caption: document.getElementById("carousel-caption"),
    dots: document.getElementById("carousel-dots"),
    prev: document.getElementById("carousel-prev"),
    next: document.getElementById("carousel-next")
};

const modalState = {
    month: null,
    slide: 0
};

function getNextApril18() {
    const now = new Date();
    const year = now.getMonth() > 3 || (now.getMonth() === 3 && now.getDate() > 18)
        ? now.getFullYear() + 1
        : now.getFullYear();

    return new Date(year, 3, 18, 0, 0, 0);
}

function formatValue(value) {
    return String(value).padStart(2, "0");
}

function updateCountdown() {
    const now = new Date();
    const targetDate = getNextApril18();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
        setCountdownValue("days", "00");
        setCountdownValue("hours", "00");
        setCountdownValue("minutes", "00");
        setCountdownValue("seconds", "00");
        countdownElements.caption.textContent = "Hoje e o dia 18/04. Aproveite cada segundo desse momento especial.";
        return;
    }

    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    setCountdownValue("days", formatValue(days));
    setCountdownValue("hours", formatValue(hours));
    setCountdownValue("minutes", formatValue(minutes));
    setCountdownValue("seconds", formatValue(seconds));
    countdownElements.caption.textContent = `Falta pouco para 18/04/${targetDate.getFullYear()} e para mais um dia inesquecivel com voce.`;
}

function setCountdownValue(part, value) {
    if (countdownElements[part]) {
        countdownElements[part].textContent = value;
    }

    const mirroredElements = document.querySelectorAll(`[data-countdown="${part}"]`);
    mirroredElements.forEach((element) => {
        element.textContent = value;
    });
}

function createSpark() {
    const container = document.querySelector(".sparkles");

    if (!container || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const spark = document.createElement("span");
    const symbols = ["❤", "✦", "♥"];
    const size = Math.random() * 1.2 + 0.7;
    const duration = Math.random() * 5 + 7;
    const drift = `${(Math.random() - 0.5) * 120}px`;

    spark.className = "spark";
    spark.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    spark.style.left = `${Math.random() * 100}%`;
    spark.style.fontSize = `${size}rem`;
    spark.style.animationDuration = `${duration}s`;
    spark.style.setProperty("--drift-x", drift);

    container.appendChild(spark);
    spark.addEventListener("animationend", () => spark.remove(), { once: true });
}

function setupReveal() {
    const revealItems = document.querySelectorAll(".hero-copy, .countdown-card, .photo-card, .message-card, .highlight-strip, .closing-card");

    revealItems.forEach((item) => item.classList.add("reveal"));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    revealItems.forEach((item) => observer.observe(item));
}

function setupMusicToggle() {
    const playerShell = document.querySelector(".music-player");
    const button = document.querySelector(".music-toggle");
    const label = button?.querySelector(".music-label");
    const icon = button?.querySelector(".music-icon");
    const videoId = playerShell?.dataset.youtubeId?.trim();
    const startTime = Number(playerShell?.dataset.youtubeStart || 0);
    const youtubeUrl = playerShell?.dataset.youtubeUrl?.trim();
    const progressFill = document.getElementById("music-progress-fill");
    const currentTimeLabel = document.getElementById("music-current-time");
    const totalTimeLabel = document.getElementById("music-total-time");

    if (!playerShell || !button || !label || !icon || !progressFill || !currentTimeLabel || !totalTimeLabel) {
        return;
    }

    function setPlayingState(isPlaying) {
        playerShell.classList.toggle("is-playing", isPlaying);
        button.classList.toggle("is-playing", isPlaying);
        button.setAttribute("aria-pressed", String(isPlaying));
        label.textContent = isPlaying ? "Abrindo" : "Tocar";
        icon.textContent = isPlaying ? "♫" : "▶";
    }

    button.addEventListener("click", () => {
        const safeStart = Number.isFinite(startTime) ? startTime : 0;
        const fallbackUrl = youtubeUrl || `https://www.youtube.com/watch?v=${videoId}&t=${safeStart}s`;

        if (!videoId && !youtubeUrl) {
            label.textContent = "Link da música não configurado";
            return;
        }

        setPlayingState(true);
        progressFill.style.width = "100%";
        currentTimeLabel.textContent = "1:00";
        totalTimeLabel.textContent = "YouTube";
        window.open(fallbackUrl, "_blank", "noopener,noreferrer");

        window.setTimeout(() => {
            setPlayingState(false);
            progressFill.style.width = "0%";
            currentTimeLabel.textContent = "0:00";
            totalTimeLabel.textContent = "1:00+";
        }, 1800);
    });
}

function renderCarousel() {
    const memory = monthMemories[modalState.month];

    if (!memory) {
        return;
    }

    const currentImage = memory.images[modalState.slide];
    modalElements.month.textContent = memory.label || `Mês ${modalState.month}`;
    modalElements.title.textContent = memory.title;
    modalElements.text.textContent = memory.text;
    modalElements.image.src = currentImage.src;
    modalElements.image.alt = currentImage.alt;
    modalElements.caption.textContent = currentImage.caption;

    modalElements.dots.innerHTML = "";

    memory.images.forEach((image, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = `carousel-dot${index === modalState.slide ? " is-active" : ""}`;
        dot.setAttribute("aria-label", `Abrir foto ${index + 1} de ${memory.images.length}`);
        dot.addEventListener("click", () => {
            modalState.slide = index;
            renderCarousel();
        });
        modalElements.dots.appendChild(dot);
    });
}

function openMemoryModal(month) {
    if (!monthMemories[month]) {
        return;
    }

    modalState.month = month;
    modalState.slide = 0;
    renderCarousel();
    modalElements.root.classList.add("is-open");
    modalElements.root.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeMemoryModal() {
    modalElements.root.classList.remove("is-open");
    modalElements.root.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

function changeSlide(direction) {
    const memory = monthMemories[modalState.month];

    if (!memory) {
        return;
    }

    const totalSlides = memory.images.length;
    modalState.slide = (modalState.slide + direction + totalSlides) % totalSlides;
    renderCarousel();
}

function setupMemoryModal() {
    const cards = document.querySelectorAll("[data-month]");
    const closeButtons = document.querySelectorAll("[data-close-modal]");

    cards.forEach((card) => {
        const open = () => openMemoryModal(card.dataset.month);

        card.addEventListener("click", open);
        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                open();
            }
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener("click", closeMemoryModal);
    });

    modalElements.prev.addEventListener("click", () => changeSlide(-1));
    modalElements.next.addEventListener("click", () => changeSlide(1));

    document.addEventListener("keydown", (event) => {
        if (!modalElements.root.classList.contains("is-open")) {
            return;
        }

        if (event.key === "Escape") {
            closeMemoryModal();
        }

        if (event.key === "ArrowLeft") {
            changeSlide(-1);
        }

        if (event.key === "ArrowRight") {
            changeSlide(1);
        }
    });
}

updateCountdown();
setInterval(updateCountdown, 1000);
setupReveal();
setupMusicToggle();
setupMemoryModal();

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(createSpark, 900);
}
