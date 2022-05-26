import MDTypography from "components/MDTypography";

export default function data() {
  return {
    columns: [
      { Header: "no", accessor: "no", align: "center" },
      { Header: "nama", accessor: "nama", align: "center" },
      { Header: "nip", accessor: "nip", align: "center" },
      { Header: "jabatan", accessor: "jabatan", align: "center" },
      { Header: "grade", accessor: "grade", align: "center" },
      { Header: "jenjang", accessor: "jenjang", align: "center" },
    ],
    rows: [
      {
        no: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
        nama: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            BENNY M M MARBUN
          </MDTypography>
        ),
        nip: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            6086003Z
          </MDTypography>
        ),
        jabatan: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            KEPALA DIVISI NIAGA
          </MDTypography>
        ),
        grade: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            INT02-17
          </MDTypography>
        ),
        jenjang: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Manajer Atas
          </MDTypography>
        ),
      },
      {
        no: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        nama: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            SUHARTO
          </MDTypography>
        ),
        nip: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            6187001A
          </MDTypography>
        ),
        jabatan: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            KEPALA DIVISI PENGEMBANGAN SDM DAN TALENTA
          </MDTypography>
        ),
        grade: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            INT03-15
          </MDTypography>
        ),
        jenjang: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Manajer Atas
          </MDTypography>
        ),
      },
    ],
  };
}
