import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Layout = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Pendaftaran / Updating Peserta Fit & Proper</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Input / Updating Pendaftaran Peserta Fit Proper
            </p>
            <DocsExample href="forms/layout#horizontal-form">
              <CForm>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputNim" className="col-sm-2 col-form-label">
                    NIM
                  </CFormLabel>
                  <CCol sm={6}>
                    <CFormInput id="inputNim" placeholder="NIM" />
                  </CCol>
                  <CCol sm={2}>
                    <CButton type="submit" shape="rounded-pill">Cek</CButton>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputNama" className="col-sm-2 col-form-label">
                    Nama
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput id="inputNama" placeholder="Nama" disabled />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputJabatan" className="col-sm-2 col-form-label">
                    Jabatan
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput id="inputJabatan" placeholder="Jabatan" disabled />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputGrade" className="col-sm-2 col-form-label">
                    Grade
                  </CFormLabel>
                  <CCol sm={6}>
                    <CFormInput id="inputGrade" placeholder="Grade" disabled />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputDate" className="col-sm-2 col-form-label">
                    Date
                  </CFormLabel>
                  <CCol sm={6}>
                    <CFormInput id="inputDate" type="date" />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputProyeksi" className="col-sm-2 col-form-label">
                    Proyeksi
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput id="inputProyeksi" placeholder="Jabatan Proyeksi" />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputJenjang" className="col-sm-2 col-form-label">
                    Jenjang Jabatan
                  </CFormLabel>
                  <CCol sm={6}>
                    <CFormSelect size="sm" aria-label="Small select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </CFormSelect>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputJenisFitProper" className="col-sm-2 col-form-label">
                    Jenis Fit & Proper
                  </CFormLabel>
                  <CCol sm={6}>
                    <CFormSelect size="sm" aria-label="Small select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </CFormSelect>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputUrjab" className="col-sm-2 col-form-label">
                    Pilih Urjab
                  </CFormLabel>
                  <CCol sm={7}>
                    <CFormTextarea id="inputUrjab" placeholder="Uraian Jabatan" rows="1.5"></CFormTextarea>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputPPT" className="col-sm-2 col-form-label">
                    Upload PPT *.ppt/.pptx
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="file" id="inputPPT" />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputCV" className="col-sm-2 col-form-label">
                    Upload CV *.doc/.docx
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="file" id="inputCV" />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputPenguji1" className="col-sm-2 col-form-label">
                    Penguji 1
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput id="inputPenguji1" placeholder="Penguji 1" />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputPenguji2" className="col-sm-2 col-form-label">
                    Penguji 2
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput id="inputPenguji2" placeholder="Penguji 2" />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputPenguji3" className="col-sm-2 col-form-label">
                    Penguji 3
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput id="inputPenguji3" placeholder="Penguji 3" />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol sm={1}>
                    <CButton size="10" type="submit" shape="rounded-pill">Kirim</CButton>
                  </CCol>
                  <CCol sm={1}>
                    <CButton size="10" type="submit" color="danger" shape="rounded-pill">Batal</CButton>
                  </CCol>
                </CRow>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Layout
