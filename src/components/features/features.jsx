import "./_features.css";
import { Link } from "react-router-dom"
import Reaction from '../../assets/picture/features/reaction.svg';
import Reaction2 from '../../assets/picture/features/reaction2.svg';
import Sheesh from '../../assets/picture/features/sheesh.svg';
import Moderation from '../../assets/picture/features/moderation.svg';
import Rename from '../../assets/picture/features/rename.svg';
import Musique from '../../assets/picture/features/musique.svg';
import Playlist from '../../assets/picture/features/playlist.svg';
import Radio from '../../assets/picture/features/radio.svg';
import Level from '../../assets/picture/features/level.svg';
import Rank from '../../assets/picture/features/rank.svg';
import AnimationImage from "../animationimage/animationimage";
import join from '../../assets/picture/features/JoinChannel.svg';
import twitch1 from '../../assets/picture/features/twitch1.svg';
import twitch2 from '../../assets/picture/features/twitch2.svg';
import tempoVocaux from '../../assets/picture/features/tempoVocaux.svg';

import chifumi from '../../assets/picture/features/chifumi.svg';
import morpion from '../../assets/picture/features/morpion.svg';
import puissance4 from '../../assets/picture/features/puissance4.svg';


export const Features = () => {
    return (
        <div className="features">
            <div className="features__content">
                <div className="feature active">
                    <AnimationImage img={ [morpion,chifumi,puissance4] }/>
                    <div className="content">
                        <div className="title">
                            <h3>Pleins de jeux</h3> 
                            {/* <a href="/commandes#configCommande"> */}
                                <Link to="/commandes#configCommande">
                                    <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="show-commands">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.02431 0.524414H0V7.52441H7.02431V0.524414ZM35.9998 0.524414H10.5366V7.52441H35.9998V0.524414ZM0 11.0244H7.02431V18.0244H0V11.0244ZM35.9998 11.0244H10.5366V18.0244H35.9998V11.0244ZM0 21.5244H7.02431V28.5244H0V21.5244ZM35.9998 21.5244H10.5366V28.5244H35.9998V21.5244Z" fill="var(--color-principal)"></path>
                                    </svg>
                                </Link>
                            {/* </a> */}
                        </div> 
                        <p>Tu veux affronter tes amis, tu as donc ?? ta disposition plusieurs jeux: le morpion, puissance4, chifumi, le motus, et bient??t d'autres ????</p>
                    </div>
                </div>

                <div className="feature active">
                    <div className="content">
                        <div className="title">
                            <h3>Niveaux et points d'XP</h3> 
                            {/* <a href="/commandes#levelCommande"> */}
                            <Link to="/commandes#levelCommande">
                            <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="show-commands">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.02431 0.524414H0V7.52441H7.02431V0.524414ZM35.9998 0.524414H10.5366V7.52441H35.9998V0.524414ZM0 11.0244H7.02431V18.0244H0V11.0244ZM35.9998 11.0244H10.5366V18.0244H35.9998V11.0244ZM0 21.5244H7.02431V28.5244H0V21.5244ZM35.9998 21.5244H10.5366V28.5244H35.9998V21.5244Z" fill="var(--color-principal)"></path>
                            </svg>
                            </Link>
                                {/* </a> */}
                        </div> 
                        <p>Laissez vos membres se d??marquer sur votre serveur gr??ce au syst??me de Leveling.<br/>Vous pourrez afficher le classement.</p>
                    </div>
                    <AnimationImage img={ [Level,Rank] }/>
                </div>
                <div className="feature active">
                    <AnimationImage img={ [Musique,Radio,Playlist] }/>
                    <div className="content">
                        <div className="title">
                            <h3>Musique, Playlist, Radio</h3> 
                            {/* <a href="/commandes#musiqueCommande"> */}
                                <Link to="/commandes#musiqueCommande">
                                    <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="show-commands">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.02431 0.524414H0V7.52441H7.02431V0.524414ZM35.9998 0.524414H10.5366V7.52441H35.9998V0.524414ZM0 11.0244H7.02431V18.0244H0V11.0244ZM35.9998 11.0244H10.5366V18.0244H35.9998V11.0244ZM0 21.5244H7.02431V28.5244H0V21.5244ZM35.9998 21.5244H10.5366V28.5244H35.9998V21.5244Z" fill="var(--color-principal)"></path>
                                    </svg>
                                        {/* </a> */}
                                </Link>
                        </div> 
                        <p>Un bot musique acceptant les liens Youtube / Spotify / deezer /soundcloud et fichier externe (.mp3 / .mp4 / .flac / .ogg / .aac / .webm / .wav)<br/>Plus de 40 radios disponibles !!<br/>Cr??er / Modifier / Jouer une playlist.</p>
                    </div>
                </div>
                <div className="feature active">
                    <div className="content">
                        <div className="title">
                            <h3>Mod??ration</h3> 
                            {/* <a href="/commandes#ModerationCommande"> */}
                                <Link to="/commandes#ModerationCommande">
                                    <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="show-commands">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.02431 0.524414H0V7.52441H7.02431V0.524414ZM35.9998 0.524414H10.5366V7.52441H35.9998V0.524414ZM0 11.0244H7.02431V18.0244H0V11.0244ZM35.9998 11.0244H10.5366V18.0244H35.9998V11.0244ZM0 21.5244H7.02431V28.5244H0V21.5244ZM35.9998 21.5244H10.5366V28.5244H35.9998V21.5244Z" fill="var(--color-principal)"></path>
                                    </svg>
                                    {/* </a> */}
                                </Link>
                        </div> 
                        <p>Des logs de qualit??s avec les messages supprim??s / modifi??s, mais aussi les logs de cam et m??me de partage d'??cran<br/>Auto Rename lorsqu'un pseudo contient des caract??res sp??ciaux<br/>Nettoyer le tchat avec efficacit?? avec la commande "clear".</p>
                    </div>
                    <AnimationImage img={ [Moderation,join,Rename] }/>
                </div>
                <div className="feature active">
                    <AnimationImage img={ [twitch1,twitch2] }/>
                    <div className="content">
                        <div className="title">
                            <h3>Twitch vers Discord</h3> 
                            {/* <a href="/commandes#configCommande"> */}
                            <Link to="/commandes#configCommande">
                                <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="show-commands">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.02431 0.524414H0V7.52441H7.02431V0.524414ZM35.9998 0.524414H10.5366V7.52441H35.9998V0.524414ZM0 11.0244H7.02431V18.0244H0V11.0244ZM35.9998 11.0244H10.5366V18.0244H35.9998V11.0244ZM0 21.5244H7.02431V28.5244H0V21.5244ZM35.9998 21.5244H10.5366V28.5244H35.9998V21.5244Z" fill="var(--color-principal)"></path>
                                </svg>
                                {/* </a> */}
                            </Link>
                        </div> 
                        <p>Retranscrire le tchat Twitch d'une chaine sur un channel Discord <br/>Les badges et les liens sont aussi retranscrits sur Discord<br/>Si un message est supprim?? ou si un utilisateur est timeout/ban ces messages seront instantanement supprim??s sur Discord.</p>
                    </div>
                </div>
                <div className="feature active">
                    <div className="content">
                        <div className="title">
                            <h3>Salons temporaires</h3> 
                            {/* <a href="/commandes#tempChannelCommande"> */}
                                <Link to="/commandes#tempChannelCommande">
                                    <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="show-commands">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.02431 0.524414H0V7.52441H7.02431V0.524414ZM35.9998 0.524414H10.5366V7.52441H35.9998V0.524414ZM0 11.0244H7.02431V18.0244H0V11.0244ZM35.9998 11.0244H10.5366V18.0244H35.9998V11.0244ZM0 21.5244H7.02431V28.5244H0V21.5244ZM35.9998 21.5244H10.5366V28.5244H35.9998V21.5244Z" fill="var(--color-principal)"></path>
                                    </svg>
                                </Link>
                            {/* </a> */}
                        </div> 
                        <p>Cr??er des salons temporaires automatiques, avec un nom pr??d??fini et une limite de personne par d??faut.</p>
                    </div>
                    <AnimationImage img={ [tempoVocaux] }/>
                </div>
                <div className="feature active">
                    <AnimationImage img={ [Reaction,Reaction2,Sheesh] }/>
                    <div className="content">
                        <div className="title">
                            <h3>Action R??action</h3> 
                            {/* <a href="/commandes"> */}
                                <Link to="/commandes">
                                    <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="show-commands">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.02431 0.524414H0V7.52441H7.02431V0.524414ZM35.9998 0.524414H10.5366V7.52441H35.9998V0.524414ZM0 11.0244H7.02431V18.0244H0V11.0244ZM35.9998 11.0244H10.5366V18.0244H35.9998V11.0244ZM0 21.5244H7.02431V28.5244H0V21.5244ZM35.9998 21.5244H10.5366V28.5244H35.9998V21.5244Z" fill="var(--color-principal)"></path>
                                    </svg>
                                </Link>
                            {/* </a> */}
                        </div> 
                        <p>Un message de Bonjour / Bonne Nuit et BounsBot r??agit !!!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}