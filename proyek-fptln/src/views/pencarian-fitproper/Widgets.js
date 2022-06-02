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

const Widgets = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Cari Fit & Proper</strong>
          </CCardHeader>
          <CCardBody>
          <CForm>
            <CRow >
                  <CFormLabel htmlFor="inputTgl" className="col-sm-2 col-form-label">
                    Input NIP Peserta
                  </CFormLabel>    
                </CRow>
                <CRow className="mb-3">
                  <CCol sm={6}>
                    <CFormInput id="inputTgl" placeholder="Input NIP" />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CCol sm={2}>
                    <CButton type="submit" shape="rounded-pill">Cari Peserta</CButton>
                  </CCol>
                </CRow>
            </CForm>
            <DocsExample href="components/table#hoverable-rows">
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">No</CTableHeaderCell>
                    <CTableHeaderCell scope="col">NIP</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Jabatan Proyeksi</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tgl Uji</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Hasil Nilai</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Lihat Report Nilai</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>123456</CTableDataCell>
                    <CTableDataCell>Example</CTableDataCell>
                    <CTableDataCell>Example</CTableDataCell>
                    <CTableDataCell>hh-bb-tttt</CTableDataCell>
                    <CTableDataCell>Example</CTableDataCell>
                    <CTableDataCell><CRow> <CCol><CButton type="submit" shape="rounded-pill" >Lihat Nilai</CButton></CCol> </CRow></CTableDataCell>
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

export default Widgets
