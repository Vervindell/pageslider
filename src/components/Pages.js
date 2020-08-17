import React, {Component} from 'react';
import Page from "./Page";
import PageTransitionWrap from "./PageTransitionWrap";
import PageHorizontal from "./PageHorizontal";
import PageHorizontalTransitionWrap from "./PageHorizontalTransitionWrap";

const PAGE_COUNT = 3;

class Pages extends Component {
    state = {
        activePage: 1,
        activeHorizontalPage: 3,
        touchStart: null,
        rangeValue: 100,
    }

    handleTouchStart = e => {
        this.setState({
            touchStart: e?.touches[0]?.clientY,
            touchEnd: null
        })
    }

    handleTouchEnd = e => {
        const {touchStart, activePage} = this.state;
        const touchEnd = e.changedTouches[0].clientY;
        if (touchStart > touchEnd + 15 && activePage < PAGE_COUNT) {
            this.setState({
                activePage: activePage + 1,
                touchStart: null
            })
        }

        if (touchStart + 15 < touchEnd && activePage !== 1) {
            this.setState({
                activePage: activePage - 1,
                touchStart: null
            })
        }
    };


    setPage = (number) => {
        this.setState({
            activePage: number
        })
    }


    handleRangeChange = e => {
        e.stopPropagation();
        const val = e.target.value;
        if (val >= 75) {
            this.setState({
                activeHorizontalPage: 3,
            })
        }

        if (val < 75 && val > 25) {
            this.setState({
                activeHorizontalPage: 2,
            })
        }

        if (val <= 25) {
            this.setState({
                activeHorizontalPage: 1,
            })
        }


        this.setState({
            rangeValue: val
        })

    }

    handleRangeBlur = e => {
        e.stopPropagation();
        const val = e.target.value;
        let rangeValue = 1;
        if (val < 75 && val > 25) {
            rangeValue = 50
        }
        if (val <= 25) {
            rangeValue = 1
        }
        if (val >= 75) {
            rangeValue = 100
        }
        this.setState({
            rangeValue: rangeValue
        })

    }

    render() {
        const {activePage} = this.state;

        return (
            <div className="pages">
                <PageTransitionWrap activePage={activePage}>
                    <Page
                        index={1}
                        onTouchStart={this.handleTouchStart}
                        onTouchEnd={this.handleTouchEnd}
                    >
                        <h1 className="title">Всегда ли цели терапии СД2<br/>на поверхности?</h1>
                        <div className="goal">
                            <div className="goal__item goal__item_1">
                                <span className="goal__title">Гипогликемия</span>
                                <div className="goal__pulse goal__pulse_size_md">
                                    <div className="goal__pulse-item goal__pulse-item_first"/>
                                    <div className="goal__pulse-item goal__pulse-item_second"/>
                                </div>
                            </div>
                            <div className="goal__item goal__item_2">
                                <span className="goal__title">Осложнения СД</span>
                                <div className="goal__pulse goal__pulse_size_sm">
                                    <div className="goal__pulse-item goal__pulse-item_first"/>
                                    <div className="goal__pulse-item goal__pulse-item_second"/>
                                </div>
                            </div>
                            <div className="goal__item goal__item_3">
                                <span className="goal__title">Цель по HbA1c</span>
                                <div className="goal__pulse goal__pulse_size_xl">
                                    <div className="goal__pulse-item goal__pulse-item_first"/>
                                    <div className="goal__pulse-item goal__pulse-item_second"/>
                                </div>
                            </div>
                            <div className="goal__item goal__item_4">
                                <span className="goal__title">CC риски</span>
                                <div className="goal__pulse goal__pulse_size_sm">
                                    <div className="goal__pulse-item goal__pulse-item_first"/>
                                    <div className="goal__pulse-item goal__pulse-item_second"/>
                                </div>
                            </div>
                        </div>
                    </Page>
                    <Page
                        index={2}
                        onTouchStart={this.handleTouchStart}
                        onTouchEnd={this.handleTouchEnd}
                    >
                        <div className={`${activePage === 2 ? 'active' : ''}`}>
                            <div className="title">
                                Основа терапии — <br/>патогенез СД2
                            </div>
                            <img src={require('./../img/p1.png')} className="paralax-1"/>
                            <img src={require('./../img/p2.png')} className="paralax-2"/>
                            <img src={require('./../img/p3.png')} className="paralax-3"/>
                            <img src={require('./../img/p4.png')} className="paralax-4"/>
                        </div>

                    </Page>
                    <Page
                        index={3}
                        onTouchStart={this.handleTouchStart}
                        onTouchEnd={this.handleTouchEnd}
                    >
                        <PageHorizontalTransitionWrap activeHorizontalPage={this.state.activeHorizontalPage}>
                            <PageHorizontal index={1}>
                                <div className="title">
                                    Звенья патогенеза СД2
                                </div>
                            </PageHorizontal>
                            <PageHorizontal index={2}>
                                <div className="title">
                                    Смертельный октет
                                </div>

                            </PageHorizontal>
                            <PageHorizontal index={3}>
                                <div className="title">
                                    Звенья патогенеза СД2
                                </div>
                            </PageHorizontal>
                        </PageHorizontalTransitionWrap>

                        <div className="slides-range">
                            <div className="slide-container">
                                <input type="range" min="1" max="100"
                                       className={`slider ${this.state.rangeValue === 100 ? 'active_3' : this.state.rangeValue === 1 ? 'active_1' : ''}`}
                                       value={this.state.rangeValue} onChange={this.handleRangeChange}
                                       onTouchEnd={this.handleRangeBlur}
                                       style={{backgroundSize: this.state.rangeValue + '%'}}/>
                            </div>
                            <ul>
                                <li className="point">1998</li>
                                <li className="point">2009</li>
                                <li className="point">2016</li>
                            </ul>
                        </div>

                    </Page>
                </PageTransitionWrap>


                {activePage !== 3 &&
                <div className="bottom-panel" onClick={() => this.setPage(activePage + 1)}>
                        <p>Листайте вниз</p>
                        <div className="arrow-down"/>
                        <div className="bottom-panel-bg"/>
                </div>
                }


                <div className="navbar">
                    <ul>
                        <li className={`point ${activePage === 1 ? 'active' : ''}`} onClick={() => this.setPage(1)}/>
                        <li className={`point ${activePage === 2 ? 'active' : ''}`} onClick={() => this.setPage(2)}/>
                        <li className={`point ${activePage === 3 ? 'active' : ''}`} onClick={() => this.setPage(3)}/>
                    </ul>
                </div>
            </div>
        );
    }
}


export default Pages;