/* eslint-disable no-console*/
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * @module     theme_remui/focusmode
 * @copyright (c) 2023 WisdmLabs (https://wisdmlabs.com/)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

define(['jquery', 'theme_remui/notice', 'core/str','core_user/repository'], function($, Notice, Str, UserRepository) {
    return {
        init: function(action) {
            $(document).ready(function() {
                var focusmode = FocusMode(action);
                focusmode.initFocusMode();
            });
        }
    };

    /**
     * Main category filters class.
     * @param {String} fmstatus Encoded settings string
     * @return {Object} Filter object
     */
    function FocusMode(fmstatus) {

        var SELECTORS = {
            BODY: 'body',
            BUTTON_FULLSCREEN: '#toggleFullscreen',
            FM_BUTTON: '#focusmodebutton',
            FM_BUTTON_ICON: '#focusmodebutton i.fa',
            SECTION_WRAPPER: '.stepprogress-section',
            SECTION_ITEM: '.stepprogress-item',
            SECTION: '.section',
            ACTIVITY: '.activity',
            GO_BACK: '#go-back',
            FOCUS_MODE_CLASS: 'focusmode'
        };

        var _obj = {
            fmstatus: fmstatus
        };
        var strings = [
           {
               key: 'focusmodeenabled',
               component: 'theme_remui'
           },
           {
               key: 'focusmodedisabled',
               component: 'theme_remui'
           }
       ];

        /**
         * Initialize focus mode
         */
        _obj.initFocusMode = function() {
            Str.get_strings(strings).then(function(results) {
                strings = results;
                _obj.setupFocusMode();
                _obj.initEvents();
            });
        };

        _obj.setupFocusMode = function() {
            var action = (_obj.fmstatus) ? "activate" : "deactivate";

            // _obj.changeFMButtonClasses(action);
            if (action === "activate") {
                Notice.info(strings[0]);
            }
        };

        /**
         * Initialize events required for focus mode
         */
        _obj.initEvents = function() {
            // Toggle the Activation/Deactivate Focus Mode
            $(SELECTORS.FM_BUTTON).on("click", function() {
                _obj.toggleFocusMode();
            });
        };

        _obj.changeFMButtonClasses = function(action) {
            if (action === "activate") {
                $(SELECTORS.BODY).addClass(SELECTORS.FOCUS_MODE_CLASS);
                $(SELECTORS.FM_BUTTON).addClass('btn-danger').removeClass('btn-primary');
                $(SELECTORS.FM_BUTTON).attr('aria-pressed', 'true');
                $(SELECTORS.FM_BUTTON_ICON).addClass('fa-compress').removeClass('fa-expand');
            }
            if (action === "deactivate") {
                $(SELECTORS.BODY).removeClass(SELECTORS.FOCUS_MODE_CLASS);
                $(SELECTORS.FM_BUTTON).removeClass('btn-danger').addClass('btn-primary');
                $(SELECTORS.FM_BUTTON).attr('aria-pressed', 'false');
                $(SELECTORS.FM_BUTTON_ICON).addClass('fa-expand').removeClass('fa-compress');
            }
            $("#page.drawers.show-drawer-left .drawer-left-toggle button").click();
            $("#page.drawers.show-drawer-right .drawer-right-toggle button").click();
        };

        _obj.toggleFocusMode = function() {
            // Var inFocus = $('body').hasClass(SELECTORS.FOCUS_MODE_CLASS);
            var action, status, tostr;
            if (_obj.fmstatus) {
                action = "deactivate";
                status = false;
                tostr = strings[1];
            } else {
                action = "activate";
                status = true;
                tostr = strings[0];
            }

            _obj.changeFMButtonClasses(action);

            _obj.fmstatus = status;
            UserRepository.setUserPreference('enable_focus_mode', _obj.fmstatus);
            Notice.info(tostr);
        };
        return _obj;
    }
});
