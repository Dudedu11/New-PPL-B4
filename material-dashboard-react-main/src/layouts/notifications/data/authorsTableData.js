import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

export default function data() {
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
