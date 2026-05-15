import { Navigate } from 'react-router-dom'
import { useRole } from '../hooks/useRole'

export default function RoleProtectedRoute({
 children,
 allowedRole
}:{
 children:React.ReactNode
 allowedRole:string
}){

 const role=useRole()

 if(role!==allowedRole){
   return <Navigate to='/unauthorized'/>
 }

 return children
}