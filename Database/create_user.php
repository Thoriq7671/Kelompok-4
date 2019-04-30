
<?php
include 'db_connect.php';
$postdata = file_get_contents("php://input");
$id_user  = "";
$Nama ="";
$Email = "";
$Phone = "";
$Foto = "";
if (isset($postdata)) {
    $request = json_decode($postdata);
    $id_user = $request->id_user;
    $Nama = $request->Nama;
    $Email = $request->Email;
    $Phone = $request->Phone;
    $Foto = $request->Foto;

    //ini buat cek apakah JSON ada isisnya atau tidak
    if($request){
        $query_register = mysqli_query($connect,"INSERT INTO user (id_user, Nama, Email, Phone, Foto) VALUES  ('$id_user', '$Nama', '$Email', ' $Phone ', '$Foto') ");
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
