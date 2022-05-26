// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/notifications/data/authorsTableData";

function Tables() {
  const { columns, rows } = authorsTableData();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="secondary"
                borderRadius="lg"
                coloredShadow="secondary"
              >
                <MDTypography variant="h6" color="white">
                  Cari Fit & Proper
                </MDTypography>
              </MDBox>
              <MDBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={4} md={2} alignItems="center">
                    <MDTypography fontWeight="medium" fontSize="10pt">
                      Input NIP Peserta
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
                <Grid container spacing={3}>
                  <Grid item xs={6} md={3} alignItems="center">
                    <MDButton variant="gradient" color="info">
                      &nbsp;Cari Peserta
                    </MDButton>
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="secondary"
                borderRadius="lg"
                coloredShadow="secondary"
              >
                <MDTypography variant="h6" color="white">
                  Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
