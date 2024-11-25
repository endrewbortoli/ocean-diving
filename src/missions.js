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
                    location: "Nordeste dos EUA e Canadá",
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
                                        { id: 'c', text: 'Criaturas subterrâneas: Uma colônia de toupeiras gigantes está cavando justamente abaixo da superfície, fazendo com que a neve trinque e revele áreas de terra.', explanation: 'Ops, parece que isso não está exatamente certo! A resposta correta é: Sinais iniciais da Primavera: O calor da Primavera que se aproxima está fazendo com que a neve derreta de maneira desigual, deixando rachaduras e manchas de solo exposto.'},
                                        { id: 'd', text: 'Sinais iniciais da Primavera: O calor da Primavera que se aproxima está fazendo com que a neve derreta de maneira desigual, deixando rachaduras e manchas de solo exposto.', explanation: 'Parabéns! Você acertou!' }
                                    ]}
                                    correctAnswerId={'d'}
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
                                        { id: 'a', text: 'Algas', explanation: 'Exato! Vamos olhar mais de perto' },
                                        { id: 'b', text: 'Poluição', explanation: 'Não nesse caso! A poluição pode ter muitas cores, incluindo verde, no entanto, podemos identificá-la por outros impactos no ambiente, como a morte da flora e fauna e outras perturbações.' },
                                        { id: 'c', text: 'Waste', explanation: 'Não nesse caso, Embora o lixo possa ter essa cor, seríamos capazes de ver sua origem e ele teria um impacto negativo no ambiente ao seu redor.' },
                                        { id: 'd', text: 'A giant sea monster taking a bath', explanation: 'Felizmente, ou infelizmente, não existem animais em nosso oceano que sejam tão grandes e verdes, mas a ideia de que isso é um ser vivo (uma coleção deles) é correta!' }
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
                                        <h2>A resposta é: Algas</h2>
                                        <h4>Aqui estão alguns fatos rápidos sobre isso!</h4>
                                    </div>
                                    <div className="image-container">
                                        <img src={phytoplankton}></img>
                                    </div>
                                    <div className="text">
                                        <p>Os fitoplânctons são como algas minúsculas que vivem nos oceanos, lagos e rios. Embora sejam super pequenos, eles são muito importantes porque produzem alimento a partir da luz solar, assim como as plantas em um jardim! Eles também liberam oxigênio, o que ajuda os animais (e nós!) a respirar. Você pode pensar neles como os pequenos ajudantes do oceano, mantendo tudo saudável e cheio de vida!
                                        Aqui vai um fato divertido! Por muito tempo, as pessoas pensavam que a floresta amazônica era os ‘pulmões da Terra’ devido à toda a oxigênio que produz. Mas adivinhe o que? Na verdade, são essas algas oceânicas minúsculas, chamadas fitoplânctons, que fazem a maior parte do trabalho! Eles produzem a maior parte do oxigênio que respiramos, então, embora sejam pequenos, são verdadeiros heróis do planeta!
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
                                            title: "Esta é a costa que estávamos observando.!",
                                            text: "Com a imagem de satélite, podemos ver toda a sua beleza!",
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
                                    title: "América do Norte",
                                    location: "Nordeste dos EUA e Canadá",
                                    image: pace_maine,
                                    report: "Parabéns! Você completou sua primeira missão! Suas habilidades são incríveis, e não podemos esperar para ter sua ajuda em nossa próxima grande aventura!",
                                    reportAll: "Nós vimos como é muito mais inteligente agir antes que um problema surja, mas quando as coisas dão errado, não podemos simplesmente sentar e esperar. No exemplo de hoje, falamos sobre lama, mas os derramamentos de óleo são uma história completamente diferente. Eles podem ser ainda mais nocivos, permanecendo por muito mais tempo e causando danos maiores à vida marinha. O óleo não apenas suja a água, ele cobre tudo, desde peixes até aves, tornando difícil para os ecossistemas se recuperar.",
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
                    title: "Preso em um Mistério de Lama",
                    lat: 43.671677,
                    lng: -83.821499,
                    location: "Baía de Saginaw, Michigan, EUA",
                    image: saginaw_bay,
                    text: "Mudanças anormais estão acontecendo na Baía de Saginaw após uma grande tempestade. As águas estão se deslocando, e as coisas não estão quite certas. Sua missão é explorar a baía, descobrir o que está causando os problemas e ajudar a resolver o desafio antes que seja tarde demais. A Baía de Saginaw é uma grande e rasa área de água localizada no leste do Michigan, próxima ao Lago Huron. É lar de uma variedade de animais incríveis, como peixes, aves e outras formas de vida selvagem. Muitas pessoas vêm aqui para pescar, e as aves adoram visitar as zonas úmidas próximas. Ao longo dos anos, a baía enfrentou vários problemas, incluindo poluição e a perda de habitats importantes para os animais. No entanto, as pessoas estão trabalhando arduamente para protegê-la e mantê-la saudável, para que a baía possa permanecer bonita e cheia de vida por anos!",
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
                                    questionText={"O que chama a sua atenção nessa imagem?"}
                                    options={[
                                        { id: 'a', text: 'A falta de verde vibrante na água', explanation: 'Hmm, realmente parece que essa área está faltando aquele verde brilhante e exuberante que esperaríamos.' },
                                        { id: 'b', text: 'O azul não é muito vibrante', explanation: 'Parece que aquela mancha marrom está estragando o brilho da água! É hora de colocar nossos chapéus de detetive e descobrir o que está por trás disso.' },
                                        { id: 'c', text: 'Os quadrados ao redor da água', explanation: 'Olhe para todos aqueles quadrados pequenos ao redor da baía — são casas, assim como as nossas! Mas o que realmente chama a nossa atenção é aquela grande mancha marrom na água. Vamos investigar e ver o que está acontecendo!' },
                                        { id: 'c', text: 'A mancha', explanation: 'Aquela mancha marrom está definitivamente se destacando — ela está afetando a área com certeza. Vamos descobrir o que está acontecendo!' },
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
                                    questionText={"Será que é a natureza fazendo o seu trabalho, ou você acha que há algo errado com o ambiente? O que você acha?"}
                                    options={[
                                        { id: 'a', text: 'É natural! A Mãe Natureza está apenas mudando a paisagem.', explanation: 'Boa ideia! Pode ser apenas como essa região looks sem todo o fitoplâncton. Mas ei, aquela grande mancha marrom na água é difícil de ignorar! Vamos mergulhar mais fundo e descobrir o que é e que tipo de impacto ela está causando!' },
                                        { id: 'b', text: 'Sim, é um impacto ambiental! Algo está afetando esse local.', explanation: 'Você tem um olho afiado! Aquela mancha marrom definitivamente não está fazendo nada de bom aqui. É hora de arregaçar as mangas e investigar o que está realmente acontecendo!' },
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
                                    questionText={"De onde veio essa mancha marrom?"}
                                    options={[
                                        { id: 'a', text: 'Parece que veio de um rio.', explanation: 'Ao zoomar, podemos avistar um rio escondido à vista! Suas águas têm a mesma tonalidade marrom da terra ao redor. Parece que essa é a fonte, mas o mistério continua — algo fora da imagem pode ter iniciado tudo.' },
                                        { id: 'b', text: 'Ela veio de algum lugar fora da imagem.', explanation: 'Ao zoomar, podemos avistar um rio escondido à vista! Suas águas têm a mesma tonalidade marrom da terra ao redor. Parece que essa é a fonte, mas o mistério continua — algo fora da imagem pode ter iniciado tudo.' },
                                        { id: 'c', text: 'Ela apareceu espontaneamente.', explanation: 'Hmm, a tempestade pode ter agitado mais do que apenas uma brisa! Após dar uma olhada mais de perto, podemos avistar um rio se esgueirando. Suas águas estão tão marrom que se misturam perfeitamente com a terra, parece que é de lá que vem a mancha marrom!' },
                                        { id: 'd', text: 'Muitas pessoas nadando agitaram o sedimento do fundo da água.', explanation: 'Hmm, a tempestade pode ter agitado mais do que apenas uma brisa! Após dar uma olhada mais de perto, podemos avistar um rio se esgueirando. Suas águas estão tão marrom que se misturam perfeitamente com a terra, parece que é de lá que vem a mancha marrom!' },
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
                                    questionText={"Parece que aquelas chuvas intensas trouxeram mais do que apenas uma tempestade. Alguns reservatórios de água não conseguiram lidar com a situação, e agora uma grande quantidade de lama encontrou seu caminho para o rio e para a baía. O que você acha que isso pode significar para as criaturas que vivem aqui?"}
                                    options={[
                                        { id: 'a', text: "Não teve nehum impacto, é só lama!", explanation: "Um pouco de lama não é grande coisa, mas estamos falando de uma grande quantidade de lama aqui! Imagine a maior piscina de natação que você já viu cheia até a borda de lama, e agora imagine isso multiplicado por 100. Isso é uma quantidade enorme de lama, e pode realmente mexer com as coisas." },
                                        { id: 'b', text: 'Muitos peixes e algas devem ter morrido.', explanation: "Você está certo, essa quantidade de lama é terrível!" },
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
                                        <h2>Fluxos de lama</h2>
                                        <h4>Esse mapa mostra a reflexão da luz na água! Partículas maiores, como a lama, podem afetá-la significativamente, e isso pode ser a razão por trás dos padrões que observamos no mapa! </h4>
                                    </div>
                                    <div className="image-container">
                                        <img src={mud_spill_rebuilding}></img>
                                    </div>
                                    <div className="text">
                                        <p>Quando toda essa lama entra na água, ela perturba o ecossistema. A água fica turva, tornando difícil para a luz solar alcançar o fundo. Sem luz solar suficiente, as plantas e algas que precisam dela para energia não conseguem fazer seu trabalho e, eventualmente, começam a morrer. Essas algas são super importantes porque estão na base da cadeia alimentar, alimentando peixes, crustáceos e muitas outras criaturas.
                                        Mas isso não é tudo. Toda essa lama também traz uma grande quantidade de matéria orgânica com ela. À medida que essa matéria se decompõe, ela consome o oxigênio da água. Isso pode causar hipoxia, que é uma forma elegante de dizer que não há oxigênio suficiente para os peixes e outros animais respirarem. Sem oxigênio, muitos deles podem não sobreviver. Então, essa grande bagunça lamacenta pode desequilibrar todo o balanço da baía, tornando difícil para as criaturas que a chamam de lar.
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
                                    questionText={"Como podemos resolver esse problema?"}
                                    options={[
                                        { id: 'a', text: "Não há nada a ser feito.", explanation: "Vamos, não seja tão pessimista! Sempre há algo que podemos fazer! Vamos voltar e pensar de novo." },
                                        { id: 'b', text: 'Parar a lama', explanation: "Parar a lama completamente é uma tarefa difícil e bastante custosa também. O verdadeiro truque é se concentrar em garantir que isso não aconteça novamente no futuro." },
                                        { id: 'c', text: 'Inventar um método que ainda não existe', explanation: "Adoro sua criatividade! Novas ideias são sempre bem-vindas, e quem sabe o que descobriremos no futuro. No entanto, por enquanto, precisamos tomar medidas para evitar que o problema piore e, claro, prevenir que isso aconteça novamente." },
                                        { id: 'd', text: 'Tomar medidas para evitar que isso aconteça novamente.', explanation: "Exatamente! Medidas preventivas são o caminho a seguir se queremos evitar que isso se torne um problema recorrente." },
                                        { id: 'e', text: 'Adote medidas paliativas (medidas para reduzir os danos que não podemos prevenir).', explanation: "Medidas paliativas são certamente úteis. Seja através de barreiras temporárias ou outras estratégias, elas podem proporcionar algum alívio a curto prazo." },
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
                                            title: "A Baía de Saginaw é uma área bela, mas ela pode precisar de um pouco de ajuda!",
                                            text: "Nós, humanos, impactamos o mundo ao nosso redor. Olhe ao redor do seu próprio ambiente, como você acha que o está mudando? Como você acha que pode ajudar o mundo ao seu redor, incluindo os humanos, a terra e os oceanos?",
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
                                    onArrival={() => console.log('Fase final alcançada!')}
                                    briefing={{
                                        title: "Preso em um Mistério de Lama",
                                        location: "Baía de Saginaw, Michigan, EUA",
                                        image: saginaw_bay,
                                        report: "Ótimo! Graças à sua ajuda, descobrimos o que está acontecendo na Baía de Saginaw com toda essa lama e começamos a pensar em maneiras inteligentes para resolver o problema!",
                                        reportAll: "Nós vimos como é muito mais inteligente agir antes que um problema surja, mas quando as coisas dão errado, não podemos simplesmente sentar e esperar. No exemplo de hoje, falamos sobre lama, mas os derramamentos de óleo são uma história completamente diferente. Eles podem ser ainda mais nocivos, permanecendo por muito mais tempo e causando danos maiores à vida marinha. O óleo não apenas turva a água, mas também cobre tudo, desde peixes até aves, tornando difícil para os ecossistemas se recuperar. A coisa legal sobre o uso de imagens é que elas não apenas mostram o que está acontecendo, mas também nos dão pistas sobre o que pode acontecer em seguida. Elas ajudam a rastrear onde a lama, o óleo ou qualquer outra sujeira está indo. Com essa informação, podemos determinar quais áreas podem estar em perigo e implementar medidas protetivas, como bloquear o derramamento, estabelecer barreiras ou enviar equipes de limpeza para o local correto. Essas imagens são como mapas do tesouro, mostrando-nos o melhor caminho a seguir. E mesmo após a limpeza inicial, podemos continuar monitorando como a natureza está se recuperando e garantir que ela retorne à sua força total. Imagens de satélite e outras ferramentas nos permitem monitorar como a natureza está se recuperando e garantir que ela volte à sua força total. Ao agir cedo, responder rapidamente e usar a tecnologia para guiar nossas ações, podemos ajudar a proteger nossas baías, rios e oceanos das ameaças que ameaçam o ecossistema.",
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
                    title: "Nascentes Ocultas, Segredos Ocultos",
                    lat: 24.772691,
                    lng: 57.524873,
                    location: "Oman",
                    image: oman_picture,
                    text: "A água está repleta de diversas espécies de fitoplâncton, e atualmente, a principal maneira de distingui-las é coletando amostras de água — pense em algo demorado e caro! Mas e se pudéssemos usar imagens para distingui-las em vez disso, e talvez até descobrir mais? Omã, localizado na ponta sudeste da Península Arábica, é um país de paisagens deslumbrantes e clima quente. Sua costa ostenta águas cristalinas que são lar de uma rica biodiversidade marinha, incluindo tartarugas e golfinhos. A proliferação de fitoplâncton nas águas costeiras desempenha um papel crucial neste ecossistema, servindo como a base da cadeia alimentar e contribuindo para a saúde dos oceanos. Essa conexão entre a natureza e a cultura destaca como Omã é um destino fascinante.",
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
                                    questionText={"Omã é um lugar incrível, repleto de todas as formas de vida e beleza! Dê uma olhada na imagem, consegue identificar isso?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "Não",
                                            explanation: "Dê uma olhada mais de perto em todo aquele verde! Você pode identificar diferentes tonalidades, desde um verde escuro e profundo até um verde claro e brilhante. Essas cores podem estar nos mostrando uma variedade de espécies de fitoplâncton que vivem nesta área."
                                        },
                                        {
                                            id: 'b',
                                            text: 'Sim',
                                            explanation: "Você acertou! Aquelas diferentes tonalidades de verde, desde a mais escura até a mais clara, provavelmente indicam uma variedade de espécies de fitoplâncton presentes nesta região."
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
                                    questionText={"Este mapa nos ajuda a ver a presença de fitoplâncton nos oceanos! Podemos obter esses dados porque eles contêm pigmentos como a clorofila que absorvem luz em comprimentos de onda específicos. Olhe para a escala e explore o oceano ao redor de Omã um pouco e procure por eles! O fitoplâncton observado afeta outras espécies de animais?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "Não",
                                            explanation: "Olhe de volta para o que vimos! O fitoplâncton é super importante; ele é a base da cadeia alimentar e ajuda a manter os níveis de oxigênio do planeta em equilíbrio."
                                        },
                                        {
                                            id: 'b',
                                            text: 'Sim',
                                            explanation: "Você está absolutamente certo! O fitoplâncton desempenha um papel fundamental na cadeia alimentar e é essencial para manter os níveis de oxigênio do planeta."
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
                                        <h2>Fitoplâncton</h2>
                                        <h4>Aqui estão alguns fatos rápidos sobre!</h4>
                                    </div>
                                    <div className="image-container">
                                        <img src={phytoplankton}></img>
                                    </div>
                                    <div className="text">
                                        <p>A cadeia alimentar é um pouco como o jantar da natureza! Tudo gira em torno de quem come e quem é comido, com a energia passando ao longo da linha. Começa com os cozinheiros — plantas e o pequeno fitoplâncton — que preparam energia a partir da luz solar. Em seguida, pequenos bichinhos como o zooplâncton vêm para uma mordida. Depois disso, peixes pequenos se alimentam desses bichinhos, e peixes maiores vêm para mastigar os menores. Isso continua até chegarmos aos principais comensais do oceano, como tubarões ou baleias! Os fitoplânctons são os pequenos heróis na base dessa festa. Sem eles, ninguém mais consegue se alimentar, e toda a cadeia poderia desmoronar. Portanto, eles são super importantes para manter a cadeia alimentar funcionando suavemente!
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
                                    questionText={"O que você acha que poderia acontecer se os números de fitoplâncton começarem a diminuir?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "O fitoplâncton se transformará em algas marinhas.",
                                            explanation: "Não, não é assim que funciona! O fitoplâncton é minúsculo e diferente das algas marinhas, e eles não podem se transformar simplesmente."
                                        },
                                        {
                                            id: 'b',
                                            text: 'Os oceanos secarão.',
                                            explanation: "Não, os oceanos podem esquentar, mas não vão desaparecer!"
                                        },
                                        {
                                            id: 'c',
                                            text: 'O fitoplâncton irá se mudar para viver em terra.',
                                            explanation: "De jeito nenhum! Esses pequenos são habitantes do oceano — eles não podem embalar as coisas e se mudar para a terra como as plantas."
                                        },
                                        {
                                            id: 'd',
                                            text: 'Os peixes começarão a produzir seu próprio alimento.',
                                            explanation: "Não, os peixes não podem de repente se tornar cozinheiros — eles dependem do que está na cadeia alimentar!"
                                        },
                                        {
                                            id: 'e',
                                            text: 'Menos alimento para a vida marinha.',
                                            explanation: "Sim, se o fitoplâncton diminuir, as criaturas marinhas que dependem dele podem passar fome."
                                        },
                                        {
                                            id: 'f',
                                            text: 'Impacto nos níveis de oxigênio',
                                            explanation: "Correto! O fitoplâncton ajuda a produzir oxigênio, então ter menos deles poderia afetar o ar que respiramos."
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
                                    questionText={"Como uma imagem como essa pode nos ajudar a proteger a natureza e entender o que está acontecendo?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "Uma imagem nos mostra onde a natureza pode estar em apuros!",
                                            explanation: "Exatamente! Podemos ver mudanças nos paisagens, identificar espécies ameaçadas e acompanhar a saúde dos ecossistemas."
                                        },
                                        {
                                            id: 'b',
                                            text: 'Isso nos ajuda a encontrar padrões!',
                                            explanation: "Absolutamente! Ao analisar imagens ao longo do tempo, podemos identificar mudanças como florestas encolhendo ou menos animais, nos dando pistas sobre o que precisa ser protegido."
                                        },
                                        {
                                            id: 'c',
                                            text: 'Imagens nos permitem ver sem perturbar!',
                                        },
                                        {
                                            id: 'd',
                                            text: 'They spread the word!',
                                            explanation: "Exatamente! Uma imagem poderosa pode inspirar os outros a se importar com a natureza e tomar ações para protegê-la."
                                        },
                                        {
                                            id: 'e',
                                            text: 'É como um mapa para a conservação!',
                                            explanation: "Correto! As imagens ajudam cientistas e conservacionistas a saber onde concentrar seus esforços para salvar a biodiversidade."
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
                                        title: "Nascentes Ocultas, Segredos Ocultos",
                                        location: "Omã",
                                        image: oman_picture,
                                        report: "Uau! Nós conseguimos! Descobrimos como distinguir o fitoplâncton e fomos ainda mais longe, conversando sobre quão importante ele é. Além disso, exploramos como a sua desaparição poderia impactar não apenas a região, mas o planeta inteiro! Que aventura!",
                                        reportAll: "Nós vimos como é muito mais inteligente agir antes que um problema surja, mas quando as coisas dão errado, não podemos simplesmente sentar e esperar. No exemplo de hoje, falamos sobre lama, mas os derramamentos de óleo são uma história completamente diferente. Eles podem ser ainda mais nocivos, permanecendo por muito mais tempo e causando danos maiores à vida marinha. O óleo não apenas turva a água, mas também cobre tudo, desde peixes até aves, tornando difícil para os ecossistemas se recuperar. A coisa legal sobre o uso de imagens é que elas não apenas mostram o que está acontecendo, mas também nos dão pistas sobre o que pode acontecer em seguida. Elas ajudam a rastrear onde a lama, o óleo ou qualquer outra sujeira está indo. Com essa informação, podemos determinar quais áreas podem estar em perigo e implementar medidas protetivas, como bloquear o derramamento, estabelecer barreiras ou enviar equipes de limpeza para o local correto. Essas imagens são como mapas do tesouro, mostrando-nos o melhor caminho a seguir. E mesmo após a limpeza inicial, podemos continuar monitorando como a natureza está se recuperando e garantir que ela retorne à sua força total. Imagens de satélite e outras ferramentas nos permitem monitorar como a natureza está se recuperando e garantir que ela volte à sua força total. Ao agir cedo, responder rapidamente e usar a tecnologia para guiar nossas ações, podemos ajudar a proteger nossas baías, rios e oceanos das ameaças que ameaçam o ecossistema."
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
                    location: "Mauritânia",
                    image: mauritania,
                    text: "Sua missão, se você escolher aceitá-la, é mergulhar no mundo dos aerossóis e descobrir como essas pequenas partículas aerotransportadas impactam a poderosa população de fitoplâncton. Os aerossóis estão ajudando o fitoplâncton a prosperar ou causando desafios para seu crescimento? É hora de descobrir! A Mauritânia é um país grande, principalmente desértico, localizado no noroeste da África, limitado pelo Oceano Atlântico a oeste. Seus vastos paisagens variam de dunas de areia a planaltos rochosos e planícies costeiras. Grande parte da Mauritânia é dominada pelo Deserto do Saara, tornando-a uma das nações mais áridas do mundo, com vegetação escassa e um clima severo. As águas costeiras da Mauritânia, particularmente ao longo da Corrente das Canárias, são renomadas por um fenômeno natural chamado ressurgência, onde águas ricas em nutrientes das profundezas do oceano sobem à superfície. Esse processo desencadeia a floração da Mauritânia, uma explosão de algas microscópicas, ou fitoplâncton, que sustenta um rico ecossistema marinho. A floração da Mauritânia desempenha um papel vital na manutenção de uma das zonas de pesca mais produtivas do mundo. Peixes como sardinha, cavala e outras espécies prosperam nessas águas ricas em nutrientes, contribuindo significativamente para a subsistência das comunidades locais e impulsionando a indústria pesqueira do país. As águas costeiras da Mauritânia se tornam um ponto quente de vida marinha durante a temporada de floração, atraindo pescadores e aves.",
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
                                    questionText={"O que você percebeu de diferente nessa imagem?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "O verde que mostra o fitoplâncton parece diferente.",
                                            explanation: "Sim, o fitoplâncton parece estar formando um padrão interessante."
                                        },
                                        {
                                            id: 'b',
                                            text: "Eu percebo as ondas.",
                                            explanation: "Na verdade, não são as ondas que noto, mas o próprio fitoplâncton formando um padrão semelhante a ondas."
                                        },
                                        {
                                            id: 'c',
                                            text: "Também percebo um deserto.",
                                            explanation: "O deserto pode ser significativo para nossa análise! Além disso, o fitoplâncton parece estar criando um padrão único que pode valer a pena explorar mais a fundo."
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
                                    questionText={"Vamos colocar nossos chapéus de cientistas e criar algumas hipóteses divertidas sobre o que está acontecendo aqui:"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "O vento está soprando o fitoplâncton, espalhando-o pela água como confete.",
                                            explanation: "Não exatamente! O vento não está dando um impulso ao fitoplâncton, mas está desempenhando um papel importante empurrando as águas superficiais para o oeste e permitindo que águas ricas em nutrientes subam da profundidade do oceano. Além disso, o vento pode carregar poeira do deserto do Saara, que está cheia de ferro e outros nutrientes que ajudam o fitoplâncton a crescer. É ali que o fitoplâncton encontra sua festa!"
                                        },
                                        {
                                            id: 'b',
                                            text: "O vento está carregando nutrientes importantes para a superfície que o fitoplâncton precisa para crescer grande e forte.",
                                            explanation: "Você está no caminho certo! O vento desempenha um papel importante empurrando as águas superficiais para o oeste e permitindo que águas ricas em nutrientes subam da profundidade do oceano. Além disso, o vento pode carregar poeira do deserto do Saara, que está cheia de ferro e outros nutrientes que ajudam o fitoplâncton a crescer."
                                        },
                                        {
                                            id: 'c',
                                            text: "O deserto está repleto de nutrientes, e sua poeira está caindo na água, ajudando o ecossistema a prosperar.",
                                            explanation: "Você entendeu! O deserto do Saara é como um grande jarro de poeira rica em nutrientes, cheia de ferro. Quando os ventos carregam essa poeira sobre o oceano, ela cai na água e dá um impulso extra ao fitoplâncton, ajudando a manter todo o ecossistema saudável. E o vento também desempenha um papel importante, empurrando as águas superficiais para o oeste e permitindo que águas ricas em nutrientes subam da profundidade do oceano."
                                        },
                                        {
                                            id: 'd',
                                            text: "O fitoplâncton simplesmente adora ficar por perto – é o seu local favorito!",
                                            explanation: "Bem, não é exatamente uma escolha deles viver lá, mas eles realmente prosperam porque as condições são perfeitas! Graças às águas ricas em nutrientes que são trazidas à superfície e a uma pitada de poeira do deserto, é o local ideal para eles florescerem o ano todo."
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
                                        <h2>Fitoplâncton</h2>
                                        <h4>Aqui estão alguns fatos rápidos sobre o fitoplâncton:</h4>
                                    </div>
                                    <div className="image-container">
                                        <img src={phytoplankton}></img>
                                    </div>
                                    <div className="text">
                                        <p>A cadeia alimentar é um pouco como um jantar da natureza! Tudo gira em torno de quem come e quem é comido, com a energia passando ao longo da linha. Começa com os cozinheiros — plantas e o pequeno fitoplâncton — que preparam energia a partir da luz solar. Em seguida, pequenos critérios como o zooplâncton vêm para uma mordida. Depois disso, peixes pequenos se alimentam desses critérios, e peixes maiores vêm para mastigar os menores. Isso continua até chegarmos aos principais comensais do oceano, como tubarões ou baleias! Os fitoplânctons são os pequenos heróis na base dessa festa. Sem eles, ninguém mais consegue se alimentar, e toda a cadeia poderia desmoronar. Portanto, eles são super importantes para manter a cadeia alimentar funcionando suavemente!
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
                                    questionText={"Então, o deserto e o vento estão conectados, ajudando o fitoplâncton a crescer. O que você acha disso?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "É chato!",
                                            explanation: "Oh não, está longe de ser chato! É como o próprio quebra-cabeça da natureza, com cada peça se encaixando perfeitamente. O vento, o deserto, o oceano, tudo desempenha um papel na ajuda dessas algas oceânicas microscópicas a florescer. É como uma missão de trabalho em equipe secreta acontecendo ao nosso redor! Muitas coisas na natureza estão conectadas e entender e resolver um problema pode nos ajudar a resolver outro, e entender e modelar ainda mais o mundo."
                                        },
                                        {
                                            id: 'b',
                                            text: "A natureza não é um sistema isolado.",
                                            explanation: "Exatamente! A natureza é toda sobre conexões. O deserto e o oceano podem parecer muito distantes, mas são realmente bons amigos. O vento carrega a poeira rica em nutrientes do deserto sobre o oceano, e isso ajuda o fitoplâncton a crescer. É um belo exemplo de como tudo na natureza está ligado de maneiras surpreendentes! Muitas coisas na natureza estão conectadas e entender e resolver um problema pode nos ajudar a resolver outro, e entender e modelar ainda mais o mundo."
                                        },
                                        {
                                            id: 'c',
                                            text: "É como se o deserto estivesse enviando um pacote de cuidados para o oceano!",
                                            explanation: "Exatamente! A natureza é toda sobre conexões. O deserto e o oceano podem parecer muito distantes, mas são realmente bons amigos. O vento carrega a poeira rica em nutrientes do deserto sobre o oceano, e isso ajuda o fitoplâncton a crescer. É um belo exemplo de como tudo na natureza está ligado de maneiras surpreendentes! Muitas coisas na natureza estão conectadas e entender e resolver um problema pode nos ajudar a resolver outro, e entender e modelar ainda mais o mundo."
                                        },
                                        {
                                            id: 'd',
                                            text: "Uau, a natureza é como um grande esporte em equipe!",
                                            explanation: "Exatamente! A natureza é toda sobre conexões. O deserto e o oceano podem parecer muito distantes, mas são realmente bons amigos. O vento carrega a poeira rica em nutrientes do deserto sobre o oceano, e isso ajuda o fitoplâncton a crescer. É um belo exemplo de como tudo na natureza está ligado de maneiras surpreendentes! Muitas coisas na natureza estão conectadas e entender e resolver um problema pode nos ajudar a resolver outro, e entender e modelar ainda mais o mundo."
                                        },
                                        {
                                            id: 'e',
                                            text: "Então o vento é como um serviço de entrega!",
                                            explanation: "Exatamente! A natureza é toda sobre conexões. O deserto e o oceano podem parecer muito distantes, mas são realmente bons amigos. O vento carrega a poeira rica em nutrientes do deserto sobre o oceano, e isso ajuda o fitoplâncton a crescer. É um belo exemplo de como tudo na natureza está ligado de maneiras surpreendentes! Muitas coisas na natureza estão conectadas e entender e resolver um problema pode nos ajudar a resolver outro, e entender e modelar ainda mais o mundo."
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
                                    questionText={"A poeira do Saara é considerada um aerossol, o que é isso?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "É como um tipo de desodorante.",
                                            explanation: "Quase! Assim como o spray de desodorante, um aerossol é composto por partículas minúsculas que flutuam no ar. Mas, em vez de deixar você cheirando fresco, os aerossóis podem vir de coisas como borrifos do mar, fumaça ou até mesmo cinzas vulcânicas.."
                                        },
                                        {
                                            id: 'b',
                                            text: "São partículas minúsculas no ar.",
                                            explanation: "Exatamente! Os aerossóis são partículas muito pequenas, sólidas ou líquidas, que permanecem suspensas no ar. Eles podem ser naturais, como de um vulcão, ou produzidos pelo homem, como da poluição."
                                        },
                                        {
                                            id: 'c',
                                            text: "É como glitter no céu.",
                                            explanation: "Exatamente! Os aerossóis são partículas minúsculas, quase como glitter invisível flutuando pelo ar. Eles são leves o suficiente para permanecer suspensos e podem ter todo tipo de efeitos, desde influenciar o clima até espalhar nutrientes ou poluição."
                                        },
                                        {
                                            id: 'd',
                                            text: "É a maneira da natureza de espalhar coisas ao redor.",
                                            explanation: "Você entendeu! Os aerossóis são partículas minúsculas no ar, uma das ferramentas da natureza para mover materiais. Seja poeira, gotículas de água ou até mesmo pólen, os aerossóis podem viajar longas distâncias no ar."
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
                                    questionText={"Os aerosóis também podem afetar outras coisas, você sabe o que?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "Tempo e clima.",
                                            explanation: "Aerosols can influence weather patterns and the climate by interacting with sunlight. Some aerosols reflect sunlight back into space, cooling the Earth, while others absorb heat, warming the atmosphere."
                                        },
                                        {
                                            id: 'b',
                                            text: "Formação de nuvens",
                                            explanation: "Os aerossóis desempenham um papel importante na formação de nuvens. Partículas de aerossóis minúsculas podem atuar como 'sementes' para que gotículas de água se formem ao redor delas, ajudando no desenvolvimento das nuvens e afetando a chuva."
                                        },
                                        {
                                            id: 'c',
                                            text: "Qualidade do ar.",
                                            explanation: "Os aerossóis podem afetar a qualidade do ar que respiramos. Os aerossóis naturais, como o sal marinho, são geralmente inofensivos, mas os aerossóis produzidos pelo homem, como fumaça e poluição industrial, podem causar problemas de saúde, especialmente para pessoas com problemas respiratórios."
                                        },
                                        {
                                            id: 'd',
                                            text: "Saúde humana",
                                            explanation: "Alguns aerossóis, especialmente aqueles provenientes da poluição, podem ser prejudiciais se inalados. Partículas como fuligem ou substâncias químicas no ar podem irritar os pulmões, levando a problemas respiratórios ou efeitos de saúde a longo prazo.."
                                        },
                                        {
                                            id: 'e',
                                            text: "Visibilidade",
                                            explanation: "Os aerossóis podem afetar a clareza do ar. Altas concentrações de aerossóis, como fumaça ou neblina, podem dificultar a visibilidade, reduzindo a capacidade de enxergar."
                                        },
                                        {
                                            id: 'f',
                                            text: "Ecossistemas oceânicos",
                                            explanation: "Quando certos aerossóis, como aqueles que contêm ferro, caem no oceano, eles podem fornecer nutrientes para a vida marinha, especialmente para organismos minúsculos como o fitoplâncton."
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
                                        title: "Pequenos Viajantes com Grandes Efeitos!",
                                        location: "Mauritania",
                                        image: mauritania,
                                        report: "",
                                        reportAll: "Nós vimos como é muito mais inteligente agir antes que um problema surja, mas quando as coisas dão errado, não podemos simplesmente sentar e esperar. No exemplo de hoje, falamos sobre lama, mas os derramamentos de óleo são uma história completamente diferente. Eles podem ser ainda mais nocivos, permanecendo por muito mais tempo e causando danos maiores à vida marinha. O óleo não apenas turva a água, mas também cobre tudo, desde peixes até aves, tornando difícil para os ecossistemas se recuperar. A coisa legal sobre o uso de imagens é que elas não apenas mostram o que está acontecendo, mas também nos dão pistas sobre o que pode acontecer em seguida. Elas ajudam a rastrear onde a lama, o óleo ou qualquer outra sujeira está indo. Com essa informação, podemos determinar quais áreas podem estar em perigo e implementar medidas protetivas, como bloquear o derramamento, estabelecer barreiras ou enviar equipes de limpeza para o local correto. Essas imagens são como mapas do tesouro, mostrando-nos o melhor caminho a seguir. E mesmo após a limpeza inicial, podemos continuar monitorando como a natureza está se recuperando e garantir que ela retorne à sua força total. Imagens de satélite e outras ferramentas nos permitem monitorar como a natureza está se recuperando e garantir que ela volte à sua força total. Ao agir cedo, responder rapidamente e usar a tecnologia para guiar nossas ações, podemos ajudar a proteger nossas baías, rios e oceanos das ameaças que ameaçam o ecossistema."
                                    }}
                                    badge={{
                                        name: "Pequenos Viajantes com Grandes Efeitos!",
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
