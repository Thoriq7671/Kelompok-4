<?php
    include 'db_connect.php';
    $postdata = file_get_contents("php://input");
    $id_admin = "";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $id_admin = $request->id_admin;
        if($request){
            $query = mysqli_query($connect, "DELETE FROM admin WHERE id_admin = '$id_admin' ");
            if($query){
                $data =array(
                    'message' => "Delete succesfully",
                    'status' => "200"
                );
            }
            else{
                $data =array(
                    'message' => "Failed!",
                    'status' => "404"
                );

            }
        }
        else {
            $data =array(
                'message' => "No Data!",
                'status' => "503"
            );
        }

    }

    echo json_encode($data);
?>
