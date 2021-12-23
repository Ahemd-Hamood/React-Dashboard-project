import React, { useEffect } from 'react'
import DashboardMenu from './components/DashboardMenu'
import NotificationMenu from './components/NotificationMenu'
import QuickAccessMenu from './components/QuickAccessMenu'
import "./SideNavbar.css"

export default function SideNavbar() {


  useEffect(() => {

    const ListItems = document.querySelectorAll(".sideNavbarListItem");

    ListItems.forEach(e => {
      e.addEventListener('click', el => {
        ListItems.forEach(e => e.classList.remove('active'));
        el.target.classList.toggle("active");
      })
    })

  }, [])

  return (
    <div className="sideNavbar-content-wrapper">
      <DashboardMenu />
      <QuickAccessMenu />
      <NotificationMenu />
    </div>
  )
}
