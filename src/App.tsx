import { useState } from "react";

import { TypeAnimation } from "react-type-animation";
import Heart from "react-heart";
import useSound from "use-sound";
import { Fade } from "react-slideshow-image";

import AlyoshaSong from "./assets/songs/Susanne_Sundfor_Alyosha.mp3";
import UndercoverSong from "./assets/songs/Susanne_Sundfor_Undercover.mp3";

import PrimeiroEncontro from "./assets/images/primeiro_encontro.jpg";
import PrimeiroBeijo from "./assets/images/primeiro_beijo.jpg";
import EuVcLucas from "./assets/images/eu_voce_lucas.jpg";
import NosDeitadosNaPorta from "./assets/images/nos_deitados_na_porta.jpeg";
import VoceFofinha from "./assets/images/voce_fofinha.jpg";
import NosBeijando from "./assets/images/nos_beijando.jpg";
import VoceEALala from "./assets/images/voce_e_a_lala.jpeg";
import EuComPreguicaDeAcordar from "./assets/images/eu_com_preguica_de_acordar.jpg";
import NossosBebes from "./assets/images/nossos_bebes.jpg";
import Biquinho from "./assets/images/biquinho.jpg";
import BocaDeCu from "./assets/images/boca_de_cu.jpg";
import Cinema1 from "./assets/images/cinema_1.jpg";
import Cinema2 from "./assets/images/cinema_2.jpg";
import Cinema3 from "./assets/images/cinema_3.jpg";
import DiaDosNamorados1 from "./assets/images/dia_dos_namorados_1.jpg";
import DiaDosNamorados2 from "./assets/images/dia_dos_namorados_2.jpg";
import SushiLaunch1 from "./assets/images/sushi_launch_1.jpg";
import SushiLaunch2 from "./assets/images/sushi_launch_2.jpg";
import SushiLaunch3 from "./assets/images/sushi_launch_3.jpeg";
import aniversario from "./assets/images/aniversario.jpg";
import DiaDoHamburguer1 from "./assets/images/dia_do_hamburguer_1.jpeg";
import DiaDoHamburguer2 from "./assets/images/dia_do_hamburguer_2.jpeg";
import ParceiraDeBatida from "./assets/images/parceira_de_batida.jpg";
import NosDandoLingua from "./assets/images/nos_dando_lingua.jpg";
import NosNaChuva from "./assets/images/nos_na_chuva.jpg";
import VoceMimindo from "./assets/images/voce_mimindo.jpg";
import Abracados from "./assets/images/abracados.jpg";
import Zoiao from "./assets/images/zoiao.jpg";
import Comidinha1 from "./assets/images/comidinha_1.jpg";
import Comidinha2 from "./assets/images/comidinha_2.jpg";
import Comidinha3 from "./assets/images/comidinha_3.jpg";
import Comidinha4 from "./assets/images/comidinha_4.jpg";
import Comidinha5 from "./assets/images/comidinha_5.jpg";
import Comidinha6 from "./assets/images/comidinha_6.jpg";
import Comidinha7 from "./assets/images/comidinha_7.jpg";
import DiaDoXis from "./assets/images/dia_do_xis.jpg";
import FeijaoVermelho from "./assets/images/feijao_vermelho.jpeg";
import OculosNovos from "./assets/images/oculos_novos.jpg";
import OculosNovos2 from "./assets/images/oculos_novos_2.jpg";
import Beijo1 from "./assets/images/beijo_1.jpeg";
import Beijo2 from "./assets/images/beijo_2.jpg";
import Beijo3 from "./assets/images/beijo_3.jpg";
import Beijo4 from "./assets/images/beijo_4.jpg";
import Acai from "./assets/images/acai.jpg";
import Abraco from "./assets/images/abraco.jpg";
import PrimeiroDiaFacul from "./assets/images/1o_dia_facul.jpg";
import BeijoNaBochecha from "./assets/images/beijo_na_bochecha.jpg";
import BeijoNaBochecha2 from "./assets/images/beijo_na_bochecha_2.jpg";
import BeijoNaBochecha3 from "./assets/images/beijo_na_bochecha_3.jpg";
import BeijoNaTesta from "./assets/images/beijo_na_testa.jpeg";
import Biquinho2 from "./assets/images/biquinho_2.jpg";
import OlharApaixonado from "./assets/images/olhar_apaixonado.jpg";
import OlharesMeigos1 from "./assets/images/olhares_meigos.jpg";
import OlharesMeigos2 from "./assets/images/olhares_meigos_2.jpg";
import NossosBebes2 from "./assets/images/nossos_bebes_2.jpg";

