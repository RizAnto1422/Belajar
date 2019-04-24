<?php
use Restserver\Libraries\REST_Controller;

defined('BASEPATH') OR exit('No direct script access allowed');


require APPPATH . 'libraries/REST_Controller.php';
require APPPATH . 'libraries/Format.php';

class Guru extends Rest_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('guru_model','mahasiswa');

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
            'nip' => $this->post('nip'),
            'jenis_kelamin' => $this->post('jenis_kelamin'),
            'bid_studi' => $this->post('bid_studi'),
            'wali_kelas' => $this->post('wali_kelas')

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
            'nip' => $this->put('nip'),
            'jenis_kelamin' => $this->put('jenis_kelamin'),
            'bid_studi' => $this->put('bid_studi'),
            'wali_kelas' => $this->put('wali_kelas')
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

