import React from 'react'
import {Link} from 'react-router-dom';
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

const TambahPenguji = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CForm>
            <CRow className="mb-3">
                  <CCol sm={4}>
                  <Link to={'/base/tables/Penguji'}><CButton type="submit" shape="rounded-pill">Kembali</CButton></Link>
                  </CCol>
            </CRow>
          </CForm>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Tambah / Update Data Penguji</strong>
          </CCardHeader>
          <CCardBody>
          <strong>Input Data Penguji</strong>
          
          <CForm>
                <CRow>
                  <CFormLabel htmlFor="inputTgl" className="col-sm-3 col-form-label" align="right">
                    NIP
                  </CFormLabel>
                  <CCol sm={6}>
                    <CFormInput id="inputTgl" placeholder="NIP" />
                  </CCol>
                </CRow>
                <CTable>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell width={280}></CTableDataCell>
                    <CTableDataCell width={70}><CButton type="submit" shape="rounded-pill" color="warning">CEK</CButton></CTableDataCell>
                    <CTableDataCell width={100}><CButton type="submit" shape="rounded-pill">MANUAL</CButton></CTableDataCell>
                    <CTableDataCell><CButton type="submit" shape="rounded-pill" color="danger">BATAL</CButton></CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CForm>
            
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default TambahPenguji
