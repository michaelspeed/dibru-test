import {compose} from "redux";
import * as React from "react";
import {ChoiceGroup, Panel, PanelType} from "office-ui-fabric-react";
import NormalNavbars from "./Navbars/NormalNavbars";
import MicrosoftNavbars from "./Navbars/MicrosoftNavbars";
import GoogleMatNavBar from "./Navbars/GoogleMatNavBar";


interface State {
    isOpen: boolean
    choice: string
}

function Navigation(WrappedComponent: any) {
    return compose()(class extends React.Component<{}, State> {

        public state: State

        constructor(props) {
            super(props);
            this.state = {
                isOpen: false,
                choice: 'b'
            }
        }

        render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
            return (
                <React.Fragment>
                    <div id="tg-wrapper" className="tg-wrapper">
                        <header id="tg-header" className="tg-header tg-headervtwo tg-headervthree tg-haslayout">
                            <div className="tg-topbar">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <ul className="tg-addressinfo">
                                                <li>
                                                    <i className="icon-map-marker"></i>
                                                    <address>Dibrugarh</address>
                                                </li>
                                                <li>
                                                    <i className="icon-clock"></i>
                                                    <time dateTime="2016-10-10">Mon - Sat 9:00 - 17:00</time>
                                                </li>
                                                <li>
                                                    <i className="icon-phone-handset"></i>
                                                    <span>+4 1234 567890</span>
                                                </li>
                                                <li onClick={() => this.setState({isOpen: true})}>
                                                    <span>Control</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div>
                                {this.state.choice === 'a' && <NormalNavbars/>}
                                {this.state.choice === 'b' && <MicrosoftNavbars/>}
                                {this.state.choice === 'c' && <GoogleMatNavBar/>}
                            </div>
                        </header>
                        <WrappedComponent/>
                    </div>
                    <Panel isOpen={this.state.isOpen}
                           type={PanelType.smallFixedFar}
                           onDismiss={() => this.setState({isOpen: false})}
                           headerText={'Choose Controls'}
                    >
                        <ChoiceGroup options={[
                            {
                                key: 'a',
                                text: 'Normal NavBar'
                            },
                            {
                                key: 'b',
                                text: 'Microsoft NavBar'
                            },
                            {
                                key: 'c',
                                text: 'Google Material Design NavBar'
                            },
                            {
                                key: 'd',
                                text: 'IBM Carbon Design NavBar'
                            }
                        ]}
                                     defaultSelectedKey={'a'}
                                     onChange={(ev, option) => {
                                         this.setState({choice: option!.key})
                                     }}
                                     value={this.state.choice}
                        />
                    </Panel>
                </React.Fragment>
            )
        }
    })
}

export default Navigation
