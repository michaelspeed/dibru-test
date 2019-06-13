import * as React from "react";
import {CommandBar, ICommandBarItemProps} from "office-ui-fabric-react";
import {compose} from "redux";

class MicrosoftNavbars extends React.Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <React.Fragment>
                <div className='clearfix'></div>
                <div className='container'>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="tg-navigationarea">
                                <strong className="tg-logo"><a href="index.html"><img src="assets/images/logo6.png"
                                                                                      alt="University of Education and knowledge"/></a></strong>
                                <div style={{marginTop: 40}}>
                                    <CommandBar items={NavigationConfig}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const NavigationConfig : ICommandBarItemProps[] = [
    {
        key: 'home',
        name: 'Home',
    },
    {
        key: 'about',
        name: 'About',
        iconProps: {
            iconName: 'Info'
        }
    },
    {
        key: 'adinistration',
        name: 'Administration',
        iconProps: {
            iconName: 'Backlog'
        }
    },
    {
        key: 'Schoolofstudies',
        name: 'School of Studies',
        iconProps: {
            iconName: 'SingleBookmark'
        }
    },
    {
        key: 'academics',
        name: 'Academics',
        iconProps: {
            iconName: 'SingleBookmarkSolid'
        }
    },
    {
        key: 'ainities',
        name: 'Amenities & Infrastructure'
    }
]


export default compose<any>()(MicrosoftNavbars)
