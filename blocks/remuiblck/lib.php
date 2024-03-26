<?php
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
 * @package block_remuiblck
 * @author  2022 WisdmLabs
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
defined('MOODLE_INTERNAL') || die();

require_once($CFG->dirroot."/blocks/remuiblck/classes/output/renderable.php");

define('COURSE_MANAGE_PIE_COLOR', array(
    'enrolleduserscolor' => "#E4EAEC",
    'studentcompletedcolor' => "#008C4D",
    'inprogresscolor' => "#0B69E3",
    'yettostartcolor' => "#F57D1B"
));
/*
 * Block generation
 * $block => Block Name
 */
function generate_block($block, $options = array()) {
    global $PAGE;
    $theme = $PAGE->theme->name; // Current theme.
    $pthemes = $PAGE->theme->parents; // Parent themes.

    // If theme is not remui or not a child theme of remui
    // then remui block will not generate remui blocks.
    if (!($theme == 'remui' || in_array("remui", $pthemes))) {
        return '';
    }

    $classname = '\block_remuiblck\output\remuiblck_'. $block;

    if (!class_exists($classname)) {
        return "";
    }

    $renderable = new $classname($block, $options);

    if (method_exists($renderable, 'can_view') && !$renderable->can_view()) {
        return '';
    }
    return get_content_from_renderer('block_remuiblck', $renderable);
}

function get_content_from_renderer($block, $renderable) {
    global $PAGE;
    $renderer = $PAGE->get_renderer($block);
    $content = $renderer->render($renderable);
    return $content;
}

/*
 * This function will return the blocks list
 * with the enabled value and the block side i.e. left, right or top parameters
 * boolean allowedonly  => check the settings for the blocks added by admin
 * boolean userpref => get the user preference for blocks positioning
 */
function get_blocks_list($allowedonly = false, $userpref = false) {

    // Retrieve the blocks list from.
    $blockslist = unserialize(get_config('block_remuiblck', 'blocks_list_pos'));

    // List the blocks allowed.
    if ($allowedonly) {
        $blockslist = get_list_of_blocks_allowed($blockslist);
    }
    // Check saved state of blocks.
    if ($userpref) {
        $blockslist = sort_according_saved_pos($blockslist);
    }
    return $blockslist;
}


/*
 * This function will return list of blocks
 * which are marked allowed in settings
 */
function get_list_of_blocks_allowed($blockslist) {

    foreach ($blockslist as $key => $value) {
        $value = $value;
        $allow = get_config('theme_remui', 'enable'.$key.'block');
        if ($allow) {
            $blockslist[$key]['enable'] = 1;
        } else {
            unset($blockslist[$key]);
        }
    }
    return $blockslist;
}

/*
 * This function will return list of blocks
 * according to saved position by user
 */
function sort_according_saved_pos($blockslist) {
    $layouttop   = json_decode(get_user_preferences('remui_layout_top') ?? '');
    $layoutleft  = json_decode(get_user_preferences('remui_layout_left') ?? '');
    $layoutright = json_decode(get_user_preferences('remui_layout_right') ?? '');
    $finalarr = array();
    if ($layouttop || $layoutleft || $layoutright) {

        foreach ($layouttop as $key => $value) {
            if (array_key_exists($value, $blockslist)) {
                $blockslist[$value]['side'] = 'top';
                $finalarr[$value] = $blockslist[$value];
                unset($blockslist[$value]);
            }
        }

        foreach ($layoutleft as $key => $value) {
            if (array_key_exists($value, $blockslist)) {
                $blockslist[$value]['side'] = 'left';
                $finalarr[$value] = $blockslist[$value];
                unset($blockslist[$value]);
            }
        }

        foreach ($layoutright as $key => $value) {
            if (array_key_exists($value, $blockslist)) {
                $blockslist[$value]['side'] = 'right';
                $finalarr[$value] = $blockslist[$value];
                unset($blockslist[$value]);
            }
        }
    }

    foreach ($blockslist as $key => $value) {
         $finalarr[$key] = $value;
    }
    return $finalarr;

}

/*
 * This function will return default blocks position
 */
function get_default_blocks_list() {
    $blockslist = [
        'courseanlytics' => array('enable' => 0, 'side' => 'top'),
        'courseprogress' => array('enable' => 0, 'side' => 'top'),
        'enrolledusers'  => array('enable' => 0, 'side' => 'top'),
        'managecourses'  => array('enable' => 0, 'side' => 'top'),
        'scheduletask'  => array('enable' => 0, 'side' => 'left'),
        'addnotes'       => array('enable' => 0, 'side' => 'left'),
        'quizattempts'   => array('enable' => 0, 'side' => 'left'),
        'latestmembers'  => array('enable' => 0, 'side' => 'right'),
        'recentfeedback' => array('enable' => 0, 'side' => 'right'),
        'recentforums'   => array('enable' => 0, 'side' => 'right'),
    ];
    return $blockslist;
}

function get_date_difference($timecreated, $currenttime) {
    $date1 = new DateTime();
    $date1->setTimeStamp($currenttime);
    $date2 = new DateTime();
    $date2->setTimeStamp($timecreated);
    return date_diff($date1, $date2);
}

/*
 * Callback function for modal fragment in ToDoList Block
 */
function block_remuiblck_output_fragment_task_form($args) {
    $taskid = $args['taskid'];
    $mform = new block_remuiblck_task_popup_form($taskid);
    if ($taskid != -1) {
        $taskhandler = new block_remuiblck_taskhandler($taskid);
        $task = $taskhandler->get_task();
        $mform->set_data(array(
            'subject' => $task->subject,
            'summary' => $task->summary,
            'timedue' => $task->timedue,
            'userlist' => json_decode($task->assignedto, true),
            'visible' => $task->visible,
            'notify' => $task->notify,
        ));
    }
    return $mform->render();
}

