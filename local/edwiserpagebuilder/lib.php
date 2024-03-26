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
 * @package   local_edwiserpagebuilder
 * @copyright (c) 2022 WisdmLabs (https://wisdmlabs.com/) <support@wisdmlabs.com>
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 * @author    Gourav Govande
 */
defined('MOODLE_INTERNAL') || die();


function local_edwiserpagebuilder_before_standard_html_head() {
    global $PAGE;

    $output = '';

    if (strpos($PAGE->bodyclasses, "epb-publish-") !== false) {

        $pageid = optional_param('id', 0, PARAM_INT);

        if ($pageid) {
            $ph = new \local_edwiserpagebuilder\custom_page_handler("publish", $pageid);

            $output .= '<meta name="description" content="'.$ph->page->get_pagedesc().'">';

            if (!$ph->page->get_allowindex()) {
                $output .= '<meta name="robots" content="noindex"/>';
            }

            if ($keywords = $ph->page->get_seotag()) {
                $output .= '<meta name="'.$keywords.'" content="'.$ph->page->get_seodesc().'">';
            }

        }
    }
    return $output;
}

/**
 * Serves the files from the edwiserform file areas
 * @param stdClass $course the course object
 * @param stdClass $cm the course module object
 * @param stdClass $context the edwiserform's context
 * @param string $filearea the name of the file area
 * @param array $args extra arguments (itemid, path)
 * @param bool $forcedownload whether or not force download
 * @param array $options additional options affecting the file serving
 * @since Edwiser Form 1.0.0
 */
function local_edwiserpagebuilder_pluginfile(
    $course,
    $cm,
    $context,
    $filearea,
    array $args,
    $forcedownload = 0,
    array $options = array()
) {
    if ($context->contextlevel != CONTEXT_SYSTEM) {
        send_file_not_found();
    }
    $itemid = (int)array_shift($args);
    $relativepath = implode('/', $args);
    $fullpath = "/{$context->id}/local_edwiserpagebuilder/$filearea/$itemid/$relativepath";

    $fs = get_file_storage();
    if (!($file = $fs->get_file_by_hash(sha1($fullpath)))) {
        return false;
    }
    // Download MUST be forced - security!
    send_stored_file($file, 0, 0, $forcedownload, $options);
}

function get_block_content_url() {
    global $CFG;
    $blkid = isset( $_GET['bui_edit'] ) ? ( '?bui_edit=' . $_GET['bui_edit'] ) : '';
    $blkurl = $CFG->wwwroot . '/blocks/edwiseradvancedblock/editor.php' . $blkid;
    return $blkurl;
}

function get_block_content_return_url() {
    return isset( $_GET['returl'] ) ? $_GET['returl'] : '';
}

function get_block_id() {
    return (isset( $_GET['bui_edit'] ) ? $_GET['bui_edit'] : '');
}

// Add the customizer button on each block.
function local_edwiserpagebuilder_customizer_button($instanceid) {
    global $PAGE, $CFG;
    if (!$PAGE->user_is_editing()) {
        return "";
    }

    $url = $CFG->wwwroot . "/local/edwiserpagebuilder/editor.php?bui_edit=" . $instanceid;
    $url .= "&returl=". urlencode($PAGE->url);
    $customizerbutton = "<div class='d-flex justify-content-end live-customizer-btn ' style='margin-top:24px;'>";
    $customizerbutton .= "<a class='btn btn-primary' href='".$url."'";
    $customizerbutton .= "role='button'>";
    $customizerbutton .= "<i class='fa fa-pencil'></i> ".get_string("livecustomizer", "local_edwiserpagebuilder")."</a>";
    $customizerbutton .= "</div>";

    return $customizerbutton;
}

// Update the list of blocks.
function local_edwiserpagebuilder_update_block_content() {
    $cm = new \local_edwiserpagebuilder\content_manager();
    $cm->update_block_content(); // Update the block content on cron run.
}


function local_edwiserpagebuilder_output_fragment_upload_media_filepicker($args) {
    global $PAGE, $CFG;
    require_once($CFG->dirroot.'/lib/form/filemanager.php');
    $fmoptions = new stdClass();
    $fmoptions->maxbytes       = -1;
    $fmoptions->maxfiles       = -1;
    $fmoptions->itemid         = file_get_unused_draft_itemid();
    $fmoptions->subdirs        = false;
    $fmoptions->accepted_types = array('web_image', 'web_video');
    $fmoptions->return_types   = FILE_INTERNAL | FILE_CONTROLLED_LINK;
    $fmoptions->context        = context_system::instance();;
    $fmoptions->areamaxbytes   = FILE_AREA_MAX_BYTES_UNLIMITED;
    $fm = new \form_filemanager($fmoptions);
    $fileoutput = $PAGE->get_renderer('core', 'files');
    ob_start();
    ?>
    <div id="edwiser-tab-file-upload" class="tab-pane fade p-4 flex-grow-1 active show" role="tabpanel" aria-labelledby="edwiser-tab-file-select">
        <?php echo $fileoutput->render($fm); ?>
        <input type="hidden" name="file_upload_item_id" id='file_upload_item_id' value="<?php echo $fmoptions->itemid; ?>" />
    </div>
    <?php
    return ob_get_clean();
}

function define_cdn_constants() {
    // $serverhost = "https://staticcdn.edwiser.org/v40";
    // $serverhost = "https://qa-remui.edwiser.org/v42";
    $serverhost = "https://qa-remui.edwiser.org/staticcdn";
    defined('BLOCKS_CDN_URL') || define("BLOCKS_CDN_URL", $serverhost);
    defined('BLOCKS_CONTENT_URL') || define("BLOCKS_CONTENT_URL", $serverhost . "/json/");
    defined('BLOCKS_LIST_URL') || define("BLOCKS_LIST_URL", $serverhost . "/json/list_of_blocks.json");
    defined('CDNIMAGES') || define("CDNIMAGES", $serverhost . "/CDN/");

    defined('PAGE_LIST_URL') || define("PAGE_LIST_URL", $serverhost . "/json/list_of_pages.json");
}

function check_plugin_available($component) {
    list($type, $name) = core_component::normalize_component($component);

    $dir = \core_component::get_plugin_directory($type, $name);
    if (!file_exists($dir ?? '')) {
        return false;
    }
    return true;
}

/**
 * Sort categories array by path
 * private function: only used by get_categories
 *
 * @param stdClass $category1
 * @param stdClass $category2
 * @return int result of strcmp
 * @since Moodle 2.3
 */
function compare_categories_by_path($category1, $category2) {
    return strcmp($category1->path, $category2->path);
}

/**
 * Sort categories array by sortorder
 * private function: only used by get_categories
 *
 * @param array $category1
 * @param array $category2
 * @return int result of strcmp
 * @since Moodle 2.3
 */
function compare_categories_by_sortorder($category1, $category2) {
    return strcmp($category1['sortorder'], $category2['sortorder']);
}



    /**
     * Returns the courses form.
     * @param  stdClass &config data object
     * @return stdClass config data
     */
function html_data($configdata) {
        global $CFG, $OUTPUT;
        $systemcontext = context_system::instance();
        $count = count($configdata->block);
        $classname = "html-block p-0 col-12";
    switch ($count) {
        case 2:
            $classname .= " col-lg-6";
            break;
        case 3:
            $classname .= " col-lg-4";
            break;
        case 4:
            $classname .= " col-lg-3 col-md-6";
            break;
    }
        $configdata->classname = $classname;
        $styleprefix = ".home-sections [data-instance='" . $configdata->id . "'] .html-blocks .html-block:nth-child(";
    foreach ($configdata->block as $kblock => $block) {
        $configdata->block[$kblock]->html->text = file_rewrite_pluginfile_urls(
            $block->html->text,
            'pluginfile.php',
            $systemcontext->id,
            'theme_remui',
            'section_html',
            $block->html->itemid
        );
        $configdata->block[$kblock]->style = process_css($block->style, $styleprefix . ($kblock + 1) . ")");
        if (isset($configdata->applyfilter) && $configdata->applyfilter) {
            $configdata->block[$kblock]->html->text = format_text($configdata->block[$kblock]->html->text, FORMAT_HTML, array("noclean" => true));
        }
    }
        return $configdata;
}

    /**
     * Process custom css using regular expression
     * @param  String $styles      Css Style
     * @param  String $styleprefix Style prefix
     * @return String              Css Style
     */
function process_css($styles, $styleprefix) {
    try {
        $scss = new core_scss();
        return $scss->compile($styleprefix . '{ ' . $styles . ' }');
    } catch (\Exception $e) {
        return '';
    }
}

/**
 * Get categories list from user settings
 * @param  array $configdata Config data array
 * @return array             Array of categories
 */
function get_homepaegcourses_categories($categories) {
    global $DB;
    if (empty($categories)) {
        return \theme_remui_coursehandler::get_allowed_categories('all');
    }
    foreach ($categories as $category) {
        $cats = \theme_remui_coursehandler::get_allowed_categories($category);
        foreach ($cats as $cat) {
            if (!in_array($cat, $categories)) {
                array_push($categories, $cat);
            }
        }
    }
    return $categories;
}

    /**
     * Get all details of categories
     * @param  array   $categories Array of categories
     * @param  integer $start      Start index of categories
     * @param  integer $limit      Number of categories to be fetched
     * @return array               Array of categories with category details
     */
function get_category_details($categories, $start = 0, $limit = 20) {
        global $OUTPUT, $CFG, $USER, $DB;
        $result = array();

        $activeflag = true;

        $total = count($categories);

        $categories = array_slice($categories, $start, $limit);

    foreach ($categories as $key => $category) {
        $rescategories = array();
        if ($activeflag) {
            $rescategories['active'] = true;
            $activeflag = false;
        }

        // Skip category id deleted or not exists
        if (!$DB->record_exists('course_categories', array('id' => $category))) {
            continue;
        }

        if (class_exists('core_course_category')) {
            $category = \core_course_category::get($category, MUST_EXIST, true);
        } else if ('coursecat') {
            $category = \coursecat::get($category, MUST_EXIST, true);
        } else {
            continue;
        }

        if ( !$category->visible ) {
            $rescategories['ishidden'] = true;
        }

        $rescategories['categoryid'] = $category->id;
        $rescategories['categoryname'] = strip_tags(format_text($category->name));

        $categorycontext = context_coursecat::instance($category->id);
        $text = $category->description;
        $text = file_rewrite_pluginfile_urls($text, 'pluginfile.php', $categorycontext->id, 'coursecat', 'description', null);
        $catsummary = strip_tags(format_text($text));

        $catsummary = preg_replace('/\n+/', '', $catsummary);
        $catsummary = strlen($catsummary) > 150 ? mb_substr($catsummary, 0, 150) . "..." : $catsummary;
        $rescategories['categorydesc'] = $catsummary;
        $rescategories['categoryurl'] = $CFG->wwwroot. '/course/index.php?categoryid=' . $category->id;
        $count = \theme_remui\utility::get_courses(true, null, $category->id, 0, 0, null, null);
        $rescategories['coursecount'] = $count;

        if ($category->idnumber != '') {
            $rescategories['idnumber'] = $category->idnumber;
        }

        if ($category->parent != "0") {
            if (class_exists('core_course_category')) {
                $parent = \core_course_category::get($category->parent);
            } else if (class_exists('coursecat')) {
                $parent = \coursecat::get($category->parent);
            } else {
                continue;
            }
            $rescategories['parentname'] = $parent->name;
        }
        $result[] = $rescategories;
    }
        return [$total, $result];
}

function course_block($configdata, $section) {
    global $OUTPUT, $PAGE;
    $type = $configdata->show;
    $catid = '';
    $header = $OUTPUT->render_from_template('local_edwiserpagebuilder/course_title', $configdata);
    if (!empty($configdata->categories)) {
        foreach ($configdata->categories as $category) {
            $catid .= ','.$category;
        }
    } else {
        $catid = 'all';
    }
    switch ($type) {
        case 'courses':
            return $header."<div class='edwiser-cnc' data-edwiser-dynamic data-shortcode='edwiser-cnc' data-vvveb-disabled-area data-layout='coursesncategories' data-show='courses' data-catid='$catid' data-date='all' data-btnlabel='Explore' contenteditable='false'>[edwiser-cnc layout='coursesncategories' show='courses' catid='$catid' date='all']</div>";

        case 'categories':
            return $header."<div class='edwiser-cnc' data-edwiser-dynamic data-shortcode='edwiser-cnc' data-vvveb-disabled-area data-layout='coursesncategories' data-show='categories' data-catid='$catid' data-date='all' data-btnlabel='Explore' contenteditable='false'>[edwiser-cnc layout='coursesncategories' show='categories' catid='$catid' date='all']</div>";

        case 'categoryandcourses':
            return $header."<div class='edwiser-cnc' data-edwiser-dynamic data-shortcode='edwiser-cnc' data-vvveb-disabled-area data-layout='coursesncategories' data-show='courses' data-catid='$catid' data-date='all' data-btnlabel='Explore' contenteditable='false'>[edwiser-cnc layout='coursesncategories' show='courseandcategories' catid='$catid' date='all']</div>";
        default:
            break;
    }
}

function section_css( $sectionname ) {
    $sectioncss = array(
        'contact' => '.section-contact a>i {
            font-size: 24px;
            filter: drop-shadow(1px 2px 2px rgba(0,0,0,.3));
        }
        .section-contact .social-icons .btn{
            min-width: 48px;
            min-height: 48px;
            color: #fff;
        } ',

        'aboutus' => '.section-aboutus.bg-image{
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-size: cover;
        }
        .section-aboutus .btn.round {
            background-color: #8afb89;
            border-color: #8afb89 !important;
            transition: all .5s ease;
            height: 70px;
            width: 70px;
            margin-top: -20px;
        }
        .section-aboutus .btn.round i{
            font-size: 30px;
            color: #fff;
        }
        .section-aboutus .btn.round:hover{
            transform: rotate(360deg);
        }',

        'courses' => '.categoryandcourses-view.h-400 {
            height: 400px !important;
        }
        .categoryandcourses-view  .category-list .wrapper{
            border: none !important;
            height: 96% !important;
            display: flex;
            flex-direction: column;
        }
        .categoryandcourses-view .pb-lg-15 {
            padding-bottom: 15px!important;
        }
        .categoryandcourses-view.course-category-wrapper .card-list {
            width: 100%;
            overflow-y: auto;
            flex-grow: 1;
        }
        .course-category-wrapper ::-webkit-scrollbar {
            display: none;
        }
        .course-category-wrapper .card-list .category-item {
            width: 100%;
            margin-bottom: 12.5px;
            border-radius: 5px;
            padding: 15px;
            cursor: pointer;
        }
        .course-category-wrapper .card__owner {
            color: #fff;
            font-size: 16px;
            font-weight: 600;
            letter-spacing: .1rem;
            text-transform: capitalize;
            margin-bottom: 5px;
        }',

        'feature' => '',

        'slider' => 'a[class^="carousel-control-"].nonav {
            display: none;
       }
        @media (max-width: 600px) {
            a[class^="carousel-control-"]:not(.nonav) i {
                font-size: 24px !important;
           }
       }
        @media (min-width: 600px) {
            a[class^="carousel-control-"]:not(.nonav) i {
                font-size: 37px;
           }
       }
        a[class^="carousel-control-"]:not(.nonav):not(.navarrows) i {
            background-color: #0000007a;
       }
        @media (max-width: 600px) {
            a[class^="carousel-control-"]:not(.nonav):not(.navarrows) i {
                width: 40px;
                height: 40px;
           }
       }
        @media (min-width: 600px) {
            a[class^="carousel-control-"]:not(.nonav):not(.navarrows) i {
                width: 60px;
                height: 60px;
           }
       }
        a[class^="carousel-control-"].navarrowscircle i {
            border-radius: 50%;
       }
        ',

        'team' => '',

        'testimonial' => '.section-testimonial .img-box img {
            width: 135px;
            height: 135px;
            margin: 5px auto;
            padding: 5px;
            border-radius: 50%;
        }',
        'separator' => '',
        'html' => ''
    );
    return $sectioncss[$sectionname];
}

