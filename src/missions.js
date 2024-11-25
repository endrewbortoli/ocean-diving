import maine_to_george from './assets/georges_to_maine.png';
import pace_clouds from './assets/pace_introduction_clouds.png';
import pace_water from './assets/pace_introduction_water.png';
import pace_maine from './assets/pace_introdction_image_maine.png';
import pace_snow from './assets/apce_introduction_snow.png';
import oman_pace from './assets/oman_pace.jpg';
import saginaw_bay from './assets/saginaw_bay.jpg';
import saginaw_pace from './assets/saginaw_bay_pace.jpg';
import image_globe from './assets/image_globe.jpg';
import mauritania from './assets/mauritania.jpg';
import mauritania_pace from './assets/mauritania_pace.png';
import mud_spill_rebuilding from './assets/mud_spill_rebulding.jpg';
import mud_spill from './assets/mud_spill.jpg';
import oman_picture from './assets/oman_picture.jpg';
import saginaw_pace_stain from './assets/pace_saginaw_bay_stain.png';
import phytoplankton from './assets/phytoplankton.jpg';
import mauritania_above from './assets/mauritania_above.jpg';
import mauritania_globe from './assets/mauritania_globe.png';
import badgeFigure from './assets/Badge.png';
import omanData from './assets/data/oman_winter_norm.csv';
import sagiData from './assets/data/saginaw_bay_norm.csv';
import FinalStage from './components/stages/FinalStage';
import InformativeSectionStage from './components/stages/InformativeSectionStage';
import MapFocusStage from './components/stages/MapFocusStage';
import OnlyOneQuestion from './components/stages/OnlyOneQuestion';
import GolfeDoMexico from './assets/oceandiving/mission3/eutrofizado02.jpg';
import CostaBrasileira from './assets/oceandiving/mission1/costabrasileira.jpeg';
import TurtlePesca from './assets/oceandiving/mission1/tartarugapescafantasma.jpg';
import FocaPesca from './assets/oceandiving/mission1/focapescafantasma.jpg';
import CoraisPesca from './assets/oceandiving/mission1/coraisredefantasma.png';
import Eutrofizado1 from './assets/oceandiving/mission3/eutrofizado02.jpg';
import RedeFantasma from './assets/oceandiving/mission1/redefantasma.jpg';
import FotoCoralBonita from './assets/oceandiving/mission1/marbrasilcosta.jpg';
import TartarugaNemo from './assets/oceandiving/mission1/tartaruganemo.jpg';
import EcossistemaMarinho from './assets/oceandiving/mission1/ecossistemamarinho.jpg';

import LagoEutro from './assets/oceandiving/mission3/eutro.webp';
import lagoeutro2 from './assets/oceandiving/mission3/lagoeutro2.jpg';
import mapaeutro2 from './assets/oceandiving/mission3/eutromapa2.png';
import mapazonamortamex from './assets/oceandiving/mission3/zonamortamex2.png';
import golfmex2 from './assets/oceandiving/mission3/golfomex2.webp';

import Corais from './assets/oceandiving/mission2/corais.jpg';
import StartMission2 from './assets/oceandiving/mission2/acidificação main.jpg';
import questao2 from './assets/oceandiving/mission2/image560x340cropped.jpg';
import pescaesportiva from './assets/oceandiving/mission2/pesca esportiva.jpg';
import pescaartesanal from './assets/oceandiving/mission2/pescaartesanal.jpg';
import industria from './assets/oceandiving/mission2/efeito-estufa.jpg';
import longbeach from './assets/oceandiving/mission2/long-beach.jpg';
import agua from './assets/oceandiving/mission2/iStock-822555200.webp';
import pexe from './assets/oceandiving/mission2/pexe.jpg';
import TemperaturaAumentando from './assets/oceandiving/mission4/temperaturas_aumentando.webp';




//pulei linhas pra não arriscar de dar erro depois. depois pode apagar
import MapaAntartica from './assets/oceandiving/mission4/antartica_mapa.png';
import GeloDerretendo from './assets/oceandiving/mission4/gelo_derretendo.jpg';
import Geleira from './assets/oceandiving/mission4/img_introducao.jpg';

