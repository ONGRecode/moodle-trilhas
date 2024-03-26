<?php  // Moodle configuration file

unset($CFG);
global $CFG;
$CFG = new stdClass();

$CFG->dbtype    = 'mysqli';
$CFG->dblibrary = 'native';
$CFG->dbhost    = '10.1.0.109';
$CFG->dbname    = 'moodle_trilhas';
$CFG->dbuser    = 'trilhas';
$CFG->dbpass    = 'R4$coD0';
$CFG->prefix    = 'mdl_';
$CFG->dboptions = array (
  'dbpersist' => 0,
  'dbport' => '',
  'dbsocket' => '',
  'dbcollation' => 'utf8mb4_unicode_ci',
);

$CFG->wwwroot   = 'https://trilhas.recode.org.br';
$CFG->dataroot  = '/var/moodledata/moodle-trilhas';
$CFG->admin     = 'admin';

$CFG->enable_read_only_sessions = true;

$CFG->session_handler_class = '\core\session\redis';
$CFG->session_redis_host = '127.0.0.1';
$CFG->session_redis_port = 6379;
$CFG->session_redis_database = 3;
$CFG->session_redis_prefix = 'mdl_';
$CFG->session_redis_acquire_lock_timeout = 240;
$CFG->session_redis_lock_expire = 7200;
$CFG->session_redis_serializer_use_igbinary = true;

$CFG->lock_factory = "\\core\\lock\\mysql_lock_factory";

// Caminhos executáveis
$CFG->preventexecpath = true;
$CFG->pathtogs = '/usr/bin/gs';
$CFG->pathtopdftoppm = '/usr/bin/pdftoppm';
$CFG->pathtophp = '/usr/bin/php8.2';
$CFG->pathtodu = '/usr/bin/du';
$CFG->aspellpath = '/usr/bin/aspell';
$CFG->pathtopython = '/usr/bin/python3';

define('CONTEXT_CACHE_MAX_SIZE', 200000);

$CFG->directorypermissions = 0777;

require_once(__DIR__ . '/lib/setup.php');

// There is no php closing tag in this file,
// it is intentional because it prevents trailing whitespace problems!
