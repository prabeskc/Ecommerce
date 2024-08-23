import {
   Home,
   LineChart,
   Package,
   Package2,
   ShoppingCart,
   Users,
 } from "lucide-react"
 import { Link } from "react-router-dom"
 
 
 export function SideBar() {
   return (
    <div className="fixed w-[240px] bg-white h-full">
    <div className="hidden border-r bg-muted/40 md:block h-full">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
             <Link to="/" className="flex items-center gap-2 font-semibold">
               <Package2 className="h-6 w-6" />
               <span className="">Acme Inc</span>
             </Link>
           </div>
           <div className="flex-1">
             <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
               <Link
                 to="/dashboard"
                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
               >
                 <Home className="h-4 w-4" />
                 Dashboard
               </Link>
               <Link
                 to="/dashboard/get-order"
                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
               >
                 <ShoppingCart className="h-4 w-4" />
                 Orders
                 {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                   6
                 </Badge> */}
               </Link>
               <Link
                 to="/dashboard/get-product"
                 className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
               >
                 <Package className="h-4 w-4" />
                 Products{" "}
               </Link>
               <Link
                 to="/dashboard/get-customers"
                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
               >
                 <Users className="h-4 w-4" />
                 Customers
               </Link>

               <Link
                 to="/dashboard/get-category"
                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
               >
                 <Home className="h-4 w-4" />
                 Category
               </Link>
             </nav>
           </div>
         </div>
       </div>
     </div>
   )
 }