import title from "../assets/imgs/Title.png"
import img1 from "../assets/imgs/nene1.jpeg"
import musica from "../assets/msc.mp3"
import { useRef, useState, useEffect } from "react"
import Heartanim from "../Animations/Heartanim";
import img2 from "../assets/imgs/nene6.jpeg";
import img3 from "../assets/imgs/nene3.jpeg";
import img4 from "../assets/imgs/nene4.jpeg";
import img5 from "../assets/imgs/nene8.jpeg";
import img7 from "../assets/imgs/nene7.jpeg";

export default function Mainpage(){
    
    const audioRef = useRef(null);
    const[isPlay, setIsPlay] = useState(false);

    function play(){
        if(!audioRef.current) return;

        if(audioRef.current.paused){
            audioRef.current.play();
            setIsPlay(true);
        }
        else{
            audioRef.current.pause();
            setIsPlay(false);
        }
    }

    const images = [img2, img3, img4, img5, img7];
    const [imgMom, setImgMom] = useState(images[0]);

    useEffect(()=>{
        let c = 0;
        const interval = setInterval(()=>{
            setImgMom(images[c])
            if(c==images.length - 1){
                c = 0;
            }
            else{
                c++;
            }
        }, 4000)

        return () => clearInterval(interval);
    }, [])
    
    return(
        <div className="bg-first w-full h-full flex flex-col items-center overflow-hidden">
            <div>
                <img src={title} className="w-[250px] h-[200px] "/>
            </div>
            <div onClick={play}
            className="w-[100px] h-[50px] flex flex-col font-color-terc items-center bg-terc p-3 rounded-[30px]">
                {isPlay ? "Pause" : "Play"}

            </div>
            <audio ref={audioRef} src={musica} loop={true}/>
            <nav >
                <ul className="mt-[30px] flex items-center flex-row lg:gap-7 gap-3">
                    <li> <a className="hover:bg-pink-300 hover:text-white transition-all duration-300 ease-in-out p-3 rounded-[10px]" href="#sobre">Sobre nós</a></li>
                    <li> <a className="hover:bg-pink-300 hover:text-white transition-all duration-300 ease-in-out p-3 rounded-[10px]" href="#moments">Nossos momentos</a></li>
                    <li> <a className="hover:bg-pink-300 hover:text-white transition-all duration-300 ease-in-out p-3 rounded-[10px]" href="#verc">Versículo</a></li>
                </ul>
            </nav>

            <section id="sobre" className=" mt-[50px] lg:mt-[100px]">
                <div className="animate-fade lg:w-[900px] w-[310px] h-[750px] bg-sec rounded-[30px] flex flex-col items-center lg:p-5 p-3">
                    <img src={img1} className="w-full h-[170px] lg:h-[390px] rounded-[20px]"/>
                    <h2 className="mt-7 w-[90%] lg:text-[20px] text-[14px] text-center font-inter font-color-terc">
                        Nós, André e Taciane, temos uma história além do convencional. Somos um casal que se conheceu pela internet e, desde o primeiro dia de contato, tivemos certeza da paixão um pelo outro. Ja divemos sim algumas divergências por nossa história, porém nada que o nosso imparável e eterno amor pudesse passar. Somos um casal muito respeituoso e muito afetivo, além de sermos apaixonados por Supernatural kkkk. Além disso, gostammos muito de academia e comer doritos com uma coquinha gelada. Em dias ensolarados, adoramos curtir uma piscina e ouvir um MPB para esquecermos da vida lá fora. Pode ser que, em nossas vidas particulares, tenhamos um milhão de perrengues e desafios, porém nunca soltamos a mão do outro, pois é isso que nos fortalece e nos faz lembrar de que em nada na vida estamos faznedo sozinhos.
                    </h2>
                </div>
            </section>

            <Heartanim ClassName={' w-[200px]'}/>
            <section id="moments" className=" lg:mt-10 lg:w-[500px] w-[270px] flex justify-center" >
                <img src={imgMom} key={imgMom} className="animate-fade-left rounded-[30px]" />
            </section>

            <section id="verc">
                <div className="bg-sec mt-[30px] lg:w-[800px] p-4 rounded-[30px] flex flex-col items-center m-5">
                    <h1 className="font-rowdies font-color-sec  lg:text-[30px]">Um versículo...</h1>
                    <h1 className="font-rowdies font-color-sec  lg:text-[30px]">1 Coríntios 13 4-7</h1>
                    <h2 className="text-center font-color-terc lg:text-[30px]">"1 O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha."
                        <br/>"2 Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor."
                        <br/>"3 O amor não se alegra com insjustiça, mas se alegra com a verdade."
                        <br/>"4 Tudo sofre, tudo crê, tudo espera, tudo suporta."
                    </h2>
                </div>
            </section>

        </div>
    )
}