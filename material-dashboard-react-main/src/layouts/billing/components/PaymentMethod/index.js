// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDInput from "components/MDInput";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import DatePicker from "react-date-picker";
import React, { useState } from "react";
import Select from "react-select";

function PaymentMethod() {
  const [value, onChange] = useState(new Date());
  const options = [
    { value: "manajemenAtas", label: "Manajemen Atas" },
    { value: "manajemenAtas", label: "Manajemen Atas" },
    { value: "manajemenAtas", label: "Manajemen Atas" },
  ];
  const [setFile] = useState("");
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  return (
    <Card id="delete-account">
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Input / Updating Pendaftaran Peserta Fit Proper
        </MDTypography>
        <MDButton variant="gradient" color="dark">
          &nbsp;Kembali
        </MDButton>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={1}>
          <Grid item xs={4} md={2.2} alignItems="center">
            <MDTypography fontWeight="medium" fontSize="10pt">
              NIP
            </MDTypography>
          </Grid>
          <Grid item xs={12} md={6}>
            <MDBox>
              <MDInput label="NIP " />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={1}>
          <Grid item xs={4} md={2.2} alignItems="center">
            <MDTypography fontWeight="medium" fontSize="10pt">
              Nama
            </MDTypography>
          </Grid>
          <Grid item xs={12} md={6}>
            <MDBox>
              <MDInput label="Nama " />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={4} md={2.2} alignItems="center">
            <MDTypography fontWeight="medium" fontSize="10pt">
              Jabatan
            </MDTypography>
          </Grid>
          <Grid item xs={12} md={6}>
            <MDBox>
              <MDInput label="Jabatan " />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={4} md={2.2} alignItems="center">
            <MDTypography fontWeight="medium" fontSize="10pt">
              Grade
            </MDTypography>
          </Grid>
          <Grid item xs={12} md={6}>
            <MDBox>
              <MDInput label="Grade " />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={4} md={2.2} alignItems="center">
            <MDTypography fontWeight="medium" fontSize="10pt">
              Date
            </MDTypography>
          </Grid>
          <Grid item xs={12} md={6}>
            <MDBox>
              <DatePicker onChange={onChange} value={value} />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={4} md={2.2} alignItems="center">
            <MDTypography fontWeight="medium" fontSize="10pt">
              Proyeksi
            </MDTypography>
          </Grid>
          <Grid item xs={12} md={6}>
            <MDBox>
              <MDInput label="Proyeksi " />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={4} md={2.2} alignItems="center">
            <MDTypography fontWeight="medium" fontSize="10pt">
              Jenjang Jabatan
            </MDTypography>
          </Grid>
          <Grid item xs={12} md={4}>
            <MDBox>
              <Select options={options} />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={4} md={2.2} alignItems="center">
            <MDTypography fontWeight="medium" fontSize="10pt">
              Jenis Fit & Proper
            </MDTypography>
          </Grid>
          <Grid item xs={12} md={6}>
            <MDBox>
              <MDInput label="Jenis Fit & Proper " />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={4} md={2.2} alignItems="center">
            <MDTypography fontWeight="medium" fontSize="10pt">
              Pilih Urjab
            </MDTypography>
          </Grid>
          <Grid item xs={12} md={6}>
            <MDBox>
              <MDInput label="Pilih Urjab " />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={4} md={2.2} alignItems="center">
            <MDTypography fontWeight="medium" fontSize="10pt">
              Upload PPT *.ppt/.pptx
            </MDTypography>
          </Grid>
          <Grid item xs={12} md={6}>
            <MDBox>
              <input type="file" accept="file/*" onChange={handleChange} />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={4} md={2.2} alignItems="center">
            <MDTypography fontWeight="medium" fontSize="10pt">
              Upload CV *.doc/.docx
            </MDTypography>
          </Grid>
          <Grid item xs={12} md={6}>
            <MDBox>
              <input type="file" accept="file/*" onChange={handleChange} />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={4} md={2.2} alignItems="center">
            <MDTypography fontWeight="medium" fontSize="10pt">
              Penguji 1
            </MDTypography>
          </Grid>
          <Grid item xs={12} md={6}>
            <MDBox>
              <MDInput label="Penguji 1 " />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={4} md={2.2} alignItems="center">
            <MDTypography fontWeight="medium" fontSize="10pt">
              Penguji 2
            </MDTypography>
          </Grid>
          <Grid item xs={12} md={6}>
            <MDBox>
              <MDInput label="Penguji 2 " />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={4} md={2.2} alignItems="center">
            <MDTypography fontWeight="medium" fontSize="10pt">
              Penguji 3
            </MDTypography>
          </Grid>
          <Grid item xs={12} md={6}>
            <MDBox>
              <MDInput label="Penguji 3 " />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={6} md={1.6} alignItems="center">
            <MDButton variant="gradient" color="info">
              &nbsp;Cek
            </MDButton>
          </Grid>
          <Grid item xs={6} md={2.1} alignItems="center">
            <MDButton variant="gradient" color="info">
              &nbsp;Manual
            </MDButton>
          </Grid>
          <Grid item xs={6} md={2} alignItems="center">
            <MDButton variant="gradient" color="error">
              <Icon sx={{ fontWeight: "bold" }}>cancel</Icon>
              &nbsp;Batal
            </MDButton>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default PaymentMethod;
