import React from 'react';
import TopBar from '../../Components/TopBar/TopBar';
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { BsPlus, BsImages } from "react-icons/bs";
import { RiVideoAddLine, RiShareForwardLine } from "react-icons/ri";
import { MdTagFaces } from "react-icons/md";
import { BiWorld, BiLike, BiComment, BiCaretDown } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import './Home.scss';
import { useState } from 'react';
const Home = () => {

 // hide left site more button
 const [open, setOpen] = useState({
  type : false
 });

 // handle open sidebar
 const handleOpenSide = () => {
  setTimeout(() => {
    setOpen({
      type : true
    })
  }, 200);
 }

 // handle close side
 const handleCloseSide = () => {
  setTimeout(() => {
    setOpen({
      type : false
    })
  }, 200);
 }

  return (
    
    <div>
    <TopBar />
    <div className="home__container">
      <div className="home__wrapper">
        <div className="home__left">
        <div className="info__content">
            <a href="#"><img src="https://i.ibb.co/wCPNbMR/295776538-457934336162409-5961947184979946612-n.jpg" alt="295776538-457934336162409-5961947184979946612-n" border="0"/></a>
            <li>Nur Amin</li>
        </div>
        <div className="info__content">
            <a href="#"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeHNd-J_4_cHD2sW8YXXHLXHqfpKmA4GtxSp-kqYDga3FLG1xC3-6SMcv9SqrB2CFdwq0Rgj8_GQPNeCFSqJxoU_" border="0"/></a>
            <li>Friend's</li>
        </div>
        <div className="info__content">
            <a href="#"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png?_nc_eui2=AeFUR67Rouue0SoKegiiovn1Z3xAUM5_bWpnfEBQzn9tarzJt1_uWmGP9z8WEov48LwLrHKSO_3rrqJMZp413Hke" border="0"/></a>
            <li>Group</li>
        </div>
        <div className="info__content">
            <a href="#"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png?_nc_eui2=AeH8nI2CNlKxgNGBoTiggykf-vsl1K9A-9v6-yXUr0D725uwmLsWi9MoUyjJ7-mC6GEvHe1W1tjKeghmlEjWEVDH" border="0"/></a>
            <li>Marketplace</li>
        </div>
        <div className="info__content">
            <a href="#"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png?_nc_eui2=AeFI46mCYIyEMiteKOg-ZrpM2NRDTXGHJ53Y1ENNcYcnnXOQALz4LWVIl9uaMMtqKONZRKJPYsmQKhkLIAIRQrci" border="0"/></a>
            <li>Watch</li>
        </div>
        <div className="info__content">
            <a href="#"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png?_nc_eui2=AeHV5iQCLJ_3Ecj09kI3Lwzwa4YXxTz5jX9rhhfFPPmNf2E07IzHI1eXJSA_XYABlLzpQX9XmC8rp3r4gaP-dZxZ" border="0"/></a>
            <li>Memories</li>
        </div>
        <div className="info__content">
            <a href="#"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png?_nc_eui2=AeHK1VPmkxe2ZZGDQOqBuapM-5kYScafj0T7mRhJxp-PRN7GH5umtkfuAziBUoRp82GlchOl2t7ld3v7yhendNjt" border="0"/></a>
            <li>Saved</li>
        </div>
        <div className="info__content">
            <a href="#"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png?_nc_eui2=AeElaY86Jzbq_gddW2iFaP6mtEPFOzh_t-u0Q8U7OH-36x2NMidBqts4M9OsPp9B01H93RbBivz517V20fuYoHIC" border="0"/></a>
            <li>Pages</li>
        </div>
        <div className="info__content">
            <a href="#"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/qfMB40PdgWb.png?_nc_eui2=AeE8WUcyHeU7i1usICQmWt6pkmXzdxy7YT6SZfN3HLthPuUoNKN5aFZGuJVcBWYUAkfHgiwY_qesneN2bKmQ-C_1" border="0"/></a>
            <li>Event</li>
        </div>
              <div className="info__icons" onClick={ handleOpenSide }>
                <span className='chevroon'><IoChevronDown /></span>
                <li>See More</li> 
              </div>
        {
          open.type && <> 
                
            <div className="info__content">
                <a href="#"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/qfMB40PdgWb.png?_nc_eui2=AeE8WUcyHeU7i1usICQmWt6pkmXzdxy7YT6SZfN3HLthPuUoNKN5aFZGuJVcBWYUAkfHgiwY_qesneN2bKmQ-C_1" border="0"/></a>
                <li>Event</li>
            </div>
            <div className="info__content">
                <a href="#"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/qfMB40PdgWb.png?_nc_eui2=AeE8WUcyHeU7i1usICQmWt6pkmXzdxy7YT6SZfN3HLthPuUoNKN5aFZGuJVcBWYUAkfHgiwY_qesneN2bKmQ-C_1" border="0"/></a>
                <li>Event</li>
            </div>
            <div className="info__content">
                <a href="#"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/qfMB40PdgWb.png?_nc_eui2=AeE8WUcyHeU7i1usICQmWt6pkmXzdxy7YT6SZfN3HLthPuUoNKN5aFZGuJVcBWYUAkfHgiwY_qesneN2bKmQ-C_1" border="0"/></a>
                <li>Event</li>
            </div>
            <div className="info__content">
                <a href="#"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/qfMB40PdgWb.png?_nc_eui2=AeE8WUcyHeU7i1usICQmWt6pkmXzdxy7YT6SZfN3HLthPuUoNKN5aFZGuJVcBWYUAkfHgiwY_qesneN2bKmQ-C_1" border="0"/></a>
                <li>Event</li>
            </div>
            <div className="info__content">
                <a href="#"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/qfMB40PdgWb.png?_nc_eui2=AeE8WUcyHeU7i1usICQmWt6pkmXzdxy7YT6SZfN3HLthPuUoNKN5aFZGuJVcBWYUAkfHgiwY_qesneN2bKmQ-C_1" border="0"/></a>
                <li>Event</li>
            </div>
            <div className="info__content">
                <a href="#"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/qfMB40PdgWb.png?_nc_eui2=AeE8WUcyHeU7i1usICQmWt6pkmXzdxy7YT6SZfN3HLthPuUoNKN5aFZGuJVcBWYUAkfHgiwY_qesneN2bKmQ-C_1" border="0"/></a>
                <li>Event</li>
            </div>
            <div className="info__content">
                <a href="#"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/qfMB40PdgWb.png?_nc_eui2=AeE8WUcyHeU7i1usICQmWt6pkmXzdxy7YT6SZfN3HLthPuUoNKN5aFZGuJVcBWYUAkfHgiwY_qesneN2bKmQ-C_1" border="0"/></a>
                <li>Event</li>
            </div>
            <div className="info__content">
                <a href="#"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/qfMB40PdgWb.png?_nc_eui2=AeE8WUcyHeU7i1usICQmWt6pkmXzdxy7YT6SZfN3HLthPuUoNKN5aFZGuJVcBWYUAkfHgiwY_qesneN2bKmQ-C_1" border="0"/></a>
                <li>Event</li>
            </div>
            <div className="info__content">
                <a href="#"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/qfMB40PdgWb.png?_nc_eui2=AeE8WUcyHeU7i1usICQmWt6pkmXzdxy7YT6SZfN3HLthPuUoNKN5aFZGuJVcBWYUAkfHgiwY_qesneN2bKmQ-C_1" border="0"/></a>
                <li>Event</li>
            </div>
            <div className="info__icons" onClick={ handleCloseSide }>
              <span className='chevroon'><IoChevronUp /></span>
              <li>See Less</li> 
           </div>  
          </>
        }
        </div>
        <div className="home__middle">
          <div className="top__timeline">
          <div className="top__timeline__container">
              <a href="#"><img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="handsome-jpg" border="0"/>
              </a>
              <div className="auth__name">
                <p>Create Story</p>
              </div>
              <div className="createStory__icon">
                  <BsPlus />
              </div>
           </div>
          <div className="top__timeline__container">
              <a href="#"><img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="handsome-jpg" border="0"/>
              </a>
              <div className="auth__name">
                <p>Create Story</p>
              </div>
           </div>
          <div className="top__timeline__container">
              <a href="#"><img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="handsome-jpg" border="0"/>
              </a>
              <div className="auth__name">
                <p>Create Story</p>
              </div>
           </div>
          <div className="top__timeline__container">
              <a href="#"><img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="handsome-jpg" border="0"/>
              </a>
              <div className="auth__name">
                <p>Create Story</p>
              </div>
           </div>
          <div className="top__timeline__container">
              <a href="#"><img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="handsome-jpg" border="0"/>
              </a>
              <div className="auth__name">
                <p>Create Story</p>
              </div>
           </div>
          </div>
          <div className="whats__mind">
            
            <div className="mind__profile">
              <img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" />
              <input type="text" placeholder='Whats your mind. Nur?'/>
            </div>
            <div className="divider">

            </div>
            <div className="mind__icons">
              <div className="mind__icons__content">
               <a href="#"><RiVideoAddLine /></a>
               <p>Live Video</p>
              </div>
              <div className="mind__icons__content">
               <a href="#"><BsImages /></a>
               <p>Photo/Video</p>
              </div>
              <div className="mind__icons__content">
               <a href="#"><MdTagFaces /></a>
               <p>Feeling/Activity</p>
              </div>
            </div>
          </div>
          <div className="create__room">
            <div className="create__wrapper">
              <div className="icon__box">
                <a href="#"><RiVideoAddLine/></a>
                <p>Create Room</p>
              </div>
              <div className="friend__list">
                <a href="#"><img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" /></a>
              </div>
              <div className="friend__list">
                <a href="#"><img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" /></a>
              </div>
              <div className="friend__list">
                <a href="#"><img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" /></a>
              </div>
              <div className="friend__list">
                <a href="#"><img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" /></a>
              </div>
              <div className="friend__list">
                <a href="#"><img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" /></a>
              </div>
              <div className="friend__list">
                <a href="#"><img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" /></a>
              </div>
              <div className="friend__list">
                <a href="#"><img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" /></a>
              </div>
              <div className="friend__list">
                <a href="#"><img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" /></a>
              </div>
              <div className="friend__list">
                <a href="#"><img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" /></a>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="post__item">
              <div className="post__header">
                <div className="post__header__img">
                  <img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" />
                  <div className="post__header__content">
                  <span>Nur Amin</span>
                  <p>1h. <a href="#" className="world"><BiWorld/></a></p>
                  </div>
                </div>
                <button><FiMoreHorizontal/></button>
              </div>
              <div className="post__body">
                <img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" />
              </div>
              <div className="post__footer">
                <div className="post__footer__item">
                  <div className="pFooter__top">
                    <div className="pFooter__content">
                      <div className="pFooter__content__box">
                         <div className="pFooter__left">
                            <a href="#"><BiLike/></a>
                            <span className="like">3.4K</span>
                         </div>
                          <div className="pFooter__right">
                            <p className="comment">3.0K Comments</p>
                            <p className="share">235K Share</p>
                          </div>
                      </div>
                          
                          <div className="divider">

                          </div>
                          <div className="pFooter__bot">
                            <div className="li__ke">
                              <a href="#"><BiLike/></a>
                              <p>Like</p>
                            </div>
                            <div className="comm__ent">
                              <a href="#"><BiComment/></a>
                              <p>Comment</p>
                            </div>
                            <div className="sh__are">
                              <div className="sha__re__content">
                              <a href="#"><RiShareForwardLine/></a>
                              <p>Share</p>
                              </div>
                              <div className="im__gbox">
                                <img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" />
                                <a href="#"><BiCaretDown/></a>
                              </div>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="post__item">
              <div className="post__header">
                <div className="post__header__img">
                  <img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" />
                  <div className="post__header__content">
                  <span>Nur Amin</span>
                  <p>1h. <a href="#" className="world"><BiWorld/></a></p>
                  </div>
                </div>
                <button><FiMoreHorizontal/></button>
              </div>
              <div className="post__body">
                <img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" />
              </div>
              <div className="post__footer">
                <div className="post__footer__item">
                  <div className="pFooter__top">
                    <div className="pFooter__content">
                      <div className="pFooter__content__box">
                         <div className="pFooter__left">
                            <a href="#"><BiLike/></a>
                            <span className="like">3.4K</span>
                         </div>
                          <div className="pFooter__right">
                            <p className="comment">3.0K Comments</p>
                            <p className="share">235K Share</p>
                          </div>
                      </div>
                          
                          <div className="divider">

                          </div>
                          <div className="pFooter__bot">
                            <div className="li__ke">
                              <a href="#"><BiLike/></a>
                              <p>Like</p>
                            </div>
                            <div className="comm__ent">
                              <a href="#"><BiComment/></a>
                              <p>Comment</p>
                            </div>
                            <div className="sh__are">
                              <div className="sha__re__content">
                              <a href="#"><RiShareForwardLine/></a>
                              <p>Share</p>
                              </div>
                              <div className="im__gbox">
                                <img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" />
                                <a href="#"><BiCaretDown/></a>
                              </div>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="post__item">
              <div className="post__header">
                <div className="post__header__img">
                  <img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" />
                  <div className="post__header__content">
                  <span>Nur Amin</span>
                  <p>1h. <a href="#" className="world"><BiWorld/></a></p>
                  </div>
                </div>
                <button><FiMoreHorizontal/></button>
              </div>
              <div className="post__body">
                <img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" />
              </div>
              <div className="post__footer">
                <div className="post__footer__item">
                  <div className="pFooter__top">
                    <div className="pFooter__content">
                      <div className="pFooter__content__box">
                         <div className="pFooter__left">
                            <a href="#"><BiLike/></a>
                            <span className="like">3.4K</span>
                         </div>
                          <div className="pFooter__right">
                            <p className="comment">3.0K Comments</p>
                            <p className="share">235K Share</p>
                          </div>
                      </div>
                          
                          <div className="divider">

                          </div>
                          <div className="pFooter__bot">
                            <div className="li__ke">
                              <a href="#"><BiLike/></a>
                              <p>Like</p>
                            </div>
                            <div className="comm__ent">
                              <a href="#"><BiComment/></a>
                              <p>Comment</p>
                            </div>
                            <div className="sh__are">
                              <div className="sha__re__content">
                              <a href="#"><RiShareForwardLine/></a>
                              <p>Share</p>
                              </div>
                              <div className="im__gbox">
                                <img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" />
                                <a href="#"><BiCaretDown/></a>
                              </div>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="post__item">
              <div className="post__header">
                <div className="post__header__img">
                  <img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" />
                  <div className="post__header__content">
                  <span>Nur Amin</span>
                  <p>1h. <a href="#" className="world"><BiWorld/></a></p>
                  </div>
                </div>
                <button><FiMoreHorizontal/></button>
              </div>
              <div className="post__body">
                <img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" />
              </div>
              <div className="post__footer">
                <div className="post__footer__item">
                  <div className="pFooter__top">
                    <div className="pFooter__content">
                      <div className="pFooter__content__box">
                         <div className="pFooter__left">
                            <a href="#"><BiLike/></a>
                            <span className="like">3.4K</span>
                         </div>
                          <div className="pFooter__right">
                            <p className="comment">3.0K Comments</p>
                            <p className="share">235K Share</p>
                          </div>
                      </div>
                          
                          <div className="divider">

                          </div>
                          <div className="pFooter__bot">
                            <div className="li__ke">
                              <a href="#"><BiLike/></a>
                              <p>Like</p>
                            </div>
                            <div className="comm__ent">
                              <a href="#"><BiComment/></a>
                              <p>Comment</p>
                            </div>
                            <div className="sh__are">
                              <div className="sha__re__content">
                              <a href="#"><RiShareForwardLine/></a>
                              <p>Share</p>
                              </div>
                              <div className="im__gbox">
                                <img src="https://i.ibb.co/c637qPP/handsome-jpg.jpg" alt="" />
                                <a href="#"><BiCaretDown/></a>
                              </div>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home__right">
          <div className="home__right__wrapper">
          <p className='sponcor'>Sponsored</p>
            <div className="right__box">
             <img src="https://scontent.fdac116-1.fna.fbcdn.net/v/t45.1600-4/283608054_23851405409910259_1921992079734524571_n.jpg?stp=cp0_dst-jpg_p160x160_q75_spS444&_nc_cat=107&ccb=1-7&_nc_sid=67cdda&_nc_eui2=AeGEJzzGqXdWGrTDTuqF3yQ4_PhiDG_0AzH8-GIMb_QDMfkNAEBRQl06xu9cYmlFb-6Kr9zLdoDTfwFRlVMVW-Xi&_nc_ohc=zFzxVrIePO8AX_tJNwR&_nc_ht=scontent.fdac116-1.fna&oh=00_AT9gDXWAi3ezhW8cVl1L0wsQsAQ3vL3-Wceo_J6OigTfsg&oe=62FA5D2E" alt="" /> 
             <div className="rigt__box__content">
              <p>বিস্তারিত জানতে ক্লিক করুন</p>
              <a href="#">👉</a>
              <span>arifnotes.com</span>
             </div>
            </div>
            <div className="right__box__bot">
             <img src="https://scontent.fdac116-1.fna.fbcdn.net/v/t45.1600-4/275141131_6260132684954_621471278604636677_n.jpg?stp=cp0_dst-jpg_p296x100_q75_spS444&_nc_cat=100&ccb=1-7&_nc_sid=67cdda&_nc_eui2=AeFI93qFYMuUYRNnqE1XM3IPkvWp-VO2x8KS9an5U7bHwmfwc-yZyssAOPyv5BkG1wblxg62jXAspMtdhhsRekp9&_nc_ohc=Qk8fISynq_IAX-BXF7a&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_5QxyfwTmMd78PzyHrdfz3GRbDcJi4b2Ab3Pdw66h-bA&oe=62F933AF" alt="" /> 
             <div className="rigt__box__content">
              <p>Launch your website</p>
              <span>Bluehost.com</span>
             </div>
            </div>
            <div className="divider">

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home;
