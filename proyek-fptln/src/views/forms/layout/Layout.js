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
import axios from "axios";

const Layout = () => {
  state = {
    tanggal_daftar : '',
    jenis_fnp : '',
    file_ppt : '',
    file_cv : '',
    id_pendaftaran : '',
    uraian_jabaran : '',
    data_pegawai : ''
  };

  onTanggalChange = e => {
    this.setState({
      tanggal_daftar: e.target.value
    });
  };

  onJenisChange = e => {
    this.setState({
      jenis_fnp: e.target.value
    });
  };

  onPptChange = e => {
    this.setState({
      file_ppt: e.target.value
    });
  };

  onCvChange = e => {
    this.setState({
      file_cv: e.target.value
    });
  };

  onIdChange = e => {
    this.setState({
      id_pendaftaran: e.target.value
    });
  };

  onUrjabChange = e => {
    this.setState({
      uraian_jabaran: e.target.value
    });
  };

  onDatapChange = e => {
    this.setState({
      data_pegawai: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      tanggal_daftar: this.state.tanggal_daftar,
      jenis_fnp: this.state.jenis_fnp,
      file_ppt: this.state.file_ppt,
      file_cv: this.state.file_cv,
      id_pendaftaran: this.state.id_pendaftaran,
      uraian_jabaran: this.state.uraian_jabaran,
      data_pegawai: this.state.data_pegawai
    };
    axios
      .post("http://localhost:1337/api/pendaftars", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

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
            <form className="post" onSubmit={this.handleSubmit}>
              <CForm>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputNim" className="col-sm-2 col-form-label">
                    NIP
                  </CFormLabel>
                  <CCol sm={6}>
                    <CFormInput id="inputNim" placeholder="NIP" value={this.state.data_pegawai} onChange={this.onDatapChange} required/>
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
                    <CFormInput id="inputNama" placeholder="Nama" />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputJabatan" className="col-sm-2 col-form-label">
                    Jabatan
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput id="inputJabatan" placeholder="Jabatan" />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputGrade" className="col-sm-2 col-form-label">
                    Grade
                  </CFormLabel>
                  <CCol sm={6}>
                    <CFormInput id="inputGrade" placeholder="Grade" />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputDate" className="col-sm-2 col-form-label">
                    Date
                  </CFormLabel>
                  <CCol sm={6}>
                    <CFormInput id="inputDate" type="date" value={this.state.tanggal_daftar} onChange={this.onTanggalChange} required/>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputProyeksi" className="col-sm-2 col-form-label" >
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
                    <CFormInput type="file" id="inputPPT" value={this.state.file_ppt} onChange={this.onPptChange} required/>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputCV" className="col-sm-2 col-form-label">
                    Upload CV *.doc/.docx
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="file" id="inputCV" value={this.state.file_cv} onChange={this.onChange} required/>
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
              </form>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Layout
