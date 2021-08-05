'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">cosmic-design documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/App.html" data-type="entity-link" >App</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppearanceService.html" data-type="entity-link" >AppearanceService</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseMenu.html" data-type="entity-link" >BaseMenu</a>
                            </li>
                            <li class="link">
                                <a href="classes/classBuilder.html" data-type="entity-link" >classBuilder</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColorRef.html" data-type="entity-link" >ColorRef</a>
                            </li>
                            <li class="link">
                                <a href="classes/Menu.html" data-type="entity-link" >Menu</a>
                            </li>
                            <li class="link">
                                <a href="classes/MenuGroupService.html" data-type="entity-link" >MenuGroupService</a>
                            </li>
                            <li class="link">
                                <a href="classes/MenuItem.html" data-type="entity-link" >MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResourceExplorer.html" data-type="entity-link" >ResourceExplorer</a>
                            </li>
                            <li class="link">
                                <a href="classes/SplitBoardController.html" data-type="entity-link" >SplitBoardController</a>
                            </li>
                            <li class="link">
                                <a href="classes/SplitBoardView.html" data-type="entity-link" >SplitBoardView</a>
                            </li>
                            <li class="link">
                                <a href="classes/SplitItemView.html" data-type="entity-link" >SplitItemView</a>
                            </li>
                            <li class="link">
                                <a href="classes/SVController.html" data-type="entity-link" >SVController</a>
                            </li>
                            <li class="link">
                                <a href="classes/View.html" data-type="entity-link" >View</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/classConfig.html" data-type="entity-link" >classConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Controller.html" data-type="entity-link" >Controller</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IComponentOptions.html" data-type="entity-link" >IComponentOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISettings.html" data-type="entity-link" >ISettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISplitBoardView.html" data-type="entity-link" >ISplitBoardView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItemConfig.html" data-type="entity-link" >MenuItemConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/stateConfig.html" data-type="entity-link" >stateConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WeightMap.html" data-type="entity-link" >WeightMap</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});