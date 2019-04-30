<?php
  include 'db_connect.php';
    $postdata = file_get_contents("php://input");
    $id_admin = "";
    $Nama = "";
    $Email ="";

    if (isset($postdata)) {
        $request = json_decode($postdata);
        $id_admin = $request->id_admin;
        $Nama = $request->Nama;
        $Email = $request->Email;

        if($request){
            $query_register = mysqli_query($connect,"UPDATE admin SET  Nama = '$Nama', Email = '$Email' WHERE id_admin = '$id_admin'");
            if($query_register){

                 $data =array(
                     'message' => "Register Success!",
                     'status' => "200"
                 );
             }
             else {
                 $data =array(
                     'message' => "Register Failed!",
                     'status' => "404",
                     'errornih' => $query_register
                 );
             }
        }
        else{
            $data =array(
                'message' => "No Data!",
                'status' => "503"
            );
        }


        echo json_encode($data);
    }
?>
