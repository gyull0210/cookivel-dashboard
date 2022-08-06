import React, { useState, useMemo } from 'react'

export const SidebarContext = React.createContext()

export const SidebarProvider = ({children}) => {
    const [isSidebarMinimal, setIsSidebarMinimal] = useState(false);

    function toggleSidebar(){
        setIsSidebarMinimal(!isSidebarMinimal)
    }

    function closeSidebar(){
        setIsSidebarMinimal(false)
    }

    const value = useMemo(
        () => ({
            isSidebarMinimal,
            toggleSidebar,
            closeSidebar,
        }),
        [isSidebarMinimal]
    )

    return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}