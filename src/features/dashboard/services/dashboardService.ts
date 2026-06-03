import { supabase }
from "@/services/supabase/supabaseClient"

export async function getStudentEnrollments(
 studentId:string
){

 const { data, error } =
   await supabase
    .from("enrollments")
    .select("*")
    .eq("student_id", studentId)

 if(error) throw error

 return data
}

export async function getStudentClasses(
 studentId:string
){

 const { data, error } =
   await supabase
    .from("class_students")
    .select(`
      *,
      classes(*)
    `)
    .eq("student_id", studentId)

 if(error) throw error

 return data
}