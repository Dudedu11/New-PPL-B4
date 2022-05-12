/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "no", accessor: "no",  align: "center" },
      { Header: "nip", accessor: "nip",  align: "center" },
      { Header: "nama", accessor: "nama", align: "center" },
      { Header: "grade / pendidikan", accessor: "gradependidikan", align: "center" },
      { Header: "jenjang", accessor: "jenjang", align: "center" },
      { Header: "unit", accessor: "unit", align: "center" },
      { Header: "jabatan", accessor: "jabatan", align: "center" },
      { Header: "direktorat", accessor: "direktorat", align: "center" },
      { Header: "divisi", accessor: "divisi", align: "center" },
      { Header: "bidang", accessor: "bidang", align: "center" },
      { Header: "sub bidang", accessor: "subbidang", align: "center" },
      { Header: "religion", accessor: "religion", align: "center" },
      { Header: "email", accessor: "email", align: "center" },
      { Header: "grade", accessor: "grade", align: "center" },
      { Header: "pendidikan", accessor: "pendidikan", align: "center" },
      { Header: "tempat lahir", accessor: "tempatlahir", align: "center" },
      { Header: "tgl lahir", accessor: "tgllahir", align: "center" },
      { Header: "no hp", accessor: "nohp", align: "center" },
      { Header: "gender", accessor: "gender", align: "center" },
    ],

    rows: [
      {
        no: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
        nip: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2859384928
          </MDTypography>
        ),
        nama: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Adiningrat Firdaus
          </MDTypography>
        ),
        gradependidikan: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            INT02 / S1 Listrik
          </MDTypography>
        ),
        jenjang: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Manajemen Atas Khusus
          </MDTypography>
        ),
        unit: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            PT PLN (PERSERO) KANTOR PUSAT
          </MDTypography>
        ),
        jabatan: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            SENIOR EXECUTIVE VICE PRESIDENT MANAJEMEN ASET
          </MDTypography>
        ),
        direktorat: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            DIREKTORAT KEUANGAN DAN MANAJEMEN RISIKO
          </MDTypography>
        ),
        divisi: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            SUB DIREKTORAT MANAJEMEN ASET
          </MDTypography>
        ),
        bidang: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            BIDANG STRATEGI REGULASI DAN MANAJEMEN STAKEHOLDER STRATEGIS
          </MDTypography>
        ),
        subbidang: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            SUB BIDANG STRATEGI REGULASI
          </MDTypography>
        ),
        religion: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            ISLAM
          </MDTypography>
        ),
        email: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            ADININGRAT.FIRDAUS@PLN.CO.ID
          </MDTypography>
        ),
        grade: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            INT02
          </MDTypography>
        ),
        pendidikan: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            S1 Listrik
          </MDTypography>
        ),
        tempatlahir: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Bandung
          </MDTypography>
        ),
        tgllahir: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            12/12/1990
          </MDTypography>
        ),
        nohp: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            081223889033
          </MDTypography>
        ),
        gender: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Male
          </MDTypography>
        ),
      },
      {
        no: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        nip: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            28406874920
          </MDTypography>
        ),
        nama: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Antoni Bahrudin
          </MDTypography>
        ),
        gradependidikan: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            INT03 / S2 Bidang Kelistrikan
          </MDTypography>
        ),
        jenjang: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Manajemen Atas 
          </MDTypography>
        ),
        unit: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            PT PLN (PERSERO) UNIT INDUK TRANSMISI JAWA BAGIAN TENGAH
          </MDTypography>
        ),
        jabatan: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            GENERAL MANAGER
          </MDTypography>
        ),
        direktorat: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            SATUAN PUSAT KEUNGGULAN
          </MDTypography>
        ),
        divisi: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            DIVISI MANAJEMEN REGULATOR
          </MDTypography>
        ),
        bidang: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            BIDANG STRATEGI REGULASI DAN MANAJEMEN STAKEHOLDER STRATEGIS
          </MDTypography>
        ),
        subbidang: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            SUB BIDANG STRATEGI REGULASI
          </MDTypography>
        ),
        religion: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            ISLAM
          </MDTypography>
        ),
        email: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            ANTONI.FIRDAUS@PLN.CO.ID
          </MDTypography>
        ),
        grade: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            INT03
          </MDTypography>
        ),
        pendidikan: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            S2 Bidang Kelistrikan
          </MDTypography>
        ),
        tempatlahir: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Garut
          </MDTypography>
        ),
        tgllahir: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            01/04/1993
          </MDTypography>
        ),
        nohp: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            081299883483
          </MDTypography>
        ),
        gender: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Male
          </MDTypography>
        ),
      },
    ],
  };
}
