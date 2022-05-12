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

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Material Dashboard 2 React components
import MDInput from "components/MDInput";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Images
import masterCardLogo from "assets/images/logos/mastercard.png";
import visaLogo from "assets/images/logos/visa.png";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";
import { IconButton } from "@mui/material";

function PaymentMethod() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <Card id="delete-account">
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Tambah / Update Data Peserta
        </MDTypography>
        <MDButton variant="gradient" color="dark">
          &nbsp;Kembali
        </MDButton>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={4} md={1} alignItems="center">
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
