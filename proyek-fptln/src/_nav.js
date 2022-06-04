import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSearch,
  cilSpeedometer,
  cilStar,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Master',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Data Penguji',
        to: '/base/tables/Penguji',
        icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Data Peserta',
        to: '/base/tables/Peserta',
        icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
      },
      ],
  },
  {
    component: CNavGroup,
    name: 'Fit & Proper',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Pendaftaran Fit & Proper',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Pendaftaran Wawancara',
        to: '/forms/wawancara',
      },
      {
        component: CNavItem,
        name: 'Penilaian Fit & Proper',
        to: '/forms/validation',
      },
      {
        component: CNavItem,
        name: 'Penilaian Wawancara',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Report',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
      {
        component: CNavItem,
        name: 'Rekap Nilai Fit & Proper',
        to: '/icons/rekap-fitproper',
      },
      {
        component: CNavItem,
        name: 'Rekap Manual Nilai Fit & Proper',
        to: '/icons/rekap-manual',
      },
      {
        component: CNavItem,
        name: 'Cetak Nilai Fit & Proper',
        to: '/icons/cetak-fitproper',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Pencarian Fit Proper',
    to: '/pencarian-fitproper',
    icon: <CIcon icon={cilSearch} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Administrasi Users',
    to: '/base/tables/Admin',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
