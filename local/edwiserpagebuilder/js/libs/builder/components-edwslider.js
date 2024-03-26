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
define('local_edwiserpagebuilder/components-edwslider', ['local_edwiserpagebuilder/jquery', 'core/ajax'], function (jQuery, Ajax) {

    function addBlocks(blocks) {
        Vvveb.ComponentsGroup['Edwiser Sliders'] = blocks;
        var SETTINGTITLES = {
            TITLE: 'Title',
            TITLECOLOR: 'Title color',
            DESCRIPTION: 'Description',
            DESCRIPTIONTITLE: 'Description title',
            DESCRIPTIONCOLOR: 'Description color',
            DESCRIPTIONTITLECOLOR: 'Description title color',
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
            YEAR: 'Year',
            CONTENT: 'Content'
        };

        // Slider 6 --> Slider basic
        var sliderhtml6 = ` <div class="adv-slider-wrapper_unqreplaceid_ edw_adv_slider edw-adv-slider-1 overflow-hidden"> <div id="edw_slider_unqreplaceid_" class="carousel slide edw-carousel" data-ride="carousel" data-interval="3000" data-pause="hover"> <ol class="carousel-indicators edw-carousel-indicators position-absolute"> <li data-target="#edw_slider_unqreplaceid_" data-slide-to="0" class="active"></li><li data-target="#edw_slider_unqreplaceid_" data-slide-to="1" class=""></li><li data-target="#edw_slider_unqreplaceid_" data-slide-to="2" class=""></li></ol> <div class="carousel-inner edw-slider-inner-container"> <div class="carousel-item edw-slider-item active" data-url="${Vvveb.serverurl}/CDN/slidernewdesign1/sliderbgimg.png" style="background-image:url('${Vvveb.serverurl}/CDN/slidernewdesign1/sliderbgimg.png');"> <div class="carousel-caption-wrapper w-100"> <div class="carousel-caption "> <div class="carousel-text-wrapper"> <h5 class="carousel-caption-heading edw-carousel-content-heading m-0">Explore Our Diverse Education Courses</h5> <p class="carousel-caption-para edw-carousel-content-para m-0">The set of insights on the definition, structure, and composition of a website header</p></div><a href="#" class="btn btn-primary carousel-trynow-btn edw-carousel-trynow-btn d-none">Try Now</a> </div></div></div><div class="carousel-item edw-slider-item " data-url="${Vvveb.serverurl}/CDN/slidernewdesign1/sliderbgimg.png" style="background-image:url('${Vvveb.serverurl}/CDN/slidernewdesign1/sliderbgimg.png');"> <div class="carousel-caption-wrapper w-100"> <div class="carousel-caption "> <div class="carousel-text-wrapper"> <h5 class="carousel-caption-heading edw-carousel-content-heading m-0">Master New Skills Anytime, Anywhere</h5> <p class="carousel-caption-para edw-carousel-content-para m-0">Explore a wide range of subjects, from coding to cooking, and take control of your learning journey</p></div><a href="#" class="btn btn-primary carousel-trynow-btn edw-carousel-trynow-btn d-none">Try Now</a> </div></div></div><div class="carousel-item edw-slider-item " data-url="${Vvveb.serverurl}/CDN/slidernewdesign1/sliderbgimg.png" style="background-image:url('${Vvveb.serverurl}/CDN/slidernewdesign1/sliderbgimg.png');"> <div class="carousel-caption-wrapper w-100"> <div class="carousel-caption "> <div class="carousel-text-wrapper"> <h5 class="carousel-caption-heading edw-carousel-content-heading m-0">E-learning Courses Making Learning Interactive and Engaging</h5> <p class="carousel-caption-para edw-carousel-content-para m-0">Experience a new era of education with e-learning courses that prioritize interactivity and engagement.</p></div><a href="#" class="btn btn-primary carousel-trynow-btn edw-carousel-trynow-btn d-none">Try Now</a> </div></div></div></div><a class="carousel-control-prev edw-control-prev position-absolute" href="#edw_slider_unqreplaceid_" role="button" data-slide="prev"> <img width="46px" height="46px" src="${Vvveb.serverurl}/CDN/slidernewdesign1/icons/leftarrow.svg"> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next edw-control-next position-absolute" href="#edw_slider_unqreplaceid_" role="button" data-slide="next"> <img width="46px" height="46px" src="${Vvveb.serverurl}/CDN/slidernewdesign1/icons/rightarrow.svg"> <span class="sr-only">Next</span> </a> <input name="navigationbutton" class="form-check-input edw-slider-navigationbutton" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-navigationbullets" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-autoplay" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-pauseonhover" type="checkbox" checked="checked" style="display:none !important"> </div></div>`;
        var slidercss6 = `.adv-slider-wrapper_unqreplaceid_ .carousel-item {background-position: top;background-size: cover;background-repeat: no-repeat;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-heading {color: #313848;font-size: 48px;font-style: normal;font-weight: 700;line-height: 56px;letter-spacing: -2px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-para {color: #4C5A73;font-style: normal;font-weight: 400;font-size: 18px;line-height: 26px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption {position: relative;right: unset;transform: unset;padding: unset;bottom: unset;left: unset;padding: 130px 132px 154px 132px;margin: auto; z-index:1}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption .carousel-text-wrapper {display: flex;flex-direction: column;gap: 22px;margin-bottom: 40px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption .carousel-trynow-btn {min-width: 145px;text-align: center;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption .carousel-trynow-btn:hover {filter: brightness(90%);}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-wrapper {display: flex;flex-direction: column;justify-content: center;align-items: center;min-height: 489px;}.adv-slider-wrapper_unqreplaceid_ .carousel-control-next {opacity: 1;position: absolute !important;}.adv-slider-wrapper_unqreplaceid_ .carousel-control-next img:hover {filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.12));}.adv-slider-wrapper_unqreplaceid_ .carousel-control-prev {opacity: 1;position: absolute !important;}.adv-slider-wrapper_unqreplaceid_ .carousel-control-prev img:hover {filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.12));}.adv-slider-wrapper_unqreplaceid_ .carousel-indicators {position: absolute !important;margin-bottom: 85px;}.adv-slider-wrapper_unqreplaceid_ .carousel-indicators li {width: 8px;height: 8px;border-radius: 50%;background-color: #647390;margin-bottom: 0px;}.adv-slider-wrapper_unqreplaceid_ .carousel-indicators li.active {background-color: #D5DDEA;}@media (max-width: 769px) {.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-wrapper {min-height: 402px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption {padding: 43px 117px 90px 117px;}.adv-slider-wrapper_unqreplaceid_ .carousel-indicators {margin-bottom: 20px;}.adv-slider-wrapper_unqreplaceid_ .carousel-control-next {display: none;}.adv-slider-wrapper_unqreplaceid_ .carousel-control-prev {display: none;}}@media (max-width: 425px) {.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-wrapper {min-height: 374px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption {padding: 66px 23px 113px 23px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-heading {font-style: normal;font-size: 34px;font-style: normal;font-weight: 700;line-height: 42px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-indicators {margin-bottom: 66px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-para {color: #4C5A73;font-size: 18px;font-style: normal;font-weight: 400;line-height: 26px;}}`;
        var sliderjs6 = ``;
        var appendnode6 = `<div class="carousel-item edw-slider-item" data-url="${Vvveb.serverurl}/CDN/slidernewdesign6/sliderbgimg.png" style="background-image:url('${Vvveb.serverurl}/CDN/slidernewdesign6/sliderbgimg.png');"> <div class="carousel-caption-wrapper w-100"> <div class="carousel-caption "> <div class="carousel-text-wrapper"> <h5 class="carousel-caption-heading edw-carousel-content-heading m-0">Unleash Your Learning Potential</h5> <p class="carousel-caption-para edw-carousel-content-para m-0" >Edwiser School inspires a love of learning in children, encouraging creative thinking across all subjects</p></div><a href="#" class="btn btn-primary carousel-trynow-btn edw-carousel-trynow-btn d-none">Try Now</a> </div></div></div>`;
        Vvveb.Components.extend("_base", "html/slider6", {
            name: "Slider basic",
            attributes: ['data-ebpb-slider6'],
            image: "icons/slider6.svg",
            classes: ['data-ebpb-slider6'],
            html: (() => {
                return `<div title="Slider-basic" class="data-ebpb-slider6" data-vvveb-disabled-area contenteditable="false">${sliderhtml6}<style>${slidercss6}</style></div>`;
            })(),
            beforeInit: function (node) {
                properties = [];
                var i = 0;
                var slideno = 0;
                var id = generateUniqueID();
                node.innerHTML = node.innerHTML.replaceAll("_unqreplaceid_", id);
                $(node).find(".edw-slider-item").each(function (e) {
                    i = generateUniqueID();
                    slideno++;
                    var regex = /edw-carousel-item-\d+/;
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
                    $(this).addClass("edw-carousel-item-" + i);

                    properties.push(
                        {
                            name: "",
                            key: "slidergrouptitle" + slideno,
                            inputtype: EdwheaderInput,
                            edwclasses: "edwgroupheader",
                            data: {
                                header: "Slide " + slideno,
                                extraclass: "edwslideheading m-0",
                                type: "h6",
                                style: ""
                            }
                        },
                        {
                            name: "",
                            key: "deleteslideritem",
                            inputtype: EdwbuttonInput,
                            child: `.edw-carousel-item-${i}`,
                            edwclasses: "edwslidedelbtn",
                            data: { text: "", icon: "la-trash", extraclasses: "btn btn-outline-danger" },
                            onChange: function (node, value, input) {
                                $(node).remove();
                                Vvveb.Components.render("html/slider6");
                                return node;
                            },
                        },
                        {
                            name: SETTINGTITLES.TITLE,
                            key: "slidertitle" + i,
                            htmlAttr: "innerHTML",
                            child: `.edw-carousel-item-${i} .edw-carousel-content-heading`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                            onChange: function (node, value, input) {
                                if (value == "") {
                                    $(node).hide();
                                } else {
                                    $(node).show().text(value);
                                }
                            }
                        },
                        {
                            name: SETTINGTITLES.TITLECOLOR,
                            key: "color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i} .edw-carousel-content-heading`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-content-heading').css('color', value);
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.DESCRIPTION,
                            key: "sliderdescription" + i,
                            htmlAttr: "innerHTML",
                            child: `.edw-carousel-item-${i} .edw-carousel-content-para`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                            onChange: function (node, value, input) {
                                if (value == "") {
                                    $(node).hide();
                                } else {
                                    $(node).show().text(value);
                                }
                            }
                        },
                        {
                            name: SETTINGTITLES.DESCRIPTIONCOLOR,
                            key: "color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i}  .edw-carousel-content-para`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-content-para').css('color', value);
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.IMAGE,
                            key: "sliderimage" + i,
                            htmlAttr: 'data-url',
                            inputtype: ImageInput,
                            edwclasses: "edwfilefield",
                            child: `.edw-carousel-item-${i}`,
                            onChange: function (node, value, input) {
                                $(node).parent().find(this.child).css("background-image", "url(" + value + ")");
                                return node;
                            }
                        },
                    );
                });

                properties = removeDeleteButton(node, properties);
                removeSettingsOnSingleSlide(node);
                if (!$(node).find('.edw-slider-inner-container').children('.edw-slider-item').hasClass('active')) {
                    $(node).find('.edw-slider-item').first().addClass('active');
                }
                removeDuplicateIndicators(node, i);

                //remove all option properties
                this.properties = this.properties.filter(function (item) {
                    return item.key.indexOf("slider") === -1;
                });
                //remove all option properties
                this.properties = this.properties.filter(function (item) {
                    return item.key.indexOf("color") === -1;
                });
                this.properties = properties.concat(this.properties);
                slideIntervalfielddisabler(node);
                return node;
            },
            properties: [
                {
                    name: "",
                    key: "addNewSlide",
                    inputtype: EdwbuttonInput,
                    edwclasses: "edwnewslidebtn",
                    data: { text: "Add new slide", icon: "la-plus", extraclasses: "btn btn-outline-primary" },
                    onChange: function (node) {
                        //render component properties again to include the new column inputs
                        $(node).parent().find('.carousel-inner').append(appendnode6);
                        Vvveb.Components.render("html/slider6");

                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.SHOWNAVIGATIONBUTTONS,
                    key: "navigationbutton",
                    htmlAttr: "checked",
                    col: 12,
                    inline: true,
                    inputtype: CheckboxInput,
                    edwclasses: "edwcheckfield",
                    child: '.edw-slider-navigationbutton',
                    onChange: function (node, value, input) {
                        if (value == true) {
                            $(node).parent().find('.edw-control-prev').removeClass('d-none');
                            $(node).parent().find('.edw-control-next').removeClass('d-none');
                        } else {
                            $(node).parent().find('.edw-control-prev').addClass('d-none');
                            $(node).parent().find('.edw-control-next').addClass('d-none');
                        }
                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.SHOWNAVIGATIONBULLETS,
                    key: "navigationbullets",
                    htmlAttr: "checked",
                    col: 12,
                    inline: true,
                    inputtype: CheckboxInput,
                    edwclasses: "edwcheckfield",
                    child: '.edw-slider-navigationbullets',
                    onChange: function (node, value, input) {
                        if (value == true) {
                            $(node).parent().find('.edw-carousel-indicators').removeClass('d-none');
                        } else {
                            $(node).parent().find('.edw-carousel-indicators').addClass('d-none');
                        }
                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.AUTOPLAYSLIDES,
                    key: "autoplayslides",
                    htmlAttr: "checked",
                    col: 12,
                    inline: true,
                    inputtype: CheckboxInput,
                    edwclasses: "edwcheckfield",
                    child: '.edw-slider-autoplay',
                    onChange: function (node, value, input) {
                        var slideintervalfield = $(input).closest('section').find('[data-key="slideinterval"]');
                        if (value == true) {
                            $(node).parent().attr('data-ride', 'carousel');
                            $(node).parent().attr('data-interval', '3000');
                            slideintervalfield.find('input[name="slideinterval"]').val('3000');
                        } else {
                            $(node).parent().removeAttr('data-ride');
                            $(node).parent().attr('data-interval', '0');
                            slideintervalfield.find('input[name="slideinterval"]').val('0');
                        }
                        slideIntervalfielddisabler(node);
                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.PAUSESLIDESONHOVER,
                    key: "pauseslides",
                    htmlAttr: "checked",
                    col: 12,
                    inline: true,
                    inputtype: CheckboxInput,
                    edwclasses: "edwcheckfield",
                    child: '.edw-slider-pauseonhover',
                    onChange: function (node, value, input) {
                        if (value == true) {
                            $(node).parent().attr('data-pause', 'hover');
                        } else {
                            $(node).parent().attr('data-pause', 'false');
                        }
                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.SLIDEINTERVAL,
                    key: "slideinterval",
                    htmlAttr: "data-interval",
                    inputtype: TextInput,
                    edwclasses: "edwinputfield",
                    child: `.carousel`,
                }
            ]
        });

        // Slider 1 --> Slider with CTA
        var sliderhtml1 = ` <div class="adv-slider-wrapper_unqreplaceid_ edw_adv_slider edw-adv-slider-1 overflow-hidden"> <div id="edw_slider_unqreplaceid_" class="carousel slide edw-carousel" data-ride="carousel" data-interval="3000" data-pause="hover"> <ol class="carousel-indicators edw-carousel-indicators position-absolute"> <li data-target="#edw_slider_unqreplaceid_" data-slide-to="0" class="active"></li><li data-target="#edw_slider_unqreplaceid_" data-slide-to="1" class=""></li><li data-target="#edw_slider_unqreplaceid_" data-slide-to="2" class=""></li></ol> <div class="carousel-inner edw-slider-inner-container"> <div class="carousel-item edw-slider-item active" data-url="${Vvveb.serverurl}/CDN/slidernewdesign1/sliderbgimg.png" style="background-image:url('${Vvveb.serverurl}/CDN/slidernewdesign1/sliderbgimg.png');"> <div class="carousel-caption-wrapper w-100"> <div class="carousel-caption "> <div class="carousel-text-wrapper"> <h5 class="carousel-caption-heading edw-carousel-content-heading m-0">Explore Our Diverse Education Courses</h5> <p class="carousel-caption-para edw-carousel-content-para m-0">The set of insights on the definition, structure, and composition of a website header</p></div><a href="#" class="btn btn-primary carousel-trynow-btn edw-carousel-trynow-btn">Try Now</a> </div></div></div><div class="carousel-item edw-slider-item " data-url="${Vvveb.serverurl}/CDN/slidernewdesign1/sliderbgimg.png" style="background-image:url('${Vvveb.serverurl}/CDN/slidernewdesign1/sliderbgimg.png');"> <div class="carousel-caption-wrapper w-100"> <div class="carousel-caption "> <div class="carousel-text-wrapper"> <h5 class="carousel-caption-heading edw-carousel-content-heading m-0">Master New Skills Anytime, Anywhere</h5> <p class="carousel-caption-para edw-carousel-content-para m-0">Explore a wide range of subjects, from coding to cooking, and take control of your learning journey</p></div><a href="#" class="btn btn-primary carousel-trynow-btn edw-carousel-trynow-btn">Try Now</a> </div></div></div><div class="carousel-item edw-slider-item " data-url="${Vvveb.serverurl}/CDN/slidernewdesign1/sliderbgimg.png" style="background-image:url('${Vvveb.serverurl}/CDN/slidernewdesign1/sliderbgimg.png');"> <div class="carousel-caption-wrapper w-100"> <div class="carousel-caption "> <div class="carousel-text-wrapper"> <h5 class="carousel-caption-heading edw-carousel-content-heading m-0">E-learning Courses Making Learning Interactive and Engaging</h5> <p class="carousel-caption-para edw-carousel-content-para m-0">Experience a new era of education with e-learning courses that prioritize interactivity and engagement.</p></div><a href="#" class="btn btn-primary carousel-trynow-btn edw-carousel-trynow-btn">Try Now</a> </div></div></div></div><a class="carousel-control-prev edw-control-prev position-absolute" href="#edw_slider_unqreplaceid_" role="button" data-slide="prev"> <img width="46px" height="46px" src="${Vvveb.serverurl}/CDN/slidernewdesign1/icons/leftarrow.svg"> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next edw-control-next position-absolute" href="#edw_slider_unqreplaceid_" role="button" data-slide="next"> <img width="46px" height="46px" src="${Vvveb.serverurl}/CDN/slidernewdesign1/icons/rightarrow.svg"> <span class="sr-only">Next</span> </a> <input name="navigationbutton" class="form-check-input edw-slider-navigationbutton" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-navigationbullets" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-autoplay" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-pauseonhover" type="checkbox" checked="checked" style="display:none !important"> </div></div>`;
        var slidercss1 = `.adv-slider-wrapper_unqreplaceid_ .carousel-item {background-position: top;background-size: cover;background-repeat: no-repeat;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-heading {color: #313848;font-size: 48px;font-style: normal;font-weight: 700;line-height: 56px;letter-spacing: -2px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-para {color: #4C5A73;font-style: normal;font-weight: 400;font-size: 18px;line-height: 26px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption {position: relative;right: unset;transform: unset;padding: unset;bottom: unset;left: unset;padding: 130px 132px 154px 132px;margin: auto;z-index:1;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption .carousel-text-wrapper {display: flex;flex-direction: column;gap: 22px;margin-bottom: 40px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption .carousel-trynow-btn {min-width: 145px;text-align: center;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption .carousel-trynow-btn:hover {filter: brightness(90%);}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-wrapper {display: flex;flex-direction: column;justify-content: center;align-items: center;min-height: 489px;}.adv-slider-wrapper_unqreplaceid_ .carousel-control-next {opacity: 1;position: absolute !important;}.adv-slider-wrapper_unqreplaceid_ .carousel-control-next img:hover {filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.12));}.adv-slider-wrapper_unqreplaceid_ .carousel-control-prev {opacity: 1;position: absolute !important;}.adv-slider-wrapper_unqreplaceid_ .carousel-control-prev img:hover {filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.12));}.adv-slider-wrapper_unqreplaceid_ .carousel-indicators {position: absolute !important;margin-bottom: 85px;}.adv-slider-wrapper_unqreplaceid_ .carousel-indicators li {width: 8px;height: 8px;border-radius: 50%;background-color: #647390;margin-bottom: 0px;}.adv-slider-wrapper_unqreplaceid_ .carousel-indicators li.active {background-color: #D5DDEA;}@media (max-width: 769px) {.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-wrapper {min-height: 402px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption {padding: 43px 117px 90px 117px;}.adv-slider-wrapper_unqreplaceid_ .carousel-indicators {margin-bottom: 20px;}.adv-slider-wrapper_unqreplaceid_ .carousel-control-next {display: none;}.adv-slider-wrapper_unqreplaceid_ .carousel-control-prev {display: none;}}@media (max-width: 425px) {.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-wrapper {min-height: 374px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption {padding: 66px 23px 113px 23px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-heading {font-style: normal;font-size: 34px;font-style: normal;font-weight: 700;line-height: 42px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-indicators {margin-bottom: 66px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-para {color: #4C5A73;font-size: 18px;font-style: normal;font-weight: 400;line-height: 26px;}}`;
        var sliderjs1 = ``;
        var appendnode1 = `<div class="carousel-item edw-slider-item" data-url="${Vvveb.serverurl}/CDN/slidernewdesign1/sliderbgimg.png" style="background-image:url('${Vvveb.serverurl}/CDN/slidernewdesign1/sliderbgimg.png');"> <div class="carousel-caption-wrapper w-100"> <div class="carousel-caption "> <div class="carousel-text-wrapper"> <h5 class="carousel-caption-heading edw-carousel-content-heading m-0">Explore Our Diverse Education Courses</h5> <p class="carousel-caption-para edw-carousel-content-para m-0" >The set of insights on the definition, structure, and composition of a website header</p></div><a href="#" class="btn btn-primary carousel-trynow-btn edw-carousel-trynow-btn">Try Now</a> </div></div></div>`;
        Vvveb.Components.extend("_base", "html/slider1", {
            name: "Slider with CTA",
            attributes: ['data-ebpb-slider1'],
            image: "icons/slider1.svg",
            classes: ['edwiser-pb-slider1'],
            html: (() => {
                return `<div title="Slider-with-CTA" class="edwiser-pb-slider1" data-vvveb-disabled-area contenteditable="false">${sliderhtml1}<style>${slidercss1}</style></div>`;
            })(),
            beforeInit: function (node) {
                properties = [];
                var i = 0;
                var slideno = 0;
                var id = generateUniqueID();
                node.innerHTML = node.innerHTML.replaceAll("_unqreplaceid_", id);
                $(node).find(".edw-slider-item").each(function (e) {
                    i = generateUniqueID();
                    slideno++;
                    var regex = /edw-carousel-item-\d+/;
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
                    $(this).addClass("edw-carousel-item-" + i);
                    properties.push(
                        {
                            name: "",
                            key: "slidergrouptitle" + slideno,
                            inputtype: EdwheaderInput,
                            edwclasses: "edwgroupheader",
                            data: {
                                header: "Slide " + slideno,
                                extraclass: "edwslideheading m-0",
                                type: "h6",
                                style: ""
                            }
                        },
                        {
                            name: "",
                            key: "deleteslideritem",
                            inputtype: EdwbuttonInput,
                            child: `.edw-carousel-item-${i}`,
                            edwclasses: "edwslidedelbtn",
                            data: { text: "", icon: "la-trash", extraclasses: "btn btn-outline-danger" },
                            onChange: function (node, value, input) {
                                $(node).remove();
                                Vvveb.Components.render("html/slider1");
                                return node;
                            },
                        },
                        {
                            name: SETTINGTITLES.TITLE,
                            key: "slidertitle" + i,
                            htmlAttr: "innerHTML",
                            child: `.edw-carousel-item-${i} .edw-carousel-content-heading`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                            onChange: function (node, value, input) {
                                if (value == "") {
                                    $(node).hide();
                                } else {
                                    $(node).show().text(value);
                                }
                            }
                        },
                        {
                            name: SETTINGTITLES.TITLECOLOR,
                            key: "color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i} .edw-carousel-content-heading`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-content-heading').css('color', value);
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.DESCRIPTION,
                            key: "sliderdescription" + i,
                            htmlAttr: "innerHTML",
                            child: `.edw-carousel-item-${i} .edw-carousel-content-para`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                            onChange: function (node, value, input) {
                                if (value == "") {
                                    $(node).hide();
                                } else {
                                    $(node).show().text(value);
                                }
                            }
                        },
                        {
                            name: SETTINGTITLES.DESCRIPTIONCOLOR,
                            key: "color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i}  .edw-carousel-content-para`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-content-para').css('color', value);
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.BUTTONTEXT,
                            key: "sliderbuttontext" + i,
                            htmlAttr: "innerHTML",
                            child: `.edw-carousel-item-${i} .edw-carousel-trynow-btn`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                            onChange: function (node, value, input) {
                                if (value == "") {
                                    $(node).hide();
                                } else {
                                    $(node).show().text(value);
                                }
                            }
                        },
                        {
                            name: SETTINGTITLES.LINK,
                            key: "sliderlink" + i,
                            htmlAttr: "href",
                            child: `.edw-carousel-item-${i} .edw-carousel-trynow-btn`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                        },
                        {
                            name: SETTINGTITLES.IMAGE,
                            key: "sliderimage" + i,
                            htmlAttr: 'data-url',
                            inputtype: ImageInput,
                            edwclasses: "edwfilefield",
                            child: `.edw-carousel-item-${i}`,
                            onChange: function (node, value, input) {
                                $(node).parent().find(this.child).css("background-image", "url(" + value + ")");
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.BUTTONBACKGROUNDCOLOR,
                            key: "background-color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i} .edw-carousel-trynow-btn`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-trynow-btn').css('background', value);
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.BUTTONBORDERCOLOR,
                            key: "border-color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i} .edw-carousel-trynow-btn`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-trynow-btn').css('border-color', value);
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.BUTTONTEXTCOLOR,
                            key: "color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i} .edw-carousel-trynow-btn`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-trynow-btn').css('color', value);
                                return node;
                            }
                        }

                    );
                });
                properties = removeDeleteButton(node, properties);
                removeSettingsOnSingleSlide(node);
                if (!$(node).find('.edw-slider-inner-container').children('.edw-slider-item').hasClass('active')) {
                    $(node).find('.edw-slider-item').first().addClass('active');
                }
                removeDuplicateIndicators(node, i);
                //remove all option properties
                this.properties = this.properties.filter(function (item) {
                    return item.key.indexOf("slider") === -1;
                });
                //remove all option properties
                this.properties = this.properties.filter(function (item) {
                    return item.key.indexOf("color") === -1;
                });
                this.properties = properties.concat(this.properties);
                slideIntervalfielddisabler(node);
                return node;
            },
            properties: [
                {
                    name: "",
                    key: "addNewSlide",
                    inputtype: EdwbuttonInput,
                    edwclasses: "edwnewslidebtn",
                    data: { text: "Add new slide", icon: "la-plus", extraclasses: "btn btn-outline-primary" },
                    onChange: function (node) {
                        //render component properties again to include the new column inputs
                        $(node).parent().find('.carousel-inner').append(appendnode1);
                        Vvveb.Components.render("html/slider1");

                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.SHOWNAVIGATIONBUTTONS,
                    key: "navigationbutton",
                    htmlAttr: "checked",
                    col: 12,
                    inline: true,
                    inputtype: CheckboxInput,
                    edwclasses: "edwcheckfield",
                    child: '.edw-slider-navigationbutton',
                    onChange: function (node, value, input) {
                        if (value == true) {
                            $(node).parent().find('.edw-control-prev').removeClass('d-none');
                            $(node).parent().find('.edw-control-next').removeClass('d-none');
                        } else {
                            $(node).parent().find('.edw-control-prev').addClass('d-none');
                            $(node).parent().find('.edw-control-next').addClass('d-none');
                        }
                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.SHOWNAVIGATIONBULLETS,
                    key: "navigationbullets",
                    htmlAttr: "checked",
                    col: 12,
                    inline: true,
                    inputtype: CheckboxInput,
                    edwclasses: "edwcheckfield",
                    child: '.edw-slider-navigationbullets',
                    onChange: function (node, value, input) {
                        if (value == true) {
                            $(node).parent().find('.edw-carousel-indicators').removeClass('d-none');
                        } else {
                            $(node).parent().find('.edw-carousel-indicators').addClass('d-none');
                        }
                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.AUTOPLAYSLIDES,
                    key: "autoplayslides",
                    htmlAttr: "checked",
                    col: 12,
                    inline: true,
                    inputtype: CheckboxInput,
                    edwclasses: "edwcheckfield",
                    child: '.edw-slider-autoplay',
                    onChange: function (node, value, input) {
                        var slideintervalfield = $(input).closest('section').find('[data-key="slideinterval"]');
                        if (value == true) {
                            $(node).parent().attr('data-ride', 'carousel');
                            $(node).parent().attr('data-interval', '3000');
                            slideintervalfield.find('input[name="slideinterval"]').val('3000');
                        } else {
                            $(node).parent().removeAttr('data-ride');
                            $(node).parent().attr('data-interval', '0');
                            slideintervalfield.find('input[name="slideinterval"]').val('0');
                        }
                        slideIntervalfielddisabler(node);
                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.PAUSESLIDESONHOVER,
                    key: "pauseslides",
                    htmlAttr: "checked",
                    col: 12,
                    inline: true,
                    inputtype: CheckboxInput,
                    edwclasses: "edwcheckfield",
                    child: '.edw-slider-pauseonhover',
                    onChange: function (node, value, input) {
                        if (value == true) {
                            $(node).parent().attr('data-pause', 'hover');
                        } else {
                            $(node).parent().attr('data-pause', 'false');
                        }
                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.SLIDEINTERVAL,
                    key: "slideinterval",
                    htmlAttr: "data-interval",
                    inputtype: TextInput,
                    edwclasses: "edwinputfield",
                    child: `.carousel`,
                }
            ]
        });


        // Slider 7 --> Slider with controls 1
        var sliderhtml7 = ` <div class="adv-slider-wrapper_unqreplaceid_ edw_adv_slider edw-adv-slider-7 overflow-hidden"> <div id="edw_slider_unqreplaceid_" class="carousel slide edw-carousel" data-ride="carousel" data-interval="3000" data-pause="hover"> <ol class="carousel-indicators edw-carousel-indicators position-absolute"> <li data-target="#edw_slider_unqreplaceid_" data-slide-to="0" class="active"></li><li data-target="#edw_slider_unqreplaceid_" data-slide-to="1" class=""></li><li data-target="#edw_slider_unqreplaceid_" data-slide-to="2" class=""></li></ol> <div class="carousel-inner edw-slider-inner-container"> <div class="carousel-item edw-slider-item active"> <div class="carousel-caption-wrapper w-100"> <div class="carousel-caption "> <div class="carousel-text-wrapper"> <h5 class="carousel-caption-heading edw-carousel-content-heading m-0">Your Path to Educational Excellence</h5> <p class="carousel-caption-para edw-carousel-content-para m-0">Edwiser School inspires a love of learning in children, encouraging creative thinking across all subjects. </p></div><a href="#" class="btn btn-primary carousel-trynow-btn edw-carousel-trynow-btn ">Enroll Now</a> </div></div><div class="bg-desktop-img position-absolute" data-url='${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school1.png' style="background-image:url('${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school1.png');"> </div><div class="bg-tab-img position-absolute" data-url='${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school2tab.png' style="background-image:url('${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school1tab.png');"> </div><div class="bg-mob-img position-absolute" data-url='${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school2mob.png' style="background-image:url('${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school1mob.png');"> </div><div class="bg-overlay position-absolute"></div></div><div class="carousel-item edw-slider-item "> <div class="carousel-caption-wrapper w-100"> <div class="carousel-caption "> <div class="carousel-text-wrapper"> <h5 class="carousel-caption-heading edw-carousel-content-heading m-0">EDUCATING LEADERS OF CHARACTER</h5> <p class="carousel-caption-para edw-carousel-content-para m-0">Edwiser School inspires a love of learning in children, encouraging creative thinking across all subjects. </p></div><a href="#" class="btn btn-primary carousel-trynow-btn edw-carousel-trynow-btn ">Enroll Now</a> </div></div><div class="bg-desktop-img position-absolute" data-url='${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school2.png' style="background-image:url('${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school2.png');"> </div><div class="bg-tab-img position-absolute" data-url='${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school2tab.png' style="background-image:url('${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school2tab.png');"> </div><div class="bg-mob-img position-absolute" data-url='${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school2mob.png' style="background-image:url('${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school2mob.png');"> </div><div class="bg-overlay position-absolute"></div></div><div class="carousel-item edw-slider-item "> <div class="carousel-caption-wrapper w-100"> <div class="carousel-caption "> <div class="carousel-text-wrapper"> <h5 class="carousel-caption-heading edw-carousel-content-heading m-0">Elevate Your Learning with Us</h5> <p class="carousel-caption-para edw-carousel-content-para m-0">Edwiser School inspires a love of learning in children, encouraging creative thinking across all subjects. </p></div><a href="#" class="btn btn-primary carousel-trynow-btn edw-carousel-trynow-btn ">Enroll Now</a> </div></div><div class="bg-desktop-img position-absolute" data-url='${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school3.png' style="background-image:url('${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school3.png');"> </div><div class="bg-tab-img position-absolute" data-url='${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school2tab.png' style="background-image:url('${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school3tab.png');"> </div><div class="bg-mob-img position-absolute" data-url='${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school2mob.png' style="background-image:url('${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school3mob.png');"> </div><div class="bg-overlay position-absolute"></div></div></div><div class="carousel-button-wrapper"> <a class="carousel-control-prev edw-control-prev" href="#edw_slider_unqreplaceid_" role="button" data-slide="prev"> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next edw-control-next" href="#edw_slider_unqreplaceid_" role="button" data-slide="next"> <span class="sr-only">Next</span> </a> </div></div><input name="navigationbutton" class="form-check-input edw-slider-navigationbutton" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-navigationbullets" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-autoplay" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-pauseonhover" type="checkbox" checked="checked" style="display:none !important"> </div>`;
        var slidercss7 = `.adv-slider-wrapper_unqreplaceid_ .carousel-item {position: relative;padding-bottom: 140px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .bg-mob-img {display: none;left: 0px;top: 0px;width: 100%;height: 100%;background-position: top !important;background-size: cover !important;background-repeat: no-repeat !important;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .bg-tab-img {display: none;left: 0px;top: 0px;width: 100%;height: 100%;background-position: top !important;background-size: cover !important;background-repeat: no-repeat !important;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .bg-desktop-img {left: 0px;top: 0px;width: 100%;height: 100%;background-position: top !important;background-size: cover !important;background-repeat: no-repeat !important;display: flex;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .bg-overlay {left: 0px;top: 0px;width: 100%;height: 100%;background: linear-gradient(90deg, #0D2122 0%, rgba(13, 33, 34, 0.1) 59.01%);}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-heading {color: #FFF;font-size: 70px;font-style: normal;font-weight: bold;line-height: 85px;letter-spacing: 1.4px;text-transform: uppercase;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-para {color: #FFF;font-size: 22px;font-style: normal;font-weight: 400;line-height: 30px;width: 70%;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-wrapper {display: flex;flex-direction: column;justify-content: center;align-items: center;min-height: 618px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption {position: relative;right: unset;transform: unset;padding: unset;bottom: unset;left: unset;width: 100%;max-width: 900px;text-align: left;margin-right: auto;padding: 62px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption .carousel-text-wrapper {display: flex;flex-direction: column;gap: 22px;margin-bottom: 40px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption .carousel-trynow-btn {background: #9A3CDF;color: #FFFFFF;font-style: normal;font-weight: 400;font-size: 18px;line-height: 22px;box-sizing: border-box;padding: 15px 38px;border: 1px solid #9A3CDF;border-radius: 0;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption .carousel-trynow-btn:hover {filter: brightness(90%);}.adv-slider-wrapper_unqreplaceid_ .carousel-button-wrapper {position: absolute !important;display: flex;bottom: 0px;width: 100%;justify-content: center;gap: 30px;padding-bottom: 30px;}.adv-slider-wrapper_unqreplaceid_ .carousel-control-next {opacity: 1;position: relative;width: 60px;height: 60px;background-position: top !important;background-size: cover !important;background-repeat: no-repeat !important;background-image: url("${Vvveb.serverurl}/CDN/slidernewdesign7/icons/rightarrow.svg");}.adv-slider-wrapper_unqreplaceid_ .carousel-control-next:hover {background-image: url("${Vvveb.serverurl}/CDN/slidernewdesign7/icons/activestaterightarrow.svg");}.adv-slider-wrapper_unqreplaceid_ .carousel-control-prev {opacity: 1;position: relative;width: 60px;height: 60px;background-position: top !important;background-size: cover !important;background-repeat: no-repeat !important;background-image: url("${Vvveb.serverurl}/CDN/slidernewdesign7/icons/leftarrow.svg");}.adv-slider-wrapper_unqreplaceid_ .carousel-control-prev:hover {background-image: url("${Vvveb.serverurl}/CDN/slidernewdesign7/icons/activestateleftarrow.svg");}.adv-slider-wrapper_unqreplaceid_ .carousel-indicators {margin-bottom: 70px;}.adv-slider-wrapper_unqreplaceid_ .carousel-indicators li {width: 8px;height: 8px;border-radius: 50%;background-color: #D9D9D9;margin-bottom: 0px;display: none;}.adv-slider-wrapper_unqreplaceid_ .carousel-indicators li.active {background-color: #9A3CDF;}@media (max-width: 769px) {.adv-slider-wrapper_unqreplaceid_ .carousel-item {min-height: 500px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .bg-desktop-img {display: none;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .bg-mob-img {display: none;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .bg-tab-img {display: flex;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-wrapper {align-items: start;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption {margin: unset;max-width: 70%;width: 100%;padding: 0px 24px 0px 24px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-heading {font-size: 50px;line-height: 60px;letter-spacing: 1px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-para {color: #FFF;font-size: 18px;font-style: normal;font-weight: 400;line-height: 22px;}.adv-slider-wrapper_unqreplaceid_ .carousel-button-wrapper {padding-bottom: unset;}}@media (max-width: 425px) {.adv-slider-wrapper_unqreplaceid_ .carousel-item {min-height: 756px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .bg-desktop-img {display: none;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .bg-tab-img {display: none;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .bg-mob-img {display: flex;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .bg-overlay {background: linear-gradient(360deg, #0D2122 0%, rgba(13, 33, 34, 0) 100%);}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-wrapper {justify-content: flex-end;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption {text-align: center;max-width: 100%;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-heading {font-size: 38px;line-height: 50px;letter-spacing: 0.76px;}.adv-slider-wrapper_unqreplaceid_ .carousel-item .carousel-caption-para {font-size: 20px;font-style: normal;font-weight: 400;line-height: 35px;width: 100%;}.adv-slider-wrapper_unqreplaceid_ .carousel-indicators li {display: block;}.adv-slider-wrapper_unqreplaceid_ .carousel-button-wrapper {display: none;}}`;
        var sliderjs7 = ``;
        var appendnode7 = ` <div class="carousel-item edw-slider-item "> <div class="carousel-caption-wrapper w-100"> <div class="carousel-caption "> <div class="carousel-text-wrapper"> <h5 class="carousel-caption-heading edw-carousel-content-heading m-0">EDUCATING LEADERS OF CHARACTER</h5> <p class="carousel-caption-para edw-carousel-content-para m-0">Edwiser School inspires a love of learning in children, encouraging creative thinking across all subjects. </p></div><a href="#" class="btn btn-primary carousel-trynow-btn edw-carousel-trynow-btn ">Enroll Now</a> </div></div><div class="bg-desktop-img position-absolute" data-url='${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school2.png' style="background-image:url('${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school2.png');"></div><div class="bg-tab-img position-absolute" data-url='${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school2tab.png' style="background-image:url('${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school2tab.png');"></div><div class="bg-mob-img position-absolute" data-url='${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school2mob.png' style="background-image:url('${Vvveb.serverurl}/CDN/slidernewdesign7/slideimages/school2mob.png');"></div><div class="bg-overlay position-absolute"></div></div>`;
        Vvveb.Components.extend("_base", "html/slider7", {
            name: "Slider with controls 1",
            attributes: ['data-ebpb-slider7'],
            image: "icons/slider7.svg",
            classes: ['edwiser-pb-slider7'],
            html: (() => {
                return `<div title="Slider-with-controls-1" class="edwiser-pb-slider7" data-vvveb-disabled-area contenteditable="false">${sliderhtml7}<style>${slidercss7}</style></div>`;
            })(),
            beforeInit: function (node) {
                properties = [];
                var i = 0;
                var slideno = 0;
                var id = generateUniqueID();
                node.innerHTML = node.innerHTML.replaceAll("_unqreplaceid_", id);
                $(node).find(".edw-slider-item").each(function (e) {
                    i = generateUniqueID();
                    slideno++;
                    var regex = /edw-carousel-item-\d+/;
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
                    $(this).addClass("edw-carousel-item-" + i);

                    properties.push(
                        {
                            name: "",
                            key: "slidergrouptitle" + slideno,
                            inputtype: EdwheaderInput,
                            edwclasses: "edwgroupheader",
                            data: {
                                header: "Slide " + slideno,
                                extraclass: "edwslideheading m-0",
                                type: "h6",
                                style: ""
                            }
                        },
                        {
                            name: "",
                            key: "deleteslideritem",
                            inputtype: EdwbuttonInput,
                            child: `.edw-carousel-item-${i}`,
                            edwclasses: "edwslidedelbtn",
                            data: { text: "", icon: "la-trash", extraclasses: "btn btn-outline-danger" },
                            onChange: function (node, value, input) {
                                $(node).remove();
                                Vvveb.Components.render("html/slider7");
                                return node;
                            },
                        },
                        {
                            name: SETTINGTITLES.TITLE,
                            key: "slidertitle" + i,
                            htmlAttr: "innerHTML",
                            child: `.edw-carousel-item-${i} .edw-carousel-content-heading`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                            onChange: function (node, value, input) {
                                if (value == "") {
                                    $(node).hide();
                                } else {
                                    $(node).show().text(value);
                                }
                            }
                        },
                        {
                            name: SETTINGTITLES.TITLECOLOR,
                            key: "color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i} .edw-carousel-content-heading`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-content-heading').css('color', value);
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.DESCRIPTION,
                            key: "sliderdescription" + i,
                            htmlAttr: "innerHTML",
                            child: `.edw-carousel-item-${i} .edw-carousel-content-para`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                            onChange: function (node, value, input) {
                                if (value == "") {
                                    $(node).hide();
                                } else {
                                    $(node).show().text(value);
                                }
                            }
                        },
                        {
                            name: SETTINGTITLES.DESCRIPTIONCOLOR,
                            key: "color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i}  .edw-carousel-content-para`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-content-para').css('color', value);
                            }
                        },
                        {
                            name: SETTINGTITLES.BUTTONTEXT,
                            key: "sliderbuttontext" + i,
                            htmlAttr: "innerHTML",
                            child: `.edw-carousel-item-${i} .edw-carousel-trynow-btn`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                            onChange: function (node, value, input) {
                                if (value == "") {
                                    $(node).hide();
                                } else {
                                    $(node).show().text(value);
                                }
                            }
                        },
                        {
                            name: SETTINGTITLES.LINK,
                            key: "sliderlink" + i,
                            htmlAttr: "href",
                            child: `.edw-carousel-item-${i} .edw-carousel-trynow-btn`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                        },
                        {
                            name: SETTINGTITLES.BUTTONBACKGROUNDCOLOR,
                            key: "background-color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i} .edw-carousel-trynow-btn`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-trynow-btn').css('background', value);
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.BUTTONBORDERCOLOR,
                            key: "border-color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i} .edw-carousel-trynow-btn`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-trynow-btn').css('border-color', value);
                                return node;
                            }

                        },
                        {
                            name: SETTINGTITLES.BUTTONTEXTCOLOR,
                            key: "color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i} .edw-carousel-trynow-btn`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-trynow-btn').css('color', value);
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.IMAEGEDESKTOP,
                            key: "sliderimage" + i,
                            htmlAttr: 'data-url',
                            inputtype: ImageInput,
                            edwclasses: "edwfilefield",
                            child: `.edw-carousel-item-${i} .bg-desktop-img`,
                            onChange: function (node, value, input) {
                                $(node).css("background-image", "url(" + value + ")");
                                console.log($(node).parent());
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.IMAGETAB,
                            key: "sliderimage" + i,
                            htmlAttr: 'data-url',
                            inputtype: ImageInput,
                            edwclasses: "edwfilefield",
                            child: `.edw-carousel-item-${i} .bg-tab-img`,
                            onChange: function (node, value, input) {
                                $(node).css("background-image", "url(" + value + ")");
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.IMAGEMOB,
                            key: "sliderimage" + i,
                            htmlAttr: 'data-url',
                            inputtype: ImageInput,
                            edwclasses: "edwfilefield",
                            child: `.edw-carousel-item-${i} .bg-mob-img`,
                            onChange: function (node, value, input) {
                                $(node).css("background-image", "url(" + value + ")");
                                return node;
                            }
                        }
                    );
                });
                properties = removeDeleteButton(node, properties);
                removeSettingsOnSingleSlide(node);
                if (!$(node).find('.edw-slider-inner-container').children('.edw-slider-item').hasClass('active')) {
                    $(node).find('.edw-slider-item').first().addClass('active');
                }
                removeDuplicateIndicators(node, i);

                //remove all option properties
                this.properties = this.properties.filter(function (item) {
                    return item.key.indexOf("slider") === -1;
                });
                //remove all option properties
                this.properties = this.properties.filter(function (item) {
                    return item.key.indexOf("color") === -1;
                });
                this.properties = properties.concat(this.properties);
                slideIntervalfielddisabler(node);
                return node;
            },
            properties: [
                {
                    name: "",
                    key: "addNewSlide",
                    inputtype: EdwbuttonInput,
                    edwclasses: "edwnewslidebtn",
                    data: { text: "Add new slide", icon: "la-plus", extraclasses: "btn btn-outline-primary" },
                    onChange: function (node) {
                        //render component properties again to include the new column inputs
                        $(node).parent().find('.carousel-inner').append(appendnode7);
                        Vvveb.Components.render("html/slider7");

                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.SHOWNAVIGATIONBUTTONSDESKANDTAB,
                    key: "navigationbutton",
                    htmlAttr: "checked",
                    col: 12,
                    inline: true,
                    inputtype: CheckboxInput,
                    edwclasses: "edwcheckfield",
                    child: '.edw-slider-navigationbutton',
                    onChange: function (node, value, input) {
                        if (value == true) {
                            $(node).parent().find('.edw-control-prev').removeClass('d-none');
                            $(node).parent().find('.edw-control-next').removeClass('d-none');
                        } else {
                            $(node).parent().find('.edw-control-prev').addClass('d-none');
                            $(node).parent().find('.edw-control-next').addClass('d-none');
                        }
                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.SHOWNAVIGATIONBULLETSMOB,
                    key: "navigationbullets",
                    htmlAttr: "checked",
                    col: 12,
                    inline: true,
                    inputtype: CheckboxInput,
                    edwclasses: "edwcheckfield",
                    child: '.edw-slider-navigationbullets',
                    onChange: function (node, value, input) {
                        if (value == true) {
                            $(node).parent().find('.edw-carousel-indicators').removeClass('d-none');
                        } else {
                            $(node).parent().find('.edw-carousel-indicators').addClass('d-none');
                        }
                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.AUTOPLAYSLIDES,
                    key: "autoplayslides",
                    htmlAttr: "checked",
                    col: 12,
                    inline: true,
                    inputtype: CheckboxInput,
                    edwclasses: "edwcheckfield",
                    child: '.edw-slider-autoplay',
                    onChange: function (node, value, input) {
                        var slideintervalfield = $(input).closest('section').find('[data-key="slideinterval"]');
                        if (value == true) {
                            $(node).parent().find('.edw-carousel').attr('data-ride', 'carousel');
                            $(node).parent().find('.edw-carousel').attr('data-interval', '3000');
                            slideintervalfield.find('input[name="slideinterval"]').val('3000');
                        } else {
                            $(node).parent().find('.edw-carousel').removeAttr('data-ride');
                            $(node).parent().find('.edw-carousel').attr('data-interval', '0');
                            slideintervalfield.find('input[name="slideinterval"]').val('0');
                        }
                        slideIntervalfielddisabler(node);
                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.PAUSESLIDESONHOVER,
                    key: "pauseslides",
                    htmlAttr: "checked",
                    col: 12,
                    inline: true,
                    inputtype: CheckboxInput,
                    edwclasses: "edwcheckfield",
                    child: '.edw-slider-pauseonhover',
                    onChange: function (node, value, input) {
                        if (value == true) {
                            $(node).parent().find('.edw-carousel').attr('data-pause', 'hover');
                        } else {
                            $(node).parent().find('.edw-carousel').attr('data-pause', 'false');
                        }
                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.SLIDEINTERVAL,
                    key: "slideinterval",
                    htmlAttr: "data-interval",
                    inputtype: TextInput,
                    edwclasses: "edwinputfield",
                    child: `.carousel`,
                }
            ]
        });

        // Slider 8 --> Slider with controls 2
        var sliderhtml8 = ` <div class="header-design-slider_unqreplaceid_ edw_adv_slider edw-adv-slider-8 overflow-hidden"> <div class="html-section-body container-fluid bg-white "> <div id="edw_slider_unqreplaceid_" class="carousel slide edw-carousel" data-ride="carousel" data-interval="3000" data-pause="hover"> <ol class="carousel-indicators edw-carousel-indicators position-absolute"> <li data-target="#edw_slider_unqreplaceid_" data-slide-to="0" class="active"></li><li data-target="#edw_slider_unqreplaceid_" data-slide-to="1" class=""></li><li data-target="#edw_slider_unqreplaceid_" data-slide-to="2" class=""></li></ol> <div class="carousel-inner edw-slider-inner-container"> <div class="carousel-item edw-slider-item active"> <div class="row carousel-item-wrapper"> <div class="col-sm slider-sec-1 p-0"> <img class="header-slider-bg-image" src="https://staticcdn.edwiser.org/demo/university2/headersliderbgimgtopleft.png" alt="slider image pattern "> <img class="header-slider-bg-image-bottom-left position-absolute" src="https://staticcdn.edwiser.org/demo/university2/headersliderbgimgtopleft.png" alt="slider image pattern "> <div class="slider-content-wrapper"> <div class="slider-content"> <div class="slider-content-heading edw-carousel-content-heading"> LET’S DESIGN YOUR FUTURE! </div><p class="slider-content-para edw-carousel-content-para m-0">Edwiser School inspires a love of learning in children, encouraging creative thinking across all subjects.</p></div><a href="#" class="btn btn-primary trynowbutton edw-carousel-trynow-btn">Explore Academics</a> </div></div><div class="col-sm slider-sec-2 p-0"> <img class="header-slider-image" src="${Vvveb.serverurl}/CDN/slidernewdesign8/slideimages/universityimg1.png" alt="slider image 1"> </div></div></div><div class="carousel-item edw-slider-item "> <div class="row carousel-item-wrapper"> <div class="col-sm slider-sec-1"> <img class="header-slider-bg-image position-absolute" src="https://staticcdn.edwiser.org/demo/university2/headersliderbgimgtopleft.png" alt="slider image pattern "> <img class="header-slider-bg-image-bottom-left position-absolute" src="https://staticcdn.edwiser.org/demo/university2/headersliderbgimgtopleft.png" alt="slider image pattern "> <div class="slider-content-wrapper"> <div class="slider-content"> <div class="slider-content-heading edw-carousel-content-heading"> Shaping Leaders of Tomorrow </div><p class="slider-content-para edw-carousel-content-para m-0">Edwiser School inspires a love of learning in children, encouraging creative thinking across all subjects.</p></div><a href="#" class="btn btn-primary trynowbutton edw-carousel-trynow-btn">Explore Academics</a> </div></div><div class="col-sm slider-sec-2 "> <img class="header-slider-image " src="${Vvveb.serverurl}/CDN/slidernewdesign8/slideimages/universityimg2.png" alt="slider image 1"> </div></div></div><div class="carousel-item edw-slider-item "> <div class="row carousel-item-wrapper"> <div class="col-sm slider-sec-1"> <img class="header-slider-bg-image position-absolute" src="https://staticcdn.edwiser.org/demo/university2/headersliderbgimgtopleft.png" alt="slider image pattern "> <img class="header-slider-bg-image-bottom-left position-absolute" src="https://staticcdn.edwiser.org/demo/university2/headersliderbgimgtopleft.png" alt="slider image pattern "> <div class="slider-content-wrapper"> <div class="slider-content"> <div class="slider-content-heading edw-carousel-content-heading"> Education for a Bright Future </div><p class="slider-content-para edw-carousel-content-para m-0">Edwiser School inspires a love of learning in children, encouraging creative thinking across all subjects.</p></div><a href="#" class="btn btn-primary trynowbutton edw-carousel-trynow-btn">Explore Academics</a> </div></div><div class="col-sm slider-sec-2 "> <img class="header-slider-image" src="${Vvveb.serverurl}/CDN/slidernewdesign8/slideimages/universityimg3.png" alt="slider image 1"> </div></div></div></div><a class="carousel-control-prev edw-control-prev position-absolute" href="#edw_slider_unqreplaceid_" role="button" data-slide="prev"> <span class="fa fa-angle-left slider-nav-icons" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next edw-control-next position-absolute" href="#edw_slider_unqreplaceid_" role="button" data-slide="next"> <span class="fa fa-angle-right slider-nav-icons" aria-hidden="true"></span> <span class="sr-only">Next</span> </a> <input name="navigationbutton" class="form-check-input edw-slider-navigationbutton" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-navigationbullets" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-autoplay" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-pauseonhover" type="checkbox" checked="checked" style="display:none !important"> </div></div></div>`;
        var slidercss8 = `.header-design-slider_unqreplaceid_ .html-section-body {background: #ffff;padding: 0px;}.header-design-slider_unqreplaceid_ .html-section-body .carousel-inner {padding: 50px 0px;}.header-design-slider_unqreplaceid_ .carousel-indicators {position: absolute !important;}.header-design-slider_unqreplaceid_ .carousel-indicators [data-target="#edw_slider_unqreplaceid_"] {background: #D9D9D9;width: 8px;height: 8px;border-radius: 50%;border: unset;}.header-design-slider_unqreplaceid_ .carousel-indicators .active {background: #3E86F5;}.header-design-slider_unqreplaceid_ .carousel-item-wrapper {padding: 0 10%;}.header-design-slider_unqreplaceid_ .slider-content-heading {font-size: 55px;font-style: normal;font-weight: 700;line-height: 70px;color: #313848;}.header-design-slider_unqreplaceid_ .slider-content-para {font-size: 20px;font-style: normal;font-weight: 400;line-height: 30px;color: #4C5A73;}.header-design-slider_unqreplaceid_ .slider-content-wrapper {display: flex;flex-direction: column;gap: 45px;z-index: 1;}.header-design-slider_unqreplaceid_ .slider-content {display: flex;flex-direction: column;gap: 16px;}.header-design-slider_unqreplaceid_ .slider-sec-1 {padding: unset;display: flex;align-items: center;position: relative;}.header-design-slider_unqreplaceid_ .slider-sec-2 {padding: unset;display: flex;justify-content: center;align-items: center;}.header-design-slider_unqreplaceid_ .trynowbutton {width: fit-content;padding: 14px 34px;font-size: 20px;font-style: normal;font-weight: 400;line-height: 22px;background-color: #0934BA;}.header-design-slider_unqreplaceid_ .trynowbutton:hover {filter: brightness(90%);}.header-design-slider_unqreplaceid_ .header-slider-image {width: 100%;height: auto;}.header-design-slider_unqreplaceid_ .header-slider-bg-image {position: absolute;max-width: 106px;width: 100%;top: 0px;left: 0px;}.header-design-slider_unqreplaceid_ .header-slider-bg-image-bottom-left {position: absolute;max-width: 182px;width: 100%;bottom: 0px;left: 0px;}.header-design-slider_unqreplaceid_ .carousel-control-prev {opacity: 1;width: 8%;position: absolute !important;}.header-design-slider_unqreplaceid_ .carousel-control-next {opacity: 1;width: 8%;position: absolute !important;}.header-design-slider_unqreplaceid_ .slider-nav-icons {display: flex;justify-content: center;align-items: center;color: #0934BA;font-size: 30px;height: 57px;width: 57px;border-radius: 50%;border: 2px solid #0934BA;background-color: white;}.header-design-slider_unqreplaceid_ .slider-nav-icons:hover {background-color: #0934BA;color: white;}@media (max-width: 768px) {.header-design-slider_unqreplaceid_ .carousel-item-wrapper {margin: unset;padding-left: 24px;padding-right: 24px;}.carousel-control-prev {display: none;}.carousel-control-next {display: none;}}@media (max-width: 576px) {.header-design-slider_unqreplaceid_ .html-section-body {padding: 24px;padding-bottom: 60px;}.header-design-slider_unqreplaceid_ .html-section-body .carousel-inner {padding: 0px 0px;}.header-design-slider_unqreplaceid_ .header-slider-bg-image {max-width: 92px;}.header-design-slider_unqreplaceid_ .slider-sec-1 {padding-left: unset;}.header-design-slider_unqreplaceid_ .slider-sec-2 {padding: 0px 15px;}.header-design-slider_unqreplaceid_ .carousel-item-wrapper {padding: unset;gap: 38px;}.header-design-slider_unqreplaceid_ .carousel-item-wrapper.row {margin: unset;}.header-design-slider_unqreplaceid_ .slider-content-wrapper {align-items: center;gap: 30px;}.header-design-slider_unqreplaceid_ .slider-content-heading {font-size: 45px;line-height: 50px;text-align: center;}.header-design-slider_unqreplaceid_ .slider-content-para {font-size: 20px;text-align: center;}.header-design-slider_unqreplaceid_ .slider-content {gap: 32px;}.header-design-slider_unqreplaceid_ .carousel-indicators {bottom: -40px;}.header-design-slider_unqreplaceid_ .header-slider-bg-image-bottom-left {display: none;}}`;
        var sliderjs8 = ``;
        var appendnode8 = ` <div class="carousel-item edw-slider-item"> <div class="row carousel-item-wrapper"> <div class="col-sm slider-sec-1"> <img class="header-slider-bg-image position-absolute" src="https://staticcdn.edwiser.org/demo/university2/headersliderbgimgtopleft.png" alt="slider image pattern "> <img class="header-slider-bg-image-bottom-left position-absolute" src="https://staticcdn.edwiser.org/demo/university2/headersliderbgimgtopleft.png" alt="slider image pattern "> <div class="slider-content-wrapper"> <div class="slider-content"> <div class="slider-content-heading edw-carousel-content-heading"> LET’S DESIGN YOUR FUTURE! </div><p class="slider-content-para edw-carousel-content-para m-0">Edwiser School inspires a love of learning in children, encouraging creative thinking across all subjects.</p></div><a href="#" class="btn btn-primary trynowbutton edw-carousel-trynow-btn">Explore Academics</a> </div></div><div class="col-sm slider-sec-2 "> <img class="header-slider-image" src="${Vvveb.serverurl}/CDN/slidernewdesign8/slideimages/universityimg1.png" alt="slider image 1"> </div></div></div>`;
        Vvveb.Components.extend("_base", "html/slider8", {
            name: "Slider with controls 2",
            attributes: ['data-ebpb-slider8'],
            image: "icons/slider8.svg",
            classes: ['edwiser-pb-slider8'],
            html: (() => {
                return `<div title="Slider-with-controls-2" class="edwiser-pb-slider8" data-vvveb-disabled-area contenteditable="false">${sliderhtml8}<style>${slidercss8}</style></div>`;
            })(),
            beforeInit: function (node) {
                properties = [];
                var i = 0;
                var slideno = 0;
                var id = generateUniqueID();
                node.innerHTML = node.innerHTML.replaceAll("_unqreplaceid_", id);
                $(node).find(".edw-slider-item").each(function (e) {
                    i = generateUniqueID();
                    slideno++;
                    var regex = /edw-carousel-item-\d+/;
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
                    $(this).addClass("edw-carousel-item-" + i);

                    properties.push(
                        {
                            name: "",
                            key: "slidergrouptitle" + slideno,
                            inputtype: EdwheaderInput,
                            edwclasses: "edwgroupheader",
                            data: {
                                header: "Slide " + slideno,
                                extraclass: "edwslideheading m-0",
                                type: "h6",
                                style: ""
                            }
                        },
                        {
                            name: "",
                            key: "deleteslideritem",
                            inputtype: EdwbuttonInput,
                            child: `.edw-carousel-item-${i}`,
                            edwclasses: "edwslidedelbtn",
                            data: { text: "", icon: "la-trash", extraclasses: "btn btn-outline-danger" },
                            onChange: function (node, value, input) {
                                $(node).remove();
                                Vvveb.Components.render("html/slider8");
                                return node;
                            },
                        },
                        {
                            name: SETTINGTITLES.TITLE,
                            key: "slidertitle" + i,
                            htmlAttr: "innerHTML",
                            child: `.edw-carousel-item-${i} .edw-carousel-content-heading`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                            onChange: function (node, value, input) {
                                if (value == "") {
                                    $(node).hide();
                                } else {
                                    $(node).show().text(value);
                                }
                            }
                        },
                        {
                            name: SETTINGTITLES.TITLECOLOR,
                            key: "color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i} .edw-carousel-content-heading`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-content-heading').css('color', value);
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.DESCRIPTION,
                            key: "sliderdescription" + i,
                            htmlAttr: "innerHTML",
                            child: `.edw-carousel-item-${i} .edw-carousel-content-para`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                            onChange: function (node, value, input) {
                                if (value == "") {
                                    $(node).hide();
                                } else {
                                    $(node).show().text(value);
                                }
                            }
                        },
                        {
                            name: SETTINGTITLES.DESCRIPTIONCOLOR,
                            key: "color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i}  .edw-carousel-content-para`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-content-para').css('color', value);
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.BUTTONTEXT,
                            key: "sliderbuttontext" + i,
                            htmlAttr: "innerHTML",
                            child: `.edw-carousel-item-${i} .edw-carousel-trynow-btn`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                            onChange: function (node, value, input) {
                                if (value == "") {
                                    $(node).hide();
                                } else {
                                    $(node).show().text(value);
                                }
                            }
                        },
                        {
                            name: SETTINGTITLES.LINK,
                            key: "sliderlink" + i,
                            htmlAttr: "href",
                            child: `.edw-carousel-item-${i} .edw-carousel-trynow-btn`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                        },
                        {
                            name: SETTINGTITLES.BUTTONBACKGROUNDCOLOR,
                            key: "background-color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i} .edw-carousel-trynow-btn`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-trynow-btn').css('background', value);
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.BUTTONBORDERCOLOR,
                            key: "border-color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i} .edw-carousel-trynow-btn`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-trynow-btn').css('border-color', value);
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.BUTTONTEXTCOLOR,
                            key: "color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i} .edw-carousel-trynow-btn`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-trynow-btn').css('color', value);
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.IMAGE,
                            key: "sliderimage" + i,
                            htmlAttr: 'src',
                            inputtype: ImageInput,
                            edwclasses: "edwinputfield",
                            child: `.edw-carousel-item-${i} .header-slider-image`
                        }
                    );
                });
                properties = removeDeleteButton(node, properties);
                removeSettingsOnSingleSlide(node);
                if (!$(node).find('.edw-slider-inner-container').children('.edw-slider-item').hasClass('active')) {
                    $(node).find('.edw-slider-item').first().addClass('active');
                }
                removeDuplicateIndicators(node, i);
                //remove all option properties
                this.properties = this.properties.filter(function (item) {
                    return item.key.indexOf("slider") === -1;
                });
                //remove all option properties
                this.properties = this.properties.filter(function (item) {
                    return item.key.indexOf("color") === -1;
                });
                this.properties = properties.concat(this.properties);
                slideIntervalfielddisabler(node);
                return node;
            },
            properties: [
                {
                    name: "",
                    key: "addNewSlide",
                    inputtype: EdwbuttonInput,
                    edwclasses: "edwnewslidebtn",
                    data: { text: "Add new slide", icon: "la-plus", extraclasses: "btn btn-outline-primary" },
                    onChange: function (node) {
                        //render component properties again to include the new column inputs
                        $(node).parent().find('.carousel-inner').append(appendnode8);
                        Vvveb.Components.render("html/slider8");

                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.SHOWNAVIGATIONBUTTONSDESKTOP,
                    key: "navigationbutton",
                    htmlAttr: "checked",
                    col: 12,
                    inline: true,
                    inputtype: CheckboxInput,
                    edwclasses: "edwcheckfield",
                    child: '.edw-slider-navigationbutton',
                    onChange: function (node, value, input) {
                        if (value == true) {
                            $(node).parent().find('.edw-control-prev').removeClass('d-none');
                            $(node).parent().find('.edw-control-next').removeClass('d-none');
                        } else {
                            $(node).parent().find('.edw-control-prev').addClass('d-none');
                            $(node).parent().find('.edw-control-next').addClass('d-none');
                        }
                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.SHOWNAVIGATIONBULLETS,
                    key: "navigationbullets",
                    htmlAttr: "checked",
                    col: 12,
                    inline: true,
                    inputtype: CheckboxInput,
                    edwclasses: "edwcheckfield",
                    child: '.edw-slider-navigationbullets',
                    onChange: function (node, value, input) {
                        if (value == true) {
                            $(node).parent().find('.edw-carousel-indicators').removeClass('d-none');
                        } else {
                            $(node).parent().find('.edw-carousel-indicators').addClass('d-none');
                        }
                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.AUTOPLAYSLIDES,
                    key: "autoplayslides",
                    htmlAttr: "checked",
                    col: 12,
                    inline: true,
                    inputtype: CheckboxInput,
                    edwclasses: "edwcheckfield",
                    child: '.edw-slider-autoplay',
                    onChange: function (node, value, input) {
                        var slideintervalfield = $(input).closest('section').find('[data-key="slideinterval"]');
                        if (value == true) {
                            $(node).parent().attr('data-ride', 'carousel');
                            $(node).parent().attr('data-interval', '3000');
                            slideintervalfield.find('input[name="slideinterval"]').val('3000');
                        } else {
                            $(node).parent().removeAttr('data-ride');
                            $(node).parent().attr('data-interval', '0');
                            slideintervalfield.find('input[name="slideinterval"]').val('0');
                        }
                        slideIntervalfielddisabler(node);
                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.PAUSESLIDESONHOVER,
                    key: "pauseslides",
                    htmlAttr: "checked",
                    col: 12,
                    inline: true,
                    inputtype: CheckboxInput,
                    edwclasses: "edwcheckfield",
                    child: '.edw-slider-pauseonhover',
                    onChange: function (node, value, input) {
                        if (value == true) {
                            $(node).parent().attr('data-pause', 'hover');
                        } else {
                            $(node).parent().attr('data-pause', 'false');
                        }
                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.SLIDEINTERVAL,
                    key: "slideinterval",
                    htmlAttr: "data-interval",
                    inputtype: TextInput,
                    edwclasses: "edwinputfield",
                    child: `.carousel`,
                }
            ]
        });

        // Slider 9  --> Slider with controls 3
        var sliderhtml9 = ` <div class="header-design-slider_unqreplaceid_ edw_adv_slider edw-adv-slider-9"> <div class="html-section-body container-fluid"> <div id="edw_slider_unqreplaceid_" class="carousel slide edw-carousel" data-ride="carousel" data-interval="3000" data-pause="hover"> <ol class="carousel-indicators edw-carousel-indicators position-absolute"> <li data-target="#edw_slider_unqreplaceid_" data-slide-to="0" class="active"></li><li data-target="#edw_slider_unqreplaceid_" data-slide-to="1" class=""></li><li data-target="#edw_slider_unqreplaceid_" data-slide-to="2" class=""></li></ol> <div class="carousel-inner edw-slider-inner-container"> <div class="carousel-item edw-slider-item active"> <div class="row carousel-item-wrapper"> <div class="col-sm slider-sec-1"> <img class="header-slider-bg-image position-absolute" src="https://staticcdn.edwiser.org/demo/classic2/sliderbgpattern.png" alt="slider image pattern "> <div class="slider-content-wrapper"> <div class="slider-content"> <div class="slider-content-heading edw-carousel-content-heading"> design your dream homepage, in a Snap! </div><p class="slider-content-para edw-carousel-content-para m-0">First-of-its-kind, Edwiser RemUI Homepage Builder to design your dream homepage, in a Snap!</p></div><a href="#" class="btn btn-primary trynowbutton edw-carousel-trynow-btn">Try Now</a> </div></div><div class="col-sm slider-sec-2 "> <img class="header-slider-image" src="${Vvveb.serverurl}/CDN/slidernewdesign9/slideimages/classicimg2.png" alt="slider image 1"> </div></div></div><div class="carousel-item edw-slider-item"> <div class="row carousel-item-wrapper"> <div class="col-sm slider-sec-1"> <img class="header-slider-bg-image position-absolute" src="https://staticcdn.edwiser.org/demo/classic2/sliderbgpattern.png" alt="slider image pattern "> <div class="slider-content-wrapper"> <div class="slider-content"> <div class="slider-content-heading edw-carousel-content-heading"> Everything you need to build a home page, all in one place. </div><p class="slider-content-para edw-carousel-content-para m-0">First-of-its-kind, Edwiser RemUI Homepage Builder to design your dream homepage, in a Snap!</p></div><a href="#" class="btn btn-primary trynowbutton edw-carousel-trynow-btn">Try Now</a> </div></div><div class="col-sm slider-sec-2 "> <img class="header-slider-image" src="${Vvveb.serverurl}/CDN/slidernewdesign9/slideimages/classicimg1.png" alt="slider image 1"> </div></div></div><div class="carousel-item edw-slider-item "> <div class="row carousel-item-wrapper"> <div class="col-sm slider-sec-1"> <img class="header-slider-bg-image position-absolute" src="https://staticcdn.edwiser.org/demo/classic2/sliderbgpattern.png" alt="slider image pattern "> <div class="slider-content-wrapper"> <div class="slider-content"> <div class="slider-content-heading edw-carousel-content-heading"> Home Page builder that gives you design superpowers. </div><p class="slider-content-para edw-carousel-content-para m-0">First-of-its-kind, Edwiser RemUI Homepage Builder to design your dream homepage, in a Snap!</p></div><a href="#" class="btn btn-primary trynowbutton edw-carousel-trynow-btn">Try Now</a> </div></div><div class="col-sm slider-sec-2 "> <img class="header-slider-image" src="${Vvveb.serverurl}/CDN/slidernewdesign9/slideimages/classicimg3.png" alt="slider image 1"> </div></div></div></div><a class="carousel-control-prev edw-control-prev position-absolute" href="#edw_slider_unqreplaceid_" role="button" data-slide="prev"> <span class="fa fa-angle-left slider-nav-icons" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next edw-control-next position-absolute" href="#edw_slider_unqreplaceid_" role="button" data-slide="next"> <span class="fa fa-angle-right slider-nav-icons" aria-hidden="true"></span> <span class="sr-only">Next</span> </a> <input name="navigationbutton" class="form-check-input edw-slider-navigationbutton" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-navigationbullets" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-autoplay" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-pauseonhover" type="checkbox" checked="checked" style="display:none !important"> </div></div></div>`;
        var slidercss9 = `.header-design-slider_unqreplaceid_ .html-section-body {background: #ffff;padding: 0px;}.header-design-slider_unqreplaceid_ .fa-angle-left:before {color: #3E86F5;font-size: 30px;}.header-design-slider_unqreplaceid_ .fa-angle-right:before {color: #3E86F5;font-size: 30px;}.header-design-slider_unqreplaceid_ .slider-content-heading {font-size: 45px;font-style: normal;font-weight: 700;line-height: 55px;letter-spacing: 0.9px;text-transform: capitalize;color: #313848;}.header-design-slider_unqreplaceid_ .slider-content-para {font-size: 18px;font-style: normal;font-weight: 400;line-height: 30px;letter-spacing: 0.36px;text-transform: capitalize;color: #4C5A73;}.header-design-slider_unqreplaceid_ .slider-content-wrapper {display: flex;flex-direction: column;gap: 45px;padding: 40px 0px;z-index: 1;}.header-design-slider_unqreplaceid_ .slider-content {display: flex;flex-direction: column;gap: 16px;}.header-design-slider_unqreplaceid_ .carousel-indicators {position: absolute !important;display: flex;}.header-design-slider_unqreplaceid_ .carousel-indicators [data-target="#edw_slider_unqreplaceid_"] {background: #D9D9D9;width: 8px;height: 8px;border-radius: 50%;border: unset;}.header-design-slider_unqreplaceid_ .carousel-indicators .active {background: #3E86F5;}.header-design-slider_unqreplaceid_ .slider-sec-1 {padding: unset;display: flex;align-items: center;position: relative;padding-left: 10%;}.header-design-slider_unqreplaceid_ .slider-sec-2 {padding: unset;display: flex;align-items: center;}.header-design-slider_unqreplaceid_ .trynowbutton {width: fit-content;font-size: 18px;font-style: normal;font-weight: 400;line-height: 22px;}.header-design-slider_unqreplaceid_ .trynowbutton:hover {filter: brightness(90%);}.header-design-slider_unqreplaceid_ .header-slider-image {width: 100%;height: auto;}.header-design-slider_unqreplaceid_ .header-slider-bg-image {position: absolute;max-width: 388px;width: 100%;top: 0px;left: 0px;}.header-design-slider_unqreplaceid_ .carousel-control-prev {left: 3%;top: 50%;opacity: 1;color: #3E86F5;position: absolute !important;height: 45px;width: 45px;transform: translate(0px, -50%);}.header-design-slider_unqreplaceid_ .carousel-control-prev:hover {color: #0051F9;}.header-design-slider_unqreplaceid_ .carousel-control-prev:hover .fa-angle-left:before {color: #0051F9;}.header-design-slider_unqreplaceid_ .carousel-control-prev:hover .fa-angle-right:before {color: #0051F9;}.header-design-slider_unqreplaceid_ .carousel-control-next {right: 3%;top: 50%;opacity: 1;color: #3E86F5;position: absolute !important;height: 45px;width: 45px;transform: translate(0px, -50%);}.header-design-slider_unqreplaceid_ .carousel-control-next:hover {color: #0051F9;}.header-design-slider_unqreplaceid_ .carousel-control-next:hover .fa-angle-left:before {color: #0051F9;}.header-design-slider_unqreplaceid_ .carousel-control-next:hover .fa-angle-right:before {color: #0051F9;}@media (max-width: 768px) {.header-design-slider_unqreplaceid_ .carousel-control-prev {display: none;}.header-design-slider_unqreplaceid_ .carousel-control-next {display: none;}.header-design-slider_unqreplaceid_ .slider-sec-1 {padding: 0px;}.header-design-slider_unqreplaceid_ .carousel-item-wrapper {margin-left: unset;margin-right: unset;padding: 0px 24px;}.header-design-slider_unqreplaceid_ .slider-content-heading {font-weight: 700;font-size: 26px;line-height: 32px;}.header-design-slider_unqreplaceid_ .slider-content-para {font-weight: 400;font-size: 18px;line-height: 26px;}}@media (max-width: 576px) {.header-design-slider_unqreplaceid_ .html-section-body {padding: 24px 24px 45px 24px;}.header-design-slider_unqreplaceid_ .carousel-inner {padding-bottom: unset;}.header-design-slider_unqreplaceid_ .header-slider-bg-image {display: none;}.header-design-slider_unqreplaceid_ .slider-sec-1 {padding-left: unset;}.header-design-slider_unqreplaceid_ .slider-sec-2 {padding: 0px 15px;}.header-design-slider_unqreplaceid_ .carousel-item-wrapper {gap: 38px;padding: 0px;}.header-design-slider_unqreplaceid_ .slider-content-wrapper {align-items: center;padding: 0px;gap: 29px;}.header-design-slider_unqreplaceid_ .carousel-indicators {bottom: -48px;display: flex;}.header-design-slider_unqreplaceid_ .slider-content-heading {font-weight: 700;font-size: 35px;line-height: 44px;text-align: center;}.header-design-slider_unqreplaceid_ .slider-content-para {font-weight: 400;font-size: 20px;line-height: 30px;text-align: center;}.header-design-slider_unqreplaceid_ .slider-content {gap: 32px;}}`;
        var sliderjs9 = ``;
        var appendnode9 = ` <div class="carousel-item edw-slider-item"> <div class="row carousel-item-wrapper"> <div class="col-sm slider-sec-1"> <img class="header-slider-bg-image position-absolute" src="https://staticcdn.edwiser.org/demo/classic2/sliderbgpattern.png" alt="slider image pattern "> <div class="slider-content-wrapper"> <div class="slider-content"> <div class="slider-content-heading edw-carousel-content-heading"> design your dream homepage, in a Snap! </div><p class="slider-content-para edw-carousel-content-para m-0">First-of-its-kind, Edwiser RemUI Homepage Builder to design your dream homepage, in a Snap!</p></div><a href="#" class="btn btn-primary trynowbutton edw-carousel-trynow-btn">Try Now</a> </div></div><div class="col-sm slider-sec-2 "> <img class="header-slider-image" src="${Vvveb.serverurl}/CDN/slidernewdesign9/slideimages/classicimg2.png" alt="slider image 1"> </div></div></div>`;
        Vvveb.Components.extend("_base", "html/slider9", {
            name: "Slider with controls 3",
            attributes: ['data-ebpb-slider9'],
            image: "icons/slider9.svg",
            classes: ['edwiser-pb-slider9'],
            html: (() => {
                return `<div title="Slider-with-controls-3" class="edwiser-pb-slider9" data-vvveb-disabled-area contenteditable="false">${sliderhtml9}<style>${slidercss9}</style></div>`;
            })(),
            beforeInit: function (node) {
                properties = [];
                var i = 0;
                var slideno = 0;
                var id = generateUniqueID();
                node.innerHTML = node.innerHTML.replaceAll("_unqreplaceid_", id);
                $(node).find(".carousel-item").each(function (e) {
                    i = generateUniqueID();
                    slideno++;
                    var regex = /edw-carousel-item-\d+/;
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
                    $(this).addClass("edw-carousel-item-" + i);

                    properties.push(
                        {
                            name: "",
                            key: "slidergrouptitle" + slideno,
                            inputtype: EdwheaderInput,
                            edwclasses: "edwgroupheader",
                            data: {
                                header: "Slide " + slideno,
                                extraclass: "edwslideheading m-0",
                                type: "h6",
                                style: ""
                            }
                        },
                        {
                            name: "",
                            key: "deleteslideritem",
                            inputtype: EdwbuttonInput,
                            child: `.edw-carousel-item-${i}`,
                            edwclasses: "edwslidedelbtn",
                            data: { text: "", icon: "la-trash", extraclasses: "btn btn-outline-danger" },
                            onChange: function (node, value, input) {
                                $(node).remove();
                                Vvveb.Components.render("html/slider9");
                                return node;
                            },
                        },
                        {
                            name: SETTINGTITLES.TITLE,
                            key: "slidertitle" + i,
                            htmlAttr: "innerHTML",
                            child: `.edw-carousel-item-${i} .edw-carousel-content-heading`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                            onChange: function (node, value, input) {
                                if (value == "") {
                                    $(node).hide();
                                } else {
                                    $(node).show().text(value);
                                }
                            }
                        },
                        {
                            name: SETTINGTITLES.TITLECOLOR,
                            key: "color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i} .edw-carousel-content-heading`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-content-heading').css('color', value);
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.DESCRIPTION,
                            key: "sliderdescription" + i,
                            htmlAttr: "innerHTML",
                            child: `.edw-carousel-item-${i} .edw-carousel-content-para`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                            onChange: function (node, value, input) {
                                if (value == "") {
                                    $(node).hide();
                                } else {
                                    $(node).show().text(value);
                                }
                            }
                        },
                        {
                            name: SETTINGTITLES.DESCRIPTIONCOLOR,
                            key: "color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i}  .edw-carousel-content-para`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-content-para').css('color', value);
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.BUTTONTEXT,
                            key: "sliderbuttontext" + i,
                            htmlAttr: "innerHTML",
                            child: `.edw-carousel-item-${i} .edw-carousel-trynow-btn`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                            onChange: function (node, value, input) {
                                if (value == "") {
                                    $(node).hide();
                                } else {
                                    $(node).show().text(value);
                                }
                            }
                        },
                        {
                            name: SETTINGTITLES.LINK,
                            key: "sliderlink" + i,
                            htmlAttr: "href",
                            child: `.edw-carousel-item-${i} .edw-carousel-trynow-btn`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                        },
                        {
                            name: SETTINGTITLES.BUTTONBACKGROUNDCOLOR,
                            key: "background-color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i} .edw-carousel-trynow-btn`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-trynow-btn').css('background', value);
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.BUTTONBORDERCOLOR,
                            key: "border-color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i} .edw-carousel-trynow-btn`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-trynow-btn').css('border-color', value);
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.BUTTONTEXTCOLOR,
                            key: "color",
                            inline: true,
                            htmlAttr: "style",
                            col: 12,
                            inputtype: ColorInput,
                            edwclasses: "edwcolorfield",
                            child: `.edw-carousel-item-${i} .edw-carousel-trynow-btn`,
                            onChange: function (node, value, input) {
                                $(node).parent().find('.edw-carousel-trynow-btn').css('color', value);
                                return node;
                            }
                        },
                        {
                            name: SETTINGTITLES.IMAGE,
                            key: "sliderimage" + i,
                            htmlAttr: 'src',
                            inputtype: ImageInput,
                            edwclasses: "edwfilefield",
                            child: `.edw-carousel-item-${i} .header-slider-image`,
                            // onChange: function (node, value, input) {
                            //     $(node).parent().find(this.child).css("background-image", "url(" + value + ")");
                            //     return node;
                            // }
                        }

                    );
                });

                properties = removeDeleteButton(node, properties);
                removeSettingsOnSingleSlide(node);
                if (!$(node).find('.edw-slider-inner-container').children('.edw-slider-item').hasClass('active')) {
                    $(node).find('.edw-slider-item').first().addClass('active');
                }
                removeDuplicateIndicators(node, i);

                //remove all option properties
                this.properties = this.properties.filter(function (item) {
                    return item.key.indexOf("slider") === -1;
                });
                //remove all option properties
                this.properties = this.properties.filter(function (item) {
                    return item.key.indexOf("color") === -1;
                });
                this.properties = properties.concat(this.properties);
                slideIntervalfielddisabler(node);
                return node;
            },
            properties: [
                {
                    name: "",
                    key: "addNewSlide",
                    inputtype: EdwbuttonInput,
                    edwclasses: "edwnewslidebtn",
                    data: { text: "Add new slide", icon: "la-plus", extraclasses: "btn btn-outline-primary" },
                    onChange: function (node) {
                        //render component properties again to include the new column inputs
                        $(node).parent().find('.carousel-inner').append(appendnode9);
                        Vvveb.Components.render("html/slider9");

                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.SHOWNAVIGATIONBUTTONSDESKTOP,
                    key: "navigationbutton",
                    htmlAttr: "checked",
                    col: 12,
                    inline: true,
                    inputtype: CheckboxInput,
                    edwclasses: "edwcheckfield",
                    child: '.edw-slider-navigationbutton',
                    onChange: function (node, value, input) {
                        if (value == true) {
                            $(node).parent().find('.edw-control-prev').removeClass('d-none');
                            $(node).parent().find('.edw-control-next').removeClass('d-none');
                        } else {
                            $(node).parent().find('.edw-control-prev').addClass('d-none');
                            $(node).parent().find('.edw-control-next').addClass('d-none');
                        }
                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.SHOWNAVIGATIONBULLETS,
                    key: "navigationbullets",
                    htmlAttr: "checked",
                    col: 12,
                    inline: true,
                    inputtype: CheckboxInput,
                    edwclasses: "edwcheckfield",
                    child: '.edw-slider-navigationbullets',
                    onChange: function (node, value, input) {
                        if (value == true) {
                            $(node).parent().find('.edw-carousel-indicators').removeClass('d-none');
                        } else {
                            $(node).parent().find('.edw-carousel-indicators').addClass('d-none');
                        }
                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.AUTOPLAYSLIDES,
                    key: "autoplayslides",
                    htmlAttr: "checked",
                    col: 12,
                    inline: true,
                    inputtype: CheckboxInput,
                    edwclasses: "edwcheckfield",
                    child: '.edw-slider-autoplay',
                    onChange: function (node, value, input) {
                        var slideintervalfield = $(input).closest('section').find('[data-key="slideinterval"]');
                        if (value == true) {
                            $(node).parent().attr('data-ride', 'carousel');
                            $(node).parent().attr('data-interval', '3000');
                            slideintervalfield.find('input[name="slideinterval"]').val('3000');
                        } else {
                            $(node).parent().removeAttr('data-ride');
                            $(node).parent().attr('data-interval', '0');
                            slideintervalfield.find('input[name="slideinterval"]').val('0');
                        }
                        slideIntervalfielddisabler(node);
                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.PAUSESLIDESONHOVER,
                    key: "pauseslides",
                    htmlAttr: "checked",
                    col: 12,
                    inline: true,
                    inputtype: CheckboxInput,
                    edwclasses: "edwcheckfield",
                    child: '.edw-slider-pauseonhover',
                    onChange: function (node, value, input) {
                        if (value == true) {
                            $(node).parent().attr('data-pause', 'hover');
                        } else {
                            $(node).parent().attr('data-pause', 'false');
                        }
                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.SLIDEINTERVAL,
                    key: "slideinterval",
                    htmlAttr: "data-interval",
                    inputtype: TextInput,
                    edwclasses: "edwinputfield",
                    child: `.carousel`,
                }
            ]
        });


        // Slider 11  --> vertical slider -1
        var sliderhtml11 = `<section class="vertical-slider-1 edw_slider__unqreplaceid_ edw_adv_slider" id="vertical-slider_unqreplaceid_" title="vertical-slider-1"><div class="section-container wrapper"><div class="slider edw-carousel"><div class="slider-inner edw-slider-inner-container"><div class="slide edw-slider-item active"><div class="img-box"><img class="header-slider-image" src="${Vvveb.serverurl}/CDN/slidernewdesign11/images/card-images/image-1.png" alt="image 1"></div><div class="slide-body ellipsis"><h3 class="card-heading edw-carousel-content-heading">2013</h3><div class="card-desc-wrapper"><p class="card-desc"><span class="card-content-head edw-card-content-head">Founding and Launch -</span><span class="edw-carousel-content-para">From humble beginnings to soaring heights, we founded and launched, creating an innovative impact in just 22 words. our vision became a reality</span></p></div><a class="readmore-btn">Read More</a><a class="readless-btn">Read Less</a></div></div><div class="slide edw-slider-item"><div class="img-box"><img class="header-slider-image" src="${Vvveb.serverurl}/CDN/slidernewdesign11/images/card-images/image-2.png" alt="image 1"></div><div class="slide-body ellipsis"><h3 class="card-heading edw-carousel-content-heading">2018</h3><div class="card-desc-wrapper"><p class="card-desc"><span class="card-content-head edw-card-content-head">Recognized as Microsoft gold partner -</span><span class="edw-carousel-content-para">Trusted experts delivering exceptional solutions and services with unrivalled proficiency and industry recognition.</span></p></div><a class="readmore-btn">Read More</a><a class="readless-btn">Read Less</a></div></div><div class="slide edw-slider-item"><div class="img-box"><img class="header-slider-image" src="${Vvveb.serverurl}/CDN/slidernewdesign11/images/card-images/image-1.png" alt="image 1"></div><div class="slide-body ellipsis"><h3 class="card-heading edw-carousel-content-heading">2019</h3><div class="card-desc-wrapper"><p class="card-desc"><span class="card-content-head edw-card-content-head">Recognized as Microsoft gold partner -</span><span class="edw-carousel-content-para">Trusted experts delivering exceptional solutions and services with unrivalled proficiency and industry recognition.</span></p></div><a class="readmore-btn">Read More</a><a class="readless-btn">Read Less</a></div></div><div class="slide edw-slider-item"><div class="img-box"><img class="header-slider-image" src="${Vvveb.serverurl}/CDN/slidernewdesign11/images/card-images/image-1.png" alt="image 1"></div><div class="slide-body ellipsis"><h3 class="card-heading edw-carousel-content-heading">2020</h3><div class="card-desc-wrapper"><p class="card-desc"><span class="card-content-head edw-card-content-head">Recognized as Microsoft gold partner -</span><span class="edw-carousel-content-para">Trusted experts delivering exceptional solutions and services with unrivalled proficiency and industry recognition.</span></p></div><a class="readmore-btn">Read More</a><a class="readless-btn">Read Less</a></div></div><div class="slide edw-slider-item"><div class="img-box"><img class="header-slider-image" src="${Vvveb.serverurl}/CDN/slidernewdesign11/images/card-images/image-1.png" alt="image 1"></div><div class="slide-body ellipsis"><h3 class="card-heading edw-carousel-content-heading">2021</h3><div class="card-desc-wrapper"><p class="card-desc"><span class="card-content-head edw-card-content-head">Recognized as Microsoft gold partner -</span><span class="edw-carousel-content-para">Trusted experts delivering exceptional solutions and services with unrivalled proficiency and industry recognition.</span></p></div><a class="readmore-btn">Read More</a><a class="readless-btn">Read Less</a></div></div><div class="slide edw-slider-item"><div class="img-box"><img class="header-slider-image" src="${Vvveb.serverurl}/CDN/slidernewdesign11/images/card-images/image-1.png" alt="image 1"></div><div class="slide-body ellipsis"><h3 class="card-heading edw-carousel-content-heading">2022</h3><div class="card-desc-wrapper"><p class="card-desc"><span class="card-content-head edw-card-content-head">Recognized as Microsoft gold partner -</span><span class="edw-carousel-content-para">Trusted experts delivering exceptional solutions and services with unrivalled proficiency and industry recognition.</span></p></div><a class="readmore-btn">Read More</a><a class="readless-btn">Read Less</a></div></div></div><div class="action-wrapper"><button id="top" class="carousel-control-prev edw-control-prev disabled" type="button"><img src="${Vvveb.serverurl}/CDN/slidernewdesign11/images/indicator-dark.svg" alt="prev"> <img src="${Vvveb.serverurl}/CDN/slidernewdesign11/images/indicator-light.svg" alt="prev"></button><button id="bottom" class="carousel-control-next edw-control-next" type="button"><img src="${Vvveb.serverurl}/CDN/slidernewdesign11/images/indicator-dark.svg" alt="next"> <img src="${Vvveb.serverurl}/CDN/slidernewdesign11/images/indicator-light.svg" alt="next"></button></div></div></div></section>`;
        var slidercss11 = ` .edw_slider__unqreplaceid_ {padding: 40px 24px 0;background-color: #eff3ff;}.edw_slider__unqreplaceid_ .section-container {max-width: 1320px;margin: 0 auto;}.edw_slider__unqreplaceid_ .wrapper {padding: 0 100px;}.edw_slider__unqreplaceid_ .slider {max-width: 872px;margin: 0 auto;position: relative;}.edw_slider__unqreplaceid_ .slider-inner {display: flex;flex-direction: column;gap: 40px;overflow: hidden;position: relative;min-height: 400px;}.edw_slider__unqreplaceid_ .slide {display: grid;grid-template-columns: 40% 60%;grid-auto-flow: dense;opacity: 0.5;position: absolute !important;top: 120%;left: 0;width: 100%;height: fit-content;transition: top 0.4s ease-in;}.edw_slider__unqreplaceid_ .img-box {height: 261px;border-radius: 4px;overflow: hidden;}.edw_slider__unqreplaceid_ .img-box img {width: 100%;height: 100%;object-fit: cover;object-position: top center;}.edw_slider__unqreplaceid_ .slide-body {border-radius: 4px 50px 4px 4px;border: 1px solid #D5DDEA;background: #FFF;box-shadow: 0px 8px 22px 0px rgba(0, 0, 0, 0.1);padding: 30px;margin: auto 0 auto -66px;}.edw_slider__unqreplaceid_ .slide-body h3 {font-size: 30px;font-style: normal;font-weight: 600;line-height: 30px;}.edw_slider__unqreplaceid_ .card-heading {color: #313848;margin: 0 0 15px;}.edw_slider__unqreplaceid_ .card-desc {color: #4C5A73;font-size: 18px;font-style: normal;font-weight: 400;line-height: 30px;margin: 0;}.edw_slider__unqreplaceid_ .ellipsis .card-desc {overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;}.edw_slider__unqreplaceid_ .card-desc-wrapper {max-height: 250px;overflow-y: auto;}.edw_slider__unqreplaceid_ .readmore-btn, .edw_slider__unqreplaceid_ .readless-btn {display: none;text-decoration: none;color: #FF4F18;font-size: 14px;font-weight: 500;line-height: normal;margin-top: 15px;cursor: pointer;}.edw_slider__unqreplaceid_ .ellipsis-active.ellipsis .readmore-btn {display: block;}.edw_slider__unqreplaceid_ .ellipsis-active:not(.ellipsis) .readless-btn {display: block;}.edw_slider__unqreplaceid_ span.card-content-head {color: #313848;font-weight: 600;}.edw_slider__unqreplaceid_ .slide:nth-child(2n) {direction: rtl;}.edw_slider__unqreplaceid_ .slide:nth-child(2n) .slide-body {margin-left: 0;margin-right: -88px;direction: ltr;}.edw_slider__unqreplaceid_ .slide.active {opacity: 1;top: 0;z-index: 1;}.edw_slider__unqreplaceid_ .slide.active .card-heading {background: linear-gradient(270deg, #FF4F18 0%, #FA9816 130.28%);background-clip: text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;}.edw_slider__unqreplaceid_ .slide.active .slide-body {border: 1px solid #FF4F18;}@keyframes toTop {from {top: 0;}to {top: -100%;}}@keyframes toBottom {from {top: -100%;}to {top: 0;}}.edw_slider__unqreplaceid_ .action-wrapper {display: flex;align-items: center;justify-content: center;margin: 0 auto;gap: 18px;flex-direction: column;position: absolute !important;top: 77px;right: -100px;}.edw_slider__unqreplaceid_ .carousel-control-prev, .edw_slider__unqreplaceid_ .carousel-control-next {position: static;width: 48px;height: 48px;border: 1px solid #FF4F18;background: #FFF;border-radius: 50%;opacity: 1;transition: all 0.3s ease;margin: auto 0;}.edw_slider__unqreplaceid_ .carousel-control-prev img:last-child, .edw_slider__unqreplaceid_ .carousel-control-next img:last-child {display: none;}.edw_slider__unqreplaceid_ .carousel-control-prev img:last-child {transform: rotate(180deg);}.edw_slider__unqreplaceid_ .carousel-control-next img:first-child {transform: rotate(180deg);}.edw_slider__unqreplaceid_ .carousel-control-prev:hover, .edw_slider__unqreplaceid_ .carousel-control-next:hover {background-color: #FF4F18;}.edw_slider__unqreplaceid_ .carousel-control-prev:hover img:first-child, .edw_slider__unqreplaceid_ .carousel-control-next:hover img:first-child {display: none;}.edw_slider__unqreplaceid_ .carousel-control-prev:hover img:last-child, .edw_slider__unqreplaceid_ .carousel-control-next:hover img:last-child {display: block;}.edw_slider__unqreplaceid_ .carousel-control-prev.disabled, .edw_slider__unqreplaceid_ .carousel-control-next.disabled {cursor: not-allowed;opacity: 0.6;pointer-events: none;border-color: #BABABA !important;background-color: #fff !important;}.edw_slider__unqreplaceid_ .carousel-control-prev.disabled img, .edw_slider__unqreplaceid_ .carousel-control-next.disabled img {filter: grayscale(100%) !important;}.edw_slider__unqreplaceid_ .carousel-control-prev.disabled img:first-child, .edw_slider__unqreplaceid_ .carousel-control-next.disabled img:first-child {display: block;}.edw_slider__unqreplaceid_ .carousel-control-prev.disabled img:last-child, .edw_slider__unqreplaceid_ .carousel-control-next.disabled img:last-child {display: none;}@media screen and (max-width: 1024px) {.edw_slider__unqreplaceid_ .section-container {max-width: 820px;}.edw_slider__unqreplaceid_ .wrapper {padding: 0;}.edw_slider__unqreplaceid_ .action-wrapper {display: none;}}@media screen and (max-width: 767px) {.edw_slider__unqreplaceid_ .section-container {max-width: 600px;}.edw_slider__unqreplaceid_ .slide {display: block;}.edw_slider__unqreplaceid_ .slide-body {position: relative;z-index: 1;margin: -40px 0 0 !important;}}@media screen and (min-width: 1024px) {.edw-limitedwidth-block .vertical-slider-1 .wrapper {padding: 0;}.edw-limitedwidth-block .vertical-slider-1 .slider {margin-right: 100px;}.edw-limitedwidth-block .vertical-slider-1 .action-wrapper {right: -100px;}}`;
        var sliderjs11 = `class VerticalSlider1_unqreplaceid_{constructor(){this.verticalSlider=document.querySelector(\"#vertical-slider_unqreplaceid_\"),this.carouselInner=this.verticalSlider.querySelector(\".slider-inner\"),this.topArrow=this.verticalSlider.querySelector(\".carousel-control-prev\"),this.bottomArrow=this.verticalSlider.querySelector(\".carousel-control-next\"),this.readmorebtns=this.verticalSlider.querySelectorAll(\".readmore-btn\"),this.readlessbtns=this.verticalSlider.querySelectorAll(\".readless-btn\"),this.isTouchStart=!1,this.startY=0,this.distance=0,this.scrollTop=this.scrollTop.bind(this),this.scrollBottom=this.scrollBottom.bind(this),this.initializeSlide=this.initializeSlide.bind(this),this.readmoreclicked=this.readmoreclicked.bind(this),this.readlessclicked=this.readlessclicked.bind(this),this.touchStart=this.touchStart.bind(this),this.touchMove=this.touchMove.bind(this),this.touchStop=this.touchStop.bind(this),this.initializeEventListeners()}initializeEventListeners(){window.addEventListener(\"load\",()=>{this.initializeSlide(),this.handleEllipsis(),setTimeout(()=>this.initializeSlide(),100)}),window.addEventListener(\"resize\",()=>{this.initializeSlide(),this.handleEllipsis(),setTimeout(()=>this.initializeSlide(),100)}),this.topArrow.addEventListener(\"click\",this.scrollBottom),this.bottomArrow.addEventListener(\"click\",this.scrollTop),this.readmorebtns.forEach(t=>{t.addEventListener(\"click\",this.readmoreclicked)}),this.readlessbtns.forEach(t=>{t.addEventListener(\"click\",this.readlessclicked)}),this.carouselInner.addEventListener(\"touchstart\",this.touchStart),this.carouselInner.addEventListener(\"touchmove\",this.touchMove),this.carouselInner.addEventListener(\"touchend\",this.touchStop),this.carouselInner.addEventListener(\"touchmove\",t=>{t.preventDefault()}),this.handleEllipsis()}handleEllipsis(){this.carouselInner.querySelectorAll(\".slide-body\").forEach(function(t){var e=t.querySelector(\".card-desc\");t.classList.contains(\"ellipsis\")||t.classList.add(\"ellipsis\"),e.scrollHeight>e.clientHeight?t.classList.add(\"ellipsis-active\"):t.classList.remove(\"ellipsis-active\")})}handleNextSlide(){let t=this.verticalSlider.querySelector(\".slide.active\");this.verticalSlider.querySelector(\".slide.next\").style.top=t.offsetHeight+40+\"px\"}readmoreclicked(t){t.target.parentNode.classList.remove(\"ellipsis\"),this.handleNextSlide()}readlessclicked(t){t.target.parentNode.classList.add(\"ellipsis\"),this.handleNextSlide()}initializeSlide(){let t=this.verticalSlider.querySelector(\".slide.active\");window.innerWidth>1024?this.carouselInner.style.height=1.7*t.offsetHeight+\"px\":this.carouselInner.style.height=1.5*t.offsetHeight+\"px\";this.verticalSlider.querySelectorAll(\".slide.next\").forEach(t=>{t.classList.remove(\"next\"),t.style.top=\"\"});let e=t.nextElementSibling;e.classList.add(\"next\"),e.style.top=t.offsetHeight+40+\"px\"}scrollTop(){if(!this.bottomArrow.classList.contains(\"disabled\")){let t=this.verticalSlider.querySelector(\".slide.active\"),e=t.querySelector(\".slide-body\");console.log(e),e.classList.contains(\"ellipsis\")||e.classList.add(\"ellipsis\");let i=t.nextElementSibling;this.topArrow.classList.remove(\"disabled\"),i.classList.remove(\"next\"),i.style.top=\"\",t.classList.remove(\"active\"),i.classList.add(\"active\"),t.style.animation=\"toTop 0.4s ease-in forwards\";let s=i.nextElementSibling;s?(s.classList.add(\"next\"),s.style.top=t.offsetHeight+40+\"px\",s.style.top=i.offsetHeight+40+\"px\"):this.bottomArrow.classList.add(\"disabled\"),setTimeout(()=>{t.style.animation=\"\"},500)}}scrollBottom(){if(!this.topArrow.classList.contains(\"disabled\")){let t=this.verticalSlider.querySelector(\".slide.active\"),e=t.querySelector(\".slide-body\");console.log(e),e.classList.contains(\"ellipsis\")||e.classList.add(\"ellipsis\");let i=this.verticalSlider.querySelector(\".slide.next\"),s=t.previousElementSibling;this.bottomArrow.classList.remove(\"disabled\"),i&&(i.classList.remove(\"next\"),i.style.top=\"\"),t.classList.remove(\"active\"),t.classList.add(\"next\"),t.style.top=s.offsetHeight+40+\"px\",s.style.animation=\"toBottom 0.4s ease-in forwards\",s.classList.add(\"active\"),s.previousElementSibling||this.topArrow.classList.add(\"disabled\"),setTimeout(()=>{s&&(s.style.animation=\"\")},500)}}touchStart(t){this.isTouchStart=!0,this.startY=t.touches[0].clientY}touchMove(t){this.isTouchStart&&(this.distance=t.touches[0].clientY-this.startY)}touchStop(){this.isTouchStart=!1,this.distance>100?this.scrollBottom():this.distance<-100&&this.scrollTop()}}var verticalSlider1_unqreplaceid_=new VerticalSlider1_unqreplaceid_;`;
        var appendnode11 = `<div class="slide edw-slider-item"><div class="img-box"><img class="header-slider-image" src="${Vvveb.serverurl}/CDN/slidernewdesign11/images/card-images/image-1.png" alt="image 1"></div><div class="slide-body ellipsis"><h3 class="card-heading edw-carousel-content-heading">2021</h3><div class="card-desc-wrapper"><p class="card-desc" ><span class="card-content-head edw-card-content-head">Recognized as Microsoft gold partner -</span><span class="edw-carousel-content-para">Trusted experts delivering exceptional solutions and services with unrivalled proficiency and industry recognition.</span></p></div><a class="readmore-btn">Read More</a><a class="readless-btn">Read Less</a></div></div>`;
        Vvveb.Components.extend("_base", "html/slider11", {
            name: "vertical-slider-1",
            attributes: ['data-ebpb-slider11'],
            image: "icons/slider11.png",
            classes: ['edwiser-pb-slider11'],
            html: (() => {
                return `<div title="vertical-slider-1" class="edwiser-pb-slider11" data-vvveb-disabled-area contenteditable="false">${sliderhtml11}<style>${slidercss11}</style><script>${sliderjs11}</script></div>`;
            })(),
            beforeInit: function (node) {
                properties = [];
                var i = 0;
                var slideno = 0;
                var id = generateUniqueID();
                node.innerHTML = node.innerHTML.replaceAll("_unqreplaceid_", id);
                $(node).find(".edw-slider-item").each(function (e) {
                    i = generateUniqueID();
                    slideno++;
                    var regex = /edw-carousel-item-\d+/;
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
                    $(this).addClass("edw-carousel-item-" + i);

                    properties.push(
                        {
                            name: "",
                            key: "slidergrouptitle" + slideno,
                            inputtype: EdwheaderInput,
                            edwclasses: "edwgroupheader",
                            data: {
                                header: "Slide " + slideno,
                                extraclass: "edwslideheading m-0",
                                type: "h6",
                                style: ""
                            }
                        },
                        {
                            name: "",
                            key: "deleteslideritem",
                            inputtype: EdwbuttonInput,
                            child: `.edw-carousel-item-${i}`,
                            edwclasses: "edwslidedelbtn",
                            data: { text: "", icon: "la-trash", extraclasses: "btn btn-outline-danger" },
                            onChange: function (node, value, input) {
                                if ($(node).hasClass('next')) {
                                    if ($(node).next().length > 0) {
                                        $(node).next().addClass('next');
                                        $(node).next().css('top', '301px');
                                    }
                                }
                                $(node).remove();
                                Vvveb.Components.render("html/slider11");
                                return node;
                            },
                        },
                        {
                            name: SETTINGTITLES.TITLE,
                            key: "slidertitle" + i,
                            htmlAttr: "innerHTML",
                            child: `.edw-carousel-item-${i} .edw-carousel-content-heading`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                        },
                        {
                            name: SETTINGTITLES.CONTENT,
                            key: "sliderdescription" + i,
                            htmlAttr: "innerHTML",
                            child: `.edw-carousel-item-${i} .card-desc`,
                            inputtype: TextareaInput,
                            edwclasses: "edwinputfield",
                            data: {
                                rows: 40,
                            }
                        },
                        {
                            name: SETTINGTITLES.IMAGE,
                            key: "sliderimage" + i,
                            htmlAttr: 'src',
                            inputtype: ImageInput,
                            edwclasses: "edwfilefield",
                            child: `.edw-carousel-item-${i} .header-slider-image`,
                        }

                    );
                });

                properties = removeDeleteButton(node, properties);
                hideNavigatorsOnSingleSlide(node)

                if (!$(node).find('.edw-slider-inner-container').children('.edw-slider-item').hasClass('active')) {
                    $(node).find('.edw-slider-item').first().addClass('active').removeClass('next').removeAttr('style');
                    if ($(node).find('.edw-slider-inner-container').children('.edw-slider-item').length >= 2) {
                        if ($(node).find('.edw-slider-item.next').length > 0) {
                            $(node).find('.edw-slider-item.next').removeAttr('style');
                            $(node).find('.edw-slider-item.next').removeClass('next');
                        }
                        $(node).find('.edw-slider-item.active').next().addClass('next');
                        $(node).find('.edw-slider-item.next').css('top', '301px');
                    }

                }

                // removeDuplicateIndicators(node, i);

                //remove all option properties
                this.properties = this.properties.filter(function (item) {
                    return item.key.indexOf("slider") === -1;
                });
                //remove all option properties
                this.properties = this.properties.filter(function (item) {
                    return item.key.indexOf("color") === -1;
                });
                this.properties = properties.concat(this.properties);
                // slideIntervalfielddisabler(node);
                return node;
            },
            properties: [
                {
                    name: "",
                    key: "addNewSlide",
                    inputtype: EdwbuttonInput,
                    edwclasses: "edwnewslidebtn",
                    data: { text: "Add new slide", icon: "la-plus", extraclasses: "btn btn-outline-primary" },
                    onChange: function (node) {
                        // Render component properties again to include the new column inputs
                        if ($(node).find('.edw-slider-item.next').length == 0) {
                            $(node).parent().find('.edw-slider-inner-container').append($(appendnode11).addClass('next').css('top','301px'));
                        } else {
                            $(node).parent().find('.edw-slider-inner-container').append(appendnode11);
                        }
                        Vvveb.Components.render("html/slider11");

                        return node;
                    }
                },
            ]
        });

        // Slider 12  --> vertical slider -2
        var sliderhtml12 = `<section class="vertical-slider-2 edw_adv_slider edw-slider_unqreplaceid_" id="vertical-slider_unqreplaceid_" title="vertical-slider-2"><div class="section-container wrapper"><div class="slider edw-carousel"><div class="slider-inner edw-slider-inner-container"><div class="slide edw-slider-item active"><div class="img-box"><img class="header-slider-image" src="${Vvveb.serverurl}/CDN/slidernewdesign12/images/card-images/image-1.png" alt="image 1"></div><div class="slide-body ellipsis"><h3 class="card-heading edw-carousel-content-heading">2010</h3><div class="card-desc-wrapper"><p class="card-desc" ><span class="card-content-head edw-card-content-head">Founding -</span><span class="edw-carousel-content-para">Empowering Innovations: A visionary company driving progress through ground breaking solutions and transformative technologies.</span></p></div><a class="readmore-btn">Read More</a><a class="readless-btn">Read Less</a></div></div><div class="slide edw-slider-item"><div class="img-box"><img class="header-slider-image" src="${Vvveb.serverurl}/CDN/slidernewdesign12/images/card-images/image-2.png" alt="image 2"></div><div class="slide-body ellipsis"><h3 class="card-heading edw-carousel-content-heading">2014</h3><div class="card-desc-wrapper"><p class="card-desc" ><span class="card-content-head edw-card-content-head">Recognized gold partner -</span><span class="edw-carousel-content-para">Trusted experts delivering exceptional solutions and services with unrivalled proficiency and industry recognition.</span></p></div><a class="readmore-btn">Read More</a><a class="readless-btn">Read Less</a></div></div><div class="slide edw-slider-item"><div class="img-box"><img class="header-slider-image" src="${Vvveb.serverurl}/CDN/slidernewdesign12/images/card-images/image-1.png" alt="image 1"></div><div class="slide-body ellipsis"><h3 class="card-heading edw-carousel-content-heading">2019</h3><div class="card-desc-wrapper"><p class="card-desc" ><span class="card-content-head edw-card-content-head">Recognized as Microsoft gold partner -</span><span class="edw-carousel-content-para">Trusted experts delivering exceptional solutions and services with unrivalled proficiency and industry recognition.</span></p></div><a class="readmore-btn">Read More</a><a class="readless-btn">Read Less</a></div></div><div class="slide edw-slider-item"><div class="img-box"><img class="header-slider-image" src="${Vvveb.serverurl}/CDN/slidernewdesign12/images/card-images/image-1.png" alt="image 1"></div><div class="slide-body ellipsis"><h3 class="card-heading edw-carousel-content-heading">2020</h3><div class="card-desc-wrapper"><p class="card-desc" ><span class="card-content-head edw-card-content-head">Recognized as Microsoft gold partner -</span><span class="edw-carousel-content-para">Trusted experts delivering exceptional solutions and services with unrivalled proficiency and industry recognition.</span></p></div><a class="readmore-btn">Read More</a><a class="readless-btn">Read Less</a></div></div></div><div class="action-wrapper"><button id="top" class="carousel-control-prev edw-control-prev disabled" type="button"><img src="${Vvveb.serverurl}/CDN/slidernewdesign12/images/indicator-dark.svg" alt="prev"> <img src="${Vvveb.serverurl}/CDN/slidernewdesign12/images/indicator-light.svg" alt="prev"></button><button id="bottom" class="carousel-control-next edw-control-next" type="button"><img src="${Vvveb.serverurl}/CDN/slidernewdesign12/images/indicator-dark.svg" alt="next"> <img src="${Vvveb.serverurl}/CDN/slidernewdesign12/images/indicator-light.svg" alt="next"></button></div></div></div></section>`;
        var slidercss12 = `.edw-slider_unqreplaceid_ {padding: 50px 24px 0;background-image: linear-gradient(180deg, #FFF 0%, #D8E9FF 100%);}.edw-slider_unqreplaceid_ .section-container {max-width: 1320px;margin: 0 auto;}.edw-slider_unqreplaceid_ .wrapper {padding: 0 100px;}.edw-slider_unqreplaceid_ .slider {max-width: 872px;margin: 0 auto;position: relative;}.edw-slider_unqreplaceid_ .slider-inner {display: flex;flex-direction: column;gap: 40px;overflow: hidden;position: relative;min-height: 400px;}.edw-slider_unqreplaceid_ .slide {display: grid;grid-template-columns: 40% 60%;grid-auto-flow: dense;opacity: 0.5;position: absolute !important;top: 120%;left: 0;width: 100%;height: fit-content;transition: top 0.4s ease-in;}.edw-slider_unqreplaceid_ .img-box {height: 271px;border-radius: 4px;overflow: hidden;}.edw-slider_unqreplaceid_ .img-box img {width: 100%;height: 100%;object-fit: cover;object-position: top center;}.edw-slider_unqreplaceid_ .slide-body {border-radius: 4px;border: 1px solid #D5DDEA;background: #FFF;box-shadow: 0px 8px 22px 0px rgba(0, 0, 0, 0.1);padding: 30px;margin: auto 0 auto -66px;}.edw-slider_unqreplaceid_ .slide-body h3 {font-size: 30px;font-style: normal;font-weight: 600;line-height: 30px;}.edw-slider_unqreplaceid_ .card-heading {color: #F90;margin: 0 0 15px;}.edw-slider_unqreplaceid_ .card-desc {color: #4C5A73;font-size: 18px;font-style: normal;font-weight: 400;line-height: 30px;margin: 0;}.edw-slider_unqreplaceid_ .ellipsis .card-desc {overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;}.edw-slider_unqreplaceid_ .card-desc-wrapper {max-height: 250px;overflow-y: auto;}.edw-slider_unqreplaceid_ .readmore-btn, .edw-slider_unqreplaceid_ .readless-btn {display: none;text-decoration: none;color: #3E86F5;font-size: 14px;font-weight: 500;line-height: normal;margin-top: 15px;cursor: pointer;}.edw-slider_unqreplaceid_ .ellipsis-active.ellipsis .readmore-btn {display: block;}.edw-slider_unqreplaceid_ .ellipsis-active:not(.ellipsis) .readless-btn {display: block;}.edw-slider_unqreplaceid_ span.card-content-head {color: #313848;font-weight: 600;}.edw-slider_unqreplaceid_ .slide:nth-child(2n) {direction: rtl;}.edw-slider_unqreplaceid_ .slide:nth-child(2n) .slide-body {margin-left: 0;margin-right: -88px;direction: ltr;}.edw-slider_unqreplaceid_ .slide.active {opacity: 1;top: 0;z-index: 1;}.edw-slider_unqreplaceid_ .slide.active .card-heading {color: #3E86F5;}.edw-slider_unqreplaceid_ .slide.active .slide-body {border: 1px solid #3E86F5;}@keyframes toTop {from {top: 0;}to {top: -100%;}}@keyframes toBottom {from {top: -100%;}to {top: 0;}}.edw-slider_unqreplaceid_ .action-wrapper {display: flex;align-items: center;justify-content: center;margin: 0 auto;gap: 18px;flex-direction: column;position: absolute !important;top: 77px;right: -100px;}.edw-slider_unqreplaceid_ .carousel-control-prev, .edw-slider_unqreplaceid_ .carousel-control-next {position: static;width: 48px;height: 48px;border: 1px solid #3E86F5;background: #FFF;border-radius: 50%;opacity: 1;transition: all 0.3s ease;margin: auto 0;}.edw-slider_unqreplaceid_ .carousel-control-prev img:last-child, .edw-slider_unqreplaceid_ .carousel-control-next img:last-child {display: none;}.edw-slider_unqreplaceid_ .carousel-control-prev img:last-child {transform: rotate(180deg);}.edw-slider_unqreplaceid_ .carousel-control-next img:first-child {transform: rotate(180deg);}.edw-slider_unqreplaceid_ .carousel-control-prev:hover, .edw-slider_unqreplaceid_ .carousel-control-next:hover {background-color: #3E86F5;}.edw-slider_unqreplaceid_ .carousel-control-prev:hover img:first-child, .edw-slider_unqreplaceid_ .carousel-control-next:hover img:first-child {display: none;}.edw-slider_unqreplaceid_ .carousel-control-prev:hover img:last-child, .edw-slider_unqreplaceid_ .carousel-control-next:hover img:last-child {display: block;}.edw-slider_unqreplaceid_ .carousel-control-prev.disabled, .edw-slider_unqreplaceid_ .carousel-control-next.disabled {cursor: not-allowed;opacity: 0.6;pointer-events: none;border-color: #BABABA !important;background-color: #fff !important;}.edw-slider_unqreplaceid_ .carousel-control-prev.disabled img, .edw-slider_unqreplaceid_ .carousel-control-next.disabled img {filter: grayscale(100%) !important;}.edw-slider_unqreplaceid_ .carousel-control-prev.disabled img:first-child, .edw-slider_unqreplaceid_ .carousel-control-next.disabled img:first-child {display: block;}.edw-slider_unqreplaceid_ .carousel-control-prev.disabled img:last-child, .edw-slider_unqreplaceid_ .carousel-control-next.disabled img:last-child {display: none;}@media screen and (max-width: 1024px) {.edw-slider_unqreplaceid_ .section-container {max-width: 820px;}.edw-slider_unqreplaceid_ .wrapper {padding: 0;}.edw-slider_unqreplaceid_ .action-wrapper {display: none;}}@media screen and (max-width: 767px) {.edw-slider_unqreplaceid_ .section-container {max-width: 600px;}.edw-slider_unqreplaceid_ .slide {display: block;}.edw-slider_unqreplaceid_ .slide-body {position: relative;z-index: 1;margin: -40px 0 0 !important;}}@media screen and (min-width: 1024px) {.edw-limitedwidth-block .vertical-slider-2 .wrapper {padding: 0;}.edw-limitedwidth-block .vertical-slider-2 .slider {margin-right: 100px;}.edw-limitedwidth-block .vertical-slider-2 .action-wrapper {right: -100px;}}`;
        var sliderjs12 = `class VerticalSlider1_unqreplaceid_{constructor(){this.verticalSlider=document.querySelector("#vertical-slider_unqreplaceid_"),this.carouselInner=this.verticalSlider.querySelector(".slider-inner"),this.topArrow=this.verticalSlider.querySelector(".carousel-control-prev"),this.bottomArrow=this.verticalSlider.querySelector(".carousel-control-next"),this.readmorebtns=this.verticalSlider.querySelectorAll(".readmore-btn"),this.readlessbtns=this.verticalSlider.querySelectorAll(".readless-btn"),this.isTouchStart=!1,this.startY=0,this.distance=0,this.scrollTop=this.scrollTop.bind(this),this.scrollBottom=this.scrollBottom.bind(this),this.initializeSlide=this.initializeSlide.bind(this),this.readmoreclicked=this.readmoreclicked.bind(this),this.readlessclicked=this.readlessclicked.bind(this),this.touchStart=this.touchStart.bind(this),this.touchMove=this.touchMove.bind(this),this.touchStop=this.touchStop.bind(this),this.initializeEventListeners()}initializeEventListeners(){window.addEventListener("load",()=>{this.initializeSlide(),this.handleEllipsis(),setTimeout(()=>this.initializeSlide(),100)}),window.addEventListener("resize",()=>{this.initializeSlide(),this.handleEllipsis(),setTimeout(()=>this.initializeSlide(),100)}),this.topArrow.addEventListener("click",this.scrollBottom),this.bottomArrow.addEventListener("click",this.scrollTop),this.readmorebtns.forEach(t=>{t.addEventListener("click",this.readmoreclicked)}),this.readlessbtns.forEach(t=>{t.addEventListener("click",this.readlessclicked)}),this.carouselInner.addEventListener("touchstart",this.touchStart),this.carouselInner.addEventListener("touchmove",this.touchMove),this.carouselInner.addEventListener("touchend",this.touchStop),this.carouselInner.addEventListener("touchmove",t=>{t.preventDefault()})}handleEllipsis(){this.carouselInner.querySelectorAll(".slide-body").forEach(function(t){var e=t.querySelector(".card-desc");t.classList.contains("ellipsis")||t.classList.add("ellipsis"),e.scrollHeight>e.clientHeight?t.classList.add("ellipsis-active"):t.classList.remove("ellipsis-active")})}handleNextSlide(){let t=this.verticalSlider.querySelector(".slide.active");this.verticalSlider.querySelector(".slide.next").style.top=t.offsetHeight+40+"px"}readmoreclicked(t){t.target.parentNode.classList.remove("ellipsis"),this.handleNextSlide()}readlessclicked(t){t.target.parentNode.classList.add("ellipsis"),this.handleNextSlide()}initializeSlide(){let t=this.verticalSlider.querySelector(".slide.active");window.innerWidth>1024?this.carouselInner.style.height=1.7*t.offsetHeight+"px":this.carouselInner.style.height=1.5*t.offsetHeight+"px";this.verticalSlider.querySelectorAll(".slide.next").forEach(t=>{t.classList.remove("next"),t.style.top=""});let e=t.nextElementSibling;e.classList.add("next"),e.style.top=t.offsetHeight+40+"px"}scrollTop(){if(!this.bottomArrow.classList.contains("disabled")){let t=this.verticalSlider.querySelector(".slide.active"),e=t.querySelector(".slide-body");console.log(e),e.classList.contains("ellipsis")||e.classList.add("ellipsis");let i=t.nextElementSibling;this.topArrow.classList.remove("disabled"),i.classList.remove("next"),i.style.top="",t.classList.remove("active"),i.classList.add("active"),t.style.animation="toTop 0.4s ease-in forwards";let s=i.nextElementSibling;s?(s.classList.add("next"),s.style.top=t.offsetHeight+40+"px",s.style.top=i.offsetHeight+40+"px"):this.bottomArrow.classList.add("disabled"),setTimeout(()=>{t.style.animation=""},500)}}scrollBottom(){if(!this.topArrow.classList.contains("disabled")){let t=this.verticalSlider.querySelector(".slide.active"),e=t.querySelector(".slide-body");console.log(e),e.classList.contains("ellipsis")||e.classList.add("ellipsis");let i=this.verticalSlider.querySelector(".slide.next"),s=t.previousElementSibling;this.bottomArrow.classList.remove("disabled"),i&&(i.classList.remove("next"),i.style.top=""),t.classList.remove("active"),t.classList.add("next"),t.style.top=s.offsetHeight+40+"px",s.style.animation="toBottom 0.4s ease-in forwards",s.classList.add("active"),s.previousElementSibling||this.topArrow.classList.add("disabled"),setTimeout(()=>{s&&(s.style.animation="")},500)}}touchStart(t){this.isTouchStart=!0,this.startY=t.touches[0].clientY}touchMove(t){this.isTouchStart&&(this.distance=t.touches[0].clientY-this.startY)}touchStop(){this.isTouchStart=!1,this.distance>100?this.scrollBottom():this.distance<-100&&this.scrollTop()}}let verticalSlider1_unqreplaceid_=new VerticalSlider1_unqreplaceid_;`;
        var appendnode12 = `<div class="slide edw-slider-item"><div class="img-box"><img class="header-slider-image" src="${Vvveb.serverurl}/CDN/slidernewdesign12/images/card-images/image-1.png" alt="image 1"></div><div class="slide-body ellipsis"><h3 class="card-heading edw-carousel-content-heading">2021</h3><div class="card-desc-wrapper"><p class="card-desc" ><span class="card-content-head edw-card-content-head">Recognized as Microsoft gold partner -</span><span class="edw-carousel-content-para">Trusted experts delivering exceptional solutions and services with unrivalled proficiency and industry recognition.</span></p></div><a class="readmore-btn">Read More</a><a class="readless-btn">Read Less</a></div></div>`;
        Vvveb.Components.extend("_base", "html/slider12", {
            name: "vertical-slider-2",
            attributes: ['data-ebpb-slider12'],
            image: "icons/slider12.png",
            classes: ['edwiser-pb-slider12'],
            html: (() => {
                return `<div title="vertical-slider-2" class="edwiser-pb-slider12" data-vvveb-disabled-area contenteditable="false">${sliderhtml12}<style>${slidercss12}</style><script>${sliderjs12}</script></div>`;
            })(),
            beforeInit: function (node) {
                properties = [];
                var i = 0;
                var slideno = 0;
                var id = generateUniqueID();
                node.innerHTML = node.innerHTML.replaceAll("_unqreplaceid_", id);
                $(node).find(".edw-slider-item").each(function (e) {
                    i = generateUniqueID();
                    slideno++;
                    var regex = /edw-carousel-item-\d+/;
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
                    $(this).addClass("edw-carousel-item-" + i);

                    properties.push(
                        {
                            name: "",
                            key: "slidergrouptitle" + slideno,
                            inputtype: EdwheaderInput,
                            edwclasses: "edwgroupheader",
                            data: {
                                header: "Slide " + slideno,
                                extraclass: "edwslideheading m-0",
                                type: "h6",
                                style: ""
                            }
                        },
                        {
                            name: "",
                            key: "deleteslideritem",
                            inputtype: EdwbuttonInput,
                            child: `.edw-carousel-item-${i}`,
                            edwclasses: "edwslidedelbtn",
                            data: { text: "", icon: "la-trash", extraclasses: "btn btn-outline-danger" },
                            onChange: function (node, value, input) {
                                if ($(node).hasClass('next')) {
                                    if ($(node).next().length > 0) {
                                        $(node).next().addClass('next');
                                        $(node).next().css('top', '301px');
                                    }
                                }
                                $(node).remove();
                                Vvveb.Components.render("html/slider12");
                                return node;
                            },
                        },
                        {
                            name: SETTINGTITLES.TITLE,
                            key: "slidertitle" + i,
                            htmlAttr: "innerHTML",
                            child: `.edw-carousel-item-${i} .edw-carousel-content-heading`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                            onChange: function (node, value, input) {
                                if (value == "") {
                                    $(node).hide();
                                } else {
                                    $(node).show().text(value);
                                }
                            }
                        },
                        {
                            name: SETTINGTITLES.CONTENT,
                            key: "sliderdescription" + i,
                            htmlAttr: "innerHTML",
                            child: `.edw-carousel-item-${i} .card-desc`,
                            inputtype: TextareaInput,
                            edwclasses: "edwinputfield",
                            data: {
                                rows: 40,
                            }
                        },
                        {
                            name: SETTINGTITLES.IMAGE,
                            key: "sliderimage" + i,
                            htmlAttr: 'src',
                            inputtype: ImageInput,
                            edwclasses: "edwfilefield",
                            child: `.edw-carousel-item-${i} .header-slider-image`,
                        }

                    );
                });

                properties = removeDeleteButton(node, properties);
                hideNavigatorsOnSingleSlide(node)

                if (!$(node).find('.edw-slider-inner-container').children('.edw-slider-item').hasClass('active')) {
                    $(node).find('.edw-slider-item').first().addClass('active').removeClass('next').removeAttr('style');
                    if ($(node).find('.edw-slider-inner-container').children('.edw-slider-item').length >= 2) {
                        if ($(node).find('.edw-slider-item.next').length > 0) {
                            $(node).find('.edw-slider-item.next').removeAttr('style');
                            $(node).find('.edw-slider-item.next').removeClass('next');
                        }
                        $(node).find('.edw-slider-item.active').next().addClass('next');
                        $(node).find('.edw-slider-item.next').css('top', '301px');
                    }

                }

                // removeDuplicateIndicators(node, i);

                //remove all option properties
                this.properties = this.properties.filter(function (item) {
                    return item.key.indexOf("slider") === -1;
                });
                //remove all option properties
                this.properties = this.properties.filter(function (item) {
                    return item.key.indexOf("color") === -1;
                });
                this.properties = properties.concat(this.properties);
                // slideIntervalfielddisabler(node);
                return node;
            },
            properties: [
                {
                    name: "",
                    key: "addNewSlide",
                    inputtype: EdwbuttonInput,
                    edwclasses: "edwnewslidebtn",
                    data: { text: "Add new slide", icon: "la-plus", extraclasses: "btn btn-outline-primary" },
                    onChange: function (node) {
                        // Render component properties again to include the new column inputs
                        if ($(node).find('.edw-slider-item.next').length == 0) {
                            $(node).parent().find('.edw-slider-inner-container').append($(appendnode12).addClass('next').css('top','301px'));
                        } else {
                            $(node).parent().find('.edw-slider-inner-container').append(appendnode12);
                        }
                        Vvveb.Components.render("html/slider12");

                        return node;
                    }
                },
            ]
        });
    }
    function removeDuplicateIndicators(node, i) {
        $(node).find(".edw-carousel-indicators").empty();
        var id = $(node).find('.edw-carousel').attr('id');
        var x = 0;
        $(node).find(".edw-slider-item").each(function (e) {
            $(node).find(".carousel-indicators").append(`<li data-target="#${id}" data-slide-to="${x}"></li>`);
            if ($(this).hasClass('active')) {
                $(node).find(`.edw-carousel-indicators li[data-slide-to='${x}']`).addClass('active');
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
    function hideNavigatorsOnSingleSlide(node) {
        var numberOfChildren = $(node).find(".edw-slider-item").length;
        if (numberOfChildren == 1) {
                $(node).parent().find('.edw-control-prev').addClass('d-none');
                $(node).parent().find('.edw-control-next').addClass('d-none');
                $(node).parent().find('.edw-carousel-indicators').addClass('d-none');
        } else {
                $(node).parent().find('.edw-control-prev').removeClass('d-none');
                $(node).parent().find('.edw-control-next').removeClass('d-none');
                $(node).parent().find('.edw-carousel-indicators').removeClass('d-none');
        }
    }
    return {
        init: function () {
            var blocks = ["html/slider6", "html/slider1", "html/slider7", "html/slider8", "html/slider9", "html/slider11", "html/slider12"];
            addBlocks(blocks);
        }
    }

});
