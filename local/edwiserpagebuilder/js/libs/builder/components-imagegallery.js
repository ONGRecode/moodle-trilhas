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
define('local_edwiserpagebuilder/components-imagegallery', ['local_edwiserpagebuilder/jquery', 'core/ajax'], function (jQuery, Ajax) {

    function addBlocks(blocks) {
        Vvveb.ComponentsGroup['Edwiser Image Sliders'] = blocks;
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
            SWITCHTITLE: 'Title',
            TABTITLE: 'Tab Title',

        };
        // Slider 2 --> Image slider
        var sliderhtml2 = ` <div class="edw_slider_unqreplaceid_ edw_adv_slider edw-adv-slider-2 overflow-hidden"> <div class="slider-container edw-carousel" data-url="${Vvveb.serverurl}/CDN/slidernewdesign2/slider2bgimg.png" style="background: url('${Vvveb.serverurl}/CDN/slidernewdesign2/slider2bgimg.png');" data-ride="carousel" data-interval="3000" data-pause="hover"> <div class="slider-content edw-slider-inner-container"> <div class="slider-single edw-slider-item preactive"> <img class="slider-single-image desktop edw-img-desktop" src="${Vvveb.serverurl}/CDN/slidernewdesign2/sliderimage1.png" alt="1"/> <img class="slider-single-image tab edw-img-tab" src="${Vvveb.serverurl}/CDN/slidernewdesign2/sliderimage1tab.png" alt="1"/> <img class="slider-single-image mob edw-img-mob" src="${Vvveb.serverurl}/CDN/slidernewdesign2/sliderimage1mob.png" alt="1"/> </div><div class="slider-single edw-slider-item active"> <img class="slider-single-image desktop edw-img-desktop" src="${Vvveb.serverurl}/CDN/slidernewdesign2/sliderimage2.png" alt="1"/> <img class="slider-single-image tab edw-img-tab" src="${Vvveb.serverurl}/CDN/slidernewdesign2/sliderimage2tab.png" alt="1"/> <img class="slider-single-image mob edw-img-mob" src="${Vvveb.serverurl}/CDN/slidernewdesign2/sliderimage2mob.png" alt="1"/> </div><div class="slider-single edw-slider-item proactive"> <img class="slider-single-image desktop edw-img-desktop" src="${Vvveb.serverurl}/CDN/slidernewdesign2/sliderimage3.png" alt="1"/> <img class="slider-single-image tab edw-img-tab" src="${Vvveb.serverurl}/CDN/slidernewdesign2/sliderimage3tab.png" alt="1"/> <img class="slider-single-image mob edw-img-mob" src="${Vvveb.serverurl}/CDN/slidernewdesign2/sliderimage3mob.png" alt="1"/> </div></div><a class="slider-left edw-control-prev d-none"></a> <a class="slider-right edw-control-next d-none"></a> <div class="bullet-container edw-carousel-indicators"></div><input name="navigationbutton" class="form-check-input edw-slider-navigationbutton" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-navigationbullets" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-autoplay" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-pauseonhover" type="checkbox" checked="checked" style="display:none !important"> </div></div>`;
        var slidercss2 = `.edw_slider_unqreplaceid_ {overflow: hidden;}.edw_slider_unqreplaceid_ .slider-container {position: relative;margin: 0 auto;height: 668px;background-repeat: no-repeat !important;background-size: cover !important;}.edw_slider_unqreplaceid_ .slider-container .bullet-container {position: absolute;bottom: 10px;width: 100%;display: none;align-items: center;justify-content: center;}.edw_slider_unqreplaceid_ .slider-container .bullet-container .bullet {margin-right: 14px;height: 20px;width: 20px;border-radius: 50%;background-color: white;opacity: 0.5;}.edw_slider_unqreplaceid_ .slider-container .bullet-container .bullet:last-child {margin-right: 0px;}.edw_slider_unqreplaceid_ .slider-container .bullet-container .bullet.active {opacity: 1;}.edw_slider_unqreplaceid_ .slider-container .slider-content {position: relative;left: 50%;top: 50%;width: 70%;height: 100%;transform: translate(-50%, -50%);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single {position: absolute;z-index: 0;left: 50%;top: 50%;width: 100%;height: 100%;max-height: 525px;transform: translate(-50%, -50%);transition: z-index 0ms 250ms;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image {position: relative;left: 0;top: 0;width: 100%;height: 100%;object-fit: cover;box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);transition: 500ms cubic-bezier(0.17, 0.67, 0.55, 1.43);transform: scale(0);opacity: 0;border-radius: 10px;overflow: hidden;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image.tab {display: none;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image.mob {display: none;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.preactivede .slider-single-image {transform: translateX(-50%) scale(0);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.preactive {z-index: 1;left: -18%;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.preactive .slider-single-image {opacity: 0.3;transform: translateX(-25%) scale(0.8);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.preactive .slider-single-download {transform: translateX(-150px);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.preactive .slider-single-title {transform: translateX(-150px);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.preactive .slider-single-likes {transform: translateX(-150px);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.proactive {z-index: 1;left: 118%;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.proactive .slider-single-image {opacity: 0.3;transform: translateX(25%) scale(0.8);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.proactive .slider-single-download {transform: translateX(150px);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.proactive .slider-single-title {transform: translateX(150px);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.proactive .slider-single-likes {transform: translateX(150px);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.proactivede .slider-single-image {transform: translateX(50%) scale(0);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.active {z-index: 2;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.active .slider-single-image {opacity: 1;transform: translateX(0%) scale(1);border: 1px solid #FFF;}.edw_slider_unqreplaceid_ .slider-container .slider-left {position: absolute;z-index: 3;display: block;left: 50%;top: 95%;color: #ffffff;transform: translateY(-50%);margin-right: -2px;margin-left: 25px;background: url("${Vvveb.serverurl}/CDN/slidernewdesign3/icons/rightarrow.svg");width: 46px;height: 46px;background-repeat: no-repeat;background-position: center;cursor: pointer;}.edw_slider_unqreplaceid_ .slider-container .slider-left:hover {background: url("${Vvveb.serverurl}/CDN/slidernewdesign3/icons/arrowactivestateright.svg");}.edw_slider_unqreplaceid_ .slider-container .slider-right {position: absolute;z-index: 3;display: block;right: 50%;top: 95%;color: #ffffff;transform: translateY(-50%);margin-left: -2px;margin-right: 25px;background: url("${Vvveb.serverurl}/CDN/slidernewdesign3/icons/leftarrow.svg");width: 46px;height: 46px;background-repeat: no-repeat;background-position: center;cursor: pointer;}.edw_slider_unqreplaceid_ .slider-container .slider-right:hover {background: url("${Vvveb.serverurl}/CDN/slidernewdesign3/icons/arrowactivestateleft.svg");}.edw_slider_unqreplaceid_ .slider-container .not-visible {display: none !important;}@media (max-width: 769px) {.edw_slider_unqreplaceid_ .slider-content .slider-single .slider-single-image.desktop {display: none !important;}.edw_slider_unqreplaceid_ .slider-content .slider-single .slider-single-image.mob {display: none !important;}.edw_slider_unqreplaceid_ .slider-content .slider-single .slider-single-image.tab {display: block !important;}}@media (max-width: 425px) {.edw_slider_unqreplaceid_ .slider-container .slider-content {width: 85%;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single {max-width: 327px;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image.tab {display: none !important;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image.desktop {display: none !important;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image.mob {display: block !important;}}`;
        var sliderjs2 = `document.addEventListener("DOMContentLoaded",function(){var e,s=!1,a=!1,i=!1;document.querySelector(".edw_slider_unqreplaceid_ .edw-carousel").hasAttribute("data-ride")&&(s=document.querySelector(".edw-carousel[data-ride]").getAttribute("data-ride")),document.querySelector(".edw_slider_unqreplaceid_ .edw-carousel").hasAttribute("data-pause")&&(a=document.querySelector(".edw_slider_unqreplaceid_ .edw-carousel[data-pause]").getAttribute("data-pause")),document.querySelector(".edw_slider_unqreplaceid_ .edw-carousel").hasAttribute("data-interval")&&(i=document.querySelector(".edw_slider_unqreplaceid_ .edw-carousel[data-interval]").getAttribute("data-interval"));var t=document.querySelector(".edw_slider_unqreplaceid_ .slider-container"),r=document.querySelectorAll(".edw_slider_unqreplaceid_ .slider-single"),c=r.length-1,l=-1,v="";function d(){document.querySelector(".edw_slider_unqreplaceid_ .bullet-container").querySelectorAll(".bullet").forEach((e,s)=>{e.classList.remove("active"),s===l&&e.classList.add("active")})}function o(){l===r.length-1?(r[0].classList.add("not-visible"),r[r.length-1].classList.remove("not-visible"),document.querySelector(".edw_slider_unqreplaceid_ .slider-right").classList.add("not-visible"),document.querySelector(".edw_slider_unqreplaceid_ .slider-left").classList.remove("not-visible")):0===l?(r[r.length-1].classList.add("not-visible"),r[0].classList.remove("not-visible"),document.querySelector(".edw_slider_unqreplaceid_ .slider-left").classList.add("not-visible"),document.querySelector(".edw_slider_unqreplaceid_ .slider-right").classList.remove("not-visible")):(r[r.length-1].classList.remove("not-visible"),r[0].classList.remove("not-visible"),document.querySelector(".edw_slider_unqreplaceid_ .slider-left").classList.remove("not-visible"),document.querySelector(".edw_slider_unqreplaceid_ .slider-right").classList.remove("not-visible"))}function L(){if(l<c?l++:l=0,l>0)var e=r[l-1];else var e=r[c];var s=r[l];if(l<c)var a=r[l+1];else var a=r[0];1==r.length&&(s=r[0]),r.forEach(e=>{var s=e;s.classList.contains("preactivede")&&(s.classList.remove("preactivede"),s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.add("proactivede")),s.classList.contains("preactive")&&(s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("preactivede"))}),e.classList.remove("preactivede"),e.classList.remove("active"),e.classList.remove("proactive"),e.classList.remove("proactivede"),e.classList.add("preactive"),s.classList.remove("preactivede"),s.classList.remove("preactive"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("active"),a.classList.remove("preactivede"),a.classList.remove("preactive"),a.classList.remove("active"),a.classList.remove("proactivede"),a.classList.add("proactive"),d()}function n(){if(l>0?l--:l=c,l<c)var e=r[l+1];else var e=r[0];var s=r[l];if(l>0)var a=r[l-1];else var a=r[c];r.forEach(e=>{var s=e;s.classList.contains("proactive")&&(s.classList.remove("preactivede"),s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.add("proactivede")),s.classList.contains("proactivede")&&(s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("preactivede"))}),a.classList.remove("preactivede"),a.classList.remove("active"),a.classList.remove("proactive"),a.classList.remove("proactivede"),a.classList.add("preactive"),s.classList.remove("preactivede"),s.classList.remove("preactive"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("active"),e.classList.remove("preactivede"),e.classList.remove("preactive"),e.classList.remove("active"),e.classList.remove("proactivede"),e.classList.add("proactive"),d()}function p(){v=setInterval(function(){L()},i)}function m(){clearInterval(v)}1==r.length?(r[0].classList.remove("proactive"),r[0].classList.remove("preactive"),r[0].classList.add("active")):((e=document.querySelector(".edw_slider_unqreplaceid_ .bullet-container")).innerHTML="",r.forEach((t,r)=>{var c=document.createElement("div");c.classList.add("bullet"),c.id="bullet-index-"+r,c.addEventListener("click",()=>{(function e(s){for(var a=l>s?()=>L():()=>n();l!==s;)a()})(r),"false"!=i&&"false"!=s&&(m(),p())}),e.appendChild(c),t.classList.add("proactivede"),!1!=a&&(t.addEventListener("mouseover",()=>{m()}),t.addEventListener("mouseout",()=>{"false"!=i&&"false"!=s&&p()}))}),t.appendChild(e),document.querySelector(".edw_slider_unqreplaceid_ .slider-left").addEventListener("click",()=>{n(),"false"!=i&&"false"!=s&&(m(),p())}),document.querySelector(".edw_slider_unqreplaceid_ .slider-right").addEventListener("click",()=>{L(),"false"!=i&&"false"!=s&&(m(),p())}),setTimeout(function(){(function e(){if(l<c?l++:l=0,l>0)var s=r[l-1];else var s=r[c];var a=r[l];if(l<c)var i=r[l+1];else var i=r[0];1==r.length&&(a=r[0]),r.forEach(e=>{var s=e;s.classList.contains("preactivede")&&(s.classList.remove("preactivede"),s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.add("proactivede")),s.classList.contains("preactive")&&(s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("preactivede"))}),s.classList.remove("preactivede"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("preactive"),a.classList.remove("preactivede"),a.classList.remove("preactive"),a.classList.remove("proactive"),a.classList.remove("proactivede"),a.classList.add("active"),i.classList.remove("preactivede"),i.classList.remove("preactive"),i.classList.remove("active"),i.classList.remove("proactivede"),i.classList.add("proactive"),d()})()},500),"false"!=i&&"false"!=s&&p())});`;
        var appendnode2 = ` <div class="slider-single edw-slider-item"> <img class="slider-single-image desktop edw-img-desktop" src="${Vvveb.serverurl}/CDN/slidernewdesign2/slideimage1.png" alt="1" /> <img class="slider-single-image tab edw-img-tab" src="${Vvveb.serverurl}/CDN/slidernewdesign2/sliderimage1tab.png" alt="1" /> <img class="slider-single-image mob edw-img-mob" src="${Vvveb.serverurl}/CDN/slidernewdesign2/sliderimage1mob.png" alt="1" /> </div>`;
        Vvveb.Components.extend("_base", "html/slider2", {
            name: "Image slider",
            attributes: ['data-ebpb-slider2'],
            image: "icons/slider2.svg",
            classes: ['edwiser-pb-slider2'],
            html: (() => {
                return `<div title="Image-slider" class="edwiser-pb-slider2" data-vvveb-disabled-area contenteditable="false">${sliderhtml2}<style>${slidercss2}</style><script>${sliderjs2}</script></div>`;
            })(),
            beforeInit: function (node) {
                properties = [];
                var i = 0;
                var slideno = 0;
                var id = generateUniqueID();
                // var js = `<script>${sliderjs2}</script>`;
                // if(!$(node).find("script").length >0){
                //     node.innerHTML = node.innerHTML+js;
                // }
                node.innerHTML = node.innerHTML.replaceAll("_unqreplaceid_", id);;
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
                                Vvveb.Components.render("html/slider2");
                                return node;
                            },
                        },
                        {
                            name: SETTINGTITLES.IMAEGEDESKTOP,
                            key: "sliderimage" + i + "desktop",
                            htmlAttr: 'src',
                            inputtype: ImageInput,
                            edwclasses: "edwfilefield",
                            child: `.edw-carousel-item-${i} .edw-img-desktop`,

                        },
                        {
                            name: SETTINGTITLES.IMAGETAB,
                            key: "sliderimage" + i + "tab",
                            htmlAttr: 'src',
                            inputtype: ImageInput,
                            edwclasses: "edwfilefield",
                            child: `.edw-carousel-item-${i} .edw-img-tab`,
                        },
                        {
                            name: SETTINGTITLES.IMAGEMOB,
                            key: "sliderimage" + i + "mob",
                            htmlAttr: 'src',
                            inputtype: ImageInput,
                            edwclasses: "edwfilefield",
                            child: `.edw-carousel-item-${i} .edw-img-mob`,
                        }
                    );
                });
                properties = removeDeleteButton(node, properties);
                removeSettingsOnSingleSlide(node);
                if (!$(node).find('.edw-slider-inner-container').children('.edw-slider-item').hasClass('active')) {
                    $(node).find('.edw-slider-item').first().removeClass("proactive preactive").addClass('active');
                }

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
                        $(node).parent().find('.edw-slider-inner-container').append(appendnode2);
                        Vvveb.Components.render("html/slider2");

                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.BACKGROUNDIMG,
                    key: "slidebackgroundimage",
                    htmlAttr: 'data-url',
                    inputtype: ImageInput,
                    edwclasses: "edwfilefield",
                    child: '.slider-container.edw-carousel',
                    onChange: function (node, value, input) {
                        $(node).parent().find(this.child).css("background-image", "url(" + value + ")");
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
                // {
                //     name: SETTINGTITLES.SHOWNAVIGATIONBULLETS,
                //     key: "navigationbullets",
                //     htmlAttr: "checked",
                //     col:12,
                //     inline:true,
                //     inputtype: CheckboxInput,
                //     edwclasses: "edwcheckfield",
                //     child:'.edw-slider-navigationbullets',
                //     onChange: function (node, value, input) {
                //         if(value == true){
                //             $(node).parent().find('.edw-carousel-indicators').removeClass('d-none');
                //         }else{
                //             $(node).parent().find('.edw-carousel-indicators').addClass('d-none');
                //         }
                //         return node;
                //     }
                // },
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
                            $(node).parent().attr('data-ride', 'false');
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
                            $(node).parent().removeAttr('data-pause');
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
                    child: `.edw-carousel`,
                }
            ]
        });

        // Slider 4 --> Image slider with indicators
        var sliderhtml4 = `<div class="edw_slider_unqreplaceid_ edw_adv_slider edw-adv-slider-4 overflow-hidden"> <div class="slider-container edw-carousel" data-url="${Vvveb.serverurl}/CDN/slidernewdesign5/slider2bgimg.png" style="background: url('${Vvveb.serverurl}/CDN/slidernewdesign5/slider2bgimg.png');" data-ride="carousel" data-interval="3000" data-pause="hover"> <div class="slider-content edw-slider-inner-container"> <div class="slider-single edw-slider-item active"> <img class="slider-single-image desktop edw-img-desktop" src="${Vvveb.serverurl}/CDN/slidernewdesign4/sliderimage2.png" alt="1"/> <img class="slider-single-image tab edw-img-tab" src="${Vvveb.serverurl}/CDN/slidernewdesign4/sliderimage2tab.png" alt="1"/> <img class="slider-single-image mob edw-img-mob" src="${Vvveb.serverurl}/CDN/slidernewdesign4/sliderimage2mob.png" alt="1"/> </div><div class="slider-single edw-slider-item"> <img class="slider-single-image desktop edw-img-desktop" src="${Vvveb.serverurl}/CDN/slidernewdesign4/sliderimage1.png" alt="1"/> <img class="slider-single-image tab edw-img-tab" src="${Vvveb.serverurl}/CDN/slidernewdesign4/sliderimage1tab.png" alt="1"/> <img class="slider-single-image mob edw-img-mob" src="${Vvveb.serverurl}/CDN/slidernewdesign4/sliderimage1mob.png" alt="1"/> </div><div class="slider-single edw-slider-item"> <img class="slider-single-image desktop edw-img-desktop" src="${Vvveb.serverurl}/CDN/slidernewdesign4/sliderimage3.png" alt="1"/> <img class="slider-single-image tab edw-img-tab" src="${Vvveb.serverurl}/CDN/slidernewdesign4/sliderimage3tab.png" alt="1"/> <img class="slider-single-image mob edw-img-mob" src="${Vvveb.serverurl}/CDN/slidernewdesign4/sliderimage3mob.png" alt="1"/> </div></div><a class="slider-left edw-control-prev"></a> <a class="slider-right edw-control-next"></a> <div class="bullet-container edw-carousel-indicators"> <div class="bullet active" id="bullet-index-0"></div><div class="bullet " id="bullet-index-1"></div><div class="bullet " id="bullet-index-2"></div></div><input name="navigationbutton" class="form-check-input edw-slider-navigationbutton" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-navigationbullets" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-autoplay" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-pauseonhover" type="checkbox" checked="checked" style="display:none !important"> </div></div>`;
        var slidercss4 = `.edw_slider_unqreplaceid_ {overflow: hidden;}.edw_slider_unqreplaceid_ .slider-container {position: relative;margin: 0 auto;height: 668px;background-repeat: no-repeat !important;background-size: cover !important;}.edw_slider_unqreplaceid_ .slider-container .bullet-container {position: absolute !important;bottom: 20px;width: 100%;display: flex;align-items: center;justify-content: center;}.edw_slider_unqreplaceid_ .slider-container .bullet-container .bullet {margin-right: 14px;height: 8px;width: 8px;border-radius: 50%;background-color: #647390;opacity: 1;}.edw_slider_unqreplaceid_ .slider-container .bullet-container .bullet:last-child {margin-right: 0px;}.edw_slider_unqreplaceid_ .slider-container .bullet-container .bullet:hover {cursor: pointer;}.edw_slider_unqreplaceid_ .slider-container .bullet-container .bullet.active {opacity: 1;background-color: white !important;}.edw_slider_unqreplaceid_ .slider-container .slider-content {position: relative;left: 50%;top: 50%;width: 70%;height: 80%;transform: translate(-50%, -50%);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single {position: absolute !important;border-radius: 10px;border: 1px solid #FFF;z-index: 0;left: 0;top: 0;width: 100%;height: 100%;overflow: hidden;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .bg-overlay {height: 40%;width: 100%;position: absolute !important;left: 0px;top: 60%;border: 38px;border-radius: 0px 10px 10px 0px;background: linear-gradient(0deg, #FFF 25.37%, rgba(255, 255, 255, 0) 100%);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image {position: relative;left: 0;top: 0;width: 100%;height: 100%;transition: 500ms cubic-bezier(0.17, 0.67, 0.55, 1);transform: scale(0);opacity: 0;object-fit: cover;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image.tab {display: none;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image.mob {display: none;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.active {z-index: 2;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.active .slider-single-image {opacity: 1;transform: translateX(0%) scale(1);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.preactivede .slider-single-image {transform: translateX(-50%) scale(0);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.preactive {z-index: 1;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.preactive .slider-single-image {opacity: 0.3;transform: translateX(-25%) scale(0.8);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.proactive {z-index: 1;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.proactive .slider-single-image {opacity: 0.3;transform: translateX(25%) scale(0.8);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.proactive .slider-single-download {transform: translateX(150px);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.proactive .slider-single-title {transform: translateX(150px);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.proactive .slider-single-likes {transform: translateX(150px);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.proactivede .slider-single-image {transform: translateX(50%) scale(0);}.edw_slider_unqreplaceid_ .slider-container .slider-left {position: absolute !important;z-index: 3;display: block;left: 90%;top: 50%;color: #ffffff;transform: translateY(-50%);background: url("${Vvveb.serverurl}/CDN/slidernewdesign4/icons/rightarrow.svg");background-repeat: no-repeat;width: 46px;height: 46px;background-repeat: no-repeat;background-position: center;cursor: pointer;}.edw_slider_unqreplaceid_ .slider-container .slider-left:hover {background: url("${Vvveb.serverurl}/CDN/slidernewdesign4/icons/arrowactivestateright.svg");}.edw_slider_unqreplaceid_ .slider-container .slider-right {position: absolute !important;z-index: 3;display: block;right: 90%;top: 50%;color: #ffffff;transform: translateY(-50%);background: url("${Vvveb.serverurl}/CDN/slidernewdesign4/icons/leftarrow.svg");width: 46px;height: 46px;background-repeat: no-repeat;background-position: center;cursor: pointer;}.edw_slider_unqreplaceid_ .slider-container .slider-right:hover {background: url("${Vvveb.serverurl}/CDN/slidernewdesign4/icons/arrowactivestateleft.svg");}.edw_slider_unqreplaceid_ .slider-container .not-visible {display: none !important;}@media (max-width: 769px) {.edw_slider_unqreplaceid_ .slider-container .slider-left, .edw_slider_unqreplaceid_ .slider-container .slider-right {display: none;}.edw_slider_unqreplaceid_ .slider-container .slider-content {width: 95%;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image.desktop {display: none !important;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image.mob {display: none !important;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image.tab {display: block !important;}}@media (max-width: 425px) {.edw_slider_unqreplaceid_ .slider-container .slider-content {width: 90%;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image.tab {display: none !important;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image.desktop {display: none !important;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image.mob {display: block !important;}.edw_slider_unqreplaceid_ .slider-container .slider-right {display: none;}.edw_slider_unqreplaceid_ .slider-container .slider-left {display: none;}}`;
        var sliderjs4 = `document.addEventListener("DOMContentLoaded",function(){var e,s=!1,a=!1,i=!1;document.querySelector(".edw_slider_unqreplaceid_ .edw-carousel").hasAttribute("data-ride")&&(s=document.querySelector(".edw-carousel[data-ride]").getAttribute("data-ride")),document.querySelector(".edw_slider_unqreplaceid_ .edw-carousel").hasAttribute("data-pause")&&(a=document.querySelector(".edw_slider_unqreplaceid_ .edw-carousel[data-pause]").getAttribute("data-pause")),document.querySelector(".edw_slider_unqreplaceid_ .edw-carousel").hasAttribute("data-interval")&&(i=document.querySelector(".edw_slider_unqreplaceid_ .edw-carousel[data-interval]").getAttribute("data-interval"));var t=document.querySelector(".edw_slider_unqreplaceid_ .slider-container"),r=document.querySelectorAll(".edw_slider_unqreplaceid_ .slider-single"),c=r.length-1,l=-1,v="";function d(){document.querySelector(".edw_slider_unqreplaceid_ .bullet-container").querySelectorAll(".bullet").forEach((e,s)=>{e.classList.remove("active"),s===l&&e.classList.add("active")})}function o(){l===r.length-1?(r[0].classList.add("not-visible"),r[r.length-1].classList.remove("not-visible"),document.querySelector(".edw_slider_unqreplaceid_ .slider-right").classList.add("not-visible"),document.querySelector(".edw_slider_unqreplaceid_ .slider-left").classList.remove("not-visible")):0===l?(r[r.length-1].classList.add("not-visible"),r[0].classList.remove("not-visible"),document.querySelector(".edw_slider_unqreplaceid_ .slider-left").classList.add("not-visible"),document.querySelector(".edw_slider_unqreplaceid_ .slider-right").classList.remove("not-visible")):(r[r.length-1].classList.remove("not-visible"),r[0].classList.remove("not-visible"),document.querySelector(".edw_slider_unqreplaceid_ .slider-left").classList.remove("not-visible"),document.querySelector(".edw_slider_unqreplaceid_ .slider-right").classList.remove("not-visible"))}function L(){if(l<c?l++:l=0,l>0)var e=r[l-1];else var e=r[c];var s=r[l];if(l<c)var a=r[l+1];else var a=r[0];1==r.length&&(s=r[0]),r.forEach(e=>{var s=e;s.classList.contains("preactivede")&&(s.classList.remove("preactivede"),s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.add("proactivede")),s.classList.contains("preactive")&&(s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("preactivede"))}),e.classList.remove("preactivede"),e.classList.remove("active"),e.classList.remove("proactive"),e.classList.remove("proactivede"),e.classList.add("preactive"),s.classList.remove("preactivede"),s.classList.remove("preactive"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("active"),a.classList.remove("preactivede"),a.classList.remove("preactive"),a.classList.remove("active"),a.classList.remove("proactivede"),a.classList.add("proactive"),d()}function n(){if(l>0?l--:l=c,l<c)var e=r[l+1];else var e=r[0];var s=r[l];if(l>0)var a=r[l-1];else var a=r[c];r.forEach(e=>{var s=e;s.classList.contains("proactive")&&(s.classList.remove("preactivede"),s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.add("proactivede")),s.classList.contains("proactivede")&&(s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("preactivede"))}),a.classList.remove("preactivede"),a.classList.remove("active"),a.classList.remove("proactive"),a.classList.remove("proactivede"),a.classList.add("preactive"),s.classList.remove("preactivede"),s.classList.remove("preactive"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("active"),e.classList.remove("preactivede"),e.classList.remove("preactive"),e.classList.remove("active"),e.classList.remove("proactivede"),e.classList.add("proactive"),d()}function p(){v=setInterval(function(){L()},i)}function m(){clearInterval(v)}1==r.length?(r[0].classList.remove("proactive"),r[0].classList.remove("preactive"),r[0].classList.add("active")):((e=document.querySelector(".edw_slider_unqreplaceid_ .bullet-container")).innerHTML="",r.forEach((t,r)=>{var c=document.createElement("div");c.classList.add("bullet"),c.id="bullet-index-"+r,c.addEventListener("click",()=>{(function e(s){for(var a=l>s?()=>L():()=>n();l!==s;)a()})(r),"false"!=i&&"false"!=s&&(m(),p())}),e.appendChild(c),t.classList.add("proactivede"),!1!=a&&(t.addEventListener("mouseover",()=>{m()}),t.addEventListener("mouseout",()=>{"false"!=i&&"false"!=s&&p()}))}),t.appendChild(e),document.querySelector(".edw_slider_unqreplaceid_ .slider-left").addEventListener("click",()=>{n(),"false"!=i&&"false"!=s&&(m(),p())}),document.querySelector(".edw_slider_unqreplaceid_ .slider-right").addEventListener("click",()=>{L(),"false"!=i&&"false"!=s&&(m(),p())}),setTimeout(function(){(function e(){if(l<c?l++:l=0,l>0)var s=r[l-1];else var s=r[c];var a=r[l];if(l<c)var i=r[l+1];else var i=r[0];1==r.length&&(a=r[0]),r.forEach(e=>{var s=e;s.classList.contains("preactivede")&&(s.classList.remove("preactivede"),s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.add("proactivede")),s.classList.contains("preactive")&&(s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("preactivede"))}),s.classList.remove("preactivede"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("preactive"),a.classList.remove("preactivede"),a.classList.remove("preactive"),a.classList.remove("proactive"),a.classList.remove("proactivede"),a.classList.add("active"),i.classList.remove("preactivede"),i.classList.remove("preactive"),i.classList.remove("active"),i.classList.remove("proactivede"),i.classList.add("proactive"),d()})()},500),"false"!=i&&"false"!=s&&p())});`;
        var appendnode4 = ` <div class="slider-single edw-slider-item"> <img class="slider-single-image desktop edw-img-desktop" src="${Vvveb.serverurl}/CDN/slidernewdesign4/sliderimage1.png" alt="1"/> <img class="slider-single-image tab edw-img-tab" src="${Vvveb.serverurl}/CDN/slidernewdesign4/sliderimage1tab.png" alt="1"/> <img class="slider-single-image mob edw-img-mob" src="${Vvveb.serverurl}/CDN/slidernewdesign4/sliderimage1mob.png" alt="1"/> </div>`;
        Vvveb.Components.extend("_base", "html/slider4", {
            name: "Image slider with indicators",
            attributes: ['data-ebpb-slider4'],
            image: "icons/slider4.svg",
            classes: ['edwiser-pb-slider4'],
            html: (() => {
                return `<div title="Image-slider-with-indicators" class="edwiser-pb-slider4" data-vvveb-disabled-area contenteditable="false">${sliderhtml4}<style>${slidercss4}</style><script>${sliderjs4}</script></div>`;
            })(),
            beforeInit: function (node) {
                properties = [];
                var i = 0;
                var slideno = 0;
                var id = generateUniqueID();
                // var js = `<script>${sliderjs4}</script>`;
                // if(!$(node).find("script").length >0){
                //     node.innerHTML = node.innerHTML+js;
                // }
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
                                Vvveb.Components.render("html/slider4");
                                return node;
                            },
                        },
                        {
                            name: SETTINGTITLES.IMAEGEDESKTOP,
                            key: "sliderimage" + i + "desktop",
                            htmlAttr: 'src',
                            inputtype: ImageInput,
                            edwclasses: "edwfilefield",
                            child: `.edw-carousel-item-${i} .edw-img-desktop`,

                        },
                        {
                            name: SETTINGTITLES.IMAGETAB,
                            key: "sliderimage" + i + "tab",
                            htmlAttr: 'src',
                            inputtype: ImageInput,
                            edwclasses: "edwfilefield",
                            child: `.edw-carousel-item-${i} .edw-img-tab`,
                        },
                        {
                            name: SETTINGTITLES.IMAGEMOB,
                            key: "sliderimage" + i + "mob",
                            htmlAttr: 'src',
                            inputtype: ImageInput,
                            edwclasses: "edwfilefield",
                            child: `.edw-carousel-item-${i} .edw-img-mob`,
                        }
                    );
                });
                properties = removeDeleteButton(node, properties);
                removeSettingsOnSingleSlide(node);
                if (!$(node).find('.edw-slider-inner-container').children('.edw-slider-item').hasClass('active')) {
                    $(node).find('.edw-slider-item').first().removeClass("proactive preactive").addClass('active');
                }
                updateIndicators(node, i);
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
                        $(node).parent().find('.edw-slider-inner-container').append(appendnode4);
                        Vvveb.Components.render("html/slider4");

                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.BACKGROUNDIMG,
                    key: "slidebackgroundimage",
                    htmlAttr: 'data-url',
                    inputtype: ImageInput,
                    edwclasses: "edwfilefield",
                    child: '.slider-container.edw-carousel',
                    onChange: function (node, value, input) {
                        $(node).parent().find(this.child).css("background-image", "url(" + value + ")");
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
                            $(node).parent().attr('data-ride', 'false');
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
                            $(node).parent().removeAttr('data-pause');
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
                    child: `.edw-carousel`,
                }
            ]
        });

        // Slider 5 --> Image slider with caption
        var sliderhtml5 = ` <div class="edw_slider_unqreplaceid_ edw_adv_slider edw-adv-slider-5 overflow-hidden"> <div class="slider-container edw-carousel" data-url="${Vvveb.serverurl}/CDN/slidernewdesign5/slider2bgimg.png" style="background: url('${Vvveb.serverurl}/CDN/slidernewdesign5/slider2bgimg.png');" data-ride="carousel" data-interval="3000" data-pause="hover"> <div class="slider-content edw-slider-inner-container"> <div class="slider-single edw-slider-item active"> <img class="slider-single-image desktop edw-img-desktop" src="${Vvveb.serverurl}/CDN/slidernewdesign4/sliderimage2.png" alt="1"/> <img class="slider-single-image tab edw-img-tab" src="${Vvveb.serverurl}/CDN/slidernewdesign4/sliderimage2tab.png" alt="1"/> <img class="slider-single-image mob edw-img-mob" src="${Vvveb.serverurl}/CDN/slidernewdesign4/sliderimage2mob.png" alt="1"/> <div class="bg-overlay"></div><div class="slider-caption"> <h5 class="m-0 slider-caption-heading edw-carousel-content-heading">Let’s design your future!</h5> <p class="m-0 slider-caption-para edw-carousel-content-para">Edwiser School inspires a love of learning in children</p></div></div><div class="slider-single edw-slider-item"> <img class="slider-single-image desktop edw-img-desktop" src="${Vvveb.serverurl}/CDN/slidernewdesign4/sliderimage1.png" alt="1"/> <img class="slider-single-image tab edw-img-tab" src="${Vvveb.serverurl}/CDN/slidernewdesign4/sliderimage1tab.png" alt="1"/> <img class="slider-single-image mob edw-img-mob" src="${Vvveb.serverurl}/CDN/slidernewdesign4/sliderimage1mob.png" alt="1"/> <div class="bg-overlay"></div><div class="slider-caption"> <h5 class="m-0 slider-caption-heading edw-carousel-content-heading">Let’s design your future!</h5> <p class="m-0 slider-caption-para edw-carousel-content-para">Edwiser School inspires a love of learning in children</p></div></div><div class="slider-single edw-slider-item"> <img class="slider-single-image desktop edw-img-desktop" src="${Vvveb.serverurl}/CDN/slidernewdesign4/sliderimage3.png" alt="1"/> <img class="slider-single-image tab edw-img-tab" src="${Vvveb.serverurl}/CDN/slidernewdesign4/sliderimage3tab.png" alt="1"/> <img class="slider-single-image mob edw-img-mob" src="${Vvveb.serverurl}/CDN/slidernewdesign4/sliderimage3mob.png" alt="1"/> <div class="bg-overlay"></div><div class="slider-caption"> <h5 class="m-0 slider-caption-heading edw-carousel-content-heading">Let’s design your future!</h5> <p class="m-0 slider-caption-para edw-carousel-content-para">Edwiser School inspires a love of learning in children</p></div></div></div><a class="slider-left edw-control-prev"></a> <a class="slider-right edw-control-next"></a> <div class="bullet-container edw-carousel-indicators"> <div class="bullet active" id="bullet-index-0"></div><div class="bullet " id="bullet-index-1"></div><div class="bullet " id="bullet-index-2"></div></div><input name="navigationbutton" class="form-check-input edw-slider-navigationbutton" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-navigationbullets" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-autoplay" type="checkbox" checked="checked" style="display:none !important"> <input name="navigationbutton" class="form-check-input edw-slider-pauseonhover" type="checkbox" checked="checked" style="display:none !important"> </div></div>`;
        var slidercss5 = `.edw_slider_unqreplaceid_ {overflow: hidden;}.edw_slider_unqreplaceid_ .slider-container {position: relative;margin: 0 auto;height: 668px;background-repeat: no-repeat !important;background-size: cover !important;}.edw_slider_unqreplaceid_ .slider-container .bullet-container {position: absolute !important;bottom: 20px;width: 100%;display: flex;align-items: center;justify-content: center;}.edw_slider_unqreplaceid_ .slider-container .bullet-container .bullet {margin-right: 14px;height: 8px;width: 8px;border-radius: 50%;background-color: #647390;opacity: 1;}.edw_slider_unqreplaceid_ .slider-container .bullet-container .bullet:last-child {margin-right: 0px;}.edw_slider_unqreplaceid_ .slider-container .bullet-container .bullet.active {opacity: 1;background-color: white !important;}.edw_slider_unqreplaceid_ .slider-container .bullet-container .bullet:hover {cursor: pointer;}.edw_slider_unqreplaceid_ .slider-container .slider-content {position: relative;left: 50%;top: 50%;width: 70%;height: 80%;transform: translate(-50%, -50%);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single {position: absolute !important;border-radius: 10px;border: 1px solid #FFF;z-index: 0;left: 0;top: 0;width: 100%;height: 100%;transition: z-index 0ms 250ms;overflow: hidden;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .bg-overlay {height: 40%;width: 100%;position: absolute !important;left: 0px;top: 60%;border: 38px;border-radius: 0px 10px 10px 0px;background: linear-gradient(0deg, #FFF 25.37%, rgba(255, 255, 255, 0) 100%);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-caption {position: absolute !important;bottom: 3px;left: 50%;width: 98%;text-align: center;transform: translate(-50%, -50%);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-caption .slider-caption-heading {font-size: 48px;font-style: normal;font-weight: 700;line-height: 56px;margin: 0px;color: #313848;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-caption .slider-caption-para {font-size: 18px;font-style: normal;font-weight: 400;line-height: 26px;margin: 0px;color: #4C5A73;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image {position: relative;left: 0;top: 0;width: 100%;height: 100%;transition: 500ms cubic-bezier(0.17, 0.67, 0.55, 1);transform: scale(0);opacity: 1;object-fit: cover;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image.tab, .edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image.mob {display: none;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.active {z-index: 2;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.active .slider-single-image {opacity: 1;transform: translateX(0%) scale(1);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.preactivede .slider-single-image {transform: translateX(-50%) scale(0);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.preactive {z-index: 1;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.preactive .slider-single-image {opacity: 0.3;transform: translateX(-25%) scale(0.8);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.proactive {z-index: 1;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.proactive .slider-single-image {opacity: 0.3;transform: translateX(25%) scale(0.8);}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single.proactivede .slider-single-image {transform: translateX(50%) scale(0);}.edw_slider_unqreplaceid_ .slider-container .slider-left {position: absolute !important;z-index: 3;display: block;left: 90%;top: 50%;color: #ffffff;transform: translateY(-50%);background: url("${Vvveb.serverurl}/CDN/slidernewdesign5/icons/rightarrow.svg");background-repeat: no-repeat;}.edw_slider_unqreplaceid_ .slider-container .slider-left:hover {background: url("${Vvveb.serverurl}/CDN/slidernewdesign5/icons/arrowactivestateright.svg");}.edw_slider_unqreplaceid_ .slider-container .slider-right {position: absolute !important;z-index: 3;display: block;right: 90%;top: 50%;color: #ffffff;transform: translateY(-50%);background: url("${Vvveb.serverurl}/CDN/slidernewdesign5/icons/leftarrow.svg");}.edw_slider_unqreplaceid_ .slider-container .slider-right:hover {background: url("${Vvveb.serverurl}/CDN/slidernewdesign5/icons/arrowactivestateleft.svg");}.edw_slider_unqreplaceid_ .slider-container .slider-right, .edw_slider_unqreplaceid_ .slider-container .slider-left {width: 46px;height: 46px;background-repeat: no-repeat;background-position: center;cursor: pointer;}.edw_slider_unqreplaceid_ .slider-container .not-visible {display: none !important;}@media (max-width: 769px) {.edw_slider_unqreplaceid_ .slider-container .slider-left, .edw_slider_unqreplaceid_ .slider-container .slider-right {display: none;}.edw_slider_unqreplaceid_ .slider-container .slider-content {width: 95%;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image.desktop {display: none !important;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image.mob {display: none !important;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image.tab {display: block !important;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-caption .slider-caption-heading {font-size: 34px;font-style: normal;font-weight: 700;line-height: 42px;}}@media (max-width: 426px) {.edw_slider_unqreplaceid_ .slider-container .slider-content {width: 90%;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image.tab {display: none !important;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image.desktop {display: none !important;}.edw_slider_unqreplaceid_ .slider-container .slider-content .slider-single .slider-single-image.mob {display: block !important;}}`;
        var sliderjs5 = `document.addEventListener("DOMContentLoaded",function(){var e,s=!1,a=!1,i=!1;document.querySelector(".edw_slider_unqreplaceid_ .edw-carousel").hasAttribute("data-ride")&&(s=document.querySelector(".edw-carousel[data-ride]").getAttribute("data-ride")),document.querySelector(".edw_slider_unqreplaceid_ .edw-carousel").hasAttribute("data-pause")&&(a=document.querySelector(".edw_slider_unqreplaceid_ .edw-carousel[data-pause]").getAttribute("data-pause")),document.querySelector(".edw_slider_unqreplaceid_ .edw-carousel").hasAttribute("data-interval")&&(i=document.querySelector(".edw_slider_unqreplaceid_ .edw-carousel[data-interval]").getAttribute("data-interval"));var t=document.querySelector(".edw_slider_unqreplaceid_ .slider-container"),r=document.querySelectorAll(".edw_slider_unqreplaceid_ .slider-single"),c=r.length-1,l=-1,v="";function d(){document.querySelector(".edw_slider_unqreplaceid_ .bullet-container").querySelectorAll(".bullet").forEach((e,s)=>{e.classList.remove("active"),s===l&&e.classList.add("active")})}function o(){l===r.length-1?(r[0].classList.add("not-visible"),r[r.length-1].classList.remove("not-visible"),document.querySelector(".edw_slider_unqreplaceid_ .slider-right").classList.add("not-visible"),document.querySelector(".edw_slider_unqreplaceid_ .slider-left").classList.remove("not-visible")):0===l?(r[r.length-1].classList.add("not-visible"),r[0].classList.remove("not-visible"),document.querySelector(".edw_slider_unqreplaceid_ .slider-left").classList.add("not-visible"),document.querySelector(".edw_slider_unqreplaceid_ .slider-right").classList.remove("not-visible")):(r[r.length-1].classList.remove("not-visible"),r[0].classList.remove("not-visible"),document.querySelector(".edw_slider_unqreplaceid_ .slider-left").classList.remove("not-visible"),document.querySelector(".edw_slider_unqreplaceid_ .slider-right").classList.remove("not-visible"))}function L(){if(l<c?l++:l=0,l>0)var e=r[l-1];else var e=r[c];var s=r[l];if(l<c)var a=r[l+1];else var a=r[0];1==r.length&&(s=r[0]),r.forEach(e=>{var s=e;s.classList.contains("preactivede")&&(s.classList.remove("preactivede"),s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.add("proactivede")),s.classList.contains("preactive")&&(s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("preactivede"))}),e.classList.remove("preactivede"),e.classList.remove("active"),e.classList.remove("proactive"),e.classList.remove("proactivede"),e.classList.add("preactive"),s.classList.remove("preactivede"),s.classList.remove("preactive"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("active"),a.classList.remove("preactivede"),a.classList.remove("preactive"),a.classList.remove("active"),a.classList.remove("proactivede"),a.classList.add("proactive"),d()}function n(){if(l>0?l--:l=c,l<c)var e=r[l+1];else var e=r[0];var s=r[l];if(l>0)var a=r[l-1];else var a=r[c];r.forEach(e=>{var s=e;s.classList.contains("proactive")&&(s.classList.remove("preactivede"),s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.add("proactivede")),s.classList.contains("proactivede")&&(s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("preactivede"))}),a.classList.remove("preactivede"),a.classList.remove("active"),a.classList.remove("proactive"),a.classList.remove("proactivede"),a.classList.add("preactive"),s.classList.remove("preactivede"),s.classList.remove("preactive"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("active"),e.classList.remove("preactivede"),e.classList.remove("preactive"),e.classList.remove("active"),e.classList.remove("proactivede"),e.classList.add("proactive"),d()}function p(){v=setInterval(function(){L()},i)}function m(){clearInterval(v)}1==r.length?(r[0].classList.remove("proactive"),r[0].classList.remove("preactive"),r[0].classList.add("active")):((e=document.querySelector(".edw_slider_unqreplaceid_ .bullet-container")).innerHTML="",r.forEach((t,r)=>{var c=document.createElement("div");c.classList.add("bullet"),c.id="bullet-index-"+r,c.addEventListener("click",()=>{(function e(s){for(var a=l>s?()=>L():()=>n();l!==s;)a()})(r),"false"!=i&&"false"!=s&&(m(),p())}),e.appendChild(c),t.classList.add("proactivede"),!1!=a&&(t.addEventListener("mouseover",()=>{m()}),t.addEventListener("mouseout",()=>{"false"!=i&&"false"!=s&&p()}))}),t.appendChild(e),document.querySelector(".edw_slider_unqreplaceid_ .slider-left").addEventListener("click",()=>{n(),"false"!=i&&"false"!=s&&(m(),p())}),document.querySelector(".edw_slider_unqreplaceid_ .slider-right").addEventListener("click",()=>{L(),"false"!=i&&"false"!=s&&(m(),p())}),setTimeout(function(){(function e(){if(l<c?l++:l=0,l>0)var s=r[l-1];else var s=r[c];var a=r[l];if(l<c)var i=r[l+1];else var i=r[0];1==r.length&&(a=r[0]),r.forEach(e=>{var s=e;s.classList.contains("preactivede")&&(s.classList.remove("preactivede"),s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.add("proactivede")),s.classList.contains("preactive")&&(s.classList.remove("preactive"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("preactivede"))}),s.classList.remove("preactivede"),s.classList.remove("active"),s.classList.remove("proactive"),s.classList.remove("proactivede"),s.classList.add("preactive"),a.classList.remove("preactivede"),a.classList.remove("preactive"),a.classList.remove("proactive"),a.classList.remove("proactivede"),a.classList.add("active"),i.classList.remove("preactivede"),i.classList.remove("preactive"),i.classList.remove("active"),i.classList.remove("proactivede"),i.classList.add("proactive"),d()})()},500),"false"!=i&&"false"!=s&&p())});`;
        var appendnode5 = ` <div class="slider-single edw-slider-item"> <img class="slider-single-image desktop edw-img-desktop" src="${Vvveb.serverurl}/CDN/slidernewdesign5/sliderimage1.png" alt="1"/> <img class="slider-single-image tab edw-img-tab" src="${Vvveb.serverurl}/CDN/slidernewdesign5/sliderimage1tab.png" alt="1"/> <img class="slider-single-image mob edw-img-mob" src="${Vvveb.serverurl}/CDN/slidernewdesign5/sliderimage1mob.png" alt="1"/> <div class="bg-overlay"></div><div class="slider-caption"> <h5 class="m-0 slider-caption-heading edw-carousel-content-heading">Let’s design your future!</h5> <p class="m-0 slider-caption-para edw-carousel-content-para">Edwiser School inspires a love of learning in children</p></div></div>`;
        Vvveb.Components.extend("_base", "html/slider5", {
            name: "Image slider with caption",
            attributes: ['data-ebpb-slider5'],
            image: "icons/slider5.svg",
            classes: ['edwiser-pb-slider5'],
            html: (() => {
                return `<div title="Image-slider-with-caption" class="edwiser-pb-slider5" data-vvveb-disabled-area contenteditable="false">${sliderhtml5}<style>${slidercss5}</style><script>${sliderjs5}</script></div>`;
            })(),
            beforeInit: function (node) {
                properties = [];
                var i = 0;
                var slideno = 0;
                var id = generateUniqueID();
                // var js = `<script>${sliderjs5}</script>`;
                // if(!$(node).find("script").length >0){
                //     node.innerHTML = node.innerHTML+js;
                // }
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
                                Vvveb.Components.render("html/slider5");
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
                            name: SETTINGTITLES.IMAEGEDESKTOP,
                            key: "sliderimage" + i + "desktop",
                            htmlAttr: 'src',
                            inputtype: ImageInput,
                            edwclasses: "edwfilefield",
                            child: `.edw-carousel-item-${i} .edw-img-desktop`,

                        },
                        {
                            name: SETTINGTITLES.IMAGETAB,
                            key: "sliderimage" + i + "tab",
                            htmlAttr: 'src',
                            inputtype: ImageInput,
                            edwclasses: "edwfilefield",
                            child: `.edw-carousel-item-${i} .edw-img-tab`,
                        },
                        {
                            name: SETTINGTITLES.IMAGEMOB,
                            key: "sliderimage" + i + "mob",
                            htmlAttr: 'src',
                            inputtype: ImageInput,
                            edwclasses: "edwfilefield",
                            child: `.edw-carousel-item-${i} .edw-img-mob`,
                        }
                    );
                });
                properties = removeDeleteButton(node, properties);
                removeSettingsOnSingleSlide(node);
                if (!$(node).find('.edw-slider-inner-container').children('.edw-slider-item').hasClass('active')) {
                    $(node).find('.edw-slider-item').first().removeClass("proactive preactive").addClass('active');
                }
                updateIndicators(node, i);
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
                        $(node).parent().find('.edw-slider-inner-container').append(appendnode5);
                        Vvveb.Components.render("html/slider5");

                        return node;
                    }
                },
                {
                    name: SETTINGTITLES.BACKGROUNDIMG,
                    key: "slidebackgroundimage",
                    htmlAttr: 'data-url',
                    inputtype: ImageInput,
                    edwclasses: "edwfilefield",
                    child: '.slider-container.edw-carousel',
                    onChange: function (node, value, input) {
                        $(node).parent().find(this.child).css("background-image", "url(" + value + ")");
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
                            $(node).parent().attr('data-ride', 'false');
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
                            $(node).parent().removeAttr('data-pause');
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
                    child: `.edw-carousel`,
                }
            ]
        });

        // Slider 10 --> Image slider with Text
        var sliderhtml10 = `<section class="gallery-with-text edw_gallery__unqreplaceid_ overflow-hidden" title="section-gallery-with-text"><div class="section-container wrapper"><div class="right-section"><div class="nav buttons-wrapper edw-nav-wrapper" id="v-pills-tab" role="tablist"><button class="btn-tab edw-tab-btn active" id="storytelling-tab" data-toggle="pill" data-target="#storytelling" type="button" role="tab" aria-controls="storytelling" aria-selected="true">Compelling storytelling</button><button class="btn-tab edw-tab-btn" id="thinking-tab" data-toggle="pill" data-target="#thinking" type="button" role="tab" aria-controls="thinking" aria-selected="false">Design thinking</button><button class="btn-tab edw-tab-btn" id="results-tab" data-toggle="pill" data-target="#results" type="button" role="tab" aria-controls="results" aria-selected="false">Measurable results</button><button class="btn-tab edw-tab-btn" id="processes-tab" data-toggle="pill" data-target="#processes" type="button" role="tab" aria-controls="processes" aria-selected="false">Continuous processes</button></div><div class="tab-content edw-slider-inner-container" id="v-pills-tabContent"><div class="tab-pane edw-slider-item active" id="storytelling" role="tabpanel" aria-labelledby="storytelling-tab"><div class="img-box"><img src="${Vvveb.serverurl}/CDN/slidernewdesign10/images/card-images/image-1.png" alt="image-1"></div></div><div class="tab-pane edw-slider-item" id="thinking" role="tabpanel" aria-labelledby="thinking-tab"><div class="img-box"><img src="${Vvveb.serverurl}/CDN/slidernewdesign10/images/card-images/image-2.png" alt="image-1"></div></div><div class="tab-pane edw-slider-item" id="results" role="tabpanel" aria-labelledby="results-tab"><div class="img-box"><img src="${Vvveb.serverurl}/CDN/slidernewdesign10/images/card-images/image-3.png" alt="image-1"></div></div><div class="tab-pane edw-slider-item" id="processes" role="tabpanel" aria-labelledby="processes-tab"><div class="img-box"><img src="${Vvveb.serverurl}/CDN/slidernewdesign10/images/card-images/image-4.png" alt="image-1"></div></div></div></div></div></section>`;
        var slidercss10 = ` .gallery-with-text {padding: 50px 24px;}.gallery-with-text .section-container {max-width: 1320px;margin: 0 auto;}.gallery-with-text .right-section {position: relative;padding-left: 250px;}.gallery-with-text .buttons-wrapper {position: absolute !important;top: 50%;left: 15px;transform: translateY(-50%);z-index: 1;display: flex;flex-direction: column;gap: 3px;border-radius: 4px;border: 1px solid #D9D9D9;background: #FFF;box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.1);padding: 15px 0;}.gallery-with-text .btn-tab {padding: 27px 50px;background-color: #fff;border: 0;display: flex;justify-content: left;text-align: left;word-break: break-word;color: var(--font-headings, #313848);font-size: 18px;font-weight: 500;line-height: 26px;max-width: 370px;}.gallery-with-text .btn-tab.active {padding: 27px 65px;max-width: 400px;margin-left: -15px;margin-right: -15px;background: linear-gradient(90deg, #5A60F5 0%, #12162E 121.17%);color: #fff;border-radius: 4px;}.gallery-with-text .tab-content .img-box {width: 100%;height: 490px;}.gallery-with-text .tab-content .img-box img {width: 100%;height: 100%;object-fit: cover;border-radius: 4px 100px 4px 4px;overflow: hidden;}.gallery-with-text .tab-pane.active {animation: toLeft 0.3s ease-in forwards;}@keyframes toLeft {0% {transform: translateX(100%);}100% {transform: translateX(0%);}}@media screen and (max-width: 1200px) {.gallery-with-text .left-section {max-width: 250px;}}@media screen and (max-width: 1024px) {.gallery-with-text .right-section {padding-left: 0;}.gallery-with-text .btn-tab, .gallery-with-text .btn-tab.active {max-width: 250px;}}@media screen and (max-width: 1024px) and (min-width: 768px) {.gallery-with-text .section-container {max-width: 820px;}.gallery-with-text .buttons-wrapper {transform: unset;flex-direction: row;flex-wrap: no-wrap;position: static !important;margin: 0 0 20px;padding: 10px;box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.1);justify-content: space-between;}.gallery-with-text .btn-tab {font-size: 14px;padding: 10px;}.gallery-with-text .btn-tab.active {margin: 0;padding: 10px 12px;border-radius: 4px;}}@media screen and (max-width: 767px) {.gallery-with-text {padding-left: 0;padding-right: 0;}.gallery-with-text .right-section {margin-bottom: 270px;}.gallery-with-text .buttons-wrapper {position: absolute !important;top: unset;left: 50%;bottom: 0;transform: translate(-50%, 270px);min-width: 350px;max-width: 90%;}.gallery-with-text .btn-tab, .gallery-with-text .btn-tab.active {max-width: 100%;}.gallery-with-text .btn-tab.active {max-width: calc(100% + 30px);}}@media screen and (max-width: 450px) {.gallery-with-text .buttons-wrapper {min-width: 80%;max-width: 80%;}.gallery-with-text .btn-tab {font-size: 18px;padding: 25px;}.gallery-with-text .btn-tab.active {padding: 25px 40px;}}@media screen and (max-width: 1024px) {.main-wrapper {display: block;}.left-section {max-width: 820px;margin: 0 auto;text-align: center;padding: 50px 24px 0;}}@media screen and (min-width: 1024px) {.edw-limitedwidth-block .main-wrapper {display: block;}.edw-limitedwidth-block .left-section {max-width: 820px;margin: 0 auto;text-align: center;padding: 50px 24px 0;}.edw-limitedwidth-block .gallery-with-text .right-section {padding-left: 0;}.edw-limitedwidth-block .gallery-with-text .section-container {max-width: 820px;}.edw-limitedwidth-block .gallery-with-text .buttons-wrapper {transform: unset;flex-direction: row;flex-wrap: no-wrap;position: static !important;margin: 0 0 20px;padding: 10px;box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.1);justify-content: space-between;}.edw-limitedwidth-block .gallery-with-text .btn-tab {font-size: 14px;padding: 10px;}.edw-limitedwidth-block .gallery-with-text .btn-tab.active {margin: 0;padding: 10px 12px;border-radius: 4px;}}`;
        var sliderjs10 = ``;
        var appendnode10 = `<div class="tab-pane edw-slider-item" id="storytelling" role="tabpanel" aria-labelledby="storytelling-tab"><div class="img-box"><img src="${Vvveb.serverurl}/CDN/slidernewdesign10/images/card-images/image-1.png" alt="image-1"></div></div>`;
        var appendswithchbutton10 = `<button class="btn-tab edw-tab-btn" id="storytelling-tab" data-toggle="pill" data-target="#storytelling" type="button" role="tab" aria-controls="storytelling" aria-selected="true">New tab</button>`;
        Vvveb.Components.extend("_base", "html/slider10", {
            name: "Image slider with Text",
            attributes: ['data-ebpb-slider10'],
            image: "icons/slider10.png",
            classes: ['edwiser-pb-slider10'],
            html: (() => {
                return `<div title="Image slider with Text" class="edwiser-pb-slider10" data-vvveb-disabled-area contenteditable="false">${sliderhtml10}<style>${slidercss10}</style><script>${sliderjs10}</script></div>`;
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
                            child: `.edw-slider-item-${i}`,
                            edwclasses: "edwslidedelbtn",
                            data: { text: "", icon: "la-trash", extraclasses: "btn btn-outline-danger" },
                            onChange: function (node, value, input) {
                                $(node).remove();
                                $navdatatarget = "#" + $(node).attr('id');
                                $(tabswitch).each(function () {
                                    if ($(this).attr('data-target') == $navdatatarget) {
                                        $(this).remove();
                                    }
                                });
                                Vvveb.Components.render("html/slider10");
                                return node;
                            },
                        },
                        {
                            name: SETTINGTITLES.SWITCHTITLE,
                            key: "sliderdescription" + i,
                            htmlAttr: "innerHTML",
                            child: `.edw-tab-btn-${i}`,
                            inputtype: TextInput,
                            edwclasses: "edwinputfield",
                        },
                        {
                            name: SETTINGTITLES.IMAGE,
                            key: "slidernavtabimage",
                            htmlAttr: 'src',
                            inputtype: ImageInput,
                            edwclasses: "edwfilefield",
                            child: `.edw-slider-item-${i} .img-box img`,

                        },
                    );
                });

                if (!$(node).find('.edw-slider-inner-container').children('.edw-slider-item').hasClass('active')) {
                    $(node).find('.edw-slider-item').first().addClass('active');
                }

                if (!$(node).find('.edw-nav-wrapper').children('.edw-tab-btn').hasClass('active')) {
                    $(node).find('.edw-tab-btn').first().addClass('active');
                }

                properties = removeDeleteButton(node, properties);
                this.properties = this.properties.filter(function (item) {
                    return item.key.indexOf("slider") === -1;
                });
                this.properties = properties.concat(this.properties);
                this.properties = disableaddnewslidebutton(node,this.properties, 4);
                return node;
            },
            properties: [
                {
                    name: "",
                    key: "tabswarning",
                    inputtype: EdwheaderInput,
                    edwclasses: "edwgroupheader",
                    data: {
                        header: "Only 4 tabs are allowed",
                        extraclass: "edwslideheading m-0 p-3 border-0 alert alert-warning",
                        type: "h6",
                        style: ""
                    }
                },
                {
                    name: "",
                    key: "addNewSlide",
                    inputtype: EdwbuttonInput,
                    edwclasses: "edwnewslidebtn",
                    data: { text: "Add new slide", icon: "la-plus", extraclasses: "btn btn-outline-primary" },
                    onChange: function (node) {
                        //render component properties again to include the new column inputs
                        $(node).parent().find('.edw-slider-inner-container').append(appendnode10);
                        $(node).parent().find('.edw-nav-wrapper').append(appendswithchbutton10);
                        Vvveb.Components.render("html/slider10");
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

            properties = properties.map(function (item) {
                if (item.key == 'tabswarning') {
                    item.edwclasses  = item.edwclasses + ' d-none';

                    var $tempElement = $('<div>').addClass(item.edwclasses);
                    // Remove the 'disabled' class using jQuery
                    $tempElement.removeClass('d-none');

                    // Get the modified string without 'disabled' class
                    item.edwclasses = $tempElement.attr('class');
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

            properties = properties.map(function (item) {
                if (item.key == 'tabswarning') {
                    item.edwclasses = item.edwclasses + ' d-none';
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
            var blocks = ["html/slider2", "html/slider4", "html/slider5", "html/slider10"];
            addBlocks(blocks);
        }
    }

});
