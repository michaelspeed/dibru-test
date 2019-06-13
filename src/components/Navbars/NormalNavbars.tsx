import * as React from "react";
import {compose} from "redux";
import * as $ from 'jquery';

class NormalNavbars extends React.Component{
    mega: any

    componentDidMount(): void {
        function hoverIn() {
            var a = $(this);
            var nav = a.closest('#tg-navigation');
            var mega = a.find('.mega-menu');
            var offset = rightSide(nav) - leftSide(a);
            mega.width(Math.min(rightSide(nav), columns(mega)*325));
            mega.css('left', Math.min(0, offset - mega.width()));
        }
        function hoverOut() {}
        function leftSide(elem) {
            return elem.offset().left;
        }
        function rightSide(elem) {
            return elem.offset().left + elem.width();
        }
        function columns(mega) {
            var columns = 0
            mega.children('.mega-menu-row').each(function () {
                columns = Math.max(columns, $(this).children('.mega-menu-col').length)
            })
            return columns;
        }
        $('#tg-navigation .menu-item-has-mega-menu').hover(hoverIn, hoverOut);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="tg-navigationarea">
                            <strong className="tg-logo"><a href="index.html"><img src="assets/images/logo6.png"
                                                                                  alt="University of Education and knowledge"/></a></strong>
                            <div className="tg-navigationandsearch">
                                <nav id="tg-nav" className="tg-nav">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle collapsed"
                                                data-toggle="collapse" data-target="#tg-navigation"
                                                aria-expanded="false">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div id="tg-navigation"
                                         className="collapse navbar-collapse tg-navigation">
                                        <ul>
                                            <li><a href="results.html">Home</a></li>
                                            <li className="menu-item-has-mega-menu">
                                                <a href="javascript:void(0);">About Us</a>
                                                <div className="mega-menu" ref={menu => this.mega = menu}>
                                                    <ul className="mega-menu-row">
                                                        <li className="mega-menu-col">
                                                            <ul>
                                                                <li><a href="javascript:void(0);">About The University</a></li>
                                                                <li><a href="javascript:void(0);">Mission, Vision and Goals</a></li>
                                                                <li><a href="javascript:void(0);">Prespective Plans</a></li>
                                                                <li><a href="javascript:void(0);">The University Anthem</a></li>
                                                                <li><a href="javascript:void(0);">Former Vice-Chancellor</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-menu-col">
                                                            <a href="javascript:void(0);">University Campus</a>
                                                            <ul>
                                                                <li><a href="faculties.html">About The Campus</a>
                                                                </li>
                                                                <li><a href="facultydetail.html">Photo Gallery</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="mega-menu-row">
                                                        <li className="mega-menu-col">
                                                            <a href="javascript:void(0);">STATUTORY/GOVERNING BODIES</a>
                                                            <ul>
                                                                <li><a href="javascript:void(0);" style={{color: 'white'}}>Court</a></li>
                                                                <li><a href="javascript:void(0);" style={{color: 'white'}}>Executive Council</a></li>
                                                                <li><a href="javascript:void(0);" style={{color: 'white'}}>Finance Committee</a></li>
                                                                <li><a href="javascript:void(0);" style={{color: 'white'}}>Academic Council</a></li>
                                                                <li><a href="javascript:void(0);" style={{color: 'white'}}>PG Board</a></li>
                                                                <li><a href="javascript:void(0);" style={{color: 'white'}}>UG Board</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-menu-col">
                                                            <a href="javascript:void(0);">STATUTORY/GOVERNING BODIES</a>
                                                            <ul>
                                                                <li><a href="javascript:void(0);" >About Dibrugarh</a></li>
                                                                <li><a href="javascript:void(0);" >How to Reach</a></li>
                                                                <li><a href="javascript:void(0);" >Google Maps</a></li>
                                                                <li><a href="javascript:void(0);" >Contact Information</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="javascript:void(0);">Administration</a>
                                                <ul className="sub-menu">
                                                    <li><a href="javascript:void(0);">Chancellor</a></li>
                                                    <li><a href="javascript:void(0);">Vice Chancellor</a></li>
                                                    <li className="menu-item-has-children">
                                                        <a href="javascript:void(0);">Important Offices</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="newslist.html">Registrar</a></li>
                                                            <li><a href="newsgrid.html">Deans</a></li>
                                                            <li><a href="newsgridsidebar.html">Controller of Examinations</a></li>
                                                            <li><a href="newsdetail.html">Director, CDC</a></li>
                                                            <li><a href="newsdetail.html">Director, DODL</a></li>
                                                            <li><a href="newsdetail.html">Office of the International Affairs</a></li>
                                                            <li><a href="newsdetail.html">Other offices and Branches</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="javascript:void(0);">Acts, Ordinances, Rules and Policies</a></li>
                                                    <li className="menu-item-has-children">
                                                        <a href="javascript:void(0);">Minutes of Meetings</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="newslist.html">Executive Council</a></li>
                                                            <li><a href="newsgrid.html">Academic Council</a></li>
                                                            <li><a href="newsgridsidebar.html">Finance Committee</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="javascript:void(0);">School of Studies</a>
                                                <ul className="sub-menu">
                                                    <li className="menu-item-has-children">
                                                        <a href="javascript:void(0);">Humanities, Social Sciences and Law</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="newslist.html">Dept. of Assamese</a></li>
                                                            <li><a href="newsgrid.html">Dept. of English</a></li>
                                                            <li><a href="newsgridsidebar.html">Dept. of History</a></li>
                                                            <li><a href="newsdetail.html">Dept. of Political Science </a></li>
                                                            <li><a href="newsdetail.html">Dept. of Sociology </a></li>
                                                            <li><a href="newsdetail.html">Centre for Studies in Languages </a></li>
                                                            <li><a href="newsdetail.html">Centre for Studies in Philosophy</a></li>
                                                            <li><a href="newsdetail.html">Centre for Studies in Journalism & Mass Comm. </a></li>
                                                            <li><a href="newsdetail.html">Dr. Bhupen Hazarika Centre for Performing Arts </a></li>
                                                            <li><a href="newsdetail.html">Centre for Juridical Studies </a></li>
                                                            <li><a href="newsdetail.html">Centre for Women’s Studies </a></li>
                                                            <li><a href="newsdetail.html">Centre for Library & Information Science Studies  </a></li>
                                                            <li><a href="newsdetail.html">Centre for Social Work Studies </a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="javascript:void(0);">Science and Engineering</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="newslist.html">Dept. of Physics </a></li>
                                                            <li><a href="newsgrid.html">Dept. of Chemistry </a></li>
                                                            <li><a href="newsgridsidebar.html">Dept. of Mathematics </a></li>
                                                            <li><a href="newsgridsidebar.html">Dept. of Statistics </a></li>
                                                            <li><a href="newsgridsidebar.html">Dept.of Anthropology </a></li>
                                                            <li><a href="newsgridsidebar.html">Dept. of Life Sciences  </a></li>
                                                            <li><a href="newsgridsidebar.html">Dept. of Pharmaceutical Sciences </a></li>
                                                            <li><a href="newsgridsidebar.html">DUIET  </a></li>
                                                            <li><a href="newsgridsidebar.html">Centre for Computer Science and Applications  </a></li>
                                                            <li><a href="newsgridsidebar.html">Centre for Biotechnology and Bioinformatics </a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="javascript:void(0);">Commerce and Management Science</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="newslist.html">Dept. of Commerce  </a></li>
                                                            <li><a href="newsgrid.html">Dept. of Economics  </a></li>
                                                            <li><a href="newsgridsidebar.html">Centre for Management Studies  </a></li>
                                                            <li><a href="newsgridsidebar.html">Centre for Tea & Agro Studies  </a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="javascript:void(0);">Education</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="newslist.html">Dept. of Education </a></li>
                                                            <li><a href="newsgrid.html">Centre for Studies in Physical Education & Sports </a></li>
                                                            <li><a href="newsgridsidebar.html">Centre for Studies in Behavioural Sciences </a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="javascript:void(0);">Earth, Atmospheric Science, Environment and Energy</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="newslist.html">Dept. of Applied Geology </a></li>
                                                            <li><a href="newsgrid.html">Dept. of Petroleum Technology </a></li>
                                                            <li><a href="newsgridsidebar.html">Centre for Atmospheric Studies </a></li>
                                                            <li><a href="newsgridsidebar.html">Centre for Studies in Geography </a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="javascript:void(0);">Academics</a>
                                                <ul className="sub-menu">
                                                    <li><a href="javascript:void(0);">Courses at a glance </a></li>
                                                    <li><a href="javascript:void(0);">Fee Structure </a></li>
                                                    <li className="menu-item-has-children">
                                                        <a href="javascript:void(0);">Teachers</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="newslist.html">Professor</a></li>
                                                            <li><a href="newsgrid.html">Associate Professor</a></li>
                                                            <li><a href="newsgridsidebar.html">Assistant Professor </a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="javascript:void(0);">Regulations and Guidelines </a></li>
                                                    <li><a href="javascript:void(0);">Download Forms </a></li>
                                                    <li><a href="javascript:void(0);">Colleges  </a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="javascript:void(0);"> Amenities & Infrastructure</a>
                                                <ul className="sub-menu">
                                                    <li><a href="javascript:void(0);">Hostels </a></li>
                                                    <li><a href="javascript:void(0);">Auditorium and Conference Halls  </a></li>
                                                    <li><a href="javascript:void(0);">Students' Day Activity Centre </a></li>
                                                    <li><a href="javascript:void(0);">Sports Facilities</a></li>
                                                    <li><a href="javascript:void(0);">Health Care Centre</a></li>
                                                    <li><a href="javascript:void(0);">Hitendranath Barua Science and Culture Park </a></li>
                                                    <li><a href="javascript:void(0);">Library </a></li>
                                                    <li><a href="javascript:void(0);">Vishranta-The Guest House </a></li>
                                                    <li><a href="javascript:void(0);">Canteens</a></li>
                                                    <li><a href="javascript:void(0);">Coaching Schemes  </a></li>
                                                    <li><a href="javascript:void(0);">Botanical Garden </a></li>
                                                    <li><a href="javascript:void(0);">Staff Quarter </a></li>
                                                    <li><a href="javascript:void(0);">Day Care Centre </a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                <div className="tg-searchbox">
                                    <a id="tg-btnsearch" className="tg-btnsearch"
                                       href="javascript:void(0);"><i className="icon-magnifier"></i></a>
                                    <form className="tg-formtheme tg-formsearch">
                                        <fieldset><input type="search" name="search"
                                                         className="form-control"
                                                         placeholder="Start Your Search Here"/>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default compose<any>()(NormalNavbars)