function check_advblock_type($blockname) {
    $blocktype = [
        'dynamic' => 'dynamic-block',
        'static' => 'static-block',
        'blocklayout' => 'block-page-layout'
    ];
    $dynamicblockflag = $blocktype['static'];
    $dynamicblocks = array(
        'categories' => 'dynamic',
        'courses' => 'dynamic',
        'coursesncategories' => 'dynamic',
        'contact_us' => 'static',
        "features_layout1" => 'static',
        "features_layout2" => 'static',
        "features_layout3" => 'static',
        'grid_view' => 'static',
        'hero_design' => 'static',
        'html' => 'static',
        'media_text1' => 'static',
        'media_text2' => 'static',
        'media_text3' => 'static',
        'media_text4' => 'static',
        'meettheteam1' => 'static',
        'meettheteam2' => 'static',
        'pricing' => 'static',
        'slider'  => 'static',
        'sliderdesign1' => 'static',
        'sliderdesign2' => 'static',
        'sliderdesign3' => 'static',
        'sliderdesign4' => 'static',
        'blocklayout1' => 'blocklayout',
        'blocklayout2' => 'blocklayout',
        'blocklayout3' => 'blocklayout',
        'blocklayout4' => 'blocklayout',
        'blocklayout5' => 'blocklayout',
        'blocklayout6' => 'blocklayout',
        'blocklayout7' => 'blocklayout',
        'blocklayout8' => 'blocklayout',
        'blocklayout9' => 'blocklayout',
        'blocklayout10' => 'blocklayout',
        'blocklayout11' => 'blocklayout',
    );
    if (array_key_exists($blockname, $dynamicblocks)) {
        $dynamicblockflag = $blocktype[$dynamicblocks[$blockname]];
    }
    return $dynamicblockflag;
}

