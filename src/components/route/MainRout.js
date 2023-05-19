import React from "react";
import { Route, Routes } from "react-router-dom";
import { Courses } from "../../pages/courses/Courses";
import { Anouncements } from "../../pages/anouncements/Anouncements";
import { Schedule } from "../../pages/schedule/Schedule";
import { Notification } from "../../pages/notification/Notification";
import { Students } from "../../pages/courses/layout/Students";
import { Rating } from "../../pages/courses/layout/Rating";
import { DetailPages } from "../../pages/courses/layout/DetailPages";
import { Material } from "../../pages/courses/layout/Material";
import { Waiting } from "../../pages/courses/layout/Waiting";
import { Submited } from "../../pages/courses/layout/Submited";
import { Link } from "../../pages/courses/layout/Link";
import { StudentDetail } from "../../pages/courses/layout/StudentDetail";


export const MainRout = () => {
  return (
    <>
      <Routes>
        
          <Route path="/courses" element={<Courses/>} >
            <Route path="materials" element={<Material/>}/>
            <Route path="materials/:id/details" element={<DetailPages/>}>
              <Route path="waiting" element={<Waiting/>}/>
              <Route path="submited" element={<Submited/>}/>
              <Route path="late" element={<Link/>}/>
              
            </Route>
             <Route path="students" element={<Students/>}>
             <Route path="students/:id/details" element={<StudentDetail/>}/>
             </Route>
            <Route path="ratings" element={<Rating/>}/>
          </Route>
          <Route path="/anouncements" element={<Anouncements/>} />
          <Route path="/notification" element={<Notification/>} />
          <Route path="/schedule" element={<Schedule />} />
       
      </Routes>
    </>
  );
};
