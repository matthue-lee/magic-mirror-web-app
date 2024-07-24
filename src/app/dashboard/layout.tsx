'use client'
import React from 'react'
import { Sidebar, useSidebar, Overlay } from '@rewind-ui/core';
import { Button } from '@rewind-ui/core';
import { FaBook, FaBriefcase, FaEnvelopeOpen, FaKey, FaLifeRing, FaRocket, FaSlidersH, FaUser, FaUserShield } from "react-icons/fa";
import Image from 'next/image'
import '../styles/globals.css'


export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    const [expanded, setExpanded] = React.useState(true);
    const [mobile, setMobile] = React.useState(true);
    const sidebar = useSidebar();
  
    return (
      <section>
        {    <div className="relative flex flex-row w-full h-full min-h-[35rem]">
      <Sidebar
        onToggle={(state) => {
          setExpanded(state.expanded);
        }}
        className="absolute"
      >
        <Sidebar.Head>
          <Sidebar.Head.Logo>
            <Image src="/images/rewind.svg" width={48} height={48} alt="Rewind-UI" />
          </Sidebar.Head.Logo>
          <Sidebar.Head.Title>Rewind-UI</Sidebar.Head.Title>
          <Sidebar.Head.Toggle />
        </Sidebar.Head>

        <Sidebar.Nav>
          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Item icon={<FaRocket />} label="Dashboard" href="#" active />
          </Sidebar.Nav.Section>

          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Title>Management</Sidebar.Nav.Section.Title>
            <Sidebar.Nav.Section.Item icon={<FaBriefcase />} label="Clients" href="#" />
            <Sidebar.Nav.Section.Item icon={<FaUser />} label="Users" as="button">
              <Sidebar.Nav.Section isChild>
                <Sidebar.Nav.Section.Item
                  icon={<span className="w-1 h-1 rounded bg-transparent" />}
                  label="List all"
                  href="#"
                />
                <Sidebar.Nav.Section.Item
                  icon={<span className="w-1 h-1 rounded bg-transparent" />}
                  label="Add new"
                  href="#"
                />
                <Sidebar.Nav.Section.Item
                  icon={<span className="w-1 h-1 rounded bg-transparent" />}
                  label="Archived"
                  href="#"
                />
              </Sidebar.Nav.Section>
            </Sidebar.Nav.Section.Item>
            <Sidebar.Nav.Section.Item icon={<FaUserShield />} label="Roles" href="#" />
            <Sidebar.Nav.Section.Item icon={<FaKey />} label="Permissions" href="#" />
            <Sidebar.Nav.Section.Item icon={<FaSlidersH />} label="Settings" href="#" />
          </Sidebar.Nav.Section>

          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Title>Support</Sidebar.Nav.Section.Title>
            <Sidebar.Nav.Section.Item icon={<FaLifeRing />} label="Contact" href="#" />
            <Sidebar.Nav.Section.Item icon={<FaEnvelopeOpen />} label="Tickets" href="#" />
            <Sidebar.Separator />
            <Sidebar.Nav.Section.Item icon={<FaBook />} label="Documentation" href="#" />
          </Sidebar.Nav.Section>
        </Sidebar.Nav>

        <Sidebar.Footer>
          <div className="flex flex-col justify-center items-center text-sm">
            <span className="font-semibold">Rewind-UI</span>
            <span>version x.y.z</span>
          </div>
        </Sidebar.Footer>
      </Sidebar>

      <main
        className={`transition-all transform duration-100 text-slate-700 flex w-full flex-col items-center ${
          expanded ? 'md:ml-64' : 'md:ml-20'
        }`}
      >
      {mobile ? (
        <Overlay
          blur="none"
          onClick={() => {
            sidebar.toggleMobile();
          }}
          className="md:hidden z-40"
        />
      ) : null}


      <header className="flex flex-row sticky top-0 px-8 items-center justify-center bg-white border-b border-b-gray-100 w-full shadow-sm min-h-[4rem]">
        <span>Navbar</span>

        <Button
          onClick={() => {
            sidebar.toggleMobile();
          }}
          size="sm"
          color="white"
          icon
          className="ml-auto flex md:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <path d="M448 96c0-17.7-14.3-32-32-32H32C14.3 64 0 78.3 0 96s14.3 32 32 32H416c17.7 0 32-14.3 32-32zm0 320c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z" />
            <path
              className="opacity-50"
              d="M0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"
            />
          </svg>
        </Button>
      </header>
      <div className="w-full h-full p-8">
          {children}
        </div>

        <div className="flex sticky bottom-0 items-center bg-white w-full min-h-[4rem] px-8">
          <span>Footer</span>
        </div>


      </main>
    </div>} 

      </section>
    )
  }