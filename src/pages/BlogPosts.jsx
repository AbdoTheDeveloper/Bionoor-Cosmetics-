import '../style/BlogPosts.css'
import img from '../Ressourses/images/Roses.png'
import RightArrow from '../Ressourses/images/4829869_arrow_next_right_icon.png'
import Star from '../Ressourses/images/285661_star_icon.png'
import Costumers from '../Ressourses/images/costomers.png'
import RoseWater from '../Ressourses/images/eau_de_rose.png'
import HuileDargan from '../Ressourses/images/huile_argan.png'
import Diversité from '../Ressourses/images/diversité.png'
import Tamayuz from '../Ressourses/images/tamyuz.png'
import CouleurRouge from '../Ressourses/images/colorer_les_cheveux_en_rouge.png'
import Hulles_Naturelles from '../Ressourses/images/hulles_naturelles.png'
const BlogPosts = () => {
    return (
        <>
            <nav className='navbar'>
                <h1>Navabar</h1>

            </nav>
            <div className="blogs_list_container">
                <header>
                    <h1>OUR BLOG </h1>
                    <p>Teak a moment to read about some intresting products</p>
                </header>

                <section>
                    <figure>
                        <img src={img} id='Roses' alt="hero_section_image" />
                        {/* <img src={RoseWater} id="rose_water_image" alt="" /> */}
                        <p>LES BIENFAITS DE L’EAU DE ROSE <br />
                            – ROSE WATER – Secret de beauté</p>
                    </figure>


                    <div className="meta_data">
                        <p id='description'>
                            L’eau de rose est utilisée depuis des siècles, elle possède des propriétés hydratantes et apaisantes, ainsi que des pouvoirs
                            antiseptiques, anti-inflammatoires et antibactériens naturels. Si votre budget ne vous permet pas encore de vous offrir
                            un régime de soins de la peau entièrement à base de rose, une simple bouteille d’eau de rose pure […]
                        </p>
                        <div className='read_more'>
                            <a href=""><button type="submit">Read More<img src={RightArrow} /></button> </a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span><img src={Star} alt="" />4.5</span>
                        </div>
                        <p><img src={Costumers} alt="" />&nbsp;+ more than 60 of our clients  enjoyed reading this article</p>

                    </div>
                </section>







                {/* Listes de blogs */}




                <main className="blogs_list">
                    {/* <div className='blog_post_row'> */}
                    <div className="blog_post">
                        <figure>
                            <img id="image" src={RoseWater} alt="" />
                            <span className="category">Produits</span>
                        </figure>
                        <div className="down_part">
                            <div>
                                <h4 className="title">LES BIENFAITS DE L’EAU DE ROSE <br />
                                    – ROSE WATER – Secret de beauté</h4>
                                <p className="blog-postcontent">
                                    L’eau de rose est utilisée depuis des siècles, elle possède
                                    des propriétés hydratantes et apaisantes, ainsi que des pouvoirs
                                    antiseptiques, anti-inflammatoires et antibactériens naturels.
                                    Si votre budget ne vous permet pas encore de vous offrir un régime
                                    de soins de la peau entièrement à base de rose, une simple bouteille d’eau de  […]
                                </p>
                            </div>

                            <div>
                                <span className="posted_at">March&nbsp;28&nbsp;2023</span>
                                <a href=""><button type="submit">Read More<img src={RightArrow} /></button></a>

                            </div>

                        </div>


                    </div>
                    <div className="blog_post">
                        <figure>
                            <img id="image" src={HuileDargan} alt="" />
                            <span className="category">
                                Produits
                            </span>
                        </figure>
                        <div className="down_part">
                            <div>
                                <h4 className="title">
                                    LES BIENFAITS DE L'HUILLE D'ARGAN <br />
                                    BIO-Argan OIL
                                </h4>
                                <p className="blog-postcontent">
                                    L’huile d’argan, une des huiles botaniques les plus populaires
                                    fabriquée à partir des amandes des arganiers originaires du Maroc,
                                    est utilisée depuis des siècles pour la santé et la beauté. Un secret
                                    de beauté marocain à utiliser pour améliorer naturellement l’apparence
                                    et la santé de vos cheveux, de votre peau et de vos ongles. […]
                                </p>
                            </div>

                            <div>
                                <span className="posted_at">March&nbsp;28&nbsp;2023</span>
                                <a href=""><button type="submit">Read More<img src={RightArrow} /></button></a>

                            </div>
                        </div>
                    </div>
                    <div className="blog_post">
                        <figure>
                            <img id="image" src={Diversité} alt="" />
                            <span className="category">
                                Info
                            </span>


                        </figure>
                        <div className="down_part">
                            <div>
                                <h4 className="title">
                                    LE TROPHEE POUR LA DIVERSITE
                                    <br />   ET L’INCLUSION
                                </h4>
                                <p className="blog-postcontent">
                                    En marge des 3es Rencontres internationales des sciences
                                    du management (RISM), les trophées marocains «Diversité
                                    & Inclusion» ont récompensé leurs premières entreprises.
                                    Elles étaient 6 pour cette 1re édition à être choisies
                                    par un jury composé d’universitaires et de professionnels.
                                    Organisé par la Chaire innovation managériale […]

                                </p>
                            </div>

                            <div>
                                <span className="posted_at">March&nbsp;28&nbsp;2023</span>
                                <a href=""><button type="submit">Read More<img src={RightArrow} /></button></a>

                            </div>
                        </div>
                    </div>
                    {/* </div> */}





                    {/* <div className='blog_post_row'> */}

                    <div className="blog_post">
                        <figure>
                            <img id="image" src={Tamayuz} alt="" />
                            <span className="category">
                                Info
                            </span>

                        </figure>
                        <div className="down_part">
                            <div>
                                <h4 className="title">
                                    LE PRIX TAMAYUZ POUR LA FEMME
                                    <br />  MAROCAINE
                                </h4>
                                <p className="blog-postcontent">
                                    Le Prix TAMAYUZ de la femme Marocaine, qui vise à récompenser d
                                    es initiatives créatives dans l’autonomisation économique des
                                    femmes, que ce soit pour les individus, les organismes civiques
                                    ou les institutions nationales, a consacré sa troisième session
                                    à l ‘ »Entrepreneuriat des femmes » Mme Aicha ARABI a remporté […]
                                </p>
                            </div>

                            <div>
                                <span className="posted_at">March&nbsp;28&nbsp;2023</span>
                                <a href=""><button type="submit">Read More<img src={RightArrow} /></button></a>

                            </div>
                        </div>
                    </div>








<span></span>



                    <div className="blog_post">
                        <figure>
                            <img id="image" src={CouleurRouge} alt="" />
                            <span className="category">
                                Produits
                            </span>

                        </figure>
                        <div className="down_part">
                            <div>
                                <h4 className="title">
                                    COLORER LES CHEVEUX EN ROUGE
                                </h4>
                                <p className="blog-postcontent">
                                    Une recette naturelle spéciale pour la coloration
                                    des cheveux roux (Acajou). J’espère que vous aimez
                                    la recette. Ingrédients: 5 cuillères à henné Cosses de
                                    Grenade séchées Betterave rouge 2 cuillères Aker Fassi
                                    2 cuillères à soupe d’huile d’olive Manière : Faire
                                    bouillir les cosses de grenade et les betteraves dans
                                    de l’eau pendant 30 minutes […]
                                </p>
                            </div>

                            <div>
                                <span className="posted_at">March&nbsp;28&nbsp;2023</span>
                                <a href=""><button type="submit">Read More<img src={RightArrow} /></button></a>

                            </div>
                        </div>
                    </div>





                    <div className="blog_post">
                        <figure>
                            <img id="image" src={Hulles_Naturelles} alt="" />
                            <span className="category">
                                Naturel
                            </span>

                        </figure>
                        <div className="down_part">
                            <div>
                                <h4 className="title">
                                    HULLES NATURELLES
                                </h4>
                                <p className="blog-postcontent">
                                    Qui parmi nous ne rêve pas de beauté permanente n’est pas
                                    affecté par les facteurs environnants et ne montre
                                    aucune manifestation du vieillissement? En
                                    fait, tel est le rêve de la majorité des femmes,
                                    dont beaucoup n’hésitent jamais à utiliser des
                                    produits et des crèmes contenant des nutriments
                                    et qui cherchent toujours à trouver tout […]
                                </p>
                            </div>

                            <div>
                                <span className="posted_at">March&nbsp;28&nbsp;2023</span>
                                <a href=""><button type="submit">Read More<img src={RightArrow} /></button></a>

                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </main>


                <div class="pagination">
                    <a href="#">&laquo;</a>
                    <a href="#">1</a>
                    <a class="active" href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                    <a href="#">&raquo;</a>
                </div>


            </div>

            <footer >
                <h1>Footer</h1>

            </footer>
        </>


    );
}

// =======
export default BlogPosts ;