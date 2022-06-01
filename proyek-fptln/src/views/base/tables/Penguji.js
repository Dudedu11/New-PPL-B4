import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  //CRow,
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

const Penguji = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.UrlPeserta();
      const arr = result.data.data;
      setTodos(arr);
    };
    fetchData();
  }, []);
  return (
    <CCol xs={12}>
    <CCard className="mb-4">
      <CCardHeader>
        <strong>Data Penguji</strong>
      </CCardHeader>
      <CCardBody>
        <p className="text-medium-emphasis small">
          Berikut adalah data Penguji yang terdaftar pada perusahaan
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
              </CTableRow>
            </CTableHead>
            {todos.map((todo) => (  
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>{todo.id}</CTableDataCell>
                {/* <CTableDataCell>{todo.attributes.pegawai.data.attributes.nama}</CTableDataCell>
                <CTableDataCell>{todo.attributes.pegawai.data.attributes.nama}</CTableDataCell>
                <CTableDataCell>{todo.attributes.pegawai.data.attributes.nama}</CTableDataCell>
                <CTableDataCell>{todo.attributes.pegawai.data.attributes.nama}</CTableDataCell> */}
              </CTableRow>
            </CTableBody>

             ))}
          </CTable>
      </CCardBody>
    </CCard>
  </CCol>
  )
}

export default Penguji