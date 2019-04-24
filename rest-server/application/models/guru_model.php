<?php

class guru_model extends CI_Model
{
    public function getMahasiswa($id = null)
    {
        if( $id === null ){
            return $this->db->get('data_guru')->result_array();

        } else{
            return $this->db->get_where('data_guru', ['id' => $id])->result_array();
        }
    }

    public function deleteMahasiswa($id)
    {
        $this->db->delete('data_guru', ['id' => $id]);
        return $this->db->affected_rows();
    }

    public function createMahasiswa($data)
    {
        $this->db->insert('data_guru', $data);
        return $this->db->affected_rows();
    }

    public function updateMahasiswa($data, $id)
    {
        $this->db->update('data_guru', $data, ['id' => $id]);
        return $this->db->affected_rows();
    }

}