<?
/* Данные для mysql */
$server = "localhost";
$username = "root";
$password = "root";
$dbname = "catalog";

/* Соединение с базой данных */
$connection = new mysqli($server, $username, $password, $dbname);
if ($connection->connect_error) {
    die("Ошибка соединения: " . $connection->connect_error);
}

/* Получение данных клиента */
$brand1 = $_GET['brand1'];
$brand2 = $_GET['brand2'];
$brand3 = $_GET['brand3'];
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$sort = (isset($_GET['sort']) && $_GET['sort'] == 'desc') ? 'desc' : 'asc';


/* Получение данных из базы */
$order = id;
//$per_page = 8;
//$offset = (($page - 1) * $per_page);
//$last_item = (($page - 1) * $per_page) + $per_page;

//$sql = "SELECT * FROM notebooks LIMIT $per_page OFFSET $offset";

//$sql = "SELECT * FROM notebooks ORDER BY $order $sort LIMIT $per_page OFFSET $offset";

$sql = "SELECT * FROM notebooks";

/* Фильтрация */
if ($brand1 != null || $brand2 != null || $brand3 != null) {
    $sql = "SELECT * FROM notebooks 
          WHERE brand = '$brand1' 
          OR brand = '$brand2'
          OR brand = '$brand3'";
}

$result = mysqli_query($connection, $sql) or die("Ошибка: " . mysqli_error($connection));

$arr = array();
while ($row = mysqli_fetch_assoc($result)) {
    $arr[] = $row;
}

$json = json_encode($arr, JSON_UNESCAPED_UNICODE, JSON_PRETTY_PRINT);

echo $json;

$connection->close();
