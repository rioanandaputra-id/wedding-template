<?php
// Membuat variabel, ubah sesuai dengan nama host dan database pada hosting 
$host = "localhost";
$user = "u729134144_root_wedding";
$pass = "Q>h2yNWlJpS";
$db   = "u729134144_wedding_db";
 
//Menggunakan objek mysqli untuk membuat koneksi dan menyimpan nya dalam variabel $mysqli 
$mysqli = new mysqli($host, $user, $pass, $db);
 
?>