import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormTextarea,
  CRow,
  CButton,
  CFormInput,
  CFormSelect,
  CFormLabel,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const RekapManual = () => {
  return (
    <CRow>
      <CCol xs={12}>
          <CRow className="mb-3">
              <CCol sm={1}>
                <CButton type="submit">Kembali</CButton>
              </CCol>
          </CRow>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Report Manual Penilaian Peserta Fit & Proper</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/table#bordered-tables">
              <CTable bordered>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell><CRow><CFormLabel htmlFor="inputNIP" className="col-sm-2 col-form-label">NIP</CFormLabel> <CCol sm={7}><CFormInput id="inputNIP" placeholder="-" /></CCol></CRow></CTableDataCell>
                    <CTableDataCell><CRow><CFormLabel htmlFor="inputJabatan" className="col-sm-3 col-form-label">Jabatan Pegawai</CFormLabel> <CCol sm={8}><CFormInput id="inputJabatan" placeholder="Jabatan Pegawai" /></CCol></CRow></CTableDataCell>
                    <CTableDataCell>hh-bb-tttt</CTableDataCell>
                    <CTableDataCell><CRow className="mb-3"> <CCol sm={1}><CButton type="submit" shape="rounded-pill" color="warning">CEK</CButton></CCol> </CRow></CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>

               <CRow className="mb-3"> <strong>REPORT NILAI</strong> </CRow> 
                
                <CTable bordered>
                    <CTableBody>
                        <CTableRow>
                            <CTableDataCell rowSpan={2}>No.</CTableDataCell>
                            <CTableDataCell rowSpan={2}>Tim Penilai</CTableDataCell>
                            <CTableDataCell colSpan={2}>1A. Pengetahuan / Knowledge</CTableDataCell>
                            <CTableDataCell colSpan={2}>1B. Keterampilan / Skill</CTableDataCell>
                            <CTableDataCell rowSpan={2}>1C. Rekomendasi Penguji</CTableDataCell>
                            <CTableDataCell rowSpan={2}>2A. Kelemahan yang harus diperbaiki</CTableDataCell>
                            <CTableDataCell rowSpan={2}>2B. Kekuatan yang dimiliki</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableDataCell >Pengetahuan terhadap proses bisnis (bobot 40%) </CTableDataCell>
                            <CTableDataCell >Pengetahuan terhadap tugas pokok dan tanggung jawab / Job Desk yang terkait dengan jabatan yang diproyeksikan (bobot 60%)</CTableDataCell>
                            <CTableDataCell >Pemecahan Masalah / Pengambilan Keputusan (bobot 60%)</CTableDataCell>
                            <CTableDataCell >Komunikasi dengan Pihak Eksternal (bobot 40%)</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableDataCell>1</CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormInput id="penguji1" placeholder="Penguji 1" /></CCol></CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormInput id="1A1" /></CCol></CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormInput id="1A2" /></CCol></CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormInput id="1B1" /></CCol></CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormInput id="1B1" /></CCol></CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormSelect size="sm" aria-label="Small select example"><option>Pilih </option><option value="1C">...</option></CFormSelect></CCol></CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormTextarea id="2A" rows="1.5"></CFormTextarea></CCol> </CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormTextarea id="2B" rows="1.5"></CFormTextarea></CCol> </CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableDataCell>2</CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormInput id="penguji2" placeholder="Penguji 2" /></CCol></CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormInput id="1A1" /></CCol></CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormInput id="1A2" /></CCol></CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormInput id="1B1" /></CCol></CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormInput id="1B1" /></CCol></CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormSelect size="sm" aria-label="Small select example"><option>Pilih </option><option value="1C">...</option></CFormSelect></CCol></CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormTextarea id="2A" rows="1.5"></CFormTextarea></CCol> </CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormTextarea id="2B" rows="1.5"></CFormTextarea></CCol> </CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableDataCell>3</CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormInput id="penguji3" placeholder="Penguji 3" /></CCol></CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormInput id="1A1" /></CCol></CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormInput id="1A2" /></CCol></CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormInput id="1B1" /></CCol></CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormInput id="1B1" /></CCol></CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormSelect size="sm" aria-label="Small select example"><option>Pilih </option><option value="1C">...</option></CFormSelect></CCol></CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormTextarea id="2A" rows="1.5"></CFormTextarea></CCol> </CTableDataCell>
                             <CTableDataCell> <CCol size="10"><CFormTextarea id="2B" rows="1.5"></CFormTextarea></CCol> </CTableDataCell>
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

export default RekapManual
