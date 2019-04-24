<?php
use Restserver\Libraries\REST_Controller;

defined('BASEPATH') OR exit('No direct script access allowed');


require APPPATH . 'libraries/REST_Controller.php';
require APPPATH . 'libraries/Format.php';

class Mahasiswa extends Rest_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Mahasiswa_model','mahasiswa');

    }
    public function index_get()
    {
        $id = $this->get('id');
        if ($id === null){
            $mahasiswa = $this->mahasiswa->getMahasiswa();
        } else {
            $mahasiswa = $this->mahasiswa->getMahasiswa($id);
        }
        
        if($mahasiswa){
            $this->response([
                'status' => TRUE,
                'data' => $mahasiswa
            ], REST_Controller::HTTP_OK);
        } else {
            $this->response([
                'status' => false,
                'message' => 'id tidak ada.'
            ], REST_Controller::HTTP_NOT_FOUND);
        }
        
    }


    public function index_delete()
    {
        $id = $this->delete('id');

        if ($id === null) {
            $this->response([
                'status' => false,
                'message' => 'Usee id'
            ], REST_Controller::HTTP_BAD_REQUEST);
        } else {
            if($this->mahasiswa->deleteMahasiswa($id) > 0){

                $this->response([
                    'status' => true,
                    'id' => $id,
                    'message' => 'delete success'
                ], REST_Controller::HTTP_OK);
            } else {
                $this->response([
                    'status' => false,
                    'message' => 'id not found !'
                ], REST_Controller::HTTP_BAD_REQUEST);
            }
        }
    }

    public function index_post()
    {
        $data =[
            'id' => $this->post('id'),
            'nama' => $this->post('nama'),
            'nis' => $this->post('nis'),
            'kelas' => $this->post('kelas'),
            'agama' => $this->post('agama')
        ];

        if($this->mahasiswa->createMahasiswa($data) > 0){
            $this->response([
                'status' => true,
                'message' => 'new mahasiswa has been created.'
            ], REST_Controller::HTTP_CREATED);
        } else{
            $this->response([
                'status' => false,
                'message' => 'failed to create new data!'
            ], REST_Controller::HTTP_BAD_REQUEST);
        }
    }


    public function index_put()
    {
        $id = $this->put('id');
        $data =[
            'id' => $this->put('id'),
            'nama' => $this->put('nama'),
            'nis' => $this->put('nis'),
            'kelas' => $this->put('kelas'),
            'agama' => $this->put('agama')
        ];


        if($this->mahasiswa->updateMahasiswa($data, $id) > 0){
            $this->response([
                'status' => true,
                'message' => 'update success'
            ], REST_Controller::HTTP_OK);
        } else{
            $this->response([
                'status' => false,
                'message' => 'failed to update!'
            ], REST_Controller::HTTP_BAD_REQUEST);
        }
    }


}