import "react-slideshow-image/dist/styles.css";
import styles from "./App.module.scss";

const photoList = shuffle([
    PrimeiroEncontro,
    PrimeiroBeijo,
    EuVcLucas,
    PrimeiroDiaFacul,
    NosDeitadosNaPorta,
    BeijoNaBochecha,
    BeijoNaBochecha2,
    VoceFofinha,
    NosBeijando,
    BeijoNaBochecha3,
    VoceEALala,
    EuComPreguicaDeAcordar,
    NossosBebes,
    NossosBebes2,
    Biquinho,
    BocaDeCu,
    Cinema1,
    Cinema2,
    Cinema3,
    DiaDosNamorados1,
    DiaDosNamorados2,
    OlharesMeigos1,
    OlharesMeigos2,
    SushiLaunch1,
    SushiLaunch2,
    SushiLaunch3,
    aniversario,
    DiaDoHamburguer1,
    DiaDoHamburguer2,
    ParceiraDeBatida,
    NosDandoLingua,
    NosNaChuva,
    VoceMimindo,
    Abracados,
    Beijo4,
    Zoiao,
    FeijaoVermelho,
    Comidinha1,
    Beijo1,
    Beijo3,
    Beijo2,
    Acai,
    Abraco,
    Comidinha2,
    Comidinha3,
    Comidinha4,
    Comidinha5,
    Comidinha6,
    Comidinha7,
    BeijoNaTesta,
    DiaDoXis,
    OculosNovos,
    OculosNovos2,
    Biquinho2,
    OlharApaixonado,
]);

function App() {
    const [playing, setPlaying] = useState(false);
    const [showMarryMe, setShowMarryMe] = useState(false);

    const [playUndercover] = useSound(UndercoverSong, {
        onend: () => setShowMarryMe(true),
    });
    const [playAlyosha] = useSound(AlyoshaSong, {
        onend: () => playUndercover(),
    });

    const handleStart = () => {
        setPlaying(true);
        playAlyosha();
    };

    return (
        <div className={styles.App}>
            <header className={styles.AppHeader}>
                {!showMarryMe && (
                    <div
                        className={styles.AppHeart}
                        onClick={handleStart}
                        data-active={playing}
                    >
                        <Heart
                            isActive={playing}
                            onClick={() => setPlaying((prev) => !prev)}
                            animationScale={1.25}
                        />
                    </div>
                )}
                {showMarryMe ? (
                    <TypeAnimation
                        sequence={[
                            "Eu sei que passamos por maus bocados...",
                            1000,
                            "Que eu não fui a melhor pessoa para você...",
                            1000,
                            "Que você sofreu...",
                            1000,
                            "Que nós aprendemos muito...",
                            1000,
                            "da pior forma",
                            1000,
                            "Que por um tempo éramos só eu e você",
                            1000,
                            "Eu quero substituir tudo isso",
                            1000,
                            "...por amor",
                            1000,
                            "...por carinho",
                            1000,
                            "...por compreensão",
                            1000,
                            "...por paz",
                            1000,
                            "...por alegria",
                            1000,
                            "...por apoio",
                            1000,
                            "O meu sonho só estará completo com você",
                            1000,
                            "Quer casar comigo?",
                            10000,
                        ]}
                        speed={50}
                        repeat={0}
                    />
                ) : (
                    !playing && (
                        <TypeAnimation
                            sequence={["Clique no coração"]}
                            speed={50}
                            repeat={1}
                        />
                    )
                )}

                <div
                    className={`${styles.AppSlider} slide-container`}
                    style={{
                        opacity: playing ? 1 : 0,
                    }}
                >
                    <Fade>
                        {photoList.map((photo) => (
                            <div
                                key={photo}
                                className="each-fade"
                            >
                                <img src={photo} />
                            </div>
                        ))}
                    </Fade>
                </div>
            </header>
        </div>
    );
}

export default App;

function shuffle(array: any[]): any[] {
    let currentIndex = array.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}
