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
//import { DocsCallout, DocsExample } from 'src/components'

const Admin = () => {
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
                <CTableHeaderCell scope="col">Edit Hak Akses</CTableHeaderCell>
                <CTableHeaderCell scope="col">NIP</CTableHeaderCell>
                <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                <CTableHeaderCell scope="col">Password</CTableHeaderCell>
                <CTableHeaderCell scope="col">Akses</CTableHeaderCell>
                <CTableHeaderCell scope="col">Administrasi Users</CTableHeaderCell>
                <CTableHeaderCell scope="col">Master</CTableHeaderCell>
                <CTableHeaderCell scope="col">Daftar FP</CTableHeaderCell>
                <CTableHeaderCell scope="col">Nilai FP</CTableHeaderCell>
                <CTableHeaderCell scope="col">Report</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>Mark</CTableDataCell>
                <CTableDataCell>Otto</CTableDataCell>
                <CTableDataCell>Contoh</CTableDataCell>
                <CTableDataCell>Contoh</CTableDataCell>
                <CTableDataCell>Contoh</CTableDataCell>
                <CTableDataCell>Contoh</CTableDataCell>
                <CTableDataCell>Contoh</CTableDataCell>
                <CTableDataCell>Contoh</CTableDataCell>
                <CTableDataCell>Contoh</CTableDataCell>
                <CTableDataCell>Contoh</CTableDataCell>
                <CTableDataCell>Contoh</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
      </CCardBody>
    </CCard>
  </CCol>
  )
}

export default Admin