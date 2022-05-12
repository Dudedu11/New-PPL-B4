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
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

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
      { Header: "no", accessor: "no", align: "center" },
      { Header: "nip", accessor: "nip", align: "center" },
      { Header: "nama", accessor: "nama", align: "center" },
      { Header: "jabatan proyeksi", accessor: "jabatanProyeksi", align: "center" },
      { Header: "tgl uji", accessor: "tglUji", align: "center" },
      { Header: "hasil nilai", accessor: "hasilNilai", align: "center" },
      { Header: "lihat report nilai", accessor: "lihatReportNilai", align: "center" },
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
            70951128
          </MDTypography>
        ),
		    nama: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            MUDAS HAFIAN
          </MDTypography>
        ),        
        jabatanProyeksi: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            MANAJER SISTEM TRANSMISI
          </MDTypography>
        ),
        tglUji: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            20-02-2017
          </MDTypography>
        ), 
        hasilNilai: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Tidak Disaratkan (0)
          </MDTypography>
        ),
        lihatReportNilai: (
          <MDButton variant="gradient" color="success">
          &nbsp;Lihat Nilai
        </MDButton>
        ),
      },
    ],
  };
}
