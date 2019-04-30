
<?php
include 'db_connect.php';
$postdata = file_get_contents("php://input");
$id_admin  = "";
$Nama ="";
$Email = "";
if (isset($postdata)) {
    $request = json_decode($postdata);
    $id_admin = $request->id_admin;
    $Nama = $request->Nama;
    $Email = $request->Email;
    //ini buat cek apakah JSON ada isisnya atau tidak
    if($request){
        $query_register = mysqli_query($connect,"INSERT INTO admin (id_admin, Nama, Email) VALUES ('$id_admin', '$Nama', '$Email') ");
        if($query_register){

             $data =array(
                 'message' => "Register Success!",
                 'status' => "200"
             );
         }
         else {
             $data =array(
                 'message' => "Register Failed!",
                 'status' => "404"
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
