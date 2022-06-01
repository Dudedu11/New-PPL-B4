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

const Peserta = () => {
  return (
    <CCol xs={12}>
    <CCard className="mb-4">
      <CCardHeader>
        <strong>Data Peserta</strong>
      </CCardHeader>
      <CCardBody>
        <p className="text-medium-emphasis small">
          Berikut adalah data peserta yang terdaftar pada perusahaan
        </p>
          <CTable striped>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">No</CTableHeaderCell>
                <CTableHeaderCell scope="col">NIP</CTableHeaderCell>
                <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                <CTableHeaderCell scope="col">Grade Pendidikan</CTableHeaderCell>
                <CTableHeaderCell scope="col">Jenjang</CTableHeaderCell>
                <CTableHeaderCell scope="col">Unit</CTableHeaderCell>
                <CTableHeaderCell scope="col">Jabatan</CTableHeaderCell>
                <CTableHeaderCell scope="col">Direktorat</CTableHeaderCell>
                <CTableHeaderCell scope="col">Divisi</CTableHeaderCell>
                <CTableHeaderCell scope="col">Bidang</CTableHeaderCell>
                <CTableHeaderCell scope="col">Sub Bidang</CTableHeaderCell>
                <CTableHeaderCell scope="col">Religion</CTableHeaderCell>
                <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                <CTableHeaderCell scope="col">Grade</CTableHeaderCell>
                <CTableHeaderCell scope="col">Pendidikan</CTableHeaderCell>
                <CTableHeaderCell scope="col">Tempat Lahir</CTableHeaderCell>
                <CTableHeaderCell scope="col">Tanggal Lahir</CTableHeaderCell>
                <CTableHeaderCell scope="col">No HP</CTableHeaderCell>
                <CTableHeaderCell scope="col">Gender</CTableHeaderCell>

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
              </CTableRow>
            </CTableBody>
          </CTable>
      </CCardBody>
    </CCard>
  </CCol>
  )
}

export default Peserta
