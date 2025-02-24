const sidebarClose =document.getElementById('sidebar-close')
const sidebarOpen =document.getElementById('sidebar-open')
const sidebarContent = document.getElementById('sidebar-content')

 sidebarClose.addEventListener('click', (e) => {
    sidebarContent.classList.add('hide')
 })

 sidebarOpen.addEventListener('click', (e) => {
    sidebarContent.classList.remove('hide')
 })
