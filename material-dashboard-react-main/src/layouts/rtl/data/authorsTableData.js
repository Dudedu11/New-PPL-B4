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
  

  // const [penguji, setPenguji] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get(`${url}/api/pengujis?populate[pegawai][fields][0]=nama&populate[pegawai][fields][1]=nip&populate[pegawai][populate][0]=jabatan&populate[pegawai][populate][1]=grade&populate[pegawai][populate][2]=jenjang`);
  //     console.log(result.data.data);
  //     const arr = result.data.data;
  //     setPenguji(arr);
  //   };
  //   fetchData();
  // }, []);




  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  const [penguji, setPenguji] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${url}/api/pengujis?populate[pegawai][fields]
      [0]=nama&populate[pegawai][fields][1]=nip&populate[pegawai][populate]
      [0]=jabatan&populate[pegawai][populate][1]=grade&populate[pegawai][populate]
      [2]=jenjang`);
      console.log(result.data.data);
      const arr = result.data.data;
      setPenguji(arr);
    };
    fetchData();
  }, []);

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
            {item.attributes.pegawai.data.attributes.nama}
          </MDTypography>
        ),
        nip: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
         {item.attributes.pegawai.data.attributes.nip}
          </MDTypography>
        ),
        jabatan: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}
          </MDTypography>
        ),
        grade: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        {item.attributes.pegawai.data.attributes.grade.data.attributes.nama_grade}
          </MDTypography>
        ),
        jenjang: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           {item.attributes.pegawai.data.attributes.jenjang.data.attributes.nama_jenjang}
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
