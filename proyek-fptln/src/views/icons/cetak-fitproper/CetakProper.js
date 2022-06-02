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

const CetakProper = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Report Nilai Peserta Fit & Proper</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/table#hoverable-rows">
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">NO</CTableHeaderCell>
                    <CTableHeaderCell scope="col">TGL</CTableHeaderCell>
                    <CTableHeaderCell scope="col">PROYEKSI JABATAN</CTableHeaderCell>
                    <CTableHeaderCell scope="col">LIHAT</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell width={200}>24-12-2022</CTableDataCell>
                    <CTableDataCell width={500}>EXAMPLE PROYEKSI JABATAN</CTableDataCell>
                    <CTableDataCell><CRow> <CCol><CButton type="submit" shape="rounded-pill" >Lihat Cetak</CButton></CCol> </CRow></CTableDataCell>
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

export default CetakProper
