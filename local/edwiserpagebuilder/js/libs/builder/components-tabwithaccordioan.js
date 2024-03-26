/* eslint-disable no-unused-vars */
/*
Copyright 2017 Ziadin Givan

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

https://github.com/givanz/Vvvebjs
*/
define('local_edwiserpagebuilder/components-tabwithaccordioan', ['local_edwiserpagebuilder/jquery', 'core/ajax'], function (jQuery, Ajax) {

    function addBlocks(blocks) {
        Vvveb.ComponentsGroup['Edwiser Tabs With Accordion'] = blocks;
        var SETTINGTITLES = {
            TITLE: 'Title',
            TITLECOLOR: 'Title color',
            DESCRIPTION: 'Description',
            DESCRIPTIONCOLOR: 'Description Color',
            IMAGE: 'Image',
            IMAEGEDESKTOP: 'Image (Desktop)',
            IMAGETAB: 'Image (Tab)',
            IMAGEMOB: 'Image (Mobile)',
            BACKGROUNDIMG: 'Background Image',
            BUTTONTEXT: 'Button text',
            LINK: 'Link',
            BUTTONBACKGROUNDCOLOR: 'Button background color',
            BUTTONBORDERCOLOR: 'Button border color',
            BUTTONTEXTCOLOR: 'Button text color',
            SHOWNAVIGATIONBUTTONS: 'Show navigation buttons',
            SHOWNAVIGATIONBULLETS: 'Show navigation bullets',
            SHOWNAVIGATIONBUTTONSDESKANDTAB: 'Show navigation buttons(Desktop and Tablet only)',
            SHOWNAVIGATIONBUTTONSDESKTOP: 'Show navigation buttons(Desktop only)',
            SHOWNAVIGATIONBULLETSMOB: 'Show navigation bullets(Mobile only)',
            AUTOPLAYSLIDES: 'Autoplay slides',
            PAUSESLIDESONHOVER: 'Pause slides on hover',
            SLIDEINTERVAL: 'Slide interval',
            SWITCHTITLE: 'Nav Title',
            TABTITLE: 'Tab Title',

        };

        // Tabhtml1 --> FAQ design only for dev purpose
        var tabhtml1 = `<section class="section-faq-design edw-tab_unqreplaceid_" title="section-faq-design"><div class="section-container"><div class="main-container"><div class="nav buttons-wrapper edw-nav-wrapper" id="v-pills-tab" role="tablist"><button class="btn-tab edw-tab-btn active" id="activates-tab" data-toggle="pill" data-target="#activates_unqreplaceid_" type="button" role="tab" aria-controls="activates" aria-selected="true"><img class="edw-nav-icon-img" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/activates.svg" alt="activates"><span class="edw-nav-tab-text">Activates</span></button><button class="btn-tab edw-tab-btn" id="guidance-tab" data-toggle="pill" data-target="#guidance_unqreplaceid_" type="button" role="tab" aria-controls="guidance" aria-selected="false"><img class="edw-nav-icon-img" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/guidance.svg" alt="guidance"><span class="edw-nav-tab-text">Guidance</span></button><button class="btn-tab edw-tab-btn" id="summary-tab" data-toggle="pill" data-target="#summary_unqreplaceid_" type="button" role="tab" aria-controls="summary" aria-selected="false"><img class="edw-nav-icon-img" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/summary.svg" alt="summary"><span class="edw-nav-tab-text">Summary</span></button><button class="btn-tab edw-tab-btn" id="policy-tab" data-toggle="pill" data-target="#policy_unqreplaceid_" type="button" role="tab" aria-controls="policy" aria-selected="false"><img class="edw-nav-icon-img" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/policy.svg" alt="policy"><span class="edw-nav-tab-text">Policy</span></button><button class="btn-tab edw-tab-btn" id="rules-tab" data-toggle="pill" data-target="#rules_unqreplaceid_" type="button" role="tab" aria-controls="rules" aria-selected="false"><img class="edw-nav-icon-img" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/rules.svg" alt="rules"><span class="edw-nav-tab-text">Rules</span></button></div><div class="tab-content edw-slider-inner-container" id="v-pills-tabContent"><div class="tab-pane edw-slider-item fade show active" id="activates_unqreplaceid_" role="tabpanel" aria-labelledby="activates-tab"><div class="accordion accordion-box" id="accordionExample"><div class="faq-card"><div class="card-heading" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><span>Safe School Environments</span><img class="expande-icon" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/expande.svg" alt="expand"> <img class="collaps-icon" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/collaps.svg" alt="collapse"></div><div id="collapseOne" class="collapse show"><div class="faq-card-body"><ul><li>Foster an atmosphere of acceptance and belonging for all<a href="#"><img src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/link-icon.svg" alt="link"></a></li><li>Implement measures to ensure physical and emotional safety.<a href="#"><img src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/link-icon.svg" alt="link"></a></li></ul></div></div></div><div class="faq-card"><div class="card-heading collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><span>Social Emotional and Behavioural Support</span><img class="expande-icon" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/expande.svg" alt="expand"> <img class="collaps-icon" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/collaps.svg" alt="collapse"></div><div id="collapseTwo" class="collapse"><div class="faq-card-body"><ul><li>Foster an atmosphere of acceptance and belonging for all<a href="#"><img src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/link-icon.svg" alt="link"></a></li><li>Foster an atmosphere of acceptance and belonging for all<a href="#"><img src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/link-icon.svg" alt="link"></a></li></ul></div></div></div><div class="faq-card"><div class="card-heading collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><span>Returning To School</span><img class="expande-icon" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/expande.svg" alt="expand"> <img class="collaps-icon" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/collaps.svg" alt="collapse"></div><div id="collapseThree" class="collapse"><div class="faq-card-body"><ul><li>Foster an atmosphere of acceptance and belonging for all<a href="#"><img src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/link-icon.svg" alt="link"></a></li><li>Foster an atmosphere of acceptance and belonging for all<a href="#"><img src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/link-icon.svg" alt="link"></a></li></ul></div></div></div><div class="faq-card"><div class="card-heading collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"><span>School annual function</span><img class="expande-icon" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/expande.svg" alt="expand"> <img class="collaps-icon" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/collaps.svg" alt="collapse"></div><div id="collapseFour" class="collapse"><div class="faq-card-body"><ul><li>Foster an atmosphere of acceptance and belonging for all<a href="#"><img src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/link-icon.svg" alt="link"></a></li><li>Foster an atmosphere of acceptance and belonging for all<a href="#"><img src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/link-icon.svg" alt="link"></a></li></ul></div></div></div></div></div><div class="tab-pane edw-slider-item fade" id="guidance_unqreplaceid_" role="tabpanel" aria-labelledby="guidance-tab"><div class="accordion accordion-box" id="accordionExample2"><div class="faq-card"><div class="card-heading" data-toggle="collapse" data-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2"><span>Safe School Environments</span><img class="expande-icon" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/expande.svg" alt="expand"> <img class="collaps-icon" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/collaps.svg" alt="collapse"></div><div id="collapseOne2" class="collapse show" ><div class="faq-card-body"><ul><li>Foster an atmosphere of acceptance and belonging for all<a href="#"><img src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/link-icon.svg" alt="link"></a></li><li>Implement measures to ensure physical and emotional safety.<a href="#"><img src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/link-icon.svg" alt="link"></a></li></ul></div></div></div></div></div><div class="tab-pane edw-slider-item fade" id="summary_unqreplaceid_" role="tabpanel" aria-labelledby="summary-tab"><div class="accordion accordion-box" id="accordionExample3"><div class="faq-card"><div class="card-heading" data-toggle="collapse" data-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3"><span>Safe School Environments</span><img class="expande-icon" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/expande.svg" alt="expand"> <img class="collaps-icon" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/collaps.svg" alt="collapse"></div><div id="collapseOne3" class="collapse show" ><div class="faq-card-body"><ul><li>Foster an atmosphere of acceptance and belonging for all<a href="#"><img src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/link-icon.svg" alt="link"></a></li><li>Implement measures to ensure physical and emotional safety.<a href="#"><img src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/link-icon.svg" alt="link"></a></li></ul></div></div></div></div></div><div class="tab-pane edw-slider-item fade" id="policy_unqreplaceid_" role="tabpanel" aria-labelledby="policy-tab"><div class="accordion accordion-box" id="accordionExample4"><div class="faq-card"><div class="card-heading" data-toggle="collapse" data-target="#collapseOne4" aria-expanded="true" aria-controls="collapseOne4"><span>Safe School Environments</span><img class="expande-icon" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/expande.svg" alt="expand"> <img class="collaps-icon" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/collaps.svg" alt="collapse"></div><div id="collapseOne4" class="collapse show" ><div class="faq-card-body"><ul><li>Foster an atmosphere of acceptance and belonging for all<a href="#"><img src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/link-icon.svg" alt="link"></a></li><li>Implement measures to ensure physical and emotional safety.<a href="#"><img src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/link-icon.svg" alt="link"></a></li></ul></div></div></div></div></div><div class="tab-pane edw-slider-item fade" id="rules_unqreplaceid_" role="tabpanel" aria-labelledby="rules-tab"><div class="accordion accordion-box" id="accordionExample5"><div class="faq-card"><div class="card-heading" data-toggle="collapse" data-target="#collapseOne5" aria-expanded="true" aria-controls="collapseOne5"><span>Safe School Environments</span><img class="expande-icon" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/expande.svg" alt="expand"> <img class="collaps-icon" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/collaps.svg" alt="collapse"></div><div id="collapseOne5" class="collapse show" ><div class="faq-card-body"><ul><li>Foster an atmosphere of acceptance and belonging for all<a href="#"><img src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/link-icon.svg" alt="link"></a></li><li>Implement measures to ensure physical and emotional safety.<a href="#"><img src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/link-icon.svg" alt="link"></a></li></ul></div></div></div></div></div></div></div></div></section>`;
        var tabcss1 = `.section-faq-design {padding: 50px 24px;background-color: #fff;}.section-faq-design .section-container {max-width: 1320px;margin: 0 auto;}.section-faq-design .main-container {display: grid;grid-template-columns: 25% calc(75% - 24px);gap: 24px;}.section-faq-design .buttons-wrapper {display: flex;flex-direction: column;align-items: top;gap: 20px;}.section-faq-design .btn-tab {display: flex;padding: 12px 20px;align-items: center;justify-content: left;gap: 10px;border: 0;cursor: pointer;background-color: #fff;color: #4C5A73;font-size: 18px;font-weight: 400;line-height: normal;}.section-faq-design .btn-tab img {max-height: 33px;}.section-faq-design .btn-tab:focus {outline: 0;}.section-faq-design .btn-tab.active {color: #9A3CDF;}.section-faq-design .btn-tab.active img {filter: invert(66%) sepia(89%) saturate(7489%) hue-rotate(261deg) brightness(91%) contrast(92%);}.section-faq-design .btn-tab:hover {background-color: #F4F0F8;color: #9A3CDF;}.section-faq-design .btn-tab:hover img {filter: invert(66%) sepia(89%) saturate(7489%) hue-rotate(261deg) brightness(91%) contrast(92%);}.section-faq-design .accordion-box {display: flex;flex-direction: column;gap: 24px;}.section-faq-design .faq-card {border: 1px solid #D5DDEA;background-color: #FFF;transition: background-color 0.3s;}.section-faq-design .card-heading {width: 100%;color: #313848;font-size: 16px;font-style: normal;font-weight: 700;line-height: 24px;padding: 20px;cursor: pointer;display: flex;justify-content: space-between;align-items: center;}.section-faq-design .collaps-icon {display: none;}.section-faq-design .faq-card:not(:has(.collapsed)) {background: #F4F0F8;border: 0;}.section-faq-design .faq-card:not(:has(.collapsed)) .collaps-icon {display: block;}.section-faq-design .faq-card:not(:has(.collapsed)) .expande-icon {display: none;}.section-faq-design .faq-card-body {padding-bottom: 20px;}.section-faq-design .faq-card-body ul {display: flex;flex-direction: column;gap: 16px;margin-left: 10px;padding: 0 20px 0px;}.section-faq-design .faq-card-body ul li {color: #4C5A73;font-size: 16px;font-weight: 400;line-height: 24px;display: flex;align-items: self-start;gap: 8px;}.section-faq-design .faq-card-body ul li img {margin-top: 3px;margin-bottom: 4px;}.section-faq-design .faq-card-body ul li::before {content: '\\2022';color: #4C5A73;font-size: 1.5em;transform: translateY(-2px);}@media screen and (max-width: 1024px) {.section-faq-design .section-container {max-width: 820px;}.section-faq-design .main-container {display: block;}.section-faq-design .buttons-wrapper {flex-direction: row;flex-wrap: wrap;gap: 20px;row-gap: 30px;}.section-faq-design .btn-tab {width: fit-content;padding: 5px 10px;}.section-faq-design .tab-content {margin-top: 24px;}}@media screen and (max-width: 767px) {.section-faq-design .section-container {max-width: 600px;}.section-faq-design .card-heading {font-size: 18px;}.section-faq-design .faq-card-body {padding-bottom: 20px;}.section-faq-design .faq-card-body ul li {font-size: 18px;}}@media screen and (max-width: 420px) {.section-faq-design .btn-tab {width: 100%;}}@media screen and (min-width: 1024px) {.edw-limitedwidth-block .section-faq-design .main-container {display: block;}.edw-limitedwidth-block .section-faq-design .buttons-wrapper {flex-direction: row;flex-wrap: wrap;gap: 20px;row-gap: 30px;}.edw-limitedwidth-block .section-faq-design .btn-tab {width: fit-content;padding: 5px 10px;}.edw-limitedwidth-block .section-faq-design .tab-content {margin-top: 24px;}}`;
        var tabjs1 = ``;
        var appendtabswitchbutton1 = `<button class="btn-tab edw-tab-btn" id="rules-tab" data-toggle="pill" data-target="#rules_unqreplaceid_" type="button" role="tab" aria-controls="rules" aria-selected="false"><img class="edw-nav-icon-img" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/rules.svg" alt="rules"><span class="edw-nav-tab-text">Rules</span></button>`;
        var appendtabnode1 = `<div class="tab-pane edw-slider-item fade" id="rules_unqreplaceid_" role="tabpanel" aria-labelledby="rules-tab"><div class="accordion  accordion-box" id="accordionExample5"><div class="faq-card"><div class="card-heading" data-toggle="collapse" data-target="#collapseOne5" aria-expanded="true" aria-controls="collapseOne5"><span>Safe School Environments</span><img class="expande-icon" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/expande.svg" alt="expand"> <img class="collaps-icon" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/collaps.svg" alt="collapse"></div><div id="collapseOne5" class="collapse show" ><div class="faq-card-body"><ul><li>Foster an atmosphere of acceptance and belonging for all<a href="#"><img src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/link-icon.svg" alt="link"></a></li><li>Implement measures to ensure physical and emotional safety.<a href="#"><img src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/link-icon.svg" alt="link"></a></li></ul></div></div></div></div></div>`;
        var appendfaq1 = `<div class="faq-card"><div class="card-heading collapsed" data-toggle="collapse" data-target="#collapseOne5" aria-expanded="false" aria-controls="collapseOne5"><span>Safe School Environments</span><img class="expande-icon" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/expande.svg" alt="expand"> <img class="collaps-icon" src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/collaps.svg" alt="collapse"></div><div id="collapseOne5" class="collapse" ><div class="faq-card-body"><ul><li>Foster an atmosphere of acceptance and belonging for all<a href="#"><img src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/link-icon.svg" alt="link"></a></li><li>Implement measures to ensure physical and emotional safety.<a href="#"><img src="${Vvveb.serverurl}/CDN/tabaccordioan1/images/icons/link-icon.svg" alt="link"></a></li></ul></div></div></div>`;
        Vvveb.Components.extend("_base", "html/tab1", {
            name: "Tab with accordion 1",
            attributes: ['data-ebpb-tab1'],
            image: "icons/tab1.png",
            classes: ['edwiser-pb-tab1'],
            html: (() => {
                return `<div title="Tab with accordion 1" class="edwiser-pb-tab1" data-vvveb-disabled-area contenteditable="false">${tabhtml1}<style>${tabcss1}</style><script>${tabjs1}</script></div>`;
            })(),
            beforeInit: function (node) {
                properties = [];
                var i = 0;
                var slideno = 0;
                var id = generateUniqueID();
                node.innerHTML = node.innerHTML.replaceAll("_unqreplaceid_", id);
                var tabswitch = getTabButtons(node);
                $(node).find(".edw-slider-item").each(function (e) {
                    i = generateUniqueID();
                    slideno++;

                    var regex = /edw-slider-item-\d+/;
                    var matchedClass = "";
                    var hasMatchingClass = $(this).filter(function () {
                        var classNames = $(this).attr('class').split(' ');
                        return classNames.some(function (className) {
                            if (regex.test(className)) {
                                matchedClass = className;
                                return true;
                            }
                            return false;
                        });
                    }).length > 0;
                    $(this).removeClass(matchedClass);
                    $(this).addClass("edw-slider-item-" + i);

                    var matchedtabswitchclass = '';
                    var switchclassregex = /edw-tab-btn-\d+/;
                    var hasMatchingSwitchClass = $(tabswitch[slideno - 1]).filter(function () {
                        var classNames = $(this).attr('class').split(' ');
                        return classNames.some(function (className) {
                            if (regex.test(className)) {
                                matchedtabswitchclass = className;
                                return true;
                            }
                            return false;
                        });
                    }).length > 0;
                    var tabid = "edw-slider-item-" + slideno;
                    $(this).attr('id', tabid);
                    $(tabswitch[slideno - 1]).attr('data-target', "#" + tabid);
                    $(tabswitch[slideno - 1]).addClass("edw-tab-btn-" + i);
                    properties.push(
                        {
                            name: "",
                            key: "slidergrouptitle" + slideno,
                            inputtype: EdwheaderInput,
                            edwclasses: "edwgroupheader edwcustomtabwithaccordiontitle",
                            data: {
                                header: "Tab " + slideno,
                                extraclass: "edwslideheading m-0 border-0",
                                type: "h5",
                                style: ""
                            }
                        },
                        {
                            name: "",
                            key: "deleteslideritem",
                            inputtype: EdwbuttonInput,
                            child: `.edw-slider-item-${i}`,
                            edwclasses: "edwslidedelbtn customtabdeletebutton",
                            data: { text: "", icon: "la-trash", extraclasses: "btn btn-outline-danger" },
                            onChange: function (node, value, input) {
                                $(node).remove();
                                $navdatatarget = "#" + $(node).attr('id');
                                $(tabswitch).each(function () {
                                    if ($(this).attr('data-target') == $navdatatarget) {
                                        $(this).remove();
                                    }
                                });
                                Vvveb.Components.render("html/tab1");
                                return node;
                            },
                        },
                        {
                            name:  `Tab title`,
                            key: "sliderdescription" + i,
                            htmlAttr: "innerHTML",
                            child: `.edw-tab-btn-${i} .edw-nav-tab-text`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                        },
                        {
                            name: `Tab icon`,
                            key: "slidernavtabimage",
                            htmlAttr: 'src',
                            inputtype: ImageInput,
                            edwclasses: "edwfilefield",
                            child: `.edw-tab-btn-${i} .edw-nav-icon-img`,

                        },

                    );
                    var count = 1 ;
                    $(this).find('.faq-card').each(function (e) {
                        var regex = /faq-card-\d+/;
                        var matchedClass = "";
                        var hasMatchingClass = $(this).filter(function () {
                            var classNames = $(this).attr('class').split(' ');
                            return classNames.some(function (className) {
                                if (regex.test(className)) {
                                    matchedClass = className;
                                    return true;
                                }
                                return false;
                            });
                        }).length > 0;
                        $(this).removeClass(matchedClass);
                        $(this).addClass("faq-card-" + count);
                        var accordionid = generateUniqueID();
                        $(this).find(`.card-heading`).attr('data-target', `#faqcardid${accordionid}`);
                        $(this).find(`.collapse`).attr('id', `faqcardid${accordionid}`);
                        properties.push(

                            {
                                name: "",
                                key: "slidergrouptitle" + count,
                                inputtype: EdwheaderInput,
                                edwclasses: "edwgroupheader accordiontabtitle accordiontabsetting",
                                data: {
                                    header: "Accordion " + count,
                                    extraclass: "edwslideheading m-0 border-0",
                                    type: "h6",
                                    style: ""
                                }
                            },
                            {
                                name: "",
                                key: "deleteslideritem",
                                inputtype: EdwbuttonInput,
                                child: `.edw-slider-item-${i} .faq-card-${count}`,
                                edwclasses: "edwslidedelbtn accordiontabsetting customaccordiondeletebutton",
                                data: { text: "", icon: "la-trash", extraclasses: "btn btn-outline-danger" },
                                onChange: function (node, value, input) {
                                    $(node).remove();
                                    Vvveb.Components.render("html/tab1");
                                    return node;
                                },
                            },
                            {
                                name: SETTINGTITLES.TITLE,
                                key: "sliderdescription" + count,
                                htmlAttr: "innerHTML",
                                child: `.edw-slider-item-${i} .faq-card-${count}  .card-heading span`,
                                inputtype: TextInput,
                                edwclasses: "edwinputfield accordiontabsetting",

                            },
                            {
                                name: `Content`,
                                key: "sliderdescription" + count,
                                htmlAttr: "innerHTML",
                                child: `.edw-slider-item-${i} .faq-card-${count} .faq-card-body`,
                                inputtype: TextareaInput,
                                edwclasses: "edwinputfield accordiontabsetting",
                                data: {
                                    rows: 40,
                                }
                            }
                        );
                        count++;
                    });
                    properties.push(
                        {
                            name: "",
                            key: "slideraddnewtab",
                            inputtype: EdwbuttonInput,
                            edwclasses: "edwnewslidebtn accordiontabaddtabbtn",
                            child: `.edw-slider-item-${i} .accordion`,
                            data: { text: "Add new accordion", icon: "la-plus", extraclasses: "btn btn-outline-primary" },
                            onChange: function (node) {
                                //render component properties again to include the new column inputs
                                $(node).append(appendfaq1);
                                Vvveb.Components.render("html/tab1");
                                return node;
                            }
                        },
                        {
                            name: "",
                            key: "slidergrouptitle",
                            inputtype: EdwheaderInput,
                            edwclasses: "edwgroupheader rowseprator",
                            data: {
                                header: "",
                                extraclass: "edwslideheading m-0 p-0",
                                type: "h5",
                                style: ""
                            }
                        },
                    );
                });

                if (!$(node).find('.edw-slider-inner-container').children('.edw-slider-item').hasClass('active')) {
                    $(node).find('.edw-slider-item').first().addClass('show active');
                }

                if (!$(node).find('.edw-nav-wrapper').children('.edw-tab-btn').hasClass('active')) {
                    $(node).find('.edw-tab-btn').first().addClass('active');
                }

                properties = removeDeleteButton(node, properties);
                this.properties = this.properties.filter(function (item) {
                    return item.key.indexOf("slider") === -1;
                });
                this.properties = properties.concat(this.properties);
                // this.properties = disableaddnewslidebutton(node,this.properties, 4);
                return node;
            },
            properties: [
                {
                    name: "",
                    key: "addNewSlide",
                    inputtype: EdwbuttonInput,
                    edwclasses: "edwnewslidebtn",
                    data: { text: "Add new tab", icon: "la-plus", extraclasses: "btn btn-outline-primary" },
                    onChange: function (node) {
                        //render component properties again to include the new column inputs
                        $(node).parent().find('.edw-slider-inner-container').append(appendtabnode1);
                        $(node).parent().find('.edw-nav-wrapper').append(appendtabswitchbutton1);
                        Vvveb.Components.render("html/tab1");
                        return node;
                    }
                },
                // {
                //     name: SETTINGTITLES.TITLE,
                //     key: "slidesectionhead",
                //     htmlAttr: "innerHTML",
                //     child: `.edw-section-heading`,
                //     inputtype: TextInput,
                //     edwclasses: "edwinputfield",
                // },
                // {
                //     name: SETTINGTITLES.DESCRIPTION,
                //     key: "slidesectiondesc",
                //     htmlAttr: "innerHTML",
                //     child: `.edw-section-desc`,
                //     inputtype: TextInput,
                //     edwclasses: "edwinputfield",
                // },
            ]
        });
    }
    function updateIndicators(node, i) {
        // carousel indicator handler
        $(node).find(".edw-carousel-indicators").empty();
        var id = $(node).find('.edw-carousel').attr('id');
        var x = 0;
        $(node).find(".edw-slider-item").each(function (e) {
            $(node).find(".edw-carousel-indicators").append(`<div class="bullet " id="bullet-index-${x}"></div>`);
            if ($(this).hasClass('active')) {
                $(node).find(`.edw-carousel-indicators #bullet-index-${x}`).addClass('active');
            }
            x++;
        });
    }
    function generateUniqueID() {
        // Get the current timestamp (milliseconds since Unix Epoch)
        var timestamp = new Date().getTime();

        // Generate a random number (0-99999)
        var randomNum = Math.floor(Math.random() * 100);

        // Concatenate the timestamp and random number to create the unique ID
        var uniqueID = timestamp + randomNum;

        return uniqueID;
    }

    function removeDeleteButton(node, properties) {
        var numberOfChildren = $(node).find(".edw-slider-item").length;
        if (numberOfChildren == 1) {
            properties = properties.map(function (item) {
                if (item.key == 'deleteslideritem') {
                    item.data['extraclasses'] = item.data['extraclasses'] + ' disabled';
                }
                return item;
            });
        }
        return properties;
    }

    function disableaddnewslidebutton(node, properties, limit) {
        var numberOfChildren = $(node).find(".edw-slider-item").length;
        if (numberOfChildren == limit) {
            properties = properties.map(function (item) {
                if (item.key == 'addNewSlide') {
                    item.data['extraclasses'] = item.data['extraclasses'] + ' disabled';
                }
                return item;
            });
        }else{
            properties = properties.map(function (item) {
                if (item.key == 'addNewSlide') {
                    item.data['extraclasses'] = item.data['extraclasses'] + ' disabled';

                    var $tempElement = $('<div>').addClass(item.data['extraclasses']);
                    // Remove the 'disabled' class using jQuery
                    $tempElement.removeClass('disabled');

                    // Get the modified string without 'disabled' class
                    item.data['extraclasses'] = $tempElement.attr('class');
                }
                return item;
            });
        }
        return properties;
    }
    function removeSettingsOnSingleSlide(node) {
        var numberOfChildren = $(node).find(".edw-slider-item").length;
        var navbuttonstatus = $(node).find('.edw-slider-navigationbutton').attr('checked');
        var navbulletstatus = $(node).find('.edw-slider-navigationbullets').attr('checked');
        if (numberOfChildren == 1) {
            if (navbuttonstatus == 'checked') {
                $(node).parent().find('.edw-control-prev').addClass('d-none');
                $(node).parent().find('.edw-control-next').addClass('d-none');
                // $(node).find('.edw-slider-navigationbutton').removeAttr('checked');
            }
            if (navbulletstatus == 'checked') {
                $(node).parent().find('.edw-carousel-indicators').addClass('d-none');
                // $(node).find('.edw-slider-navigationbullets').removeAttr('checked');
            }

        } else {
            if (navbuttonstatus == 'checked') {
                $(node).parent().find('.edw-control-prev').removeClass('d-none');
                $(node).parent().find('.edw-control-next').removeClass('d-none');
                $(node).find('.edw-slider-navigationbutton').attr('checked', 'checked');
            }
            if (navbulletstatus == 'checked') {
                $(node).parent().find('.edw-carousel-indicators').removeClass('d-none');
                $(node).find('.edw-slider-navigationbullets').attr('checked', 'checked');
            }
        }
    }
    function slideIntervalfielddisabler(node) {
        $(document).ready(function () {
            // var autoplaycheckedstatus = $(node).parent().find('.edw-slider-autoplay').attr('checked');
            var autoplaycheckedstatus = $(document).find('[name="autoplayslides"]').is(":checked");
            console.log(autoplaycheckedstatus);
            if (!autoplaycheckedstatus) {
                $(document).find('#left-panel .edwinputfield[data-key="slideinterval"] input').attr('disabled', 'disabled');
            } else {
                $(document).find('#left-panel .edwinputfield[data-key="slideinterval"] input').removeAttr('disabled');
            }
        });
    }

    function getTabButtons(node) {
        $tabbuttons = $(node).find('.edw-tab-btn');
        return $tabbuttons;
    }
    return {
        init: function () {
            var blocks = ["html/tab1"];
            addBlocks(blocks);
        }
    }

});