// Função que retorna as missões com base no nível de dificuldade
const getMissionsByDifficulty = (difficulty) => {
    switch (difficulty) {
        case 'FÁCIL':
            return [
                {
                    index: 0,
                    concluded: false,
                    title: "Pesca fantasma",
                    lat: -9.5627778,
                    lng: -35.6231667,
                    location: "Costa brasileira",
                    image: CostaBrasileira,
                    text: "A pesca fantasma é caracterizada por petrechos de pesca que são abandonados ou descartados no mar, como redes ou linhas. Tais materiais afetam em grande escala a biodiversidade marinha, tendo em vista que a ONG World Animal Protection estima que 10% do lixo plástico que entra nos mares e oceanos é equipamento de pesca perdido ou abandonado nos mares (redes fantasmas). No Brasil, cerca de 69 mil animais são afetados pela pesca fantasma por dia. ",
                    initialViewState: {
                        latitude: -9.5627778,
                        longitude: -35.6231667,
                        zoom: 7,
                    },
                    heatmapConfig: {
                        intensity: 1,
                        colorRange: [
                            [178, 34, 34, 255],     // Brick
                            [255, 0, 0, 255],       // Red
                            [255, 165, 0, 255],     // Orange
                            [255, 255, 0, 255],     // Yellow
                            [173, 255, 47, 255],    // GreenYellow
                            [0, 255, 0, 255],       // Green
                            [0, 255, 255, 255],     // Cyan
                            [0, 0, 255, 255],       // Blue
                            [147, 112, 219, 255],    // Lilac
                            [128, 0, 128, 255],     // Purple
                            [128, 0, 0, 255]        // Wine
                        ],

                        threshold: 0.9,
                    },
                    tileLayerConfig: {
                        data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
                        minZoom: 0,
                        maxZoom: 19,
                        tileSize: 256,
                    },
                    csvPath: null,
                    stages: [
                        {
                            displayMap: false,
                            fallbackImage: TurtlePesca,
                            next: 1,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Essa imagem representa um enorme problema. O que você vê? "}
                                    options={[
                                        { id: 'a', text: 'Uma tartaruga morta devido aos detritos de pesca.', explanation: 'Isso mesmo, que olhar afiado! Essa tartaruga foi afetada pelo problema da pesca fantasma e infelizmente morreu por conta disso.'},
                                        { id: 'b', text: 'Uma tartaruga em seu habitat natural, nadando livremente. ', explanation: 'Hmm, não é bem isso. Essa tartaruga não está nadando livremente. Ela está presa em uma rede, um problema típico da pesca fantasma. ' },
                                        { id: 'c', text: 'Uma tartaruga sendo libertada por mergulhadores.', explanation: 'Boa tentativa, mas não foi isso que aconteceu. Essa tartaruga não foi salva por mergulhadores; ela acabou sendo vítima da pesca fantasma. ' }
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={1}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: CostaBrasileira,
                            next: 2,
                            component: (
                                <InformativeSectionStage nextStage={2}>
                                    <div className="mission-card-header">
                                        <h2>Pesca Fantasma</h2>
                                        <h4>Um pouco mais sobre o problema da Pesca Fantasma</h4>
                                    </div>
                                    <div className="list">
                                         <h3>Animal preso em rede fantasma</h3>
                                        <ul>
                                            <div className="image-container">
                                                <img src={FocaPesca}></img>
                                            </div>
                            
                                            <ul>
                                                <li>A pesca fantasma é um problemão! Ela não só coloca em risco os animais, mas também impacta vários outros seres que vivem no mar — é o que chamamos de biodiversidade marinha.  </li>
                                                <li>E olha só: o Brasil é um dos lugares mais afetados, segundo a ONG World Animal Protection. Eles estimam que, todos os dias, cerca de 69 mil animais sofrem com redes e materiais de pesca abandonados na nossa costa! É um desafio enorme que nem sempre a gente vê, mas que pode até causar a extinção de espécies superimportantes para o equilíbrio do oceano e para todos nós!
                                                </li>
                                            </ul>
                                            <div className="image-container">
                                                <img src={CoraisPesca}></img>
                                            </div>
                                    
                                            <ul>
                                                <li>A imagem acima mostra uma rede de pesca que foi encontrada em cima de vários corais na área de visitação dos Galés de Maragogi, no Brasil, e que precisou ser retirada por profissionais.</li>
                                                <li>É fácil perceber o grande problema que isso representa! Redes presas em corais podem acabar com habitats essenciais para muitos seres vivos, e isso afeta o ecossistema — ou seja, o conjunto de seres que vivem e dependem uns dos outros para manter o equilíbrio no ambiente. No fim, esses materiais abandonados prejudicam toda a biodiversidade e desorganizam o ecossistema marinho. </li>
                                            </ul>

                                        </ul>
                                    </div>
                                </InformativeSectionStage>
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: RedeFantasma,
                            next: 3,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Esta rede foi deixada no oceano. De acordo com seus conhecimentos, o que pode acontecer com os animais marinhos que encontram redes abandonadas como essa?  "}
                                    options={[
                                        { id: 'a', text: 'Eles podem acabar presos na rede e ficar feridos ou morrer. ', explanation: 'Incrível! Isso mesmo, esses materiais descartados nos oceanos prejudicam demais a biodiversidade marinha e principalmente os animais.' },
                                        { id: 'b', text: 'A rede ajuda os animais a se esconderem de predadores.', explanation: 'Não exatamente. Embora pareça um abrigo, essa rede não oferece proteção; ela representa um grande risco para os animais. ' },
                                        { id: 'c', text: 'A rede oferece um lugar seguro para os animais descansarem. ', explanation: 'Boa tentativa, mas redes abandonadas não são seguras para descanso. Elas são armadilhas que colocam a vida dos animais em perigo. ' }
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={3}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: CoraisPesca,
                            next: 4,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Olhe para esse recife! O que pode acontecer com o ecossistema local quando redes de pesca abandonadas ficam presas nos corais? "}
                                    options={[
                                        { id: 'a', text: 'As redes vão se transformar em uma base segura para os corais crescerem. ', explanation: ' Não é bem isso. Redes de pesca não ajudam na recuperação dos corais; elas causam danos e acabam atrapalhando o crescimento, siga em frente e saiba mais!' },
                                        { id: 'b', text: 'As redes podem danificar os corais e prejudicar a vida marinha que depende deles. ', explanation: 'Isso mesmo! Corais são frágeis e importantes para muitos peixes e outros seres, mas redes abandonadas podem destruir esses habitats, siga em frente e saiba mais! ' },
                                        { id: 'c', text: 'Os corais vão engolir as redes, absorvendo-as de forma natural.', explanation: 'Boa tentativa, mas corais não conseguem absorver redes. Esses materiais danificam e podem até matar os corais, siga em frente e saiba mais! ' },
                                
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={4}
                                />
                            ),
                        },

                        {
                            displayMap: false,
                            fallbackImage: FotoCoralBonita,
                            next: 5,
                            component: (
                                <OnlyOneQuestion
                                    questionText={" Agora que você sabe o impacto da pesca fantasma, o que podemos fazer para ajudar a proteger a vida no oceano?"}
                                    options={[
                                        { id: 'a', text: ' Explorar e cuidar dos oceanos, evitando que redes e materiais sejam deixados no mar.', explanation: 'Isso mesmo, explorador! Explorar e proteger os oceanos ajuda a preservar a biodiversidade e proteger ecossistemas preciosos. Torne-se um ajudante do mundo e explore os mares!!  ' },
                                        { id: 'b', text: 'Incentivar a limpeza dos mares e conscientizar outras pessoas sobre a importância da vida marinha.', explanation: 'Correto, explorador! Conscientizar e promover a limpeza dos mares é essencial para reduzir os impactos da pesca fantasma. Torne-se um ajudante do mundo e explore os mares!!' },
                                        { id: 'c', text: ' Recolher materiais de pesca abandonados e incentivar o uso de alternativas 	mais seguras para a vida marinha. ', explanation: 'Certíssimo, explorador! Remover redes abandonadas e buscar alternativas seguras são ações importantes para preservar os ecossistemas. Torne-se um ajudante do mundo e explore os mares!! ' },
                                        
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={5}  // Ensure this links correctly
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: EcossistemaMarinho,
                            next: 6,
                            component: (
                                <InformativeSectionStage nextStage={6}> {/* Update nextStage properly */}
                                    <div className="mission-card-header">
                                        <h2>CUIDE DO NOSSO ECOSSISTEMA!</h2>
                                        <h4>Você pode fazer a diferença!</h4>
                                    </div>
                                    <div className="image-container">
                                        <img src={TartarugaNemo}></img>
                                    </div>
                                    <div className="text">
                                        <p>
                                        </p>
                                    </div>
                                </InformativeSectionStage>
                            ),
                        },
                        {
                            displayMap: true,
                            next: 7,
                            component: (
                                <MapFocusStage nextStage={7} // Make sure the progression continues logically
                                    images={[
                                        {
                                            lat: 42.81671,
                                            lng: -69.95354,
                                            image: FocaPesca,
                                            title: "Olá, explorador!",
                                            text: "Agora você sabe os riscos da pesca fantasma! Espero que tenha se divetido! ",
                                            zoom: 7,
                                        }
                                    ]}
                                />
                            ),
                        },

                        {
                            displayMap: true,
                            component: <FinalStage
                                onArrival={() => console.log('Final stage reached!')}
                                briefing={{
                                    title: "Pesca Fantasma",
                                    location: "Costa Brasileira",
                                    image: pace_maine,
                                    report: "Congratulations! You’ve completed your first mission! Your skills are amazing, and we can’t wait to have your help on our next big adventure!",
                                    reportAll: "Parabéns! 🚀 Você foi incrível nessa missão e aprendeu como é essencial agir antes que o problema da pesca fantasma saia do controle. Quando redes e outros materiais são deixados no mar, eles não só prejudicam o oceano, mas também causam danos profundos em toda a biodiversidade marinha. A gente viu o impacto que isso pode ter nos corais, nas tartarugas e em tantos outros seres marinhos.A boa notícia? Você agora sabe o quanto é importante cuidar e agir! Com a ajuda de tecnologias e ferramentas como imagens e monitoramento, é possível identificar áreas de risco e entrar em ação. Assim, podemos proteger nossos mares e garantir que esses ecossistemas fiquem fortes e cheios de vida. Que essa missão inspire você a explorar mais e cuidar cada vez melhor dos nossos oceanos! 🌊🐢"
                                }}
                                badge={{
                                    name: "Emblema da Missão de Pesca Fantasma",
                                    image: badgeFigure
                                }}
                            />
                        },
                    ],
                },
                {
                    index: 1,
                    concluded: false,
                    title: "Acidificação dos oceanos",
                    lat: 40.35052,
                    lng: -73.37517,
                    location: "Long Beach, Nova Iorque, EUA ",
                    image: StartMission2,
                    text: "Prepare-se! Vamos iniciar a segunda missão em nossa jornada para entender o impacto da acidificação dos oceanos,fenômeno que acontece quando os níveis de dióxido de carbono na atmosfera aumentam, tornando as águas mais ácidas. Além disso, o crescimento da pesca esportiva torna os ecossistemas marinhos dos Estados Unidos mais vulneráveis. Sendo o segundo maior emissor de gases poluentes do mundo, o país enfrenta grandes desafios para proteger seus oceanos e diminuir os impactos ambientais.",
                    displayMap: true,
                    fallbackImage: saginaw_bay,
                    csvPath: sagiData,
                    initialViewState: {
                        latitude: 40.35052,
                        longitude: -73.37517,
                        zoom: 7,
                    },
                    heatmapConfig: {
                        intensity: 1,
                        colorRange: [
                            [178, 34, 34, 255],     // Brick
                            [255, 0, 0, 255],       // Red
                            [255, 165, 0, 255],     // Orange
                            [255, 255, 0, 255],     // Yellow
                            [173, 255, 47, 255],    // GreenYellow
                            [0, 255, 0, 255],       // Green
                            [0, 255, 255, 255],     // Cyan
                            [0, 0, 255, 255],       // Blue
                            [147, 112, 219, 255],    // Lilac
                            [128, 0, 128, 255],     // Purple
                            [128, 0, 0, 255]        // Wine
                        ],


                        threshold: 0.9,
                    },
                    tileLayerConfig: {
                        data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
                        minZoom: 0,
                        maxZoom: 19,
                        tileSize: 256,
                    },
                    stages: [
                        {
                            displayMap: false,
                            fallbackImage: questao2,
                            next: 1,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"O que percebemos nos corais quando o oceano se torna mais ácido? "}
                                    options={[
                                        { id: 'a', text: 'Eles perdem sua cor e ficam fragilizados.', explanation: 'Muito bem! A acidificação do oceano faz com que os corais percam sua cor, o que é um sinal de que estão fragilizados e mais vulneráveis.' },
                                        { id: 'b', text: 'Os corais crescem mais rapidamente e ficam mais coloridos.', explanation: 'Na verdade, o oposto acontece. A acidificação prejudica o crescimento dos corais, fazendo com que eles percam a cor e se tornem mais frágeis.' },
                                        { id: 'c', text: 'Se tornam resistentes aos impactos da acidificação.', explanation: 'Infelizmente, os corais não são resistentes à acidificação. Ela enfraquece os corais, afetando sua cor e saúde.' },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={1}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: Corais,
                            next: 2,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Qual é uma das causas da acidificação dos oceanos?"}
                                    options={[
                                        { id: 'a', text: 'A redução da pesca nos oceanos.', explanation: 'Não é isso... A redução da pesca pode ajudar os oceanos, mas o que realmente causa a acidificação é o excesso de dióxido de carbono (CO2) no ar.' },
                                        { id: 'b', text: 'O aumento de dióxido de carbono (Co2) na atmosfera.', explanation: 'Correto! O excesso de dióxido de carbono no ar é uma das principais causas da acidificação dos oceanos.' },
                                        { id: 'c', text: 'A limpeza frequente das praias.', explanation: 'Na verdade, limpar as praias ajuda o oceano! O que causa a acidificação é o aumento do dióxido de carbono na atmosfera.'}
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={2}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: pescaartesanal,
                            next: 3,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"O que é a pesca?"}
                                    options={[
                                        { id: 'a', text: 'A pesca é a limpeza do lixo no mar, que ajuda a proteger os oceanos.', explanation: 'Não... A pesca é a captura de peixes, não a limpeza dos oceanos.' },
                                        { id: 'b', text: 'A pesca é a captura de peixes e outros animais do mar, e pode afetar o equilíbrio dos ecossistemas marinhos.', explanation: 'Correto! A pesca envolve a captura de peixes e, se não for bem controlada, pode prejudicar o equilíbrio natural dos oceanos.' },
                                        { id: 'c', text: 'A pesca é a criação de peixes em tanques, que não tem impacto nos oceanos.', explanation: 'Não é isso! A pesca é a captura de peixes do mar e pode afetar os ecossistemas marinhos.' },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={3}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: pescaesportiva,
                            next: 4,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Como a pesca esportiva pode afetar os ecossistemas marinhos?"}
                                    options={[
                                        { id: 'a', text: 'Aumenta a quantidade de peixes nos oceanos.', explanation: 'Não, a pesca esportiva não ajuda a aumentar a quantidade de peixes. Se pegarmos muitos, podemos deixar os peixes em perigo e até fazer algumas espécies sumirem!' },
                                        { id: 'b', text: 'Melhora a saúde dos recifes de corais.', explanation: 'Pescar em recifes pode machucar os corais! Se tirarmos muitos peixes importantes, os recifes podem ficar doentes e perder sua beleza e vida.' },
                                        { id: 'c', text: 'Pode causar vulnerabilidade nos ecossistemas marinhos', explanation: 'Isso mesmo! A Pesca esportiva pode deixar os ecossistemas marinhos mais fracos... Se não cuidarmos bem, algumas espécies podem desaparecer, e isso afeta toda a vida no mar, tornando tudo mais frágil.' },
                                    ]}
                                    correctAnswerId={'null'}
                                    nextStage={4}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: agua,
                            next: 5,
                            component: (
                                <InformativeSectionStage nextStage={5}>
                                    <div className="mission-card-header">
                                        <h2>A acidificação</h2>
                                        <p>Com todo esse estudo, concluímos que a acidificação dos oceanos é um perigo! E como uma de suas causas, temos o efeito estufa que é um problemão também! Ele acontece quando alguns gases, como o dióxido de carbono (CO₂), ficam presos na atmosfera e deixam a Terra mais quente. Só que quando tem CO₂ demais, não é só o ar que sofre — os oceanos também!</p>
                                    </div>
                                    <div className="image-container">
                                        <img src={pexe}></img>
                                    </div>
                                    <div className="text">
                                        <p>Esse gás, podendo ser emitido com a queima de combustíveis fósseis, desmatamento e até mesmo processos industriais acaba sendo absorvido pela água do mar e deixa ela mais ácida. Isso pode machucar os animais e plantas que vivem no oceano, prejudicando a biodiversidade marinha. Com o tempo, esse processo pode até fazer com que algumas espécies desapareçam, mudando o equilíbrio dos oceanos e impactando todo o planeta! E aí, prontos para a última pergunta?
                                        </p>
                                    </div>
                                </InformativeSectionStage>
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: agua,
                            next: 6,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Por que é importante aprender sobre a acidificação dos oceanos?"}
                                    options={[
                                        { id: 'a', text: "Porque ela faz os oceanos ficarem mais azuis.", explanation: "Não é bem assim! A acidificação dos oceanos não muda a cor da água, mas sim a sua composição, prejudicando os ecossistemas." },
                                        { id: 'b', text: 'Porque assim podemos ajudar a proteger a vida marinha e o equilíbrio dos oceanos.', explanation: "Muito bem! Aprender sobre a acidificação nos ajuda a proteger os oceanos e todas as espécies que vivem neles." },
                                        { id: 'c', text: 'Porque a acidificação dos oceanos torna a água mais limpa e saudável.', explanation: "Na verdade, a acidificação torna a água mais ácida, o que pode fazer mal para a vida marinha." },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={6}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            next: 7,
                            component: (
                                <MapFocusStage nextStage={7}
                                    images={[
                                        {
                                            lat: 40.35052,
                                            lng: -73.37517,
                                            image: longbeach,
                                            title: "A Long Beach é linda, mas pode precisar de uma ajudinha!",
                                            text: "Nós, humanos, impactamos o mundo ao nosso redor, olhe ao redor do nosso próprio ambiente, como você acha que pode mudá-lo? Como você acha que pode ajudar o mundo ao seu redor, os humanos, a terra e os oceanos?",
                                            zoom: 10,
                                        },
                                    ]}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            component: (
                                <FinalStage
                                    onArrival={() => console.log('Final stage reached!')}
                                    briefing={{
                                        title: "Acidificação dos oceanos",
                                        location: "Long Beach, Nova Iorque, EUA",
                                        image: saginaw_bay,
                                        report: "Muito bem! Graças à sua ajuda, descobrimos o que está acontecendo em Long Beach com todos esses problemas resultando na acidificação dos oceanos e começamos a pensar em maneiras inteligentes de consertar isso!",
                                        reportAll: "Com todas essas perguntas e explicações, você aprendeu como o dióxido de carbono afeta os oceanos, como a pesca esportiva e a pesca fantasma impactam a vida marinha, e por que é tão importante cuidar do nosso planeta. Além disso, aprendeu sobre o impacto da pesca esportiva e da pesca fantasma, que causam grandes danos à biodiversidade, ameaçando várias espécies e comprometendo o equilíbrio dos ecossistemas. Esses temas mostram a importância de cuidarmos do nosso planeta, já que o oceano é essencial para a saúde do planeta e de todos nós. Entender essas questões e conscientizar outras pessoas são passos fundamentais para preservar nossos mares e suas riquezas naturais. Cada ação, por menor que pareça, contribui para a proteção dos ecossistemas e para o bem-estar de toda a biodiversidade marinha. E agora, você sabe mais sobre como proteger os oceanos. Continue assim!"
                                    }}
                                    badge={{
                                        name: "Emblema Acidificação dos Oceanos",
                                        image: badgeFigure
                                    }}
                                />
                            ),
                        },
                    ],
                },
                {

                    index: 2,
                    concluded: false,
                    title: "Eutrofização no Golfo do México.",
                    lat: 25.350780,
                    lng: -90.176988,
                    location: "Golfo do México",
                    image: GolfeDoMexico,
                    text: "O Golfo do México é uma vasta bacia oceânica localizada entre a América do Norte e a América Central, sendo considerado o maior golfo do mundo. Ele cobre uma área de aproximadamente 1,5 milhões de km² e possui um volume de cerca de 2.400 mil km³. Suas águas banham os Estados Unidos, incluindo estados como Flórida, Alabama, Mississippi, Louisiana e Texas; o México, com estados como Tamaulipas e Veracruz; e, a ilha de Cuba. ",
                    displayMap: false,
                    fallbackImage: oman_pace,
                    csvPath: omanData,
                    initialViewState: {
                        latitude: 25.350780,
                        longitude: -90.176988,
                        zoom: 7,
                    },
                    heatmapConfig: {
                        intensity: 1,
                        colorRange: [
                            [178, 34, 34, 255],     // Brick
                            [255, 0, 0, 255],       // Red
                            [255, 165, 0, 255],     // Orange
                            [255, 255, 0, 255],     // Yellow
                            [173, 255, 47, 255],    // GreenYellow
                            [0, 255, 0, 255],       // Green
                            [0, 255, 255, 255],     // Cyan
                            [0, 0, 255, 255],       // Blue
                            [147, 112, 219, 255],    // Lilac
                            [128, 0, 128, 255],     // Purple
                            [128, 0, 0, 255]        // Wine
                        ],


                        threshold: 0.9,
                    },
                    tileLayerConfig: {
                        data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
                        minZoom: 0,
                        maxZoom: 19,
                        tileSize: 256,
                    },
                    stages: [
                        {
                            displayMap: false,
                            fallbackImage: Eutrofizado1,
                            next: 1,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Olhe esses peixes, o que você acha que aconteceu com eles? "}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "Eles foram mortos por um predador. ",
                                            explanation: "Boa tentativa, amiguinho! Mas não é isso... O exemplo dessa imagem trata-se sobre Eutrofização, que acabou afetando na vida dos peixes desse corpo d’agua."
                                        },
                                        {
                                            id: 'b',
                                            text: 'Eles morreram pela poluição da água. ',
                                            explanation: "Parabéns, você acertou! Esses peixes morreram pela poluição da água, porém, essa poluição é um processo chamado Eutrofização! Esse processo é quando a água tem tantos nutrientes que algas e ciano bactérias começam a se reproduzir de maneira irregular, e essa grande quantidade de seres na água gera uma escassez de oxigênio."
                                        },
                                        {
                                            id: 'c',
                                            text: 'Eles estão dormindo depois de nadar bastante.',
                                            explanation: "Não é nada disso... Os peixes estão mortos! Isso tudo culpa da Eutrofização, que acabou com os peixes daquele lugar."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={1}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: lagoeutro2,
                            next: 2,
                            component: (
                                <InformativeSectionStage nextStage={2}>
                                    <div className="mission-card-header">
                                        <h2>Analise e entenda a imagem a seguir</h2>
                                        <p></p>
                                    </div>
                                    <div className="image-container">
                                        <img src={mapaeutro2}></img>
                                    </div>
                                    <div className="text">
                                        <p>
                                        </p>
                                    </div>
                                </InformativeSectionStage>
                            ),

                        },
                        {
                            displayMap: false,
                            fallbackImage: LagoEutro,
                            next: 3,
                            component: (
                                <OnlyOneQuestion
                                    questionText={" Então, resumidamente, o que é Eutrofização?  "}
                                    options={[
                                        {
                                            id: 'a',
                                            text: " É o processo de reprodução de uma alga que come peixes.  ",
                                            explanation: " Calma jovem, as algas não comem peixes. O problema é que elas crescem demais e consomem o oxigênio da água, o que prejudica os peixes e outros seres. "
                                        },
                                        {
                                            id: 'b',
                                            text: 'É um processo que libera oxigênio na água.  ',
                                            explanation: " Essa opção está incorreta, explorador. A eutrofização, na verdade, reduz o oxigênio na água, pois as algas usam muito oxigênio para crescer, deixando pouco para os outros seres vivos. "
                                        },
                                        {
                                            id: 'c',
                                            text: ' É um processo que causa a morte de fauna e flora em um corpo d’agua, pois o excesso de algas e cianobactérias na água gera um menor nível de oxigenação, assim levando seres a morte.  ',
                                            explanation: " Parabéns, você acertou em cheio, meu caro! "
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={3}
                                />
                            ),
                        },
                       
                        {
                            displayMap: false,
                            fallbackImage: mapazonamortamex,
                            next: 4,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Como você já aprendeu, a Eutrofização acaba com a vida marinha. Na imagem a seguir você pode ver a chamada “Zona Morta” que fica no Golfo do México e está cada vez mais ficando maior... Como você acha que isso pode ser resolvido? "}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "Reduzir o uso de fertilizantes, cuidar melhor do lixo, melhora nas estações de saneamento básico e melhora no descarte de veículos velhos.  ",
                                            explanation: "Belo conhecimento meu jovem! Ao usar menos fertilizantes e gerenciar melhor o lixo, evitamos que muitos nutrientes cheguem à água, ajudando a prevenir a eutrofização, até a prevenir a poluição."
                                        },
                                        {
                                            id: 'b',
                                            text: 'Jogar mais fertilizantes na água para alimentar os peixes. ',
                                            explanation: "Que isso, explorador, calma! Jogar mais fertilizantes na água só aumentaria a quantidade de nutrientes e faria as algas crescerem ainda mais, piorando a situação. "
                                        },
                                        {
                                            id: 'c',
                                            text: ' Construir mais fábricas perto do Golfo do México. ',
                                            explanation: "Jovem, construir fábricas pode aumentar a poluição e o despejo de produtos químicos na água, contribuindo para a eutrofização e piorando a saúde do ecossistema. "
                                        },
                                      
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={4}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: golfmex2,
                            next: 5,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Como você acha que esses problemas afetam as regiões locais? "}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "Melhoram a pesca, aumentam o turismo e tornam a água mais limpa.",
                                            explanation: "Incorreto. Na verdade, a eutrofização faz com que haja menos peixes e a água fica suja, o que afasta turistas. "
                                        },
                                        {
                                            id: 'b',
                                            text: 'Diminui a quantidade de peixes, prejudica a economia local e pode tornar a 	água imprópria para beber.',
                                            explanation: "É isso mesmo, boa, minha lenda! Menos oxigênio na água significa menos peixes, e a água pode ficar perigosa para beber. "
                                        },
                                        { id: 'c',
                                            text: ' Criam mais empregos nas indústrias de pesca, aumentam a qualidade da água e atraem mais turistas.',
                                            explanation: " Incorreta, meu explorador. Com menos peixes, menos empregos são criados, e a água se torna suja, afastando os turistas."
                                        }
                                        
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={5}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            component: (
                                <FinalStage
                                    onArrival={() => console.log('Final stage reached!')}
                                    briefing={{
                                        title: "Eutrofização no Golfo do México",
                                        location: "Golfo do México",
                                        image: oman_picture,
                                        report: "Woohoo! We did it! We figured out how to tell phytoplankton apart and went even further, chatting about just how important they are. Plus, we explored how their disappearance could impact not just the region, but the entire planet! What an adventure!.",
                                        reportAll: "Parabéns, explorador! 🎉 Você concluiu essa missão sobre a eutrofização no Golfo do México, desvendando causas, consequências e soluções para esse grave problema ambiental. Ao longo dessa jornada, você ganhou novos aprendizados sobre a importância de proteger nossos recursos hídricos e o impacto da ação humana nos ecossistemas marinhos. Agora, você é um verdadeiro defensor da saúde do Golfo e do equilíbrio ecológico! 🐟🌊"
                                    }}
                                    badge={{
                                        name: "Eutrofização no Golfo do México",
                                        image: badgeFigure
                                    }}
                                />
                            ),
                        },
                    ]
                },
                {
                    index: 3,
                    concluded: false,
                    title: "Aumento das temperaturas do oceano",
                    lat: -68.2833,
                    lng: -4.76056,
                    location: "Antártica",
                    image: Geleira,
                    text: "Da primeira revolução mundial até hoje, as emissões de gases estufa foram apenas aumentado, assim como as temperaturas do oceanos. Isso é extremamente preocupante pois temperaturas desreguladas impactam negativamente em ecossistemas marinhos, qualidade de vida dos animais e podem também causar o aumento do nível do mar, outro problema grave que possui consequências catastróficas",
                    displayMap: false,
                    fallbackImage: Geleira,
                    csvPath: omanData,
                    initialViewState: {
                        latitude: -68.2833,
                        longitude: -4.76056, 
                        zoom: 8,
                    },
                    heatmapConfig: {
                        intensity: 1,
                        colorRange: [
                            [178, 34, 34, 255],     // Brick
                            [255, 0, 0, 255],       // Red
                            [255, 165, 0, 255],     // Orange
                            [255, 255, 0, 255],     // Yellow
                            [173, 255, 47, 255],    // GreenYellow
                            [0, 255, 0, 255],       // Green
                            [0, 255, 255, 255],     // Cyan
                            [0, 0, 255, 255],       // Blue
                            [147, 112, 219, 255],    // Lilac
                            [128, 0, 128, 255],     // Purple
                            [128, 0, 0, 255]        // Wine
                        ],


                        threshold: 0.9,
                    },
                    tileLayerConfig: {
                        data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
                        minZoom: 0,
                        maxZoom: 19,
                        tileSize: 256,
                    },
                    stages: [
                        {
                            displayMap: false,
                            fallbackImage: MapaAntartica,
                            next: 1,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"O mapa da imagem mostra a antártica e a parte vermelha como mais quente e azul mais fria. Com isso, o que você consegue perceber na imagem?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "A parte em volta da Antártica está quente.",
                                            explanation: "Sim, as temperaturas em volta estão só aumentando. Agora, vamos explorar os impactos dessa mudança."
                                        },
                                        {
                                            id: 'b',
                                            text: "A Antártica está isolada do resto do mundo.",
                                            explanation: "No mapa, ela realmente parece estar mais isolada, além de não ter seres humanos vivendo lá. Mesmo assim, ela e seus oceanos ainda sofrem as consequências do aquecimento global, tendo suas temperaturas aumentadas. Vamos explorar esse problema mais a fundo!"
                                        },
                                        {
                                            id: 'c',
                                            text: "A parte em volta da Antártica está fria.",
                                            explanation: "Na verdade, a parte em volta está quente! Essas temperaturas não são adequadas para o ecossistema do continente e o oceano em sua volta. Assim, vamos explorar esse problema mais a fundo e entender o porquê disso."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={1}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: GeloDerretendo,
                            next: 2,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Na imagem acima, vemos que uma das coisas que acontece quando a temperatura aumenta é o derretimento do gelo. Qual pode ser uma consequência desse fenômeno?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "Os animais que vivem em lugares frios não conseguem sobreviver.",
                                            explanation: "Isso aí! E você sabia que a outra resposta também estava certa? Vamos explorar esses problemas mais a fundo."
                                        },
                                        {
                                            id: 'b',
                                            text: "O clima pode mudar",
                                            explanation: "Sim, está correto! E você sabia que a outra resposta também estava certa? Vamos explorar esses problemas mais a fundo."
                                        },
                                    ]}
                                    correctAnswerId={null}   //dependendo da resposta ela pula pra uma pergunta diferente
                                    nextStage={2}
                                />
                            ),
                        },
                        {
                            // essa questão aparece se selecionar a "a" da 3
                            displayMap: false,
                            fallbackImage: GeloDerretendo,
                            next: 3,
                            component: (
                                <OnlyOneQuestion
                                    questionText={" Se os animais não sobreviverem, o ecossistema marinho se desordena. Consegue dizer o porquê?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "A cadeia alimentar fica bagunçada, já que não tem animais o suficiente.",
                                            explanation: "Sim, isso aí! Se um animal desaparecer, outros animais e plantas sofrem com isso. Por exemplo, se os animais que caçam sumirem, os animais caçados podem se multiplicar demais e acabar com as plantas.",
                                        },
                                        {
                                            id: 'b',
                                            text: "Como há menos peixes na água, o nível do mar diminui e os mares secam",
                                            explanation: "A resposta está incorreta, já que o nível do mar não depende da quantidade de peixes. Na verdade, o nível do mar está aumentando por causa do derretimento do gelo!",

                                            id: 'c',
                                            text: " A perda de biodiversidade deixa os ecossistemas mais fracos.",
                                            explanation: "Correto! Se tem mais variedade de seres em um ecossistema ele consegue se recuperar mais rápido, já que cada ser tem um trabalho específico.",
                                        },
                                    ]}
                                    correctAnswerId={null}   
                                    nextStage={3}
                                />
                            ),
                        },
                        {
                            // essa questão aparece se selecionar a "b" da 3
                            displayMap: false,
                            fallbackImage: TemperaturaAumentando,
                            next: 4,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Com as mudanças climáticas, os ecossistemas marinhos se desordenam. Consegue dizer o porquê?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "Os animais suam muito e se desidratam.",
                                            explanation: "Não é bem isso. Os animais marinhos não suam, então não sofrem com esse problema."
                                        },
                                        {
                                            id: 'b',
                                            text: "A temperatura do mar aumenta e prejudica os animais.",
                                            explanation: "A resposta está incorreta, já que o nível do mar não depende da quantidade de peixes. Na verdade, o nível do mar está aumentando por causa do derretimento do gelo!",

                                            id: 'c',
                                            text: " A perda de biodiversidade deixa os ecossistemas mais fracos.",
                                            explanation: "Correto! Se tem mais variedade de seres em um ecossistema ele consegue se recuperar mais rápido, já que cada ser tem um trabalho específico."
                                        },
                                    ]}
                                    correctAnswerId={null}   
                                    nextStage={4}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            component: (
                                <FinalStage
                                    onArrival={() => console.log('Final stage reached!')}
                                    briefing={{
                                        title: "Parabéns, você concluiu a missão!",
                                        location: "Antártica",
                                        image: mauritania,
                                        report: "",
                                        reportAll: "Agora você sabe muito mais sobre a mudança de temperatura e seus impactos. Sabia que algumas questões têm mais de uma reposta correta? Se quiser, selecione a missão no globo e faça-a novamente para adquirir mais conhecimento sobre o assunto"
                                    }}
                                    badge={{
                                        name: "Tiny Travelers with Big Effects!",
                                        image: badgeFigure
                                    }}
                                />
                            ),
                        },
                    ]
                }
            ];

        case 'MÉDIO':
            return [
                {
                    index: 0,
                    concluded: false,
                    title: "América do Norte",
                    lat: 42.81671,
                    lng: -69.95354,
                    location: "Northeastern US and Canada",
                    image: pace_maine,
                    text: "✨ Sua primeira missão está chegando: Vamos mergulhar nas cores do oceano, descobrindo como a luz refletida na água pode revelar segredos ocultos sobre a vida em todo o mundo! A região, que abrange o Banco Georges e o Golfo do Maine, é renomada por sua rica produtividade biológica, tornando-se historicamente um centro de pesca comercial. No entanto, a sobrepesca e as mudanças climáticas agora representam ameaças significativas a esse ecossistema vital.",
                    initialViewState: {
                        latitude: 42.81671,
                        longitude: -69.95354,
                        zoom: 7,
                    },
                    heatmapConfig: {
                        intensity: 1,
                        colorRange: [
                            [178, 34, 34, 255],     // Brick
                            [255, 0, 0, 255],       // Red
                            [255, 165, 0, 255],     // Orange
                            [255, 255, 0, 255],     // Yellow
                            [173, 255, 47, 255],    // GreenYellow
                            [0, 255, 0, 255],       // Green
                            [0, 255, 255, 255],     // Cyan
                            [0, 0, 255, 255],       // Blue
                            [147, 112, 219, 255],    // Lilac
                            [128, 0, 128, 255],     // Purple
                            [128, 0, 0, 255]        // Wine
                        ],

                        threshold: 0.9,
                    },
                    tileLayerConfig: {
                        data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
                        minZoom: 0,
                        maxZoom: 19,
                        tileSize: 256,
                    },
                    csvPath: null,
                    stages: [
                        {
                            displayMap: false,
                            fallbackImage: pace_maine,
                            next: 1,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Dê uma olhada nesta imagem incrível. O que você vê? O que é diferente ou empolgante? O que chamou sua atenção? Agora, observe as cores nela; o branco que você vê é apenas uma coisa ou mais de uma?"}
                                    options={[
                                        { id: 'a', text: 'É tudo igual.', explanation: 'Não exatamente! Vamos dar uma olhada mais de perto!' },
                                        { id: 'b', text: 'Há diferentes brancos.', explanation: '' }
                                    ]}
                                    correctAnswerId={'b'}
                                    nextStage={1}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: pace_maine,
                            next: 2,
                            component: (
                                <InformativeSectionStage nextStage={2}>
                                    <div className="mission-card-header">
                                        <h2>Os brancos</h2>
                                        <h4>Há duas coisas brancas na imagem: nuvens e neve.</h4>
                                    </div>
                                    <div className="list">
                                        <h3>Aqui estão algumas dicas para ajudar a diferenciá-las:</h3>
                                        <ul>
                                            <div className="image-container">
                                                <img src={pace_clouds}></img>
                                            </div>
                                            <li>Nuvens:</li>
                                            <ul>
                                                <li>As nuvens aparecem como manchas brancas brilhantes e fofas. Elas costumam ter formas mais irregulares e podem ser vistas flutuando sobre a terra e a água.</li>
                                                <li>Nesta imagem, as nuvens tendem a ter uma aparência mais suave e difusa, e estão presentes em várias partes, como sobre o oceano do lado direito, e algumas coberturas também podem ser vistas sobre a terra.

                                                </li>
                                            </ul>
                                            <div className="image-container">
                                                <img src={pace_snow}></img>
                                            </div>
                                            <li>Neve:</li>
                                            <ul>
                                                <li>A neve, por outro lado, cobre grandes áreas da terra, especialmente nas regiões do norte. Ela tem uma aparência mais uniforme e texturizada, pois se espalha de maneira uniforme sobre a superfície.</li>
                                                <li>A neve aparece como uma cor branca sólida ou cinza claro e tende a seguir os contornos da terra, particularmente na parte superior da imagem (em direção ao centro superior e à esquerda), onde a terra está coberta de neve.</li>
                                            </ul>

                                        </ul>
                                    </div>
                                </InformativeSectionStage>
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: pace_snow,
                            next: 3,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Dê uma olhada na neve, você nota algo estranho sobre como ela parece?"}
                                    options={[
                                        { id: 'a', text: 'Não', explanation: 'Dê uma olhada mais de perto! Embora a neve cubra o chão, há manchas de terra marrom aparecendo. A neve em si parece estar rachada, como se estivesse repousando sobre uma camada de sedimento.' },
                                        { id: 'b', text: 'Sim', explanation: 'Correto, agora podemos olhar mais de perto.' }
                                    ]}
                                    correctAnswerId={'b'}
                                    nextStage={3}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: pace_snow,
                            next: 4,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Você consegue formular alguma teoria sobre o que está acontecendo aqui? "}
                                    options={[
                                        { id: 'a', text: 'Atividade alienígena: As rachaduras na neve foram causadas por OVNIs pousando, deixando para trás vestígios de visitantes extraterrestres!', explanation: 'Ops, parece que isso não está exatamente certo! A resposta correta é: Sinais iniciais da Primavera: O calor da Primavera que se aproxima está fazendo com que a neve derreta de maneira desigual, deixando rachaduras e manchas de solo exposto.' },
                                        { id: 'b', text: 'Tremores de terremoto: A neve rachada é resultado de pequenos tremores de terremoto, que agitam o solo e dividem a camada de neve.', explanation: 'Ops, parece que isso não está exatamente certo! A resposta correta é: Sinais iniciais da Primavera: O calor da Primavera que se aproxima está fazendo com que a neve derreta de maneira desigual, deixando rachaduras e manchas de solo exposto.' },
                                        { id: 'c', text: 'Underground creatures: A colony of giant moles is tunneling just beneath the surface, causing the snow to crack and reveal patches of dirt.', explanation: 'Ops, parece que isso não está exatamente certo! A resposta correta é: Sinais iniciais da Primavera: O calor da Primavera que se aproxima está fazendo com que a neve derreta de maneira desigual, deixando rachaduras e manchas de solo exposto.'},
                                        { id: 'd', text: 'Sinais iniciais da Primavera: O calor da Primavera que se aproxima está fazendo com que a neve derreta de maneira desigual, deixando rachaduras e manchas de solo exposto.', explanation: 'Parabéns! Você acertou!' }
                                    ]}
                                    correctAnswerId={'a'}
                                    nextStage={4}
                                />
                            ),
                        },

                        {
                            displayMap: false,
                            fallbackImage: pace_water,
                            next: 5,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"O azul é água, como podemos ver, mas o que poderia ser o verde?"}
                                    options={[
                                        { id: 'a', text: 'Algae', explanation: 'Totally! Let\'s look further' },
                                        { id: 'b', text: 'Pollution', explanation: 'Not in this case! Pollution can look like many colors including green, however we would be able to identify it by other impacts in the environment, like flora and fauna dying and other disturbances' },
                                        { id: 'c', text: 'Waste', explanation: 'Not in this case, although waste could be this color, we would be able to see its origin and it would negatively impact the environment around it' },
                                        { id: 'd', text: 'A giant sea monster taking a bath', explanation: 'Fortunately, or unfortunately, no animals exist in our ocean that are that big and green, but the thought that this is a living being (a collection of them) is correct!' }
                                    ]}
                                    correctAnswerId={'a'}
                                    nextStage={5}  // Ensure this links correctly
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: pace_water,
                            next: 6,
                            component: (
                                <InformativeSectionStage nextStage={6}> {/* Update nextStage properly */}
                                    <div className="mission-card-header">
                                        <h2>The answer is: Algae</h2>
                                        <h4>Here's some quick facts about it!</h4>
                                    </div>
                                    <div className="image-container">
                                        <img src={phytoplankton}></img>
                                    </div>
                                    <div className="text">
                                        <p>Phytoplankton are like tiny algae that live in the ocean, lakes, and rivers. Even though they're super small, they’re really important because they make food from sunlight, just like plants in a garden! They also give off oxygen, which helps animals (and us!) breathe. You can think of them as the ocean’s little helpers, keeping everything healthy and full of life!
                                            Here’s a fun fact! For a long time, people thought the Amazon rainforest was the ‘lungs of the Earth’ because of all the oxygen it produces. But guess what? It’s actually these tiny ocean algae, called phytoplankton, that do most of the work! They make most of the oxygen we breathe, so even though they’re small, they’re true heroes of the planet!
                                        </p>
                                    </div>
                                </InformativeSectionStage>
                            ),
                        },
                        {
                            displayMap: true,
                            next: 7,
                            component: (
                                <MapFocusStage nextStage={7} // Make sure the progression continues logically
                                    images={[
                                        {
                                            lat: 42.81671,
                                            lng: -69.95354,
                                            image: maine_to_george,
                                            title: "This is the coast we were looking at!",
                                            text: "With the satellite image we could see all its beauty!",
                                            zoom: 7,
                                        }
                                    ]}
                                />
                            ),
                        },

                        {
                            displayMap: true,
                            component: <FinalStage
                                onArrival={() => console.log('Final stage reached!')}
                                briefing={{
                                    title: "North America from Above",
                                    location: "Northeastern US and Canada",
                                    image: pace_maine,
                                    report: "Congratulations! You’ve completed your first mission! Your skills are amazing, and we can’t wait to have your help on our next big adventure!",
                                    reportAll: "We’ve seen how it’s way smarter to act before a problem pops up, but when things do go wrong, we can’t just sit back. In today’s example, we talked about mud, but oil spills are a whole other story. They can be even nastier, sticking around much longer and causing bigger damage to marine life. Oil doesn’t just muddy the water, it coats everything, from fish to birds, making it hard for ecosystems to bounce back. The cool thing about using images is that they don’t just show us what’s happening, they give us clues about what might happen next! They help us track where the mud, oil, or any other mess is headed. With that info, we can figure out which areas might be in trouble and jump in with protective measures. Whether it’s blocking the spill, setting up barriers, or getting cleanup crews to the right spot, these images are like treasure maps showing us the best path to take. And even after the initial cleanup, we can keep an eye on things. Satellite images and other tools let us monitor how nature is recovering and make sure it gets back to its full strength. By acting early, responding quickly, and using tech to guide us, we can help protect our bays, rivers, and oceans from the messes that threaten the"
                                }}
                                badge={{
                                    name: "North America from Above Mission Emblem",
                                    image: badgeFigure
                                }}
                            />
                        },
                    ],
                },
                {
                    index: 1,
                    concluded: false,
                    title: "Stuck in a Mudstery",
                    lat: 43.671677,
                    lng: -83.821499,
                    location: "Saginaw Bay, Michigan, US",
                    image: saginaw_bay,
                    text: "Unusual changes are happening in Saginaw Bay after a big storm. The waters are shifting, and things aren’t quite right. Your mission is to explore the bay, uncover what’s causing the trouble. Can you help us solve the challenge before it’s too late? Saginaw Bay Saginaw Bay is a big, shallow area of water in eastern Michigan, right next to Lake Huron. It’s home to all kinds of amazing animals, like fish, birds, and other wildlife. Many people come here to fish, and birds love to visit the nearby wetlands. But over the years, the bay has faced some problems, like pollution and losing important habitats for animals. Thankfully, people are working hard to protect it and keep it healthy so that the bay can stay beautiful and full of life for years to come!",
                    displayMap: true,
                    fallbackImage: saginaw_bay,
                    csvPath: sagiData,
                    initialViewState: {
                        latitude: 43.671677,
                        longitude: -83.821499,
                        zoom: 7,
                    },
                    heatmapConfig: {
                        intensity: 1,
                        colorRange: [
                            [178, 34, 34, 255],     // Brick
                            [255, 0, 0, 255],       // Red
                            [255, 165, 0, 255],     // Orange
                            [255, 255, 0, 255],     // Yellow
                            [173, 255, 47, 255],    // GreenYellow
                            [0, 255, 0, 255],       // Green
                            [0, 255, 255, 255],     // Cyan
                            [0, 0, 255, 255],       // Blue
                            [147, 112, 219, 255],    // Lilac
                            [128, 0, 128, 255],     // Purple
                            [128, 0, 0, 255]        // Wine
                        ],


                        threshold: 0.9,
                    },
                    tileLayerConfig: {
                        data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
                        minZoom: 0,
                        maxZoom: 19,
                        tileSize: 256,
                    },
                    stages: [
                        {
                            displayMap: false,
                            fallbackImage: saginaw_pace,
                            next: 1,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"What catches your eye in this image?"}
                                    options={[
                                        { id: 'a', text: 'The lack of vibrant green in the water', explanation: 'Hmm, it looks like this area is missing that bright, lush green we would hope for.' },
                                        { id: 'b', text: 'The blue is not very bright', explanation: 'Looks like that brown stain is messing up the water’s sparkle! Time to put on our detective hats and see what’s behind it.' },
                                        { id: 'c', text: 'The squares around the water', explanation: 'Look at all those little squares around the bay—they\'re homes, just like yours and mine! But what really catches our eye is that big brown stain in the water. Let’s dig in and see what’s going on!' },
                                        { id: 'c', text: 'The stain', explanation: 'That brown stain is definitely standing out—it’s affecting the area for sure. Let’s get to the bottom of it and find out what’s happening!' },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={1}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: saginaw_pace_stain,
                            next: 2,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Could it be nature doing its thing, or do you think something’s up with the environment? What’s your guess?"}
                                    options={[
                                        { id: 'a', text: 'It\'s natural! Mother Nature’s just changing the scenery.', explanation: 'Good thinking! It could just be how this region looks without all the phytoplankton. But hey, that big brown splotch in the water is hard to miss! Let’s dive deeper and figure out what it is and what kind of splash it’s making!' },
                                        { id: 'b', text: 'It’s an environmental impact! Something’s affecting this spot.', explanation: 'You’ve got a sharp eye! That brown stain is definitely up to no good here. Time to roll up our sleeves and investigate what\'s really going on!' },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={2}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: saginaw_pace,
                            next: 3,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Where did this brown stain come from?"}
                                    options={[
                                        { id: 'a', text: 'It looks like it came from a river', explanation: 'Zooming in, we can spot a river hiding in plain sight! Its waters are the same shade of brown as the land around it. It seems like that’s the source, but the mystery continues—something outside the image might have started it all.' },
                                        { id: 'b', text: 'It came from somewhere outside the image', explanation: 'Zooming in, we can spot a river hiding in plain sight! Its waters are the same shade of brown as the land around it. It seems like that’s the source, but the mystery continues—something outside the image might have started it all.' },
                                        { id: 'c', text: 'It appeared spontaneously', explanation: 'Hmm, the storm might have stirred up more than just a breeze! After taking a closer peek, we can spot a river sneaking through. Its waters are so brown, they blend right into the land, looks like that’s where the brown stain is coming from!' },
                                        { id: 'd', text: 'Many people swimming stirred up sediment from the bottom of the water', explanation: 'Hmm, the storm might have stirred up more than just a breeze! After taking a closer peek, we can spot a river sneaking through. Its waters are so brown, they blend right into the land, looks like that’s where the brown stain is coming from!' },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={3}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: mud_spill,
                            next: 4,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"It seems that those heavy rains brought more than just a downpour. Some water reservoirs couldn’t handle it, and now a whole lot of mud has found its way into the river and out into the bay. What do you think this could mean for the creatures living here?"}
                                    options={[
                                        { id: 'a', text: "There was no impact, it's just mud!", explanation: "A little mud is no big deal, but we’re talking about a lot of mud here! Imagine the biggest swimming pool you’ve ever seen filled to the brim with mud, and now imagine that times 100. That’s a whole lot of mud, and it can really shake things up." },
                                        { id: 'b', text: 'Many fish and algae may have died', explanation: "You're right, that amount of mud is terrible!" },
                                    ]}
                                    correctAnswerId={'b'}
                                    nextStage={4}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            fallbackImage: mud_spill,
                            next: 5,
                            component: (
                                <InformativeSectionStage nextStage={5}>
                                    <div className="mission-card-header">
                                        <h2>Mud flows</h2>
                                        <h4>This map shows the light reflection of the water! Bigger particles, like mud, can really affect it, that could be the reason behind the patterns we observe in the map! </h4>
                                    </div>
                                    <div className="image-container">
                                        <img src={mud_spill_rebuilding}></img>
                                    </div>
                                    <div className="text">
                                        <p>When all this mud enters the water, it stirs up the ecosystem. The water gets murky, making it hard for sunlight to reach the bottom. Without enough sunlight, the plants and algae that need it for energy can’t do their job, and eventually, they start to die off. These algae are super important because they’re at the base of the food chain, feeding fish, crustaceans, and lots of other creatures.
                                            But that’s not all. All that mud also brings a load of organic matter with it. As this matter breaks down, it uses up the oxygen in the water. This can cause hypoxia, which is a fancy way of saying there’s not enough oxygen for fish and other animals to breathe. Without oxygen, many of them might not survive. So, this big muddy mess can throw off the whole balance of the bay, making it tough for the creatures that call it home.
                                        </p>
                                    </div>
                                </InformativeSectionStage>
                            ),
                        },
                        {
                            displayMap: true,
                            fallbackImage: mud_spill_rebuilding,
                            next: 6,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"How can we solve this problem?"}
                                    options={[
                                        { id: 'a', text: "There is nothing to be done", explanation: "Come on, don’t be so gloomy! There’s always something we can do! Let’s head back and think again." },
                                        { id: 'b', text: 'Stop the mud', explanation: "Stopping the mud completely is a tall order and pretty costly too. The real trick is to focus on making sure this doesn’t happen again in the future." },
                                        { id: 'c', text: 'Invent a method that does not yet exist', explanation: "I love your creativity! New ideas are always welcome, and who knows what we’ll discover in the future. For now, though, we need to take steps to stop the problem from getting worse and, of course, prevent it from happening again." },
                                        { id: 'd', text: 'Take measures to prevent it from happening again', explanation: "Exactly! Preventive measures are the way to go if we want to stop this from becoming a recurring issue." },
                                        { id: 'e', text: 'Take palliative measures (measures to reduce the damage we cannot prevent)', explanation: "Palliative measures are helpful for sure. Whether it’s temporary barriers or other strategies, they can provide some relief in the short term." },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={6}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            next: 7,
                            component: (
                                <MapFocusStage nextStage={7}
                                    images={[
                                        {
                                            lat: 43.648052,
                                            lng: -83.850347,
                                            image: saginaw_pace,
                                            title: "The Saginaw Bay is a beautiful area but it may need a little help!",
                                            text: "We humans impact the world around us, look around your own environment, how do you think you change it? How do you think you can help the world around you, humans, land and oceans alike?",
                                            zoom: 10,
                                        },
                                    ]}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            component: (
                                <FinalStage
                                    onArrival={() => console.log('Final stage reached!')}
                                    briefing={{
                                        title: "Stuck in a Mudstery",
                                        location: "Saginaw Bay, Michigan, US",
                                        image: saginaw_bay,
                                        report: "Yay! Thanks to your help, we figured out what’s going on in Saginaw Bay with all this mud and started thinking up clever ways to fix it!",
                                        reportAll: "We’ve seen how it’s way smarter to act before a problem pops up, but when things do go wrong, we can’t just sit back. In today’s example, we talked about mud, but oil spills are a whole other story. They can be even nastier, sticking around much longer and causing bigger damage to marine life. Oil doesn’t just muddy the water, it coats everything, from fish to birds, making it hard for ecosystems to bounce back. The cool thing about using images is that they don’t just show us what’s happening, they give us clues about what might happen next! They help us track where the mud, oil, or any other mess is headed. With that info, we can figure out which areas might be in trouble and jump in with protective measures. Whether it’s blocking the spill, setting up barriers, or getting cleanup crews to the right spot, these images are like treasure maps showing us the best path to take. And even after the initial cleanup, we can keep an eye on things. Satellite images and other tools let us monitor how nature is recovering and make sure it gets back to its full strength. By acting early, responding quickly, and using tech to guide us, we can help protect our bays, rivers, and oceans from the messes that threaten the"
                                    }}
                                    badge={{
                                        name: "Stuck in a Mudstery Mission Emblem ",
                                        image: badgeFigure
                                    }}
                                />
                            ),
                        },
                    ],
                },
                {
                    index: 2,
                    concluded: false,
                    title: "Hidden Springs, Hidden Secrets",
                    lat: 24.772691,
                    lng: 57.524873,
                    location: "Oman",
                    image: oman_picture,
                    text: "The water is full of all kinds of phytoplankton species, and right now, the main way to tell them apart is by scooping up water samples—talk about time-consuming and pricey! But what if we could use images to tell them apart instead, and maybe even discover more? Oman, located at the southeastern tip of the Arabian Peninsula, is a country of stunning landscapes and warm climate. Its coastline boasts crystal-clear waters that are home to a rich marine biodiversity, including turtles and dolphins. The proliferation of phytoplankton in the coastal waters plays a crucial role in this ecosystem, serving as the foundation of the food chain and contributing to the health of the oceans. This connection between nature and culture highlights how Oman is a fascinating destination.",
                    displayMap: true,
                    fallbackImage: oman_pace,
                    csvPath: omanData,
                    initialViewState: {
                        latitude: 24.772691,
                        longitude: 57.524873,
                        zoom: 7,
                    },
                    heatmapConfig: {
                        intensity: 1,
                        colorRange: [
                            [178, 34, 34, 255],     // Brick
                            [255, 0, 0, 255],       // Red
                            [255, 165, 0, 255],     // Orange
                            [255, 255, 0, 255],     // Yellow
                            [173, 255, 47, 255],    // GreenYellow
                            [0, 255, 0, 255],       // Green
                            [0, 255, 255, 255],     // Cyan
                            [0, 0, 255, 255],       // Blue
                            [147, 112, 219, 255],    // Lilac
                            [128, 0, 128, 255],     // Purple
                            [128, 0, 0, 255]        // Wine
                        ],


                        threshold: 0.9,
                    },
                    tileLayerConfig: {
                        data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
                        minZoom: 0,
                        maxZoom: 19,
                        tileSize: 256,
                    },
                    stages: [
                        {
                            displayMap: false,
                            fallbackImage: oman_pace,
                            next: 1,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Oman is an amazing place, bursting with all kinds of life and beauty! Take a look at the image, can you spot that?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "Nope",
                                            explanation: "Take a closer look at all that green! You can spot different shades, from deep, dark green to bright, light green. These colors could be showing us a variety of phytoplankton species living in this area."
                                        },
                                        {
                                            id: 'b',
                                            text: 'Absolutely',
                                            explanation: "You’ve got it! Those different shades of green, from the darkest to the lightest, likely point to a variety of phytoplankton species hanging out in this region."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={1}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            fallbackImage: null,
                            next: 2,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"This map helps us see the presence of phytoplankton in the oceans! We can get this data because they contain pigments like chlorophyll that absorb light at specific wavelengths. Look at the scale and explore the ocean around Oman a bit and search for them! Does the observed phytoplankton affect other species of animals?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "No",
                                            explanation: "Look back at what we saw! Phytoplankton is super important; it’s the base of the food chain and helps keep the planet’s oxygen levels in check."
                                        },
                                        {
                                            id: 'b',
                                            text: 'Yes',
                                            explanation: "You’re spot on! Phytoplankton plays a key role in the food chain and is essential for maintaining the planet's oxygen."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={2}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            fallbackImage: null,
                            next: 3,
                            component: (
                                <InformativeSectionStage nextStage={3}>
                                    <div className="mission-card-header">
                                        <h2>Phytoplankton</h2>
                                        <h4>Here's some quick facts about it!</h4>
                                    </div>
                                    <div className="image-container">
                                        <img src={phytoplankton}></img>
                                    </div>
                                    <div className="text">
                                        <p>The food chain is kind of like nature’s dinner party! It’s all about who’s eating and who’s being eaten, with energy passing along the line. It starts with the chefs—plants and tiny phytoplankton—that whip up energy from sunlight. Then, little critters like zooplankton come along for a bite. After that, small fish snack on those critters, and bigger fish come in to munch on the smaller ones. It keeps going until we get to the ocean’s top diners, like sharks or whales!
                                            Phytoplankton are the tiny heroes at the base of this party. Without them, no one else gets to eat, and the whole chain could fall apart. So, they’re super important to keep the food chain running smoothly!
                                        </p>
                                    </div>
                                </InformativeSectionStage>
                            ),
                        },
                        {
                            displayMap: true,
                            fallbackImage: null,
                            next: 4,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"What do you think could happen if the numbers of phytoplankton start to drop?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "Phytoplankton will turn into seaweed",
                                            explanation: "Nope, that’s not how it works! Phytoplankton are tiny and different from seaweed, and they can’t just transform."
                                        },
                                        {
                                            id: 'b',
                                            text: 'The oceans will dry up',
                                            explanation: "Nah, oceans might get warmer, but they won’t vanish!"
                                        },
                                        {
                                            id: 'c',
                                            text: 'Phytoplankton will move to live on land',
                                            explanation: "No way! These little guys are ocean dwellers—they can't pack up and move to the land like plants."
                                        },
                                        {
                                            id: 'd',
                                            text: 'Fish will start producing their own food',
                                            explanation: "Nope, fish can’t suddenly become chefs—they rely on what’s in the food chain!"
                                        },
                                        {
                                            id: 'e',
                                            text: 'Less food for marine life',
                                            explanation: "Yep, if phytoplankton drop, sea creatures that rely on them might go hungry."
                                        },
                                        {
                                            id: 'f',
                                            text: 'Impact on oxygen levels',
                                            explanation: "Correct! Phytoplankton help make oxygen, so fewer of them could affect the air we breathe."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={4}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: image_globe,
                            next: 5,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"How can a picture like this help us protect nature and understand what’s happening?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "A picture shows us where nature might be in trouble!",
                                            explanation: "Exactly! We can see changes in landscapes, spot endangered species, and track how healthy ecosystems are."
                                        },
                                        {
                                            id: 'b',
                                            text: 'It helps us find patterns!',
                                            explanation: "Absolutely! By looking at images over time, we can spot changes like shrinking forests or fewer animals, giving us clues on what needs protecting."
                                        },
                                        {
                                            id: 'c',
                                            text: 'Pictures let us see without disturbing!',
                                            explanation: "You’re spot on! We can observe wildlife and nature from a distance, gathering information without interrupting the natural world."
                                        },
                                        {
                                            id: 'd',
                                            text: 'They spread the word!',
                                            explanation: "Exactly! A powerful image can inspire others to care about nature and take action to protect it."
                                        },
                                        {
                                            id: 'e',
                                            text: 'It’s like a map for conservation!',
                                            explanation: "Correct! Images help scientists and conservationists know where to focus their efforts to save biodiversity."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={5}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            component: (
                                <FinalStage
                                    onArrival={() => console.log('Final stage reached!')}
                                    briefing={{
                                        title: "Hidden Springs, Hidden Secrets",
                                        location: "Oman",
                                        image: oman_picture,
                                        report: "Woohoo! We did it! We figured out how to tell phytoplankton apart and went even further, chatting about just how important they are. Plus, we explored how their disappearance could impact not just the region, but the entire planet! What an adventure!.",
                                        reportAll: "We’ve seen how it’s way smarter to act before a problem pops up, but when things do go wrong, we can’t just sit back. In today’s example, we talked about mud, but oil spills are a whole other story. They can be even nastier, sticking around much longer and causing bigger damage to marine life. Oil doesn’t just muddy the water, it coats everything, from fish to birds, making it hard for ecosystems to bounce back. The cool thing about using images is that they don’t just show us what’s happening, they give us clues about what might happen next! They help us track where the mud, oil, or any other mess is headed. With that info, we can figure out which areas might be in trouble and jump in with protective measures. Whether it’s blocking the spill, setting up barriers, or getting cleanup crews to the right spot, these images are like treasure maps showing us the best path to take. And even after the initial cleanup, we can keep an eye on things. Satellite images and other tools let us monitor how nature is recovering and make sure it gets back to its full strength. By acting early, responding quickly, and using tech to guide us, we can help protect our bays, rivers, and oceans from the messes that threaten the"
                                    }}
                                    badge={{
                                        name: "Hidden Springs, Hidden Secrets Mission Emblem",
                                        image: badgeFigure
                                    }}
                                />
                            ),
                        },
                    ]
                },
                {
                    index: 3,
                    concluded: false,
                    title: "Tiny Travelers with Big Effects!",
                    lat: 19.96057,
                    lng: -16.70246,
                    location: "Mauritania",
                    image: mauritania,
                    text: "Your mission, should you choose to accept it, is to dive into the world of aerosols and uncover how these tiny airborne particles impact the mighty phytoplankton population! Are aerosols helping them thrive, or causing a challenge for their growth? Time to find out! Mauritania is a large, mostly desert country located in Northwest Africa, bordered by the Atlantic Ocean to the west. Its vast landscapes range from sandy dunes to rocky plateaus and coastal plains. Much of Mauritania is dominated by the Sahara Desert, making it one of the driest nations in the world, with sparse vegetation and a harsh climate. Its coastal waters, particularly along the Canary Current, are renowned for a natural phenomenon called upwelling, where nutrient-rich waters from the ocean depths rise to the surface. This process sparks the Mauritania bloom, an explosion of microscopic algae, or phytoplankton, that supports a rich marine ecosystem. The Mauritania bloom plays a vital role in sustaining one of the world’s most productive fishing zones. Fish like sardines, mackerel, and other species thrive in these nutrient-rich waters, contributing significantly to the livelihoods of local communities and fueling the country's fishing industry. Mauritania’s coastal waters become a hotspot of marine life during the bloom season, attracting fishermen and birds alike.",
                    displayMap: true,
                    fallbackImage: mauritania,
                    csvPath: omanData,
                    initialViewState: {
                        latitude: 19.96057,
                        longitude: -16.70246,
                        zoom: 8,
                    },
                    heatmapConfig: {
                        intensity: 1,
                        colorRange: [
                            [178, 34, 34, 255],     // Brick
                            [255, 0, 0, 255],       // Red
                            [255, 165, 0, 255],     // Orange
                            [255, 255, 0, 255],     // Yellow
                            [173, 255, 47, 255],    // GreenYellow
                            [0, 255, 0, 255],       // Green
                            [0, 255, 255, 255],     // Cyan
                            [0, 0, 255, 255],       // Blue
                            [147, 112, 219, 255],    // Lilac
                            [128, 0, 128, 255],     // Purple
                            [128, 0, 0, 255]        // Wine
                        ],


                        threshold: 0.9,
                    },
                    tileLayerConfig: {
                        data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
                        minZoom: 0,
                        maxZoom: 19,
                        tileSize: 256,
                    },
                    stages: [
                        {
                            displayMap: false,
                            fallbackImage: mauritania_pace,
                            next: 1,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"What do you notice that is different in this image?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "The green showing the phytoplankton looks different.",
                                            explanation: "Yes, the phytoplankton does seem to be forming an interesting pattern."
                                        },
                                        {
                                            id: 'b',
                                            text: "I notice the waves.",
                                            explanation: "Actually, it’s not the waves I notice, but the phytoplankton itself forming a wave-like pattern."
                                        },
                                        {
                                            id: 'c',
                                            text: "I can also spot a desert.",
                                            explanation: "The desert could be significant for our analysis! Plus, the phytoplankton appears to be creating a unique pattern that might be worth exploring further."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={1}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: mauritania_globe,
                            next: 2,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Let’s put on our scientist hats and come up with some fun hypotheses for what’s going on here:"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "The wind is blowing the phytoplankton around, spreading them across the water like confetti.",
                                            explanation: "Not exactly! The wind isn’t giving the phytoplankton a lift, but it’s playing a big role by pushing surface waters westward and letting nutrient-filled water rise up from the deep ocean and could carry desert dust from the Sahara, which is full of iron and other goodies that help the phytoplankton grow. That’s where the phytoplankton get their feast!"
                                        },
                                        {
                                            id: 'b',
                                            text: "The wind is carrying important nutrients to the surface that the phytoplankton need to grow big and strong.",
                                            explanation: "You’re on the right track! The wind actually plays a big role by pushing surface waters westward and letting nutrient-filled water rise up from the deep ocean and could carry desert dust from the Sahara, which is full of iron and other goodies that help the phytoplankton grow."
                                        },
                                        {
                                            id: 'c',
                                            text: "The desert is packed with nutrients, and its dust is sprinkling into the water, helping the ecosystem thrive.",
                                            explanation: "You got it! The Sahara desert is like a big jar of nutrient-rich dust, full of iron. When the winds carry this dust over the ocean, it sprinkles into the water and gives the phytoplankton an extra boost, helping the whole ecosystem stay healthy. And the wind plays a big role too by pushing surface waters westward and letting nutrient-filled water rise up from the deep ocean."
                                        },
                                        {
                                            id: 'd',
                                            text: "The phytoplankton just love hanging out nearby – it’s their favorite spot!",
                                            explanation: "Well, it’s not exactly their choice to live there, but they do thrive because the conditions are just perfect! Thanks to the nutrient-rich waters being pulled to the surface and a sprinkle of desert dust, it’s the ideal spot for them to bloom all year long."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={2}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            fallbackImage: null,
                            next: 3,
                            component: (
                                <InformativeSectionStage nextStage={3}>
                                    <div className="mission-card-header">
                                        <h2>Phytoplankton</h2>
                                        <h4>Here's some quick facts about it!</h4>
                                    </div>
                                    <div className="image-container">
                                        <img src={phytoplankton}></img>
                                    </div>
                                    <div className="text">
                                        <p>The food chain is kind of like nature’s dinner party! It’s all about who’s eating and who’s being eaten, with energy passing along the line. It starts with the chefs—plants and tiny phytoplankton—that whip up energy from sunlight. Then, little critters like zooplankton come along for a bite. After that, small fish snack on those critters, and bigger fish come in to munch on the smaller ones. It keeps going until we get to the ocean’s top diners, like sharks or whales!
                                            Phytoplankton are the tiny heroes at the base of this party. Without them, no one else gets to eat, and the whole chain could fall apart. So, they’re super important to keep the food chain running smoothly!
                                        </p>
                                    </div>
                                </InformativeSectionStage>
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: mauritania_above,
                            next: 4,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"So the desert and the wind are connected, helping the phytoplankton grow. What do you think about it?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "It is boring!",
                                            explanation: "Oh no, it’s far from boring! It’s like nature’s own puzzle, with each piece fitting together perfectly. The wind, the desert, the ocean, everything plays a part in helping these tiny ocean algae bloom. It’s like a secret teamwork mission happening all around us! A lot of things in nature are connected and understanding and solving a problem could help us to solve another one and understanding and modeling even more of the world."
                                        },
                                        {
                                            id: 'b',
                                            text: "Nature is not an isolated system",
                                            explanation: "Exactly! Nature is all about connections. The desert and the ocean may seem far apart, but they’re really good friends. The wind carries the desert’s nutrient-rich dust across the ocean, and that helps the phytoplankton grow. It’s a beautiful example of how everything in nature is linked together in surprising ways! A lot of things in nature are connected and understanding and solving a problem could help us to solve another one and understanding and modeling even more of the world."
                                        },
                                        {
                                            id: 'c',
                                            text: "It’s like the desert is sending a care package to the ocean!",
                                            explanation: "Exactly! Nature is all about connections. The desert and the ocean may seem far apart, but they’re really good friends. The wind carries the desert’s nutrient-rich dust across the ocean, and that helps the phytoplankton grow. It’s a beautiful example of how everything in nature is linked together in surprising ways! A lot of things in nature are connected and understanding and solving a problem could help us to solve another one and understanding and modeling even more of the world."
                                        },
                                        {
                                            id: 'd',
                                            text: "Wow, nature is like a big team sport!",
                                            explanation: "Exactly! Nature is all about connections. The desert and the ocean may seem far apart, but they’re really good friends. The wind carries the desert’s nutrient-rich dust across the ocean, and that helps the phytoplankton grow. It’s a beautiful example of how everything in nature is linked together in surprising ways! A lot of things in nature are connected and understanding and solving a problem could help us to solve another one and understanding and modeling even more of the world."
                                        },
                                        {
                                            id: 'e',
                                            text: "So the wind is like a delivery service!",
                                            explanation: "Exactly! Nature is all about connections. The desert and the ocean may seem far apart, but they’re really good friends. The wind carries the desert’s nutrient-rich dust across the ocean, and that helps the phytoplankton grow. It’s a beautiful example of how everything in nature is linked together in surprising ways! A lot of things in nature are connected and understanding and solving a problem could help us to solve another one and understanding and modeling even more of the world."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={4}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: mauritania_above,
                            next: 5,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"The Sahara dust is considered an aerosol, what is it?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "It is like a type of deodorant",
                                            explanation: "Kind of! Just like the spray from deodorant, an aerosol is made up of tiny particles that float in the air. But instead of making you smell fresh, aerosols can come from things like sea spray, smoke, or even volcanic ash."
                                        },
                                        {
                                            id: 'b',
                                            text: "It is tiny particles in the air",
                                            explanation: "Exactly! Aerosols are very small solid or liquid particles that stay suspended in the air. They can be natural, like from a volcano, or human-made, like from pollution."
                                        },
                                        {
                                            id: 'c',
                                            text: "It’s like glitter in the sky",
                                            explanation: "That’s right! Aerosols are tiny particles, almost like invisible glitter floating through the air. They’re light enough to stay suspended and can have all sorts of effects, from influencing weather to spreading nutrients or pollution."
                                        },
                                        {
                                            id: 'd',
                                            text: "It’s nature’s way of spreading things around",
                                            explanation: "You got it! Aerosols are tiny particles in the air, one of nature’s tools for moving materials around. Whether it’s dust, water droplets, or even pollen, aerosols can travel long distances in the air."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={5}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: mauritania_globe,
                            next: 6,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Aerosols can also affect other things, do you know what?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "Weather and climate",
                                            explanation: "Aerosols can influence weather patterns and the climate by interacting with sunlight. Some aerosols reflect sunlight back into space, cooling the Earth, while others absorb heat, warming the atmosphere."
                                        },
                                        {
                                            id: 'b',
                                            text: "Cloud formation",
                                            explanation: "Aerosols play an important role in cloud formation. Tiny aerosol particles can act as 'seeds' for water droplets to form around, helping clouds develop and affecting rainfall."
                                        },
                                        {
                                            id: 'c',
                                            text: "Air quality",
                                            explanation: "Aerosols can affect the quality of the air we breathe. Natural aerosols, like sea salt, are usually harmless, but human-made aerosols, like smoke and industrial pollution, can cause health problems, especially for people with respiratory issues."
                                        },
                                        {
                                            id: 'd',
                                            text: "Human health",
                                            explanation: "Some aerosols, especially those from pollution, can be harmful if inhaled. Particles like soot or chemicals in the air can irritate the lungs, leading to breathing issues or long-term health effects."
                                        },
                                        {
                                            id: 'e',
                                            text: "Visibility",
                                            explanation: "Aerosols can affect how clear the air looks. High concentrations of aerosols, like smoke or haze, can make it harder to see, reducing visibility."
                                        },
                                        {
                                            id: 'f',
                                            text: "Ocean ecosystems",
                                            explanation: "When certain aerosols, like those containing iron, land in the ocean, they can provide nutrients for marine life, particularly tiny organisms like phytoplankton."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={6}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            component: (
                                <FinalStage
                                    onArrival={() => console.log('Final stage reached!')}
                                    briefing={{
                                        title: "Tiny Travelers with Big Effects!",
                                        location: "Mauritania",
                                        image: mauritania,
                                        report: "",
                                        reportAll: "Congratulations, fellow scientist! We’ve explored the fascinating world of aerosols and their impact on phytoplankton, uncovering how the wind, desert, and ocean work together in surprising ways. From tiny particles floating in the air to nutrient-packed dust delivered by the wind, we now know that aerosols play a big role in shaping ecosystems like the vibrant marine life along Mauritania’s coast. Mission Complete: The Grand Wrap-Up: Throughout this journey, we’ve learned that nature is a vast, interconnected system where even the smallest things, like aerosols, can have powerful effects—some good, some not so much. By examining satellite images, forming hypotheses, and understanding the role of aerosols, we’ve gained valuable insights into how these microscopic particles help sustain life in our oceans. As we wrap up this mission, remember that the mysteries of nature are always waiting to be explored! With every new piece of information, we unlock more secrets, helping us not only to understand the world around us but also to protect it for the future."
                                    }}
                                    badge={{
                                        name: "Tiny Travelers with Big Effects!",
                                        image: badgeFigure
                                    }}
                                />
                            ),
                        },
                    ]
                }
            ];


        case 'HARD':
            return [

            ];

        default:
            return [];
    }
};

export default getMissionsByDifficulty;
