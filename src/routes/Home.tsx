import * as React from "react";
import {compose} from "redux";
import Navigation from "../components/Navigation";
import * as $ from 'jquery';

class Home extends React.Component{

    componentDidMount(): void {

    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>

                <main id="tg-main" className="tg-main tg-haslayout">
                    <div className="container-fluid">
                        <div className="row">
                            <div id="tg-twocolumns" className="tg-twocolumns">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <section className="tg-sectionspace tg-haslayout">
                                        <div className="tg-shortcode tg-welcomeandgreeting tg-welcomeandgreeting-v2">
                                            <div className="tg-shortcodetextbox">
                                                <h2>WELCOME TO DIBRUGARH UNIVERSITY</h2>
                                                <div className="tg-description" style={{lineHeight: 1.6, textJustify: "inter-word", textAlign: "justify"}}>
                                                    <p>Dibrugarh University, the easternmost University in India, was established in 1965 consequent upon the provisions of the Dibrugarh University Act, 1965, enacted by the Assam Legislative Assembly. It is a leading research and innovation driven University that acts as a spatial slot to configure the socio-cultural dynamics of North East India.The University encourages myriad enterprises that harbour on a constellation of thinking, theorizing, and reflection.</p>
                                                    <p>Dibrugarh University is one of the educational centres of excellence, seeking to amalgamate multi-disciplinary fields with numerous theoretical perspectives, the realm of cultural diversity with the praxis of knowledge, and region-specific issues with a global horizon. The University has a prolific and productive industrial academia interface. With its strong global links in teaching and research programmes, the University offers dynamic educational experiences that prepare the next generation to lead and make a difference and thus contribute to the society at large. The University hosts 177 affiliated colleges and institutes that spread over nine districts of Assam. Dibrugarh University is a member of the Association of Indian Universities and is recognised by all the universities in India and abroad.</p>
                                                    <p>It is situated at Rajabheta, five kilometres to the South of the Dibrugarh town and well connected by road, rails, air and waterways. The University has a vast sprawling campus (550 acres) set in bucolic and idyllic surroundings. Dibrugarh, which is one of the commercial and industrial hubs of North East India, also occupies a unique place in the field of art, literature and culture. It is internationally known as a rich tea producing district, and is also on the global map for its rich reserve of minerals like coal, oil and natural gas. Its diverse flora and fauna make it an exciting region from the environmental and ecological point of view.The various people who inhabit this district present a polychromatic ethnic mosaic and make it a very attractive destination for academia all over the globe.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <section className="tg-sectionspace tg-haslayout">
                                        <div className="tg-shortcode tg-welcomeandgreeting tg-welcomeandgreeting-v2">
                                            <figure><img src="assets/images/jadish.jpg" alt="image description" style={{height: 201, width: 167, objectFit:'cover'}}/></figure>
                                            <div className="tg-shortcodetextbox">
                                                <h2>Welcome &amp; Greetings!</h2>
                                                <div className="tg-description" style={{lineHeight: 1.6, textJustify: "inter-word", textAlign: "justify"}}>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                </div>
                                                <span className="tg-name">Prof. Jagdish Mukhi</span>
                                                <span className="tg-designation">Chancellor</span>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <section className="tg-sectionspace tg-haslayout">
                                        <div className="tg-shortcode tg-welcomeandgreeting tg-welcomeandgreeting-v2">
                                            <figure><img src="assets/images/duvc.jpg" alt="image description" style={{height: 201, width: 167, objectFit:'cover'}}/></figure>
                                            <div className="tg-shortcodetextbox">
                                                <h2>Welcome &amp; Greetings!</h2>
                                                <div className="tg-description" style={{lineHeight: 1.6, textJustify: "inter-word", textAlign: "justify"}}>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                </div>
                                                <span className="tg-name">Prof. Ranjit Tamuli </span>
                                                <span className="tg-designation">Vice Chancellor</span>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-xs-12 col-sm-8 col-md-9 col-lg-9">
                                    <div id="tg-content" className="tg-content">
                                        <section className="tg-sectionspace tg-haslayout">
                                            <div className="tg-borderheading">
                                                <h2>Latest Events</h2>
                                            </div>
                                            <div className="tg-events">
                                                <div className="row">
                                                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                                                        <article className="tg-themepost tg-eventpost">
                                                            <figure className="tg-featuredimg">
                                                                <a href="javascript:void(0);">
                                                                    <img src="assets/images/events/img-08.jpg"
                                                                         alt="image description"/>
                                                                </a>
                                                            </figure>
                                                            <div className="tg-themepostcontent">
                                                                <ul className="tg-matadata">
                                                                    <li>
                                                                        <a href="javascript:void(0);">
                                                                            <i className="fa fa-calendar"></i>
                                                                            <span>Tuesday, Apr 21, 2017</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                                <div className="tg-themeposttitle">
                                                                    <h3><a href="javascript:void(0);">One Day Awareness
                                                                        Seminar on Future Focus</a></h3>
                                                                </div>
                                                                <div className="tg-description">
                                                                    <p>Consectetur adipisicing elit sed do eiusmod
                                                                        tempor inunt labore... <a
                                                                            href="javascript:void(0);">Read More</a></p>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                                                        <article className="tg-themepost tg-eventpost">
                                                            <figure className="tg-featuredimg">
                                                                <a href="javascript:void(0);">
                                                                    <img src="assets/images/events/img-09.jpg"
                                                                         alt="image description"/>
                                                                </a>
                                                            </figure>
                                                            <div className="tg-themepostcontent">
                                                                <ul className="tg-matadata">
                                                                    <li>
                                                                        <a href="javascript:void(0);">
                                                                            <i className="fa fa-calendar"></i>
                                                                            <span>Tuesday, Apr 21, 2017</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                                <div className="tg-themeposttitle">
                                                                    <h3><a href="javascript:void(0);">International
                                                                        Conference on Material Science 2017</a></h3>
                                                                </div>
                                                                <div className="tg-description">
                                                                    <p>Consectetur adipisicing elit sed do eiusmod
                                                                        tempor inunt labore... <a
                                                                            href="javascript:void(0);">Read More</a></p>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                                                        <article className="tg-themepost tg-eventpost">
                                                            <figure className="tg-featuredimg">
                                                                <a href="javascript:void(0);">
                                                                    <img src="assets/images/events/img-10.jpg"
                                                                         alt="image description"/>
                                                                </a>
                                                            </figure>
                                                            <div className="tg-themepostcontent">
                                                                <ul className="tg-matadata">
                                                                    <li>
                                                                        <a href="javascript:void(0);">
                                                                            <i className="fa fa-calendar"></i>
                                                                            <span>Tuesday, Apr 21, 2017</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                                <div className="tg-themeposttitle">
                                                                    <h3><a href="javascript:void(0);">Biggest Reality
                                                                        Virtual University Convocation 2017</a></h3>
                                                                </div>
                                                                <div className="tg-description">
                                                                    <p>Consectetur adipisicing elit sed do eiusmod
                                                                        tempor inunt labore... <a
                                                                            href="javascript:void(0);">Read More</a></p>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                                                        <article className="tg-themepost tg-eventpost">
                                                            <figure className="tg-featuredimg">
                                                                <a href="javascript:void(0);">
                                                                    <img src="assets/images/events/img-11.jpg"
                                                                         alt="image description"/>
                                                                </a>
                                                            </figure>
                                                            <div className="tg-themepostcontent">
                                                                <ul className="tg-matadata">
                                                                    <li>
                                                                        <a href="javascript:void(0);">
                                                                            <i className="fa fa-calendar"></i>
                                                                            <span>Tuesday, Apr 21, 2017</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                                <div className="tg-themeposttitle">
                                                                    <h3><a href="javascript:void(0);">Launching Best
                                                                        Concept Motorbike for Abnormal People</a></h3>
                                                                </div>
                                                                <div className="tg-description">
                                                                    <p>Consectetur adipisicing elit sed do eiusmod
                                                                        tempor inunt labore... <a
                                                                            href="javascript:void(0);">Read More</a></p>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                                                        <article className="tg-themepost tg-eventpost">
                                                            <figure className="tg-featuredimg">
                                                                <a href="javascript:void(0);">
                                                                    <img src="assets/images/events/img-12.jpg"
                                                                         alt="image description"/>
                                                                </a>
                                                            </figure>
                                                            <div className="tg-themepostcontent">
                                                                <ul className="tg-matadata">
                                                                    <li>
                                                                        <a href="javascript:void(0);">
                                                                            <i className="fa fa-calendar"></i>
                                                                            <span>Tuesday, Apr 21, 2017</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                                <div className="tg-themeposttitle">
                                                                    <h3><a href="javascript:void(0);">Result
                                                                        Announcement for Fresh Graduates 2017</a></h3>
                                                                </div>
                                                                <div className="tg-description">
                                                                    <p>Consectetur adipisicing elit sed do eiusmod
                                                                        tempor inunt labore... <a
                                                                            href="javascript:void(0);">Read More</a></p>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                                                        <article className="tg-themepost tg-eventpost">
                                                            <figure className="tg-featuredimg">
                                                                <a href="javascript:void(0);">
                                                                    <img src="assets/images/events/img-13.jpg"
                                                                         alt="image description"/>
                                                                </a>
                                                            </figure>
                                                            <div className="tg-themepostcontent">
                                                                <ul className="tg-matadata">
                                                                    <li>
                                                                        <a href="javascript:void(0);">
                                                                            <i className="fa fa-calendar"></i>
                                                                            <span>Tuesday, Apr 21, 2017</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                                <div className="tg-themeposttitle">
                                                                    <h3><a href="javascript:void(0);">Outdoor Dinner
                                                                        with Reputed Prof. Darwin Mccurdy</a></h3>
                                                                </div>
                                                                <div className="tg-description">
                                                                    <p>Consectetur adipisicing elit sed do eiusmod
                                                                        tempor inunt labore... <a
                                                                            href="javascript:void(0);">Read More</a></p>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        <section className="tg-sectionspace tg-haslayout">
                                            <div className="tg-latestnews">
                                                <div className="tg-borderheading">
                                                    <h2>Quick Browse</h2>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3">
                                    <aside id="tg-sidebar" className="tg-sidebar">
                                        <div className="tg-widget">
                                            <div className="tg-widgetcontent">
                                                <form className="tg-formtheme tg-formsearch">
                                                    <fieldset>
                                                        <input type="search" name="search" className="form-control"
                                                               placeholder="Start Your Search Here"/>
                                                            <button type="submit" className="tg-btnsearch"><i
                                                                className="icon-magnifier"></i></button>
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="tg-widget tg-widgetnoticeboard">
                                            <div className="tg-widgettitle">
                                                <h3>Notice Board</h3>
                                            </div>
                                            <div className="tg-widgetcontent">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0);">Adipisicing elit sed dotas eiusmod
                                                            tempor incididunt utae labore etiat dolore magna aliqua enim
                                                            ad minim veniam.</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);">Labore etiat dolore magna aliqua
                                                            enim ad minim veniam.</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);">Duis aute irure dolor in
                                                            reprehenderit.</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="tg-widget tg-widgetadmissionform">
                                            <div className="tg-widgetcontent">
                                                <h3>Admission Form 2019</h3>
                                                <div className="tg-description" style={{lineHeight: 1.6, textJustify: "inter-word", textAlign: "justify"}}>
                                                    <p>Quistane nostrud exertation ulamco laboris nisi ut aliquip ex ea
                                                        comodo consequat aute irure dolor.</p>
                                                </div>
                                                <a className="tg-btn tg-btnicon" href="javascript:void(0);" style={{marginTop: 10}}>
                                                    <i className="fa fa-file-pdf-o"></i>
                                                    <span>Download PDF</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="tg-widget tg-widgetsearchcourse">
                                            <div className="tg-widgettitle">
                                                <h3>Search Course</h3>
                                            </div>
                                            <div className="tg-widgetcontent">
                                                <form className="tg-formtheme tg-formsearchcourse">
                                                    <fieldset>
                                                        <div className="tg-inputwithicon">
                                                            <i className="icon-book"></i>
                                                            <input type="search" name="keyword" className="form-control"
                                                                   placeholder="Keyword"/>
                                                        </div>
                                                        <div className="tg-inputwithicon">
                                                            <i className="icon-layers"></i>
                                                            <span className="tg-select">
														<select>
															<option value="">Course Category</option>
															<option value="">Course Category</option>
															<option value="">Course Category</option>
														</select>
													</span>
                                                        </div>
                                                        <button type="submit" className="tg-btn">search now</button>
                                                        <a href="javascript:void(0);">View All Courses</a>
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="tg-widget tg-widgetdownload">
                                            <div className="tg-widgettitle">
                                                <h3>Downloads</h3>
                                            </div>
                                            <div className="tg-widgetcontent">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-paperclip"></i>
                                                            <span>Prospectus</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-map-signs"></i>
                                                            <span>Admission Guide</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-list-ul"></i>
                                                            <span>Merit List 2017</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-calendar-check-o "></i>
                                                            <span>Examination Date Sheet</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-bookmark-o"></i>
                                                            <span>Examination Guide 2019</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="tg-widget tg-widgetcampuses">
                                            <div className="tg-widgettitle">
                                                <h3>Campuses</h3>
                                            </div>
                                            <div className="tg-widgetcontent">
                                                <div id="tg-campusslider"
                                                     className="tg-campusslider owl-carousel tg-campuses">
                                                    <div className="item">
                                                        <div className="tg-campus">
                                                            <div className="tg-themepost">
                                                                <figure className="tg-othercampusimg">
                                                                    <img src="assets/images/campuses/img-04.jpg"
                                                                         alt="image description"/>
                                                                </figure>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <i className="icon-location"></i>
                                                                    <address>Abc, xyz street London, HG521A</address>
                                                                </li>
                                                                <li>
                                                                    <i className="icon-phone-handset"></i>
                                                                    <span>0800 - 1234 - 562 - 6</span>
                                                                </li>
                                                                <li>
                                                                    <i className="icon-printer"></i>
                                                                    <span>+4 1234 567 - 9</span>
                                                                </li>
                                                                <li>
                                                                    <a href="mailto:query@domain.com">
                                                                        <i className="icon-envelope"></i>
                                                                        <span>query@domain.com</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="mailto:complaint@domain.com">
                                                                        <i className="icon-construction"></i>
                                                                        <span>complaint@domain.com</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="tg-campus">
                                                            <div className="tg-themepost">
                                                                <figure className="tg-othercampusimg">
                                                                    <img src="assets/images/campuses/img-05.jpg"
                                                                         alt="image description"/>
                                                                </figure>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <i className="icon-location"></i>
                                                                    <address>Abc, xyz street London, HG521A</address>
                                                                </li>
                                                                <li>
                                                                    <i className="icon-phone-handset"></i>
                                                                    <span>0800 - 1234 - 562 - 6</span>
                                                                </li>
                                                                <li>
                                                                    <i className="icon-printer"></i>
                                                                    <span>+4 1234 567 - 9</span>
                                                                </li>
                                                                <li>
                                                                    <a href="mailto:query@domain.com">
                                                                        <i className="icon-envelope"></i>
                                                                        <span>query@domain.com</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="mailto:complaint@domain.com">
                                                                        <i className="icon-construction"></i>
                                                                        <span>complaint@domain.com</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="tg-campus">
                                                            <div className="tg-themepost">
                                                                <figure className="tg-othercampusimg">
                                                                    <img src="assets/images/campuses/img-06.jpg"
                                                                         alt="image description"/>
                                                                </figure>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <i className="icon-location"></i>
                                                                    <address>Abc, xyz street London, HG521A</address>
                                                                </li>
                                                                <li>
                                                                    <i className="icon-phone-handset"></i>
                                                                    <span>0800 - 1234 - 562 - 6</span>
                                                                </li>
                                                                <li>
                                                                    <i className="icon-printer"></i>
                                                                    <span>+4 1234 567 - 9</span>
                                                                </li>
                                                                <li>
                                                                    <a href="mailto:query@domain.com">
                                                                        <i className="icon-envelope"></i>
                                                                        <span>query@domain.com</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="mailto:complaint@domain.com">
                                                                        <i className="icon-construction"></i>
                                                                        <span>complaint@domain.com</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default compose(Navigation)(Home)
