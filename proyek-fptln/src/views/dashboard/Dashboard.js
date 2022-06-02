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

const Dashboard = () => {
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
                    <CTableHeaderCell scope="col">Proyeksi</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tgl</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Penguji</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Dashboard
