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
//import { DocsCallout, DocsExample } from 'src/components'

const Peserta = () => {
  return (
    <CCol xs={12}>
      <CForm>
            <CRow className="mb-3">
                  <CCol sm={4}>
                  <Link to={'/base/tables/TambahPeserta'}><CButton type="submit" shape="rounded-pill">TAMBAH DATA PESERTA</CButton></Link>
                  </CCol>
            </CRow>
          </CForm>
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
                <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                <CTableHeaderCell scope="col">NIP</CTableHeaderCell>
                <CTableHeaderCell scope="col">Jabatan</CTableHeaderCell>
                <CTableHeaderCell scope="col">Grade</CTableHeaderCell>
                <CTableHeaderCell scope="col">Jenjang</CTableHeaderCell>
                <CTableHeaderCell scope="col">Edit</CTableHeaderCell>

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