function html_block_rearrange($blocks) {
    $htmlblock = '';
    $themereleaseinfo = edw_get_remui_theme_release_version();

    for ($i = 0; $i < count($blocks); $i++) {
        if (($blocks[$i]->title) == 'html') {
            $htmlblock = $blocks[$i];
            if ((version_compare($themereleaseinfo['newthemereleaseversion'], $themereleaseinfo['oldthemerelease']) > 0) && $themereleaseinfo['themeversion'] > 2023053003) {
                $htmlblock->label = 'Create custom blocks';
            }
            unset($blocks[$i]);
            break;
        }
    }
    array_unshift($blocks, $htmlblock);
    return $blocks;
}


/**
 * Get plugin release info.
 *
 * @return stdClass plugin release
 */
function get_pagebuilder_req_plugin_release_info($pluginname) {
    $pluginman = core_plugin_manager::instance();
    $plugininfo = $pluginman->get_plugin_info($pluginname);
    return $plugininfo;
}

/**
 * This function check  plugin is available or not.
 *
 * @return boolean
 */

function is_pagebuilder_req_plugin_available($component) {

    list($type, $name) = core_component::normalize_component($component);

    $dir = \core_component::get_plugin_directory($type, $name);
    if (!file_exists($dir)) {
        return false;
    }
    return true;
}

