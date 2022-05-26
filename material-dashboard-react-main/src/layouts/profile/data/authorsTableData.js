import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

export default function data() {
  return {
    columns: [
      { Header: "no", accessor: "no", align: "center" },
      { Header: "edit hak akses", accessor: "edit", align: "center" },
      { Header: "nip", accessor: "nip", align: "center" },
      { Header: "nama", accessor: "nama", align: "center" },
      { Header: "password", accessor: "password", align: "center" },
      { Header: "akses", accessor: "akses", align: "center" },
      { Header: "administrasi users", accessor: "administrasiUsers", align: "center" },
      { Header: "master", accessor: "master", align: "center" },
      { Header: "daftar fp", accessor: "daftarFp", align: "center" },
      { Header: "nilai fp", accessor: "nilaiFp", align: "center" },
      { Header: "report", accessor: "report", align: "center" },
    ],
    rows: [
      {
        no: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
        edit: (
          <MDButton variant="gradient" color="success">
            <Icon sx={{ fontWeight: "bold" }}>edit</Icon> &nbsp;edit akses
          </MDButton>
        ),
        nip: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            86093872
          </MDTypography>
        ),
        nama: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            ANGGA RIZKI EKAYANA
          </MDTypography>
        ),
        password: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            YeJa2VsZTk8
          </MDTypography>
        ),
        akses: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        administrasiUsers: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
        master: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
        daftarFp: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
        nilaiFp: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
        report: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
      },
    ],
  };
}
