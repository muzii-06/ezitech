import React from "react";
import "./CoursesGrid.css";
import { FaChevronRight,FaArrowRight } from "react-icons/fa6";

const courses = [
  {
    title: "App Development",
    description:
      "We offer hands-on exp to develop cross-platform and native apps for iOS, Android, Windows, and Mac, using the latest tools. Learn to store data in the cloud or on-premises and implement custom backend logic",
    icon: "📱",
    bgColor: "#fde8e8",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Gain practical experience in Artificial Intelligence by building and deploying machine learning models. Learn key concepts, data processing, and model training to prepare for real-world AI challenges",
    icon: "🤖",
    bgColor: "#e7e7ff",
    badge: "EXCLUSIVE",
  },
  {
    title: "Web Development",
    description:
      "Exceptional web experiences engage, inspire, and drive results – all built on a foundation of strategic, innovative design",
    icon: "🌐",
    bgColor: "#ffecec",
  },
  {
    title: "Graphics Design",
    description:
      "your journey to becoming a skilled graphic designer. Wherever your creativity is headed, we provide the inspiration, tools, and support to bring vision into your life",
    icon: "🎨",
    bgColor: "#e5f3ff",
  },
  {
    title: "2d/3d Architecture",
    description:
      "We provide the skills and tools to help you bring your game ideas to life.",
    icon: "🏗️",
    bgColor: "#fff4dc",
  },
  {
    title: "Digital Marketing",
    description:
      "We provide the knowledge, tools, and support to help you drive impactful marketing strategies.",
    icon: "📊",
    bgColor: "#ecf8ff",
    badge: "NEW",
  },
];

const CoursesGrid = () => {
  return (
    <div className="courses-container col-lg-11 mx-auto">
      {courses.map((course, index) => (
        <div
          className={`course-card  ${index % 2 === 0 ? "up" : "down"}`}
          style={{ backgroundColor: course.bgColor }}
          key={index}
        >
          {course.badge && <span className="badge">{course.badge}</span>}
          <div className="icon">{course.icon}</div>
          <div className="d-flex align-items-center pb-3">

          <span className="fw-bold fs-4  ctitle">{course.title}</span>
          <FaChevronRight className="arrow"/>
          </div>
          <p className="csize">{course.description}</p>
          <div className="d-flex align-items-center gap-2 exp ">

          <span className="p-0 m-0 fw-bold">Explore Landing</span>
          <FaArrowRight size={20} className="p-0 m-0"/>

          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesGrid;