function check_plugin_version_series($versionstring) {
    $versionparts = explode('.', $versionstring);
    $majorversion = (int) $versionparts[0];
    $minorversion = (int) $versionparts[1];
    if ($majorversion === 4) {
        if ($minorversion === 1) {
            return '4.1';
        } else if ($minorversion === 0) {
            return '4.0';
        } else if ($minorversion === 2) {
            return '4.2';
        }
    } else {
        return 'nodata';
    }
}

    /**
     * Get section config by section instance id
     * @param  int    $instanceid Instance id of section
     * @return object             Section record
     */
function get_config_by_instanceid($instanceid) {
    global $DB;
    $record = $DB->get_record('remuihomepage_sections', array('id' => $instanceid));
    return $record;
}

    /**
     * Get all courses from selected categories and date filter
     * @param  array  $categories Categories list
     * @param  string $date       Date filter
     * @return array              Array of course
     */
function get_courses_from_category($categories, $date, $start = 0) {
    global $CFG;

    // Retrieve list of courses in category.
    $coursehandler = new \theme_remui_coursehandler();
    $where = 'WHERE c.id <> :siteid ';
    $params = array('siteid' => SITEID);
    $join = '';
    $sesskey = strtolower(sesskey());
    $cattable = 'catids' . $sesskey;
    if (is_numeric($categories) || is_array($categories)) {
        if (is_numeric($categories)) {
            $categories = \theme_remui_coursehandler::get_allowed_categories($categories);
        } else {
            $categories = get_homepaegcourses_categories($categories);
        }
        if (!empty($categories)) {
            $cats = [];
            foreach ($categories as $category) {
                $cats[] = (object)[
                    'tempid' => $category
                ];
            }
            $coursehandler->create_temp_table($cattable, $cats);
            $join = " INNER JOIN {" . $cattable . "} catids ON c.category = catids.tempid";
        }
    }

    if (!empty($search)) {
        $search = '%' . str_replace(' ', '%', $search) . '%';
        $where .= " AND ( LOWER(c.fullname) like LOWER(:name1) OR LOWER(c.shortname) like LOWER(:name2) )";
        $params = $params + array("name1" => $search, "name2" => $search);
    }
    // Get list of courses without preloaded coursecontacts because we don't need them for every course.

    list($total, $courses) = $coursehandler->get_course_records(
       $where,
       $join,
       $params,
       [
           'summary' => true,
           'filtermodified' => true,
           'limitfrom' => $start,
           'limitto' => 25,
           'totalcount' => true
       ]
    );
    if (is_numeric($categories) || is_array($categories)) {
        $coursehandler->drop_table($cattable);
    }

    if (empty($courses)) {
        return [0, []];
    }

    $obj = new \stdClass;
    $obj->sort = null;
    $obj->search = "";
    $obj->tab = false;
    $obj->page = (Object)['courses' => -1];
    $obj->pagination = false;
    $obj->view = null;
    $obj->isFilterModified = "0";
    $obj->limiteddata = true;
    $obj->courses = $courses;
    $obj->category = 0;
    $obj->limiteddata = true;

    $result = \theme_remui\utility::get_course_cards_content($obj, $date);

    return array($total, $result['courses']);
}


function edw_get_remui_theme_release_version() {
    if (is_pagebuilder_req_plugin_available("theme_remui")) {
        $themereleasedata = get_pagebuilder_req_plugin_release_info("theme_remui");
        $themerelease = $themereleasedata->release;
        $themeversion = $themereleasedata->versiondb;
    } else {
        $themerelease = 0;
        $themerelease = 0;
    }
    $pluginversions = [
        '4.0' => '4.0.10',
        '4.1' => '4.1.5',
        '4.2' => '4.2.0',
        'nodata' => $themerelease
    ];

    $pluginseries = check_plugin_version_series($themerelease);
    return array(
        'oldthemerelease' => $pluginversions[$pluginseries],
        'newthemereleaseversion' => $themerelease,
        'themeversion' => $themeversion
    );
}
