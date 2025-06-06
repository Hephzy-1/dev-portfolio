// import React from "react";
// import { info } from "../../data/info";

// interface SkillProps {
//   skill: (typeof info)["about"]["skills"];
// }

// export default function Skill(props: SkillProps) {
//   const { skill: skill } = props;

//   return skill.length == 0 ? (
//     <div></div>
//   ) : (
//     <div className="flex flex-col space-y-4 lg:w-1/2 mx-4">
//       <h1 className="text-3xl font-bold">Skill</h1>
//       {skill.map((skills, index) => (
//         <div className="flex flex-col space-y-2 relative" key={index}>
//           <div className="flex items-center space-x-2">
//             <h2 className="text-xl font-semibold">{skills}</h2>
//           </div>

//           {index !== skill.length - 1 && (
//             <div className="absolute top-3.5 left-[0.655rem] h-full w-1 bg-secondary dark:bg-dk-secondary hover:bg-accent dark:hover:bg-dk-accent -z-10"></div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
