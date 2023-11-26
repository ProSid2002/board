import { FaCircleHalfStroke } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";
import { TbAlertSquareFilled } from "react-icons/tb";
import { FcLowPriority } from "react-icons/fc";
import { FcMediumPriority } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
import { BsFillDashCircleFill } from "react-icons/bs";

const constants = {
  User: "userId",
  Status: "status",
  Priority: "priority",
  Title: "title",
};

const priorities = {
  0: "No priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent",
};

export default function getGroupedAndOrderedData(state) {
  const data = state.tickets;
  if (!data) return;

  const grouping = constants[state.grouping];
  const ordering = constants[state.ordering];

  // Grouping Data
  const reducedData = data.reduce((r, a) => {
    r[a[grouping]] = r[a[grouping]] || [];
    r[a[grouping]].push(a);
    return r;
  }, Object.create(null));

  // Ordering Data
  Object.values(reducedData).forEach((arr) => {
    arr.sort((a, b) => {
      if (ordering === "priority") {
        return b.priority - a.priority;
      }

      if (a.title > b.title) return 1;
      else if (a.title < b.title) return -1;
      return 0;
    });
  });

  const categories = Object.keys(reducedData);

  categories.forEach((category, index, arr) => {
    if (category.slice(0, 4) === "usr-") {
      const userName = state.users.filter((user) => user.id === category)[0]
        .name;
      arr[index] = { category, title: userName };
      return;
    } else if (!isNaN(category)) {
      arr[index] = { category, title: priorities[category] };
      return;
    }
    arr[index] = { category, title: category };
  });

  return { categories, ...reducedData };
}

export const icons = {
  "In progress": <FaCircleHalfStroke size={20} color="#f5f542" />,
  Todo: <LuListTodo size={20} color="#4275f5" />,
  Backlog: <TbAlertSquareFilled size={20} color="#e01f1f" />,
  0: <BsFillDashCircleFill size={20} color="gray" />,
  1: <FcLowPriority size={20} />,
  2: <FcMediumPriority size={20} />,
  3: <FcHighPriority size={20} />,
  4: <FcHighPriority size={20} />,
};
