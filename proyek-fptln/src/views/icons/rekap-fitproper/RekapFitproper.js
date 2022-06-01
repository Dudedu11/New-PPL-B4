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

const RekapFitproper = () => {
  return (
    <CRow>
      <CCol xs={12}>
      <CForm>
            <CRow className="mb-3">
                  <CFormLabel htmlFor="inputTgl" className="col-sm-2 col-form-label">
                    Pilih Tanggal
                  </CFormLabel>
                  <CCol sm={6}>
                    <CFormInput id="inputTgl" placeholder="Date" />
                  </CCol>
                  <CCol sm={2}>
                    <CButton type="submit" shape="rounded-pill">GO</CButton>
                  </CCol>
                </CRow>
            </CForm>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Report Nilai Peserta Fit & Proper</strong>
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
                    <CTableHeaderCell scope="col">Jenjang</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tgl Fit & Proper</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Penguji</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nilai</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Example</CTableDataCell>
                    <CTableDataCell>123456</CTableDataCell>
                    <CTableDataCell>Example</CTableDataCell>
                    <CTableDataCell>Example</CTableDataCell>
                    <CTableDataCell>Example</CTableDataCell>
                    <CTableDataCell>hh-bb-tttt</CTableDataCell>
                    <CTableDataCell>Example</CTableDataCell>
                    <CTableDataCell>Example</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default RekapFitproper