/**
 * Return SCSS content.
 */
function block_remuiblck_get_scss_content() {
    global $CFG;
    $scss = '';
    $scss .= file_get_contents($CFG->dirroot . '/blocks/remuiblck/scss/remui/variables.scss');
    $scss .= file_get_contents($CFG->dirroot . '/blocks/remuiblck/scss/remui/mixins.scss');
    $scss .= file_get_contents($CFG->dirroot . '/blocks/remuiblck/scss/vendor/dataTables.bootstrap4.scss');
    $scss .= file_get_contents($CFG->dirroot . '/blocks/remuiblck/scss/vendor/jquery.dataTables.scss');
    $scss .= file_get_contents($CFG->dirroot . '/blocks/remuiblck/scss/vendor/jqueryui.scss');
    $scss .= file_get_contents($CFG->dirroot . '/blocks/remuiblck/scss/remui/styles.scss');
    return $scss;
}


/**
 * A centralised location for the all name fields. Returns an array / sql string snippet.
 *
 * @param bool $returnsql True for an sql select field snippet.
 * @param string $tableprefix table query prefix to use in front of each field.
 * @param string $prefix prefix added to the name fields e.g. authorfirstname.
 * @param string $fieldprefix sql field prefix e.g. id AS userid.
 * @param bool $order moves firstname and lastname to the top of the array / start of the string.
 * @return array|string All name fields.
 * @see \core_user\fields
 */
function get_all_user_name_fields_rmblck($returnsql = false, $tableprefix = null, $prefix = null, $fieldprefix = null, $order = false) {
    // This array is provided in this order because when called by fullname() (above) if firstname is before
    // firstnamephonetic str_replace() will change the wrong placeholder.
    $alternatenames = [];
    foreach (\core_user\fields::get_name_fields() as $field) {
        $alternatenames[$field] = $field;
    }

    // Let's add a prefix to the array of user name fields if provided.
    if ($prefix) {
        foreach ($alternatenames as $key => $altname) {
            $alternatenames[$key] = $prefix . $altname;
        }
    }

    // If we want the end result to have firstname and lastname at the front / top of the result.
    if ($order) {
        // Move the last two elements (firstname, lastname) off the array and put them at the top.
        for ($i = 0; $i < 2; $i++) {
            // Get the last element.
            $lastelement = end($alternatenames);
            // Remove it from the array.
            unset($alternatenames[$lastelement]);
            // Put the element back on the top of the array.
            $alternatenames = array_merge(array($lastelement => $lastelement), $alternatenames);
        }
    }

    // Create an sql field snippet if requested.
    if ($returnsql) {
        if ($tableprefix) {
            if ($fieldprefix) {
                foreach ($alternatenames as $key => $altname) {
                    $alternatenames[$key] = $tableprefix . '.' . $altname . ' AS ' . $fieldprefix . $altname;
                }
            } else {
                foreach ($alternatenames as $key => $altname) {
                    $alternatenames[$key] = $tableprefix . '.' . $altname;
                }
            }
        }
        $alternatenames = implode(',', $alternatenames);
    }
    return $alternatenames;
}

/**
 * Get the current user preferences that are available
 *
 * @return array[]
 */
function block_remuiblck_user_preferences(): array {
    return [
        'managecourseview' => [
            'type' => PARAM_ALPHA,
            'null' => NULL_NOT_ALLOWED,
            'default' => '',
            'permissioncallback' => [core_user::class, 'is_current_user'],
        ],
        'managecourseperpage' => [
            'type' => PARAM_INT,
            'null' => NULL_NOT_ALLOWED,
            'default' => 4,
            'permissioncallback' => [core_user::class, 'is_current_user'],
        ],
        'courseanalyticsperpage' => [
            'type' => PARAM_INT,
            'null' => NULL_NOT_ALLOWED,
            'default' => 5,
            'permissioncallback' => [core_user::class, 'is_current_user'],
        ],
        'remui_layout_top' => [
            'type' => PARAM_RAW,
            'null' => NULL_NOT_ALLOWED,
            'default' => '',
            'permissioncallback' => [core_user::class, 'is_current_user'],
        ],
        'remui_layout_left' => [
            'type' => PARAM_RAW,
            'null' => NULL_NOT_ALLOWED,
            'default' => '',
            'permissioncallback' => [core_user::class, 'is_current_user'],
        ],
        'remui_layout_right' => [
            'type' => PARAM_RAW,
            'null' => NULL_NOT_ALLOWED,
            'default' => '',
            'permissioncallback' => [core_user::class, 'is_current_user'],
        ],
        'always-load-progress' => [
            'type' => PARAM_BOOL,
            'null' => NULL_NOT_ALLOWED,
            'default' => false,
            'permissioncallback' => [core_user::class, 'is_current_user'],
        ],
        'always-load-warning' => [
            'type' => PARAM_BOOL,
            'null' => NULL_NOT_ALLOWED,
            'default' => false,
            'permissioncallback' => [core_user::class, 'is_current_user'],
        ],
    ];
}

        // user_preference_allow_ajax_update('managecourseview', PARAM_ALPHA);
        // user_preference_allow_ajax_update('managecourseperpage', PARAM_INT);
        // user_preference_allow_ajax_update('courseanalyticsperpage', PARAM_INT);
        // user_preference_allow_ajax_update('remui_layout_top', PARAM_RAW);
        // user_preference_allow_ajax_update('remui_layout_left', PARAM_RAW);
        // user_preference_allow_ajax_update('remui_layout_right', PARAM_RAW);
        // user_preference_allow_ajax_update('always-load-progress', PARAM_BOOL);
        // user_preference_allow_ajax_update('always-load-warning', PARAM_BOOL);
