//  {/* {i.subName == Tname1 ? ( */}
//  <ul
//  className={`absolute duration-300 w-[250px] content-start  bg-white  ml-[239px] border-t-[3px] border-red-600 drop-shadow-md ${
//    open1 ? "block" : "hidden"
//  } ${!lan ? "" : " text-right"}`}
//  onMouseOver={() => {
//    i.submneu && handeOOpen1(i.subName);
//  }}
//  onMouseLeave={() => handeUnpen1(" ")}
// >
//  {/* {i.submneu.map((i, x) => ( */}
//  <li
//    key={x}
//    className="p-3  border-b-[1px] border-[#ddd] text-[#a2a2a2] hover:text-vividRed "
//  >
//    <Link
//      onClick={() => handeUnpen1(" ")}
//      // to={i.href}
//    >
//      <p className="hover:translate-x-6 duration-300  ">
//        {/* {!lan ? i.subName : i.subNameA} */}
//        namesdsd
//      </p>
//    </Link>
//  </li>
//  {/* ))} */}
// </ul>
// {/* ) : null} */}

// {i.subName == Tname1 ? (
//     <ul
//       onMouseOver={() => {
//         i.submneu && handeOOpen1(i.subName);
//       }}
//       onMouseLeave={() => handeUnpen1(" ")}
//       className={`absolute duration-300  w-[250px] content-start bg-white   drop-shadow-md ml-[238px] border-t-[3px] border-red-600  ${
//         open1 ? "block" : "hidden"
//       }`}
//     >
//       {i.submneu.map((items, indexs) => (
//         <li
//           key={indexs}
//           className="p-3 flex  border-b-[1px] border-[#ddd] text-[#a2a2a2] hover:text-vividRed "
//           onMouseLeave={() => handeUnpen1(" ")}
//         >
//           <Link
//             onClick={() => handeUnpen1(" ")}
//             to={items.href}
//           >
//             <p
//               className="hover:translate-x-6 duration-300  "
//               onMouseOver={() => {
//                 i.submneu && handeOOpen1(i.subName);
//               }}
//             >
//               {!lan
//                 ? items.subName
//                 : items.subNameA}
//             </p>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   ) : null}
