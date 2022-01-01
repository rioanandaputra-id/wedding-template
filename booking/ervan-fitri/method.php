<?php
require_once "koneksi.php";
class Wedding
{
    public function get_wish()
    {
        global $mysqli;
        $query = "SELECT * FROM tbl_wish";
        $data = array();
        $result = $mysqli->query($query);
        while ($row = mysqli_fetch_object($result)) {
            $data[] = $row;
        }
        $response = array(
            // 'status' => 1,
            'data' => $data
        );
        header('Content-Type: application/json');
        echo json_encode($response);
    }

    public function insert_wish()
    {
        global $mysqli;
        $arrcheckpost = array('name' => '', 'address' => '', 'wish' => '', 'presence' => '', 'people' => '');
        $hitung = count(array_intersect_key($_POST, $arrcheckpost));
        if ($hitung == count($arrcheckpost)) {

            $result = mysqli_query($mysqli, "INSERT INTO tbl_wish SET
               name = '$_POST[name]',
               address = '$_POST[address]',
               wish = '$_POST[wish]',
               presence = '$_POST[presence]',
               people = '$_POST[people]'");

            if ($result) {
                $response = array(
                    'status' => 1
                );
            } else {
                $response = array(
                    'status' => 0
                );
            }
        } else {
            $response = array(
                'status' => 0
            );
        }
        header('Content-Type: application/json');
        echo json_encode($response);
    }
}
