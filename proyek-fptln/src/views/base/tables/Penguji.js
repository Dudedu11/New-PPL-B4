import React from 'react'
import {Link} from 'react-router-dom';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CForm,
  CTable,
  CTableBody,
  //CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { useEffect, useState } from 'react';
import * as api from './Index';
//import { DocsCallout, DocsExample } from 'src/components'

const Peserta = () => {
  var no= 0;
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.UrlPenguji();
      const arr = result.data.data;
      setTodos(arr);
    };
    fetchData();
  }, []);
  return (
    <CCol xs={12}>
      <CForm>
            <CRow className="mb-3">
                  <CCol sm={4}>
                  <Link to={'/base/tables/TambahPeserta'}><CButton type="submit" shape="rounded-pill">TAMBAH DATA PENGUJI</CButton></Link>
                  </CCol>
            </CRow>
          </CForm>
    <CCard className="mb-4">
      <CCardHeader>
        <strong>Data Penguji</strong>
      </CCardHeader>
      <CCardBody>
        <p className="text-medium-emphasis small">
          Berikut adalah data penguji yang terdaftar pada perusahaan
        </p>
          <CTable striped>
            <CTableHead>
              <CTableRow>
              <CTableHeaderCell scope="col">No</CTableHeaderCell>
                <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                <CTableHeaderCell scope="col">NIP</CTableHeaderCell>
                <CTableHeaderCell scope="col">Jabatan</CTableHeaderCell>
                <CTableHeaderCell scope="col">Grade</CTableHeaderCell>
                <CTableHeaderCell scope="col">Jenjang</CTableHeaderCell>
                <CTableHeaderCell scope="col">Edit</CTableHeaderCell>

              </CTableRow>
            </CTableHead>
            {todos.map((todo) => (  
            <CTableBody>
              <CTableRow>
              <CTableDataCell>{no = no + 1}</CTableDataCell>
                <CTableDataCell>{todo.attributes.data_pegawai.data.attributes.nama_pegawai}</CTableDataCell>
                <CTableDataCell>{todo.attributes.data_pegawai.data.attributes.nip}</CTableDataCell>
                <CTableDataCell>{todo.attributes.data_pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</CTableDataCell>
                <CTableDataCell>{todo.attributes.data_pegawai.data.attributes.jabatan.data.attributes.grade}</CTableDataCell>
                <CTableDataCell>{todo.attributes.data_pegawai.data.attributes.jabatan.data.attributes.jenjang}</CTableDataCell> 
              </CTableRow>
            </CTableBody>
             ))}
          </CTable>
      </CCardBody>
    </CCard>
  </CCol>
  )
}

export default Peserta
