import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CRow,
  CButton,
  CFormInput,
  CFormLabel,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import { useEffect, useState } from 'react';
import * as api from './Index';

const Dashboard = () => {
  var no= 0;
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
    <CRow>
      <CCol xs={12}>
      <CRow className="mb-3">
        <strong>Welcome to Fit & Proper Dashboard</strong>
        </CRow>
      <CForm>
            <CRow className="mb-3">
                  <CFormLabel htmlFor="inputTgl" className="col-sm-2 col-form-label">
                    Pilih Bulan Tahun
                  </CFormLabel>
                  <CCol sm={6}>
                    <CFormInput id="inputTgl" type="date" />
                  </CCol>
                  <CCol sm={2}>
                    <CButton type="submit" shape="rounded-pill">GO</CButton>
                  </CCol>
                </CRow>
            </CForm>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Jadwal Fit Proper</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/table#hoverable-rows">
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">No</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                    <CTableHeaderCell scope="col">NIP</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Jabatan</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tanggal</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                {todos.map((todo) => (  
            <CTableBody>
              <CTableRow>
              <CTableDataCell>{no = no + 1}</CTableDataCell>
                <CTableDataCell>{todo.attributes.data_pegawai.data.attributes.nama_pegawai}</CTableDataCell>
                <CTableDataCell>{todo.attributes.data_pegawai.data.attributes.nip}</CTableDataCell>
                <CTableDataCell>{todo.attributes.data_pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</CTableDataCell>
                <CTableDataCell>{todo.attributes.tanggal_daftar}</CTableDataCell> 

              </CTableRow>
            </CTableBody>
             ))}
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Dashboard
